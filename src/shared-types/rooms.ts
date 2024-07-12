import { CheckList } from './checklist-types.ts';

export type Building = {
  id: string;
  name: string;
  rooms: { [id: string]: Room };
  checklist?: CheckList;
};

export enum RoomType {
  Bedroom = 'Bedroom',
  CommunalArea = 'Communal area',
  Bathroom = 'Bathroom',
  Kitchen = 'Kitchen',
  ServiceRoom = 'Service room',
}

export type Room = {
  id: string;
  checklist?: CheckList;
  type: RoomType;
};
