import { Link } from "react-router";
import Button from "../../components/Button/Button";

const NotFound = () => {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full text-center rounded-xl transperent-card p-8">
        <div className="text-7xl md:text-9xl font-extrabold tracking-tight mb-4">
          404
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold mb-3">
          Page not found
        </h1>
        <p className="text-gray-400 mb-6">
          Oops — the page you were looking for doesn't exist, or it may have
          been moved. Here are some helpful options to get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link to="/">
            <Button className="px-6">Go to Home</Button>
          </Link>

          <button
            onClick={goBack}
            aria-label="Go back"
            className="w-full sm:w-auto"
          >
            <Button className="px-6">Go Back</Button>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
