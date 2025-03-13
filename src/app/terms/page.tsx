export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12">
      <main className="flex flex-col gap-8 items-center w-full max-w-4xl mx-auto">
        <h1 className="text-4xl mt-8 font-normal text-white font-[family-name:var(--font-bebas-neue)]">Terms &amp; Conditions</h1>
        <div className="w-full space-y-8 text-white">
          <div>
            <h2 className="text-xl font-[family-name:var(--font-bebas-neue)] mb-2">1. Terms of Use</h2>
            <p className="text-gray-300">By downloading and using My Game Weather, you agree to these terms and conditions.</p>
          </div>

          <div>
            <h2 className="text-xl font-[family-name:var(--font-bebas-neue)] mb-2">2. Privacy Policy</h2>
            <div className="text-gray-300 space-y-6">
              <p>Last updated: March 13, 2025</p>
              
              <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
              
              <h3 className="text-lg font-[family-name:var(--font-bebas-neue)] text-white mt-6 mb-2">Data Collection</h3>
              <p>We collect and use Your Personal data to provide and improve the Service. This includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usage Data</li>
                <li>Device Information</li>
                <li>Location Data (with your permission)</li>
                <li>Social Media Integration Data (if applicable)</li>
              </ul>

              <h3 className="text-lg font-[family-name:var(--font-bebas-neue)] text-white mt-6 mb-2">Data Usage</h3>
              <p>Your data is used for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining our Service</li>
                <li>Improving user experience</li>
                <li>Communication about service updates</li>
                <li>Analytics and service optimization</li>
              </ul>

              <h3 className="text-lg font-[family-name:var(--font-bebas-neue)] text-white mt-6 mb-2">Data Protection</h3>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

              <h3 className="text-lg font-[family-name:var(--font-bebas-neue)] text-white mt-6 mb-2">Contact Us</h3>
              <p>For privacy-related inquiries, contact us at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: info@vertechx-collective.com</li>
                <li>Website: <a href="https://www.mgw.football/terms" className="text-blue-400 hover:text-blue-300">www.mgw.football/terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 