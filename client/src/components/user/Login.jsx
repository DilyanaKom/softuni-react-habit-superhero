import styles from '../Forms.module.css'
import { Link } from 'react-router'

export default function Login(){
    return (
        <div className={styles.registrationContainer}>
  <div className={styles.registrationCard}>
    <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Login</h2>
    <form id="login-form" action="" method="POST" className={styles.contactForm}>
        <div className={styles.formGroup}>
            <input type="text" name="username" className={styles.formControl} placeholder="Email" required />
        </div>
        <div className={styles.formGroup}>
            <input type="password" name="password" className={styles.formControl} placeholder="Password" required />
        </div>
        <div className={styles.formGroup}>
            <button type="submit" className={styles.btnPrimary}>Login</button>
        </div>
    </form>
    <div className={`${styles.mt4} ${styles.textCenter}`}>
        <p>Don't have an account? <Link to="/register" className={styles.loginLink}>Register</Link></p>
    </div>                
  </div>
</div>
    )
}