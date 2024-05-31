import { createSlice } from '@reduxjs/toolkit';
import items from '../components/data/contacts.json';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts', // Початковий стан редюсера слайсу
  initialState: {
    items,
  }, // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
      //   state.items = [...state.items, action.playload] - 2 варіант
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contacts => contacts.id !== action.payload
      );
      // const itemIndex = state.items.findIndex(contacts => contacts.id === action.payload);
      // state.items.splice(itemIndex, 1); - 2 варіант
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// Функція-селектор для використання в useSelector, яка повертає список контактів з властивості items
export const selectContacts = state => state.contacts.items;
