import { OvermindContext } from '../overmind-config.ts';

export function openBuilding({ state: { roomManager } }: OvermindContext, buildingId: string) {
  if (!roomManager.buildings[buildingId]) {
    throw new Error(`Room with the ID: [${buildingId}] was not found`);
  }

  roomManager.openedBuilding = roomManager.buildings[buildingId];
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
