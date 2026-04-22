import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CASE_STUDIES } from "@/lib/portfolio-content";
import { CASE_STUDY_2_LINKS, getFigmaEmbedUrl } from "@/lib/figma-links";

export default function CaseStudyTwoPage() {
  const content = CASE_STUDIES["case-study-2"];
  const study = {
    ...content,
  };

  return (
    <CaseStudyTemplate study={study}>
      <article id="phase-1" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Phase 1</p>
        <h2 className="case-study-section-title">Auditing the Challenge</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Challenge Statement</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>The Pricing ecosystem must be expanded rapidly with <strong style={{ color: "#FFFFFF" }}>net-new applications</strong> and <strong style={{ color: "#FFFFFF" }}>cross-functional integrations</strong>, adhering to strict <strong style={{ color: "#FFFFFF" }}>short deadlines</strong>. Design must defend the core <strong style={{ color: "#FFFFFF" }}>user mental model</strong> against conflicting external team agendas, maintain consistent experience across pricing ecosystem while relying on <strong style={{ color: "#FFFFFF" }}>PM-provided proxy data</strong> to validate complex workflows.</p>
          
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>Unpacking the Unknowns</h4>
          <ul className="case-study-bullets" style={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.7 }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Cross-functional integrations:</strong> Pricing data (Rate Plans) must sit inside external apps (Order Management, CPQ) without breaking the host app&apos;s UX.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Short deadlines:</strong> Requires aggressive prioritization, component/flow reuse and eliminating bloated legacy steps.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>User mental model vs. Team agendas:</strong> External teams want to force features into the Pricing UI where it benefits their architecture, not the user&apos;s logic.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>PM-provided proxy data:</strong> Must extract UX opportunities by reading between the lines of PM data rather than speaking to users directly.</li>
          </ul>
        </div>
      </article>

      <article id="phase-2" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Phase 2</p>
        <h2 className="case-study-section-title">The Data-to-Design Framework</h2>
        <h3 className="case-study-section-subtitle">Mapping proxy data and system constraints directly to design features to ensure every UI decision solves a specific business problem.</h3>
        
        <div className="case-study-prose" style={{ marginTop: '2rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch', width: '100%' }}>
          <table className="case-study-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '1rem', lineHeight: 1.6 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 <th style={{ padding: '1rem', color: '#FFFFFF', verticalAlign: 'top', width: '25%' }}>Metric / Information</th>
                 <th style={{ padding: '1rem', color: '#FFFFFF', verticalAlign: 'top', width: '25%' }}>Business Problem</th>
                 <th style={{ padding: '1rem', color: '#FFFFFF', verticalAlign: 'top', width: '25%' }}>User Need</th>
                 <th style={{ padding: '1rem', color: '#FFFFFF', verticalAlign: 'top', width: '25%' }}>Opportunity / Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>Pricing data is fetched by OM and CPQ systems.</strong></td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>Forcing Pricing&apos;s specific UX patterns into other Oracle apps breaks the host app&apos;s interface.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>A seamless, contextual transactional experience regardless of where the data originates.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>Negotiation Fragments:</strong> Context-aware UI fragments that adapt their layout to match the external host application.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>3-week deadline to deliver the full Currency Conversion List (CCL).</strong></td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>Legacy step-by-step currency addition is too slow to design, build, and use.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>High-speed, bulk setup of conversion rates.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>1-to-Many Mapping:</strong> Selecting one base currency and linking multiple target currencies, plus 1-click General Ledger sourcing.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>PMs report users repeating identical mass actions across periods.</strong></td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>Users waste time rebuilding complex update parameters for different Price Lists.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>A reusable, scalable logic framework for mass operations.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>Mass Action Templates:</strong> A pitched and designed management flow to save, update, and deploy mass action rules globally.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <article id="phase-3" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Phase 3</p>
        <h2 className="case-study-section-title">Strategic Execution</h2>
        <div className="case-study-prose">
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>The following cases demonstrate the tactical navigation of cross-functional complexity and high-speed delivery cycles, showcasing how the data-to-design framework was applied across disjointed product ecosystems.</p>
        </div>
      </article>

      <article id="case-1" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 1</p>
        <h2 className="case-study-section-title">Defending the User Mental Model (Rate Plans)</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>The external Subscriptions team wanted to introduce <strong style={{ color: "#FFFFFF" }}>&quot;Entitlements&quot;</strong> directly onto the main Price List screen. This fit their technical backend, but violated the pricing user&apos;s mental model, where entitlements logically belong inside the actual Rate Plan.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>Pushed back against cross-functional engineering and PM teams to defend the user experience. Navigated organizational friction to force the Entitlements setup <strong style={{ color: "#FFFFFF" }}>inside</strong> the Rate Plan creation flow. Furthermore, actively guided the Subscriptions team to align their UI fragments with the established Pricing Design Standards to prevent jarring visual shifts for the end-user.</p>
        </div>


        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>case 1 Rate Plan Setup</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src={getFigmaEmbedUrl(CASE_STUDY_2_LINKS.case1)} 
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <article id="case-2" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 2</p>
        <h2 className="case-study-section-title">Breaking Internal UX Rules for External Context</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Rate Plans are not just used in Pricing; they are fetched as <strong style={{ color: "#FFFFFF" }}>&quot;fragments&quot;</strong> during live transactions in Order Management (OM) and Configure, Price, Quote (CPQ) apps. Sticking rigidly to the Pricing UI patterns would break the seamless experience inside those apps.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>Intentionally broke established Pricing UI patterns to serve contextual needs. Collaborated with external PMs and designers to adapt the <strong style={{ color: "#FFFFFF" }}>&quot;Negotiation&quot; fragments</strong> to flawlessly mirror the distinct UX practices of OM and CPQ, ensuring the user never felt like they were jumping between disparate enterprise software systems.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 2.1 Negotiation CPQ</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, marginBottom: '1.5rem', backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src={getFigmaEmbedUrl(CASE_STUDY_2_LINKS.case2_1)} 
              allowFullScreen
              loading="lazy"
            />
          </div>

          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 2.2 Negotiation FOM</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src={getFigmaEmbedUrl(CASE_STUDY_2_LINKS.case2_2)} 
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <article id="case-3" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 3</p>
        <h2 className="case-study-section-title">High-Velocity App Delivery (Currency Conversion List)</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Required to deliver a complete, end-to-end Currency Conversion List (CCL) application within a strict <strong style={{ color: "#FFFFFF" }}>3-week sprint</strong>. The legacy system relied on a highly manual, step-by-step setup (Base {">"} Target {">"} Rate) that was inefficient.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>Bypassed the legacy logic entirely. Designed a high-speed creation pattern allowing users to select a single base currency and instantly map it to multiple targets in one click. Additionally, integrated a <strong style={{ color: "#FFFFFF" }}>1-click feature</strong> to source conversion rates directly from the General Ledger, turning a tedious multi-step process into a rapid, one-shot operation.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 3 Currency conversion setup</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src={getFigmaEmbedUrl(CASE_STUDY_2_LINKS.case3)} 
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <article id="case-4" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 4</p>
        <h2 className="case-study-section-title">Rapid Feature Injection & Modular Redesign</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Fast-tracked requirements mandated a complete redesign of the Promotions <strong style={{ color: "#FFFFFF" }}>&quot;Benefits&quot;</strong> section within 1 week, alongside building a new Shipping Charge List application.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>Leveraged the centralized Pricing Component Library established in previous quarters. Quickly redesigned the Promotions benefits section by adapting existing tier/matrix components. For the Shipping Charge List, successfully <strong style={{ color: "#FFFFFF" }}>&quot;injected&quot;</strong> the complex Mass Action and Grid Pricing patterns built for Price Lists, applying them seamlessly to UOMs and shipping methods without reinventing the wheel.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 4 Shipping charge setup</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src={getFigmaEmbedUrl(CASE_STUDY_2_LINKS.case4)} 
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <article id="case-5" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 5</p>
        <h2 className="case-study-section-title">Proactive UX Pitching via Proxy Data (Mass Action Templates)</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Operating with zero direct user contact, designers relied strictly on PMs for data. PM data revealed that users were continuously executing the exact same Mass Action price update operations across multiple different Price Lists every pricing period.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>Instead of just executing on assigned tickets, proactively pitched a solution to the business: <strong style={{ color: "#FFFFFF" }}>Templatized Mass Actions</strong>. Designed a management flow where users could create, store, and manage structural templates for mass updates, which could then be instantly applied across any Price List. The pitch was successful and adopted as a core future enhancement.</p>
        </div>


        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 5 Across list mass action</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src={getFigmaEmbedUrl(CASE_STUDY_2_LINKS.case5)} 
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </CaseStudyTemplate>
  );
}
