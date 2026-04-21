import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <div className="container">
        <Link href="/" style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </Link>
        <div className="legal-card">
          <h1>Privacy Policy for Mochi</h1>
          <span className="last-updated">Last Updated: April 20, 2026</span>
          
          <div className="legal-content">
            <h2>1. Information We Collect</h2>
            <p>We collect information to provide a better experience to all our users. This includes:</p>
            <ul>
              <li><strong>Profile Data</strong>: Age, height, weight, and fitness goals provided during onboarding.</li>
              <li><strong>Usage Data</strong>: Meal logs, food descriptions, and images uploaded for analysis.</li>
              <li><strong>Device Data</strong>: Basic device information to ensure app stability.</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <ul>
              <li><strong>AI Analysis</strong>: Images and text descriptions are processed by AI (via OpenAI and Supabase) to calculate nutritional data.</li>
              <li><strong>Personalization</strong>: We use your profile data to calculate your calorie and macro goals.</li>
              <li><strong>Cloud Sync</strong>: Data is stored securely on Supabase to sync across your devices.</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>We do not sell your personal data. We share only the necessary text/image data with our AI partners (OpenAI) to perform nutritional analysis. We do not share your identity with these partners.</p>

            <h2>4. Data Security</h2>
            <p>We use industry-standard encryption to protect your health and profile data.</p>

            <h2>5. Your Rights</h2>
            <p>You can delete your account and all associated data at any time through the Settings menu in the App.</p>

            <h2>6. Children's Privacy</h2>
            <p>Mochi is not intended for children under the age of 13.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
