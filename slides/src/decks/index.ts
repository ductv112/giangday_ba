import type { DeckMeta } from '@/presenter/SlideDeck';
import { buoi01 } from './buoi-01';

export const decks: DeckMeta[] = [
  buoi01,
  // buoi-02 ... buoi-12 sẽ thêm sau khi pilot Buổi 1 được duyệt
];

export const decksBySlug: Record<string, DeckMeta> = Object.fromEntries(
  decks.map((d) => [`buoi-${String(d.number).padStart(2, '0')}`, d])
);
