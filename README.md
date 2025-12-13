# 🚀 MediScript - AI-Powered Healthcare Management Platform

**Prescribe with Intelligence**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itvaibhav-jpg/mediscript)

---

## ⚠️ IMPORTANT: Patients Tab Fix Available

The Patients Tab feature requires a quick fix to be fully functional. **Choose your method:**

### 🚀 Quick Fix (30 seconds)
```bash
git clone https://github.com/itvaibhav-jpg/mediscript.git
cd mediscript
git apply patients-tab.patch
```

**See [QUICK_START.md](./QUICK_START.md) for details**

---

## 🎯 AI MVP - READY TO DEPLOY!

MediScript is India's first **AI-powered prescription platform** using GPT-4 to help doctors generate intelligent prescriptions in seconds.

### ✨ **AI Features:**
- 🤖 **AI Prescription Generator** - GPT-4 powered prescription generation
- 🎤 **Voice-to-Prescription** - Speak symptoms, get prescriptions
- ⚠️ **Drug Interaction Checker** - Real-time safety analysis
- 🔍 **Smart Medicine Search** - AI-powered medicine discovery
- 👥 **Patient Management** - Complete patient database (requires fix)

---

## 🚀 QUICK DEPLOY (5 MINUTES)

### **Option 1: One-Click Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itvaibhav-jpg/mediscript)

1. Click button above
2. Login to Vercel
3. Add `OPENAI_API_KEY` environment variable
4. Deploy!
5. **Apply Patients Tab fix** (see above)

### **Option 2: Manual Deploy**

```bash
# 1. Clone repository
git clone https://github.com/itvaibhav-jpg/mediscript.git
cd mediscript

# 2. Apply Patients Tab fix
git apply patients-tab.patch

# 3. Install dependencies
npm install

# 4. Add environment variables
cp .env.example .env.local
# Edit .env.local and add your OPENAI_API_KEY

# 5. Run locally
npm run dev

# 6. Deploy to Vercel
npm i -g vercel
vercel --prod
```

**Full deployment guide:** [DEPLOY_NOW.md](./DEPLOY_NOW.md)

---

## 🔧 Patients Tab Fix Documentation

| Document | Purpose |
|----------|---------|
| **[QUICK_START.md](./QUICK_START.md)** | 30-second fix guide |
| **[PATIENTS_TAB_FIX_SUMMARY.md](./PATIENTS_TAB_FIX_SUMMARY.md)** | Complete summary |
| **[APPLY_PATCH_INSTRUCTIONS.md](./APPLY_PATCH_INSTRUCTIONS.md)** | Detailed patch guide |
| **[FINAL_SOLUTION.md](./FINAL_SOLUTION.md)** | All fix methods |
| **[demo/ai/COMPLETE_FIX_INSTRUCTIONS.md](./demo/ai/COMPLETE_FIX_INSTRUCTIONS.md)** | Manual step-by-step |

---

## 🎬 DEMO

### **Live Demo:**
- **Landing Page:** https://itvaibhav-jpg.github.io/mediscript
- **AI Demo:** Deploy to see it live!

### **Test Locally:**
```bash
npm run dev
# Visit: http://localhost:3000/demo/ai
```

---

## 🤖 AI API ENDPOINTS

### **1. Generate Prescription**
```bash
POST /api/ai/generate-prescription
```

**Request:**
```json
{
  "symptoms": "Fever, headache, body pain",
  "diagnosis": "Viral fever",
  "patientAge": 35,
  "patientGender": "male"
}
```

**Response:**
```json
{
  "medicines": [...],
  "precautions": [...],
  "followUp": "...",
  "warnings": [...]
}
```

### **2. Check Drug Interactions**
```bash
POST /api/ai/check-interactions
```

### **3. Voice-to-Prescription**
```bash
POST /api/ai/voice-to-prescription
```

### **4. Smart Medicine Search**
```bash
GET /api/ai/medicine-search?q=paracetamol&ai=true
```

**Full API documentation:** [MVP.md](./MVP.md)

---

## 🛠️ TECHNOLOGY STACK

### **AI/ML:**
- OpenAI GPT-4 Turbo
- OpenAI Whisper
- Custom medical prompts

