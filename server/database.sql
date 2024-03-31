CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(25) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  is_activated BOOLEAN DEFAULT false,
  activation_link VARCHAR(400)
);

CREATE TABLE refresh_sessions(
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  refresh_token VARCHAR(400) NOT NULL
);