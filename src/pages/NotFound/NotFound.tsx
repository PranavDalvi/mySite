import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center rounded-2xl transperent-card p-8 md:p-12 border border-[rgba(145,182,232,0.28)] shadow-[0_20px_45px_rgba(4,9,18,0.5)]">
        <div className="text-7xl md:text-9xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#7fd0ff] to-[#9df7e0] bg-clip-text text-transparent">
          404
        </div>
        <h1 className="display-face text-2xl md:text-4xl font-semibold mb-3 text-[#edf6ff]">
          Page Not Found
        </h1>
        <p className="text-[#c7d5ea] mb-8 max-w-md mx-auto">
          Oops — the page you were looking for doesn't exist, or it may have
          been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => navigate("/")}
            variant="primary"
            className="w-full sm:w-auto px-6"
          >
            <Home size={18} /> Go to Home
          </Button>

          <Button
            onClick={goBack}
            variant="secondary"
            aria-label="Go back"
            className="w-full sm:w-auto px-6"
          >
            <ArrowLeft size={18} /> Go Back
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
