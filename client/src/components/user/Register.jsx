import { Link } from 'react-router'
import styles from '../Forms.module.css'

export default function Register(){
    return (
<div className={styles.registrationContainer}>
  <div className={styles.registrationCard}>
    <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Register</h2>
    <form id="register-form" action="" method="POST" className={styles.contactForm}>
        <div className={styles.formGroup}>
            <input type="text" name="username" className={styles.formControl} placeholder="Username" required />
        </div>
        <div className={styles.formGroup}>
            <input type="email" name="email" className={styles.formControl} placeholder="Email" required />
        </div>
        <div className={styles.formGroup}>
            <input type="password" name="password" className={styles.formControl} placeholder="Password" required />
        </div>
        <div className={styles.formGroup}>
            <input type="password" name="confirmPassword" className={styles.formControl} placeholder="Confirm Password" required />
        </div>
        <div className={styles.formGroup}>
            <button type="submit" className={styles.btnPrimary}>Register</button>
        </div>
    </form>
    <div className={`${styles.mt4} ${styles.textCenter}`}>
        <p>Already registered? <Link to="/login" className={styles.loginLink}>Login</Link></p>
    </div>                
  </div>
</div>
    )
}