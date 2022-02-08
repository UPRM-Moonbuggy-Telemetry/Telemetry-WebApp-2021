-- CREATE DATABASE moonbuggy;

-- \c moonbuggy;

-- EX
-- CREATE TABLE name (column data);

CREATE TABLE RoverData
(
    data_id serial primary key,
    created_at date,
    updated_at date
);

CREATE TABLE BatteryData 
(
    battery_id serial primary key,
    battery_percentage int,
    data_id integer references RoverData(data_id)
);

CREATE TABLE LocationData 
(
    location_id serial primary key,
    latitude float,
    longitude float,
    data_id integer references RoverData(data_id)
);

CREATE TABLE SensorData 
(
    sensor_id serial primary key,
    data_id integer references RoverData(data_id)
);

CREATE TABLE StrainData 
(
    strain_id serial primary key,
    strain_center_front_1 float,
    strain_center_front_2 float,
    strain_center_front_3 float,
    strain_center_back_1 float,
    strain_center_back_2 float,
    strain_center_back_3 float,
    strain_backseat_1 float,
    strain_backseat_2 float,
    strain_backseat_3 float,
    shear_strain_1 float,
    shear_strain_2 float,
    shear_strain_3 float,
    sensor_id integer references SensorData(sensor_id)
);

CREATE TABLE VibrationData 
(
    vibration_id serial primary key,
    vibration_front_lft float,
    vibration_front_rt float,
    vibration_rear_lft float,
    vibration_rear_rt float,
    vibration_center_back float,
    sensor_id integer references SensorData(sensor_id)
);

CREATE TABLE HallEffectData 
(
    halleffect_id serial primary key,
    rpm float,
    sensor_id integer references SensorData(sensor_id)
);