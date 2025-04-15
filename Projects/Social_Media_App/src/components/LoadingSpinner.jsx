import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={`d-flex justify-content-center ${styles.spinnerContainer}`}>
      <div className={`spinner-border ${styles.spinnerBody}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;