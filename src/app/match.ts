export interface Match {
  id?: number
  matchTeams?: MatchTeams
  time?: string
  date?: string
  result?: Result
  showMatchTeams?: boolean
}

export interface Result {
  home?: number
  away?: number
  period?: string
  winner?: string
}

export interface MatchTeams {
  home?: Home,
  away?: Away
}

export interface Home {
  doc?: string,
  _id?: number,
  sid?: number,
  uid?: number,
  virtual?: boolean,
  name?: string,
  mediumname?: string,
  abbr?: string,
  nickname?: string,
  isCountry?: boolean,
  haslogo?: boolean
}

export interface Away {
  doc?: string,
  _id?: number,
  sid?: number,
  uid?: number,
  virtual?: boolean,
  name?: string,
  mediumname?: string,
  abbr?: string,
  nickname?: string,
  isCountry?: boolean,
  haslogo?: boolean
}
