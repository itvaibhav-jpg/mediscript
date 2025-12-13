// ========================================
// PATIENT MANAGEMENT FUNCTIONS
// Add these functions to the <script> section
// Replace the existing showAddPatient() function
// ========================================

// Patient Management Functions
function showAddPatientModal() {
    document.getElementById('addPatientModal').style.display = 'block';
}

function closeAddPatientModal() {
    document.getElementById('addPatientModal').style.display = 'none';
    document.getElementById('addPatientForm').reset();
}

function addPatient(event) {
    event.preventDefault();

    const patient = {
        id: 'P' + Date.now(),
        name: document.getElementById('patientName').value,
        age: document.getElementById('patientAge').value,
        gender: document.getElementById('patientGender').value,
        bloodGroup: document.getElementById('patientBloodGroup').value,
        phone: document.getElementById('patientPhone').value,
        email: document.getElementById('patientEmail').value,
        address: document.getElementById('patientAddress').value,
        allergies: document.getElementById('patientAllergies').value,
        conditions: document.getElementById('patientConditions').value,
        history: document.getElementById('patientHistory').value,
        registeredDate: new Date().toISOString(),
        lastVisit: new Date().toISOString()
    };

    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));

    alert(`✅ Patient added successfully!\n\nPatient ID: ${patient.id}\nName: ${patient.name}`);
    
    closeAddPatientModal();
    displayPatients();
    updateDashboard();
    loadPatients(); // Update dropdowns
}

function displayPatients() {
    const listDiv = document.getElementById('patientsList');
    
    if (patients.length === 0) {
        listDiv.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #999;">
                <div style="font-size: 48px; margin-bottom: 15px;">👥</div>
                <h3>No Patients Yet</h3>
                <p>Click "Add New Patient" to register your first patient</p>
            </div>
        `;
        return;
    }

    listDiv.innerHTML = patients.map(patient => `
        <div class="card" style="margin-bottom: 15px; cursor: pointer;" onclick="viewPatient('${patient.id}')">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="flex: 1;">
                    <h3 style="margin-bottom: 5px;">👤 ${patient.name}</h3>
                    <div style="display: flex; gap: 20px; font-size: 14px; color: #666;">
                        <span>🆔 ${patient.id}</span>
                        <span>🎂 ${patient.age} years</span>
                        <span>⚧ ${patient.gender}</span>
                        ${patient.bloodGroup ? `<span>🩸 ${patient.bloodGroup}</span>` : ''}
                        <span>📞 ${patient.phone}</span>
                    </div>
                    ${patient.conditions ? `
                        <div style="margin-top: 8px;">
                            <span style="background: #fff3cd; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                                ⚠️ ${patient.conditions}
                            </span>
                        </div>
                    ` : ''}
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); viewPatient('${patient.id}')">
                        👁️ View
                    </button>
                    <button class="btn btn-danger" onclick="event.stopPropagation(); deletePatient('${patient.id}')">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function searchPatients() {
    const query = document.getElementById('patientSearch').value.toLowerCase();
    const filtered = patients.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.id.toLowerCase().includes(query) ||
        p.phone.includes(query)
    );

    const listDiv = document.getElementById('patientsList');
    
    if (filtered.length === 0) {
        listDiv.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #999;">
                <div style="font-size: 48px; margin-bottom: 15px;">🔍</div>
                <h3>No Results Found</h3>
                <p>No patients match your search criteria</p>
            </div>
        `;
        return;
    }

    listDiv.innerHTML = filtered.map(patient => `
        <div class="card" style="margin-bottom: 15px; cursor: pointer;" onclick="viewPatient('${patient.id}')">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="flex: 1;">
                    <h3 style="margin-bottom: 5px;">👤 ${patient.name}</h3>
                    <div style="display: flex; gap: 20px; font-size: 14px; color: #666;">
                        <span>🆔 ${patient.id}</span>
                        <span>🎂 ${patient.age} years</span>
                        <span>⚧ ${patient.gender}</span>
                        ${patient.bloodGroup ? `<span>🩸 ${patient.bloodGroup}</span>` : ''}
                        <span>📞 ${patient.phone}</span>
                    </div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); viewPatient('${patient.id}')">
                        👁️ View
                    </button>
                    <button class="btn btn-danger" onclick="event.stopPropagation(); deletePatient('${patient.id}')">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function viewPatient(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;

    const content = `
        <div class="grid-2" style="margin-bottom: 20px;">
            <div>
                <h4>Personal Information</h4>
                <p><strong>Name:</strong> ${patient.name}</p>
                <p><strong>Patient ID:</strong> ${patient.id}</p>
                <p><strong>Age:</strong> ${patient.age} years</p>
                <p><strong>Gender:</strong> ${patient.gender}</p>
                <p><strong>Blood Group:</strong> ${patient.bloodGroup || 'Not specified'}</p>
            </div>
            <div>
                <h4>Contact Information</h4>
                <p><strong>Phone:</strong> ${patient.phone}</p>
                <p><strong>Email:</strong> ${patient.email || 'Not provided'}</p>
                <p><strong>Address:</strong> ${patient.address || 'Not provided'}</p>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h4>Medical Information</h4>
            <p><strong>Allergies:</strong> ${patient.allergies || 'None reported'}</p>
            <p><strong>Chronic Conditions:</strong> ${patient.conditions || 'None reported'}</p>
            <p><strong>Medical History:</strong> ${patient.history || 'No history recorded'}</p>
        </div>

        <div>
            <h4>Visit Information</h4>
            <p><strong>Registered:</strong> ${new Date(patient.registeredDate).toLocaleDateString()}</p>
            <p><strong>Last Visit:</strong> ${new Date(patient.lastVisit).toLocaleDateString()}</p>
        </div>
    `;

    document.getElementById('patientProfileContent').innerHTML = content;
    document.getElementById('viewPatientModal').style.display = 'block';
}

function closeViewPatientModal() {
    document.getElementById('viewPatientModal').style.display = 'none';
}

function deletePatient(patientId) {
    if (!confirm('Are you sure you want to delete this patient?\n\nThis action cannot be undone.')) {
        return;
    }

    patients = patients.filter(p => p.id !== patientId);
    localStorage.setItem('patients', JSON.stringify(patients));

    alert('✅ Patient deleted successfully');
    displayPatients();
    updateDashboard();
    loadPatients(); // Update dropdowns
}

// ========================================
// UPDATE DOMContentLoaded
// Add displayPatients() to initialization
// ========================================
/*
document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();
    loadPatients();
    displayPatients(); // ADD THIS LINE
    updateSMSPreview();
    setupDragDrop();
});
*/
