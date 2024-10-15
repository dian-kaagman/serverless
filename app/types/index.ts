export type WeatherDto = {
  coord?: {
    lon?: string;
    lat?: string;
  }
  weather?: {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
  }[];
  main?: {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
  };
  wind?: {
    speed?: number;
    deg?: number;
  };
  clouds?: {
    all?: number;
  };
  snow?: {
    '1h'?: number;
  };
  rain?: {
    '1h'?: number;
  };
  sys?: {
    country?: string;
    sunrise?: number;
    sunset?: number;
  };
  name?: string;
  dt?: number;
}

export type Weather = {
  city: string;
  lat: string;
  lon: string;
  date: string;
  temperature: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  wind_speed: number;
  wind_deg: number;
  clouds: number;
  snow: number;
  rain: number;
  country: string;
  sunrise: string;
  sunset: string;
}

export type GeoDto = {
  name?: string;
  local_names?: Record<string, string>;
  lat?: string;
  lon?: string;
  country?: string;
  state?: string;
}

export type GeoLocation = {
  lat?: string;
  lon?: string;
}