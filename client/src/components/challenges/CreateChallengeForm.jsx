import styles from '../Forms.module.css'

export default function CreateChallenge() {
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationCard}>
        <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Create Challenge</h2>
        <form id="create-challenge-form" className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="title"
              className={styles.formControl}
              placeholder="Challenge Title"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="number"
              name="duration"
              className={styles.formControl}
              placeholder="Duration (days)"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="description"
              className={styles.formControl}
              placeholder="Challenge Description"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="mediaUrl"
              className={styles.formControl}
              placeholder="Image/Video URL"
            />
          </div>
          <div className={styles.formGroup}>
            <select name="difficulty" className={styles.formControl} required>
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
