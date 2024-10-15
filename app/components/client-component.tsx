'use client';
import { WeatherRepository } from "@/app/api/weather/weather.repository";
import { Weather } from "../types";
import { useState } from "react";
import WeatherCard from "./weather-card";

const getWeather = async (query: string): Promise<Weather> => {
  const weatherRepository = new WeatherRepository(process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '');
  const geoLocation = await weatherRepository.getGeoLocation(query);

  if (!geoLocation || !geoLocation.lat || !geoLocation.lon) {
    throw new Error('Failed to fetch geo location data');
  }

  const weather = await weatherRepository.getWeather(geoLocation.lat, geoLocation.lon);

  return weather;
}

export default function ClientComponent({ query }: { query: string }) {
  const [weather, setWeather] = useState<Weather | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFetchClick = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const weatherData = await getWeather(query);
      setWeather(weatherData);
    } catch {
      setError(true);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <button onClick={handleFetchClick} className="px-4 py-2 mb-4 bg-blue-600 rounded-md">
        Fetch client side
      </button>
      <WeatherCard weather={weather} error={error} isLoading={isLoading} />
    </div>
  );
}