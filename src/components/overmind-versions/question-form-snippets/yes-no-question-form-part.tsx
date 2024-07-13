import { TranslatableLabel } from '../../../shared-types/checklist-types';

interface YesNoQuestionFormPartProps {
  defaultLabel: TranslatableLabel;
}

export function YesNoQuestionFormPart({ defaultLabel }: YesNoQuestionFormPartProps) {
  return (
    <label>
      Label for the question:
      <input
        name="question-label"
        type="text"
        placeholder="e.g. Was there soap in the bathroom?"
        minLength={3}
        defaultValue={(defaultLabel && defaultLabel.en) || ''}
      />
    </label>
  );
}
