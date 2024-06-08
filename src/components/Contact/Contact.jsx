import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/Contacts/actions';
import Button from '@mui/material/Button';

export const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <div>
            <p>{name}</p>
            <p>{number}</p>
            <Button variant="contained" type="button" onClick={handleDelete}>
                Delete
            </Button>
        </div>
    );
};