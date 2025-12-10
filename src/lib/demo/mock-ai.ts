// Mock AI responses for demo purposes
// This simulates OpenAI GPT-4 responses without requiring API key

export interface MockPrescription {
  medicines: Array<{
    name: string
    brand: string
    dosage: string
    frequency: string
    duration: string
    timing: string
    instructions: string
  }>
  precautions: string[]
  followUp: string
  warnings: string[]
  lifestyle: string[]
}

// Mock prescription database based on common diagnoses
const mockPrescriptions: Record<string, MockPrescription> = {
  'viral fever': {
    medicines: [
      {
        name: 'Paracetamol (Acetaminophen)',
        brand: 'Dolo 650',
        dosage: '650mg',
        frequency: 'Three times daily',
        duration: '5 days',
        timing: 'After meals',
        instructions: 'Take with plenty of water. Do not exceed 4g per day.'
      },
      {
        name: 'Cetirizine',
        brand: 'Zyrtec',
        dosage: '10mg',
        frequency: 'Once daily',
        duration: '5 days',
        timing: 'At bedtime',
        instructions: 'May cause drowsiness. Avoid driving after taking.'
      }
    ],
    precautions: [
      'Rest adequately for faster recovery',
      'Stay well hydrated - drink 8-10 glasses of water daily',
      'Avoid cold foods and beverages',
      'Monitor temperature regularly'
    ],
    followUp: 'If fever persists beyond 3 days or exceeds 103°F, consult immediately. Return for follow-up after 5 days.',
    warnings: [
      'Do not take aspirin if under 18 years',
      'Avoid alcohol while on medication',
      'Seek immediate care if breathing difficulty develops'
    ],
    lifestyle: [
      'Drink warm fluids like herbal tea or soup',
      'Get adequate sleep (7-8 hours)',
      'Avoid strenuous physical activity',
      'Maintain good hand hygiene'
    ]
  },
  'common cold': {
    medicines: [
      {
        name: 'Phenylephrine + Chlorpheniramine',
        brand: 'Sinarest',
        dosage: '1 tablet',
        frequency: 'Three times daily',
        duration: '5 days',
        timing: 'After meals',
        instructions: 'May cause drowsiness. Avoid driving.'
      },
      {
        name: 'Ambroxol',
        brand: 'Mucolite',
        dosage: '30mg',
        frequency: 'Three times daily',
        duration: '5 days',
        timing: 'After meals',
        instructions: 'Helps loosen mucus and ease cough.'
      }
    ],
    precautions: [
      'Use steam inhalation 2-3 times daily',
      'Gargle with warm salt water',
      'Avoid cold and dusty environments',
      'Cover mouth while coughing/sneezing'
    ],
    followUp: 'Return if symptoms worsen or persist beyond 7 days.',
    warnings: [
      'Avoid if you have high blood pressure (phenylephrine)',
      'Do not combine with other cold medications',
      'Consult if pregnant or breastfeeding'
    ],
    lifestyle: [
      'Drink warm liquids frequently',
      'Use a humidifier at night',
      'Get plenty of rest',
      'Eat vitamin C rich foods'
    ]
  },
  'hypertension': {
    medicines: [
      {
        name: 'Amlodipine',
        brand: 'Amlong',
        dosage: '5mg',
        frequency: 'Once daily',
        duration: 'Ongoing',
        timing: 'Morning, same time daily',
        instructions: 'Take regularly even if feeling well. Do not stop suddenly.'
      },
      {
        name: 'Atorvastatin',
        brand: 'Atorva',
        dosage: '10mg',
        frequency: 'Once daily',
        duration: 'Ongoing',
        timing: 'At bedtime',
        instructions: 'For cholesterol management. Take with or without food.'
      }
    ],
    precautions: [
      'Monitor blood pressure daily at same time',
      'Maintain BP diary',
      'Reduce salt intake to less than 5g per day',
      'Regular exercise (30 min walking daily)'
    ],
    followUp: 'Follow-up in 2 weeks for BP monitoring and medication adjustment if needed.',
    warnings: [
      'Do not stop medication without consulting doctor',
      'Report dizziness, swelling, or irregular heartbeat immediately',
      'Avoid grapefruit juice (interacts with medication)'
    ],
    lifestyle: [
      'DASH diet - rich in fruits, vegetables, whole grains',
      'Limit alcohol consumption',
      'Quit smoking if applicable',
      'Stress management through yoga or meditation',
      'Maintain healthy weight (BMI 18.5-24.9)'
    ]
  },
  'diabetes': {
    medicines: [
      {
        name: 'Metformin',
        brand: 'Glycomet',
        dosage: '500mg',
        frequency: 'Twice daily',
        duration: 'Ongoing',
        timing: 'After breakfast and dinner',
        instructions: 'Start with low dose. May cause stomach upset initially.'
      },
      {
        name: 'Glimepiride',
        brand: 'Amaryl',
        dosage: '1mg',
        frequency: 'Once daily',
        duration: 'Ongoing',
        timing: 'Before breakfast',
        instructions: 'Take 30 minutes before meal. Carry sugar candy for hypoglycemia.'
      }
    ],
    precautions: [
      'Monitor blood sugar fasting and post-meal',
      'Maintain blood sugar diary',
      'Regular HbA1c testing every 3 months',
      'Annual eye and kidney function tests'
    ],
    followUp: 'Follow-up in 2 weeks with fasting and post-meal sugar reports. Then monthly for 3 months.',
    warnings: [
      'Watch for hypoglycemia symptoms: sweating, trembling, confusion',
      'Always carry glucose tablets or candy',
      'Inform all healthcare providers about diabetes',
      'Check feet daily for cuts or sores'
    ],
    lifestyle: [
      'Diabetic diet - low glycemic index foods',
      'Regular exercise 30-45 minutes daily',
      'Avoid sugary foods and refined carbs',
      'Eat small frequent meals',
      'Maintain healthy weight',
      'Adequate sleep (7-8 hours)'
    ]
  },
  'gastritis': {
    medicines: [
      {
        name: 'Pantoprazole',
        brand: 'Pan',
        dosage: '40mg',
        frequency: 'Once daily',
        duration: '14 days',
        timing: '30 minutes before breakfast',
        instructions: 'Take on empty stomach for best effect.'
      },
      {
        name: 'Sucralfate',
        brand: 'Sucral',
        dosage: '1g',
        frequency: 'Four times daily',
        duration: '14 days',
        timing: 'Before meals and at bedtime',
        instructions: 'Forms protective coating on stomach lining.'
      }
    ],
    precautions: [
      'Avoid spicy and oily foods',
      'Eat small frequent meals',
      'Avoid lying down immediately after eating',
      'Elevate head while sleeping'
    ],
    followUp: 'Return if symptoms persist after 2 weeks or if you notice blood in vomit/stool.',
    warnings: [
      'Avoid NSAIDs (ibuprofen, aspirin) - use paracetamol if needed',
      'Stop smoking and alcohol',
      'Seek immediate care if severe abdominal pain or vomiting blood'
    ],
    lifestyle: [
      'Avoid trigger foods (coffee, chocolate, citrus)',
      'Manage stress through relaxation techniques',
      'Eat dinner 2-3 hours before bedtime',
      'Stay hydrated',
      'Avoid tight clothing around abdomen'
    ]
  }
}

