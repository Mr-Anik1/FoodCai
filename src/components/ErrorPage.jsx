import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError(); //show error details

  return (
    <>
      <div className="dummy-section">
        <div className="dummy-content">
          <h1 className="oops-msg">Opps!</h1>
          <h1>Something Went Wrong.</h1>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
