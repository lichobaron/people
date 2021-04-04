CREATE TABLE IF NOT EXISTS person (
  person_id SERIAL PRIMARY KEY,
  fullname VARCHAR,
  birth DATE
);

CREATE TABLE IF NOT EXISTS child (
  id SERIAL PRIMARY KEY,
	child_id BIGINT,
	mother_id BIGINT,
	father_id BIGINT,
	FOREIGN KEY (child_id)
    REFERENCES person (person_id),
	FOREIGN KEY (mother_id)
    REFERENCES person (person_id),
	FOREIGN KEY (father_id)
    REFERENCES person (person_id)
);