import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <div className="container">
        <Link href="/" style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </Link>
        <div className="legal-card shadow-lg">
          <h1>Privacy Policy</h1>
          <span className="last-updated">Last Updated: April 20, 2026</span>
          
          <div className="legal-content">
            <p>At Mochi AI ("we," "us," or "our"), your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your information when you use the Mochi mobile application (the "App") and our services.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information to provide and improve our health and lifestyle tracking services.</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, and profile details (age, height, weight, gender, and activity level).</li>
              <li><strong>Health and Fitness Data:</strong> Calories consumed, macronutrient breakdowns, meal logs, and optional health metrics (e.g., step counts or weight trends).</li>
              <li><strong>User Content:</strong> Food descriptions, logs, and images you upload for AI analysis.</li>
              <li><strong>Device Info:</strong> IP address, device type, operating system version, and unique device identifiers.</li>
              <li><strong>Usage Data:</strong> How you interact with the App, including features used and time spent.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your data strictly to provide the core functionality of Mochi:</p>
            <ul>
              <li><strong>AI Nutritional Analysis:</strong> We use Artificial Intelligence to analyze food images and descriptions. This requires sending text or image data to our AI processing partners (e.g., OpenAI).</li>
              <li><strong>Goal Calculation:</strong> We use your profile data to calculate personalized calorie and macro targets.</li>
              <li><strong>Cloud Synchronization:</strong> We store your logs on secure cloud servers (Supabase) to ensure your data is available across all your devices.</li>
              <li><strong>App Optimization:</strong> Analyzing usage patterns to fix bugs and improve user experience.</li>
            </ul>

            <h2>3. Third-Party Service Providers</h2>
            <p>To provide our services, we share specific data with trusted partners under strict confidentiality agreements:</p>
            <ul>
              <li><strong>OpenAI:</strong> Processes food images and text descriptions for nutritional estimation. No identifying profile data is sent to OpenAI.</li>
              <li><strong>Supabase:</strong> Provides our secure database and authentication infrastructure.</li>
              <li><strong>RevenueCat:</strong> Manages subscription status and In-App Purchase logic.</li>
              <li><strong>Apple (App Store):</strong> Processes all financial transactions for Pro subscriptions.</li>
            </ul>

            <h2>4. Data Retention and Deletion</h2>
            <p>We retain your data as long as your account is active. You have full control over your data:</p>
            <ul>
              <li><strong>Account Deletion:</strong> You can delete your account at any time via the Settings menu in the App. This will permanently remove all meal logs, profile data, and content from our servers within 30 days.</li>
              <li><strong>Data Portability:</strong> You may request a copy of your data by contacting us at legal@mochi.ai.</li>
            </ul>

            <h2>5. HealthKit Data (iOS Only)</h2>
            <p>If you grant Mochi access to the Apple Health app (HealthKit), we use that data strictly to enhance your fitness insights (e.g., syncing calorie burn). <strong>We do not use HealthKit data for marketing, advertising, or data mining purposes.</strong> Your health data is never sold to third parties.</p>

            <h2>6. Safety for Children</h2>
            <p>Mochi is not intended for children under the age of 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.</p>

            <h2>7. Security</h2>
            <p>We implement industry-standard encryption (AES-256) for data at rest and TLS for data in transit. While we strive for absolute security, no method of electronic storage or transmission is 100% secure.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><strong>Email:</strong> legal@mochi.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
}
