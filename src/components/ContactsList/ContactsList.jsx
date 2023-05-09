import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactListStyle';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  if (!contacts) {
    return [];
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
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
