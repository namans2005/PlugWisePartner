export default function PricingPage() {
    const pricingExamples = [
      { rate: '₹50/hour', partnerEarns: '₹32.50', plugwiseCut: '₹17.50' },
      { rate: '₹100/hour', partnerEarns: '₹65', plugwiseCut: '₹35' },
      { rate: '₹150/hour', partnerEarns: '₹97.50', plugwiseCut: '₹52.50' },
    ]
  
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-navy-900 mb-2">Pricing & Commissions</h1>
          <p className="text-lg text-muted-foreground mb-8">
            You keep 65% of all earnings - we take just 35% (taxes included).
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingExamples.map((example, i) => (
              <div key={i} className="border rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-energy-green mb-2">{example.rate}</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">You earn:</span> {example.partnerEarns}</p>
                  <p><span className="font-semibold">PlugWise fee:</span> {example.plugwiseCut}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="bg-energy-green/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">How Pricing Works</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set your own hourly/daily rates</li>
              <li>Higher power chargers can command premium pricing</li>
              <li>We handle all payment processing and customer support</li>
              <li>Payouts every Monday via Stripe</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }