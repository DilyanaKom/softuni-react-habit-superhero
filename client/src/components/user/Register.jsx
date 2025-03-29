import { Link, useNavigate } from 'react-router';
import { useActionState, useContext } from 'react';

import styles from '../Forms.module.css';

import { useRegister } from '../../api/authApi';
import { UserContext } from './UserContext';

import ErrorNotification from '../errors/ErrorNotification';

export default function Register() {
    const { register, error, clearError, setError } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const registerHandler = async (state, formData) => {
        const registerData = Object.fromEntries(formData);
        const username = registerData.username;
        const email = registerData.email;
        const password = registerData.password;
        const confirmPassword = registerData.confirmPassword;

        if (password !== confirmPassword) {
            setError('Passwords don\'t match!');
            return;
        }

        const userData = await register(username, email, password);

        if (!userData) {
            return;
        }
        userLoginHandler(userData);

        navigate('/');


    }

    const [state, action, isPending] = useActionState(registerHandler, { username: "", email: "", password: "" })
    return (
        <div className={styles.registrationContainer}>
            <div className={styles.registrationCard}>
                <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Register</h2>
                <form id="register-form" action={action} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username" className={styles.formLabel}>Username</label>
                        <input type="text" id="username" name="username" className={styles.formControl} placeholder="Username" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                        <input type="email" id="email" name="email" className={styles.formControl} placeholder="Email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.formLabel}>Password</label>
                        <input type="password" id="password" name="password" className={styles.formControl} placeholder="Password" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword" className={styles.formLabel}>Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className={styles.formControl} placeholder="Confirm Password" required />
                    </div>
                    <div className={styles.formGroup}>
                        <button type="submit" className={styles.btnPrimary} disabled={isPending}>Register</button>
                    </div>
                </form>
                <ErrorNotification error={error} onClear={clearError} />
                <div className={`${styles.mt4} ${styles.textCenter}`}>
                    <p>Already registered? <Link to="/login" className={styles.loginLink}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}