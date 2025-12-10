/**
 * MediScript Multi-Role Authentication System
 * Handles user authentication, session management, and role-based access control
 */

// User Database
const USERS_DATABASE = [
    {
        id: 'U001',
        username: 'dr.sharma',
        password: 'doctor123', // In production, use hashed passwords
        role: 'doctor',
        name: 'Dr. Rajesh Sharma',
        specialization: 'Cardiologist',
        email: 'dr.sharma@mediscript.com',
        phone: '+91-9876543210',
        licenseNumber: 'MCI-12345',
        experience: '15 years',
        permissions: [
            'view_patients',
            'create_prescription',
            'ai_diagnosis',
            'lab_orders',
            'pharmacy_orders',
            'video_consultation',
            'view_analytics',
            'manage_appointments',
            'upload_documents'
        ]
    },
    {
        id: 'U002',
        username: 'patient.john',
        password: 'patient123',
        role: 'patient',
        name: 'John Doe',
        patientId: 'P12345',
        email: 'john@email.com',
        phone: '+91-9876543211',
        dob: '1990-05-15',
        bloodGroup: 'O+',
        permissions: [
            'view_own_records',
            'book_appointment',
            'upload_documents',
            'view_prescriptions',
            'view_lab_reports',
            'video_consultation',
            'chat_with_doctor',
            'view_billing'
        ]
    },
    {
        id: 'U003',
        username: 'reception',
        password: 'reception123',
        role: 'receptionist',
        name: 'Priya Patel',
        email: 'reception@mediscript.com',
        phone: '+91-9876543212',
        employeeId: 'EMP-001',
        permissions: [
            'register_patient',
            'schedule_appointment',
            'checkin_patient',
            'view_appointments',
            'send_reminders',
            'basic_patient_info',
            'billing_operations'
        ]
    },
    {
        id: 'U004',
        username: 'admin',
        password: 'admin123',
        role: 'admin',
        name: 'System Administrator',
        email: 'admin@mediscript.com',
        phone: '+91-9876543213',
        permissions: [
            'manage_users',
            'system_settings',
            'view_all_analytics',
            'manage_billing',
            'backup_restore',
            'manage_integrations',
            'view_audit_logs',
            'manage_staff'
        ]
    },
    {
        id: 'U005',
        username: 'superadmin',
        password: 'super@123',
        role: 'superadmin',
        name: 'Super Administrator',
        email: 'superadmin@mediscript.com',
        phone: '+91-9876543214',
        permissions: ['*'] // All permissions
    }
];

