-- Database schema for Mavi Yolculuk Gezisi
-- Run this on MySQL server

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  yacht_id VARCHAR(100) NOT NULL,
  yacht_name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  nights INT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  country VARCHAR(100) NOT NULL,
  guests INT NOT NULL,
  special_requests TEXT,
  total_price DECIMAL(10, 2),
  currency VARCHAR(10) DEFAULT 'EUR',
  status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
  ip_address VARCHAR(50),
  user_agent TEXT,
  language VARCHAR(10) DEFAULT 'tr',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255) NOT NULL,
  yacht VARCHAR(255),
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
  ip_address VARCHAR(50),
  user_agent TEXT,
  language VARCHAR(10) DEFAULT 'tr',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- Newsletter subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  language VARCHAR(10) DEFAULT 'tr',
  is_active BOOLEAN DEFAULT TRUE,
  ip_address VARCHAR(50),
  source VARCHAR(100) DEFAULT 'website',
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP NULL,
  INDEX idx_email (email),
  INDEX idx_is_active (is_active)
);
