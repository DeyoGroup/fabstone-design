// Fabstone website UI kit — Legal pages (Privacy Policy, Terms of Use, Accessibility).
// One component, three documents selected by `kind`. Plain informational copy —
// a sensible baseline for the client's counsel to review and finalize, not legal advice.
import { SiteHeader } from '../../components/chrome/SiteHeader.jsx';
import { SiteFooter } from '../../components/chrome/SiteFooter.jsx';
import { SITE_NAV } from './siteNav.jsx';

const UPDATED = 'June 16, 2026';

const LEGAL_DOCS = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    lede: 'This Privacy Policy explains how Fabstone (\u201cFabstone,\u201d \u201cwe,\u201d \u201cus\u201d) collects, uses and protects information when you visit our website or our Melissa, TX showroom and slab yard.',
    sections: [
      { h: 'Information We Collect', p: [
        'We collect information you provide directly \u2014 such as your name, email, phone number and project details \u2014 when you request a quote, reserve a slab, schedule a visit or contact us.',
        'We also collect limited technical information automatically, including your browser type, device, and pages viewed, to help us understand how the site is used and to keep it working reliably.',
      ] },
      { h: 'How We Use Your Information', p: [
        'We use your information to respond to inquiries, prepare quotes, fulfill orders, coordinate showroom visits and deliveries, and improve our products and services.',
        'With your consent, we may send occasional updates about new inventory, promotions or events. You can opt out of these messages at any time.',
      ] },
      { h: 'How We Share Information', p: [
        'We do not sell your personal information. We share it only with service providers who help us operate our business (for example, payment processors and delivery partners), and only as needed to provide the service you requested.',
        'We may disclose information when required by law or to protect the rights, safety and property of Fabstone, our customers or others.',
      ] },
      { h: 'Cookies & Analytics', p: [
        'Our site uses cookies and similar technologies to remember your preferences and measure site performance. You can control cookies through your browser settings, though some features may not work without them.',
      ] },
      { h: 'Data Retention & Security', p: [
        'We keep your information only as long as needed for the purposes described here or as required by law, and we use reasonable safeguards to protect it. No method of transmission or storage is completely secure.',
      ] },
      { h: 'Your Choices', p: [
        'You may request access to, correction of, or deletion of your personal information, subject to applicable law. To make a request, contact us using the details below.',
      ] },
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of Use',
    lede: 'These Terms of Use govern your access to and use of the Fabstone website. By using the site, you agree to these terms.',
    sections: [
      { h: 'Use of the Site', p: [
        'You may use this site for lawful, personal and business purposes related to evaluating and purchasing our products. You agree not to misuse the site, interfere with its operation, or attempt to access it in any unauthorized way.',
      ] },
      { h: 'Product Information & Availability', p: [
        'Natural stone is a product of nature: color, veining, pattern and finish vary from slab to slab, and on-screen images are representations only. We encourage viewing the actual material in person before purchase.',
        'Inventory shown as available is updated regularly but is not guaranteed until reserved and confirmed. Pricing, specifications and availability may change without notice.',
      ] },
      { h: 'Quotes, Orders & Reservations', p: [
        'Quotes are estimates and are valid for the period stated. An order or reservation is confirmed only when accepted by Fabstone in writing. Deposits and payment terms are described at the time of order.',
      ] },
      { h: 'Intellectual Property', p: [
        'All content on this site \u2014 including text, photography, logos and design \u2014 is owned by or licensed to Fabstone and may not be copied or reused without our written permission.',
      ] },
      { h: 'Disclaimers & Limitation of Liability', p: [
        'The site is provided \u201cas is\u201d without warranties of any kind. To the fullest extent permitted by law, Fabstone is not liable for any indirect or consequential damages arising from your use of the site.',
      ] },
      { h: 'Governing Law', p: [
        'These terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws rules. Any disputes will be handled in the courts located in Collin County, Texas.',
      ] },
    ],
  },
  accessibility: {
    eyebrow: 'Legal',
    title: 'Accessibility Statement',
    lede: 'Fabstone is committed to making our website usable for everyone, including people with disabilities.',
    sections: [
      { h: 'Our Commitment', p: [
        'We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and to continually improve the experience for all visitors. Accessibility is an ongoing effort, and we regularly review the site as we add new features and content.',
      ] },
      { h: 'Measures We Take', p: [
        'We aim for sufficient color contrast, keyboard-navigable controls, descriptive labels and alternative text for meaningful images, and a layout that adapts to different screen sizes and zoom levels.',
      ] },
      { h: 'Known Limitations', p: [
        'Some third-party content \u2014 such as embedded maps and video \u2014 may not be fully accessible. Where we rely on these services, we work to provide accessible alternatives or contact options.',
      ] },
      { h: 'Need Help or Found an Issue?', p: [
        'If you experience any difficulty using our website, or have a suggestion to improve accessibility, please reach out. We welcome your feedback and will do our best to provide the information or assistance you need.',
      ] },
    ],
  },
};

export function LegalPage({ assetBase = '../../assets', kind = 'privacy' }) {
  const doc = LEGAL_DOCS[kind] || LEGAL_DOCS.privacy;
  return (
    <div className="fs-body" data-screen-label={doc.title}>
      <SiteHeader logo={assetBase + '/images/logo-fabstone.png'} homeHref="./index.html"
        nav={SITE_NAV} />
      <main className="fs-main">
        <section className="fs-legal" data-screen-label={'Legal — ' + doc.title}>
          <div className="fs-legal__inner">
            <div className="eyebrow">{doc.eyebrow}</div>
            <h1 className="fs-legal__title">{doc.title}</h1>
            <p className="fs-legal__updated">Last updated {UPDATED}</p>
            <p className="fs-legal__lede">{doc.lede}</p>
            {doc.sections.map((s) => (
              <section className="fs-legal__section" key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((para, j) => <p key={j}>{para}</p>)}
              </section>
            ))}
            <div className="fs-legal__contact">
              <h2>Contact Us</h2>
              <p>Fabstone &middot; 2514 Sam Rayburn Hwy, Melissa, TX 75454<br />
                sales@fabsg.com &middot; 972-542-9678</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter logo={assetBase + '/images/logo-fabstone.png'} />
    </div>
  );
}
