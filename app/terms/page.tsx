import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="legal-page">
      <div className="container">
        <Link href="/" style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </Link>
        <div className="legal-card">
          <h1>Terms of Service for Mochi</h1>
          <span className="last-updated">Last Updated: April 20, 2026</span>
          
          <div className="legal-content">
            <h2>1. Acceptance of Terms</h2>
            <p>By downloading or using the Mochi application ("Mochi", "the App", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App.</p>

            <h2>2. Description of Service</h2>
            <p>Mochi is a gamified calorie tracking and fitness assistant. We use Artificial Intelligence (AI) to analyze food descriptions and images provided by users.</p>

            <h2>3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate and complete information during the onboarding process.</p>

            <h2>4. AI Disclaimer</h2>
            <p>Mochi uses Artificial Intelligence to estimate nutritional data. While we strive for accuracy, AI-generated results are estimates and should not be used as medical advice. Always consult with a healthcare professional before starting a new diet or fitness regimen.</p>

            <h2>5. Pro Subscription</h2>
            <p>Mochi offers a "Pro" subscription via Apple's In-App Purchases (StoreKit). Subscriptions are managed by Apple and subject to their terms. Cancellations and refunds are handled through your Apple ID settings.</p>

            <h2>6. Limitation of Liability</h2>
            <p>Mochi and its developers shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the service.</p>

            <h2>7. Governing Law</h2>
            <p>These terms are governed by the laws of the jurisdiction in which the developer resides.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
