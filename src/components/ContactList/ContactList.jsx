import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  apiGetContacts,
  deleteContact,
} from '../../redux/contacts/contactsSlicer';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.contactsList}>
      {contacts.length === 0 ? (
        <h3 className={css.listTitle}>You haven't added contacts yet!</h3>
      ) : (
        <ul className={css.contactiLstUl}>
          {filteredContacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              <span className={css.contactName}>{contact.name}:</span>
              <span className={css.number}>{contact.number}</span>
              <button
                className={css.delBtn}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { ContactList };
