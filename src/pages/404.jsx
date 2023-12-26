import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-full">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <h2>Sorry, an unexpected error has occurred.</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
