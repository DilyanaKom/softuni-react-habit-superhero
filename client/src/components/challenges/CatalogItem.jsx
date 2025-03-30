import { Link } from "react-router";

import styles from './CatalogItem.module.css';

import convertDate from "../../utils/convertDate"

export default function CatalogItem({ challenge }) {
  const createdOn = convertDate(challenge?._createdOn);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
      <figure className={`effect-ming tm-video-item ${styles.figureContainer}`}>
        <div className={styles.imageWrapper}>
          <img
            src={challenge?.mediaLink}
            alt="Image"
            className={`img-fluid ${styles.catalogImage}`}
          />
        </div>
        <figcaption className="d-flex align-items-center justify-content-center">
          <h2>{challenge?.title}</h2>
          <Link to={`/challenges/${challenge?._id}/details`}>View more</Link>
        </figcaption>
      </figure>
      <div className="d-flex justify-content-between tm-text-gray">
        <span className="tm-text-gray-light">{createdOn}</span>
        <span>By {challenge?.author.username}</span>
      </div>
    </div>
  );
}