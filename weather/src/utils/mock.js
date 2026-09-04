const cities = [
  "London",
  "Tokyo",
  "Dubai",
  "New York",
  "Sydney",
  "Moscow",
  "Cairo",
];
const conditions = ["Sunny", "Cloudy", "Rainy", "Stormy"];

export function getRandomWeather() {
  const city = cities[Math.floor(Math.random() * cities.length)];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  const temperature = Math.floor(Math.random() * 50) - 5; // -5 to 45
  const humidity = Math.floor(Math.random() * 100);
  const windSpeed = Math.floor(Math.random() * 60);

  return { city, condition, temperature, humidity, windSpeed };
}
