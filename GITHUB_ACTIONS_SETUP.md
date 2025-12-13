# 🤖 GitHub Actions - Automated Deployment Setup

## ✨ What This Does

Once configured, **every push to the `main` branch will automatically deploy to Vercel production**. No manual intervention needed!

---

## 🔑 One-Time Setup (5 Minutes)

### Step 1: Get Vercel Tokens

1. **Go to Vercel**: https://vercel.com/account/tokens
2. **Click**: "Create Token"
3. **Name**: "GitHub Actions - MediScript"
4. **Scope**: Full Account
5. **Click**: "Create"
6. **Copy** the token (you'll need it in Step 3)

### Step 2: Get Vercel Project IDs

Run these commands in your terminal:

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
cd mediscript
vercel link

# Get your Org ID and Project ID
cat .vercel/project.json
```

You'll see output like:
```json
{
  "orgId": "team_xxxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxxx"
}
```

**Copy both IDs** - you'll need them in Step 3.

### Step 3: Add GitHub Secrets

1. **Go to**: https://github.com/itvaibhav-jpg/mediscript/settings/secrets/actions
2. **Click**: "New repository secret"
3. **Add these 3 secrets**:

| Secret Name | Value | Where to Get It |
|-------------|-------|-----------------|
| `VERCEL_TOKEN` | Your Vercel token | Step 1 |
| `VERCEL_ORG_ID` | Your org/team ID | Step 2 (orgId) |
| `VERCEL_PROJECT_ID` | Your project ID | Step 2 (projectId) |

**Example:**
- Name: `VERCEL_TOKEN`
- Value: `abc123xyz...` (your actual token)
- Click "Add secret"

Repeat for all 3 secrets.

---

## 🚀 How to Use

### Automatic Deployment

After setup, deployments happen automatically:

```bash
# Make any changes
git add .
git commit -m "Update feature"
git push origin main

# GitHub Actions will automatically:
# 1. Build your project
# 2. Deploy to Vercel production
# 3. Notify you when complete
```

### Manual Deployment

You can also trigger deployments manually:

1. Go to: https://github.com/itvaibhav-jpg/mediscript/actions
2. Click: "Deploy to Vercel Production"
3. Click: "Run workflow"
4. Select branch: `main`
5. Click: "Run workflow"

---

## 📊 Monitor Deployments

### GitHub Actions Dashboard

1. Go to: https://github.com/itvaibhav-jpg/mediscript/actions
2. See all deployment runs
3. Click any run to see detailed logs
4. Check for errors or success

### Vercel Dashboard

1. Go to: https://vercel.com/dashboard
2. Select "mediscript" project
3. See all deployments
4. View deployment logs
5. Check production URL

---

## ✅ Verify Setup

After adding secrets, test the workflow:

```bash
# Make a small change
echo "# Test deployment" >> README.md
git add README.md
git commit -m "Test: Verify GitHub Actions deployment"
git push origin main

# Then check:
# 1. GitHub Actions tab - workflow should start
# 2. Vercel dashboard - deployment should appear
# 3. Production URL - changes should be live
```

---

## 🔧 Workflow Features

The GitHub Actions workflow:

- ✅ **Triggers on**: Every push to `main` branch
- ✅ **Runs on**: Ubuntu latest
- ✅ **Node.js**: Version 20
- ✅ **Steps**:
  1. Checkout code
  2. Setup Node.js with npm cache
  3. Install dependencies
  4. Build project
  5. Deploy to Vercel production
  6. Report success

---

## 🎯 Benefits

### Before (Manual):
```bash
git push origin main
# Then manually:
vercel --prod
# Wait...
# Check deployment
# Add environment variables
# Redeploy if needed
```

### After (Automated):
```bash
git push origin main
# Done! ✅
# Automatic build
# Automatic deployment
# Automatic production update
```

---

## 🔐 Security

- ✅ Secrets are encrypted by GitHub
- ✅ Never exposed in logs
- ✅ Only accessible to workflow
- ✅ Can be rotated anytime
- ✅ Scoped to repository

---

## 🐛 Troubleshooting

### Workflow fails at "Deploy to Vercel"

**Check:**
- All 3 secrets are added correctly
- Token hasn't expired
- Org ID and Project ID are correct
- Vercel project exists

**Fix:**
1. Regenerate Vercel token
2. Update `VERCEL_TOKEN` secret
3. Re-run workflow

### Build fails

**Check:**
- `npm run build` works locally
- All dependencies in package.json
- Node.js version compatibility

**Fix:**
1. Test build locally: `npm run build`
2. Fix any errors
3. Push changes

### Deployment succeeds but site broken

**Check:**
- Environment variables in Vercel
- Deployment logs in Vercel dashboard
- Browser console for errors

**Fix:**
1. Add missing environment variables
2. Redeploy from Vercel dashboard

---

## 📋 Setup Checklist

- [ ] Vercel token created
- [ ] Org ID and Project ID obtained
- [ ] All 3 GitHub secrets added
- [ ] Test deployment triggered
- [ ] Workflow completed successfully
- [ ] Production site accessible
- [ ] Environment variables configured
- [ ] All features working

---

## 🎉 Success!

Once setup is complete:

- ✅ **Push to main** → Automatic deployment
- ✅ **No manual steps** → Fully automated
- ✅ **Fast deployments** → 2-3 minutes
- ✅ **Reliable** → GitHub + Vercel infrastructure
- ✅ **Transparent** → Full logs available

---

## 🔄 Workflow File Location

The workflow is defined in:
```
.github/workflows/deploy-production.yml
```

You can customize it by editing this file.

---

## 📞 Need Help?

- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **Vercel Deployment Docs**: https://vercel.com/docs/deployments/overview
- **GitHub Issues**: [Report a problem](https://github.com/itvaibhav-jpg/mediscript/issues)

---

**🚀 Ready to automate your deployments?**

Follow the steps above and enjoy hands-free production deployments! 🎉

---

**Made with ❤️ by EdgesOf Solutions**

**Powered by Bhindi AI**
