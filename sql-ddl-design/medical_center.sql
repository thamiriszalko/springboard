CREATE TABLE medical_center (
    id SERIAL PRIMARY KEY,
    name TEXT  NOT NULL
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    medical_center_id INTEGER REFERENCES medical_center ON DELETE SET NULL
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    birth_date DATE NOT NULL,
    adress TEXT NOT NULL
);

CREATE TABLE diseases (
    id SERIAL PRIMARY KEY,
    disease_name TEXT NOT NULL
);

CREATE TABLE patient_doctor (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients ON DELETE SET NULL,
    doctor_id INTEGER REFERENCES doctors ON DELETE SET NULL
);

CREATE TABLE patient_disease (
    id SERIAL PRIMARY KEY,
    disease_id INTEGER REFERENCES diseases ON DELETE SET NULL,
    patient_id INTEGER REFERENCES patients ON DELETE SET NULL,
);

