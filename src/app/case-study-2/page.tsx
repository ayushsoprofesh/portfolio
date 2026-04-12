import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CASE_STUDIES } from "@/lib/portfolio-content";

export default function CaseStudyTwoPage() {
  const content = CASE_STUDIES["case-study-2"];
  const study = {
    ...content,
    title: "Fast Execution and Cross Team Design",
    meta: {
      ...content.meta,
      role: "UX Designer",
      timeline: "4 Release Cycles (26A to 26D)",
    }
  };

  return (
    <CaseStudyTemplate study={study}>
      <article id="problem" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Context</p>
        <h2 className="case-study-section-title">1. The Problem</h2>
        <h3 className="case-study-section-subtitle">Moving Fast in a Giant Corporation</h3>
        <div className="case-study-prose">
          <p>
            While I was working on the massive Price List redesign from my first case study, I was also tasked with spinning up smaller products from scratch. The old ADF UI was clunky everywhere, and we had to replace it fast.
          </p>
          <p>
            At times, I was working on <strong style={{ color: "#39FF14" }}>up to three different products or features at once</strong>. Startups want designers who can ship fast, and enterprise companies want designers who can handle complex rules. My goal during these release cycles was to do both. I treated these smaller products like <strong style={{ color: "#39FF14" }}>agile startup sprints</strong> while making sure they fit perfectly into the giant Oracle ecosystem.
          </p>
        </div>
      </article>

      <article id="rapid-execution" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Execution</p>
        <h2 className="case-study-section-title">2. Rapid Execution and Reusing Patterns</h2>
        <div className="case-study-prose">
          <p>
            In releases 26A and 26B, I had to design three separate products from scratch on very tight deadlines.
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Currency Conversion List (26A):</strong> Customers needed a place to store their currency conversion values, including both general and specific rates. I designed the full creation and manipulation flows in <strong style={{ color: "#39FF14" }}>just a few weeks</strong>.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Shipping Charge List (26B):</strong> Customers use this to set up broad or item specific shipping rates. I finished these designs in <strong style={{ color: "#39FF14" }}>exactly 3 weeks</strong>. To move this fast, I <strong style={{ color: "#39FF14" }}>translated UI features and patterns</strong> directly from the main Price List. Since the same dev team was building both products, this <strong style={{ color: "#39FF14" }}>lowered their dev effort massively</strong> and kept the UX familiar for the users.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Formula Management (26B):</strong> I worked on a project where users could manage the math formulas used in price lists. I designed a way for them to make changes to a formula, see exactly where that formula was being used across the system, and update the prices using the new formula. I delivered this in <strong style={{ color: "#39FF14" }}>3 weeks</strong>.</li>
          </ul>
        </div>

        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', paddingBottom: '56.25%', position: 'relative', backgroundColor: 'rgba(255,255,255,0.05)' }}>
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem' }}>
              <span style={{ color: '#aaa' }}>[EMBED FIGMA PROTOTYPE: Interactive flow for Shipping Charge List or Currency Conversion showing the clean UI delivered in the 3 week sprint]</span>
           </div>
        </div>
      </article>

      <article id="scrappy-design" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Future Proofing</p>
        <h2 className="case-study-section-title">3. Scrappy Design and Future Proofing</h2>
        <div className="case-study-prose">
          <p>
            In cycle 26B, I worked on Rate Plan Templates. Rate plans are used to price subscription items, but they sit inside a specific Price List. Users had no way to export them to use somewhere else.
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The 2 Week Sprint:</strong> I designed a flow where users could convert rate plans into templates and share them across different price lists. I delivered this in <strong style={{ color: "#39FF14" }}>2 weeks</strong>.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Saving Rejected Work:</strong> While doing this, I explored a completely new way to fix the clunky Rate Plan UI. The PMs rejected it at the time. Instead of throwing it away, I <strong style={{ color: "#39FF14" }}>kept the exploration ready</strong>. Two cycles later in 26D, the product team asked for a Rate Plan revamp, and I used those exact designs to get a head start.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Pitching New Features:</strong> The template project gave me an idea. I pitched a new feature to the product team called Templatized Mass Actions. I designed the whole flow. Even though it did not get built right away because of dev bandwidth, they <strong style={{ color: "#39FF14" }}>officially added it to the product backlog</strong>. This showed I could <strong style={{ color: "#39FF14" }}>drive product strategy</strong>, not just take orders.</li>
          </ul>
        </div>
        
        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', paddingBottom: '56.25%', position: 'relative', backgroundColor: 'rgba(255,255,255,0.05)' }}>
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem' }}>
              <span style={{ color: '#aaa' }}>[EMBED FIGMA PROTOTYPE: Interactive flow for Rate Plan Templates]</span>
           </div>
        </div>
      </article>

      <article id="cross-team" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Coordination</p>
        <h2 className="case-study-section-title">4. The Cross Team Battle</h2>
        <h3 className="case-study-section-subtitle">Rate Plans</h3>
        <div className="case-study-prose">
          <p>
            My most complex project was the Rate Plan redesign in cycle 26D. This project spanned across three different products owned by three different teams. I had to work with their designers and PMs, and my main goal was to <strong style={{ color: "#39FF14" }}>protect the user experience from company politics</strong>.
          </p>
          <p>
            <strong>Fighting for the User Logic:</strong>
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>Another team owned a feature called Entitlements. They wanted to put their feature on the main Price List screen, completely outside of the Rate Plan.</li>
            <li style={{ marginBottom: '0.5rem' }}>I fought back. To the user, it is not logical to leave the rate plan to configure an entitlement, because entitlements belong inside the rate plan. Through lots of discussion, I <strong style={{ color: "#39FF14" }}>got them to agree to move it inside</strong>. I also helped their designers align their work to our Price List UX standards so the user would not be thrown off by a sudden design change.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <strong>Adapting for Other Apps:</strong>
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>Rate Plans needed to adapt depending on the context of the application consuming them, while preserving the core pricing logic.</li>
          </ul>
        </div>
      </article>
    </CaseStudyTemplate>
  );
}
