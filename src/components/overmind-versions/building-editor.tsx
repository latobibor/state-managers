import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';
import { FormEvent } from 'react';

export function BuildingEditor() {
  // TODO: there should be a distinction between building edited and an open one that we can add rooms to
  // or we should be doing adding rooms here; or we should open another route when a building is open
  const { roomManager: { currentBuilding } } = useOvermindState();
  const { roomManager: { addBuilding } } = useOvermindActions();

  function addBuildingByPreventingDefault(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    // TODO: this is ugly and should be replaced by some standard library
    const formData = new FormData(event.target as any);

    addBuilding({
      id: (formData.get('building-id') || '').toString(),
      name: (formData.get('building-name') || '').toString()
    });
  }

  return <div className="building-manager-building-form">
    <form onSubmit={addBuildingByPreventingDefault}>
      <fieldset>
        <legend>Edit building</legend>
        <label>ID:
          <input name="building-id" type="text" placeholder="Building ID"
                 value={currentBuilding && currentBuilding.id}/>
        </label>
        <label>Name:
          <small>A colloquial name you can easily remember</small>
          <input name="building-name" type="text" placeholder="Building name"
                 value={currentBuilding && currentBuilding.name}/>
        </label>
        <button type="submit">Add Building</button>
      </fieldset>
    </form>
  </div>;
}