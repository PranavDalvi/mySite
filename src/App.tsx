import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Landing = lazy(() => import("./pages/Landing/Landing"));
const AllProjects = lazy(() => import("./pages/Projects/AllProjects"));
const Dvimaya = lazy(() =>
  import("./pages/Projects/Dvimaya").then((module) => ({
    default: module.Dvimaya,
  }))
);
const Udaan = lazy(() => import("./pages/Projects/Udaan"));
const InLuna = lazy(() => import("./pages/Projects/InLuna"));
const Droolin = lazy(() => import("./pages/Projects/Droolin"));
const ShAstra = lazy(() => import("./pages/Projects/ShAstra"));
const ResumePage = lazy(() => import("./pages/Resume/ResumePage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/dvimaya" element={<Dvimaya />} />
          <Route path="/projects/udaan" element={<Udaan />} />
          <Route path="/projects/inluna" element={<InLuna />} />
          <Route path="/projects/droolin" element={<Droolin />} />
          <Route path="/projects/sh-astra" element={<ShAstra />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
