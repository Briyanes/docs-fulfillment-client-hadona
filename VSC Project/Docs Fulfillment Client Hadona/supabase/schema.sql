-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('agency', 'whitelist')),
  icon TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Articles Table
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  category_slug TEXT,
  order_index INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Search Index Table
CREATE TABLE IF NOT EXISTS search_index (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  content_vector tsvector,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics Table
CREATE TABLE IF NOT EXISTS analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  page_title TEXT,
  user_agent TEXT,
  referrer TEXT,
  session_id TEXT,
  user_id TEXT,
  event_type TEXT DEFAULT 'page_view',
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Feedback Table
CREATE TABLE IF NOT EXISTS feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  article_id UUID REFERENCES articles(id) ON DELETE SET NULL,
  helpful BOOLEAN,
  comment TEXT,
  email TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Search Logs Table
CREATE TABLE IF NOT EXISTS search_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  query TEXT NOT NULL,
  results_count INTEGER,
  clicked_result TEXT,
  clicked_article_id UUID REFERENCES articles(id) ON DELETE SET NULL,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_articles_category_id ON articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_category_slug ON articles(category_slug);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_categories_type ON categories(type);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_search_index_article_id ON search_index(article_id);
CREATE INDEX IF NOT EXISTS idx_search_index_content_vector ON search_index USING GIN(content_vector);
CREATE INDEX IF NOT EXISTS idx_analytics_page_path ON analytics(page_path);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_session_id ON analytics(session_id);
CREATE INDEX IF NOT EXISTS idx_feedback_article_id ON feedback(article_id);
CREATE INDEX IF NOT EXISTS idx_feedback_page_path ON feedback(page_path);
CREATE INDEX IF NOT EXISTS idx_search_logs_query ON search_logs(query);
CREATE INDEX IF NOT EXISTS idx_search_logs_created_at ON search_logs(created_at);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_search_index_updated_at BEFORE UPDATE ON search_index
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