// Role Configuration
const ROLE_CONFIG = {
    doctor: {
        icon: '👨‍⚕️',
        name: 'Doctor',
        defaultRoute: '/doctor/dashboard',
        color: '#00d4ff',
        navigation: [
            { icon: '📊', label: 'Dashboard', route: 'dashboard', permission: 'view_analytics' },
            { icon: '👥', label: 'My Patients', route: 'patients', permission: 'view_patients' },
            { icon: '🤖', label: 'AI Diagnosis', route: 'ai-diagnosis', permission: 'ai_diagnosis', badge: 'NEW' },
            { icon: '💊', label: 'Prescriptions', route: 'prescriptions', permission: 'create_prescription' },
            { icon: '🔬', label: 'Lab Orders', route: 'lab-orders', permission: 'lab_orders', badge: 'NEW' },
            { icon: '💉', label: 'Pharmacy', route: 'pharmacy', permission: 'pharmacy_orders', badge: 'NEW' },
            { icon: '📹', label: 'Video Calls', route: 'video', permission: 'video_consultation', badge: 'NEW' },
            { icon: '📅', label: 'Appointments', route: 'appointments', permission: 'manage_appointments' },
            { icon: '📄', label: 'Documents', route: 'documents', permission: 'upload_documents', badge: 'NEW' },
            { icon: '📈', label: 'Analytics', route: 'analytics', permission: 'view_analytics' }
        ]
    },
    patient: {
        icon: '🧑‍💼',
        name: 'Patient',
        defaultRoute: '/patient/dashboard',
        color: '#00ff88',
        navigation: [
            { icon: '📊', label: 'Dashboard', route: 'dashboard' },
            { icon: '📋', label: 'My Records', route: 'records', permission: 'view_own_records' },
            { icon: '💊', label: 'Prescriptions', route: 'prescriptions', permission: 'view_prescriptions' },
            { icon: '🔬', label: 'Lab Reports', route: 'lab-reports', permission: 'view_lab_reports' },
            { icon: '📅', label: 'Appointments', route: 'appointments', permission: 'book_appointment' },
            { icon: '📄', label: 'Documents', route: 'documents', permission: 'upload_documents' },
            { icon: '💬', label: 'Messages', route: 'messages', permission: 'chat_with_doctor' },
            { icon: '💳', label: 'Billing', route: 'billing', permission: 'view_billing' }
        ]
    },
    receptionist: {
        icon: '📋',
        name: 'Receptionist',
        defaultRoute: '/reception/dashboard',
        color: '#ffaa00',
        navigation: [
            { icon: '📊', label: 'Dashboard', route: 'dashboard' },
            { icon: '➕', label: 'Register Patient', route: 'register', permission: 'register_patient' },
            { icon: '📅', label: 'Appointments', route: 'appointments', permission: 'schedule_appointment' },
            { icon: '✅', label: 'Check-In', route: 'checkin', permission: 'checkin_patient' },
            { icon: '👥', label: 'Patient List', route: 'patients', permission: 'basic_patient_info' },
            { icon: '🔔', label: 'Reminders', route: 'reminders', permission: 'send_reminders' },
            { icon: '💳', label: 'Billing', route: 'billing', permission: 'billing_operations' }
        ]
    },
    admin: {
        icon: '🔧',
        name: 'Administrator',
        defaultRoute: '/admin/dashboard',
        color: '#ff4444',
        navigation: [
            { icon: '📊', label: 'Dashboard', route: 'dashboard' },
            { icon: '👥', label: 'User Management', route: 'users', permission: 'manage_users' },
            { icon: '⚙️', label: 'System Settings', route: 'settings', permission: 'system_settings' },
            { icon: '📈', label: 'Analytics', route: 'analytics', permission: 'view_all_analytics' },
            { icon: '💳', label: 'Billing Config', route: 'billing', permission: 'manage_billing' },
            { icon: '🔌', label: 'Integrations', route: 'integrations', permission: 'manage_integrations' },
            { icon: '📋', label: 'Audit Logs', route: 'audit', permission: 'view_audit_logs' },
            { icon: '💾', label: 'Backup', route: 'backup', permission: 'backup_restore' }
        ]
    },
    superadmin: {
        icon: '👑',
        name: 'Super Administrator',
        defaultRoute: '/superadmin/dashboard',
        color: '#9c27b0',
        navigation: [
            { icon: '📊', label: 'Dashboard', route: 'dashboard' },
            { icon: '🏥', label: 'Multi-Clinic', route: 'clinics' },
            { icon: '👥', label: 'All Users', route: 'users' },
            { icon: '🗄️', label: 'Database', route: 'database' },
            { icon: '🔐', label: 'Security', route: 'security' },
            { icon: '🔌', label: 'API Config', route: 'api' },
            { icon: '📋', label: 'System Logs', route: 'logs' },
            { icon: '🛠️', label: 'Maintenance', route: 'maintenance' }
        ]
    }
};

