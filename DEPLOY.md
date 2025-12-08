# 🚀 MediScript Deployment Guide

## ⚡ Quick Deploy to Vercel (Recommended)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itvaibhav-jpg/mediscript)

### Manual Deploy

1. **Fork or Clone this repository**

2. **Go to Vercel:** https://vercel.com/new

3. **Import Repository:**
   - Select: `itvaibhav-jpg/mediscript`
   - Click "Import"

4. **Configure Project:**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. **Add Environment Variables:**

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://irbkvjomakcxeyodvoz.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   OPENAI_API_KEY=your_openai_key_here
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```

6. **Click "Deploy"**

7. **Wait 2-3 minutes**

8. **Your live URL:** `https://mediscript-xxx.vercel.app`

---

## 🌐 Custom Domain Setup

### Add Custom Domain (mediscript.io):

1. Go to Vercel Project Settings
2. Click "Domains"
3. Add: `mediscript.io` and `www.mediscript.io`
4. Update DNS records at your domain registrar:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. Wait for DNS propagation (5-30 minutes)

---

## 🔐 Environment Variables Reference

### Required:

```env
NEXT_PUBLIC_SUPABASE_URL=https://irbkvjomakcxeyodvoz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_APP_URL=https://mediscript.io
```

### Optional:

```env
# Payment Gateway
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_...
RAZORPAY_KEY_SECRET=...

# Email
SMTP_HOST=smtp.gmail.com
SMTP_USER=noreply@mediscript.io
SMTP_PASSWORD=...

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
```

---

## 📊 Post-Deployment Checklist

- [ ] Verify live URL is accessible
- [ ] Test login/signup flow
- [ ] Create super admin account
- [ ] Test database connectivity
- [ ] Verify AI prescription generation
- [ ] Check email notifications
- [ ] Test payment integration
- [ ] Monitor error logs
- [ ] Set up custom domain
- [ ] Configure SSL certificate

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Vercel will:
1. Detect the push
2. Build your app
3. Deploy automatically
4. Give you a preview URL

---

## 🆘 Troubleshooting

### Build Fails

Check Vercel build logs for errors. Common issues:
- Missing environment variables
- TypeScript errors
- Missing dependencies

### Database Connection Issues

1. Verify Supabase URL is correct
2. Check API keys are valid
3. Ensure Row Level Security policies allow access

### AI Prescription Not Working

1. Verify OpenAI API key
2. Check API key has credits
3. Monitor OpenAI usage dashboard

---

## 📈 Monitoring & Analytics

### Vercel Analytics

Enable in Vercel dashboard:
- Real-time traffic
- Performance metrics
- Error tracking

### Supabase Monitoring

Check in Supabase dashboard:
- Database usage
- API requests
- Storage usage

---

## 🔒 Security Best Practices

1. **Never commit `.env.local`** to Git
2. **Rotate API keys** regularly
3. **Enable 2FA** on Vercel and Supabase
4. **Monitor access logs** in Super Admin portal
5. **Keep dependencies updated**

---

## 🎯 Production Checklist

Before going live:

- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] All environment variables set
- [ ] Database backups enabled
- [ ] Error monitoring set up
- [ ] Email service configured
- [ ] Payment gateway tested
- [ ] Legal pages added (Privacy, Terms)
- [ ] DISHA compliance verified
- [ ] Load testing completed

---

**Your MediScript deployment is ready! 🚀**

For support: support@mediscript.io
