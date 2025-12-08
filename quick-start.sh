#!/bin/bash

# ============================================
# MEDISCRIPT - ONE-COMMAND SETUP
# ============================================

echo "🚀 MediScript Quick Start"
echo "by EdgesOf Solutions Pvt. Ltd."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found. Please install Node.js 18+${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js found: $(node --version)${NC}"

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

# Create .env.local if not exists
if [ ! -f .env.local ]; then
    echo -e "${BLUE}🔧 Creating .env.local...${NC}"
    cp .env.example .env.local
    echo -e "${GREEN}✅ Created .env.local - Please update with your keys${NC}"
fi

# Start dev server
echo -e "${BLUE}🚀 Starting development server...${NC}"
echo ""
echo -e "${GREEN}MediScript will be available at: http://localhost:3000${NC}"
echo ""

npm run dev
