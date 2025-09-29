import { AlertCircle, Zap, Shield, HelpCircle } from 'lucide-react'

export default function SafetyPage() {
  const faqs = [
    {
      question: "What if my charger gets damaged?",
      answer: "We recommend having proper equipment insurance. PlugWise is not liable for charger damages."
    },
    {
      question: "How do I handle emergency situations?",
      answer: "Provide clear instructions near your charger and include emergency contacts in your profile."
    }
  ]

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-4xl mx-auto  p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold  mb-6">Safety & Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Shield className="text-energy-green" /> Safety Guidelines
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <AlertCircle className="text-vibrant-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Proper Installation</p>
                  <p className="text-sm text-muted-foreground">
                    Ensure your charger is installed by a certified electrician
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Zap className="text-electric-yellow mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Clear Signage</p>
                  <p className="text-sm text-muted-foreground">
                    Display safety instructions and emergency shutdown procedures
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <HelpCircle className="text-energy-green" /> FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b pb-4">
                  <p className="font-medium">{faq.question}</p>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8  p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Need immediate help?</h3>
          <p className="text-sm text-muted-foreground">
            Contact our support team at support@plugwise.in or call +91 9876543210
          </p>
        </div>
      </div>
    </div>
  )
}