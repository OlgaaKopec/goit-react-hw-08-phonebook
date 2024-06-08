import css from '../ContactForm/ContactForm.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export const ContactList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map((contact, id) => (
      <li className={css.contact} key={id}>
        {contact.name}
        {contact.number}
        <Button variant="contained" size="small"
          className={css.btn2}
          type="button"
          onClick={() => handleDelete(contact.id)}
        >
          {' '}
          Delete{' '}
        </Button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};