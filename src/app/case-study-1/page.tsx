import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CASE_STUDIES } from "@/lib/portfolio-content";

export default function CaseStudyOnePage() {
  const content = CASE_STUDIES["case-study-1"];
  const study = {
    ...content,
    title: "Designing the Oracle Pricing Engine for Scale",
    meta: {
      ...content.meta,
      role: "UX Designer",
      timeline: "6 Release Cycles (25B to 26C)",
    }
  };

  return (
    <CaseStudyTemplate study={study}>
      <article id="problem" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Context</p>
        <h2 className="case-study-section-title">1. The Problem</h2>
        <h3 className="case-study-section-subtitle">Modernizing a Legacy ERP</h3>
        <div className="case-study-prose">
          <p>
            Oracle Pricing is the main engine for all Fusion transaction apps. The old UI was called ADF. It was built by engineers just to move database queries around. It was actually made hard to use on purpose so customers would stick to Oracle ERP solutions. But leadership realized they needed a good user experience to keep existing customers and win new ones. My job was to <strong style={{ color: "#39FF14" }}>move the experience to the Redwood Design System</strong>.
          </p>
          <p>
            The data scale was huge. I worked in a two person design team with my manager. Before designing, I had to drop my chaotic college file habits and learn his strict file management and common component library system. This saved me because the pricing ecosystem was massive to keep track of.
          </p>
          <br/>
          <p><strong>The Complexity of Price Lists:</strong></p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Massive Volume:</strong> An average Price List has anywhere from <strong>600k to over 1 million items</strong>.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Deep Combinations:</strong> A single price line is not just a number. It is a combination of the Item, the Unit of Measure (UOM), the Charge, and the Date.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Cross App Dependencies:</strong> A price list does not live alone. It fetches base prices from Cost Lists and pulls math from Formula Management.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Multiple Item Types:</strong> Users had to manage Standard items, Subscription items, Coverages, and Models all in one place. I designed a tab layout to separate these item types and <strong>reduce the cognitive load</strong> on the user.</li>
          </ul>
        </div>
      </article>

      <article id="architecture" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Systems Thinking</p>
        <h2 className="case-study-section-title">2. The Architecture Battle</h2>
        <h3 className="case-study-section-subtitle">Single vs Multi Charge</h3>
        <div className="case-study-prose">
          <p>
            Early on, the Product team told us that Price Lists should only handle a single charge.
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The UX Pushback:</strong> We argued that having different price lists for every single charge would be too much for users to manage. Our users have complex setups. Some use location based pricing, while others use the exact same price list but change the item lines for different dates.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The Compromise:</strong> I built a <strong>Proof of Concept (POC)</strong> for a Multi Charge Price List to show it was more efficient. The PMs liked the UX but cited dev constraints. They went ahead with Single Charge for the next three cycles (25B, 25C, and 25D).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The Final Win:</strong> We did not give up. We brought it up again later, and the product team finally agreed. I designed a hybrid setup where customers decide during their initiation phase if they want to use Single Charge or Multi Charge. This <strong>kept parity for older customers</strong> while giving a <strong>better option for growth</strong>.</li>
          </ul>
        </div>
      </article>

      <article id="mass-actions" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Solution</p>
        <h2 className="case-study-section-title">3. Taming the Data Weight</h2>
        <h3 className="case-study-section-subtitle">Mass Actions</h3>
        <div className="case-study-prose">
          <p>
            Pricing admins need to define and maintain prices so downstream apps can use them. Usually, they just want to select certain items, bump the prices up by a set percent for the next quarter, and move on. Doing this line by line in the old ADF system was tedious.
          </p>
          <p>
            I designed a Mass Actions flow to make this a <strong>simple, one click process</strong>.
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The Flow Steps:</strong> Users select their items, choose the charges they want to update, pick the operation, decide if they want to base the new price on a cost list, set the effective date, and hit submit.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>System Performance:</strong> Manipulating 1 million rows in real time would lag the system. I worked with the devs to use Oracle ESS. Users submit their request, it becomes a <strong>background batch job</strong>, and the <strong>UI stays unlocked</strong>.</li>
          </ul>
        </div>

        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', paddingBottom: '56.25%', position: 'relative', backgroundColor: 'rgba(255,255,255,0.05)' }}>
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem' }}>
              <span style={{ color: '#aaa' }}>[EMBED FIGMA PROTOTYPE: Interactive flow for Mass Actions WITHIN a single Price List, showing the drawer UI and batch job status]</span>
           </div>
        </div>

        <div className="case-study-prose">
          <p>
            Down the line, users also needed a way to update prices across multiple different price lists at the same time. The easy route would have been to just copy and paste the first flow. But we stopped and looked at the bigger picture.
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Scoping the Logic:</strong> We realized that letting users update multiple different charges across multiple different price lists would create way too many failure points. I asked the PMs specific questions about user habits and confirmed our theory. Users rarely do tasks that way. We <strong>scoped the design down</strong> so users only update a single charge across their SKUs during a cross list change.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The Impact:</strong> Because we focused on making this heavy process simple and reliable, <strong>Mass Actions became a standard feature</strong>. We took the pattern we created for Price Lists and <strong>rolled it out across all other high volume pricing applications</strong> like Discount Lists, Cost Lists, and Shipping Charge Lists.</li>
          </ul>
        </div>

        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', paddingBottom: '56.25%', position: 'relative', backgroundColor: 'rgba(255,255,255,0.05)' }}>
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem' }}>
              <span style={{ color: '#aaa' }}>[EMBED FIGMA PROTOTYPE: Interactive flow for Mass Actions ACROSS multiple Price Lists]</span>
           </div>
        </div>
      </article>

      <article id="escape-hatch" className="case-study-section-block">
        <p className="case-study-section-eyebrow">UX Solution</p>
        <h2 className="case-study-section-title">4. The Escape Hatch</h2>
        <h3 className="case-study-section-subtitle">Data Grid</h3>
        <div className="case-study-prose">
          <p>
            Even with mass actions, pricing admins are used to an Excel like grid. Sometimes they just want to make random updates to a bunch of different items.
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The User Need:</strong> The old system had a basic CSV file import. But users wanted a way to just copy specific price columns from their local Excel files and paste them right into our system for a selection of items.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The UX Solution:</strong> Data grids can have mis entry issues and dev constraints. So instead of making the whole app a grid, I designed an escape hatch. Users select items and move them to an <strong>isolated grid view</strong> where they can paste their Excel data.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>The Compute Logic:</strong> After they are done, the system decides the load. If it is too much, it becomes an ESS batch job. If it is small, it <strong>computes in real time</strong>. This flow was highly successful and slowly became a standard pattern used across other apps.</li>
          </ul>
        </div>

        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', paddingBottom: '56.25%', position: 'relative', backgroundColor: 'rgba(255,255,255,0.05)' }}>
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem' }}>
              <span style={{ color: '#aaa' }}>[EMBED FIGMA PROTOTYPE: Interactive flow showing the transition from the standard table view to the isolated Data Grid view]</span>
           </div>
        </div>
      </article>

      <article id="constraints" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Process</p>
        <h2 className="case-study-section-title">5. Constraints and Killing Technical Debt</h2>
        <div className="case-study-prose">
          <p>
            Oracle is a large tech giant, so every action had to go through strict channels.
          </p>
          <ul className="case-study-bullets" style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Design System Rules:</strong> We were <strong style={{ color: "#39FF14" }}>bound to the Redwood Design System</strong>. I attended Redwood office hours constantly to explain our use cases and understand the rules. For SCM specific components that had no support channels, I had to build a POC and get it tested and approved before moving ahead.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>User Access:</strong> Designers never had one on one calls with the users. The users talked to the PMs and the legal team, and then we asked the PMs questions. I had to learn how to ask very specific questions so information was not lost in translation. To make sure my designs were built correctly, I produced <strong style={{ color: "#39FF14" }}>detailed spec sheets for the developers</strong>.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: "#39FF14" }}>Fixing Rogue Components:</strong> For the main price list, I suggested using tabs to separate the different item types. The devs and stakeholders were against tabs. They ignored the UX recommendation and built a custom component that broke our patterns. It stayed in the app for three cycles. Later, while looking at components for another project, I found a standard Redwood part that solved their issue perfectly. I took it to my manager for approval, got the PM to make a POC, and finally broke down the flawed component, <strong style={{ color: "#39FF14" }}>replacing it with the standard design</strong>.</li>
          </ul>
        </div>
      </article>
    </CaseStudyTemplate>
  );
}
