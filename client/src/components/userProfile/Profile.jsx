import { useContext } from 'react';
import { Link } from 'react-router';
import styles from './Profile.module.css';
import { UserContext } from '../user/UserContext';
import { useProfileData } from '../../api/profileApi';

export default function Profile() {
  const { username, email, _id: userId } = useContext(UserContext);
  const { createdChallenges, activeChallenges } = useProfileData(userId);

  const completedChallenges = [];

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileLayout}>
        {/* Left side - Profile block with user info */}
        <div className={styles.profileSidebar}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>{username.charAt(0).toUpperCase()}</div>
            <h2 className={styles.userName}>{username}</h2>
            <p className={styles.userEmail}>{email}</p>
          </div>
        </div>

        {/* Right side - Challenges */}
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
                  <li key={challenge._id} className={`${styles.challengeItem} ${styles.active}`}>{challenge.title}</li>
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
                  <li key={challenge.id} className={`${styles.challengeItem} ${styles.completed}`}>{challenge.title}</li>
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

// import { useContext } from 'react';
// import styles from './Profile.module.css'
// import { UserContext } from '../user/UserContext';

// export default function Profile(){
// const {username, email} = useContext(UserContext);
// const createdChallenges = [];
// const activeChallenges = [];
// const completedChallenges = [];

// return (
//     <div className={styles.profileContainer}>
//       <div className={styles.profileCard}>
//         <div className={styles.profileHeader}>
//           <div className={styles.profileImage}>{username.charAt(0).toUpperCase()}</div>
//           <h2 className={styles.userName}>{username}</h2>
//           <p className={styles.userEmail}>{email}</p>
//         </div>

//         <div className={styles.challengesSection}>
//           <h3 className={styles.sectionTitle}>Created Challenges</h3>
//           <ul className={styles.challengeList}>
//             {createdChallenges.length > 0 ? (
//               createdChallenges.map((challenge) => (
//                 <li key={challenge.id} className={styles.challengeItem}>{challenge.title}</li>
//               ))
//             ) : (
//               <p>No created challenges yet.</p>
//             )}
//           </ul>
//         </div>

//         <div className={styles.challengesSection}>
//           <h3 className={styles.sectionTitle}>Active Challenges</h3>
//           <ul className={styles.challengeList}>
//             {activeChallenges.length > 0 ? (
//              activeChallenges.map((challenge) => (
//                 <li key={challenge.id} className={`${styles.challengeItem} ${styles.active}`}>{challenge.title}</li>
//               ))
//             ) : (
//               <p>No active challenges.</p>
//             )}
//           </ul>
//         </div>

//         <div className={styles.challengesSection}>
//           <h3 className={styles.sectionTitle}>Completed Challenges</h3>
//           <ul className={styles.challengeList}>
//             {completedChallenges.length > 0 ? (
//               completedChallenges.map((challenge) => (
//                 <li key={challenge.id} className={`${styles.challengeItem} ${styles.completed}`}>{challenge.title}</li>
//               ))
//             ) : (
//               <p>No completed challenges.</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };