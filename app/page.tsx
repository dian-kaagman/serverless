'use client';
import ApiRoute from './components/api-route';
import ClientComponent from './components/client-component';
import { useState } from 'react';

export default function Index() {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 w-full">
      <div className="w-full max-w-md mb-8 mx-auto pb-8 pt-32">
        <h2 className="text-3xl mb-4">Weather App</h2>
        <p className="text-sm mb-4">Enter a city, state, or country to get the current weather.</p>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city, state, country"
          className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex w-full mx-auto max-w-screen-lg gap-8">
        <div className="flex-1 flex flex-col items-center">
          <ApiRoute query={query} />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <ClientComponent query={query} />
        </div>
      </div>
    </div>
  );
}