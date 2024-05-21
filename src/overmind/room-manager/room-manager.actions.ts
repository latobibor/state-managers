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
    rooms: [{
      id: 'just-a-placeholder-id',
      checklists: []
    }]
  };
}

export function addRoom({ state: { roomManager } }: OvermindContext) {
  if (!roomManager.currentBuilding) {
    throw new Error('You should not be able to add room without opening a building first');
  }

  roomManager.currentBuilding.rooms.push({
    id: 'just-a-placeholder-id-for-room',
    checklists: []
  })
}
