export default function PrivacyPage() {
    return (
      <div className="min-h-screen  p-8">
        <div className="max-w-4xl mx-auto  p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold  mb-6">Privacy Policy</h1>
          <p><b>Welcome to PlugWise! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform.</b></p>

          <div className="prose prose-navy max-w-none">
            <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Information: Name, email, phone number, and payment details.</li>
              <li>Location Data: To provide accurate charging station navigation.</li>
              <li>Usage Data: Booking history, preferences, and interactions with our platform.</li>
              <li>Device Information: IP address, browser type, and operating system.</li>
            </ul>
  
            <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve PlugWise services.</li>
              <li>Facilitate bookings and secure transactions.</li>
              <li>Offer customer support and personalized recommendations.</li>
              <li>Enhance security and prevent fraudulent activity.</li>
            </ul>
  
            <h2 className="text-xl font-semibold mt-6">3. Data Sharing & Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not sell your personal data.</li>
              <li>Data is shared only with trusted partners (e.g., payment gateways, mapping services) for service functionality.</li>
              <li>We use encryption and security protocols to protect your data.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">4. Your Rights & Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Restrict certain data collection through device settings.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">5. Cookies & Tracking Technologies</h2>
            <p>We use cookies to enhance user experience and analyze site traffic. You can manage cookie preferences via browser settings.</p>

            <h2 className="text-xl font-semibold mt-6">6. Third-Party Links</h2>
            <p>PlugWise may contain links to external websites. We are not responsible for their privacy policies or content.</p>

            <h2 className="text-xl font-semibold mt-6">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy. Significant changes will be notified via email or platform notifications.</p>

            <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
            <p>For any questions or concerns, contact us at support@plugwise.com. By using PlugWise, you agree to this Privacy Policy. If you do not agree, please discontinue use of our services.</p>
  
            <div className="mt-8 p-4  rounded-lg">
              <p className="font-semibold">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }