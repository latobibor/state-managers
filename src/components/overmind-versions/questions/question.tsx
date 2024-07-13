import { CheckListItem, ListItemType } from '../../../shared-types/checklist-types';
import { FreeTextQuestion } from './free-text-question';
import { PhotoQuestion } from './photo-question';
import { YesNoQuestion } from './yes-no-question';

interface QuestionProps {
  question: CheckListItem;
}

export function Question({ question }: QuestionProps) {
  switch (question.type) {
    case ListItemType.YesNo:
      return <YesNoQuestion question={question} />;
    case ListItemType.FreeText:
      return <FreeTextQuestion question={question} />;
    case ListItemType.Photo:
      return <PhotoQuestion question={question} />;
  }
}
