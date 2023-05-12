import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { FilterContacts } from '../Filter/Filter';
import { Container, ContactSection } from './AppStyled';

import { useSelector } from 'react-redux';

const App = () => {
  const state = useSelector(state => state.contacts);
  console.log(state);
  return (
    <Container>
      <ContactForm />
      <ContactSection>
        <FilterContacts />
        <ContactsList />
      </ContactSection>
    </Container>
  );
};

export default App;
