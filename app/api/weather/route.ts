import { WeatherRepository } from "./weather.repository";

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(
  request: Request,
) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  if (!q) {
    return new Response('Missing required parameter', {
      status: 400,
      headers: { 'content-type': 'text/plain' },
    });
  }

  const weatherRepository = new WeatherRepository(process.env.OPENWEATHER_API_KEY || '');

  const geoLocation = await weatherRepository.getGeoLocation(q);

  if (!geoLocation || !geoLocation.lat || !geoLocation.lon) {
    return new Response('Failed to fetch geo location data', {
      status: 500,
      headers: { 'content-type': 'text/plain' },
    });
  }

  const weather = await weatherRepository.getWeather(geoLocation.lat, geoLocation.lon);

  return new Response(JSON.stringify(weather), {
    headers: { 'content-type': 'application/json' },
  });
}