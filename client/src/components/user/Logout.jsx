import styles from "../Spinner.module.css"

export default function Logout(){

return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Logging out...</p>
    </div>
)


}