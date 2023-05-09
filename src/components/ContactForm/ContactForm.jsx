import React, { useState, useEffect } from 'react';
import {
  alertContactInclude,
  alertAddContactSuccess,
} from 'components/Alert/Alert';
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

export const ContactForm = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!name && !number);
  }, [name, number]);

  const handleSubmit = event => {
    event.preventDefault();
    const contactIncludes = contacts.some(contact => contact.name === name);

    if (contactIncludes) {
      alertContactInclude(name);
      return;
    } else {
      alertAddContactSuccess();
    }

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
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
            value={name}
            onChange={handleNameChange}
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
            value={number}
            onChange={handleNumberChange}
          />
        </Label>

        <Button type="submit" disabled={isDisabled}>
          Add contact
        </Button>
      </TabletContainer>
    </form>
  );
};
