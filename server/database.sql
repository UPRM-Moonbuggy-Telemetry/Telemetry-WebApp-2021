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

CREATE TABLE StrainData 
(
    strain_id serial primary key,
    strain_upper_aarm_left float,
    strain_upper_aarm_right float,
    strain_swing_arm_left float,
    strain_swing_arm_right float,
    strain_collapsion_front float,
    strain_collapsion_back float,
    strain_p_modified float,
    data_id integer references RoverData(sensor_id)
);

CREATE TABLE VibrationData 
(
    vibration_id serial primary key,
    vibration_front_lft float,
    vibration_front_rt float,
    vibration_rear_lft float,
    vibration_rear_rt float,
    vibration_center_back float,
    data_id integer references RoverData(data_id)
);

CREATE TABLE HallEffectData 
(
    halleffect_id serial primary key,
    rpm float,
    data_id integer references RoverData(data_id)
);