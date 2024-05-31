import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RoutersPaths } from "./shared/types/enums";
import { Spiner } from "./features/Spiner/Spiner";
import { Midea, Main, Idea, CooperHunter } from "./pages";

function App() {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route index element={<Main />} />
        <Route path={RoutersPaths.MIDEA} element={<Midea />} />
        <Route path={RoutersPaths.IDEA} element={<Idea />} />
        <Route path={RoutersPaths.COOPERHUNTER} element={<CooperHunter />} />
        <Route path={RoutersPaths.OLMO} element={<CooperHunter />} />
        <Route path={RoutersPaths.DAIKIN} element={<CooperHunter />} />
        <Route path={RoutersPaths.MITSUBISHI} element={<CooperHunter />} />
      </Routes>
    </Suspense>
  );
}

export default App;
