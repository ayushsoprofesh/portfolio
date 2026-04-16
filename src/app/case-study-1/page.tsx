import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CASE_STUDIES } from "@/lib/portfolio-content";
import Image from "next/image";

export default function CaseStudyOnePage() {
  const content = CASE_STUDIES["case-study-1"];
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
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Oracle’s legacy ERP database interfaces are risking customer retention against modern competitors. The Pricing ecosystem must be migrated to the new <strong style={{ color: "#FFFFFF" }}>Redwood design system</strong> while supporting <strong style={{ color: "#FFFFFF" }}>massive data volumes</strong>, flattening <strong style={{ color: "#FFFFFF" }}>complex hierarchies</strong>, and adding user-requested enhancements without <strong style={{ color: "#FFFFFF" }}>direct user research</strong>.</p>
          
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>Unpacking the Unknowns (The Audit)</h4>
          <ul className="case-study-bullets" style={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.7 }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Redwood design system:</strong> Requires mapping granular enterprise components into complex, interconnected pricing workflows.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Massive data volumes:</strong> Customers maintain up to 1 million item lines per Price List (Central pricing application). Standard CRUD operations are slow and adds to the user&apos;s cognitive load.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Complex hierarchies:</strong> Legacy systems force horizontal scrolling through up to 4 levels of depth (List {">"} Item {">"} Benefit/Charge {">"} Tier/Matrix).</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>No direct user research:</strong> Design decisions must be reverse-engineered from PM feedback, legacy system bottlenecks, and enterprise UX best practices.</li>
          </ul>
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0' }}>
            <Image 
              src="/Case Study/Pricingflow.jpg" 
              alt="Pricing Workflow" 
              width={1600} 
              height={900} 
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </article>

      <article id="phase-2" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Phase 2</p>
        <h2 className="case-study-section-title">The Data-to-Design Framework</h2>
        <h3 className="case-study-section-subtitle">Mapping data and system constraints directly to design features to ensure every UI decision solves a specific business problem.</h3>
        
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
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>Average 600k–1M item lines per Price List.</strong></td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>Legacy 1-by-1 item addition causes severe operational bottlenecks and customer churn risk.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>An efficient, high speed method to manipulate thousands of price lines simultaneously.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}>ESS (background) jobs for mass actions combined with the <strong>&quot;The Escape Hatch&quot;:</strong> An Excel-like grid UI for bulk pasting</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>Pricing data is highly sensitive and interconnected.</strong></td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>Pricing errors during transaction fulfillment cause critical business failures for customers.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>A clear mental model that prevents accidental edits across deep, horizontal data structures.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>Drill-Down Architecture:</strong> Converting horizontal scrolls into distinct, manageable drill-down levels and dedicated tabs.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>Customers duplicate rules across multiple lists.</strong></td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>Formulas and Rate Plans locked inside specific Price Lists create massive technical debt and repetitive work.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top', color: '#aaa' }}>Write-once, use-anywhere management for complex pricing rules and formulas.</td>
                <td style={{ padding: '1rem', verticalAlign: 'top' }}><strong>Global Centralization:</strong> Dedicated shell environments for Formula Management and Rate Plan Templates.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <article id="phase-3" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Phase 3</p>
        <h2 className="case-study-section-title">Execution</h2>
        <div className="case-study-prose">
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>With the proxy data mapped to business and user needs, the focus shifted to executing scalable UI architecture. Because direct user testing was restricted, every design choice had to trace back to the data framework to secure stakeholder buy-in. The following five cases demonstrate how these requirements were translated into high-fidelity, interconnected workflows.</p>
        </div>
      </article>

      <article id="story-1" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 1</p>
        <h2 className="case-study-section-title">Flattening the Information Architecture</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>The legacy UIs <strong style={{ color: "#FFFFFF" }}>nested up to four levels of data</strong> (List {">"} Item {">"} Charge/Benefit {">"} Tier/Matrix) on a single horizontally scrolling page. This caused severe cognitive overload and increased the risk of catastrophic pricing errors.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>To align with Redwood standards and human cognitive limits, the architecture was restructured into a <strong style={{ color: "#FFFFFF" }}>drill-down navigation model</strong>. In Price Lists, four distinct item types (Standard, Model, Coverage, Subscription) required vastly different pricing setups. These were <strong style={{ color: "#FFFFFF" }}>segregated into dedicated tabs</strong> to isolate workflows and manage task execution efficiently.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2.5rem 0' }}>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ color: '#aaa', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1) Price List IA</p>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                 <Image 
                   src="/Case Study/IA.jpg" 
                   alt="Price List IA" 
                   width={800} 
                   height={600} 
                   style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                 />
              </div>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ color: '#aaa', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2) Price List legacy UI</p>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                 <Image 
                   src="/Case Study/Case1Image.jpg" 
                   alt="Price List legacy UI" 
                   width={800} 
                   height={600} 
                   style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                 />
              </div>
           </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 1 Price List drill down hierarchy</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src="https://embed.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=174-56184&p=f&viewport=556%2C182%2C0.04&scaling=contain&content-scaling=fixed&starting-point-node-id=174%3A56184&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1&footer=0&hotspot-hints=0" 
              allowFullScreen
            />
          </div>
        </div>
      </article>

      <article id="story-2" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 2</p>
        <h2 className="case-study-section-title">Designing for 1 Million Rows</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Customers manage <strong style={{ color: "#FFFFFF" }}>up to 1 million items</strong> per Price List. The legacy system required adding items and charges one by one, an impossible task at scale.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>A multi-step <strong style={{ color: "#FFFFFF" }}>Mass Action framework</strong> was designed. Users select items in bulk, apply operations (e.g., markups/markdowns based on external database fetches), and execute. To protect system performance, limits were set triggering <strong style={{ color: "#FFFFFF" }}>ESS (background) jobs</strong> that notify the user upon completion.</p>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>To cater to enterprise users heavily reliant on spreadsheet workflows, an <strong style={{ color: "#FFFFFF" }}>&quot;Escape Hatch&quot; Grid UI</strong> was introduced to directly paste column values from Excel.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 2.1 Mass Action</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, marginBottom: '1.5rem', backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src="https://embed.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=180-16112&p=f&viewport=556%2C182%2C0.04&scaling=contain&content-scaling=fixed&starting-point-node-id=180%3A16112&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1&footer=0&hotspot-hints=0" 
              allowFullScreen
            />
          </div>

          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 2.2 Pricing grid</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src="https://embed.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=185-196003&p=f&viewport=556%2C182%2C0.04&scaling=contain&content-scaling=fixed&starting-point-node-id=185%3A196003&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1&footer=0&hotspot-hints=0" 
              allowFullScreen
            />
          </div>
        </div>
      </article>

      <article id="story-3" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 3</p>
        <h2 className="case-study-section-title">Anticipating Scale Against PM Pushback</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Initial PM requirements for the Price List migration mandated single-charge support per item, under the assumption that customers preferred maintaining multiple single-charge Price Lists.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>Relying on enterprise UX patterns, it was evident that forcing users to manage multiple lists for a single item would <strong style={{ color: "#FFFFFF" }}>exponentially increase error rates</strong>. Despite PM pushback, parallel explorations for a <strong style={{ color: "#FFFFFF" }}>Multi-Charge Price List</strong> were designed.</p>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>Three releases later, PMs returned with customer demands for multi-charge support. Because the architectural exploration was already completed, the feature was <strong style={{ color: "#FFFFFF" }}>rapidly integrated</strong>, allowing customers to choose between single or multi-charge architectures during onboarding based on their specific scale.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 3 Multi-charge Setup</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src="https://embed.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=180-39164&p=f&viewport=556%2C182%2C0.04&scaling=contain&content-scaling=fixed&starting-point-node-id=180%3A39164&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1&footer=0&hotspot-hints=0" 
              allowFullScreen
            />
          </div>
        </div>
      </article>

      <article id="story-4" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 4</p>
        <h2 className="case-study-section-title">Centralizing Assets for Global Scale</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Pricing elements like Formulas and Rate Plans were built and stored within specific Price Lists. If a customer wanted to use the same formula across 50 regional lists, they had to build and maintain it 50 times.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>Pushed to extract these elements from isolated lists into <strong style={{ color: "#FFFFFF" }}>centralized, global libraries</strong>.</p>
          <ol className="case-study-bullets" style={{ paddingLeft: '1.5rem', listStyleType: 'decimal', lineHeight: 1.7 }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Formula Management:</strong> Designed a central workbench to create, edit, and activate formulas, including a <strong style={{ color: "#FFFFFF" }}>&quot;Show Where Used&quot; feature</strong> to push global updates instantly.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Rate Plan Templates:</strong> Created global shell templates for subscription rate plans, allowing cross-list application and <strong style={{ color: "#FFFFFF" }}>massive reductions in repetitive data entry</strong>.</li>
          </ol>
        </div>


        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Case 4 Formula Management</p>
          <div style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '60%', height: 0, backgroundColor: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
              src="https://embed.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=183-80692&p=f&viewport=556%2C182%2C0.04&scaling=contain&content-scaling=fixed&starting-point-node-id=183%3A80692&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1&footer=0&hotspot-hints=0" 
              allowFullScreen
            />
          </div>
        </div>
      </article>

      <article id="story-5" className="case-study-section-block">
        <p className="case-study-section-eyebrow">Case 5</p>
        <h2 className="case-study-section-title">Establishing the Pricing Component Library</h2>
        <div className="case-study-prose">
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Problem</h4>
          <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>Redwood provided standard granular components, but the Pricing ecosystem required highly <strong style={{ color: "#FFFFFF" }}>complex, repeated patterns</strong> (mass-action tables, tiered-pricing drawers, grid interfaces) across 8 different applications.</p>
          <h4 style={{ color: "#39FF14", marginBottom: "0.5rem", fontSize: "1.125rem", fontWeight: 600 }}>The Strategy</h4>
          <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>A <strong style={{ color: "#FFFFFF" }}>centralized Component Library</strong> specific to Oracle Pricing was established. By standardizing the macro-components (e.g., the Add Charge Drawer, Main Table Containers, Page Headers), it <strong style={{ color: "#FFFFFF" }}>reduced development friction and guaranteed UI parity</strong> across Discount Lists, Price Lists, Shipping Charge Lists, and Cost Lists.</p>
        </div>

        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', margin: '2.5rem 0', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
           <Image 
             src="/Case Study/Case5image.jpg" 
             alt="Pricing Component Library" 
             width={1600} 
             height={900} 
             style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
           />
        </div>
      </article>
    </CaseStudyTemplate>
  );
}
