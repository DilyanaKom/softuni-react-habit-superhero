import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import styles from "../Spinner.module.css";

import { useLogout } from "../../api/authApi";
import { UserContext } from "./UserContext";

import ErrorNotification from '../errors/ErrorNotification';


export default function Logout() {
    const { logout, error, clearError } = useLogout();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        logout()
            .then(() => {
                userLoginHandler({});
                navigate('/');
            })
            .catch(() => {
            })

    }, [])

    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Logging out...</p>
            <ErrorNotification error={error} onClear={clearError} />
        </div>
    )


}