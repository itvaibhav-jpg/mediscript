# 🏥 MediScript

**AI-Powered Healthcare Management Platform**

by **EdgesOf Solutions Private Limited**  
Powered by **iVenture Web Technology LLC**

---

## 🎯 Overview

MediScript is India's most advanced AI-powered healthcare management platform designed for clinics, hospitals, and healthcare providers.

### ✨ Key Features

- 🤖 **AI-Powered Prescriptions** - Intelligent prescription generation
- 📋 **Complete EMR/EHR** - Electronic Medical Records
- 📅 **Appointment Management** - Smart scheduling system
- 💰 **Billing & Invoicing** - GST-compliant invoicing
- 📊 **Analytics Dashboard** - Real-time insights
- 🔐 **100% Compliant** - DISHA, MCI/NMC, Drugs Act compliant
- 🏢 **Multi-tenant SaaS** - Scalable architecture
- 👥 **Role-based Access** - Super Admin, Admin, Doctor, Staff

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- OpenAI API key (for AI prescriptions)

### Installation

```bash
# Clone the repository
git clone https://github.com/itvaibhav-jpg/mediscript.git
cd mediscript

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Visit: http://localhost:3000

---

## 🏗️ Architecture

### Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **UI:** Tailwind CSS, shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **AI:** OpenAI GPT-4
- **State Management:** Zustand
- **Deployment:** Vercel

### Project Structure

```
mediscript/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── lib/             # Utilities & configs
│   ├── hooks/           # Custom React hooks
│   ├── store/           # State management
│   └── types/           # TypeScript types
├── public/              # Static assets
└── supabase/           # Database migrations
```

---

## 📋 Database Schema

Complete healthcare database with 22+ tables:

- **Core:** Tenants, Users, Patients, Visits, Prescriptions
- **Operations:** Appointments, Invoices, Inventory
- **Compliance:** Audit Logs, Consents, Telemedicine Sessions
- **Admin:** Permissions, Roles, Activity Logs

---

## 🔐 Security & Compliance

✅ **DISHA Compliance** - Digital Information Security in Healthcare Act  
✅ **MCI/NMC Guidelines** - Medical Council of India regulations  
✅ **Drugs & Cosmetics Act** - Schedule H, H1, X tracking  
✅ **Consumer Protection** - Patient complaint management  
✅ **Row Level Security** - Database-level access control  
✅ **Audit Trails** - Complete activity logging

---

## 🎨 Portals

### 1. Super Admin Portal
- Manage all clinics/tenants
- Platform analytics
- Subscription management
- User support

### 2. Clinic Admin Portal
- Clinic settings
- User management
- Analytics & reports
- Subscription control

### 3. Clinic Operations Portal
- Patient management
- Appointments
- AI Prescriptions
- Billing
- Inventory

---

## 📱 Features

### For Doctors
- ✅ AI-assisted prescription generation
- ✅ Patient history at a glance
- ✅ Digital signatures
- ✅ Telemedicine support
- ✅ Voice-to-text notes

### For Clinics
- ✅ Multi-location support
- ✅ Staff management
- ✅ Inventory tracking
- ✅ Financial reports
- ✅ Patient analytics

### For Patients
- ✅ Online appointments
- ✅ Digital prescriptions
- ✅ Medical history access
- ✅ Payment tracking
- ✅ Telemedicine consultations

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
NEXT_PUBLIC_APP_URL=
```

---

## 📚 Documentation

- [Setup Guide](./docs/SETUP.md)
- [Database Schema](./docs/DATABASE.md)
- [API Reference](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📄 License

Copyright © 2024 EdgesOf Solutions Private Limited

---

## 🆘 Support

- 📧 Email: support@mediscript.io
- 🌐 Website: https://mediscript.io
- 📞 Phone: +91-XXXXX-XXXXX

---

## 🙏 Acknowledgments

- Built with ❤️ by EdgesOf Solutions team
- Technology Partner: iVenture Web Technology LLC
- Powered by Supabase, OpenAI, and Vercel

---

**MediScript** - Prescribe with Intelligence 🚀
