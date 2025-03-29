import Hero from "../Hero";

export default function Home(){


    return(
        <>
        <Hero></Hero>
  <div className="container-fluid tm-container-content tm-mt-60">
  <div className="row mb-4">
    <h2 className="col-6 tm-text-primary">
      All Challenges
    </h2>
  </div>
  <div className="row tm-mb-90 tm-gallery">
    {/* {challenges.map(challenge => { return <CatalogItem key= {challenge._id} challenge={challenge}/>})} */}
    
  </div>
</div>
        </>

    )
}