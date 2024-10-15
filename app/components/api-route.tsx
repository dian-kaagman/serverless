'use client';
import useSWR from "swr";
import { Weather } from "../types";
import { useState } from "react";
import WeatherCard from "./weather-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ApiRoute({ query }: { query: string }) {
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);

  const { data: weather, error, isLoading } = useSWR<Weather>(
    submittedQuery ? `/api/weather?q=${submittedQuery}` : null,
    fetcher
  );

  const handleFetchClick = () => {
    setSubmittedQuery(query);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <button onClick={handleFetchClick} className="px-4 py-2 mb-4 bg-blue-600 rounded-md">
        Fetch via API route
      </button>
      <WeatherCard weather={weather} error={error} isLoading={isLoading} />
    </div>
  );
}