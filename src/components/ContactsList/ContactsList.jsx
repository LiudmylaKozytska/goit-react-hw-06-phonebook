import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { List } from './ContactListStyle';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(({ id, name, number, onClick }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={() => onClick(id)}
        />
      ))}
    </List>
  );
};
