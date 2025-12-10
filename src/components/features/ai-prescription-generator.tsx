'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Loader2, Mic, AlertTriangle, CheckCircle2 } from 'lucide-react'

interface Medicine {
  name: string
  brand: string
  dosage: string
  frequency: string
  duration: string
  timing: string
  instructions: string
}

interface PrescriptionData {
  medicines: Medicine[]
  precautions: string[]
  followUp: string
  warnings: string[]
  lifestyle: string[]
}

export default function AIPrescriptionGenerator() {
  const [loading, setLoading] = useState(false)
  const [symptoms, setSymptoms] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [patientAge, setPatientAge] = useState('')
  const [patientGender, setPatientGender] = useState('male')
  const [prescription, setPrescription] = useState<PrescriptionData | null>(null)
  const [error, setError] = useState('')

  const generatePrescription = async () => {
    if (!symptoms || !diagnosis) {
      setError('Please enter symptoms and diagnosis')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/ai/generate-prescription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          symptoms,
          diagnosis,
          patientAge,
          patientGender
        })
      })

      const data = await response.json()

      if (data.success) {
        setPrescription(data.prescription)
      } else {
        setError(data.error || 'Failed to generate prescription')
      }
    } catch (err: any) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Brain className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-bold">AI Prescription Generator</h1>
        </div>
        <p className="text-gray-600">
          Generate intelligent prescriptions powered by GPT-4
        </p>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
          <CardDescription>
            Enter patient details to generate AI-powered prescription
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Patient Age
              </label>
              <input
                type="number"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter age"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Gender
              </label>
              <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Symptoms
            </label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              rows={3}
              placeholder="e.g., Fever, headache, body pain for 3 days"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Diagnosis
            </label>
            <textarea
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              rows={2}
              placeholder="e.g., Viral fever"
            />
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
              <AlertTriangle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex space-x-4">
            <Button
              onClick={generatePrescription}
              disabled={loading}
              className="flex-1"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Generate Prescription
                </>
              )}
            </Button>
            <Button variant="outline" className="flex items-center">
              <Mic className="mr-2 h-4 w-4" />
              Voice Input
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Generated Prescription */}
      {prescription && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <CardTitle className="text-green-900">
                Prescription Generated Successfully
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Medicines */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Medicines</h3>
              <div className="space-y-3">
                {prescription.medicines.map((med, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{med.name}</h4>
                        <p className="text-sm text-gray-600">{med.brand}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {med.dosage}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Frequency:</span>{' '}
                        {med.frequency}
                      </div>
                      <div>
                        <span className="text-gray-600">Duration:</span>{' '}
                        {med.duration}
                      </div>
                      <div>
                        <span className="text-gray-600">Timing:</span>{' '}
                        {med.timing}
                      </div>
                    </div>
                    {med.instructions && (
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Instructions:</span>{' '}
                        {med.instructions}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Precautions */}
            {prescription.precautions.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Precautions</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {prescription.precautions.map((precaution, index) => (
                    <li key={index}>{precaution}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warnings */}
            {prescription.warnings.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-yellow-900">
                  ⚠️ Warnings
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-900">
                  {prescription.warnings.map((warning, index) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Follow-up */}
            {prescription.followUp && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Follow-up</h3>
                <p className="text-sm">{prescription.followUp}</p>
              </div>
            )}

            {/* Lifestyle */}
            {prescription.lifestyle.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Lifestyle Recommendations
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {prescription.lifestyle.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex space-x-4 pt-4">
              <Button className="flex-1">Save Prescription</Button>
              <Button variant="outline" className="flex-1">
                Print
              </Button>
              <Button variant="outline" className="flex-1">
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
