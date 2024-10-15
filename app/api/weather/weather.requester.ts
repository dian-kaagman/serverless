import { GeoDto, WeatherDto } from "@/app/types";

export class WeatherRequester {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async fetchWeather(lat: string, lon: string): Promise<WeatherDto> {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    return await response.json();
  }

  async fetchGeoLocation(name: string): Promise<GeoDto[]> {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${this.apiKey}`);

    if (!response.ok) {
      throw new Error('Failed to fetch geo location data');
    }

    return await response.json();
  }
}