-- PlaySchl Database Initialization
-- This runs on first container start

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "citext";

-- Create schemas for logical separation
CREATE SCHEMA IF NOT EXISTS academics;
CREATE SCHEMA IF NOT EXISTS finance;
CREATE SCHEMA IF NOT EXISTS communications;

-- Grant permissions
GRANT ALL ON SCHEMA academics TO playschl;
GRANT ALL ON SCHEMA finance TO playschl;
GRANT ALL ON SCHEMA communications TO playschl;
