"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./case-study-1.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MinimalFooter from "../minimal/components/MinimalFooter";

gsap.registerPlugin(useGSAP);

export default function CaseStudy1() {
  const [mood, setMood] = useState("editorial");
  const [voice, setVoice] = useState("serif");
  const [panelFeel, setPanelFeel] = useState("flush");
  const [readMode, setReadMode] = useState<"short" | "story">("story");
  const pillRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const panels = document.querySelectorAll('[data-panel]');
    
    const updateOnScroll = () => {
      const vh = window.innerHeight;
      panels.forEach(p => {
        const r = p.getBoundingClientRect();
        // Band: top  < vh * 0.45 ; bottom > vh * 0.05
        if (r.top < vh * 0.45 && r.bottom > vh * 0.05) {
          p.classList.add(styles.lifted);
        } else {
          p.classList.remove(styles.lifted);
        }
      });

      // Other-project cards: activate shadow when card midpoint (= half the card) enters the viewport
      document.querySelectorAll<HTMLElement>('[data-other-card]').forEach(card => {
        const r = card.getBoundingClientRect();
        const midY = r.top + r.height / 2;
        if (midY > 0 && midY < vh) {
          card.style.boxShadow = '0 0 40px 0 rgba(0,0,0,0.10), 0 0 4px 0 rgba(0,0,0,0.04)';
          card.style.transform = 'translateY(-6px)';
        } else {
          card.style.boxShadow = '';
          card.style.transform = '';
        }
      });

      const nav = document.getElementById('topnav');
      if (nav) {
        if (window.scrollY > 8) nav.classList.add(styles.scrolled);
        else nav.classList.remove(styles.scrolled);
      }

      const resp = document.getElementById('resp-section');
      if (resp) {
        const rr = resp.getBoundingClientRect();
        const sectionMid = rr.top + rr.height / 2;
        const showState2 = sectionMid < vh * 0.5;
        resp.querySelectorAll('.resp-state').forEach(el => {
          const want = el.getAttribute('data-state') === (showState2 ? '2' : '1');
          el.setAttribute('data-active', want ? 'true' : 'false');
        });
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

  // GSAP: animate the sliding pill indicator when readMode changes
  useGSAP(() => {
    const pill = pillRef.current;
    const indicator = indicatorRef.current;
    if (!pill || !indicator) return;
    const buttons = pill.querySelectorAll('button');
    const activeBtn = readMode === 'short' ? buttons[0] : buttons[1];
    gsap.to(indicator, {
      x: (activeBtn as HTMLElement).offsetLeft - 4,
      width: (activeBtn as HTMLElement).offsetWidth,
      duration: 0.35,
      ease: 'power3.out',
    });
  }, { dependencies: [readMode], scope: pillRef });

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
          <div className={styles.crumb}>Case study · <b>Redesigning the Price List</b></div>
        </div>
      </nav>

      <main className={styles.mainContent}>

        {/* 1. HERO */}
        <section className={`${styles.panel} ${styles.hero}`} data-panel="true" style={{ position: 'relative' }}>
          {/* MODE TOGGLE */}
          <div className={styles.heroToggle} style={{ position: 'absolute', top: '40px', right: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
            <div
              ref={pillRef}
              style={{
                position: 'relative',
                display: 'flex',
                background: 'var(--rule)',
                borderRadius: '100px',
                padding: '4px',
              }}
            >
              {/* Sliding indicator */}
              <span
                ref={indicatorRef}
                style={{
                  position: 'absolute',
                  top: '4px',
                  left: '4px',
                  height: 'calc(100% - 8px)',
                  background: 'var(--ink)',
                  borderRadius: '100px',
                  pointerEvents: 'none',
                  zIndex: 0,
                  // initial width/x set by GSAP on mount
                }}
              />
              <button
                onClick={() => setReadMode('short')}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  background: 'transparent',
                  color: readMode === 'short' ? 'var(--paper)' : 'var(--ink-soft)',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
              >
                Short Read
              </button>
              <button
                onClick={() => setReadMode('story')}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  background: 'transparent',
                  color: readMode === 'story' ? 'var(--paper)' : 'var(--ink-soft)',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
              >
                Story Mode
              </button>
            </div>
            {/* Subtle AI Summary label */}
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '11px',
                color: 'var(--ink-soft)',
                letterSpacing: '0.04em',
                width: '50%',
                textAlign: 'center',
                opacity: 0.6,
              }}
            >
              AI Summary
            </span>
          </div>

          <div className={styles.eyebrow}>Case Study · 01</div>
          <h1>Redesigning the<br/><em style={{fontStyle: "italic", color: "var(--ink-soft)"}}>Price List.</em></h1>
          <p className={styles.lede}>Rebuilding a foundational entity in Oracle's pricing suite for the scale, logic, and recurrence of how pricing teams actually work.</p>
          <dl className={styles.meta}>
            <div><dt>Timeline</dt><dd>7 release quarters</dd></div>
            <div><dt>Team</dt><dd>2 : Manager + me</dd></div>
            <div><dt>Role</dt><dd>UX Designer</dd></div>
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
                <p>A foundational pricing entity, built to store hundreds of thousands to a million items per list, was designed as a UI-fied database. <strong>Hierarchy was traversed by scroll</strong>, every action repeated per item, and recurring work like cost passthroughs, renewals, regional rollouts reimposed the same cost on users every time. In B2B contexts, manual price list maintenance routinely runs into weeks or months at scale.</p>
              </div>
            </div>

            <div className={styles.triadRow} style={{ backgroundColor: '#fff', borderWidth: '1px 0px 0px', padding: '28px 0px 0px', borderRadius: 0 }}>
              <div className={styles.triadTag}>
                <span className={styles.triadMark}>02</span>
                <h4>Solution</h4>
              </div>
              <div className={styles.triadBody}>
                <p>Reframed the price list from <strong>a container of data into a surface for manipulating it</strong>. Made the smallest unit of work that's Item × UOM × Charge × Date Effectivity into the row. Replaced repetitive single item flows with rule based mass actions, an Excel grade grid escape hatch, and UOM derived pricing logic. Hierarchy moved off the critical path; the work users actually do became first class.</p>
              </div>
            </div>

            <div className={styles.triadRow} style={{ backgroundColor: '#fff', padding: '28px 0px 0px', borderWidth: '1px 0px 0px', borderRadius: 0 }}>
              <div className={styles.triadTag}>
                <span className={styles.triadMark}>03</span>
                <h4>Impact</h4>
              </div>
              <div className={styles.triadBody}>
                <ul className={styles.impactList} style={{ padding: 0 }}>
                  <li><span><strong>4-level scroll hierarchy → single first-layer surface</strong> for the 80% of work users do daily</span></li>
                  <li><span><strong>N-step per-item flow → one rule based action</strong> scaling across thousands of priced atoms</span></li>
                  <li><span><strong>Three pricing patterns surfaced and codified</strong> like mass action, grid editing, UOM derivation, thus replacing manual re-execution of logic users already kept in their heads</span></li>
                  <li><span><strong>Patterns adopted across other pricing apps</strong> in the suite, reducing design and ship time for downstream products</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CONTEXT */}
        <section className={styles.panel} data-panel="true">
          <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>02</span><span>Context</span></div>
          <h2 className={styles.secH}>Context For You</h2>

          <div className={styles.contextGrid}>
            <div className={styles.ctxItem}>
              <div className={styles.ctxNum}>1</div>
              <div>
                <div className={styles.ctxH}>Pricing and the Fusion Ecosystem</div>
                <p className={styles.ctxBody}>Oracle Fusion Pricing is part of a larger quote-to-cash chain the items are mastered in <strong>Product Identity Management (PIM)</strong>, prices are authored in Pricing, then consumed by <strong>CPQ, Order Management, and Subscription Management</strong> to fulfill quotes, orders, and recurring contracts. The Pricing suite itself spans price lists, cost lists, discount lists, and pricing strategies and the <strong>Price List is the entity that carries the actual prices the rest of the chain runs on</strong>.</p>
              </div>
            </div>

            <div className={styles.ctxItem}>
              <div className={styles.ctxNum}>2</div>
              <div>
                <div className={styles.ctxH}>What a Price List is</div>
                <p className={styles.ctxBody}>A Price List stores the values that a downstream order fulfillment system uses to price line items at the moment of sale. <strong>It's the single source of truth for "what does this cost"</strong> and downstream apps can't fulfill orders without it.</p>
              </div>
            </div>

            <div className={styles.ctxItem}>
              <div className={styles.ctxNum}>3</div>
              <div>
                <div className={styles.ctxH}>How complex a Price List actually is</div>
                <p className={styles.ctxBody}>A single line in a price list isn't a row of data it's a <strong>combination of Item × UOM × Charge × Date Effectivity</strong>, with the Item being one of four fundamentally different types (standard, subscription, coverage, model), each carrying its own charge logic, attributes, and pricing rules. On top of that sit volume and attribute based adjustments, customer specific flex fields configured per implementation, and date effective variants  so a price list with a million "items" actually represents several million distinct priced atoms.</p>
              </div>
            </div>

            <div className={styles.ctxItem}>
              <div className={styles.ctxNum}>4</div>
              <div>
                <div className={styles.ctxH}>Why redesign, not revamp</div>
                <p className={styles.ctxBody}>Lifting the existing UI onto the new design system would have refreshed the visuals while preserving the underlying interaction model that was these actual problem that the data hierarchy mirrored as scroll, the per item flow, the static storage mental model. The redesign <strong>brief wasn't about how the price list looked; it was about what a price list should be</strong> which is where the real work began.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. REDEFINING THE CORE */}
        <section className={styles.panel} data-panel="true">
          <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>03</span><span>DEFINING THE STRUCTURE</span></div>
          <h2 className={styles.secH}>Redefining the Core</h2>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The mental model we were really designing for</h4>
          <p>Pricing admins don't think in tables. They think in <strong>Excel folders that are nested by year, then country, then customer</strong>. The model is a tree of containers, and it exists because the data is too voluminous and too contextual to live any other way. That's the world a pricing admin walks in expecting.</p>

          <p>Legacy mirrored that instinct, but only halfway. It preserved the conceptual hierarchy : Price List → Item → Charge → Adjustment that's then <strong>collapsed every level onto a single linear screen</strong>. Open a price list, scroll past its details, search for items, click an item to reveal its charges, click a charge to reveal its adjustments. The hierarchy was real, but traversed by scroll. For a list with <strong>500K to a million rows, the screen stops being a screen and becomes a corridor</strong> and every task means tracking where you are, what you've touched, and how far you've fallen.</p>

          <figure className={styles.figureFull}>
            <div style={{ width: '100%', aspectRatio: '1290 / 796', borderRadius: '18px', overflow: 'hidden' }}>
              <img src="/assets/cs1/legacy-screenshot-final.png" alt="Legacy screenshot" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </figure>

          <p>The cost isn't theoretical. <strong>Manual B2B price list maintenance routinely runs into weeks or months at scale</strong>, while properly tooled workflows compress the same work into days. And this work recurs  cost pass-throughs during inflation, contract renewals, regional rollouts, customer specific configurations after every implementation. <strong>A UI that treats the entity as static storage taxes admins every single time.</strong></p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The obvious move and why we didn't stop there</h4>
          <p>The first reframe almost writes itself. If the data is hierarchical and admins think in folders, give them folders. Swap the corridor for a nested drilldown: each level its own page. Cognitive load drops because nothing above or below competes for attention.</p>

          <div className={styles.rowFlow}>
            <div className={styles.text}>
              <p>We built that model out, looked at it, and rejected it.</p>
            </div>
            <div style={{ width: '100%', aspectRatio: '919 / 481', borderRadius: '18px', overflow: 'hidden' }}>
              <img src="/assets/cs1/linear-stack.png" alt="Linear stack diagram" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>Then what?</h4>
          <p>A nested drilldown is a faithful translation of how the data is stored. <strong>It isn't a translation of what users are trying to do.</strong> A pricing admin doesn't open a price list to admire its hierarchy they open it to see and change values. So we asked the question legacy never had: <strong>what's the smallest unit of work that actually matters?</strong></p>

          <p>Not the price list. Not the item. Not even the charge. It's the specific combination of <strong>Item × UOM × Charge × Date Effectivity</strong> that carries a value. That combination is what gets reviewed before a renewal, bulk-edited during a cost pass through, and consumed by every downstream order fulfillment system. <strong>It's the atom of the domain and legacy had buried it three clicks deep.</strong></p>

          <p><strong style={{ fontSize: '24px' }}>So we made that Atom the row.</strong></p>

          <p>Open a price list now and you land directly in a <strong>flat, fully populated table where every row is a priced combination, value inline and actionable from the first layer</strong>. Search, filter, and multi select scale with the volume now operations that once required traversing a corridor per item now apply to thousands of rows at once. <strong>The hierarchy isn't gone; it's moved off the critical path.</strong> Charge attributes that don't fit the table, customer specific DFFs, and volume based adjustments live behind a focused drilldown, one click away for the work that genuinely needs them.</p>

          <p>The trade off is deliberate. Less-frequent operations cost an extra step. In exchange, <strong>the work admins actually spend their week on becomes a first class, single surface activity</strong>. We stopped designing a UI for the database and started designing one for the job.</p>
        </section>

        {/* 5. SETTING UP ITEMS */}
        <section className={styles.panel} data-panel="true">
          <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>04</span><span>ADDING ITEMS</span></div>
          <h2 className={styles.secH}>Setting Up Items: Decoupling "Add" from "Price"</h2>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The PIM upstream</h4>
          <p>Before any of this, items live somewhere else. Oracle's <strong>PIM (Product Identity Management)</strong> is part of the broader Fusion ecosystem it is where items are authored, governed, and maintained. The price list's job isn't to create items; it's to <strong>attach values to items that already exist</strong>. That distinction matters, because legacy didn't honor it.</p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>What legacy made users do</h4>
          <p>Legacy treated "add an item" and "price an item" as a single task and then forced users to <strong>repeat that task line by line</strong>. The flow: search for an item, pick one from a dropdown, pick a UOM from another dropdown, define the charge, assign a value, save, repeat. The master list of available items wasn't even visible until you started typing. Every item was a fresh round trip.</p>

          <div className={styles.rowFlow}>
            <div className={styles.text}>
              <p>For a price list of any meaningful size, the math is brutal. <strong>A flow that's tolerable for one item is unworkable for a thousand.</strong> Unifying the two actions felt efficient at the unit level and ignored the volume of the work entirely.</p>
            </div>
            <div style={{ width: '100%', aspectRatio: '1106 / 821', borderRadius: '18px', overflow: 'hidden' }}>
              <img src="/assets/cs1/flow-diagram.png" alt="Flow diagram" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The reframe: separate the questions</h4>
          <p>We took a breather and asked whether the unified flow actually scaled and decided it didn't. So we split it into two distinct questions, each with its own surface:</p>
          <ol>
            <li><strong>Which items belong in this price list?</strong> — This section.</li>
            <li><strong>What are they priced at?</strong> — Next section.</li>
          </ol>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>Designing the "add" surface</h4>
          <p>PIM already has the population so we surfaced it. Click <strong>Add Items</strong>, and the full PIM catalog appears as an <strong>Item × UOM</strong> list, browsable upfront, with <strong>search and filter across item attributes</strong> so users can pull in matching sets in one go instead of one at a time.</p>

          <figure className={styles.figureFull}>
            <div style={{ width: '100%', aspectRatio: '1920 / 1080', borderRadius: '18px', overflow: 'hidden' }}>
              <img src="/assets/cs1/new-design-screen.png" alt="New design screen" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </figure>

          <p>We also added a new construct: <strong>Item Catalogs</strong> that's a customer configurable grouping layer set up during pricing app implementation. It lets each customer carve PIM into the slices that match how their business reasons about products (region, brand, line of business, contract type, whatever fits), and add those groups directly into a price list as a unit.</p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The result</h4>
          <p>Adding items goes from <strong>N repetitions of a 5-step flow</strong> to <strong>one selection over a populated, filterable list</strong>. The act of pricing is removed from the act of inclusion and pricing now gets its own properly designed surface, which is the next section.</p>
        </section>

        {/* 6. PRICING ITEMS: THREE MOVES */}
        <section className={styles.panel} data-panel="true">
          <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>05</span><span>Pricing Items</span></div>
          <h2 className={styles.secH}>Pricing Items: Three Moves</h2>

          <p>Pricing isn't one problem. Once we looked at how analysts actually worked, it resolved into <strong>three distinct patterns</strong> each with its own logic, its own muscle memory, and its own scale. A single editing surface couldn't serve all three without compromising every one. So we built three.</p>

          <hr className={styles.rule} />

          <h3 className={styles.subH}>Move 1: Mass Pricing — codifying the rule, not the value</h3>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>What legacy made users do</h4>
          <p>Legacy gave each line a value field. Users looked at their local records (usually a master Excel) and typed the new price in, line by line, list by list. <strong>At a single price list of hundreds of thousands of items, across multiple price lists per customer, country, and time period, this isn't tedious. It's impossible.</strong></p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>How users actually price</h4>
          <p>We asked. The answer was the unlock. Analysts almost never invent prices per item per list. They maintain <strong>one source-of-truth list</strong> usually a base price list or a cost list in Excel and <strong>derive every other list from it by rule</strong>:</p>
          <ul>
            <li>"Take the base list, mark up 5% for next year."</li>
            <li>"Take the cost list, add a 30% margin for this customer."</li>
            <li>"Take the current US prices, convert and add 8% for the EU rollout."</li>
          </ul>
          <p>The logic was already there. Legacy just overlooked it, so users executed it manually every time.</p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The reframe</h4>
          <p>If users price by rule, <strong>let them price by rule</strong>. We added a Mass Pricing surface: select Item × Charge atoms from the main table, click <strong>Update Prices</strong>, and a drawer opens with a rule builder.</p>

          <figure className={styles.figureFull} style={{ marginTop: '56px', marginBottom: '56px' }}>
            <div style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: '18px', overflow: 'hidden' }}>
              <iframe 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1NlEmSIcdvEJYf9HIXu8Th%2FPortfolio%3Fnode-id%3D180-16112%26p%3Df%26viewport%3D51%252C-85%252C0.08%26t%3DpXKg3ZGZiHGiZeFM-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D180%253A16112%26page-id%3D73%253A3%26hide-ui%3D1" 
                allowFullScreen 
                style={{border: "none", width: "100%", height: "100%"}}>
              </iframe>
            </div>
          </figure>

          <p>The drawer scopes itself intelligently. The main list has thousands of items but only a handful of supported charges, so the drawer surfaces just the charges in the user's selection keeping the rule definition focused on what's actually being edited.</p>

          <div className={styles.rowFlow}>
            <div className={styles.text}>
              <p><strong>The result: the unit of work shifts from the price to the rule.</strong> A single rule action prices thousands of atoms. The logic users already kept in their heads is now codified, auditable, and reusable.</p>
            </div>
            <div style={{ width: '100%', aspectRatio: '1144 / 494', borderRadius: '18px', overflow: 'hidden' }}>
              <img src="/assets/cs1/rule-builder.png" alt="Rule builder structure diagram" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>Removing the housekeeping step</h4>
          <p>A second order problem surfaced once we built this: <strong>a single Item × UOM × Charge × Date Effectivity atom can't carry two prices at the same time</strong> the order management system downstream wouldn't know which to honor. So updating a price isn't really one action; it's two: end-date the old price, start the new one. Legacy forced users to do both, manually, in sequence.</p>

          <div className={styles.rowFlow}>
            <div className={styles.text}>
              <p>We collapsed the second action into the first. <strong>If a user adds a new price with a future start date, and an existing open ended price is still active, the existing price auto-end-dates the day before the new one begins.</strong></p>
              <p>The user never thinks about the housekeeping. The integrity of the data is preserved without making them earn it.</p>
            </div>
            <div style={{ width: '100%', aspectRatio: '696 / 515', borderRadius: '18px', overflow: 'hidden' }}>
              <img src="/assets/cs1/timeline-diagram.png" alt="Timeline diagram" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>

          <hr className={styles.rule} />

          <h3 className={styles.subH}>Move 2: The Grid Escape Hatch — designing for muscle memory</h3>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The constraint, reframed as a feature</h4>
          <p>Pricing analysts live in grids. Excel is their native environment they share, review, and reason about prices in tabbed grids, often passing spreadsheets around over email. That muscle memory is decades deep.</p>

          <p>Our price list is built on Oracle's table component, which is the right default for this surface: <strong>prices are sensitive transactional data, and tables enforce a deliberate edit flow where they click a cell, open an edit affordance, commit the change.</strong> That friction is protective. Grids, by contrast, allow accidental edits and paste-overs, which is exactly what you don't want as the default for data that flows directly into order fulfillment.</p>

          <p>But the same friction that protects against single cell mistakes makes bulk editing painful. <strong>Both modes are right; neither is right for everything.</strong></p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The reframe</h4>
          <p>Don't replace the table. Don't compromise it. <strong>Let users opt into a grid when they need one.</strong></p>

          <p>Users select atoms from the main table and promote them into a dedicated grid surface that's a deliberate mode switch, not a default. Inside the grid, they can paste columns directly from Excel, edit in place, and apply changes in bulk, in exactly the workflow they already practice outside the product.</p>

          <figure className={styles.figureFull}>
            <div style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: '18px', overflow: 'hidden' }}>
              <iframe 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1NlEmSIcdvEJYf9HIXu8Th%2FPortfolio%3Fnode-id%3D844-74282%26viewport%3D5642%252C-56%252C0.28%26t%3DIDVVfz8v1DomLRDY-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D844%253A74282%26show-proto-sidebar%3D0%26page-id%3D73%253A3%26hide-ui%3D1" 
                allowFullScreen 
                style={{border: "none", width: "100%", height: "100%"}}>
              </iframe>
            </div>
          </figure>

          <p>The result: <strong>the table protects the 99% case. The grid serves the 1% case where bulk editing is the actual job.</strong> Users don't break their existing patterns to use our product they bring those patterns in.</p>

          <hr className={styles.rule} />

          <h3 className={styles.subH}>Move 3: UOM-Derived Pricing — codifying logic users were re-running by hand</h3>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The pattern in the data</h4>
          <p>Every price list we looked at had the same item appearing in multiple UOMs as separate lines (Each, Pair, Dozen, Case) each with its own price. Legacy required users to enter every variant manually.</p>

          <p>When we asked analysts how they actually priced different UOMs, the answer was almost always the same shape: <strong>"It's price-per-unit times UOM, plus a markdown."</strong> A pair is 2× minus 2%. A dozen is 12× minus 12%. The conversion logic was consistent across an item group, often consistent across an entire customer's catalog.</p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>Why this matters more than it looks</h4>
          <p>The deeper issue isn't just data entry volume. <strong>The logic was already in the analysts' heads that legacy made them re-execute it manually for every item, every list, every time.</strong> That's not just slow; it's error-prone. Manual re-execution of a known rule is exactly where typos, missed multipliers, and inconsistencies enter the data. <strong>Codifying the rule once doesn't just save keystrokes; it produces consistency the manual flow couldn't guarantee.</strong></p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The reframe</h4>
          <p>Price the base unit. Define the UOM conversion rule once. Apply it across the item group.</p>

          <div className={styles.rowFlow}>
            <div className={styles.text}>
              <p>We paired this with the Mass Pricing rule builder from Move 1 — so a single action can now price a base unit across a group <em>and</em> derive every UOM variant in the same pass.</p>
            </div>
            <div style={{ width: '100%', aspectRatio: '927 / 380', borderRadius: '18px', overflow: 'hidden' }}>
              <img src="/assets/cs1/base-price-final.png" alt="UOM rule diagram" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>

          <p><strong>The result: data entry collapses, and so does the surface area for human error.</strong> What used to be hundreds of manual entries per item group becomes one base price plus one rule.</p>

          <hr className={styles.rule} />

          <h3 className={styles.subH}>Why three moves, not one</h3>
          <p>A single "edit prices" surface would have been simpler to design and worse at every job. Mass Pricing, the Grid, and UOM-Derived Pricing aren't variations of the same task <strong>they're responses to three different things users were already doing, in three different mental modes</strong>: rule based derivation, hands on bulk editing, and implicit logic that had never been codified. Designing for the mode, not the action, is what made each surface earn its place.</p>
        </section>

        {/* 7. ITEMS: HOLDING THE LINE, THEN FINDING THE DOOR */}
        <section className={styles.panel} data-panel="true">
          <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>06</span><span>Items</span></div>
          <h2 className={styles.secH}>Items: Holding the Line, Then Finding the Door</h2>

          <h4 className={styles.minorH}>Four item types, one table</h4>
          <p>Price lists support four fundamentally different item types: <strong>Standard</strong> items charged one-time or on a recurring basis; <strong>Subscription</strong> items priced via rate plans that combine one-time, recurring, and usage-based charges; <strong>Coverage</strong> items like warranties, sold in bundles and priced against an item, a category, or the whole catalog; and <strong>Models</strong>, which are configurations assembled from standard items.</p>

          <p>These aren't variations of the same thing. They differ in setup, in pricing logic, and in the attributes that matter. <strong>A subscription's rate plan has nothing in common with a warranty's coverage scope.</strong> Legacy treated them as one where every attribute for every type sat in a single table, and the table stopped being scannable.</p>

          <div className={styles.rowFlow}>
            <div className={styles.text}>
              <p>The legacy single-table view jammed every type's attributes into one row structure with most cells empty because most attributes don't apply to most rows.</p>
            </div>
            <div style={{ width: '100%', borderRadius: '18px', overflow: 'hidden' }}>
              <img src="/assets/cs1/legacy single-table view — one wide table with columns for rate plan, coverage scope, model config, and standard pricing all jammed into one row structure; most cells empty because most attributes don't apply to most rows.png" alt="Legacy single-table view" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The disagreement</h4>
          <p>Our design proposed separating the four into tabs with one surface per item type, each with the attributes that actually applied. PMs preferred a single table for engineering simplicity. They escalated, secured senior approval, and built a custom component to support type switching from inside the action collection which was a pattern that conflicted with the design system and, more fundamentally, <strong>conflated "switching what you're acting on" with "acting on what you've selected."</strong></p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>Holding the line without blocking delivery</h4>
          <p>We didn't win that round. The custom component shipped. <strong>What we did do: annotate the deviation in the design file in the loudest red we had, and leave our tabbed design intact as the documented intent.</strong> Delivery moved forward; the disagreement was on record. Both teams could ship and both positions were preserved.</p>

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The door that opened later</h4>
          <p>I'd been making a habit of reading our design system's quarterly release notes — partly out of curiosity, partly because unresolved itches don't go away just because a decision was made. Oracle is a large company with hundreds of products, and the DS team continuously evolves components based on needs surfacing across the org — none of which had anything to do with our project.</p>

          <p>Three quarters in, an enhancement landed: a <strong>context switcher</strong> pattern, purpose-built for switching the entity in scope without conflating it with actions on that entity. It wasn't tabs. It wasn't the custom component. <strong>It was the thing our problem had been asking for, built for someone else's reasons entirely.</strong></p>

          <div style={{ width: '100%', aspectRatio: '2149 / 573', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
            <img src="/assets/cs1/context-switcher-final.png" alt="Side-by-side comparison" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }} />
          </div>

          <p>I brought it to my manager, we mocked it up against the live surface, and we walked it back to the PM as a future enhancement. This time the conversation went differently there was now a sanctioned, system-native answer to the question we'd raised nine months earlier. It went into the roadmap.</p>

          <hr className={styles.rule} />

          <h4 className={styles.minorH} style={{ fontSize: '24px' }}>The lesson</h4>
          <p>Not every design fight is winnable in the moment, and not every loss is permanent. <strong>Documenting a principled disagreement is a different act from blocking delivery — and doing both, well, is part of the job.</strong> The "itch" of an unresolved design problem is information; staying alert to the ecosystem around your product — even the parts that have nothing to do with you — is how you eventually act on it. Three quarters of patience and a habit of reading release notes turned a loss into a roadmap item.</p>
        </section>

        {/* 8. CONCLUSION */}
        <section className={`${styles.panel} ${styles.conclusion}`} data-panel="true">
          <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>07</span><span>Conclusion</span></div>
          <h2 className={styles.secH}>Conclusion</h2>
          <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: '22px' }}>This was my first major product redesign, and the lessons came in two registers. The craft ones I can name now because the project taught them: <strong>question the data model before accepting it as the interaction model, design for the mode the user is in rather than the action they're taking, and treat constraints as design inputs rather than obstacles.</strong></p>

          <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: '22px' }}>The deeper one I learned by watching my manager was that <strong>a documented disagreement is more durable than a won argument</strong>, and that most of the design actually gets made in the tight loops between people, not at the edges of the process. I came in as a designer who could produce screens. I left as one who could hold a position, run a loop, and recognize the right answer when it showed up nine months late.</p>
        </section>

        {/* 9. RESPONSIBILITY */}
        <section className={`${styles.panel} ${styles.respCard}`} id="resp-section" data-panel="true">
          <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>08</span><span>WORKFLOW</span></div>
          <h2 className={styles.secH}>How I worked with the team</h2>

          <div className={`${styles.respIntroPos} ${styles.respStates}`}>
            <p className={`resp-state ${styles.respIntro} ${styles.respState}`} data-state="1" data-active="true">Here's how the work moved between PM, Manager, Dev, and me across the project.</p>
            <p className={`resp-state ${styles.respIntro} ${styles.respState}`} data-state="2" data-active="false">Here's how the work changed over successful cycles.</p>
          </div>

          <div className={styles.respStates}>
            {/* State 1 */}
            <div className={`resp-state ${styles.respState}`} data-state="1" data-active="true">
              <img className={styles.respDiagram} src="/assets/process-1.svg" alt="Process 1 — cross-functional ownership across the project" style={{ margin: '8px 0px 0px', border: 'none' }} />
            </div>

            {/* State 2 */}
            <div className={`resp-state ${styles.respState}`} data-state="2" data-active="false">
              <img className={styles.respDiagram} src="/assets/process-2.svg" alt="Process 2 — ownership over successive cycles" style={{ margin: '8px 0px 0px', border: 'none' }} />
            </div>
          </div>
        </section>

        {/* 11. HOW I */}
        <section className={styles.panel} data-panel="true">
          <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>09</span><span>EXTRAS</span></div>
          <h2 className={styles.secH}>Some Tasty Sides</h2>

          <div className={styles.howiGrid}>
            <div className={styles.howi} data-panel="true">
              <div className={styles.ph} style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
                <img src="/assets/cs1/image · component library.png" alt="Component library" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className={styles.tag}>Systems</div>
              <p><strong>A pricing-suite component library.</strong> Maintained an internal library of pricing-specific patterns so new apps could ship faster while staying familiar to existing users.</p>
            </div>
            <div className={styles.howi} data-panel="true">
              <div className={styles.ph} style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
                <img src="/assets/cs1/image · scaleable flows.png" alt="Scaleable flows" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className={styles.tag}>Patterns</div>
              <p><strong>Patterns that traveled.</strong> Mass actions, the data grid, and the tiered-pricing matrix were picked up by other pricing apps in the suite and adapted to their use cases.</p>
            </div>
            <div className={styles.howi} data-panel="true">
              <div className={styles.ph} style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
                <img src="/assets/cs1/image · pricing on a timeline.png" alt="Pricing on a timeline" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className={styles.tag}>Exploration</div>
              <p><strong>A timeline experiment.</strong> Prototyped a timeline view of pricing data instead of a grid. Didn't ship due to research bandwidth, but recognized at senior levels.</p>
            </div>
          </div>
        </section>
        </>)}

        {readMode === 'short' && (
          <>
            {/* QUICK SUMMARY */}
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
                    <p>A foundational pricing entity holding up to a million items per list was designed as a UI-fied database — hierarchy traversed by scroll, every action repeated per item, recurring work re-imposing the same cost every time.</p>
                  </div>
                </div>

                <div className={styles.triadRow} style={{ backgroundColor: '#fff', borderWidth: '1px 0px 0px', padding: '28px 0px 0px', borderRadius: 0 }}>
                  <div className={styles.triadTag}>
                    <span className={styles.triadMark}>02</span>
                    <h4>Solution</h4>
                  </div>
                  <div className={styles.triadBody}>
                    <p>Reframed the price list from a container of data into a surface for manipulating it. Made the smallest unit of work — <strong>Item × UOM × Charge × Date Effectivity</strong> — the row. Replaced repetitive flows with rule-based mass actions, a grid escape hatch, and UOM-derived pricing.</p>
                  </div>
                </div>

                <div className={styles.triadRow} style={{ backgroundColor: '#fff', padding: '28px 0px 0px', borderWidth: '1px 0px 0px', borderRadius: 0 }}>
                  <div className={styles.triadTag}>
                    <span className={styles.triadMark}>03</span>
                    <h4>Impact</h4>
                  </div>
                  <div className={styles.triadBody}>
                    <ul className={styles.impactList} style={{ padding: 0 }}>
                      <li><span>4-level scroll → single first-layer surface for daily work</span></li>
                      <li><span>N-step per-item flow → one rule-based action across thousands of atoms</span></li>
                      <li><span>Three pricing patterns codified, replacing manual re-execution</span></li>
                      <li><span>Patterns adopted by other pricing apps in the suite</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTEXT */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>02</span><span>Context</span></div>
              <h2 className={styles.secH}>Context</h2>
              
              <p><strong>Pricing and the Fusion Ecosystem.</strong> Oracle Fusion Pricing sits in the quote-to-cash chain — items mastered in PIM, prices authored here, consumed by CPQ, Order Management, and Subscription Management.</p>
              
              <p><strong>What a Price List is.</strong> The single source of truth for "what does this cost." Downstream apps don't fulfill orders without it.</p>
              
              <p><strong>How complex it is.</strong> A single line is an Item × UOM × Charge × Date Effectivity combination, with four item types (standard, subscription, coverage, model), each carrying its own attributes and pricing logic — plus adjustments, customer-specific flex fields, and date-effective variants on top.</p>
              
              <p><strong>Why redesign, not revamp.</strong> A UI lift would have refreshed the visuals while preserving the interaction model that was the actual problem. That's where we started.</p>
            </section>

            {/* REDEFINING THE CORE */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>03</span><span>Core</span></div>
              <h2 className={styles.secH}>Redefining the Core</h2>

              <p>Pricing admins don't think in tables — they think in Excel folders nested by year, country, and customer. Legacy preserved that hierarchy but collapsed it onto a single linear screen, so traversing a million-row list became scroll-as-navigation. <strong>A UI that treats the entity as static storage taxes admins every single time</strong> — and the work recurs constantly through cost pass-throughs, renewals, and rollouts.</p>

              <div style={{ width: '50%' }}>
                <div style={{ width: '100%', aspectRatio: '1290 / 796', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
                  <img src="/assets/cs1/legacy-screenshot-final.png" alt="Legacy screenshot" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <p>The obvious move was a nested drilldown — give them folders. We built that model out and rejected it. <strong>It was a faithful translation of how the data is <em>stored</em>, not what users are trying to <em>do</em>.</strong></p>

              <div style={{ width: '50%' }}>
                <div style={{ width: '100%', aspectRatio: '919 / 481', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
                  <img src="/assets/cs1/linear-stack.png" alt="Linear stack diagram" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <p>The smallest unit of meaningful work isn't the price list or the item — it's the <strong>Item × UOM × Charge × Date Effectivity</strong> tuple that carries a value. So we made that tuple the row. Opening a price list now lands users in a flat, fully populated table where every row is a priced combination, value inline and actionable from the first layer. Hierarchy moved off the critical path — charge attributes, DFFs, and adjustments live behind a focused drilldown one click away.</p>
            </section>

            {/* SETTING UP ITEMS */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>04</span><span>Add vs. Price</span></div>
              <h2 className={styles.secH}>Setting Up Items: Decoupling "Add" from "Price"</h2>

              <p>Items are mastered upstream in <strong>PIM</strong> — the price list's job is to attach values to items that already exist. Legacy ignored this distinction, forcing users through a 5-step flow (search → select item → select UOM → define charge → assign value) for every single item.</p>

              <div style={{ width: '50%' }}>
                <div style={{ width: '100%', aspectRatio: '1106 / 821', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
                  <img src="/assets/cs1/flow-diagram.png" alt="Flow diagram" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <p>We split the unified flow into two questions: <strong>Which items belong in this price list? — This section.</strong> <strong>What are they priced at? — Next section.</strong></p>

              <p>Click <strong>Add Items</strong>, and the full PIM catalog appears as a browsable Item × UOM list with attribute-level search and filter — users pull in matching sets in one go. We also added <strong>Item Catalogs</strong>: a customer-configurable grouping layer set up at implementation, letting each customer carve PIM into slices that match how their business reasons about products.</p>

              <div style={{ width: '100%', aspectRatio: '1920 / 1080', borderRadius: '18px', overflow: 'hidden' }}>
                <img src="/assets/cs1/new-design-screen.png" alt="New design screen" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
              </div>
            </section>

            {/* PRICING ITEMS */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>05</span><span>Pricing Items</span></div>
              <h2 className={styles.secH}>Pricing Items: Three Moves</h2>

              <p>Pricing resolved into three distinct patterns, each with its own logic and muscle memory. A single editing surface couldn't serve all three — so we built three.</p>

              <h3 className={styles.subH}>Move 1: Mass Pricing — codifying the rule, not the value</h3>
              <p>Analysts almost never invent prices per item. They maintain one source-of-truth list and <strong>derive every other list from it by rule</strong> — "take the base list, mark up 5% for next year." Legacy made them re-execute that logic manually, every time.</p>
              
              <p>We added a rule builder: select atoms, click <strong>Update Prices</strong>, define the operation (base entity → source list → reference date → markup/markdown by % or amount → effective dates).</p>

              <div style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
                <iframe 
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1NlEmSIcdvEJYf9HIXu8Th%2FPortfolio%3Fnode-id%3D180-16112%26p%3Df%26viewport%3D51%252C-85%252C0.08%26t%3DpXKg3ZGZiHGiZeFM-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D180%253A16112%26page-id%3D73%253A3%26hide-ui%3D1" 
                  allowFullScreen 
                  style={{border: "none", width: "100%", height: "100%"}}>
                </iframe>
              </div>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p><strong>The unit of work shifts from the price to the rule.</strong> One action prices thousands of atoms.</p>
                </div>
                <div style={{ width: '100%', aspectRatio: '1144 / 494', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
                  <img src="/assets/cs1/rule-builder.png" alt="Rule builder structure" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p><strong>Removing the housekeeping step.</strong> A single atom can't carry two prices at once — legacy made users manually end-date the old price before adding a new one. We collapsed that into the new-price action: if a future-dated price is added while an existing one is open-ended, the existing auto-ends the day before.</p>
                </div>
                <div style={{ width: '100%', aspectRatio: '696 / 515', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
                  <img src="/assets/cs1/timeline-diagram.png" alt="Timeline diagram" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>

              <hr className={styles.rule} />

              <h3 className={styles.subH}>Move 2: The Grid Escape Hatch</h3>
              <p>Analysts live in grids — Excel is their native environment. Our table component is the right default for sensitive transactional data (deliberate edit flow, no accidental paste-overs), but the same friction makes bulk editing painful. <strong>Both modes are right; neither is right for everything.</strong></p>

              <p>Users select atoms and promote them into a dedicated grid surface — a deliberate mode switch — where they can paste directly from Excel and edit in bulk.</p>

              <div style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
                <iframe 
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1NlEmSIcdvEJYf9HIXu8Th%2FPortfolio%3Fnode-id%3D844-74282%26viewport%3D5642%252C-56%252C0.28%26t%3DIDVVfz8v1DomLRDY-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D844%253A74282%26show-proto-sidebar%3D0%26page-id%3D73%253A3%26hide-ui%3D1" 
                  allowFullScreen 
                  style={{border: "none", width: "100%", height: "100%"}}>
                </iframe>
              </div>

              <p><strong>The table protects the 99% case. The grid serves the 1% where bulk editing is the actual job.</strong></p>

              <hr className={styles.rule} />

              <h3 className={styles.subH}>Move 3: UOM-Derived Pricing</h3>
              <p>Every price list had the same item in multiple UOMs (Each, Pair, Dozen) as separate priced lines. When we asked how analysts priced them, the answer was almost always a consistent rule — <strong>"pair = 2× minus 2%, dozen = 12× minus 12%."</strong> <strong>The logic was already in their heads; legacy made them re-execute it manually for every item.</strong> That's not just slow — it's where errors enter the data.</p>

              <div className={styles.rowFlow}>
                <div className={styles.text}>
                  <p>Price the base unit, define the UOM conversion rule once, apply it across the group — paired with the Mass Pricing rule builder.</p>
                </div>
                <div style={{ width: '100%', aspectRatio: '927 / 380', borderRadius: '18px', overflow: 'hidden' }}>
                  <img src="/assets/cs1/base-price-final.png" alt="UOM rule" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
              </div>
            </section>

            {/* ITEMS: HOLDING THE LINE */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>06</span><span>Items</span></div>
              <h2 className={styles.secH}>Items: Holding the Line, Then Finding the Door</h2>

              <p>Price lists support four fundamentally different item types — <strong>Standard, Subscription, Coverage, Model</strong> — each with its own attributes and pricing logic. Legacy crammed them all into one table; the table stopped being scannable.</p>

              <div className={`${styles.placeholder} ${styles.placeholderDiagram}`} style={{ marginBottom: '40px' }}>
                <div className={styles.label}>diagram: legacy single-table view — wide table with attributes from all four types jammed in, most cells empty</div>
              </div>

              <p>We proposed separating them into tabs. PMs preferred a single table for engineering simplicity, escalated, and built a custom component that conflated <strong>"switching what you're acting on"</strong> with <strong>"acting on what you've selected."</strong> We didn't win that round — but we annotated the deviation in the design file in the loudest red we had, and left our tabbed design intact as documented intent.</p>

              <p>Three quarters later, the design system shipped a <strong>context switcher</strong> pattern — built for other teams' reasons entirely — that solved exactly the problem we'd raised. <strong>It was the thing our problem had been asking for.</strong> We mocked it up, walked it back to the PM, and it went into the roadmap.</p>

              <div style={{ width: '100%', aspectRatio: '2149 / 573', borderRadius: '18px', overflow: 'hidden', marginBottom: '40px' }}>
                <img src="/assets/cs1/context-switcher-final.png" alt="Side-by-side comparison" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }} />
              </div>

              <p><strong>The lesson.</strong> Documenting a principled disagreement is a different act from blocking delivery — and doing both, well, is part of the job. Three quarters of patience and a habit of reading release notes turned a loss into a roadmap item.</p>
            </section>

            {/* CONCLUSION */}
            <section className={`${styles.panel} ${styles.conclusion}`} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>07</span><span>Conclusion</span></div>
              <h2 className={styles.secH}>Conclusion</h2>
              <p style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: '22px' }}>This was my first major product redesign. The craft lessons came in clearly — <strong>question the data model before accepting it as the interaction model, design for the mode the user is in, treat constraints as design inputs</strong>. The deeper one I learned by watching my manager: <strong>a documented disagreement is more durable than a won argument</strong>, and most of the design actually gets made in the tight loops between people. I came in as a designer who could produce screens. I left as one who could hold a position, run a loop, and recognize the right answer when it showed up nine months late.</p>
            </section>

            {/* PROCESS */}
            <section className={`${styles.panel} ${styles.respCard}`} id="resp-section" data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>08</span><span>WORKFLOW</span></div>
              <h2 className={styles.secH}>How I worked with the team</h2>

              <div className={`${styles.respIntroPos} ${styles.respStates}`}>
                <p className={`resp-state ${styles.respIntro} ${styles.respState}`} data-state="1" data-active="true">Here's how the work moved between PM, Manager, Dev, and me across the project.</p>
                <p className={`resp-state ${styles.respIntro} ${styles.respState}`} data-state="2" data-active="false">Here's how the work changed over successful cycles.</p>
              </div>

              <div className={styles.respStates}>
                {/* State 1 */}
                <div className={`resp-state ${styles.respState}`} data-state="1" data-active="true">
                  <img className={styles.respDiagram} src="/assets/process-1.svg" alt="Process 1 — cross-functional ownership across the project" style={{ margin: '8px 0px 0px', border: 'none' }} />
                </div>

                {/* State 2 */}
                <div className={`resp-state ${styles.respState}`} data-state="2" data-active="false">
                  <img className={styles.respDiagram} src="/assets/process-2.svg" alt="Process 2 — ownership over successive cycles" style={{ margin: '8px 0px 0px', border: 'none' }} />
                </div>
              </div>
            </section>

            {/* EXTRAS */}
            <section className={styles.panel} data-panel="true">
              <div className={styles.secLabel}><span className={styles.bar}></span><span className={styles.num}>09</span><span>EXTRAS</span></div>
              <h2 className={styles.secH}>Beyond the Core Redesign</h2>

              <div className={styles.howiGrid}>
                <div className={styles.howi} data-panel="true">
                  <div className={styles.ph} style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
                    <img src="/assets/cs1/image · component library.png" alt="Component library" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div className={styles.tag}>Systems</div>
                  <p><strong>A pricing-suite component library.</strong> Internal library of pricing-specific patterns so new apps could ship faster while staying familiar.</p>
                </div>
                <div className={styles.howi} data-panel="true">
                  <div className={styles.ph} style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
                    <img src="/assets/cs1/image · scaleable flows.png" alt="Scaleable flows" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div className={styles.tag}>Patterns</div>
                  <p><strong>Patterns that traveled.</strong> Mass actions, the data grid, and the tiered-pricing matrix were picked up by other pricing apps in the suite.</p>
                </div>
                <div className={styles.howi} data-panel="true">
                  <div className={styles.ph} style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
                    <img src="/assets/cs1/image · pricing on a timeline.png" alt="Pricing on a timeline" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div className={styles.tag}>Exploration</div>
                  <p><strong>A timeline experiment.</strong> Prototyped a timeline view of pricing data instead of a grid. Didn't ship due to research bandwidth, but recognized at senior levels.</p>
                </div>
              </div>
            </section>
          </>
        )}

        <div className={styles.pageend}>— end of case study —</div>
      </main>

      {/* OTHER PROJECTS */}
      <div className={styles.otherProjects}>
        <h2 className={styles.secH} style={{ marginBottom: '48px' }}>Other projects</h2>
        <div className={styles.otherProjectsGrid}>
          {/* Case Study 2 */}
          <Link href="/case-study-2" className={styles.otherProjectCard} data-other-card="true">
            <div className={styles.otherCardInfo}>
              <div className={styles.otherCardEyebrow}>Case Study · 02 · Oracle Fusion Pricing</div>
              <h3 className={styles.otherCardTitle}>Designing Across a Product Suite</h3>
            </div>
            <div className={styles.otherCardImage}>
              <img src="/Chosen works/Case Study 1.jpg" alt="Designing Across a Product Suite" />
            </div>
          </Link>

          {/* Case Study 3 — Figma external */}
          <a href="https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=401-82901&p=f&viewport=505%2C9%2C0.08&t=UkW17W2GLhvz7cjj-1&scaling=contain&content-scaling=fixed&starting-point-node-id=401%3A82901&page-id=401%3A2&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer" className={styles.otherProjectCard} data-other-card="true">
            <div className={styles.otherCardInfo}>
              <div className={styles.otherCardEyebrow}>Case Study · 03 · Oracle CX Unity</div>
              <h3 className={styles.otherCardTitle}>Customer Segment Dashboard</h3>
            </div>
            <div className={styles.otherCardImage}>
              <img src="/Chosen works/Case study 3.jpg" alt="Customer Segment Dashboard" />
            </div>
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max, 1120px)', margin: '0 auto', padding: '0 32px', width: '100%' }}>
        <MinimalFooter />
      </div>
    </div>
  );
}
