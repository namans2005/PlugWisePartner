export default function TermsPage() {
    return (
      <div className="min-h-screen  p-8">
        <div className="max-w-4xl mx-auto  p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold  mb-6">Terms & Conditions</h1>
          
          <div className="prose prose-navy max-w-none">
            <h2 className="text-xl font-semibold mt-6">1. Partner Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Display PlugWise branding prominently at your charging location</li>
              <li>Maintain charger in safe working condition</li>
              <li>Ensure accurate availability in the system</li>
            </ul>
  
            <h2 className="text-xl font-semibold mt-6">2. Payments & Commissions</h2>
            <p>
              PlugWise retains a 15% commission on all transactions. Payouts are processed
              weekly via Stripe Connect.
            </p>
  
            <h2 className="text-xl font-semibold mt-6">3. Liability</h2>
            <p>
              PlugWise is not responsible for any damages, injuries, or disputes that may
              occur at your charging location. You are solely responsible for maintaining
              proper insurance coverage.
            </p>
  
            <div className="mt-8 p-4  rounded-lg">
              <p className="font-semibold">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }