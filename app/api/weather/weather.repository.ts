import type { GeoLocation, Weather } from "@/app/types";
import { WeatherRequester } from "./weather.requester";
import { WeatherMapper } from "./weather.mapper";

export class WeatherRepository {
  private weatherRequester: WeatherRequester;

  constructor(apiKey: string) {
    this.weatherRequester = new WeatherRequester(apiKey);
  }

  async getWeather(lat: string, lon: string): Promise<Weather> {
    const weatherDto = await this.weatherRequester.fetchWeather(lat, lon);
    const mappedWeather = WeatherMapper.mapWeather(weatherDto);

    return mappedWeather;
  }

  async getGeoLocation(name: string): Promise<GeoLocation> {
    const geoDto = await this.weatherRequester.fetchGeoLocation(name);

    if (!geoDto || !geoDto[0]) {
      throw new Error('Failed to fetch geo location data');
    }

    const mappedGeo = WeatherMapper.mapGeo(geoDto[0]);

    return mappedGeo;
  }
}