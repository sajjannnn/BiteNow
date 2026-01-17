import { CDN_url } from "../utils/constants";
import type { Info2 } from "../utils/mockData";
import { type ComponentType } from "react";

const ResCard = (props: Info2) => {
  const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } = props;
  const cuisine = cuisines.join(",");
  return (
    <div className="m-3 ">
      {/* Gradient glow / background frame */}
      <div
        className="
      rounded-2xl
      p-[2px]
      shadow-md
      transition-all duration-300
      hover:shadow-2xl
    "
      >
        {/* Actual card */}
        <div
          className="
        rounded-xl
        bg-[#FDFCDC]
        transition-all duration-300
        group-hover:bg-[#FFFBEA]
      "
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={CDN_url + cloudinaryImageId} alt={name} />
          </div>

          <div className="p-3 sm:p-4">
            <h4 className="text-base sm:text-lg font-semibold truncate">{name}</h4>

            <h4 className="mt-1 text-xs sm:text-sm text-gray-700 line-clamp-2 truncate">{cuisine}</h4>

            <div className="mt-2 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium">{costForTwo}</span>
              <span className="font-semibold">⭐ {avgRating}</span>
            </div>

            <h4 className="mt-1 text-xs sm:text-sm text-gray-600">{sla.deliveryTime} mins away</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
//higher order function

// take input as component and return a modified component

export const GetParmotedCard = (ResCard: ComponentType<Info2>) => {
  return (props: Info2) => {
    return (
      <div>
        <label> Parmoted </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
