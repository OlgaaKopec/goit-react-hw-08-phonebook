import { nanoid } from 'nanoid';
import css from './ContactForm.css';
import { useState } from 'react';
import { addContact } from '../../Redux/Contacts/actions.js';
import { selectAllContacts } from '../../Redux/Contacts/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const onChangeName = event => {
    const value = event.target.value;
    setName(value);
  };

  const onChangeNumber = event => {
    const value = event.target.value;
    setNumber(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit({ name: name, number: number });
    //   setName('');
    //   setNumber('');
    // };
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert('Contact already exists');
    } else {
      dispatch(addContact({ nameContact: name, numberContact: number }));
      setName('');
      setNumber('');
    }
  };

  const idName = nanoid();
  const idNumber = nanoid();


  return (
    <div className={css.form}>
      <form onSubmit={onSubmit}>
        <label htmlFor={idName}>
        </label>
        <TextField label="Name" variant="filled" size="small"
          className={css.input}
          id={idName}
          onChange={onChangeName}
          value={name}
          type="text"
          name="name"
          pattern="^[A-Za-z.'\- ]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />

        <label htmlFor={idNumber}>
          {' '}
          {' '}
        </label>
        <TextField label="Number" variant="filled" size="small"
          className={css.input}
          id={idNumber}
          onChange={onChangeNumber}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
        <Button variant="contained" size="small">Add contact</Button>
      </form>
    </div>
  );
};