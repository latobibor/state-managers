import { CheckListItem } from '../../shared-types/checklist-types.ts';

export interface ChecklistEditorState {
  openedChecklistId: string | null;
  // overmind favors using objects for handling variable length data over arrays
  checklistItems: {
    [id: string]: CheckListItem;
  }
}

export const checklistEditorState: ChecklistEditorState = {
  openedChecklistId: null,
  checklistItems: {}
};
