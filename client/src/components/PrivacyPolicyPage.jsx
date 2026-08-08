import LegalPage from "./LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Vocé respects your privacy and explains how we collect and use information in this policy."
    >
      <h2>1. Information We Collect</h2>
      <p>
        We may collect account information, usage data, creator information, and device details
        necessary to operate the platform and provide a better experience.
      </p>

      <h2>2. How We Use Information</h2>
      <p>
        Vocé uses information to provide streaming services, personalize recommendations,
        improve platform performance, process subscriptions, communicate updates, and prevent
        fraud and abuse.
      </p>

      <h2>3. Payment and Third-Party Services</h2>
      <p>
        Payment information may be processed through trusted third-party providers. Vocé may
        also use hosting, analytics, authentication, and storage services to operate the
        platform.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We use reasonable technical and organizational safeguards, but no online service can
        guarantee absolute security.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or delete your
        personal information and request related data removals where applicable.
      </p>

      <h2>6. Updates</h2>
      <p>
        We may update this policy from time to time. Continued use of the platform after changes
        will mean you accept the updated policy.
      </p>
    </LegalPage>
  );
}
