import css from '../ContactForm/ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../Redux/Contacts/selectors';
import { setFilter } from '../../Redux/Contacts/actions';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form>
      <label>
        <TextField id="filled-basic" label="Find contacts by Name" variant="filled" size="small"
          className={css.input}
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={handleChange}
          pattern="^[A-Za-z.'\- ]+$"
        />
      </label>
    </form>
  );
};