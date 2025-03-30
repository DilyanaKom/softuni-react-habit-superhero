import styles from '../Forms.module.css'
import { useChallenges } from '../../api/challengeApi';
import { useNavigate } from 'react-router';
import useImageUpload from '../../hooks/useImageUpload';
import { useEffect, useState } from 'react';
import ErrorNotification from '../errors/ErrorNotification';

export default function CreateChallenge() {
  const { addChallenge, error, clearError } = useChallenges(null);
  const { uploadImage, imageUrl, isLoading } = useImageUpload();
  const [persistedData, setPersistedData] = useState(null);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (imageUrl) {
      document.querySelector("#mediaLink").value = imageUrl;
    }
  }, [imageUrl])

  const uploadHandler = async (e) => {

    const file = e.target.files[0];
    if (!file) {
      return;
    }

    await uploadImage(file);

  }

  const submitAction = async (formData) => {
    setPending(true);
    const challengeData = Object.fromEntries(formData);

    try {
      await addChallenge(challengeData);
      navigate('/challenges');
    } catch (error) {
      setPersistedData({...challengeData});
      setPending(false);
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
              disabled={isLoading}
              defaultValue={persistedData?.title}
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
              defaultValue={persistedData?.duration}
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
              defaultValue={persistedData?.description}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="difficulty" className={styles.formLabel}>Difficulty Level</label>
            <select id="difficulty" name="difficulty" className={styles.formControl} required defaultValue={persistedData?.difficulty}>
              <option value="">Select Difficulty Level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="challengeImage" className={styles.formLabel}>Challenge Image</label>
            <input
              type="file"
              id="challengeImage"
              name="challengeImage"
              className={styles.formControl}
              accept="image/*"
              onChange={uploadHandler}
            />
            {isLoading && <p className={styles.uploadStatus}>Uploading image...</p>}
            {imageUrl && !isLoading && (
              <div className={styles.uploadSuccess}>
                <p>Image uploaded successfully!</p>
                <img
                  src={imageUrl}
                  alt="Preview"
                  className={styles.imagePreview}
                  style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
                />
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mediaUrl" className={styles.formLabel}>Image URL</label>
            <input
              type="text"
              id="mediaLink"
              name="mediaLink"
              className={styles.formControl}
              defaultValue={persistedData?.mediaLink}
              placeholder="Enter media URL (optional)"
            />
          </div>

            <ErrorNotification error={error} onClear={clearError} />
          <div className={styles.formGroup}>
            <button type="submit" className={styles.btnPrimary} disabled={pending}>
              Create Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
