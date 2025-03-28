import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router";

import styles from "./ChallengeDetails.module.css";

import { UserContext } from "../user/UserContext";
import { useChallenges, useChallengeParticipiaction } from "../../api/challengeApi";

import convertDate from "../../utils/convertDate";


export default function ChallengeDetails() {
    const { challengeId } = useParams();
    const { _id: userId } = useContext(UserContext);
    const { currentChallenge } = useChallenges(challengeId);
    const { handleJoinChallenge, handleCompleteChallenge} = useChallengeParticipiaction(challengeId);
    const [hasJoined, setHasJoined] = useState(false);
    const [hasCompleted, setHasCompleted] = useState(false);

    const authorId = currentChallenge?.author._id;

    useEffect(() => {
        const isJoined = currentChallenge?.activeParticipants?.includes(userId) || false;
        const isCompleted = currentChallenge?.completedBy?.includes(userId) || false;
        setHasJoined(isJoined);
        setHasCompleted(isCompleted);
    }, [userId, currentChallenge])

    const joinChallengeClickHandler = async () => {
        await handleJoinChallenge(challengeId,userId);
        setHasJoined(true);
    };

    const completeChallengeClickHandler = async () => {
        await handleCompleteChallenge(challengeId,userId);
        setHasCompleted(true);
        setHasJoined(false);
    }

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
                    {userId && (
                        <div className={styles.buttonGroup}>
                            {authorId === userId
                                ? (
                                    <>
                                        <Link to={`/challenges/${challengeId}/edit`} className={styles.editButton}>Edit</Link>
                                        <Link to={`/challenges/${challengeId}/delete`} className={styles.editButton}>Delete</Link>
                                    </>
                                )
                                : null
                            }
                            {hasCompleted
                                ? (
                                    <span className={styles.alreadyCompleted}>Already Completed</span>
                                )
                                : hasJoined
                                    ? (
                                        <button
                                            onClick={completeChallengeClickHandler}
                                            className={styles.editButton}
                                        >
                                            Complete
                                        </button>
                                    )
                                    : (
                                        <button
                                            onClick={joinChallengeClickHandler}
                                            className={styles.editButton}
                                        >
                                            Join
                                        </button>
                                    )
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};