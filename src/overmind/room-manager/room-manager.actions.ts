import { OvermindContext } from '../overmind-config.ts';
import { Room } from '../../shared-types/rooms.ts';

export function createSkeletonRoom({ state: { roomManager } }: OvermindContext) {
  roomManager.roomBeingEdited = {
    id: '',
    checklists: {}
  };
}

export function addRoom({ state: { buildingManager } }: OvermindContext, room: Room) {
  if (!buildingManager.buildingBeingEdited) {
    throw new Error('You cannot add room if no building was selected!');
  }

  buildingManager.buildings[buildingManager.buildingBeingEdited.id].rooms[room.id] = room;
}

export function removeRoom({ state: { buildingManager } }: OvermindContext, roomId: string) {
  if (!buildingManager.buildingBeingEdited) {
    throw new Error('You should not be able to delete a room without opening a building first');
  }
  
  delete buildingManager.buildings[buildingManager.buildingBeingEdited.id].rooms[roomId];
}

export function selectRoom({ state: { buildingManager, roomManager } }: OvermindContext, roomId: string) {
  if (!buildingManager.buildingBeingEdited) {
    throw new Error('You should not be able to select a room without having an open building first');
  }

  roomManager.roomBeingEdited = buildingManager.buildingBeingEdited.rooms[roomId];
}

export function closeRoom({ state: { roomManager } }: OvermindContext) {
  roomManager.roomBeingEdited = undefined;
}
