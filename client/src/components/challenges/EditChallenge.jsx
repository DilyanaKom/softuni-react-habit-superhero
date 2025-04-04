import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import styles from '../Forms.module.css'

import { useChallenges } from '../../api/challengeApi';
import useImageUpload from '../../hooks/useImageUpload';
import ErrorNotification from '../errors/ErrorNotification';

export default function EditChallenge() {
  const navigate = useNavigate();
  const { challengeId } = useParams();
  const { currentChallenge, editChallenge, error, clearError } = useChallenges(challengeId);
  const { uploadImage, imageUrl, isLoading } = useImageUpload();
  const [pending, setPending] = useState(false);

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
    const updatedChallengeData = Object.fromEntries(formData);
    try {
      await editChallenge(challengeId, updatedChallengeData);

      navigate(`/challenges/${challengeId}/details`);
    } catch (error) {
      setPending(false)
    }

  }



  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationCard}>
        <h2 className={`${styles.textPrimary} ${styles.mb5}`}>Edit Challenge</h2>
        <form id="create-challenge-form" className={styles.contactForm} action={submitAction}>
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
              min="1"
              max="365"
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
            <label htmlFor="difficulty">Difficulty Level</label>
            <select id="difficulty" name="difficulty" className={styles.formControl} value={currentChallenge?.difficulty} required>
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
            <label htmlFor="mediaUrl">Image URL</label>
            <input
              type="text"
              id="mediaLink"
              name="mediaLink"
              className={styles.formControl}
              placeholder="Image URL"
              defaultValue={currentChallenge?.mediaLink}
            />
          </div>
          <ErrorNotification error={error} onClear={clearError} />
          <div className={styles.formGroup}>
            <button type="submit" className={styles.btnPrimary} disabled={pending}>
              Edit Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}
