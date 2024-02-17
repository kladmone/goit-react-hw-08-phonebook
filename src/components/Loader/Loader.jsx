import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loadingContainer}>
      <div className={css.loadingText}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export { Loader };
