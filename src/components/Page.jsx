import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";

export default function Page() {
  return (
    <div className="grid place-items-center h-screen bg-gray-500">
      <Header />
      <WeatherBoard />
    </div>
  );
}
