import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="legal-page">
      <div className="container">
        <Link href="/" style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </Link>
        <div className="legal-card shadow-lg">
          <h1>Terms of Service</h1>
          <span className="last-updated">Last Updated: April 20, 2026</span>
          
          <div className="legal-content">
            <p>Welcome to Mochi. By downloading, accessing, or using the Mochi mobile application ("the App"), you agree to be bound by these Terms of Service. Please read them carefully.</p>

            <h2>1. No Medical Advice</h2>
            <p><strong>IMPORTANT:</strong> Mochi is a health tracking and lifestyle tool. <strong>It is NOT a medical device, nor does it provide medical advice, diagnosis, or treatment.</strong></p>
            <p>All nutritional data, AI-generated estimates, and fitness suggestions are for informational purposes only. Do not rely on Mochi for managing serious medical conditions or eating disorders. Always consult a qualified healthcare professional before making significant changes to your diet or exercise routine.</p>

            <h2>2. User Accounts</h2>
            <p>To use all features of the App, you must create an account. You are responsible for keeping your login credentials confidential and for all activities that occur under your account. You agree to provide accurate, current, and complete information during onboarding.</p>

            <h2>3. AI-Generated Content</h2>
            <p>Mochi uses Artificial Intelligence to estimate calories and nutrients from your descriptions and photos. Because AI can be inaccurate or prone to errors, we do not guarantee the precision of any nutritional data provided. You use this information at your own risk.</p>

            <h2>4. Pro Subscriptions (In-App Purchases)</h2>
            <p>Mochi offers a "Pro" subscription that provides premium features. By subscribing, you agree to the following:</p>
            <ul>
              <li><strong>Payments:</strong> All payments are processed by Apple via the App Store. Prices are as displayed in the App at the time of purchase.</li>
              <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew at the end of the billing period (monthly or yearly) unless canceled at least 24 hours before the renewal date.</li>
              <li><strong>Cancellations:</strong> You can manage and cancel your subscription via your Apple ID Settings on your iOS device.</li>
              <li><strong>Refunds:</strong> All refund requests must be handled through Apple's App Store support. Mochi cannot directly issue refunds for App Store transactions.</li>
            </ul>

            <h2>5. User Conduct and Content License</h2>
            <p>You retain ownership of the photos and text you upload to Mochi. However, by uploading content, you grant us a worldwide, non-exclusive, royalty-free license to process that content solely to provide the services of the App (e.g., AI analysis and cloud sync).</p>

            <h2>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Mochi and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the App, including but not limited to health issues, weight loss/gain discrepancies, or data loss.</p>

            <h2>7. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if you violate these terms or engage in behavior that harms the service or other users.</p>

            <h2>8. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Your continued use of the App after changes are posted constitutes your acceptance of the new terms.</p>

            <h2>9. Contact Us</h2>
            <p>For support or legal inquiries, please contact:<br />
            <strong>Email:</strong> legal@mochi.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
}
