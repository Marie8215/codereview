
export interface DropdownItem<T> {
  id: string;
  title: string;
  count?: number;
  data: T;
}
