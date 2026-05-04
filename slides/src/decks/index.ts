import type { DeckMeta } from '@/presenter/SlideDeck';
import { buoi01 } from './buoi-01';
import { buoi02 } from './buoi-02';

export const decks: DeckMeta[] = [
  buoi01,
  buoi02,
  // buoi-03 ... buoi-12 sẽ thêm dần
];

export const decksBySlug: Record<string, DeckMeta> = Object.fromEntries(
  decks.map((d) => [`buoi-${String(d.number).padStart(2, '0')}`, d])
);
