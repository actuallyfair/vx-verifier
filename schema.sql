
CREATE TABLE wagers (
    id        SERIAL PRIMARY KEY,
    player_id INT REFERENCES players(player_id),
    bet_type  VARCHAR(20) NOT NULL,
    amount    DECIMAL(10, 2) NOT NULL,
    currency  VARCHAR(10) NOT NULL
);

CREATE TABLE rock_paper_scissors_bets (
    wager_id INT PRIMARY KEY REFERENCES wagers(id),
    player_choice VARCHAR(10) NOT NULL
);

CREATE TABLE dice_bets (
    wager_id INT PRIMARY KEY REFERENCES wagers(id),
    number_to_beat INT NOT NULL
);

CREATE TABLE roulette_bets (
    wager_id INT PRIMARY KEY REFERENCES wagers(id),
    number_guessed INT NOT NULL
);




-- "dice_bets", { w}