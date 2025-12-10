import DemoAIPrescription from '@/components/features/demo-ai-prescription'

export const metadata = {
  title: 'AI Prescription Demo | MediScript',
  description: 'Experience AI-powered prescription generation with MediScript',
}

export default function AIDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <DemoAIPrescription />
    </div>
  )
}
