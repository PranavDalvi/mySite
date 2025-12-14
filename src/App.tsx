import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Loader from "./components/Loader/Loader.tsx";
import { Dvimaya } from "./pages/Projects/Dvimaya.tsx";
import Udaan from "./pages/Projects/Udaan.tsx";

const Landing = lazy(() => import("./pages/Landing/Landing.tsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.tsx"));

function App() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/projects/dvimaya" element={<Dvimaya />} />
                    <Route path="/projects/udaan" element={<Udaan />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
