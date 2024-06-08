import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from '../components/ContactList/ContactList'
import { Filter } from '../components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { fetchContacts, deleteContact } from '../Redux/Contacts/actions';
import { selectLoading, getContacts, getFilter } from '../Redux/Contacts/selectors';

export const ContactsPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const getFilteredContacts = () => {
        const filterContactsList = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        });
        return filterContactsList;
    };

    const handleDelete = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <ContactForm />
            <div>{loading && 'Request in progress...'}</div>
            <Filter />
            <ContactList
                contacts={getFilteredContacts()}
                handleDelete={handleDelete} />
        </>
    );
}