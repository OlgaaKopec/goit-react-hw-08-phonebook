import { addContact, deleteContact, setFilter, fetchContacts } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactsReducer = createReducer(initialState.contacts, (builder) => {
  builder
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        contacts => contacts.id === action.payload
      );
      state.items.splice(index, 1);
    })
    .addCase(setFilter.fulfilled, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      console.error(action.error);
    });
});