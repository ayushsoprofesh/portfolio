<h1 style="color: #A8FF72;">Case Study 1: Designing Oracle Fusion Pricing Products for Scale</h1>

<span style="color: #A8FF72;">**Role:**</span> Product Designer  
<span style="color: #A8FF72;">**Product:**</span> Oracle Fusion Pricing Ecosystem (Price Lists, Discount Lists, Currency Conversion List, Shipping Charge List, Currency Conversion List, Rate Plans and more)  
<span style="color: #A8FF72;">**Timeline:**</span> 20 months  
<span style="color: #A8FF72;">**Constraint:**</span> Zero direct user contact (legal restrictions); reliant on PM data, analytics and assumption-mapping.

***

<h2 style="color: #A8FF72;">Phase 1: Auditing the Challenge</h2>

<span style="color: #A8FF72;">**The Challenge Statement:**</span><br>
Oracle’s legacy ERP database interfaces are risking customer retention against modern competitors. The Pricing ecosystem must be migrated to the new **Redwood design system** while supporting **massive data volumes**, flattening **complex hierarchies**, and adding user-requested enhancements without **direct user research**.

<span style="color: #A8FF72;">**Unpacking the Unknowns (The Audit):**</span>
*   **Redwood design system:** Requires mapping granular enterprise components into complex, interconnected pricing workflows.
*   **Massive data volumes:** Customers maintain up to 1 million item lines per Price List (Central pricing application). Standard CRUD operations are slow and adds to the user's cognitive load.
*   **Complex hierarchies:** Legacy systems force horizontal scrolling through up to 4 levels of depth (List > Item > Benefit/Charge > Tier/Matrix).
*   **No direct user research:** Design decisions must be reverse-engineered from PM feedback, legacy system bottlenecks, and enterprise UX best practices.

***

<h2 style="color: #A8FF72;">Phase 2: The Data-to-Design Framework</h2>
*Mapping data and system constraints directly to design features to ensure every UI decision solves a specific business problem.*

| <span style="color: #A8FF72;">Metric / Information</span> | <span style="color: #A8FF72;">Business Problem</span> | <span style="color: #A8FF72;">User Need</span> | <span style="color: #A8FF72;">Opportunity / Feature</span> |
| :--- | :--- | :--- | :--- |
| **Average 600k–1M item lines per Price List.** | Legacy 1-by-1 item addition causes severe operational bottlenecks and customer churn risk. | An efficient, high speed method to manipulate thousands of price lines simultaneously. | ESS (background) jobs for mass actions combined with the **"The Escape Hatch":** An Excel-like grid UI for bulk pasting |
| **Pricing data is highly sensitive and interconnected.** | Pricing errors during transaction fulfillment cause critical business failures for customers. | A clear mental model that prevents accidental edits across deep, horizontal data structures. | **Drill-Down Architecture:** Converting horizontal scrolls into distinct, manageable drill-down levels and dedicated tabs. |
| **Customers duplicate rules across multiple lists.** | Formulas and Rate Plans locked inside specific Price Lists create massive technical debt and repetitive work. | Write-once, use-anywhere management for complex pricing rules and formulas. | **Global Centralization:** Dedicated shell environments for Formula Management and Rate Plan Templates. |

***

<h2 style="color: #A8FF72;">Phase 3: Strategic Execution</h2>

<h3 style="color: #A8FF72;">Story 1: Flattening the Information Architecture</h3>
<span style="color: #A8FF72;">**The Problem:**</span> The legacy UIs nested up to four levels of data (List > Item > Charge/Benefit > Tier/Matrix) on a single horizontally scrolling page. This caused severe cognitive overload and increased the risk of catastrophic pricing errors.

<span style="color: #A8FF72;">**The Strategy:**</span> 
To align with Redwood standards and human cognitive limits, the architecture was restructured into a drill-down navigation model. In Price Lists, four distinct item types (Standard, Model, Coverage, Subscription) required vastly different pricing setups. These were segregated into dedicated tabs to isolate workflows and manage task execution efficiently.

<div style="background-color: #FFFFFF; width: 100%; height: 300px; display: flex; align-items: center; justify-content: center; border: 1px solid #E0E0E0; border-radius: 8px; margin: 24px 0;">
  <p style="color: #888888; font-family: monospace;">[Flow Diagram: Legacy Horizontal Architecture vs. New Drill-Down Tabbed Architecture]</p>
