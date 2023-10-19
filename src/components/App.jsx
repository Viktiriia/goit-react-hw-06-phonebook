import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import { Container } from './Form/Form.styled';
import { useSelector } from 'react-redux';

export default function App() {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const filterArray = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form contacts={contacts} />
      <h2>Contacts </h2>
      <Filter />
      <ContactList contacts={filterArray} />
    </Container>
  );
}
