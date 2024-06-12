import { OvermindContext } from '../overmind-config.ts';
import { Building } from '../../shared-types/rooms.ts';

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

export function addRoom({ state: { roomManager } }: OvermindContext) {
  const randomNumber = Math.floor(Math.random() * 1000);

  if (!roomManager.buildingBeingEdited) {
    throw new Error('You should not be able to add a room without opening a building first');
  }

  const roomId = `room-${randomNumber}`;

  roomManager.buildingBeingEdited.rooms[roomId] = {
    id: roomId,
    checklists: {}
  };
}

export function removeRoom({ state: { roomManager } }: OvermindContext, roomId: string) {
  if (!roomManager.buildingBeingEdited) {
    throw new Error('You should not be able to delete a room without opening a building first');
  }

  delete roomManager.buildings[roomId];
}

export function selectRoom({ state: { roomManager } }: OvermindContext, roomId: string) {
  roomManager.currentRoomId = roomId;
}
