import { Building } from '../../shared-types/rooms.ts';

export type RoomManagerState = {
  openedBuilding: Building | null;
  buildings: {
    [id: string]: Building
  }
}

export const roomManagerState: RoomManagerState = {
  openedBuilding: null,
  buildings: {}
}
