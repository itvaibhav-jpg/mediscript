# 🚂 MediScript - Railway Deployment Guide

## 🎯 Complete Railway Setup & Deployment

Railway is now your deployment platform! Here's everything you need to know.

---

## ⚡ QUICK DEPLOY (2 Minutes)

### Method 1: Automated Script (RECOMMENDED)

```bash
# Clone the repository
git clone https://github.com/itvaibhav-jpg/mediscript.git
cd mediscript

# Make script executable
chmod +x deploy-to-railway.sh

# Run deployment
./deploy-to-railway.sh
```

**The script will:**
1. ✅ Apply Patients Tab fix
2. ✅ Install dependencies
3. ✅ Build project
4. ✅ Install Railway CLI
5. ✅ Authenticate with Railway
6. ✅ Initialize/link project
7. ✅ Deploy to production

---

## 🔑 ENVIRONMENT VARIABLES

### Required:
```
OPENAI_API_KEY=sk-your-openai-key-here
```

### Optional (for database features):
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### How to Add:

#### Option A: Railway Dashboard
1. Go to https://railway.app/dashboard
2. Select your project
3. Click "Variables" tab
4. Click "New Variable"
5. Add each variable
6. Redeploy

#### Option B: Railway CLI
```bash
railway variables set OPENAI_API_KEY=sk-your-key-here
railway variables set NEXT_PUBLIC_COMPANY_NAME="EdgesOf Solutions Pvt. Ltd."
railway variables set NEXT_PUBLIC_PRODUCT_NAME="MediScript"
```

---

## 🤖 AUTOMATED DEPLOYMENTS (GitHub Actions)

### One-Time Setup (5 Minutes)

#### Step 1: Get Railway Token

1. Go to https://railway.app/account/tokens
2. Click "Create Token"
3. Name: "GitHub Actions - MediScript"
4. Copy the token

#### Step 2: Get Service ID

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link project
cd mediscript
railway link

# Get service ID
railway status
```

Copy the Service ID from the output.

#### Step 3: Add GitHub Secrets

1. Go to https://github.com/itvaibhav-jpg/mediscript/settings/secrets/actions
2. Click "New repository secret"
3. Add these 2 secrets:

| Secret Name | Value | Where to Get |
|-------------|-------|--------------|
| `RAILWAY_TOKEN` | Your Railway token | Step 1 |
| `RAILWAY_SERVICE_ID` | Your service ID | Step 2 |

#### Step 4: Done!

Now every push to `main` branch will automatically deploy to Railway! 🎉

---

## 🚀 DEPLOYMENT METHODS

### Method 1: Automated Script
```bash
./deploy-to-railway.sh
```
**Best for:** First-time deployment

### Method 2: Railway CLI
```bash
railway up
```
**Best for:** Quick manual deploys

### Method 3: GitHub Integration
```bash
git push origin main
```
**Best for:** Continuous deployment (after GitHub Actions setup)

### Method 4: Railway Dashboard
1. Go to https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose `itvaibhav-jpg/mediscript`
5. Add environment variables
6. Deploy!

**Best for:** Visual setup

---

## 📊 RAILWAY FEATURES YOU GET

### Infrastructure:
- ✅ **Automatic HTTPS** - SSL certificates included
- ✅ **Custom domains** - Add your own domain
- ✅ **Auto-scaling** - Handles traffic spikes
- ✅ **Global CDN** - Fast worldwide
- ✅ **Zero-downtime deploys** - No interruptions

### Developer Experience:
- ✅ **Instant rollbacks** - Revert to any deployment
- ✅ **Preview environments** - Test before production
- ✅ **Real-time logs** - Debug easily
- ✅ **Metrics dashboard** - Monitor performance
- ✅ **GitHub integration** - Auto-deploy on push

### Database Support (Future):
- ✅ **PostgreSQL** - For patient records
- ✅ **MySQL** - Alternative database
- ✅ **Redis** - For caching
- ✅ **MongoDB** - NoSQL option

---

## 💰 PRICING

### Starter Plan (FREE):
- ✅ **$5 credit/month** - Enough for development
- ✅ **500 hours** - ~20 days of uptime
- ✅ **Unlimited projects**
- ✅ **All features included**

### Developer Plan ($5/month):
- ✅ **$5 credit + $5 usage**
- ✅ **Priority support**
- ✅ **Higher limits**

### Team Plan ($20/month):
- ✅ **$20 credit + usage**
- ✅ **Team collaboration**
- ✅ **Advanced features**

**Cost Calculator:**
- Small app: ~$5-10/month
- Medium traffic: ~$20-30/month
- High traffic: ~$50-100/month

---

## 🔧 CONFIGURATION FILES

### railway.json
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### nixpacks.toml
```toml
[phases.setup]
nixPkgs = ["nodejs-20_x"]

[phases.install]
cmds = ["npm ci"]

[phases.build]
cmds = ["npm run build"]

