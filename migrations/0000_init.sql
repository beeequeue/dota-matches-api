-- Migration number: 0000 	 2022-11-19T16:52:25.099Z

CREATE TABLE match
(
  id         TEXT NOT NULL,
  matchType  TEXT,
  teamOneId  TEXT,
  teamTwoId  TEXT,
  leagueName TEXT,
  streamUrl  TEXT,
  startsAt   TEXT,

  PRIMARY KEY (id)
);

CREATE INDEX match_teamOneId_idx ON match (teamOneId);
CREATE INDEX match_teamTwoId_idx ON match (teamTwoId);
CREATE INDEX match_startsAt_idx ON match (startsAt);
CREATE INDEX match_everything_idx ON match (teamOneId, teamTwoId, startsAt);

CREATE TABLE league
(
  name TEXT NOT NULL,
  url  TEXT,

  PRIMARY KEY (name)
);

CREATE TABLE team
(
  id   TEXT NOT NULL,
  name TEXT NOT NULL,
  url  TEXT,

  PRIMARY KEY (id)
);

CREATE INDEX team_name_idx ON league (name);

