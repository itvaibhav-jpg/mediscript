#!/usr/bin/env python3
"""
Automated Patients Tab Fix Script
This script downloads index.html, inserts the missing Patients tab, and updates it.
"""

import re

# Read the patients tab HTML
PATIENTS_TAB_HTML = '''
        <!-- Patients Tab -->
        <div id="patients" class="tab-content">
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <div class="card-title" style="margin: 0;">👥 Patient Management</div>
                    <button class="btn btn-primary" onclick="showAddPatientModal()">➕ Add New Patient</button>
                </div>

                <div class="form-group">
                    <input type="text" id="patientSearch" placeholder="🔍 Search patients by name, ID, or phone..." oninput="searchPatients()">
                </div>

                <div id="patientsList"></div>
            </div>
        </div>

        <!-- Add Patient Modal -->
        <div id="addPatientModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto;">
            <div style="max-width: 600px; margin: 50px auto; background: white; border-radius: 15px; padding: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2>➕ Add New Patient</h2>
                    <button class="btn btn-danger" onclick="closeAddPatientModal()">✖ Close</button>
                </div>

                <form id="addPatientForm" onsubmit="addPatient(event)">
                    <div class="grid-2">
                        <div class="form-group">
                            <label>Full Name *</label>
                            <input type="text" id="patientName" required placeholder="Enter full name">
                        </div>

                        <div class="form-group">
                            <label>Age *</label>
                            <input type="number" id="patientAge" required placeholder="Age" min="1" max="150">
                        </div>

                        <div class="form-group">
                            <label>Gender *</label>
                            <select id="patientGender" required>
                                <option value="">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Blood Group</label>
                            <select id="patientBloodGroup">
                                <option value="">Select blood group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" id="patientPhone" required placeholder="10-digit mobile number" pattern="[0-9]{10}">
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="patientEmail" placeholder="email@example.com">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Address</label>
                        <textarea id="patientAddress" rows="2" placeholder="Full address"></textarea>
                    </div>

                    <div class="form-group">
                        <label>Allergies (comma-separated)</label>
                        <input type="text" id="patientAllergies" placeholder="e.g., Penicillin, Peanuts, Latex">
                    </div>

                    <div class="form-group">
                        <label>Chronic Conditions (comma-separated)</label>
                        <input type="text" id="patientConditions" placeholder="e.g., Diabetes, Hypertension, Asthma">
                    </div>

                    <div class="form-group">
                        <label>Medical History / Notes</label>
                        <textarea id="patientHistory" rows="3" placeholder="Previous surgeries, family history, etc."></textarea>
                    </div>

                    <button type="submit" class="btn btn-success" style="width: 100%;">✅ Add Patient</button>
                </form>
            </div>
        </div>

        <!-- View Patient Modal -->
        <div id="viewPatientModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto;">
            <div style="max-width: 800px; margin: 50px auto; background: white; border-radius: 15px; padding: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2>👤 Patient Profile</h2>
                    <button class="btn btn-danger" onclick="closeViewPatientModal()">✖ Close</button>
                </div>

                <div id="patientProfileContent"></div>
            </div>
        </div>
'''

print("✅ Patients Tab HTML template ready")
print("📝 This script shows the structure - actual fix will be applied via GitHub API")
print("")
print("The HTML above needs to be inserted at line 700 in demo/ai/index.html")
print("(Right before '<!-- AI Clinical Decision Support Tab -->')")
