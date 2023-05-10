import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import {
  TabletContainer,
  Title,
  Input,
  Button,
  Label,
  FormIcon,
} from './ContactFormStyle';
import { ReactComponent as CallIcon } from '../icons/callIcon.svg';
import { ReactComponent as PersonIcon } from '../icons/personIcon.svg';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const number = formData.get('number');
    const contact = { name, number };
    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Phonebook</Title>
      <TabletContainer>
        <Label>
          <FormIcon>
            <PersonIcon width="20" height="20" fill="#0D161B"></PersonIcon>
          </FormIcon>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Type name"
            // value={name}
            // onChange={handleNameChange}
            required
          />
        </Label>
        <Label>
          <FormIcon>
            <CallIcon width="20" height="20" fill="#0D161B"></CallIcon>
          </FormIcon>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Type number"
            required
            // value={number}
            // onChange={handleNumberChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </TabletContainer>
    </form>
  );
};
