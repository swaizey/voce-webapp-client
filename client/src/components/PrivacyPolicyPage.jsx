import LegalPage from "./LegalPage";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you create an account, upload music, or contact us for support. This includes your name, email address, profile information, and any music or content you upload.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services, including processing your uploads, personalizing your experience, and communicating with you about our services.",
    subPoints: [
      "Delivering and improving Voce services",
      "Personalizing your experience",
      "Communicating updates and support messages",
      "Analyzing usage patterns to enhance functionality",
      "Ensuring security and preventing fraud",
    ],
  },
  {
    title: "3. Data Storage and Security",
    content:
      "Your data is stored securely using industry-standard encryption and security practices. We use Supabase for secure data storage and Cloudflare R2 for audio file storage.",
  },
  {
    title: "4. Third-Party Services",
    content:
      "We use third-party services including Supabase for database management, Cloudflare for content delivery, and other service providers to operate Voce. These services have their own privacy policies.",
  },
  {
    title: "5. User-Generated Content",
    content:
      "Any music or content you upload to Voce may be shared with other users. You retain ownership of your content and grant Voce permission to host, distribute, and display it. Before uploading any music, you must ensure that you have the legal right and necessary permissions to upload and share the content. You must either be the composer, copyright owner, or have authorization from the owner of the recording and/or composition to distribute the music on Voce.",
    subPoints: [
      "You are responsible for ensuring that your uploads do not infringe on the rights of any third party.",
      "Uploading music without the necessary rights or permissions may result in removal of the content and suspension or termination of your account.",
      "Voce may request proof of ownership or authorization for uploaded content where necessary.",
    ],
  },
  {
    title: "6. Data Retention",
    content:
      "We retain your personal information for as long as your account is active or as needed to provide our services. You may request deletion of your account and data at any time.",
  },
  {
    title: "7. Your Privacy Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You can manage your profile settings and control what information is shared.",
    subPoints: [
      "Access your personal data",
      "Correct inaccurate information",
      "Request deletion of your account",
      "Control your privacy settings",
      "Export your data",
    ],
  },
  {
    title: "8. Children's Privacy",
    content:
      "Voce is not intended for users under 13 years of age. We do not knowingly collect information from children under 13. If we become aware of such collection, we will delete that information immediately.",
  },
  {
    title: "9. Policy Changes",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through the application.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have questions about this Privacy Policy or our privacy practices, please contact us at support@voce.com.",
  },
];

export default function PrivacyPolicyPage({ onNavigate }) {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Vocé respects your privacy and explains how we collect and use information in this policy."
      onNavigate={onNavigate}
    >
      {sections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {section.subPoints?.length ? (
            <ul>
              {section.subPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </LegalPage>
  );
}
