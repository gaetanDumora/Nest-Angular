CREATE TABLE "user" (
	id TEXT PRIMARY KEY,
	createdAt TIMESTAMP,
	gender VARCHAR ( 50 ),
	birthYear VARCHAR ( 50 ),
	degree VARCHAR ( 50 ),
    workSituation VARCHAR ( 50 )
);

CREATE TABLE modes (
	survey_result_id  VARCHAR ( 50 ),
	workoscope_result_id TEXT PRIMARY KEY,
	scores json
);

CREATE TABLE questions (
    id serial PRIMARY KEY,
	step_id VARCHAR ( 50 ),
	step_title TEXT,
	step_index INTEGER,
	question_id VARCHAR ( 50 ),
	question_index INTEGER,
    question_label TEXT
);

CREATE TABLE question_results (
	question_id VARCHAR ( 50 ),
	question_result_id TEXT PRIMARY KEY,
	answer_id VARCHAR ( 50 ),
	survey_result_id VARCHAR ( 50 ),
	created_at TIMESTAMP,
    answer TEXT,
    answer_label TEXT
);

CREATE TABLE survey_results (
	user_id VARCHAR ( 50 ),
	surver_result_id TEXT PRIMARY KEY,
	created_at TIMESTAMP
);

COPY "user" (id, createdAt, gender, birthYear, degree, workSituation) FROM '/var/lib/postgresql/csvs/Users.csv' DELIMITER ',' CSV HEADER;
COPY "modes" (survey_result_id , workoscope_result_id , scores) FROM '/var/lib/postgresql/csvs/Modes.csv' DELIMITER ',' CSV HEADER;
COPY "questions" (step_id , step_title , step_index , question_id , question_index , question_label) FROM '/var/lib/postgresql/csvs/Questions.csv' DELIMITER ',' CSV HEADER;
COPY "question_results" (question_id , question_result_id , answer_id , survey_result_id , created_at , answer , answer_label) FROM '/var/lib/postgresql/csvs/QuestionResults.csv' DELIMITER ',' CSV HEADER;
COPY "survey_results" (user_id , surver_result_id , created_at) FROM '/var/lib/postgresql/csvs/SurveyResults.csv' DELIMITER ',' CSV HEADER;