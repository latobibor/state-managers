import { CheckListItem, ListItemType } from '../../../shared-types/checklist-types';
import { FreeTextQuestionFormPart } from './free-text-question-form-part';
import { PhotoQuestionFormPart } from './photo-question-form-part';
import { YesNoQuestionFormPart } from './yes-no-question-form-part';

interface QuestionSpecificFormPartsProps {
  question: CheckListItem;
}

export function QuestionSpecificFormParts({ question }: QuestionSpecificFormPartsProps) {
  switch (question.type) {
    case ListItemType.YesNo:
      return <YesNoQuestionFormPart defaultLabel={question.label} />;
    case ListItemType.FreeText:
      return <FreeTextQuestionFormPart defaultLabel={question.label} defaultMaxLength={question.maxLength} />;
    case ListItemType.Photo:
      return <PhotoQuestionFormPart defaultLabel={question.label} defaultMaxPhotos={question.maxNumber} />;
  }
}
