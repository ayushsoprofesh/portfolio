"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./case-study-2.module.css";

export default function CaseStudy2() {
  const [mood, setMood] = useState("editorial");
  const [voice, setVoice] = useState("serif");
  const [panelFeel, setPanelFeel] = useState("flush");
  const [readMode, setReadMode] = useState<"short" | "story">("short");

  useEffect(() => {
    const panels = document.querySelectorAll('[data-panel]');
    
    const updateOnScroll = () => {
      const vh = window.innerHeight;
      panels.forEach(p => {
        const r = p.getBoundingClientRect();
        if (r.top < vh * 0.45 && r.bottom > vh * 0.05) {
          p.classList.add(styles.lifted);
        } else {
          p.classList.remove(styles.lifted);
        }
      });

      const nav = document.getElementById('topnav');
      if (nav) {
        if (window.scrollY > 8) nav.classList.add(styles.scrolled);
        else nav.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', updateOnScroll, { passive: true });
    window.addEventListener('resize', updateOnScroll);
    updateOnScroll();

    return () => {
      window.removeEventListener('scroll', updateOnScroll);
      window.removeEventListener('resize', updateOnScroll);
    };
  }, [readMode]);

  return (
    <div 
      className={styles.caseStudyRoot}
      data-mood={mood}
      data-voice={voice}
      data-panel-feel={panelFeel}
    >
      <nav className={styles.topnav} id="topnav">
        <div className={styles.topnavInner}>
          <Link href="/" className={styles.home}>← Portfolio</Link>
          <div className={styles.crumb}>Case study · <b>Designing Across a Product Suite</b></div>
        </div>
      </nav>

      <main className={styles.mainContent}>

        {/* 1. HERO */}
        <section className={`${styles.panel} ${styles.hero}`} data-panel="true" style={{ position: 'relative' }}>
          {/* MODE TOGGLE */}
          <div style={{ position: 'absolute', top: '40px', right: '40px', display: 'flex', background: 'var(--rule)', borderRadius: '100px', padding: '4px' }}>
            <button 
              onClick={() => setReadMode('short')}
              style={{
                background: readMode === 'short' ? 'var(--ink)' : 'transparent',
                color: readMode === 'short' ? 'var(--paper)' : 'var(--ink-soft)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '100px',
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
            >
              Short Read
            </button>
            <button 
              onClick={() => setReadMode('story')}
              style={{
                background: readMode === 'story' ? 'var(--ink)' : 'transparent',
                color: readMode === 'story' ? 'var(--paper)' : 'var(--ink-soft)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '100px',
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
            >
              Story Mode
            </button>
          </div>

          <div className={styles.eyebrow}>Case Study · 02</div>
          <h1>Designing Across a<br/><em style={{fontStyle: "italic", color: "var(--ink-soft)"}}>Product Suite.</em></h1>
          <p className={styles.lede}>How patterns, persuasion, and patience compound when you design across a product suite.</p>
          <dl className={styles.meta}>
            <div><dt>Timeline</dt><dd>3 release quarters</dd></div>
            <div><dt>Team</dt><dd>2 (Manager + me)</dd></div>
            <div><dt>Role</dt><dd>Product Designer</dd></div>
            <div><dt>Surface</dt><dd>Enterprise B2B · Pricing</dd></div>
          </dl>
        </section>

        {readMode === 'story' && (
          <>
            {/* 2. QUICK SUMMARY */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>01</span><span>Quick Summary</span></div>
              <h2 className={styles.secH}>Problem, Solution and the Impact that followed.</h2>

              <div className={styles.triad}>
                <div className={styles.triadRow} style={{ backgroundColor: '#fff', borderWidth: 0, padding: '28px 28px 0px 0px', borderRadius: 0 }}>
                  <div className={styles.triadTag}>
                    <span className={styles.triadMark}>01</span>
                    <h4>Problem</h4>
                  </div>
                  <div className={styles.triadBody}>
                    <p>Across the Oracle pricing suite, individual products had inherited inconsistent design quality, with shared users moving between them daily. Rate Plans used a generic DS template that wasn't built for the data it carried. Shipping Charge List was being scoped as a single flat table for three structurally different pricing methods. Formulas were modeled as local-to-a-price-list, forcing users to recreate the same logic across every list they touched. <strong>The problem wasn't one broken product. It was suite-wide coherence.</strong></p>
                  </div>
                </div>

                <div className={styles.triadRow} style={{ backgroundColor: '#fff', borderWidth: '1px 0px 0px', padding: '28px 0px 0px', borderRadius: 0 }}>
                  <div className={styles.triadTag}>
                    <span className={styles.triadMark}>02</span>
                    <h4>Solution</h4>
                  </div>
                  <div className={styles.triadBody}>
                    <p>Three projects, three modes of design work:</p>
                    <ul className={styles.impactList} style={{ padding: 0, marginTop: '16px' }}>
                      <li><span><strong>Rate Plans</strong> — earned the redesign by making the argument visually, then designed three surfaces (authoring + two negotiation fragments) across Pricing, Subscription Management, CPQ, and Order Management.</span></li>
                      <li><span><strong>Shipping Charge List</strong> — shipped solo in 3 weeks by reusing patterns established across the suite, with original design work focused only on the per-tab add flows.</span></li>
                      <li><span><strong>Formula Management</strong> — argued early for formulas as a global entity, accepted the deferral when dev bandwidth wouldn't support it, and shipped the right model the cycle after.</span></li>
                    </ul>
                  </div>
                </div>

                <div className={styles.triadRow} style={{ backgroundColor: '#fff', padding: '28px 0px 0px', borderWidth: '1px 0px 0px', borderRadius: 0 }}>
                  <div className={styles.triadTag}>
                    <span className={styles.triadMark}>03</span>
                    <h4>Impact</h4>
                  </div>
                  <div className={styles.triadBody}>
                    <ul className={styles.impactList} style={{ padding: 0 }}>
                      <li><span><strong>Three products shipped</strong> across the pricing suite, each addressing a different scale of design work (cross-team, solo, deferred-and-revived).</span></li>
                      <li><span><strong>Rate Plans delivered as three coordinated surfaces</strong> (one authoring, two negotiation fragments) across three product ecosystems.</span></li>
                      <li><span><strong>Shipping Charge List shipped end to end in 3 weeks</strong> via established pattern reuse, with new design work scoped to per-tab add flows only.</span></li>
                      <li><span><strong>Formula Management restructured the data model</strong> from PL-local to suite-global, with usage visibility and selective cascade to dependent entities.</span></li>
                      <li><span><strong>Patterns originating in the Price List redesign were reused across all three products</strong>, compounding the foundational work into faster delivery downstream.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. PART 1 */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>02</span><span>Quick Fix?</span></div>
              <h2 className={styles.secH}>Rate Plans: Earning the Redesign</h2>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The product I inherited</h4>
              <p>Rate Plans was the first product in the pricing suite to migrate to Redwood, done well before I joined. The redesign used a DS template that looked striking: <strong>four vertical panels across the screen, one per charge type</strong> (one-time, recurring, usage, and so on), each showing a summary of what was configured.</p>
              
              <p>The problem wasn't visible until you tried to <em>use</em> it.</p>

              <figure className={styles.figureFull}>
                <div className={`${styles.placeholder} ${styles.placeholderUI}`}>
                  <div className={styles.label}>legacy screenshot: four-panel layout with summary cards, annotated to show the drilldown path for a single edit</div>
                </div>
              </figure>

              <p><strong>Summary-only meant tunneling for every action.</strong> The panels showed <em>what</em> was configured but not enough to <em>change</em> it. Every admin action, whether editing a charge, adjusting a tier, or modifying a rule, required drilling into a separate page, completing the task, and coming back. The main screen was a viewing surface, not a working one. Users lived in the drilldowns and used the main screen as a navigation index.</p>

              <p>Two secondary issues compounded this. <strong>The layout was fixed, not responsive</strong>, so plans using one charge type had empty panels eating space while plans using all four felt cramped. And <strong>the underlying DS template was generic</strong>, built for a different use case and conscripted into rate plans because it was available at migration time.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>Why we couldn't fix it earlier</h4>
              <p>By the time I joined, my team had been embedding old Rate Plans inside the new Price List for several quarters. Every time we wired up a rate plan surface, the same friction surfaced. We logged it, talked about it internally, and moved on. <strong>It wasn't our product to redesign. We didn't have a mandate.</strong> That continued for four quarters.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The opening</h4>
              <p>In the fifth quarter, the Rate Plans product team came with a request: add <strong>entitlements</strong> to the surface. Entitlements were a fragment owned by Subscription Management, with two sub-parts and multiple setup paths, originally designed for a different ecosystem and now being pulled into Rate Plans. Two more features were planned for the next cycle.</p>

              <p>The ask: <strong>add entitlements to the existing four-panel design.</strong></p>

              <p>We didn't think it would fit. The original four panels were already at the edge of what the layout could hold, and entitlements wasn't a small addition. It carried its own internal structure, its own configuration paths, its own visual weight. Trying to absorb it into a template that already wasn't working for the <em>original</em> task was going to produce something worse than what existed.</p>

              <p>So instead of pushing back verbally and hoping it landed, <strong>we built the argument visually.</strong></p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>Making the case</h4>
              <p>We mocked up multiple iterations of entitlements crammed into the existing UI, showing what was lost, hidden, or made worse. We annotated each iteration with <strong>pros and cons explicit on the canvas</strong>. Alongside those, we sketched what a properly redesigned Rate Plans surface could look like, one that treated rate plans as a working surface instead of a navigation index, and could absorb entitlements (and the two upcoming features) without buckling.</p>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p>We took both sets into a stakeholder meeting. The visual side-by-side did most of the work. <strong>It's hard to argue that a design will be fine when you're looking at a mockup showing it not being fine.</strong></p>
                </div>
                <div className={`${styles.placeholder} ${styles.placeholderDiagram}`}>
                  <div className={styles.label}>mockup pair: "add entitlements to existing 4-panel design" vs. "redesigned surface absorbing entitlements natively", with annotated pros/cons on canvas</div>
                </div>
              </div>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The win, and what we'd actually signed up for</h4>
              <p>The stakeholders agreed to scope a full Rate Plans redesign, not just a feature graft. We had earned the right to redesign a product we'd been told, four quarters running, wasn't ours to touch.</p>

              <p>What we didn't fully grasp in that meeting is that Rate Plans doesn't live in just one ecosystem. It's authored in Pricing, pulled by Order Management for negotiation flows, and now needed to pull from Subscription Management for entitlements. <strong>Three teams, three ecosystems, three sets of PMs and designers</strong> who had opinions about what the surface should be.</p>

              <p>We'd just signed up to redesign the most cross-functional product in our suite.</p>
              <p>That's Part 2.</p>
            </section>

            {/* 4. PART 2 */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>03</span><span>Collaboration</span></div>
              <h2 className={styles.secH}>Rate Plans: Designing Across Ecosystems</h2>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>What we'd actually signed up for</h4>
              <p>Three teams. Three ecosystems. Three sets of users.</p>
              
              <p>Rate Plans is authored in Pricing. It's pulled into Subscription Management because entitlements live there. It's pulled into CPQ and Order Management because rate plans get negotiated at the moment of sale. The redesign we'd won wasn't a single surface, it was three:</p>
              <ol>
                <li>A new Rate Plans authoring surface for Pricing.</li>
                <li>A negotiation fragment for CPQ.</li>
                <li>A negotiation fragment for Order Management.</li>
              </ol>

              <p>Each had its own users, its own conventions, and its own opinions about what should live where.</p>

              <hr className={styles.rule} />

              <h3 className={styles.subH}>Fight 1: Where do entitlements belong?</h3>
              <p>The first disagreement came from Subscription Management. <strong>Entitlements are the rules that govern what a customer is entitled to under a given rate plan</strong>, things like usage caps, included quantities, overage logic. Without a rate plan, an entitlement has nothing to attach to. They don't exist in isolation.</p>

              <p>But the Subscription team wanted entitlements to sit <strong>outside Rate Plans, on the main price list page</strong>, with a link back. Their argument was about visibility and engineering effort: a separate top-level entity was easier to surface in their flows and faster to build.</p>

              <p>For our users, it didn't track. A pricing admin authoring a rate plan would have to:</p>
              <ol>
                <li>Create the rate plan.</li>
                <li>Add charges to it.</li>
                <li><strong>Leave the rate plan surface.</strong></li>
                <li>Go to a separate area on the price list page.</li>
                <li>Author entitlements that point back to the rate plan they just left.</li>
              </ol>

              <p>That's not setup. That's hide-and-seek with your own work. <strong>Entitlements derive their meaning from the rate plan they belong to. Separating them in the UI breaks the mental model of authoring.</strong></p>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p>We mocked up both versions, took the combined Pricing + Subscription teams through the user journey, and made the case that the visibility win wasn't worth the cognitive cost. Entitlements moved inside Rate Plans.</p>
                </div>
                <div className={`${styles.placeholder} ${styles.placeholderDiagram}`}>
                  <div className={styles.label}>diagram: "entitlements outside" flow showing the 5-step hide-and-seek vs. "entitlements inside" flow showing a single continuous authoring path</div>
                </div>
              </div>

              <hr className={styles.rule} />

              <h3 className={styles.subH}>Fight 2: Whose patterns serve whose users</h3>
              <p>The second disagreement was harder, because there wasn't a single answer.</p>

              <p>Once we'd designed the authoring surface, the assumption was that the negotiation fragments for CPQ and Order Management would be <strong>straightforward lifts</strong>, take the rate plan surface, package it as a fragment, hand it over. Same component, two new homes.</p>

              <p>That assumption broke the moment we looked at how each team's users actually negotiated.</p>

              <p><strong>CPQ users negotiate granularly.</strong> A sales rep configuring a quote isn't renegotiating the whole rate plan. They're making targeted edits, adjusting a single tier, applying a discount to one charge, tweaking a usage rate for a specific customer. The fragment they need is one that surfaces individual charges as editable units, fast.</p>

              <p><strong>OM users negotiate holistically.</strong> An order manager finalizing a deal is often working with the rate plan as a whole, reviewing it end-to-end before committing. The fragment they need is one that exposes the full rate plan in a reviewable state, with edits possible anywhere but no single edit being the main action.</p>

              <p>Same data, same product, two completely different working modes. <strong>Our authoring patterns weren't wrong for our users, but they weren't right for these users either.</strong> Lifting them as-is would have produced fragments that technically worked and practically didn't.</p>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p>So we <strong>deliberately broke our own patterns</strong>, sat with CPQ and OM designers to understand how their users actually moved through a negotiation, and designed two fragments that prioritized those flows over consistency with the authoring surface. The fragments share visual language and components with Rate Plans, but the <em>information hierarchy</em> and <em>primary actions</em> differ by surface.</p>
                </div>
                <div className={`${styles.placeholder} ${styles.placeholderDiagram}`}>
                  <div className={styles.label}>diagram: rate plan authoring surface alongside the CPQ fragment (granular-edit-first) and OM fragment (whole-plan-review-first), showing how the same data reorganizes around the user's working mode</div>
                </div>
              </div>

              <hr className={styles.rule} />

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>What made it intense</h4>
              <p>The work itself was complex. What made it intense was the <em>cadence</em> around it.</p>

              <p>Subscription Management was building the entitlements component on a clock, every design decision we made fed directly into their development sprint, and the component they built would later need to be translated into our pricing dev stack on a separate one-month cycle. <strong>Delays at the design layer compounded across two engineering pipelines.</strong> Every meeting that didn't reach a decision pushed the chain back.</p>

              <p>And I was the youngest designer in most of those meetings. The PMs and designers across teams were senior to me by years. There were stretches where I worried about being overshadowed, where the easier move would have been to agree and move on. <strong>What I learned to do, in real time, was hold ground on the specific question being decided without escalating the conversation past it.</strong> Stay on the user. Stay on the task. Bring the disagreement back after the meeting with a refined version of the argument rather than trying to win it in the room.</p>

              <p>The team was open. Not a hard wall, but not a free pass either. Convincing them required showing up to each meeting with the previous meeting's feedback already absorbed and answered.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The shipped outcome</h4>
              <p>The redesign shipped in three deliveries:</p>
              <ol>
                <li><strong>The new Rate Plans authoring surface</strong> for Pricing, with entitlements integrated inside.</li>
                <li><strong>The CPQ negotiation fragment</strong>, optimized for granular edits.</li>
                <li><strong>The OM negotiation fragment</strong>, optimized for whole-plan negotiation.</li>
              </ol>

              <figure className={styles.figureFull}>
                <div className={`${styles.placeholder} ${styles.placeholderUI}`}>
                  <div className={styles.label}>shipped UI: three surfaces side by side, labeled with their host product and primary user mode</div>
                </div>
              </figure>

              <p>The lesson I took from this stretch isn't that cross-team design is hard. It's that <strong>the patterns you've earned the right to design with aren't the patterns you're entitled to use everywhere</strong>. When the user changes, the design has to be willing to change with them, even when your existing patterns work. Especially then.</p>

              <p>That discipline, putting their user above your patterns, is what made the three surfaces feel like one product across three ecosystems instead of three different products wearing the same skin.</p>
            </section>

            {/* 5. PART 3 */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>04</span><span>Scalable Patterns</span></div>
              <h2 className={styles.secH}>Shipping Charge List: When Patterns Travel</h2>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The product</h4>
              <p>Shipping Charge List is where price values are assigned to <strong>shipping methods</strong>, the rules an order management system uses to decide what to charge for moving goods. Same pricing suite, same users as the Price List, smaller scope.</p>

              <p>There were three ways shipping methods could be priced:</p>
              <ol>
                <li><strong>Price by Shipping Method</strong> (global value, acts as catch-all)</li>
                <li><strong>Price by UOM</strong> (Shipping Method × UOM of the item ordered)</li>
                <li><strong>Price by Item</strong> (Shipping Method × Item × Item UOM)</li>
              </ol>

              <p>The catch-all behavior deserves a callout, and the credit for it goes to the PM. When an order references a shipping method that has no specific price configured against the item or UOM, the global Shipping Method price kicks in and the order fulfills. The order management system gets notified that the catch-all was used, so it can charge correctly downstream. <strong>The user's supply chain doesn't break while pricing is being refined.</strong> It's a small piece of system design that protects the fulfillment path, and it changed how we thought about the surface.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The PM ask, and the disagreement</h4>
              <p>PMs wanted a single table covering all three pricing methods, same reasoning as the Items section of the Price List case study: fewer surfaces, less engineering effort. We pushed back with the same argument.</p>

              <p>The three methods aren't variations of the same thing. <strong>Their setup paths differ, their pricing logic differs, and the attributes that matter on each row differ.</strong> Adding a Price-by-Shipping-Method row needs different fields than adding a Price-by-Item row. A single table would either have to flatten all three or carry empty cells across most rows, exactly the legacy-item-table problem we'd already solved once.</p>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p>We argued for <strong>three tabs</strong>, one per pricing method, each with its own optimized add flow and table structure.</p>
                  <p>This time, the argument didn't take quarters to win. We'd already built the precedent.</p>
                </div>
                <div className={`${styles.placeholder} ${styles.placeholderDiagram}`}>
                  <div className={styles.label}>diagram: single-table version (flat, sparse, columns for all three methods crammed in) vs. three-tab version (each tab tuned to its method)</div>
                </div>
              </div>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>What got reused, and what was new</h4>
              <p>Shipping Charge List shipped fast because <strong>most of the patterns it needed already existed</strong>. From the Price List redesign, we brought in:</p>
              <ul>
                <li><strong>Atom-as-row</strong> flat list structure with values inline</li>
                <li><strong>Tabs for fundamentally different types</strong> (the item-types argument applied directly)</li>
                <li><strong>Mass actions and rule-based pricing</strong> for bulk updates</li>
                <li><strong>The grid escape hatch</strong> for Excel-style edits</li>
                <li><strong>Search, filter, and multi-select</strong> scaled to the volume</li>
              </ul>

              <p>What was <em>new</em> was the <strong>add flow per tab</strong>. Adding a Price-by-Shipping-Method row is different work from adding a Price-by-Item row, different fields, different validations, different reference data. Each tab got its own purpose-built add flow rather than a single generic one.</p>

              <figure className={styles.figureFull}>
                <div className={`${styles.placeholder} ${styles.placeholderUI}`}>
                  <div className={styles.label}>UI: three tabs side by side, each showing its tuned add flow</div>
                </div>
              </figure>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>Shipped solo, in three weeks</h4>
              <p>I ran this product end to end, scoping, design, stakeholder alignment, dev handoff. Initiation to final shipped design in three weeks.</p>

              <p>That speed wasn't because the work was small. It was because <strong>the work compounded</strong>. Every pattern Shipping Charge List used had been argued through, validated, and shipped on another product in the suite. The atom-as-row, the tab structure, the mass action surface, the grid, the search-filter-multi-select scaling, none of these had to be designed from scratch or re-defended in meetings. They arrived as defaults.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The lesson</h4>
              <p>The case study's earlier sections were about earning the right to design. This one is about what happens <em>after</em> you've earned it, in places you didn't expect.</p>

              <p><strong>A well-developed pattern is itself a design contribution.</strong> The Price List redesign's value wasn't just the Price List, it was that the next product in the suite shipped in three weeks because the arguments had already been made and the patterns were already proven. The new add flows per tab are the only thing that needed original design work. Everything else was reuse, and reuse at this scale isn't a shortcut, it's the payoff for doing the foundational work right the first time.</p>
            </section>

            {/* 6. PART 4 */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>05</span><span>Data Model</span></div>
              <h2 className={styles.secH}>Formula Management: When the Data Model Is a Design Decision</h2>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>What formulas are</h4>
              <p>Formulas are pricing logic. Things like <em>"average of cost for USA and India, plus 12%"</em>, or more complex multi-input rules that derive a price from cost, region, margin, and customer attributes. Customers often have a small set of formulas they apply repeatedly across price lists, the same logic shaping prices for different products, regions, and contracts.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The legacy model, and why we questioned it</h4>
              <p>When formula-based pricing was first being scoped for the new Price List, the inherited model treated formulas as <strong>local to a price list</strong>. A formula authored in one PL stayed in that PL. If a customer used the same formula across ten price lists, they recreated it ten times.</p>

              <p>We pushed back during scoping. <strong>Formulas describe customer logic, not price list logic.</strong> A customer's pricing rules are about <em>their</em> business, not about which list they happen to live in. Modeling them inside a PL conflated two concepts that should be separate, and it produced predictable downstream pain:</p>

              <ul>
                <li><strong>Data duplication as a maintenance problem.</strong> Ten copies of the same formula means ten places to update when the underlying logic changes, with ten opportunities for drift.</li>
                <li><strong>Reusability as a usability signal.</strong> Users were doing the same work repeatedly. That's almost always evidence the data model is wrong.</li>
              </ul>

              <p>The argument landed conceptually. The team agreed. <strong>But there was no dev bandwidth to build formulas as a separate entity that cycle, so the legacy model shipped, with our suggestion noted for later.</strong></p>

              <p>This is the part of the story I want to be honest about. The first round wasn't a fight we lost. It was a fight we won on merits and didn't get to act on. <strong>Being right early isn't the same as shipping early.</strong></p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The opening, a cycle later</h4>
              <p>The team came back when bandwidth opened up. The suggestion was still on file. The next cycle, formulas got their own home.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The design</h4>
              <p>Three pieces, each addressing a specific failure of the legacy model.</p>

              <p><strong>1. A top-level entity.</strong> Formula Management became a separate surface in the pricing suite, alongside Price List, Cost List, and Shipping Charge List. Formulas now lived <em>with their owner</em> (the customer's pricing logic) rather than nested inside a downstream consumer (a price list).</p>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p><strong>2. A "where used" view.</strong> The main Formula Management list shows each formula alongside the pricing entities it's referenced by. Clicking <strong>Where Used</strong> opens a drawer with a table, one row per Price List × Item combination using that formula. Users can see exactly where a formula is in play before they touch it.</p>
                </div>
                <div className={`${styles.placeholder} ${styles.placeholderDiagram}`}>
                  <div className={styles.label}>diagram: legacy IA (formulas nested inside each PL) vs. new IA (Formula Management as a sibling entity)</div>
                </div>
              </div>

              <figure className={styles.figureFull}>
                <div className={`${styles.placeholder} ${styles.placeholderUI}`}>
                  <div className={styles.label}>UI: Formula Management main list with usage counts, Where Used drawer expanded</div>
                </div>
              </figure>

              <p><strong>3. Selective push to update prices.</strong> When a user edits a formula, they can push the change out to consuming entities. The push isn't all-or-nothing. <strong>Users select which Price Lists to update, and within each PL, which items to push to.</strong> The system previews the resulting price changes before commit.</p>

              <p>This was the most important capability to get right. A formula change can ripple across thousands of priced atoms, and an uncontrolled cascade is exactly the kind of operation pricing admins are right to fear. Granular selection makes the cascade safe to use, which makes it actually usable.</p>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p><strong>The lesson</strong></p>
                  <p>The conventional framing is that data modeling is engineering territory, and designers come in after the entities are defined. <strong>Formula Management is the clearest case I worked on where that framing was wrong.</strong></p>
                </div>
                <div className={`${styles.placeholder} ${styles.placeholderDiagram}`}>
                  <div className={styles.label}>flow diagram: Edit formula → Select target PLs → Select target items → Preview → Commit</div>
                </div>
              </div>

              <p>Where formulas <em>lived</em> in the system was the design decision. Inside a price list, they were duplicated work and silent maintenance debt. As their own entity, they became reusable, visible, and controllable. The UI changes followed from the architecture change, not the other way around. <strong>The data model was the design.</strong></p>

              <p>Bringing that argument forward early, accepting the deferral when bandwidth wouldn't support it, and being ready to act when the cycle came back around is what made the new design possible at all.</p>
            </section>

            {/* 7. CONCLUSION */}
            <section className={`${styles.panel} ${styles.conclusion}`} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>06</span><span>The End</span></div>
              <h2 className={styles.secH}>Conclusion</h2>
              <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: '22px' }}>Three products, three different working contexts. Rate Plans was the biggest fight, won by making the argument visually and then carried across three ecosystems with teams I didn't own. Shipping Charge List was the fastest, three weeks from initiation to shipped design, because the patterns it needed had already been proven somewhere else. Formula Management was the most patient, an argument made early, held in place through a cycle where the system couldn't act on it, and shipped when bandwidth came back around. <strong>Across a product suite, the design decisions that matter most are often the ones that aren't yours to make.</strong> Permission to redesign, which patterns get adopted, where an entity lives in the data model, none of these are unilateral. The work is in shaping them, and <strong>the alignment, the persuasion, and the patience aren't preliminaries to the design. They are the design.</strong></p>

              <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: '22px' }}>The thread that connects the three is compounding. The Price List redesign earned a set of patterns. Rate Plans earned the credibility to argue across teams. Shipping Charge List inherited both, and shipped fast because of it. Formula Management was waiting on the system to catch up to an argument that had already been made. <strong>Each project makes the next one easier and the next argument shorter.</strong> That's the part of designing across a suite I want to carry into the next one.</p>
            </section>
          </>
        )}

        {readMode === 'short' && (
          <>
            {/* 1. QUICK SUMMARY */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>01</span><span>Quick Summary</span></div>
              <h2 className={styles.secH}>Problem, Solution and the Impact that followed.</h2>

              <div className={styles.triad}>
                <div className={styles.triadRow} style={{ backgroundColor: '#fff', borderWidth: 0, padding: '28px 28px 0px 0px', borderRadius: 0 }}>
                  <div className={styles.triadTag}>
                    <span className={styles.triadMark}>01</span>
                    <h4>Problem</h4>
                  </div>
                  <div className={styles.triadBody}>
                    <p>Across the Oracle pricing suite, individual products had inherited inconsistent design quality, with shared users moving between them daily. <strong>The problem wasn't one broken product. It was suite-wide coherence.</strong></p>
                  </div>
                </div>

                <div className={styles.triadRow} style={{ backgroundColor: '#fff', borderWidth: '1px 0px 0px', padding: '28px 0px 0px', borderRadius: 0 }}>
                  <div className={styles.triadTag}>
                    <span className={styles.triadMark}>02</span>
                    <h4>Solution</h4>
                  </div>
                  <div className={styles.triadBody}>
                    <p>Three projects, three modes of design work:</p>
                    <ul className={styles.impactList} style={{ padding: 0, marginTop: '16px' }}>
                      <li><span><strong>Rate Plans</strong> — earned the redesign by making the argument visually, then designed three surfaces (authoring + two negotiation fragments) across four product teams.</span></li>
                      <li><span><strong>Shipping Charge List</strong> — shipped solo in 3 weeks by reusing patterns established across the suite.</span></li>
                      <li><span><strong>Formula Management</strong> — argued early for formulas as a global entity, accepted the deferral, and shipped the right model the cycle after.</span></li>
                    </ul>
                  </div>
                </div>

                <div className={styles.triadRow} style={{ backgroundColor: '#fff', padding: '28px 0px 0px', borderWidth: '1px 0px 0px', borderRadius: 0 }}>
                  <div className={styles.triadTag}>
                    <span className={styles.triadMark}>03</span>
                    <h4>Impact</h4>
                  </div>
                  <div className={styles.triadBody}>
                    <ul className={styles.impactList} style={{ padding: 0 }}>
                      <li><span>Three products shipped across the pricing suite, each at a different scale of design work</span></li>
                      <li><span>Rate Plans delivered as three coordinated surfaces across three product ecosystems</span></li>
                      <li><span>Shipping Charge List shipped end to end in 3 weeks via established pattern reuse</span></li>
                      <li><span>Formula Management restructured the data model from PL-local to suite-global</span></li>
                      <li><span>Patterns originating in the Price List redesign were reused across all three products</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. PART 1 */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>02</span><span>Quick Fix?</span></div>
              <h2 className={styles.secH}>Rate Plans, Part 1: Earning the Redesign</h2>

              <p>Rate Plans was the first pricing product on Redwood, redesigned before I joined. It used a DS template with <strong>four vertical panels, one per charge type</strong>, each showing a summary. Looked striking. Wasn't usable.</p>

              <p><strong>Summary-only meant tunneling for every action.</strong> Every admin task required drilling into a separate page. The main screen was a viewing surface, not a working one. The layout was also fixed (empty panels for plans using fewer charge types, cramped panels for plans using all four), and the underlying template was generic, conscripted into rate plans because it was available at migration time.</p>

              <div className={`${styles.placeholder} ${styles.placeholderUI}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>legacy screenshot: four-panel layout with summary cards, annotated drilldown path for a single edit</div>
              </div>

              <p>For four quarters, my team had been embedding old Rate Plans inside the new Price List. We knew it wasn't working. <strong>It wasn't our product to redesign.</strong></p>

              <p>In the fifth quarter, the Rate Plans team asked us to add <strong>entitlements</strong> to the existing four-panel design, a complex feature with two sub-parts and multiple setup paths. Two more features were planned for the cycle after.</p>

              <p>We didn't think it would fit. <strong>So we built the argument visually.</strong> Multiple mockup iterations of entitlements crammed into the existing UI, side by side with a proposed redesign, with pros and cons explicit on the canvas. <strong>It's hard to argue that a design will be fine when you're looking at a mockup showing it not being fine.</strong></p>

              <div className={`${styles.placeholder} ${styles.placeholderDiagram}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>mockup pair: "add entitlements to existing 4-panel design" vs. "redesigned surface absorbing entitlements natively"</div>
              </div>

              <p>The stakeholders agreed to scope a full Rate Plans redesign. What we didn't grasp in that meeting: Rate Plans doesn't live in one ecosystem. It's authored in Pricing, pulled by Order Management for negotiation, and now needed Subscription Management's entitlements fragment. <strong>Three teams, three ecosystems, three sets of opinions</strong> about what the surface should be.</p>
            </section>

            {/* 3. PART 2 */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>03</span><span>Collaboration</span></div>
              <h2 className={styles.secH}>Rate Plans, Part 2: Designing Across Ecosystems</h2>

              <p>The redesign was three surfaces: a Rate Plans authoring surface for Pricing, a negotiation fragment for CPQ, and a negotiation fragment for Order Management.</p>

              <h3 className={styles.subH}>Fight 1: Where do entitlements belong?</h3>
              <p>Subscription Management wanted entitlements to sit outside Rate Plans, on the main price list page, with a link back. Their argument was visibility and engineering effort. For our users, it broke the mental model: <strong>entitlements derive their meaning from the rate plan they belong to.</strong> Separating them in the UI forced users into a 5-step hide-and-seek with their own work.</p>

              <div className={`${styles.placeholder} ${styles.placeholderDiagram}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>diagram: "entitlements outside" 5-step flow vs. "entitlements inside" single continuous authoring path</div>
              </div>

              <p>We made the case with mockups and walked the combined teams through both flows. Entitlements moved inside Rate Plans.</p>

              <hr className={styles.rule} />

              <h3 className={styles.subH}>Fight 2: Whose patterns serve whose users</h3>
              <p>The assumption was that the negotiation fragments would be straightforward lifts of the authoring surface. They weren't.</p>

              <p><strong>CPQ users negotiate granularly.</strong> A sales rep makes targeted edits, a single tier, a single charge. <strong>OM users negotiate holistically.</strong> An order manager works with the rate plan as a whole, end-to-end review before commit. Same data, two completely different working modes.</p>

              <p><strong>Our authoring patterns weren't wrong for our users, but they weren't right for these users.</strong> We deliberately broke them, sat with CPQ and OM designers, and designed two fragments that prioritized those flows over consistency with the authoring surface.</p>

              <div className={`${styles.placeholder} ${styles.placeholderDiagram}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>diagram: rate plan authoring surface alongside CPQ fragment (granular-edit-first) and OM fragment (whole-plan-review-first)</div>
              </div>

              <hr className={styles.rule} />

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>What made it intense</h4>
              <p>Subscription Management was building the entitlements component on a clock, and design decisions fed directly into their sprint. Delays compounded across two engineering pipelines.</p>

              <p>I was the youngest designer in most of these meetings. <strong>What I learned, in real time, was to hold ground on the specific question being decided without escalating past it.</strong> Stay on the user. Bring the disagreement back with a refined version of the argument rather than trying to win it in the room.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The shipped outcome</h4>
              <p>Three deliveries: the Rate Plans authoring surface (entitlements integrated inside), the CPQ negotiation fragment (granular-edit-first), the OM negotiation fragment (whole-plan-review-first).</p>

              <div className={`${styles.placeholder} ${styles.placeholderUI}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>shipped UI: three surfaces side by side, labeled with host product and user mode</div>
              </div>

              <p><strong>The patterns you've earned the right to design with aren't the patterns you're entitled to use everywhere.</strong> When the user changes, the design has to be willing to change with them.</p>
            </section>

            {/* 4. PART 3 */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>04</span><span>Scalable Patterns</span></div>
              <h2 className={styles.secH}>Shipping Charge List: When Patterns Travel</h2>

              <p>Shipping Charge List is where price values are assigned to <strong>shipping methods</strong>. Same pricing suite, same users as the Price List, smaller scope.</p>

              <p>Three ways shipping methods could be priced: Price by Shipping Method (global catch-all), Price by UOM (Shipping Method × UOM), Price by Item (Shipping Method × Item × Item UOM). The catch-all design came from the PM, when an order has no specific price configured, the global Shipping Method price kicks in and the order fulfills, with OM notified to charge correctly downstream. <strong>The user's supply chain doesn't break while pricing is being refined.</strong></p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The PM ask, and the disagreement</h4>
              <p>PMs wanted a single table for all three pricing methods, same engineering-simplicity argument as the Price List Items section. We pushed back with the same argument: <strong>setup paths differ, pricing logic differs, attributes differ.</strong> We argued for three tabs, each with its own optimized add flow.</p>

              <div className={`${styles.placeholder} ${styles.placeholderDiagram}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>diagram: single-table vs. three-tab version</div>
              </div>

              <p>This time the argument didn't take quarters to win. The precedent was already built.</p>

              <h4 className={styles.minorH} style={{ fontSize: '24px' }}>What got reused, what was new</h4>
              <p>From the Price List redesign: atom-as-row, tabs for fundamentally different types, mass actions and rule-based pricing, the grid escape hatch, search-filter-multi-select scaling. <strong>What was new was the add flow per tab</strong> (different fields, validations, and reference data for each pricing method).</p>

              <p><strong>Shipped solo in three weeks.</strong> Not because the work was small, but because <strong>the work compounded</strong>. Every pattern had been argued through, validated, and shipped somewhere else in the suite. They arrived as defaults.</p>

              <p><strong>A well-developed pattern is itself a design contribution.</strong> Reuse at this scale isn't a shortcut, it's the payoff for doing the foundational work right the first time.</p>
            </section>

            {/* 5. PART 4 */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>05</span><span>Data Model</span></div>
              <h2 className={styles.secH}>Formula Management: When the Data Model Is a Design Decision</h2>

              <p>Formulas are pricing logic, <em>"average of cost for USA and India, plus 12%"</em>, or more complex multi-input rules. Customers typically have a small set of formulas they apply repeatedly across price lists.</p>

              <p><strong>The legacy model treated formulas as local to a price list.</strong> Same formula in ten PLs meant ten copies, ten places to update, ten chances to drift. We pushed back during scoping: <strong>formulas describe customer logic, not price list logic.</strong> The team agreed conceptually. But there was no dev bandwidth, so the legacy model shipped with our suggestion noted.</p>

              <p><strong>Being right early isn't the same as shipping early.</strong></p>

              <p>The next cycle, bandwidth opened up. Three design pieces:</p>

              <p><strong>1. A top-level entity.</strong> Formula Management became a separate surface alongside Price List, Cost List, and Shipping Charge List.</p>

              <div className={`${styles.placeholder} ${styles.placeholderDiagram}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>diagram: legacy IA (formulas nested in each PL, duplicated) vs. new IA (Formula Management as sibling entity)</div>
              </div>

              <p><strong>2. A "where used" view.</strong> The main list shows each formula alongside the pricing entities referencing it. Clicking <strong>Where Used</strong> opens a drawer with one row per Price List × Item combination.</p>

              <div className={`${styles.placeholder} ${styles.placeholderUI}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>UI: Formula Management main list with usage counts, Where Used drawer expanded</div>
              </div>

              <p><strong>3. Selective push to update prices.</strong> When a user edits a formula, they push the change out, <strong>but they select which Price Lists, and within each PL, which items</strong>, with a preview of resulting price changes before commit. Granular selection makes the cascade safe to use.</p>

              <p>The conventional framing is that data modeling is engineering territory. <strong>Formula Management is the clearest case I worked on where that framing was wrong.</strong> Where formulas lived in the system was the design decision. The UI changes followed from the architecture change. <strong>The data model was the design.</strong></p>
            </section>

            {/* 6. CONCLUSION */}
            <section className={`${styles.panel} ${styles.conclusion}`} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>06</span><span>The End</span></div>
              <h2 className={styles.secH}>Conclusion</h2>

              <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: '22px' }}>Three products, three different working contexts. Rate Plans was the biggest fight, won visually and carried across three ecosystems. Shipping Charge List was the fastest, three weeks because the patterns were already proven. Formula Management was the most patient, an argument made early, held in place, shipped when the system could act on it. <strong>Across a product suite, the design decisions that matter most are often the ones that aren't yours to make.</strong> The alignment, the persuasion, and the patience aren't preliminaries to the design. <strong>They are the design.</strong></p>

              <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: '22px' }}>The thread is compounding. <strong>Each project makes the next one easier and the next argument shorter.</strong></p>
            </section>
          </>
        )}

        <div className={styles.pageend}>— end of case study —</div>
      </main>
    </div>
  );
}
