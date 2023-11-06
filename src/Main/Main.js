import { defaultClothingItems } from "../Utils/Constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../Itemcard/ItemCard";
import { useMemo } from "react";
import "../Main/Main.css";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  return (
    <main className="main">
      <WeatherCard day={true} type="Cloudy" weatherTemp={weatherTemp} />
      <section id="card-section" className="card_section">
        <div>Today is {weatherTemp}°F/ You may want to wear:</div>
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} key="item._id" />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
