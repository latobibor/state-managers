import { OvermindContext } from '../overmind-config.ts';
import { Building } from '../../shared-types/rooms.ts';
import { CheckList } from '../../shared-types/checklist-types.ts';

export function openBuilding({ state: { buildingManager } }: OvermindContext, buildingId: string) {
  if (!buildingManager.buildings[buildingId]) {
    throw new Error(`Room with the ID: [${buildingId}] was not found`);
  }

  // doc-note: Overmind with its immer dependency can be cumbersome when it deals with taking out one element from the state tree
  // and then "open it to modification". Therefore, it requires manually cloning the object or a totally different strategy.
  buildingManager.buildingBeingEdited = { ...buildingManager.buildings[buildingId] };
}

export function createSkeletonBuilding({ state: { buildingManager } }: OvermindContext) {
  buildingManager.buildingBeingEdited = undefined;

  buildingManager.buildingBeingEdited = {
    id: '',
    name: '',
    rooms: {},
  };
}

export function addBuilding({ state: { buildingManager } }: OvermindContext, building: Omit<Building, 'rooms'>) {
  buildingManager.buildings[building.id] = {
    id: building.id,
    name: building.name,
    rooms: {},
  };
}

export function removeBuilding({ state: { buildingManager } }: OvermindContext, buildingId: string) {
  if (!buildingManager.buildings[buildingId]) {
    throw new Error(`Building with the ID: [${buildingId}] was not found`);
  }

  delete buildingManager.buildings[buildingId];

  if (buildingManager.buildingBeingEdited && buildingManager.buildingBeingEdited.id === buildingId) {
    buildingManager.buildingBeingEdited = undefined;
  }
}

export function closeBuilding({ state: { buildingManager } }: OvermindContext) {
  buildingManager.buildingBeingEdited = undefined;
}

export function addChecklist({ state: { buildingManager } }: OvermindContext, buildingId: string) {
  if (!buildingManager.buildings[buildingId]) {
    throw new Error(`Building with the ID: [${buildingId}] was not found`);
  }

  buildingManager.buildings[buildingId].checklist = {
    id: 'placeholder',
    items: [],
  };
}

export function removeChecklist({ state: { buildingManager } }: OvermindContext, buildingId: string) {
  if (!buildingManager.buildings[buildingId]) {
    throw new Error(`Building with the ID: [${buildingId}] was not found`);
  }

  delete buildingManager.buildings[buildingId].checklist;
}

export function updateChecklist({ state: { buildingManager } }: OvermindContext, checklist: CheckList) {
  if (!buildingManager.buildingBeingEdited) {
    throw new Error(`A building must be open for editing to add a checklist to it`);
  }

  console.log('what the fuck', buildingManager.buildingBeingEdited, checklist);

  buildingManager.buildingBeingEdited.checklist = { ...checklist };
}
