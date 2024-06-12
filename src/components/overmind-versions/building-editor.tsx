import kebabCase from 'lodash.kebabcase';
import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';
import { FormEvent } from 'react';
import { BigPlusButton } from '../store-less/big-plus-button.tsx';

export function BuildingEditor() {
  const { roomManager: { buildingBeingEdited } } = useOvermindState();
  const { roomManager: { addBuilding, createSkeletonBuilding, closeBuilding, removeBuilding } } = useOvermindActions();

  console.log('BuildingEditor', buildingBeingEdited);

  const isEditorOpen = !!buildingBeingEdited;

  function addBuildingByPreventingDefault(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    // TODO: this is ugly and should be replaced by some standard library
    const formData = new FormData(event.target as any);

    const newId = kebabCase((formData.get('building-id') || '').toString());

    addBuilding({
      id: newId,
      name: (formData.get('building-name') || '').toString()
    });

    closeBuilding();

    if (buildingBeingEdited && buildingBeingEdited?.id !== newId) {
      removeBuilding(buildingBeingEdited.id);
    }
  }

  return <div className="building-manager-building-form">
    {!isEditorOpen && <BigPlusButton onClick={createSkeletonBuilding}/>}
    {isEditorOpen && <form onSubmit={addBuildingByPreventingDefault}>
      <fieldset>
        <legend>Edit building</legend>
        <label>ID:
          <input name="building-id" type="text" placeholder="Building ID"
                 defaultValue={buildingBeingEdited && buildingBeingEdited.id}/>
        </label>
        <label>Name:
          <small>A colloquial name you can easily remember</small>
          <input name="building-name" type="text" placeholder="Building name"
                 defaultValue={buildingBeingEdited && buildingBeingEdited.name}/>
        </label>
        <button type="submit">{buildingBeingEdited && buildingBeingEdited.id.length > 0 ? 'Edit' : 'Add'} Building
        </button>
      </fieldset>
    </form>}
  </div>;
}