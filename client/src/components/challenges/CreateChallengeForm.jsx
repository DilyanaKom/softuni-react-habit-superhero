import styles from '../Forms.module.css'
import { useChallenges } from '../../api/challengeApi';
import { useNavigate } from 'react-router';

export default function CreateChallenge() {
  const { addChallenge } = useChallenges(null);
  const navigate = useNavigate();

  const submitAction = async (formData) => {
    const challengeData = Object.fromEntries(formData);

    try {
      await addChallenge(challengeData);
      navigate('/challenges');
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationCard}>
        <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Create Challenge</h2>
        <form id="create-challenge-form" className={styles.contactForm} action={submitAction}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.formLabel}>Challenge Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.formControl}
              placeholder="Enter challenge title"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="duration" className={styles.formLabel}>Duration (days)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              className={styles.formControl}
              placeholder="Enter challenge duration in days"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.formLabel}>Challenge Description</label>
            <textarea
              id="description"
              name="description"
              className={styles.formControl}
              placeholder="Describe your challenge"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mediaUrl" className={styles.formLabel}>Image/Video URL</label>
            <input
              type="text"
              id="mediaLink"
              name="mediaLink"
              className={styles.formControl}
              placeholder="Enter media URL (optional)"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="difficulty" className={styles.formLabel}>Difficulty Level</label>
            <select id="difficulty" name="difficulty" className={styles.formControl} required>
              <option value="">Select Difficulty Level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.btnPrimary}>
              Create Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
