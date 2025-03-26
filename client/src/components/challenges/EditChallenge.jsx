import { useParams } from 'react-router';
import styles from '../Forms.module.css'
import { useChallenges } from '../../api/challengeApi';

export default function EditChallenge() {
    const {challengeId} = useParams();
    const {currentChallenge} = useChallenges(challengeId);
    


    return (
      <div className={styles.registrationContainer}>
        <div className={styles.registrationCard}>
          <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Edit Challenge</h2>
          <form id="create-challenge-form" className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Challenge Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className={styles.formControl}
                placeholder="Challenge Title"
                defaultValue={currentChallenge?.title}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="duration">Duration (days)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                className={styles.formControl}
                placeholder="Duration (days)"
                defaultValue={currentChallenge?.duration}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description">Challenge Description</label>
              <textarea
                id="description"
                name="description"
                className={styles.formControl}
                placeholder="Challenge Description"
                defaultValue={currentChallenge?.description}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="mediaUrl">Image/Video URL</label>
              <input
                type="text"
                id="mediaUrl"
                name="mediaUrl"
                className={styles.formControl}
                placeholder="Image/Video URL"
                defaultValue={currentChallenge?.mediaUrl}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="difficulty">Difficulty Level</label>
              <select id="difficulty" name="difficulty" className={styles.formControl} required>
                <option value="">Select Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.btnPrimary}>
                Edit Challenge
              </button>
            </div>
          </form>
        </div>
      </div>
    );
    
}
