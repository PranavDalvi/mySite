import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Loader from "./components/Loader/Loader.tsx";

const Landing = lazy(() => import("./pages/Landing/Landing.tsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.tsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
