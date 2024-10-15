import type { GeoDto, GeoLocation, Weather, WeatherDto } from "@/app/types";

export class WeatherMapper {
  static mapWeather(dto: WeatherDto): Weather {
    return {
      lat: dto?.coord?.lat || '',
      lon: dto?.coord?.lon || '',
      city: dto.name || '',
      date: dto.dt ? new Date(dto.dt * 1000).toLocaleString() : '',
      temperature: dto.main?.temp || 0,
      feels_like: dto.main?.feels_like || 0,
      temp_min: dto.main?.temp_min || 0,
      temp_max: dto.main?.temp_max || 0,
      wind_speed: dto.wind?.speed || 0,
      wind_deg: dto.wind?.deg || 0,
      clouds: dto.clouds?.all || 0,
      snow: dto.snow?.['1h'] || 0,
      rain: dto.rain?.['1h'] || 0,
      country: dto.sys?.country || '',
      sunrise: dto.sys?.sunrise ? new Date(dto.sys.sunrise * 1000).toLocaleString() : '',
      sunset: dto.sys?.sunset ? new Date(dto.sys.sunset * 1000).toLocaleString() : '',
    }
  }

  static mapGeo(dto: GeoDto): GeoLocation {
    return {
      lat: dto.lat,
      lon: dto.lon,
    }
  }
}