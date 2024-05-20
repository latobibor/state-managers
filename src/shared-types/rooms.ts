import { CheckListItem } from './checklist-types.ts';

export type Building = {
  id: string;
  rooms: Room[]
}

export type Room = {
  id: string;
  checklists: CheckListItem[];
}
