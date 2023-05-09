import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { FilterContacts } from '../Filter/Filter';
import { Container, ContactSection } from './AppStyled';

const App = () => {
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
