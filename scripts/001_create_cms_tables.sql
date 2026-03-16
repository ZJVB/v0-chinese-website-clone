-- CMS Tables for Cube Cang Website

-- Hero Banners Table
CREATE TABLE IF NOT EXISTS hero_banners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subtitle TEXT,
  image_url TEXT NOT NULL,
  link_url TEXT,
  link_text TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- News/Articles Table
CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT DEFAULT '公司动态',
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Solutions Table
CREATE TABLE IF NOT EXISTS solutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  image_url TEXT,
  content TEXT,
  features JSONB DEFAULT '[]',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Industries Table
CREATE TABLE IF NOT EXISTS industries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  content TEXT,
  features JSONB DEFAULT '[]',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Warehousing Services Table
CREATE TABLE IF NOT EXISTS warehousing_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  content TEXT,
  features JSONB DEFAULT '[]',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Company Info Table (Settings)
CREATE TABLE IF NOT EXISTS company_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Admin Users Table (for tracking CMS users)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'editor',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE hero_banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE warehousing_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public read policies (for frontend)
CREATE POLICY "Public can read active banners" ON hero_banners FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read published news" ON news FOR SELECT USING (is_published = true);
CREATE POLICY "Public can read active solutions" ON solutions FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read active industries" ON industries FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read active warehousing" ON warehousing_services FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read company info" ON company_info FOR SELECT USING (true);

-- Admin policies (authenticated users can manage all content)
CREATE POLICY "Admins can manage banners" ON hero_banners FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage news" ON news FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage solutions" ON solutions FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage industries" ON industries FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage warehousing" ON warehousing_services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage company info" ON company_info FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can view admin users" ON admin_users FOR SELECT USING (auth.role() = 'authenticated');

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables
CREATE TRIGGER update_hero_banners_updated_at BEFORE UPDATE ON hero_banners FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_solutions_updated_at BEFORE UPDATE ON solutions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_industries_updated_at BEFORE UPDATE ON industries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_warehousing_services_updated_at BEFORE UPDATE ON warehousing_services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_company_info_updated_at BEFORE UPDATE ON company_info FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
