import kebabCase from 'lodash.kebabcase';
import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';
import { FormEvent } from 'react';
import { ChecklistEditor } from './checklist-editor.tsx';

export function BuildingEditor() {
  const {
    buildingManager: { buildingBeingEdited },
  } = useOvermindState();
  const {
    buildingManager: { addBuilding, closeBuilding, removeBuilding, addChecklist },
  } = useOvermindActions();

  function addBuildingByPreventingDefault(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    // TODO: this is ugly and should be replaced by some standard library
    const formData = new FormData(event.target as any);

    const newId = kebabCase((formData.get('building-id') || '').toString());

    addBuilding({
      id: newId,
      name: (formData.get('building-name') || '').toString(),
    });

    closeBuilding();

    if (buildingBeingEdited && buildingBeingEdited.id !== '' && buildingBeingEdited.id !== newId) {
      removeBuilding(buildingBeingEdited.id);
    }
  }

  function addChecklistToBuilding() {
    if (!buildingBeingEdited?.id) {
      throw new Error('You cannot add checklist to a non-existent building!');
    }

    addChecklist(buildingBeingEdited?.id);
  }

  return (
    <div className="building-manager-building-form">
      <form onSubmit={addBuildingByPreventingDefault}>
        <fieldset>
          <legend>{buildingBeingEdited && buildingBeingEdited.id.length > 0 ? 'Update' : 'Add'} Building</legend>
          <label>
            ID:
            <input
              name="building-id"
              type="text"
              placeholder="Building ID"
              minLength={3}
              defaultValue={buildingBeingEdited && buildingBeingEdited.id}
            />
          </label>
          <label>
            Name:
            <small>A colloquial name you can easily remember</small>
            <input
              name="building-name"
              type="text"
              placeholder="Building name"
              minLength={3}
              defaultValue={buildingBeingEdited && buildingBeingEdited.name}
            />
          </label>
          <button type="submit">{buildingBeingEdited && buildingBeingEdited.id.length > 0 ? 'Update' : 'Add'} Building</button>
          <button type="reset" className="attention" onClick={closeBuilding}>
            Close
          </button>
        </fieldset>
      </form>
      <hr />
      {buildingBeingEdited && !buildingBeingEdited.checklist && (
        <button type="button" onClick={addChecklistToBuilding}>
          Add questionnaire
        </button>
      )}
      {buildingBeingEdited && buildingBeingEdited.checklist && <ChecklistEditor checklist={buildingBeingEdited.checklist} />}
    </div>
  );
}