export function generateMockPrescription(
  symptoms: string,
  diagnosis: string,
  patientAge?: number,
  patientGender?: string
): MockPrescription {
  // Normalize diagnosis for matching
  const normalizedDiagnosis = diagnosis.toLowerCase().trim()
  
  // Find matching prescription
  for (const [key, prescription] of Object.entries(mockPrescriptions)) {
    if (normalizedDiagnosis.includes(key)) {
      return prescription
    }
  }
  
  // Default generic prescription if no match
  return {
    medicines: [
      {
        name: 'Paracetamol',
        brand: 'Crocin',
        dosage: '500mg',
        frequency: 'Three times daily',
        duration: '3-5 days',
        timing: 'After meals',
        instructions: 'Take with water. Do not exceed recommended dose.'
      }
    ],
    precautions: [
      'Rest adequately',
      'Stay hydrated',
      'Monitor symptoms',
      'Maintain good hygiene'
    ],
    followUp: 'Return for follow-up if symptoms persist or worsen after 3 days.',
    warnings: [
      'Consult immediately if symptoms worsen',
      'Avoid self-medication beyond prescribed duration'
    ],
    lifestyle: [
      'Maintain healthy diet',
      'Get adequate sleep',
      'Regular exercise',
      'Stress management'
    ]
  }
}

export function checkMockInteractions(medicines: Array<{ name: string; dosage: string }>) {
  // Simulate drug interaction checking
  const interactions = []
  
  // Check for common dangerous combinations
  const medicineNames = medicines.map(m => m.name.toLowerCase())
  
  if (medicineNames.includes('aspirin') && medicineNames.includes('warfarin')) {
    interactions.push({
      medicines: ['Aspirin', 'Warfarin'],
      severity: 'high' as const,
      description: 'Increased risk of bleeding when taken together',
      recommendation: 'Monitor INR closely. Consider alternative to aspirin.',
      alternatives: ['Clopidogrel as alternative to Aspirin']
    })
  }
  
  if (medicineNames.includes('ibuprofen') && medicineNames.includes('aspirin')) {
    interactions.push({
      medicines: ['Ibuprofen', 'Aspirin'],
      severity: 'moderate' as const,
      description: 'May reduce cardioprotective effect of aspirin',
      recommendation: 'Take ibuprofen at least 2 hours after aspirin',
      alternatives: ['Paracetamol as alternative to Ibuprofen']
    })
  }
  
  const overallRisk = interactions.length > 0 
    ? interactions.some(i => i.severity === 'high') ? 'high' : 'moderate'
    : 'low'
  
  return {
    overallRisk,
    interactions,
    safeToUse: overallRisk === 'low',
    warnings: interactions.length > 0 
      ? ['Drug interactions detected - review carefully']
      : ['No significant interactions detected'],
    recommendations: interactions.length === 0
      ? ['Medicines appear safe to use together', 'Continue monitoring for any adverse effects']
      : ['Review alternative medications', 'Monitor patient closely']
  }
}

export function mockVoiceTranscription(audioFileName: string): string {
  // Simulate voice transcription
  return "Patient presents with fever of 101°F for the past 3 days, accompanied by headache and body pain. No cough or cold symptoms. Appetite is reduced. Diagnosis: Viral fever. Prescribe symptomatic treatment."
}
