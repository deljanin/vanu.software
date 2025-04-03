const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-3xl pt-32">
        <h1 className="mb-4 font-tilla text-3xl">Privacy Policy</h1>
        <p className="mb-6">Effective Date: 2.4.2025</p>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">
            1. Information We Collect
          </h2>
          <p className="mb-2">
            We collect different types of information to provide and improve our
            services:
          </p>
          <ul className="list-inside list-disc">
            <li>
              <strong>Personal Information:</strong> When you contact us via our
              contact form, we collect your name, email address, and business
              details.
            </li>
            <li>
              <strong>Automated Data:</strong> We may collect non-personal data
              such as your IP address, browser type, operating system, and pages
              visited through analytics tools.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">
            2. How We Use Your Information
          </h2>
          <p>We use the collected data to:</p>
          <ul className="list-inside list-disc">
            <li>Respond to inquiries and provide requested services</li>
            <li>Improve our website, services, and user experience</li>
            <li>Communicate updates and offers</li>
            <li>Protect against fraudulent or unauthorized activities</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">
            3. Legal Basis for Processing Data
          </h2>
          <p>
            If you are located in the European Economic Area (EEA), our legal
            basis for collecting and using your personal information depends on
            the specific data collected and the context in which it is
            collected. We process your data based on:
          </p>
          <ul className="list-inside list-disc">
            <li>Your consent when you submit our contact form</li>
            <li>Our legitimate interests in improving our services</li>
            <li>Compliance with legal obligations</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell or rent your personal data. We may share your
            information with:
          </p>
          <ul className="list-inside list-disc">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist
              in running our website and services
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by law or to
              protect our rights
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">
            5. Cookies & Tracking Technologies
          </h2>
          <p>We do not use cookies.</p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">6. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes
            outlined in this policy, unless a longer retention period is
            required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-inside list-disc">
            <li>Access, update, or delete your personal data</li>
            <li>Request a copy of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">
            {"8. Children's Privacy"}
          </h2>
          <p>
            Our services are not directed at individuals under the age of 13. We
            do not knowingly collect personal data from children. If you believe
            we have collected data from a minor, please contact us for removal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for their privacy policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">
            10. Updates to This Policy
          </h2>
          <p>
            We may update this policy periodically. The latest version will be
            posted on our website, and we will notify users of any significant
            changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-tilla text-2xl">12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="font-semibold">Vanu Software</p>
          Email:{" "}
          <a
            href="mailto:contact@vanu.software"
            className="bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text transition-all duration-300 hover:text-transparent"
          >
            contact@vanu.software
          </a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
