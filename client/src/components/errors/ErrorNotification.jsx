import styles from "./ErrorNotification.module.css";

export default function ErrorNotification({error, onClear}){

    if(!error){
        return null;
    }

    return (
        <div className={styles.errorContainer}>
        <p className={styles.errorText}>{error}</p>
        <button className={styles.errorClose} onClick={onClear}>✖</button>
      </div>
    )

}