import { TranslatableLabel } from '../../../shared-types/checklist-types';

interface PhotoQuestionFormPartProps {
  defaultLabel: TranslatableLabel;
  defaultMaxPhotos: number;
}

export function PhotoQuestionFormPart({ defaultLabel, defaultMaxPhotos }: PhotoQuestionFormPartProps) {
  return (
    <>
      <label>
        Label for the question:
        <input
          name="question-label"
          type="text"
          placeholder="Take a photo of the broken items in the room!"
          minLength={3}
          defaultValue={(defaultLabel && defaultLabel.en) || ''}
        />
      </label>
      <label>
        Maximum length of free text answer:
        <input
          name="question-max-photos"
          type="text"
          placeholder="e.g. 5"
          minLength={3}
          pattern="[0-9]+"
          defaultValue={defaultMaxPhotos || 10}
        />
      </label>
    </>
  );
}
