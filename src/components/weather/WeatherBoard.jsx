import { useContext } from "react";
import { WeatherContext } from "../../context";
import ToggleFavorite from "./ToggleFavorite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

export default function WeatherBoard() {
  const { loading } = useContext(WeatherContext);

  return (
    <main>
      <section className="">
        <div className="container mx-auto">
          <div className="grid bg-gray-400 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
              {loading.state ? (
                <p className="text-2xl">{loading.message}</p>
              ) : (
                <>
                  <ToggleFavorite />
                  <WeatherHeadline />
                  <WeatherCondition />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
