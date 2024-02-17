import { addContact } from '../../redux/contacts/contactsSlicer';
import css from './AddContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }

    const finalContact = { ...formData };

    dispatch(addContact(finalContact));
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    const formData = {
      name,
      number,
    };
    handleAddContact(formData);
    event.currentTarget.reset();
  };

  return (
    <div className={css.container}>
      <div className={css.phonebookContainer}>
        <h1 className={css.addContactTitle}>Save your contacts here</h1>
        <form onSubmit={handleFormSubmit}>
          <label className={css.formLabel}>
            <span>Name</span>
            <input
              className={css.addContactInput}
              type="text"
              name="name"
              placeholder="Alex"
              required
            />
          </label>
          <label className={css.formLabel}>
            <span>Number</span>
            <input
              className={css.addContactInput}
              type="tel"
              name="number"
              required
            />
          </label>
          <button className={css.addBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};
