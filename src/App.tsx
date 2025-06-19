import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";

const Landing = lazy(() => import("./pages/Landing/Landing.tsx"));
const NotFound = () => <div>404 Not Found</div>;

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
