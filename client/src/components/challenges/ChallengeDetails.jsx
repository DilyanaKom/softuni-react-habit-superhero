import { useContext } from "react";
import { useParams, Link } from "react-router";

import styles from "./ChallengeDetails.module.css";

import { UserContext } from "../user/UserContext";
import { useChallenges } from "../../api/challengeApi";

import convertDate from "../../utils/convertDate";


export default function ChallengeDetails() {
    const { challengeId } = useParams();
    const { _id } = useContext(UserContext);
    const { currentChallenge } = useChallenges(challengeId);

    const authorId = currentChallenge?.author._id;



    return (
        <div className={styles.detailsContainer}>
            <h1 className={styles.challengeTitle}>{currentChallenge?.title}</h1>
            <div className={styles.detailsContent}>
                <div className={styles.mediaDisplay}>Media Placeholder</div>
                <div className={styles.infoSection}>
                    <p><strong>Author:</strong> {currentChallenge?.author.username}</p>
                    <p><strong>Created On:</strong> {convertDate(currentChallenge?._createdOn)}</p>
                    <p><strong>Duration:</strong> {currentChallenge?.duration} days</p>
                    <p><strong>Difficulty:</strong> {currentChallenge?.difficulty}</p>
                    <p className={styles.description}><strong>Description:</strong> {currentChallenge?.description}</p>
                    {_id && (
                        <div className={styles.buttonGroup}>
                            {authorId === _id
                                ? (
                                    <>
                                        <Link to={`/challenges/${challengeId}/edit`} className={styles.editButton}>Edit</Link>
                                        <Link to={`/challenges/${challengeId}/delete`} className={styles.editButton}>Delete</Link>
                                    </>
                                )
                                : null
                            }
                            <button className={styles.joinButton}>Join</button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};