import "./HomePage.css";
import logo from "../assets/pokemon-logo.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section id="home-page">
      <h1 className="title">Bienvenido</h1>
      <img src={logo} alt="Pokemon logo" className="logo" />
      <Link to="/pokemons" className="link">
        Entrar
      </Link>
    </section>
  );
}

export default Homepage;
