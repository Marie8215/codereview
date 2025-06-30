type Next<TKey> = TKey | undefined;

interface ListNode<TKey, TValue> {
  value: TValue;
  next?: Next<TKey>;
}

export class LinkedMap<TKey, TValue> {
  private map = new Map<TKey, ListNode<TKey, TValue>>();
  private headKey?: TKey;
  private tailKey?: TKey;

  constructor(items?: TValue[], keySelector?: (item: TValue) => TKey) {
    if (items && keySelector) {
      for (const item of items) {
        const key = keySelector(item);
        this.set(key, item);
      }
      this.makeCircular();
    }
  }

  set(key: TKey, value: TValue): void {
    const node: ListNode<TKey, TValue> = { value };

    if (this.headKey === undefined) {
      this.headKey = key;
      this.tailKey = key;
    } else if (this.tailKey !== undefined) {
      const prev = this.map.get(this.tailKey);
      if (prev) {
        prev.next = key;
        this.map.set(this.tailKey, prev);
      }
      this.tailKey = key;
    }

    this.map.set(key, node);
  }

  get(key: TKey): ListNode<TKey, TValue> | undefined {
    return this.map.get(key);
  }

  getHead(): ListNode<TKey, TValue> | undefined {
    return this.headKey ? this.map.get(this.headKey) : undefined;
  }

  getNextN(startKey: TKey, n: number): ListNode<TKey, TValue>[] {
    const result: ListNode<TKey, TValue>[] = [];
    let currentKey = this.map.get(startKey)?.next;
    const visited = new Set<TKey>([startKey]);

    while (
      result.length < n &&
      currentKey !== undefined &&
      !visited.has(currentKey)
    ) {
      visited.add(currentKey);
      const node = this.map.get(currentKey);
      if (!node) break;
      result.push(node);
      currentKey = node.next;
    }

    return result;
  }

  *iterate(limit?: number): Generator<[TKey, ListNode<TKey, TValue>]> {
    let currentKey = this.headKey;
    const visited = new Set<TKey>();
    let count = 0;

    while (
      currentKey !== undefined &&
      !visited.has(currentKey) &&
      (limit === undefined || count < limit)
    ) {
      const node = this.map.get(currentKey);
      if (!node) break;

      yield [currentKey, node];
      visited.add(currentKey);
      currentKey = node.next;
      count++;
    }
  }

  private makeCircular() {
    if (
      this.headKey !== undefined &&
      this.tailKey !== undefined &&
      this.headKey !== this.tailKey
    ) {
      const tailNode = this.map.get(this.tailKey);
      if (tailNode) {
        tailNode.next = this.headKey;
        this.map.set(this.tailKey, tailNode);
      }
    }
  }
}
