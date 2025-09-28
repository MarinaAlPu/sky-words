import { Loader } from "./Loader"


export const CardLoader = () => {
  return (
    <div className="card-loader">
      <div className="loader-wrapper">
        <Loader />
        <Loader width={164} />
      </div>
      <Loader width={81} height={15} />
    </div>
  );
};
