import { Link, useNavigate } from 'react-router';
import { useActionState, useContext } from 'react';

import styles from '../Forms.module.css';

import { useRegister } from '../../api/authApi';
import { UserContext } from './UserContext';

export default function Register(){
    //TODO error handling
    //TODO disable button
    //TODO check repeat pasword
    const {register} = useRegister();
    const {userLoginHandler} = useContext(UserContext);
    const navigate = useNavigate();

    const registerHandler = async (state, formData) => {
        const registerData = Object.fromEntries(formData);
        const username = registerData.username;
        const email = registerData.email;
        const password = registerData.password;
        const confirmPassword = registerData.confirmPassword;

        const userData = await register(username, email, password);
        userLoginHandler(userData);

        navigate('/');


    }

    const [state, action, isPending] = useActionState(registerHandler, {username: "", email: "", password: ""})
    return (
<div className={styles.registrationContainer}>
  <div className={styles.registrationCard}>
    <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Register</h2>
    <form id="register-form" action={action} className={styles.contactForm}>
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
            <button type="submit" className={styles.btnPrimary} disabled={isPending}>Register</button>
        </div>
    </form>
    <div className={`${styles.mt4} ${styles.textCenter}`}>
        <p>Already registered? <Link to="/login" className={styles.loginLink}>Login</Link></p>
    </div>                
  </div>
</div>
    )
}