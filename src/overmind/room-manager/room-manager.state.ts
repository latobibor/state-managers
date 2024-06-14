import { Building, Room } from '../../shared-types/rooms.ts';

export type RoomManagerState = {
  buildingBeingEdited?: Building;
  roomBeingEdited?: Room;
  buildings: {
    [id: string]: Building
  };
  currentRoomId: string | null;
}

export const roomManagerState: RoomManagerState = {
  buildingBeingEdited: undefined,
  roomBeingEdited: undefined,
  buildings: {},
  currentRoomId: null,
};