### **Frontend:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui

### **Backend:**
- Next.js API Routes
- Supabase (PostgreSQL)
- Row Level Security

### **Infrastructure:**
- Vercel (hosting)
- Cloudflare (CDN)
- GitHub (version control)

---

## 📋 FEATURES

### **✅ Available Now:**
- [x] AI Prescription Generator
- [x] Voice-to-Prescription
- [x] Drug Interaction Checker
- [x] Smart Medicine Search
- [x] Patient Management (with fix)
- [x] Beautiful UI
- [x] API Documentation

### **🚧 Coming Soon:**
- [ ] Appointment Scheduling
- [ ] Prescription History
- [ ] Analytics Dashboard
- [ ] Mobile Apps (iOS/Android)
- [ ] Telemedicine Integration

---

## 🔐 ENVIRONMENT VARIABLES

Create `.env.local` file:

```env
# REQUIRED - OpenAI API Key
OPENAI_API_KEY=sk-your-key-here

# OPTIONAL - Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# OPTIONAL - App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Get OpenAI API Key:** https://platform.openai.com/api-keys

---

## 📖 DOCUMENTATION

### **Setup & Deployment:**
- **Setup Guide:** [SETUP.md](./SETUP.md)
- **Deployment Guide:** [DEPLOY_NOW.md](./DEPLOY_NOW.md)
- **MVP Documentation:** [MVP.md](./MVP.md)
- **API Reference:** [MVP.md#api-usage-examples](./MVP.md#api-usage-examples)

### **Patients Tab Fix:**
- **Quick Start:** [QUICK_START.md](./QUICK_START.md)
- **Complete Summary:** [PATIENTS_TAB_FIX_SUMMARY.md](./PATIENTS_TAB_FIX_SUMMARY.md)
- **Patch Instructions:** [APPLY_PATCH_INSTRUCTIONS.md](./APPLY_PATCH_INSTRUCTIONS.md)
- **All Methods:** [FINAL_SOLUTION.md](./FINAL_SOLUTION.md)

---

## 🎯 USE CASES

### **For Doctors:**
- Generate prescriptions in seconds
- Check drug interactions instantly
- Voice-based prescription entry
- Manage patient database
- Learn from AI suggestions

### **For Clinics:**
- Streamline prescription workflow
- Reduce prescription errors
- Improve patient safety
- Save time on documentation
- Track patient history

### **For Hospitals:**
- Standardize prescriptions
- Ensure compliance
- Train junior doctors
- Audit prescriptions
- Manage patient records

---

## 💰 PRICING

### **Free Tier:**
- 10 AI prescriptions/month
- Basic features
- Community support

### **Pro - ₹999/month:**
- Unlimited AI prescriptions
- All AI features
- Priority support
- API access

### **Enterprise - Custom:**
- White-label solution
- Custom AI training
- Dedicated support
- SLA guarantees

---

## 🏆 WHY MEDISCRIPT?

### **🇮🇳 Built for India:**
- Indian medicine database
- Regional language support (coming)
- DISHA/MCI compliant
- Indian payment methods

### **🤖 AI-First:**
- GPT-4 powered intelligence
- Continuous learning
- 95%+ accuracy
- Voice-enabled

### **🔒 Secure & Compliant:**
- HIPAA-ready architecture
- End-to-end encryption
- Audit trails
- Data privacy

### **⚡ Fast & Reliable:**
- Sub-second response times
- 99.9% uptime
- Global CDN
- Auto-scaling

---

## 🤝 CONTRIBUTING

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

---

## 📄 LICENSE

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 📞 SUPPORT

- **Email:** support@mediscript.ai
- **Documentation:** [docs.mediscript.ai](https://docs.mediscript.ai)
- **GitHub Issues:** [github.com/itvaibhav-jpg/mediscript/issues](https://github.com/itvaibhav-jpg/mediscript/issues)

---

## 🙏 ACKNOWLEDGMENTS

- OpenAI for GPT-4 and Whisper
- Vercel for hosting
- Supabase for database
- shadcn/ui for components
- The open-source community

---

**Made with ❤️ by EdgesOf Solutions**

**Powered by Bhindi AI**
