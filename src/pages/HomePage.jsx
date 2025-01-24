import "./HomePage.css";
import logo from "../assets/pokemon-logo.png";
import { Link } from "react-router-dom";
import { FixedSizeList } from "react-window"; //*Solo si hay muchos elementos

const data = Array.from({ length: 100000 }, (_, index) => `Item ${index}`);

function Homepage() {
  const renderRow = ({ index, style }) => (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid lightgray",
      }}
    >
      <span>{data[index]}</span>
    </div>
  );

  return (
    <section id="home-page">
      <h1 className="title">Bienvenido</h1>
      <img src={logo} alt="Pokemon logo" className="logo" />
      <Link to="/pokemons" className="link">
        Entrar
      </Link>
      <div>
        <FixedSizeList
          height={400}
          width={400}
          itemCount={data.length}
          itemSize={40}
        >
          {renderRow}
        </FixedSizeList>
      </div>
    </section>
  );
}

export default Homepage;
