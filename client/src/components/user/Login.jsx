import { useActionState } from 'react'
import { Link, useNavigate } from 'react-router'

import styles from '../Forms.module.css'

import { useLogin } from '../../api/authApi'

export default function Login(){
    const { login } = useLogin();
    const navigate = useNavigate();
    const loginHandler = async (state, formData) => {
        const { email, password} = Object.fromEntries(formData);
        
        const authData = await login(email, password);

        navigate('/')

        
    }
    const [state, action, isPending] = useActionState(loginHandler, {email: "", password: ""});



    return (
        <div className={styles.registrationContainer}>
  <div className={styles.registrationCard}>
    <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Login</h2>
    <form id="login-form" action={action} className={styles.contactForm}>
        <div className={styles.formGroup}>
            <input type="text" name="email" className={styles.formControl} placeholder="Email" required />
        </div>
        <div className={styles.formGroup}>
            <input type="password" name="password" className={styles.formControl} placeholder="Password" required />
        </div>
        <div className={styles.formGroup}>
            <button type="submit" className={styles.btnPrimary} disabled={isPending}>Login</button>
        </div>
    </form>
    <div className={`${styles.mt4} ${styles.textCenter}`}>
        <p>Don't have an account? <Link to="/register" className={styles.loginLink}>Register</Link></p>
    </div>                
  </div>
</div>
    )
}