import { FreeTextItem } from '../../../shared-types/checklist-types';

interface FreeTextQuestionProps {
  question: FreeTextItem;
}

export function FreeTextQuestion({ question }: FreeTextQuestionProps) {
  return (
    <div>
      <strong>{question.type}</strong>
      <hr />
      Label: ${question.label.en}
      <br />
      Maximum length: ${question.maxLength}
    </div>
  );
}
