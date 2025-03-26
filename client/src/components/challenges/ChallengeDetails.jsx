import styles from "./ChallengeDetails.module.css";


export default function ChallengeDetails({ challenge }){
    return (
        <div className={styles.detailsContainer}>
          <h1 className={styles.challengeTitle}>Test</h1>
          <div className={styles.detailsContent}>
            <div className={styles.mediaDisplay}>Media Placeholder</div>
            <div className={styles.infoSection}>
              <p><strong>Author:</strong> Some Author</p>
              <p><strong>Created On:</strong> 26 March 2025</p>
              <p><strong>Duration:</strong> 10</p>
              <p className={styles.description}><strong>Description:</strong> This is test</p>
              <div className={styles.buttonGroup}>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.deleteButton}>Delete</button>
                <button className={styles.joinButton}>Join</button>
              </div>
            </div>
          </div>
        </div>
      );
  };