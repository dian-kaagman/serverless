import { Weather } from "@/app/types";

export default function ClientComponent({ weather, error, isLoading }: { weather: Weather | undefined, error: boolean, isLoading: boolean }) {
  return (
    <div>
      {isLoading && <div className="mb-4">Loading...</div>}
      {error && <div className="mb-4">Error loading data.</div>}
      {weather && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full">
          <h2 className="text-2xl mb-2">{weather.city}, {weather.country}</h2>
            <div className="text-gray-400 mb-4">{weather.date}</div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="text-lg">Temp: {weather.temperature}°C</div>
                <div className="text-sm">Feels like: {weather.feels_like}°C</div>
                <div className="text-sm">Min: {weather.temp_min}°C, Max: {weather.temp_max}°C</div>
              </div>
            </div>
            <div className="text-sm">Wind: {weather.wind_speed} m/s at {weather.wind_deg}°</div>
            <div className="text-sm">Cloudiness: {weather.clouds}%</div>
            {weather.snow > 0 && <div className="text-sm">Snow: {weather.snow} mm/h</div>}
            {weather.rain > 0 && <div className="text-sm">Rain: {weather.rain} mm/h</div>}
            <div className="text-sm mt-2">Sunrise: {weather.sunrise}</div>
            <div className="text-sm">Sunset: {weather.sunset}</div>
        </div>
      )}
    </div>
  )
}
