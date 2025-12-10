# 🚀 DEPLOY MEDISCRIPT AI MVP TO VERCEL

## ⚡ ONE-CLICK DEPLOYMENT

Your AI-powered MediScript is ready to deploy! Follow these simple steps:

---

## 📋 PREREQUISITES

You need:
1. ✅ GitHub account (you have it)
2. ✅ Vercel account (free) - https://vercel.com
3. ✅ OpenAI API key - https://platform.openai.com/api-keys
4. ✅ Supabase project (optional for MVP)

---

## 🚀 DEPLOYMENT STEPS (5 MINUTES)

### **STEP 1: Go to Vercel**
Click here: https://vercel.com/new

### **STEP 2: Import Repository**
1. Click "Import Git Repository"
2. Search for: `itvaibhav-jpg/mediscript`
3. Click "Import"

### **STEP 3: Configure Project**
Vercel will auto-detect Next.js. Just click "Deploy"!

### **STEP 4: Add Environment Variables (CRITICAL)**

After first deployment, go to:
**Project Settings → Environment Variables**

Add these:

```env
# REQUIRED - OpenAI API Key
OPENAI_API_KEY=sk-your-openai-key-here

# OPTIONAL - Supabase (for database features)
NEXT_PUBLIC_SUPABASE_URL=https://irbkvjomakcxeyodvoz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-key
```

### **STEP 5: Redeploy**
1. Go to "Deployments" tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Wait 2 minutes

---

## 🎯 YOUR LIVE URLs

After deployment, you'll get:

### **Production URL:**
```
https://mediscript-xxx.vercel.app
```

### **AI Demo URL:**
```
https://mediscript-xxx.vercel.app/demo/ai
```

---

## 🧪 TEST YOUR AI MVP

### **Test 1: Generate Prescription**

Visit: `https://your-url.vercel.app/demo/ai`

Enter:
- **Symptoms:** Fever, headache, body pain for 3 days
- **Diagnosis:** Viral fever
- **Age:** 35
- **Gender:** Male

Click "Generate Prescription" → See AI magic! ✨

### **Test 2: API Endpoint**

```bash
curl -X POST https://your-url.vercel.app/api/ai/generate-prescription \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": "Cough and cold",
    "diagnosis": "URTI",
    "patientAge": 28
  }'
```

---

## 🔑 GET YOUR OPENAI API KEY

### **Step 1: Go to OpenAI**
https://platform.openai.com/api-keys

### **Step 2: Create API Key**
1. Click "Create new secret key"
2. Name it: "MediScript MVP"
3. Copy the key (starts with `sk-`)
4. **SAVE IT SECURELY** (you can't see it again!)

### **Step 3: Add Credits**
1. Go to: https://platform.openai.com/account/billing
2. Add $5-$10 for testing
3. Each prescription costs ~$0.02

---

## 💰 COST ESTIMATE

### **OpenAI Costs:**
- Per prescription: ~$0.02
- 100 prescriptions: ~$2
- 1,000 prescriptions: ~$20

### **Vercel Costs:**
- **Free tier:** 100GB bandwidth/month
- **Hobby:** $20/month (unlimited)
- **Pro:** $20/month per user

### **Total MVP Cost:**
- **Month 1:** $0-$30 (free tiers + testing)
- **Month 2:** $50-$100 (with customers)

---

## ✅ DEPLOYMENT CHECKLIST

- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] OpenAI API key obtained
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] AI demo page accessible
- [ ] Test prescription generated
- [ ] API endpoints working

---

## 🐛 TROUBLESHOOTING

### **Issue: Build fails**
**Solution:** Check build logs in Vercel dashboard

### **Issue: "OpenAI API key not found"**
**Solution:** Add `OPENAI_API_KEY` in Vercel environment variables

### **Issue: "Module not found"**
**Solution:** Vercel auto-installs dependencies, wait for build to complete

### **Issue: API returns 500 error**
**Solution:** Check Vercel function logs for detailed error

---

## 📊 MONITOR YOUR DEPLOYMENT

### **Vercel Dashboard:**
- Real-time logs
- Performance metrics
- Error tracking
- Analytics

### **OpenAI Dashboard:**
- API usage
- Cost tracking
- Rate limits

---

## 🎉 SUCCESS CRITERIA

Your MVP is successful when:

✅ AI demo page loads
✅ Prescription generates in <5 seconds
✅ Output is medically accurate
✅ No errors in console
✅ Mobile responsive
✅ Fast loading (<2 seconds)

---

## 🚀 NEXT STEPS AFTER DEPLOYMENT

1. **Share with 5 doctors** for feedback
2. **Generate 50 test prescriptions**
3. **Collect feedback**
4. **Iterate and improve**
5. **Add more AI features**

---

## 📞 NEED HELP?

- **Vercel Docs:** https://vercel.com/docs
- **OpenAI Docs:** https://platform.openai.com/docs
- **GitHub Issues:** https://github.com/itvaibhav-jpg/mediscript/issues

---

## 🎯 DEPLOYMENT TIMELINE

- **Now:** Read this guide (5 min)
- **+5 min:** Create Vercel account
- **+10 min:** Import repository
- **+15 min:** Add environment variables
- **+20 min:** First deployment complete
- **+25 min:** Test AI features
- **+30 min:** Share with first doctor!

---

## 🔥 QUICK START COMMAND

If you prefer CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd mediscript
vercel

# Add environment variables
vercel env add OPENAI_API_KEY

# Redeploy
vercel --prod
```

---

## 🎊 CONGRATULATIONS!

You're about to launch an AI-powered healthcare platform!

**Your journey:**
- ✅ Idea → Reality
- ✅ Code → Deployed
- ✅ Local → Global
- ✅ MVP → Product

---

**NOW GO DEPLOY! 🚀**

Click here to start: https://vercel.com/new

---

*Built with ❤️ by EdgesOf Solutions Pvt. Ltd.*
*Prescribe with Intelligence*
