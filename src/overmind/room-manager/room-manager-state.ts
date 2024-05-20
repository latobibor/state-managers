import { Building } from '../../shared-types/rooms.ts';

export type RoomManagerState = {
  buildings: {
    [id: string]: Building
  }
}

export const roomManagerState: RoomManagerState = {
  buildings: {}
}
