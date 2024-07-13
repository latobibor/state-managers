import { PhotoItem } from '../../../shared-types/checklist-types';

interface PhotoQuestionProps {
  question: PhotoItem;
}

export function PhotoQuestion({ question }: PhotoQuestionProps) {
  return (
    <div>
      <strong>{question.type}</strong>
      <hr />
      Label: ${question.label.en}
      <br />
      Maximum number of photos allowed: ${question.maxNumber}
    </div>
  );
}