</div>

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Discount List Workbench - Drill-down flow from List creation to Matrix Benefit application]</p>
</div>

<h3 style="color: #A8FF72;">Story 2: Designing for 1 Million Rows</h3>
<span style="color: #A8FF72;">**The Problem:**</span> Customers manage up to 1 million items per Price List. The legacy system required adding items and charges one by one, an impossible task at scale.

<span style="color: #A8FF72;">**The Strategy:**</span> 
A multi-step Mass Action framework was designed. Users select items in bulk, apply operations (e.g., markups/markdowns based on external database fetches), and execute. To protect system performance, limits were set triggering ESS (background) jobs that notify the user upon completion. 

To cater to enterprise users heavily reliant on spreadsheet workflows, an "Escape Hatch" was introduced. Users can pull a selection of items into a Grid UI and directly paste column values from Excel.

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Price List Mass Action Flow - Selecting items, applying bulk charges, and triggering the ESS background job notification]</p>
</div>

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: The "Escape Hatch" Grid UI - Pasting Excel data directly into the pricing grid]</p>
</div>

<h3 style="color: #A8FF72;">Story 3: Anticipating Scale Against PM Pushback</h3>
<span style="color: #A8FF72;">**The Problem:**</span> Initial PM requirements for the Price List migration mandated single-charge support per item, under the assumption that customers preferred maintaining multiple single-charge Price Lists. 

<span style="color: #A8FF72;">**The Strategy:**</span> 
Relying on enterprise UX patterns, it was evident that forcing users to manage multiple lists for a single item would exponentially increase error rates. Despite PM pushback, parallel explorations for a **Multi-Charge Price List** were designed. 

Three releases later, PMs returned with customer demands for multi-charge support. Because the architectural exploration was already completed, the feature was rapidly integrated, allowing customers to choose between single or multi-charge architectures during onboarding based on their specific scale.

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Multi-Charge Price List Flow - Adding and managing multiple charges, tiers, and matrices for a single item line]</p>
</div>

<h3 style="color: #A8FF72;">Story 4: Centralizing Assets for Global Scale</h3>
<span style="color: #A8FF72;">**The Problem:**</span> Pricing elements like Formulas and Rate Plans were built and stored within specific Price Lists. If a customer wanted to use the same formula across 50 regional lists, they had to build and maintain it 50 times.

<span style="color: #A8FF72;">**The Strategy:**</span> 
Pushed to extract these elements from isolated lists into centralized, global libraries. 
1.  **Formula Management:** Designed a central workbench to create, edit, and activate formulas, including a "Show Where Used" feature to push global updates instantly.
2.  **Rate Plan Templates:** Created global shell templates for subscription rate plans, allowing cross-list application and massive reductions in repetitive data entry.

<div style="background-color: #FFFFFF; width: 100%; height: 300px; display: flex; align-items: center; justify-content: center; border: 1px solid #E0E0E0; border-radius: 8px; margin: 24px 0;">
  <p style="color: #888888; font-family: monospace;">[Flow Diagram: Isolated List Architecture vs. Centralized Global Library Architecture]</p>
</div>

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Formula Management Workbench - Creation, global edit, and "Push to Where Used" flow]</p>
</div>

<h3 style="color: #A8FF72;">Story 5: Establishing the Pricing Component Library</h3>
<span style="color: #A8FF72;">**The Problem:**</span> Redwood provided standard granular components, but the Pricing ecosystem required highly complex, repeated patterns (mass-action tables, tiered-pricing drawers, grid interfaces) across 8 different applications.

<span style="color: #A8FF72;">**The Strategy:**</span> 
A centralized Figma Component Library specific to Oracle Pricing was established. By standardizing the macro-components (e.g., the Add Charge Drawer, Main Table Containers, Page Headers), development friction was reduced, and UI parity was guaranteed across Discount Lists, Price Lists, Shipping Charge Lists, and Cost Lists.

<div style="background-color: #1E1E1E; width: 100%; height: 450px; display: flex; align-items: center; justify-content: center; border: 2px dashed #A8FF72; border-radius: 8px; margin: 24px 0;">
  <p style="color: #A8FF72; font-family: monospace;">[Figma Embed: Pricing Component Library - Showcase of modular Mass Action Tables, Grid Interfaces, and Creation Drawers used across the ecosystem]</p>
</div>