// Authentication Class
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.sessionKey = 'mediscript_session';
        this.init();
    }

    init() {
        // Check for existing session
        this.loadSession();
    }

    // Login method
    login(username, password, selectedRole = null) {
        const user = USERS_DATABASE.find(u => 
            u.username === username && u.password === password
        );

        if (!user) {
            return {
                success: false,
                message: 'Invalid username or password'
            };
        }

        // Check role match if specified
        if (selectedRole && user.role !== selectedRole) {
            return {
                success: false,
                message: `This account is not a ${selectedRole} account. Please select the correct role.`
            };
        }

        // Create session
        this.createSession(user);

        return {
            success: true,
            message: `Welcome, ${user.name}!`,
            user: this.sanitizeUser(user)
        };
    }

    // Create session
    createSession(user, rememberMe = false) {
        const sessionData = {
            userId: user.id,
            username: user.username,
            role: user.role,
            name: user.name,
            email: user.email,
            permissions: user.permissions,
            loginTime: new Date().toISOString(),
            ...this.getRoleSpecificData(user)
        };

        this.currentUser = sessionData;

        // Store in localStorage or sessionStorage
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem(this.sessionKey, JSON.stringify(sessionData));

        // Log activity
        this.logActivity('login', user.id);
    }

    // Load session
    loadSession() {
        const sessionData = localStorage.getItem(this.sessionKey) || 
                          sessionStorage.getItem(this.sessionKey);

        if (sessionData) {
            this.currentUser = JSON.parse(sessionData);
            return this.currentUser;
        }

        return null;
    }

    // Logout
    logout() {
        if (this.currentUser) {
            this.logActivity('logout', this.currentUser.userId);
        }

        this.currentUser = null;
        localStorage.removeItem(this.sessionKey);
        sessionStorage.removeItem(this.sessionKey);
    }

    // Check if user is authenticated
    isAuthenticated() {
        return this.currentUser !== null;
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check permission
    hasPermission(permission) {
        if (!this.currentUser) return false;
        
        // Super admin has all permissions
        if (this.currentUser.permissions.includes('*')) return true;
        
        return this.currentUser.permissions.includes(permission);
    }

    // Check role
    hasRole(role) {
        if (!this.currentUser) return false;
        return this.currentUser.role === role;
    }

    // Get role configuration
    getRoleConfig(role = null) {
        const userRole = role || (this.currentUser ? this.currentUser.role : null);
        return ROLE_CONFIG[userRole] || null;
    }

    // Get navigation for current role
    getNavigation() {
        if (!this.currentUser) return [];
        
        const config = this.getRoleConfig();
        if (!config) return [];

        // Filter navigation based on permissions
        return config.navigation.filter(item => {
            if (!item.permission) return true;
            return this.hasPermission(item.permission);
        });
    }

    // Get role-specific data
    getRoleSpecificData(user) {
        const data = {};

        switch(user.role) {
            case 'doctor':
                data.specialization = user.specialization;
                data.licenseNumber = user.licenseNumber;
                data.experience = user.experience;
                break;
            case 'patient':
                data.patientId = user.patientId;
                data.dob = user.dob;
                data.bloodGroup = user.bloodGroup;
                break;
            case 'receptionist':
                data.employeeId = user.employeeId;
                break;
        }

        return data;
    }

    // Sanitize user data (remove sensitive info)
    sanitizeUser(user) {
        const { password, ...sanitized } = user;
        return sanitized;
    }

    // Log activity
    logActivity(action, userId) {
        const log = {
            action,
            userId,
            timestamp: new Date().toISOString(),
            ip: 'localhost' // In production, get actual IP
        };

        // Store in activity log
        const logs = JSON.parse(localStorage.getItem('activity_logs') || '[]');
        logs.push(log);
        
        // Keep only last 100 logs
        if (logs.length > 100) {
            logs.shift();
        }

        localStorage.setItem('activity_logs', JSON.stringify(logs));
    }

    // Get activity logs
    getActivityLogs(limit = 50) {
        const logs = JSON.parse(localStorage.getItem('activity_logs') || '[]');
        return logs.slice(-limit).reverse();
    }
}

// Initialize auth system
const authSystem = new AuthSystem();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AuthSystem, authSystem, USERS_DATABASE, ROLE_CONFIG };
}