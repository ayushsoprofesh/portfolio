<h1 style="color: #A8FF72;">Case Study 2: Fast Execution and Cross-Team Design</h1>

<span style="color: #A8FF72;">**Role:**</span> UX designer 
<span style="color: #A8FF72;">**Product:**</span> Oracle Fusion Pricing (Rate Plans, Currency Conversion, Promotions, Shipping, Mass Actions)  
<span style="color: #A8FF72;">**Timeline:**</span> 2 Years (Iterative rapid releases)  
<span style="color: #A8FF72;">**Constraint:**</span> Strict delivery deadlines (1 to 3 weeks), cross-team dependencies (OM, CPQ, Subscriptions), and no direct access to end-users.

***

<h2 style="color: #A8FF72;">Phase 1: Auditing the Challenge</h2>

<span style="color: #A8FF72;">**The Challenge Statement:**</span><br>
The Pricing ecosystem must be expanded rapidly with **net-new applications** and **cross-functional integrations**, adhering to strict **short deadlines**. Design must defend the core **user mental model** against conflicting external team agendas, maintain consiten experience across pricing ecosystem while relying on **PM-provided proxy data** to validate complex workflows.

<span style="color: #A8FF72;">**Unpacking the Unknowns :</span></span>
*   **Cross-functional integrations:** Pricing data (Rate Plans) must sit inside external apps (Order Management, CPQ) without breaking the host app's UX.
*   **short deadlines:** Requires aggressive prioritization, component/flow reuse and eliminating bloated legacy steps.
*   **User mental model vs. Team agendas:** External teams want to force features into the Pricing UI where it benefits their architecture, not the user's logic.
*   **PM-provided proxy data:** Must extract UX opportunities by reading between the lines of PM data rather than speaking to users directly.

***

<h2 style="color: #A8FF72;">Phase 2: The Data-to-Design Framework</h2>
*Mapping proxy data and system constraints directly to design features to ensure every UI decision solves a specific business problem.*

| <span style="color: #A8FF72;">Metric / Information</span> | <span style="color: #A8FF72;">Business Problem</span> | <span style="color: #A8FF72;">User Need</span> | <span style="color: #A8FF72;">Opportunity / Feature</span> |
| :--- | :--- | :--- | :--- |
| **Pricing data is fetched by OM and CPQ systems.** | Forcing Pricing's specific UX patterns into other Oracle apps breaks the host app's interface. | A seamless, contextual transactional experience regardless of where the data originates. | **Negotiation Fragments:** Context-aware UI fragments that adapt their layout to match the external host application. |
| **3-week deadline to deliver the full Currency Conversion List (CCL).** | Legacy step-by-step currency addition is too slow to design, build, and use. | High-speed, bulk setup of conversion rates. | **1-to-Many Mapping:** Selecting one base currency and linking multiple target currencies, plus 1-click General Ledger sourcing. |
| **PMs report users repeating identical mass actions across periods.** | Users waste time rebuilding complex update parameters for different Price Lists. | A reusable, scalable logic framework for mass operations. | **Mass Action Templates:** A pitched and designed management flow to save, update, and deploy mass action rules globally. |

***

<h2 style="color: #A8FF72;">Phase 3: Strategic Execution</h2>

<h3 style="color: #A8FF72;">Case 1: Defending the User Mental Model (Rate Plans)</h3>
<span style="color: #A8FF72;">**The Problem:**</span> The external Subscriptions team wanted to introduce "Entitlements" directly onto the main Price List screen. This fit their technical backend, but violated the pricing user's mental model, where entitlements logically belong inside the actual Rate Plan.

<span style="color: #A8FF72;">**The Strategy:**</span> 
Pushed back against cross-functional engineering and PM teams to defend the user experience. Navigated organizational friction to force the Entitlements setup *inside* the Rate Plan creation flow. Furthermore, actively guided the Subscriptions team to align their UI fragments with the established Pricing Design Standards to prevent jarring visual shifts for the end-user.

