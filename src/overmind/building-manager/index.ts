import { buildingManagerState } from './building-manager.state.ts';
import * as buildingManagerActions from './building-manager.actions.ts';

export const buildingManagerConfig = {
  state: buildingManagerState,
  actions: buildingManagerActions
};
