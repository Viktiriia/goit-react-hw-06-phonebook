import { useDispatch } from 'react-redux';
import { ButtonDel, List, Item } from './ContactList.styled';
import { deleteCantacts } from 'Redux/contactSlice';
export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id} id={id}>
          {name}: {number}
          <ButtonDel onClick={() => dispatch(deleteCantacts(id))}>
            {' '}
            Delete
          </ButtonDel>
        </Item>
      ))}
    </List>
  );
};
