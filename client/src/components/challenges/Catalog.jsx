import { useChallenges } from "../../api/challengeApi"
import CatalogItem from "./CatalogItem";

export default function Catalog() {
   const {challenges} = useChallenges();


return (
    <>
      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
          <h2 className="col-6 tm-text-primary">
            All Challenges
          </h2>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <form action="" className="tm-text-primary">
              Page <input type="text" defaultValue="1" size="1" className="tm-input-paging tm-text-primary" /> of 200
            </form>
          </div>
        </div>
        <div className="row tm-mb-90 tm-gallery">
          {challenges.map(challenge => { return <CatalogItem key= {challenge._id} challenge={challenge}/>})}
          
        </div>
        <div className="row tm-mb-90">
          <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
            <a href="javascript:void(0);" className="btn btn-primary tm-btn-prev mb-2 disabled">Previous</a>
            <div className="tm-paging d-flex">
              <a href="javascript:void(0);" className="active tm-paging-link">1</a>
              <a href="javascript:void(0);" className="tm-paging-link">2</a>
              <a href="javascript:void(0);" className="tm-paging-link">3</a>
              <a href="javascript:void(0);" className="tm-paging-link">4</a>
            </div>
            <a href="javascript:void(0);" className="btn btn-primary tm-btn-next">Next Page</a>
          </div>
        </div>
      </div>
    </>
  )
}