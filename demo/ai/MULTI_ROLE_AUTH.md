# 🔐 MediScript Multi-Role Authentication System

## Overview

MediScript now features a comprehensive **Role-Based Access Control (RBAC)** system with separate login credentials and customized dashboards for each user type.

---

## 🎯 User Roles

### 1. 👨‍⚕️ **DOCTOR**

**Access Level:** High - Clinical Operations

**Capabilities:**
- ✅ View and manage patients
- ✅ Create and manage prescriptions
- ✅ AI-powered clinical decision support
- ✅ Order lab tests
- ✅ Send prescriptions to pharmacy
- ✅ Conduct video consultations
- ✅ Upload and manage medical documents
- ✅ View analytics for own patients
- ✅ Manage appointments

**Restrictions:**
- ❌ Cannot manage staff or users
- ❌ Cannot access system settings
- ❌ Cannot view other doctors' patients (unless shared)

**Demo Credentials:**
```
Username: dr.sharma
Password: doctor123
```

**Profile:**
- Name: Dr. Rajesh Sharma
- Specialization: Cardiologist
- License: MCI-12345
- Experience: 15 years

---

### 2. 🧑‍💼 **PATIENT**

**Access Level:** Limited - Personal Records Only

**Capabilities:**
- ✅ View own medical records
- ✅ Book and manage appointments
- ✅ View prescriptions and lab reports
- ✅ Upload personal health documents
- ✅ Join video consultations
- ✅ Chat with assigned doctor
- ✅ View and pay bills
- ✅ Download medical certificates

**Restrictions:**
- ❌ Cannot access other patients' data
- ❌ Cannot create prescriptions
- ❌ Cannot access administrative features
- ❌ Cannot view system analytics

**Demo Credentials:**
```
Username: patient.john
Password: patient123
```

**Profile:**
- Name: John Doe
- Patient ID: P12345
- DOB: May 15, 1990
- Blood Group: O+

---

### 3. 📋 **RECEPTIONIST**

**Access Level:** Front Desk Operations

**Capabilities:**
- ✅ Register new patients
- ✅ Schedule and manage appointments
- ✅ Check-in/check-out patients
- ✅ View basic patient information
- ✅ Send appointment reminders
- ✅ Process billing and payments
- ✅ View appointment calendar

**Restrictions:**
- ❌ Cannot view detailed medical records
- ❌ Cannot create prescriptions
- ❌ Cannot access clinical features
- ❌ Cannot view analytics
- ❌ Cannot manage system settings

**Demo Credentials:**
```
Username: reception
Password: reception123
```

**Profile:**
- Name: Priya Patel
- Employee ID: EMP-001
- Department: Front Desk

---

### 4. 🔧 **ADMIN**

**Access Level:** Full System Management

**Capabilities:**
- ✅ Manage all users (doctors, staff, patients)
- ✅ Configure system settings
- ✅ View comprehensive analytics
- ✅ Manage billing configuration
- ✅ Configure lab/pharmacy integrations
- ✅ Access audit logs
- ✅ Backup and restore data
- ✅ Manage staff schedules

**Restrictions:**
- ❌ Cannot create prescriptions
- ❌ Cannot access database directly
- ❌ Cannot modify security settings
- ❌ Limited to single clinic management

**Demo Credentials:**
```
Username: admin
Password: admin123
```

**Profile:**
- Name: System Administrator
- Access Level: Full System

---

### 5. 👑 **SUPER ADMIN**

**Access Level:** Complete Control

**Capabilities:**
- ✅ Everything Admin can do
- ✅ Multi-clinic management
- ✅ Direct database access
- ✅ Security configuration
- ✅ API management
- ✅ System maintenance
- ✅ Delete/restore any data
- ✅ Modify system architecture

**Restrictions:**
- None - Full system access

**Demo Credentials:**
```
Username: superadmin
Password: super@123
```

**Profile:**
- Name: Super Administrator
- Access Level: Unrestricted

---

## 🎨 Role-Based Dashboards

### Doctor Dashboard
```
┌─────────────────────────────────────────┐
│ 👨‍⚕️ Dr. Sharma | Cardiologist          │
├─────────────────────────────────────────┤
│ Today's Appointments: 12                │
│ Pending Prescriptions: 3                │
│ Lab Reports Ready: 5                    │
│ Video Calls Scheduled: 2                │
├─────────────────────────────────────────┤
│ Navigation:                             │
│ • Dashboard                             │
│ • My Patients                           │
│ • AI Diagnosis (NEW)                    │
│ • Prescriptions                         │
│ • Lab Orders (NEW)                      │
│ • Pharmacy (NEW)                        │
│ • Video Calls (NEW)                     │
│ • Appointments                          │
│ • Documents (NEW)                       │
│ • Analytics                             │
└─────────────────────────────────────────┘
```