<div style="background-color: #FFFFFF; width: 100%; height: 300px; display: flex; align-items: center; justify-content: center; border: 1px solid #E0E0E0; border-radius: 8px; margin: 24px 0;">
  <p style="color: #888888; font-family: monospace;">[Flow Diagram: External Team Proposed Architecture vs. User-Centric Rate Plan Architecture]</p>
</div>

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Rate Plan Creation Flow - Integrating the Subscriptions Entitlement UI inside the specific Rate Plan shell]</p>
</div>

<h3 style="color: #A8FF72;">Case 2: Breaking Internal UX Rules for External Context</h3>
<span style="color: #A8FF72;">**The Problem:**</span> Rate Plans are not just used in Pricing; they are fetched as "fragments" during live transactions in Order Management (OM) and Configure, Price, Quote (CPQ) apps. Sticking rigidly to the Pricing UI patterns would break the seamless experience inside those apps.

<span style="color: #A8FF72;">**The Strategy:**</span> 
Intentionally broke established Pricing UI patterns to serve contextual needs. Collaborated with external PMs and designers to adapt the "Negotiation" fragments to flawlessly mirror the distinct UX practices of OM and CPQ, ensuring the user never felt like they were jumping between disparate enterprise software systems.

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Negotiation Fragments - Side-by-side comparison of the Rate Plan UI adapted for Order Management vs. CPQ]</p>
</div>

<h3 style="color: #A8FF72;">Case 3: High-Velocity App Delivery (Currency Conversion List)</h3>
<span style="color: #A8FF72;">**The Problem:**</span> Required to deliver a complete, end-to-end Currency Conversion List (CCL) application within a strict 3-week sprint. The legacy system relied on a highly manual, step-by-step setup (Base > Target > Rate) that was inefficient.

<span style="color: #A8FF72;">**The Strategy:**</span> 
Bypassed the legacy logic entirely. Designed a high-speed creation pattern allowing users to select a single base currency and instantly map it to multiple targets in one click. Additionally, integrated a 1-click feature to source conversion rates directly from the General Ledger, turning a tedious multi-step process into a rapid, one-shot operation.

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Currency Conversion List - 1-to-many mapping flow and General Ledger integration]</p>
</div>

<h3 style="color: #A8FF72;">Case 4: Rapid Feature Injection & Modular Redesign</h3>
<span style="color: #A8FF72;">**The Problem:**</span> Fast-tracked requirements mandated a complete redesign of the Promotions "Benefits" section within 1 week, alongside building a new Shipping Charge List application.

<span style="color: #A8FF72;">**The Strategy:**</span> 
Leveraged the centralized Pricing Component Library established in previous quarters. Quickly redesigned the Promotions benefits section by adapting existing tier/matrix components. For the Shipping Charge List, successfully "injected" the complex Mass Action and Grid Pricing patterns built for Price Lists, applying them seamlessly to UOMs and shipping methods without reinventing the wheel.

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Shipping Charge List - Showcasing the injection of the Mass Action/Grid components adapted for shipping metrics]</p>
</div>

<h3 style="color: #A8FF72;">Case 5: Proactive UX Pitching via Proxy Data (Mass Action Templates)</h3>
<span style="color: #A8FF72;">**The Problem:**</span> Operating with zero direct user contact, designers relied strictly on PMs for data. PM data revealed that users were continuously executing the exact same Mass Action price update operations across multiple different Price Lists every pricing period.

<span style="color: #A8FF72;">**The Strategy:**</span> 
Instead of just executing on assigned tickets, proactively pitched a solution to the business: **Templatized Mass Actions**. Designed a management flow where users could create, store, and manage structural templates for mass updates, which could then be instantly applied across any Price List. The pitch was successful and adopted as a core future enhancement.

<div style="background-color: #FFFFFF; width: 100%; height: 300px; display: flex; align-items: center; justify-content: center; border: 1px solid #E0E0E0; border-radius: 8px; margin: 24px 0;">
  <p style="color: #888888; font-family: monospace;">[Flow Diagram: The repetition of manual mass updates vs. The streamlined Templatized Mass Action flow]</p>
</div>

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Mass Action Templates - Management and creation flow for global price update structures]</p>
</div>