import { OvermindContext } from '../overmind-config.ts';
import { Building, Room } from '../../shared-types/rooms.ts';

export function openBuilding({ state: { roomManager } }: OvermindContext, buildingId: string) {
  if (!roomManager.buildings[buildingId]) {
    throw new Error(`Room with the ID: [${buildingId}] was not found`);
  }

  // doc-note: Overmind with its immer dependency can be cumbersome when it deals with taking out one element from the state tree
  // and then "open it to modification". Therefore, it requires manually cloning the object or a totally different strategy.
  roomManager.buildingBeingEdited = { ...roomManager.buildings[buildingId] };
}

export function createSkeletonBuilding({ state: { roomManager } }: OvermindContext) {
  roomManager.buildingBeingEdited = undefined;

  roomManager.buildingBeingEdited = {
    id: '',
    name: '',
    rooms: {}
  };
}

export function addBuilding({ state: { roomManager } }: OvermindContext, building: Omit<Building, 'rooms'>) {
  roomManager.buildings[building.id] = {
    id: building.id,
    name: building.name,
    rooms: {},
  };
}

export function removeBuilding({ state: { roomManager } }: OvermindContext, buildingId: string) {
  if (!roomManager.buildings[buildingId]) {
    throw new Error(`Building with the ID: [${buildingId}] was not found`);
  }

  delete roomManager.buildings[buildingId];

  if (roomManager.buildingBeingEdited && roomManager.buildingBeingEdited.id === buildingId) {
    roomManager.buildingBeingEdited = undefined;
  }
}

export function closeBuilding({ state: { roomManager } }: OvermindContext) {
  roomManager.buildingBeingEdited = undefined;
}

export function createSkeletonRoom({ state: { roomManager } }: OvermindContext) {
  roomManager.roomBeingEdited = {
    id: '',
    checklists: {}
  };
}

export function addRoom({ state: { roomManager } }: OvermindContext, room: Room) {
  if (!roomManager.buildingBeingEdited) {
    throw new Error('You cannot add room if no building was selected!');
  }

  roomManager.buildings[roomManager.buildingBeingEdited.id].rooms[room.id] = room;
}

export function removeRoom({ state: { roomManager } }: OvermindContext, roomId: string) {
  if (!roomManager.buildingBeingEdited) {
    throw new Error('You should not be able to delete a room without opening a building first');
  }

  delete roomManager.buildings[roomManager.buildingBeingEdited.id].rooms[roomId];
}

export function selectRoom({ state: { roomManager } }: OvermindContext, roomId: string) {
  if (!roomManager.buildingBeingEdited) {
    throw new Error('You should not be able to select a room without having an open building first');
  }

  roomManager.roomBeingEdited = roomManager.buildingBeingEdited.rooms[roomId];
}

export function closeRoom({ state: { roomManager } }: OvermindContext) {
  roomManager.roomBeingEdited = undefined;
}
