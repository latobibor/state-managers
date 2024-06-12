import { CheckListItem } from './checklist-types.ts';

export type Building = {
  id: string;
  name: string;
  rooms: { [id: string]: Room };
}

export type Room = {
  id: string;
  checklists: { [id: string]: CheckListItem };
}
