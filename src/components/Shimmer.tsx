const Shimmer = () => {
  return (
    <div
      className="
        m-3
        w-full max-w-xs sm:max-w-sm
        rounded-xl
        bg-white
        shadow
        overflow-hidden
      "
    >
      {/* IMAGE SHIMMER */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-52 bg-gray-200 animate-pulse" />

      {/* TEXT SHIMMER */}
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-5/6 bg-gray-200 rounded animate-pulse" />

        <div className="flex justify-between mt-4">
          <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};
export default Shimmer;
