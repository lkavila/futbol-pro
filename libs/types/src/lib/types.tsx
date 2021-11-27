export interface UiProps {
  playerName: string;
  playerAge: number;
}

export interface IndexProps {
  countries: Array<Country>;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}

export interface Player {
  name: string;
  photo: string;
  position: string;
  age: number;
  id: number;
}

export interface Players {
  players: Array<Player>;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  founded: number;
}

export interface Venue {
  address: string;
  capacity: number;
  name: string;
  city: string;
  id: number;
  image: string;
}

export interface Teams {
  team: Team;
  venue: Venue;
}