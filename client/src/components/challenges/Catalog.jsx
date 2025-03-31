import { useEffect, useState } from "react";
import { useChallenges } from "../../api/challengeApi"
import ErrorNotification from "../errors/ErrorNotification";
import Search from "../Search";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
   const {challenges, error, clearError} = useChallenges();
   const [searchValue, setSearchValue] = useState('');

   const filteredChallenges = searchValue
   ? challenges.filter(challenge => challenge.title.toLowerCase().includes(searchValue.toLowerCase()))
   : challenges;

   const isSearching = searchValue !== '';



return (
    <> {error
    ? <ErrorNotification error={error} onClear={clearError}/>
  :      <div className="container-fluid tm-container-content tm-mt-60">
  <div className="row mb-4">
    <h2 className="col-6 tm-text-primary">
      {isSearching ? 'Search Results' : 'All challenges'}
    </h2>
    <div className="col-6 d-flex justify-content-end align-items-center">
    <Search onSearch={setSearchValue}/>
    </div>
  </div>
  <div className="row tm-mb-90 tm-gallery">
    {filteredChallenges.map(challenge => { return <CatalogItem key= {challenge._id} challenge={challenge}/>})}
    
  </div>
  {/* <div className="row tm-mb-90">
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
  </div> */}
</div>}

    </>
  )
}