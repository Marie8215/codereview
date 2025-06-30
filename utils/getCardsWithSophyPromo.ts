import { JobCardDataItem } from "@/components/Card/Card";

export function getCardsWithSophyPromo(data: JobCardDataItem[], isDesktop: boolean) {
  const cards = [...data];
  let result: (JobCardDataItem | "sophy")[] = [...cards];

  if (isDesktop) {
    if (cards.length < 3) {
      return cards;
    }
    if (cards.length === 3) {
      result = [cards[0], "sophy", cards[1], cards[2]];
    } else if (cards.length > 4) {
      result = [...cards];
      result.splice(3, 0, "sophy");
    }
  } else {
    if (cards.length <= 2) {
      return cards;
    }
    if (cards.length === 3) {
      result = [cards[0], "sophy", cards[1], cards[2]];
    } else if (cards.length === 4) {
      result = [cards[0], cards[1], "sophy", cards[2], cards[3]];
    } else if (cards.length > 4) {
      result = [cards[0], cards[1], "sophy", ...cards.slice(2)];
    }
  }
  return result;
}