### Patient Dashboard
```
┌─────────────────────────────────────────┐
│ 🧑‍💼 John Doe | Patient ID: P12345      │
├─────────────────────────────────────────┤
│ Next Appointment: Dec 15, 2:30 PM       │
│ Upcoming Lab Test: Dec 12               │
│ Active Prescriptions: 2                 │
│ Unread Messages: 1                      │
├─────────────────────────────────────────┤
│ Navigation:                             │
│ • Dashboard                             │
│ • My Records                            │
│ • Prescriptions                         │
│ • Lab Reports                           │
│ • Appointments                          │
│ • Documents                             │
│ • Messages                              │
│ • Billing                               │
└─────────────────────────────────────────┘
```

### Receptionist Dashboard
```
┌─────────────────────────────────────────┐
│ 📋 Reception Desk                       │
├─────────────────────────────────────────┤
│ Today's Appointments: 45                │
│ Checked In: 12                          │
│ Waiting: 8                              │
│ Completed: 25                           │
├─────────────────────────────────────────┤
│ Navigation:                             │
│ • Dashboard                             │
│ • Register Patient                      │
│ • Appointments                          │
│ • Check-In                              │
│ • Patient List                          │
│ • Reminders                             │
│ • Billing                               │
└─────────────────────────────────────────┘
```

### Admin Dashboard
```
┌─────────────────────────────────────────┐
│ 🔧 System Administrator                 │
├─────────────────────────────────────────┤
│ Total Users: 1,234                      │
│ Active Doctors: 15                      │
│ Total Patients: 1,200                   │
│ System Health: 98%                      │
├─────────────────────────────────────────┤
│ Navigation:                             │
│ • Dashboard                             │
│ • User Management                       │
│ • System Settings                       │
│ • Analytics                             │
│ • Billing Config                        │
│ • Integrations                          │
│ • Audit Logs                            │
│ • Backup                                │
└─────────────────────────────────────────┘
```

---

## 🔐 Permission System

### Permission Matrix

| Feature | Doctor | Patient | Reception | Admin | Super Admin |
|---------|--------|---------|-----------|-------|-------------|
| View All Patients | ✅ | ❌ | ✅ | ✅ | ✅ |
| View Own Records | ✅ | ✅ | ❌ | ✅ | ✅ |
| Create Prescription | ✅ | ❌ | ❌ | ❌ | ✅ |
| AI Diagnosis | ✅ | ❌ | ❌ | ✅ | ✅ |
| Lab Orders | ✅ | ❌ | ❌ | ✅ | ✅ |
| Pharmacy Orders | ✅ | ❌ | ❌ | ✅ | ✅ |
| Video Consultation | ✅ | ✅ | ❌ | ✅ | ✅ |
| Schedule Appointment | ✅ | ✅ | ✅ | ✅ | ✅ |
| Register Patient | ❌ | ❌ | ✅ | ✅ | ✅ |
| Manage Users | ❌ | ❌ | ❌ | ✅ | ✅ |
| System Settings | ❌ | ❌ | ❌ | ✅ | ✅ |
| Database Access | ❌ | ❌ | ❌ | ❌ | ✅ |
| View Analytics | ✅ | ❌ | ❌ | ✅ | ✅ |
| Billing Operations | ❌ | ✅ | ✅ | ✅ | ✅ |
| Upload Documents | ✅ | ✅ | ❌ | ✅ | ✅ |
| Audit Logs | ❌ | ❌ | ❌ | ✅ | ✅ |

---

## 🚀 How to Use

### 1. Access the Login Page

Navigate to: `demo/ai/auth.html`

### 2. Select Your Role

Click on one of the role cards:
- 👨‍⚕️ Doctor
- 🧑‍💼 Patient
- 📋 Reception
- 🔧 Admin
- 👑 Super Admin

### 3. Enter Credentials

Use the demo credentials provided above, or click the "Quick Login" buttons.

### 4. Access Your Dashboard

After successful login, you'll be redirected to your role-specific dashboard with customized navigation and features.

---

## 💻 Technical Implementation

### Authentication Flow

```javascript
// 1. User selects role and enters credentials
login(username, password, selectedRole)

// 2. System validates credentials
const user = USERS_DATABASE.find(u => 
    u.username === username && 
    u.password === password
);

// 3. Check role match
if (selectedRole && user.role !== selectedRole) {
    return error;
}

// 4. Create session
createSession(user, rememberMe);

// 5. Redirect to role-specific dashboard
window.location.href = `index.html?role=${user.role}`;
```

