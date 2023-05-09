import PropTypes from 'prop-types';
import { Title, Input } from 'components/ContactForm/ContactFormStyle';
import { Label } from './FilterStyle';

export const FilterContacts = ({ value, onChange }) => {
  return (
    <>
      <Title>Contacts</Title>
      <Label>
        Find contacts by name
        <Input
          type="text"
          placeholder="Type name"
          value={value}
          onChange={onChange}
        ></Input>
      </Label>
    </>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
