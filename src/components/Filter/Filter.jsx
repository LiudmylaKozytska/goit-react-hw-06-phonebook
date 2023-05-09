// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

import { Title, Input } from 'components/ContactForm/ContactFormStyle';
import { Label } from './FilterStyle';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <>
      <Title>Contacts</Title>
      <Label>
        Find contacts by name
        <Input
          type="text"
          placeholder="Type name"
          value={filter}
          onChange={e => handleFilterChange(e.target.value)}
        ></Input>
      </Label>
    </>
  );
};
