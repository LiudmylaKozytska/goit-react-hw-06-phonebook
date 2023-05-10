import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      console.log(state);
      console.log(state.contacts);
      state.contacts.push({ ...action.payload, id: nanoid() });
    },

    deleteContact: (state, action) => {
      state = state.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: [],
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
