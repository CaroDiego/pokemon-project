import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import { lazy, Suspense } from "react";
// import PokemonsPage from "./pages/PokemonsPage";
// import PokemonPage from "./pages/PokemonPage";
// import ErrorPage from "./pages/ErrorPage";

//*Sirve para que no se cargue todos las paginas al inicio, sino que se cargue solo cuando se necesite
//!Hacer en proyectos grandes
const PokemonsPage = lazy(() => import("./pages/PokemonsPage"));
const PokemonPage = lazy(() => import("./pages/PokemonPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