### Session Management

```javascript
// Session stored in localStorage (Remember Me) or sessionStorage
const sessionData = {
    userId: user.id,
    username: user.username,
    role: user.role,
    name: user.name,
    email: user.email,
    permissions: user.permissions,
    loginTime: new Date().toISOString()
};
```

### Permission Checking

```javascript
// Check if user has specific permission
authSystem.hasPermission('create_prescription');

// Check if user has specific role
authSystem.hasRole('doctor');

// Get navigation based on permissions
const navigation = authSystem.getNavigation();
```

---

## 🔒 Security Features

### 1. **Role Validation**
- Users can only access features permitted for their role
- Role mismatch during login is prevented

### 2. **Session Management**
- Automatic session expiry
- Remember Me functionality
- Secure session storage

### 3. **Activity Logging**
- All login/logout events are logged
- Audit trail for administrative actions
- Last 100 activities stored

### 4. **Permission-Based Access**
- Every feature checks permissions before access
- Navigation items filtered by permissions
- API calls validate user permissions

---

## 📱 Responsive Design

All role-based dashboards are fully responsive and work seamlessly on:
- 💻 Desktop (1920x1080 and above)
- 💻 Laptop (1366x768)
- 📱 Tablet (768x1024)
- 📱 Mobile (375x667)

---

## 🎯 Quick Start Guide

### For Doctors
1. Login with `dr.sharma / doctor123`
2. Access AI Diagnosis for symptom analysis
3. Create prescriptions with drug interaction checking
4. Order lab tests
5. Conduct video consultations

### For Patients
1. Login with `patient.john / patient123`
2. View your medical records
3. Book appointments
4. Upload health documents
5. Chat with your doctor

### For Receptionists
1. Login with `reception / reception123`
2. Register new patients
3. Schedule appointments
4. Check-in patients
5. Process billing

### For Admins
1. Login with `admin / admin123`
2. Manage users and staff
3. Configure system settings
4. View comprehensive analytics
5. Manage integrations

### For Super Admins
1. Login with `superadmin / super@123`
2. Access all system features
3. Manage multiple clinics
4. Configure security settings
5. Perform system maintenance

---

## 🔄 Migration from Single Login

If you're upgrading from the previous single-login system:

1. **Backup your data** from localStorage
2. **Clear browser cache** and localStorage
3. **Access new login page** at `auth.html`
4. **Login with appropriate role** credentials
5. **Your data will be migrated** automatically

---

## 🛠️ Customization

### Adding New Roles

Edit `auth-system.js`:

```javascript
// Add to USERS_DATABASE
{
    id: 'U006',
    username: 'nurse',
    password: 'nurse123',
    role: 'nurse',
    name: 'Nurse Mary',
    permissions: ['view_patients', 'basic_care']
}

// Add to ROLE_CONFIG
nurse: {
    icon: '👩‍⚕️',
    name: 'Nurse',
    defaultRoute: '/nurse/dashboard',
    color: '#4caf50',
    navigation: [...]
}
```

### Adding New Permissions

```javascript
// Add permission to user
permissions: [
    'existing_permission',
    'new_custom_permission'
]

// Check permission in code
if (authSystem.hasPermission('new_custom_permission')) {
    // Allow access
}
```

---

## 📊 Analytics & Reporting

### Activity Logs

View user activity:
```javascript
const logs = authSystem.getActivityLogs(50);
// Returns last 50 login/logout events
```

### Session Information

Get current session:
```javascript
const user = authSystem.getCurrentUser();
console.log(user.role, user.permissions);
```

---

## 🚨 Troubleshooting

### Issue: Can't login
**Solution:** Check if role selection matches your credentials

### Issue: Features not visible
**Solution:** Verify your role has required permissions

### Issue: Session expired
**Solution:** Login again or enable "Remember Me"

### Issue: Wrong dashboard
**Solution:** Logout and login with correct role

---

## 📞 Support

For assistance:
- **Email:** support@mediscript.com
- **Phone:** +91-1800-123-4567
- **Documentation:** See README.md

---

## 🎉 What's New

### Version 2.0 - Multi-Role Authentication

- ✅ 5 distinct user roles
- ✅ Role-based dashboards
- ✅ Permission system
- ✅ Activity logging
- ✅ Session management
- ✅ Quick login buttons
- ✅ Responsive design
- ✅ Security enhancements

---

**Built with ❤️ by EdgesOf Solutions Pvt. Ltd.**