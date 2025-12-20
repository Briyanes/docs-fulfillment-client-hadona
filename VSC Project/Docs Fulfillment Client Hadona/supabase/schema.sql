-- Supabase Database Schema
-- 
-- NOTE: This project currently uses static search data and does not require a database.
-- This schema is provided for future use if you want to store content in Supabase.
--
-- To use this schema:
-- 1. Go to Supabase Dashboard → SQL Editor
-- 2. Paste this schema and run it
-- 3. Update your code to use Supabase queries instead of static data

-- Example: Articles table (optional - for future use)
-- Uncomment if you want to store articles in database

/*
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  "order" INTEGER DEFAULT 0,
  parent_slug TEXT,
  type TEXT CHECK (type IN ('agency', 'whitelist')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_type ON articles(type);

-- Enable Row Level Security (RLS)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON articles
  FOR SELECT
  USING (true);
*/

-- For now, this project works without database.
-- The search functionality uses static data from lib/search-data.ts

