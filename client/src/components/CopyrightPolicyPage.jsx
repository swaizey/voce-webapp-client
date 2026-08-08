import LegalPage from "./LegalPage";

export default function CopyrightPolicyPage({ onNavigate }) {
  return (
    <LegalPage
      title="Copyright Policy"
      subtitle="Vocé respects the rights of composers, musicians, choirs, publishers, and other copyright owners."
      onNavigate={onNavigate}
    >
      <h2>1. Ownership of Music</h2>
      <p>
        Music uploaded to Vocé remains the property of the applicable copyright owners unless
        otherwise agreed in writing.
      </p>

      <h2>2. Creator Responsibility</h2>
      <p>
        Before uploading music, creators must confirm they own the rights or have permission to
        share the content. This includes compositions, recordings, arrangements, artwork, and
        metadata.
      </p>

      <h2>3. Infringement</h2>
      <p>
        Vocé prohibits uploads that infringe copyright, use unauthorized recordings, or
        misrepresent ownership.
      </p>

      <h2>4. Complaints</h2>
      <p>
        Copyright owners may submit complaints with their contact information, identification
        of the copyrighted work, identification of the allegedly infringing content, and a
        statement confirming ownership.
      </p>

      <h2>5. Removal</h2>
      <p>
        After a valid complaint, Vocé may review the claim, restrict access, remove disputed
        content, or contact the uploader.
      </p>

      <h2>6. Repeat Infringement</h2>
      <p>
        Repeated infringement may result in account suspension or termination.
      </p>
    </LegalPage>
  );
}
