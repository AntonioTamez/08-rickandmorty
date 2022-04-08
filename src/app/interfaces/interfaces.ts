// character


export interface Characters {
  info: InfoCharacter;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface InfoCharacter {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}


//location

export interface Locations {
  info: InfoLocation;
  results: Location[];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface InfoLocation {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

//episode

export interface Episodes {
  info: InfoEpisode;
  results: Episode[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface InfoEpisode {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}