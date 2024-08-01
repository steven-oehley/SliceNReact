import { pizzaData } from "../data/data";
import Pizza from "./Pizza";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza, i) => (
            <Pizza key={i} pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu. Please come back later!</p>
      )}
    </main>
  );
}

export default Menu;
