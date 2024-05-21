import { OvermindContext } from '../overmind-config.ts';

export function openBuilding({ state: { roomManager } }: OvermindContext, buildingId: string) {
  if (!roomManager.buildings[buildingId]) {
    throw new Error(`Room with the ID: [${buildingId}] was not found`);
  }

  roomManager.currentBuildingId = buildingId;
}

export function addBuilding({ state: { roomManager } }: OvermindContext) {
  const randomNumber = Math.floor(Math.random() * 1000);

  const buildingId = `building-${randomNumber}`;

  roomManager.buildings[buildingId] = {
    id: buildingId,
    rooms: {}
  };
}

export function removeBuilding({ state: { roomManager } }: OvermindContext, buildingId: string) {
  if (!roomManager.buildings[buildingId]) {
    throw new Error(`Building with the ID: [${buildingId}] was not found`);
  }

  delete roomManager.buildings[buildingId];
}

export function addRoom({ state: { roomManager } }: OvermindContext) {
  const randomNumber = Math.floor(Math.random() * 1000);

  if (!roomManager.currentBuilding) {
    throw new Error('You should not be able to add a room without opening a building first');
  }

  const roomId =  `room-${randomNumber}`

  roomManager.currentBuilding.rooms[roomId] = {
    id: roomId,
    checklists: { }
  };
}

export function removeRoom({ state: { roomManager } }: OvermindContext, roomId: string) {
  if (!roomManager.currentBuilding) {
    throw new Error('You should not be able to delete a room without opening a building first');
  }

  delete roomManager.buildings[roomId];
}

export function selectRoom({ state: { roomManager } }: OvermindContext, roomId: string) {
  roomManager.currentRoomId = roomId;
}
