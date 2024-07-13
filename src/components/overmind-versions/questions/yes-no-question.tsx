import { YesNoListItem } from '../../../shared-types/checklist-types';

interface YesNoQuestionProps {
  question: YesNoListItem;
}

export function YesNoQuestion({ question }: YesNoQuestionProps) {
  return (
    <div>
      <strong>{question.type}</strong>
      <hr />
      Label: ${question.label.en}
    </div>
  );
}
