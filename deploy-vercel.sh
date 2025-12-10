#!/bin/bash

# ============================================
# MEDISCRIPT - AUTOMATED VERCEL DEPLOYMENT
# ============================================

echo "🚀 MediScript AI MVP - Vercel Deployment"
echo "by EdgesOf Solutions Pvt. Ltd."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}📦 Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
fi

echo -e "${GREEN}✅ Vercel CLI found${NC}"
echo ""

# Login to Vercel
echo -e "${BLUE}🔐 Logging in to Vercel...${NC}"
vercel login

echo ""
echo -e "${BLUE}🚀 Deploying to Vercel...${NC}"
vercel --prod

echo ""
echo -e "${GREEN}✅ Deployment initiated!${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: Add environment variables in Vercel dashboard:${NC}"
echo ""
echo "1. Go to: https://vercel.com/dashboard"
echo "2. Select 'mediscript' project"
echo "3. Go to Settings → Environment Variables"
echo "4. Add: OPENAI_API_KEY=your-key-here"
echo ""
echo -e "${BLUE}📝 After adding variables, redeploy:${NC}"
echo "   vercel --prod"
echo ""
echo -e "${GREEN}🎉 Your AI MVP will be live in 2 minutes!${NC}"
