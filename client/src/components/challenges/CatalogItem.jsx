import convertDate from "../../utils/convertDate"

export default function CatalogItem({challenge}){
    const createdOn = convertDate(challenge?._createdOn);
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <figure className="effect-ming tm-video-item">
          <img src="/heroImages/hero1.jpg" alt="Image" className="img-fluid" />
          <figcaption className="d-flex align-items-center justify-content-center">
            <h2>{challenge?.title}</h2>
            <a href="photo-detail.html">View more</a>
          </figcaption>
        </figure>
        <div className="d-flex justify-content-between tm-text-gray">
          <span className="tm-text-gray-light">{createdOn}</span>
          <span>By {challenge?._ownerId}</span>
        </div>
      </div>
    )
}