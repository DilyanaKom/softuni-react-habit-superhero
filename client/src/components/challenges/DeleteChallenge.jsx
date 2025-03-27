import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

import { useChallenges } from "../../api/challengeApi";
import styles from "../Spinner.module.css";

export default function DeleteChallenge() {
    const { deleteChallenge } = useChallenges();
    const { challengeId } = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        const delay = new Promise(resolve => setTimeout(resolve, 1500));
        const deleteRequest = deleteChallenge(challengeId);


        Promise.all([delay, deleteRequest])
            .then(() => navigate('/'))
            .catch(error => console.log(error.message));



    }, [])
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Deleting challenge ...</p>
        </div>
    )
}