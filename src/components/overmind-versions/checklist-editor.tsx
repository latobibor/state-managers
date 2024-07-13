import kebabCase from 'lodash.kebabcase';
import { FormEvent, useState } from 'react';
import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config';
import { CheckList, CheckListItem, FreeTextItem, ListItemType } from '../../shared-types/checklist-types';
import { Question } from './questions/question';
import { QuestionSpecificFormParts } from './question-form-snippets/question-specific-form-parts';

interface ChecklistEditorProps {
  checklist: CheckList;
}

const defaultQuestion: FreeTextItem = {
  id: '',
  type: ListItemType.FreeText,
  label: {
    en: '',
  },
  maxLength: 500,
};

export function ChecklistEditor({ checklist }: ChecklistEditorProps) {
  const [currentQuestion, setCurrentQuestion] = useState<CheckListItem>(defaultQuestion);

  const {} = useOvermindState();
  const {
    buildingManager: { updateChecklist },
  } = useOvermindActions();

  function addQuestionWhilePreventingDefault(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    // TODO: this is ugly and should be replaced by some standard library
    const formData = new FormData(event.target as any);

    const newId = kebabCase((formData.get('question-id') || '').toString());
    const questionTypeAsString = (formData.get('question-type') || '').toString();

    const foundType = Object.values(ListItemType).find((value) => value === questionTypeAsString);

    if (!foundType) {
      throw new Error(
        `Ay ay, ${questionTypeAsString} was not found in ListItemType enum containing [${Object.values(ListItemType).join(',')}]!`,
      );
    }

    const newChecklistArray = [...checklist.items];

    switch (foundType) {
      case ListItemType.FreeText:
        newChecklistArray.push({
          id: newId,
          type: foundType,
          label: { en: formData.get('question-label')?.toString() || '' },
          maxLength: Number(formData.get('question-max-length')) || 200,
        });
        break;
      case ListItemType.Photo:
        newChecklistArray.push({
          id: newId,
          type: foundType,
          label: { en: formData.get('question-label')?.toString() || '' },
          maxNumber: Number(formData.get('question-max-photos')) || 200,
        });
        break;
      case ListItemType.YesNo:
        newChecklistArray.push({
          id: newId,
          type: foundType,
          label: { en: formData.get('question-label')?.toString() || '' },
        });
        break;
      default:
        throw new Error('Not implemented yet!');
    }

    updateChecklist({ id: checklist.id, items: newChecklistArray });
  }

  function changeQuestionType(event: FormEvent<HTMLSelectElement> & { target: HTMLSelectElement }) {
    if (!currentQuestion) {
      throw new Error('There should be a question created already');
    }

    const newQuestionType = event.target.value as ListItemType;

    if (currentQuestion?.type !== newQuestionType) {
      switch (newQuestionType) {
        case ListItemType.YesNo:
          setCurrentQuestion({
            ...currentQuestion,
            type: ListItemType.YesNo,
          });
          return;
        case ListItemType.FreeText:
          setCurrentQuestion({
            ...currentQuestion,
            type: ListItemType.FreeText,
            maxLength: 500,
          });
          return;
        case ListItemType.Photo:
          setCurrentQuestion({
            ...currentQuestion,
            type: ListItemType.Photo,
            maxNumber: 10,
          });
      }
    }
  }

  function closeQuestion() {
    setCurrentQuestion(defaultQuestion);
  }

  return (
    <div className="checklist-form">
      <form onSubmit={addQuestionWhilePreventingDefault}>
        <fieldset>
          <legend>Questions of checklist</legend>
          <label>
            ID:
            <input
              name="question-id"
              type="text"
              placeholder="Question ID"
              minLength={3}
              defaultValue={(currentQuestion && currentQuestion.id) || ''}
            />
          </label>
          <select name="question-type" defaultValue={currentQuestion?.type} onChange={changeQuestionType}>
            {Object.entries(ListItemType).map(([key, value]) => (
              <option key={key}>{value}</option>
            ))}
          </select>
          <QuestionSpecificFormParts question={currentQuestion} />

          <button type="submit">{currentQuestion && currentQuestion.id.length > 0 ? 'Update' : 'Add'} Question</button>
          <button type="reset" className="attention" onClick={closeQuestion}>
            Close
          </button>
        </fieldset>
      </form>
      <ul>
        {checklist &&
          checklist.items.map((question) => (
            <li key={question.id}>
              <Question question={question} />
            </li>
          ))}
      </ul>
    </div>
  );
}
