import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RoutersPaths } from "./shared/types/enums";
import { Spiner } from "./features/Spiner/Spiner";
import { Midea, Main, Idea, CooperHunter } from "./pages";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16450465969";
    document.head.appendChild(script);

    const scriptInner = document.createElement("script");
    scriptInner.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16450465969');
    `;
    document.head.appendChild(scriptInner);
  }, []);

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
