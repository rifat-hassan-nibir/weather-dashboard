import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavoriteProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <WeatherBoard />
        </div>
      </FavoriteProvider>
    </WeatherProvider>
  );
}

export default App;
