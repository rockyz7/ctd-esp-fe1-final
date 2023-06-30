export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

export interface APIResponse {
  info: Info;
  results: Personaje[] | [];
}

interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export const errorLlamada = {
  info: {
    count: 0,
    next: null,
    prev: null,
    pages: 0,
  },
  results: [],
};

export interface Detalle {
  id: number;
  name: string;
  gender: string;
  origin: Origin;
  image: string;
  episode: string[];
}

export interface Episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}
