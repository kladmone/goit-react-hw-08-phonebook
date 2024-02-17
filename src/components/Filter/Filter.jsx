import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlicer';
import css from './Filter.module.css';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filterContainer}>
      <h3 className={css.filterTitle}>Find contacts by name</h3>
      <input
        className={css.filterInput}
        value={filter}
        onChange={handleChangeFilter}
        type="text"
        name="filter"
        placeholder="Kate..."
      />
    </div>
  );
};
