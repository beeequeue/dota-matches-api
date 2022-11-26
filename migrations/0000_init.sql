CREATE TABLE match
(
  id         TEXT PRIMARY KEY,
  matchType  TEXT,
  teamOneId  TEXT,
  teamTwoId  TEXT,
  leagueName TEXT,
  streamUrl  TEXT,
  startsAt   TEXT
);

CREATE INDEX match_teamOneId_idx ON match (teamOneId);
CREATE INDEX match_teamTwoId_idx ON match (teamTwoId);
CREATE INDEX match_startsAt_idx ON match (startsAt);
CREATE INDEX match_everything_idx ON match (teamOneId, teamTwoId, startsAt);

CREATE TABLE league
(
  name TEXT PRIMARY KEY,
  url  TEXT
);

CREATE TABLE team
(
  id   TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  url  TEXT
);

CREATE INDEX team_name_idx ON league (name);
