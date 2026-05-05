import type { DeckMeta } from '@/presenter/SlideDeck';
import { buoi01 } from './buoi-01';
import { buoi02 } from './buoi-02';
import { buoi03 } from './buoi-03';
import { buoi04 } from './buoi-04';
import { buoi05 } from './buoi-05';
import { buoi06 } from './buoi-06';
import { buoi07 } from './buoi-07';
import { buoi08 } from './buoi-08';
import { buoi09 } from './buoi-09';

export const decks: DeckMeta[] = [
  buoi01,
  buoi02,
  buoi03,
  buoi04,
  buoi05,
  buoi06,
  buoi07,
  buoi08,
  buoi09,
];

export const decksBySlug: Record<string, DeckMeta> = Object.fromEntries(
  decks.map((d) => [`buoi-${String(d.number).padStart(2, '0')}`, d])
);
