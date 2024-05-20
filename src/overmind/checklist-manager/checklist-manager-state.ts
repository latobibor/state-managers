import { CheckList } from '../../shared-types/checklist-types.ts';

export interface ChecklistManagerState {
  checklists: {
    [id: string]: CheckList;
  };
}

export const checklistManagerState: ChecklistManagerState = {
  checklists: {},
};
