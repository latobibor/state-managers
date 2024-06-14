import kebabCase from 'lodash.kebabcase';
import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';
import { FormEvent } from 'react';

export function RoomEditor() {
  const { buildingManager: { buildingBeingEdited }, roomManager: { roomBeingEdited } } = useOvermindState();
  const { roomManager: { addRoom, closeRoom, removeRoom } } = useOvermindActions();

  function addRoomWhilePreventingDefault(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    // TODO: this is ugly and should be replaced by some standard library
    const formData = new FormData(event.target as any);

    const newId = kebabCase((formData.get('room-id') || '').toString());

    addRoom({
      id: newId,
      checklists: {}
    });

    closeRoom();

    if (roomBeingEdited && roomBeingEdited?.id !== newId) {
      removeRoom(roomBeingEdited.id);
    }
  }

  return <div className="building-manager-building-form">
    <form onSubmit={addRoomWhilePreventingDefault}>
      <fieldset>
        <legend>{roomBeingEdited && roomBeingEdited.id.length > 0 ? 'Update' : 'Add'} room
          to {buildingBeingEdited?.name}</legend>
        <label>ID:
          <input name="room-id"
                 type="text"
                 placeholder="Room ID"
                 minLength={3}
                 defaultValue={roomBeingEdited && roomBeingEdited.id}
          />
        </label>
        <button type="submit">{roomBeingEdited && roomBeingEdited.id.length > 0 ? 'Update' : 'Add'} Room
        </button>
        <button type="reset" className="attention" onClick={closeRoom}>Close</button>
      </fieldset>
    </form>
  </div>;
}