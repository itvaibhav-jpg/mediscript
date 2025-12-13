# 🚂 Railway Quick Start - Deploy in 2 Minutes

## ⚡ FASTEST WAY TO DEPLOY

```bash
# 1. Clone repository
git clone https://github.com/itvaibhav-jpg/mediscript.git
cd mediscript

# 2. Run automated deployment
chmod +x deploy-to-railway.sh
./deploy-to-railway.sh

# 3. Done! Your app is live! 🎉
```

---

## 🎯 What the Script Does

1. ✅ Applies Patients Tab fix automatically
2. ✅ Installs all dependencies
3. ✅ Builds the project
4. ✅ Installs Railway CLI
5. ✅ Authenticates with Railway
6. ✅ Initializes Railway project
7. ✅ Deploys to production

**Total time: ~2 minutes**

---

## 🔑 After Deployment

### Add Environment Variables:

1. Go to https://railway.app/dashboard
2. Select your "mediscript" project
3. Click "Variables" tab
4. Add:

```
OPENAI_API_KEY=sk-your-openai-key-here
```

5. Redeploy (Railway will do this automatically)

---

## 🌐 Get Your Production URL

### Option 1: Railway Dashboard
1. Go to https://railway.app/dashboard
2. Click your project
3. Click "Settings" → "Domains"
4. Your URL is shown there

### Option 2: Railway CLI
```bash
railway open
```

---

## 🧪 Test Your Deployment

1. Visit your production URL
2. Click "Patients" tab
3. Click "Add New Patient"
4. Fill form and submit
5. Verify patient appears ✅

---

## 🤖 Setup Auto-Deploy (Optional)

Want every push to auto-deploy? Takes 5 minutes:

1. **Get Railway Token:**
   - Visit https://railway.app/account/tokens
   - Create token
   - Copy it

2. **Get Service ID:**
   ```bash
   railway status
   ```
   Copy the Service ID

3. **Add GitHub Secrets:**
   - Go to https://github.com/itvaibhav-jpg/mediscript/settings/secrets/actions
   - Add `RAILWAY_TOKEN` (your token)
   - Add `RAILWAY_SERVICE_ID` (your service ID)

4. **Done!** Every push to `main` now auto-deploys! 🎉

---

## 💰 Cost

- **Free tier:** $5 credit/month
- **Typical usage:** $5-10/month for small apps
- **No credit card required** for free tier

---

## 📖 Need More Help?

- **Complete Guide:** [RAILWAY_DEPLOYMENT_GUIDE.md](./RAILWAY_DEPLOYMENT_GUIDE.md)
- **Troubleshooting:** See guide above
- **Railway Docs:** https://docs.railway.app

---

## 🚀 Ready?

```bash
git clone https://github.com/itvaibhav-jpg/mediscript.git
cd mediscript
chmod +x deploy-to-railway.sh
./deploy-to-railway.sh
```

**Your MediScript will be live in 2 minutes!** 🎉

---

**Made with ❤️ by EdgesOf Solutions**

**Powered by Bhindi AI**

**Deployed on Railway 🚂**
