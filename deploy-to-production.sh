#!/bin/bash

# MediScript - Automated Production Deployment Script
# This script automates the deployment process to Vercel

set -e  # Exit on error

echo "🚀 MediScript - Automated Production Deployment"
echo "================================================"
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
        git commit -m "✅ Apply Patients Tab fix for production deployment" || echo "Already applied"
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

# Step 5: Check if Vercel CLI is installed
echo -e "${BLUE}Step 5: Checking Vercel CLI...${NC}"
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
    echo -e "${GREEN}✓ Vercel CLI installed${NC}"
else
    echo -e "${GREEN}✓ Vercel CLI already installed${NC}"
fi
echo ""

# Step 6: Push changes to GitHub
echo -e "${BLUE}Step 6: Pushing changes to GitHub...${NC}"
git push origin main
echo -e "${GREEN}✓ Changes pushed to GitHub${NC}"
echo ""

# Step 7: Deploy to Vercel
echo -e "${BLUE}Step 7: Deploying to Vercel...${NC}"
echo -e "${YELLOW}Note: You may need to login to Vercel if not already authenticated${NC}"
echo ""

# Check if already linked
if [ -f ".vercel/project.json" ]; then
    echo -e "${GREEN}✓ Project already linked to Vercel${NC}"
else
    echo -e "${YELLOW}Linking project to Vercel...${NC}"
    vercel link --yes
fi

# Deploy to production
echo -e "${BLUE}Deploying to production...${NC}"
vercel --prod

echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}🎉 DEPLOYMENT COMPLETE!${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "${BLUE}Your MediScript application is now live!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Visit your Vercel dashboard to see the deployment"
echo "2. Add environment variables if needed (OPENAI_API_KEY, etc.)"
echo "3. Test the production deployment"
echo "4. Configure custom domain if desired"
echo ""
echo -e "${GREEN}Thank you for using MediScript! 🚀${NC}"
