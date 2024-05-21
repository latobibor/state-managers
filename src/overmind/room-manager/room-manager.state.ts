import { Building } from '../../shared-types/rooms.ts';

export type RoomManagerState = {
  openedBuildingId: string | null;
  buildings: {
    [id: string]: Building
  }
}

export const roomManagerState: RoomManagerState = {
  openedBuildingId: null,
  buildings: {}
}
