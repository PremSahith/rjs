import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard.jsx";
import ThemeContext from "./context/ThemeContext.js";
import { getRandomWeather } from "./utils/mock.js";

function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("Sunny");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [error, setError] = useState("");

  const [weatherData, setWeatherData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [theme, setTheme] = useState("#4A90D9");

  function handleSubmit(e) {
    e.preventDefault();

    if (!city.trim()) {
      setError("City name is required.");
      return;
    }
    if (temperature === "" || isNaN(temperature)) {
      setError("Temperature must be a number.");
      return;
    }
    if (humidity === "" || isNaN(humidity) || humidity < 0 || humidity > 100) {
      setError("Humidity must be a number between 0 and 100.");
      return;
    }
    if (windSpeed === "" || isNaN(windSpeed) || windSpeed < 0) {
      setError("Wind speed must be a positive number.");
      return;
    }

    setError("");
    setWeatherData({
      city,
      temperature: Number(temperature),
      condition,
      humidity: Number(humidity),
      windSpeed: Number(windSpeed),
    });
    setLastUpdated(new Date().toLocaleTimeString());

    setCity("");
    setTemperature("");
    setCondition("Sunny");
    setHumidity("");
    setWindSpeed("");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomData = getRandomWeather();
      setWeatherData(randomData);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!weatherData) return;

    const temp = weatherData.temperature;
    let color;

    if (temp < 20) color = "#4A90D9";
    else if (temp <= 30) color = "#4CAF50";
    else if (temp <= 40) color = "#FF9800";
    else color = "#E53935";

    setTheme(color);
  }, [weatherData]);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
        <h1>Smart Weather Dashboard</h1>

        <form onSubmit={handleSubmit}>
          <div>
            City:{" "}
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            Temperature (°C):{" "}
            <input
              type="text"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>

          <div>
            Condition:{" "}
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="Sunny">Sunny</option>
              <option value="Cloudy">Cloudy</option>
              <option value="Rainy">Rainy</option>
              <option value="Stormy">Stormy</option>
            </select>
          </div>

          <div>
            Humidity (%):{" "}
            <input
              type="text"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
            />
          </div>

          <div>
            Wind Speed (km/h):{" "}
            <input
              type="text"
              value={windSpeed}
              onChange={(e) => setWindSpeed(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <hr />

        {weatherData ? (
          <WeatherCard
            city={weatherData.city}
            temperature={weatherData.temperature}
            condition={weatherData.condition}
            humidity={weatherData.humidity}
            windSpeed={weatherData.windSpeed}
            lastUpdated={lastUpdated}
          />
        ) : (
          <p>No weather data available</p>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
