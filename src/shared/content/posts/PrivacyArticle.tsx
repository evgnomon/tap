import {
  Article,
  H1,
  H2,
  LI,
  P,
  Section,
  Strong,
  UL,
} from "@shared/components/Document";
import { useTheme } from "@shared/context/ThemeContext";
import PrivacyArticleFa from "./PrivacyArticle.fa";

const PrivacyStatement = () => {
  const { language } = useTheme();
  if (language === "fa") {
    return <PrivacyArticleFa />;
  }
  return (
    <Article>
      <H1>Zygote.run Privacy Statement</H1>

      <P>
        At Zygote.run, we value your privacy and are committed to protecting
        your personal data. This privacy statement explains how we collect, use,
        share, and protect your personal data when you use our cloud hosting
        services. Zygote.run is a simple cloud hosting service designed to
        provide reliable and secure hosting solutions for individuals and
        businesses.
      </P>

      <Section>
        <H2>Personal Data We Collect</H2>
        <P>
          We collect personal data to provide and improve our cloud hosting
          services. The data we collect depends on how you interact with
          Zygote.run and the choices you make, including your privacy settings.
          Data we collect may include:
        </P>
        <UL>
          <LI>
            <Strong>Data you provide directly</Strong>: When you sign up for an
            account, we collect your name, email address, and payment
            information to process transactions and manage your account.
          </LI>
          <LI>
            <Strong>Data collected through usage</Strong>: We collect
            information about how you use our services, such as server usage, IP
            addresses, and log data, to ensure optimal performance and security.
          </LI>
          <LI>
            <Strong>Data from third parties</Strong>: We may receive data from
            affiliates or third-party partners (e.g., payment processors) to
            facilitate our services.
          </LI>
        </UL>
        <P>
          You can choose not to provide certain personal data, but this may
          limit your ability to use some features of Zygote.run. For example, we
          require payment information to activate a hosting plan, and without
          it, we cannot provide the service.
        </P>
      </Section>

      <Section>
        <H2>How We Use Personal Data</H2>
        <P>We use the personal data we collect to:</P>
        <UL>
          <LI>
            <Strong>Provide our services</Strong>: Deliver, maintain, secure,
            and troubleshoot our cloud hosting services, including processing
            transactions and providing customer support.
          </LI>
          <LI>
            <Strong>Improve our services</Strong>: Analyze usage patterns to
            enhance performance, security, and user experience.
          </LI>
          <LI>
            <Strong>Communicate with you</Strong>: Send service-related
            notifications, respond to inquiries, and, with your consent, provide
            promotional offers.
          </LI>
          <LI>
            <Strong>Meet legal obligations</Strong>: Comply with applicable laws
            and protect the security of our services.
          </LI>
        </UL>
        <P>
          We process personal data using both automated and manual methods to
          ensure accuracy and efficiency. Automated processes may be reviewed
          manually to improve our services.
        </P>
      </Section>

      <Section>
        <H2>Reasons We Share Personal Data</H2>
        <P>We share your personal data only in the following circumstances:</P>
        <UL>
          <LI>
            <Strong>With your consent</Strong>: To provide a service or complete
            a transaction you request.
          </LI>
          <LI>
            <Strong>With service providers</Strong>: With trusted vendors acting
            on our behalf (e.g., payment processors or data centers) to deliver
            our services, under strict confidentiality agreements.
          </LI>
          <LI>
            <Strong>For legal reasons</Strong>: When required by law, to respond
            to legal processes, protect our customers, or safeguard our rights
            and property.
          </LI>
        </UL>
        <P>
          We do not sell or share your personal data for personalized
          advertising purposes.
        </P>
      </Section>

      <Section>
        <H2>How to Access and Control Your Personal Data</H2>
        <P>You have choices regarding your personal data. You can:</P>
        <UL>
          <LI>
            <Strong>Access and update your data</Strong>: Log in to your
            Zygote.run account to view or update your account information.
          </LI>
          <LI>
            <Strong>Manage communications</Strong>: Opt out of promotional
            emails through the unsubscribe link in our emails or by contacting
            us.
          </LI>
          <LI>
            <Strong>Request data deletion</Strong>: Contact us to request the
            deletion of your personal data, subject to legal retention
            requirements.
          </LI>
        </UL>
      </Section>

      <Section>
        <H2>Cookies and Similar Technologies</H2>
        <P>
          Zygote.run uses cookies and similar technologies to enhance your
          experience. Cookies are small text files stored on your device that
          help us:
        </P>
        <UL>
          <LI>Store your preferences and settings.</LI>
          <LI>Enable sign-in functionality.</LI>
          <LI>Analyze service performance and security.</LI>
        </UL>
        <P>
          We use only essential cookies required to operate our website and
          services. You can manage cookies through your browser settings, but
          disabling them may affect the functionality of Zygote.run.
        </P>
      </Section>

      <Section>
        <H2>Data Security and Retention</H2>
        <P>
          We implement industry-standard security measures to protect your
          personal data from unauthorized access, use, or disclosure. We retain
          your data only for as long as necessary to provide our services, meet
          legal obligations, or resolve disputes.
        </P>
      </Section>

      <Section>
        <H2>Where We Store and Process Data</H2>
        <P>
          Your data may be stored and processed in data centers located in
          various countries, depending on the hosting plan you select. We comply
          with applicable data protection laws.
        </P>
      </Section>

      <Section>
        <H2>Changes to This Privacy Statement</H2>
        <P>
          We may update this privacy statement to reflect changes in our
          services or legal requirements. We will notify you of significant
          changes via email or through our website.
        </P>
      </Section>
    </Article>
  );
};

export default PrivacyStatement;
