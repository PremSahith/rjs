import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function WeatherCard({
  city,
  temperature,
  condition,
  humidity,
  windSpeed,
  lastUpdated,
}) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="weather-card"
      style={{
        backgroundColor: theme,
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
        transition: "background-color 0.5s ease",
      }}
    >
      <h2>{city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
      {lastUpdated && (
        <p>
          <small>Last updated: {lastUpdated}</small>
        </p>
      )}
    </div>
  );
}

export default WeatherCard;
