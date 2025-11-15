import { CDN_url } from "../utils/constants"
import type { Info2 } from "../utils/mockData";



const ResCard = (props : Info2) => {

  const {name,costForTwo,cuisines,avgRating,sla,cloudinaryImageId} = props;
  return (
    <div className="res-card">
      <img className="card-log" src={CDN_url+cloudinaryImageId}/>
      <h4>{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>Rating : {avgRating}</h4>
      <h4>{sla.deliveryTime} mins away</h4>
    </div>
  )
}

 export default ResCard;