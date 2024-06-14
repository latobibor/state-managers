import { createOvermind, IContext } from 'overmind';
import { createActionsHook, createEffectsHook, createReactionHook, createStateHook } from 'overmind-react';
import { namespaced } from 'overmind/config';

import { appConfig } from './app';
import { checkListEditorConfig } from './checklist-editor';
import { checklistManagerConfig } from './checklist-manager';
import { roomManagerConfig } from './room-manager';
import { buildingManagerConfig } from './building-manager';

export const config = namespaced({
  app: appConfig,
  checklistEditor: checkListEditorConfig,
  checklistManager: checklistManagerConfig,
  buildingManager: buildingManagerConfig,
  roomManager: roomManagerConfig,
});

export type OvermindContext = IContext<typeof config>;

export const overmind = createOvermind(config);
export const useOvermindState = createStateHook<OvermindContext>();
export const useOvermindActions = createActionsHook<OvermindContext>();
export const useOvermindEffects = createEffectsHook<OvermindContext>();
export const useOvermindReactions = createReactionHook<OvermindContext>();
