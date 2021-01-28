CREATE TABLE leagues (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    abbreviation VARCHAR(3),
    league_id INTEGER REFERENCES leagues ON DELETE NULL
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    team1 INTEGER REFERENCES teams ON DELETE NULL,
    team2 INTEGER REFERENCES teams ON DELETE NULL,
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    team INTEGER REFERENCES teams ON DELETE NULL,
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    goals INTEGER NOT NULL,
    match_id INTEGER REFERENCES matches ON DELETE NULL,
    payler_id INTEGER REFERENCES players ON DELETE NULL,
);

CREATE TABLE referees (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
);

CREATE TABLE matches_referees (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches ON DELETE NULL,
    referee_id INTEGER REFERENCES referees ON DELETE NULL,
);

CREATE TABLE ranking (
    id SERIAL PRIMARY KEY,
    rank INTEGER NOT NULL,
    team INTEGER REFERENCES teams ON DELETE NULL,
    league INTEGER REFERENCES leagues ON DELETE NULL,
);




