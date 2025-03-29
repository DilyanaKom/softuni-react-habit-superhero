import { useChallenges } from "../../api/challengeApi";
import Hero from "../Hero";
import CatalogItem from "../challenges/CatalogItem";

export default function Home(){
const {latestChallenges} = useChallenges();

    return(
        <>
        <Hero></Hero>
  <div className="container-fluid tm-container-content tm-mt-60">
  <div className="row mb-4">
    <h2 className="col-6 tm-text-primary">
      Latest Challenges
    </h2>
  </div>
  <div className="row tm-mb-90 tm-gallery">
    {latestChallenges?.map(challenge => { return <CatalogItem key= {challenge._id} challenge={challenge}/>})}
    
  </div>
</div>
        </>

    )
}