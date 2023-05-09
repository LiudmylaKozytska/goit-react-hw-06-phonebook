import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { FilterContacts } from '../Filter/Filter';

import { Container, ContactSection } from './AppStyled';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('CONTACT')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('CONTACT', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([contact, ...contacts]);
  };

  const onDelete = id => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-secondary',
      })
      .then(result => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your contact has been deleted.',
            'success'
          );
          setContacts(contacts.filter(contact => contact.id !== id));
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your contact file is safe :)',
            'error'
          );
        }
      });
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      <ContactSection>
        <FilterContacts value={filter} onChange={handleFilter} />
        <ContactsList items={getVisibleContacts()} onClick={onDelete} />
      </ContactSection>
    </Container>
  );
};

export default App;
