# 🚀 MediScript Setup Guide

Complete setup instructions for MediScript platform.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ Node.js 18+ installed
- ✅ npm or yarn package manager
- ✅ Git installed
- ✅ Supabase account (free tier works)
- ✅ OpenAI API key (for AI prescriptions)
- ✅ Code editor (VS Code recommended)

---

## 🔧 Step 1: Clone Repository

```bash
git clone https://github.com/itvaibhav-jpg/mediscript.git
cd mediscript
```

---

## 📦 Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Supabase client
- Tailwind CSS
- shadcn/ui components
- And more...

---

## 🗄️ Step 3: Set Up Supabase Database

### 3.1 Create Supabase Project

1. Go to https://supabase.com
2. Click "New Project"
3. Fill in:
   - **Project Name:** mediscript-production
   - **Database Password:** (Generate strong password - SAVE IT!)
   - **Region:** Mumbai (ap-south-1)
4. Click "Create new project"
5. Wait 2-3 minutes for setup

### 3.2 Get Supabase Credentials

1. Go to: Settings → API
2. Copy these values:
   - **Project URL:** `https://xxxxx.supabase.co`
   - **Anon Key:** `eyJhbGc...` (public key)
   - **Service Role Key:** `eyJhbGc...` (secret key - keep safe!)

### 3.3 Run Database Migrations

1. Go to: SQL Editor in Supabase
2. Click "New Query"
3. Copy the complete database schema from `supabase/migrations/001_initial_schema.sql`
4. Paste and click "RUN"
5. Wait for "Success. No rows returned"

---

## 🔑 Step 4: Configure Environment Variables

```bash
# Copy example environment file
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
# Supabase (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=https://irbkvjomakcxeyodvoz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# OpenAI (REQUIRED for AI prescriptions)
OPENAI_API_KEY=sk-your_openai_key_here

# App URLs (Update for production)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🚀 Step 5: Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

You should see the MediScript landing page!

---

## 👤 Step 6: Create Super Admin Account

### 6.1 Sign Up

1. Go to http://localhost:3000/signup
2. Fill in your details
3. Click "Sign Up"
4. Check your email for verification link
5. Click verification link

### 6.2 Make Yourself Super Admin

Run this SQL in Supabase SQL Editor:

```sql
-- Replace 'your-email@example.com' with your actual email
UPDATE users 
SET is_super_admin = true,
    super_admin_level = 'full'
WHERE email = 'your-email@example.com';
```

### 6.3 Access Super Admin Portal

1. Log out and log back in
2. You'll now see "Super Admin" in the navigation
3. Access: http://localhost:3000/super-admin

---

## 🏥 Step 7: Create Your First Clinic

### Via Super Admin Portal:

1. Go to Super Admin → Tenants
2. Click "Add New Clinic"
3. Fill in clinic details:
   - Clinic Name
   - Email
   - Phone
   - Address
4. Click "Create Clinic"

### Via SQL (Quick Method):

```sql
INSERT INTO tenants (
  clinic_name,
  email,
  phone,
  subscription_plan,
  subscription_status
) VALUES (
  'Demo Clinic',
  'demo@clinic.com',
  '+91-9876543210',
  'professional',
  'trial'
);
```

---

## 👨‍⚕️ Step 8: Add Doctors & Staff

1. Go to Clinic Admin → Users
2. Click "Add User"
3. Select role:
   - Doctor
   - Receptionist
   - Nurse
   - Pharmacist
4. Fill in details
5. Click "Create User"

---

## 🧪 Step 9: Test the Platform

### Test Patient Registration:

1. Go to Clinic Portal → Patients
2. Click "Add Patient"
3. Fill in patient details
4. Click "Save"

### Test Appointment Booking:

1. Go to Appointments
2. Click "New Appointment"
3. Select patient, doctor, date, time
4. Click "Book Appointment"

### Test AI Prescription:

1. Go to Patients → Select a patient
2. Click "New Prescription"
3. Enter diagnosis
4. Click "Generate with AI"
5. Review and save

---

## 🎨 Step 10: Customize Branding (Optional)

### Update Company Info:

Edit `.env.local`:

```env
NEXT_PUBLIC_COMPANY_NAME=Your Clinic Name
NEXT_PUBLIC_PRODUCT_NAME=Your Product Name
```

### Update Colors:

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#YOUR_COLOR", // Change this
  },
}
```

---

## 📱 Step 11: Install UI Components (If Needed)

If you need additional shadcn/ui components:

```bash
# Example: Add data table component
npx shadcn-ui@latest add data-table

# Add chart component
npx shadcn-ui@latest add chart
```

---

## 🚢 Step 12: Deploy to Production

### Deploy to Vercel (Recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts and add environment variables
```

### Environment Variables for Production:

Add these in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_APP_URL` (your production URL)

---

## ✅ Verification Checklist

- [ ] Node.js 18+ installed
- [ ] Repository cloned
- [ ] Dependencies installed
- [ ] Supabase project created
- [ ] Database schema migrated
- [ ] Environment variables configured
- [ ] Development server running
- [ ] Super admin account created
- [ ] First clinic created
- [ ] Test patient added
- [ ] Test appointment booked
- [ ] AI prescription tested

---

## 🆘 Troubleshooting

### Issue: "Module not found" errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Supabase connection errors

1. Check `.env.local` has correct credentials
2. Verify Supabase project is active
3. Check API keys are not expired

### Issue: AI prescription not working

1. Verify OpenAI API key is valid
2. Check you have credits in OpenAI account
3. Ensure `OPENAI_API_KEY` is in `.env.local`

### Issue: Database errors

1. Verify all migrations ran successfully
2. Check Row Level Security policies
3. Ensure user has proper permissions

---

## 📚 Next Steps

- [ ] Read [Database Documentation](./docs/DATABASE.md)
- [ ] Explore [API Reference](./docs/API.md)
- [ ] Check [Deployment Guide](./docs/DEPLOYMENT.md)
- [ ] Join our [Discord Community](#)
- [ ] Star the repository ⭐

---

## 🤝 Need Help?

- 📧 Email: support@mediscript.io
- 💬 Discord: [Join our community](#)
- 📖 Docs: https://docs.mediscript.io
- 🐛 Issues: https://github.com/itvaibhav-jpg/mediscript/issues

---

**Happy Building! 🚀**

*MediScript - Prescribe with Intelligence*
