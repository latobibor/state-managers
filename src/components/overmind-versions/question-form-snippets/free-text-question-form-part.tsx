import { TranslatableLabel } from '../../../shared-types/checklist-types';

interface FreeTextQuestionFormPartProps {
  defaultLabel: TranslatableLabel;
  defaultMaxLength: number;
}

export function FreeTextQuestionFormPart({ defaultLabel, defaultMaxLength }: FreeTextQuestionFormPartProps) {
  return (
    <>
      <label>
        Label for the question:
        <input
          name="question-label"
          type="text"
          placeholder="What items were found?"
          minLength={3}
          defaultValue={(defaultLabel && defaultLabel.en) || ''}
        />
      </label>
      <label>
        Maximum length of free text answer:
        <input
          name="question-max-length"
          type="text"
          placeholder="e.g. 200"
          minLength={3}
          pattern="[0-9]+"
          defaultValue={defaultMaxLength || 100}
        />
      </label>
    </>
  );
}
