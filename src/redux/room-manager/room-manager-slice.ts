import { Building } from '../../shared-types/rooms.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RoomManagerReduxState = {
  currentBuildingId: string | null;
  buildings: {
    [id: string]: Building
  };
  currentRoomId: string | null;
}

export const initialReduxRoomManagerState: RoomManagerReduxState = {
  currentBuildingId: null,
  buildings: {},
  currentRoomId: null,
};

export const reduxRoomManagerSlice = createSlice({
  name: 'app',
  initialState: initialReduxRoomManagerState,
  reducers: {
    openBuilding: (state, { payload: buildingId }: PayloadAction<string>) => {
      if (!state.buildings[buildingId]) {
        throw new Error(`Room with the ID: [${buildingId}] was not found`);
      }

      state.currentBuildingId = buildingId;
    },
    addBuilding: (state) => {
      const randomNumber = Math.floor(Math.random() * 1000);

      const buildingId = `building-${randomNumber}`;

      state.buildings[buildingId] = {
        id: buildingId,
        name: '',
        rooms: {}
      };
    },
    removeBuilding: (state, { payload: buildingId }: PayloadAction<string>) => {
      if (!state.buildings[buildingId]) {
        throw new Error(`Building with the ID: [${buildingId}] was not found`);
      }

      delete state.buildings[buildingId];
    },
    addRoom: (state) => {
      const randomNumber = Math.floor(Math.random() * 1000);

      if (!state.currentBuildingId || !state.buildings[state.currentBuildingId]) {
        throw new Error('You should not be able to add a room without opening a building first');
      }

      const roomId = `room-${randomNumber}`;

      state.buildings[state.currentBuildingId].rooms[roomId] = {
        id: roomId,
        checklists: {}
      };
    },
    removeRoom(state, { payload: roomId }: PayloadAction<string>) {
      if (!state.currentBuildingId || !state.buildings[state.currentBuildingId]) {
        throw new Error('You should not be able to delete a room without opening a building first');
      }

      delete state.buildings[roomId];
    },
    selectRoom: (state, { payload: roomId }: PayloadAction<string>) => {
      state.currentRoomId = roomId;
    }
  }
});

export const {
  openBuilding,
  addBuilding,
  removeBuilding,
  addRoom,
  removeRoom,
  selectRoom
} = reduxRoomManagerSlice.actions;