[start]
cmd = "npm start"
```

These files are already created in your repository!

---

## 🧪 VERIFY DEPLOYMENT

After deployment:

### 1. Check Deployment Status
```bash
railway status
```

### 2. View Logs
```bash
railway logs
```

### 3. Open in Browser
```bash
railway open
```

### 4. Test Features
- ✅ Visit production URL
- ✅ Click "Patients" tab
- ✅ Add a new patient
- ✅ Test search functionality
- ✅ Test AI features (if API key added)
- ✅ Check all tabs work

---

## 🐛 TROUBLESHOOTING

### Build Fails

**Check:**
```bash
# Test build locally
npm run build

# Check Railway logs
railway logs
```

**Common fixes:**
- Verify Node.js version (20.x)
- Check package.json dependencies
- Ensure .env variables are set

### Deployment Succeeds but Site Broken

**Check:**
1. Environment variables in Railway dashboard
2. Deployment logs for errors
3. Browser console for JavaScript errors

**Fix:**
```bash
# Redeploy
railway up --detach

# Check logs
railway logs --follow
```

### "Railway CLI not found"

**Fix:**
```bash
npm install -g @railway/cli
```

### Authentication Issues

**Fix:**
```bash
railway logout
railway login
```

---

## 📈 MONITORING & LOGS

### View Real-Time Logs
```bash
railway logs --follow
```

### View Specific Service Logs
```bash
railway logs --service mediscript
```

### View Deployment History
```bash
railway deployments
```

### Check Resource Usage
```bash
railway status
```

### Railway Dashboard
- **URL:** https://railway.app/dashboard
- **Metrics:** CPU, Memory, Network
- **Logs:** Real-time and historical
- **Deployments:** History and rollback

---

## 🌐 CUSTOM DOMAIN

### Add Custom Domain:

1. **Railway Dashboard:**
   - Go to your project
   - Click "Settings"
   - Click "Domains"
   - Click "Add Domain"
   - Enter your domain

2. **DNS Configuration:**
   - Add CNAME record:
   ```
   Type: CNAME
   Name: www (or @)
   Value: [your-railway-domain].railway.app
   ```

3. **SSL Certificate:**
   - Automatically provisioned by Railway
   - Takes 5-10 minutes

---

## 🔄 ROLLBACK DEPLOYMENT

### Via CLI:
```bash
# List deployments
railway deployments

# Rollback to specific deployment
railway rollback [deployment-id]
```

### Via Dashboard:
1. Go to Railway dashboard
2. Select your project
3. Click "Deployments"
4. Find the deployment to rollback to
5. Click "Rollback"

---

## 📊 DEPLOYMENT CHECKLIST

- [ ] Repository cloned
- [ ] Railway CLI installed
- [ ] Authenticated with Railway
- [ ] Project initialized/linked
- [ ] Environment variables added
- [ ] Patients Tab fix applied
- [ ] Build successful locally
- [ ] Deployed to Railway
- [ ] Production URL accessible
- [ ] All features tested
- [ ] Custom domain configured (optional)
- [ ] GitHub Actions setup (optional)

---

## 🎯 NEXT STEPS

### Immediate:
1. ✅ Deploy using automated script
2. ✅ Add environment variables
3. ✅ Test production deployment
4. ✅ Configure custom domain

### Short-term:
1. Set up GitHub Actions for auto-deploy
2. Add PostgreSQL database for patient records
3. Set up monitoring and alerts
4. Configure backup strategy

### Long-term:
1. Add Redis for caching
2. Implement background workers
3. Set up staging environment
4. Scale resources as needed

---

## 🚀 QUICK COMMANDS REFERENCE

```bash
# Deploy
railway up

# View logs
railway logs

# Open in browser
railway open

# Check status
railway status

# List deployments
railway deployments

# Rollback
railway rollback [id]

# Add variable
railway variables set KEY=value

# List variables
railway variables

# Link project
railway link

# Unlink project
railway unlink

# Logout
railway logout

# Login
railway login
```

---

## 💡 PRO TIPS

### 1. Use Preview Environments
```bash
# Create preview from branch
git checkout -b feature/new-feature
git push origin feature/new-feature
railway up --environment preview
```

### 2. Monitor Costs
- Check Railway dashboard regularly
- Set up billing alerts
- Use $5 free credit wisely

### 3. Optimize Performance
- Enable caching
- Optimize images
- Use CDN for static assets
- Monitor response times

### 4. Security Best Practices
- Never commit secrets
- Use environment variables
- Enable 2FA on Railway account
- Regularly update dependencies

---

## 📞 SUPPORT

### Railway Resources:
- **Documentation:** https://docs.railway.app
- **Discord:** https://discord.gg/railway
- **Status:** https://status.railway.app
- **Blog:** https://blog.railway.app

### MediScript Resources:
- **GitHub Issues:** https://github.com/itvaibhav-jpg/mediscript/issues
- **Documentation:** See repository README
- **Deployment Guides:** This file and others in repo

---

## 🎉 SUCCESS!

You're now ready to deploy MediScript to Railway!

**Quick Start:**
```bash
git clone https://github.com/itvaibhav-jpg/mediscript.git
cd mediscript
chmod +x deploy-to-railway.sh
./deploy-to-railway.sh
```

**Your app will be live in 2 minutes!** 🚀

---

**Made with ❤️ by EdgesOf Solutions**

**Powered by Bhindi AI**

**Deployed on Railway 🚂**
