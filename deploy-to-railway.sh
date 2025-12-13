#!/bin/bash

# MediScript - Automated Railway Deployment Script
# This script automates the deployment process to Railway

set -e  # Exit on error

echo "🚂 MediScript - Automated Railway Deployment"
echo "=============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if we're in the right directory
echo -e "${BLUE}Step 1: Checking directory...${NC}"
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ In correct directory${NC}"
echo ""

# Step 2: Apply Patients Tab fix if not already applied
echo -e "${BLUE}Step 2: Checking Patients Tab fix...${NC}"
if [ -f "patients-tab.patch" ]; then
    if git apply --check patients-tab.patch 2>/dev/null; then
        echo -e "${YELLOW}Applying Patients Tab fix...${NC}"
        git apply patients-tab.patch
        git add demo/ai/index.html
        git commit -m "✅ Apply Patients Tab fix for Railway deployment" || echo "Already applied"
        echo -e "${GREEN}✓ Patients Tab fix applied${NC}"
    else
        echo -e "${GREEN}✓ Patients Tab fix already applied${NC}"
    fi
else
    echo -e "${YELLOW}⚠ patients-tab.patch not found, skipping...${NC}"
fi
echo ""

# Step 3: Install dependencies
echo -e "${BLUE}Step 3: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 4: Run build to verify everything works
echo -e "${BLUE}Step 4: Building project...${NC}"
npm run build
echo -e "${GREEN}✓ Build successful${NC}"
echo ""

# Step 5: Check if Railway CLI is installed
echo -e "${BLUE}Step 5: Checking Railway CLI...${NC}"
if ! command -v railway &> /dev/null; then
    echo -e "${YELLOW}Railway CLI not found. Installing...${NC}"
    npm install -g @railway/cli
    echo -e "${GREEN}✓ Railway CLI installed${NC}"
else
    echo -e "${GREEN}✓ Railway CLI already installed${NC}"
fi
echo ""

# Step 6: Login to Railway
echo -e "${BLUE}Step 6: Railway Authentication...${NC}"
echo -e "${YELLOW}Note: You may need to login to Railway if not already authenticated${NC}"
railway whoami || railway login
echo -e "${GREEN}✓ Authenticated with Railway${NC}"
echo ""

# Step 7: Push changes to GitHub
echo -e "${BLUE}Step 7: Pushing changes to GitHub...${NC}"
git push origin main || echo "Already up to date"
echo -e "${GREEN}✓ Changes pushed to GitHub${NC}"
echo ""

# Step 8: Initialize or link Railway project
echo -e "${BLUE}Step 8: Setting up Railway project...${NC}"
if [ -f "railway.toml" ] || [ -d ".railway" ]; then
    echo -e "${GREEN}✓ Railway project already linked${NC}"
else
    echo -e "${YELLOW}Initializing new Railway project...${NC}"
    railway init
    echo -e "${GREEN}✓ Railway project initialized${NC}"
fi
echo ""

# Step 9: Set environment variables
echo -e "${BLUE}Step 9: Environment Variables...${NC}"
echo -e "${YELLOW}Important: Make sure to add your environment variables in Railway dashboard:${NC}"
echo "  - OPENAI_API_KEY"
echo "  - NEXT_PUBLIC_SUPABASE_URL (optional)"
echo "  - NEXT_PUBLIC_SUPABASE_ANON_KEY (optional)"
echo ""
read -p "Have you added environment variables in Railway dashboard? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Please add environment variables in Railway dashboard and run this script again.${NC}"
    echo -e "${BLUE}Visit: https://railway.app/dashboard${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Environment variables confirmed${NC}"
echo ""

# Step 10: Deploy to Railway
echo -e "${BLUE}Step 10: Deploying to Railway...${NC}"
railway up

echo ""
echo -e "${GREEN}=============================================="
echo -e "🎉 DEPLOYMENT COMPLETE!"
echo -e "==============================================${NC}"
echo ""
echo -e "${BLUE}Your MediScript application is now live on Railway!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Visit your Railway dashboard to see the deployment"
echo "2. Check the deployment logs for any issues"
echo "3. Get your production URL from Railway dashboard"
echo "4. Test the production deployment"
echo "5. Configure custom domain if desired"
echo ""
echo -e "${BLUE}Railway Dashboard: https://railway.app/dashboard${NC}"
echo ""
echo -e "${GREEN}Thank you for using MediScript! 🚀${NC}"
