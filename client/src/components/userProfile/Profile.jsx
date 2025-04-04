import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router';
import styles from './Profile.module.css';
import { UserContext } from '../user/UserContext';
import { useProfileData } from '../../api/profileApi';
import { useChallengeParticipiaction } from '../../api/challengeApi';

export default function Profile() {
  const { username, email, _id: userId } = useContext(UserContext);
  const { createdChallenges, activeChallenges, completedChallenges, refetchChallenges } = useProfileData(userId);
  const { handleCompleteChallenge} = useChallengeParticipiaction()


  const completeClickHandler = async (challengeId) => {

  await handleCompleteChallenge(challengeId,userId);
  refetchChallenges();

}

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileLayout}>

        <div className={styles.profileSidebar}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>{username.charAt(0).toUpperCase()}</div>
            <h2 className={styles.userName}>{username}</h2>
            <p className={styles.userEmail}>{email}</p>
          </div>
        </div>


        <div className={styles.challengesContainer}>
          <h2 className={styles.challengesTitle}>My Challenges</h2>

          <div className={styles.challengeBlock}>
            <h3 className={styles.sectionTitle}>Created Challenges</h3>
            <ul className={styles.challengeList}>
              {createdChallenges.length > 0 ? (
                createdChallenges.map((challenge) => (
                  <li key={challenge._id} className={styles.challengeItem}>
                    <span className={styles.challengeTitle}>{challenge.title}</span>
                    <div className={styles.buttonContainer}>
                      <Link to={`/challenges/${challenge._id}/edit`} className={styles.editButton}>Edit</Link>
                      <Link to={`/challenges/${challenge._id}/delete`} className={styles.deleteButton}>Delete</Link>
                    </div>
                  </li>
                ))
              ) : (
                <p>No created challenges yet.</p>
              )}
            </ul>
          </div>

          <div className={styles.challengeBlock}>
            <h3 className={styles.sectionTitle}>Active Challenges</h3>
            <ul className={styles.challengeList}>
              {activeChallenges.length > 0 ? (
                activeChallenges.map((challenge) => (
                  <li key={challenge._id} className={`${styles.challengeItem} ${styles.active}`}>
                    <span className={styles.challengeTitle}>{challenge.title}</span>
                    <div className={styles.buttonContainer}>
                      <button
                      className={styles.editButton}
                      onClick = {() => completeClickHandler(challenge._id)}
                      >
                        Complete
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p>No active challenges.</p>
              )}
            </ul>
          </div>

          <div className={styles.challengeBlock}>
            <h3 className={styles.sectionTitle}>Completed Challenges</h3>
            <ul className={styles.challengeList}>
              {completedChallenges.length > 0 ? (
                completedChallenges.map((challenge) => (
                  <li key={challenge._id} className={`${styles.challengeItem} ${styles.completed}`}>{challenge.title}</li>
                ))
              ) : (
                <p>No completed challenges.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

