import { useContext, useEffect} from "react"
import styles from "../Spinner.module.css"
import { useLogout } from "../../api/authApi"
import { useNavigate } from "react-router";
import { UserContext } from "./UserContext";


export default function Logout() {
    const { logout } = useLogout();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        logout()
            .then(() => {
                userLoginHandler({});
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message)
            })

    }, [])

    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Logging out...</p>
        </div>
    )


}