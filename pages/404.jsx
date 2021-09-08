const alert = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="currentColor"
    className="bi bi-exclamation-triangle-fill  text-red-800 mr-4"
    viewBox="0 0 16 16"
  >
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

const NotFound = () => {
  return (
    <section
      id="main"
      className="w-full flex flex-col items-center justify-center p-12"
    >
      <div className="rounded-xl bg-red-200 w-3/4 mx-auto py-12 px-8 my-4">
        <h2 className="flex flex-row items-center justify-center w-2/4 mx-auto">
          {alert}
          <span className="border-l-2 border-gray-700 text-2xl font-bold text-red-800 py-2 px-4 mx-4">
            404 Error
          </span>
        </h2>
        <p className="text-3xl text-center capitalize mt-6">
          This page could not be found.
        </p>
      </div>
      <div className="mt-6">
        <a
          href="/"
          className="rounded-lg shadow-lg bg-green-400 hover:bg-green-300 transition duration-500 ease-in-out text-sm font-semibold tracking-widest capitalize px-5 py-3"
        >
          Go to main page
        </a>
      </div>
    </section>
  );
};
export default NotFound;
