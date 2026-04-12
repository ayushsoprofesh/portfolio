Here is the finalized content for Case Study 1.

I have kept the simple, punchy, hyphen-free text we perfected earlier, and I have updated all the visual placeholders to clearly indicate where you will embed your interactive Figma prototype links instead of static images.

Case Study 1: Designing the Oracle Pricing Engine for Scale

Role: UX Designer | Timeline: 6 Release Cycles (25B to 26C)

1. The Problem: Modernizing a Legacy ERP

Oracle Pricing is the main engine for all Fusion transaction apps. The old UI was called ADF. It was built by engineers just to move database queries around. It was actually made hard to use on purpose so customers would stick to Oracle ERP solutions. But leadership realized they needed a good user experience to keep existing customers and win new ones. My job was to move the experience to the Redwood Design System.

The data scale was huge. I worked in a two person design team with my manager. Before designing, I had to drop my chaotic college file habits and learn his strict file management and common component library system. This saved me because the pricing ecosystem was massive to keep track of.

The Complexity of Price Lists:

Massive Volume: An average Price List has anywhere from 600k to over 1 million items.

Deep Combinations: A single price line is not just a number. It is a combination of the Item, the Unit of Measure (UOM), the Charge, and the Date.

Cross App Dependencies: A price list does not live alone. It fetches base prices from Cost Lists and pulls math from Formula Management.

Multiple Item Types: Users had to manage Standard items, Subscription items, Coverages, and Models all in one place. I designed a tab layout to separate these item types and reduce the cognitive load on the user.

2. The Architecture Battle (Single vs Multi Charge)

Early on, the Product team told us that Price Lists should only handle a single charge.

The UX Pushback: We argued that having different price lists for every single charge would be too much for users to manage. Our users have complex setups. Some use location based pricing, while others use the exact same price list but change the item lines for different dates.

The Compromise: I built a Proof of Concept (POC) for a Multi Charge Price List to show it was more efficient. The PMs liked the UX but cited dev constraints. They went ahead with Single Charge for the next three cycles (25B, 25C, and 25D).

The Final Win: We did not give up. We brought it up again later, and the product team finally agreed. I designed a hybrid setup where customers decide during their initiation phase if they want to use Single Charge or Multi Charge. This kept parity for older customers while giving a better option for growth.

3. Taming the Data Weight (Mass Actions)

Pricing admins need to define and maintain prices so downstream apps can use them. Usually, they just want to select certain items, bump the prices up by a set percent for the next quarter, and move on. Doing this line by line in the old ADF system was tedious.

I designed a Mass Actions flow to make this a simple, one click process.

The Flow Steps: Users select their items, choose the charges they want to update, pick the operation, decide if they want to base the new price on a cost list, set the effective date, and hit submit.

System Performance: Manipulating 1 million rows in real time would lag the system. I worked with the devs to use Oracle ESS. Users submit their request, it becomes a background batch job, and the UI stays unlocked.

[EMBED FIGMA PROTOTYPE: Interactive flow for Mass Actions WITHIN a single Price List, showing the drawer UI and batch job status]

Down the line, users also needed a way to update prices across multiple different price lists at the same time. The easy route would have been to just copy and paste the first flow. But we stopped and looked at the bigger picture.

Scoping the Logic: We realized that letting users update multiple different charges across multiple different price lists would create way too many failure points. I asked the PMs specific questions about user habits and confirmed our theory. Users rarely do tasks that way. We scoped the design down so users only update a single charge across their SKUs during a cross list change.

The Impact: Because we focused on making this heavy process simple and reliable, Mass Actions became a standard feature. We took the pattern we created for Price Lists and rolled it out across all other high volume pricing applications like Discount Lists, Cost Lists, and Shipping Charge Lists.

[EMBED FIGMA PROTOTYPE: Interactive flow for Mass Actions ACROSS multiple Price Lists]

4. The Escape Hatch (Data Grid)

Even with mass actions, pricing admins are used to an Excel like grid. Sometimes they just want to make random updates to a bunch of different items.

The User Need: The old system had a basic CSV file import. But users wanted a way to just copy specific price columns from their local Excel files and paste them right into our system for a selection of items.

The UX Solution: Data grids can have mis entry issues and dev constraints. So instead of making the whole app a grid, I designed an escape hatch. Users select items and move them to an isolated grid view where they can paste their Excel data.

The Compute Logic: After they are done, the system decides the load. If it is too much, it becomes an ESS batch job. If it is small, it computes in real time. This flow was highly successful and slowly became a standard pattern used across other apps.

[EMBED FIGMA PROTOTYPE: Interactive flow showing the transition from the standard table view to the isolated Data Grid view]

5. Constraints and Killing Technical Debt

Oracle is a large tech giant, so every action had to go through strict channels.

Design System Rules: We were bound to the Redwood Design System. I attended Redwood office hours constantly to explain our use cases and understand the rules. For SCM specific components that had no support channels, I had to build a POC and get it tested and approved before moving ahead.

User Access: Designers never had one on one calls with the users. The users talked to the PMs and the legal team, and then we asked the PMs questions. I had to learn how to ask very specific questions so information was not lost in translation. To make sure my designs were built correctly, I produced detailed spec sheets for the developers.

Fixing Rogue Components: For the main price list, I suggested using tabs to separate the different item types. The devs and stakeholders were against tabs. They ignored the UX recommendation and built a custom component that broke our patterns. It stayed in the app for three cycles. Later, while looking at components for another project, I found a standard Redwood part that solved their issue perfectly. I took it to my manager for approval, got the PM to make a POC, and finally broke down the flawed component, replacing it with the standard design.

Here is the finalized content for Case Study 2.

Just like the first one, I kept the exact same simple, punchy, hyphen-free tone. I also updated all the visual placeholders to clearly show where you will embed your interactive Figma prototype links.

Case Study 2: Fast Execution and Cross Team Design

Role: UX Designer | Timeline: 4 Release Cycles (26A to 26D)

1. The Problem: Moving Fast in a Giant Corporation

While I was working on the massive Price List redesign from my first case study, I was also tasked with spinning up smaller products from scratch. The old ADF UI was clunky everywhere, and we had to replace it fast.

At times, I was working on up to three different products or features at once. Startups want designers who can ship fast, and enterprise companies want designers who can handle complex rules. My goal during these release cycles was to do both. I treated these smaller products like agile startup sprints while making sure they fit perfectly into the giant Oracle ecosystem.

2. Rapid Execution and Reusing Patterns

In releases 26A and 26B, I had to design three separate products from scratch on very tight deadlines.

Currency Conversion List (26A): Customers needed a place to store their currency conversion values, including both general and specific rates. I designed the full creation and manipulation flows in just a few weeks.

Shipping Charge List (26B): Customers use this to set up broad or item specific shipping rates. I finished these designs in exactly 3 weeks. To move this fast, I translated UI features and patterns directly from the main Price List. Since the same dev team was building both products, this lowered their dev effort massively and kept the UX familiar for the users.

Formula Management (26B): I worked on a project where users could manage the math formulas used in price lists. I designed a way for them to make changes to a formula, see exactly where that formula was being used across the system, and update the prices using the new formula. I delivered this in 3 weeks.

[EMBED FIGMA PROTOTYPE: Interactive flow for Shipping Charge List or Currency Conversion showing the clean UI delivered in the 3 week sprint]

3. Scrappy Design and Future Proofing

In cycle 26B, I worked on Rate Plan Templates. Rate plans are used to price subscription items, but they sit inside a specific Price List. Users had no way to export them to use somewhere else.

The 2 Week Sprint: I designed a flow where users could convert rate plans into templates and share them across different price lists. I delivered this in 2 weeks.

Saving Rejected Work: While doing this, I explored a completely new way to fix the clunky Rate Plan UI. The PMs rejected it at the time. Instead of throwing it away, I kept the exploration ready. Two cycles later in 26D, the product team asked for a Rate Plan revamp, and I used those exact designs to get a head start.

Pitching New Features: The template project gave me an idea. I pitched a new feature to the product team called Templatized Mass Actions. I designed the whole flow. Even though it did not get built right away because of dev bandwidth, they officially added it to the product backlog. This showed I could drive product strategy, not just take orders.

[EMBED FIGMA PROTOTYPE: Interactive flow for Rate Plan Templates]

4. The Cross Team Battle (Rate Plans)

My most complex project was the Rate Plan redesign in cycle 26D. This project spanned across three different products owned by three different teams. I had to work with their designers and PMs, and my main goal was to protect the user experience from company politics.

Fighting for the User Logic:

Another team owned a feature called Entitlements. They wanted to put their feature on the main Price List screen, completely outside of the Rate Plan.

I fought back. To the user, it is not logical to leave the rate plan to configure an entitlement, because entitlements belong inside the rate plan. Through lots of discussion, I got them to agree to move it inside. I also helped their designers align their work to our Price List UX standards so the user would not be thrown off by a sudden design change.

Adapting for Other Apps:

Rate plans are also fetched as fragments by other apps like CPQ and FOM during live sales negotiations. At first, we tried to use a similar flow for all the negotiation screens to save dev effort.

During a stakeholder meeting, someone pointed out the flow had too many clicks. Because rate plans are hierarchical, I thought the drill down clicks were normal. But we stopped and evaluated it.

We realized CPQ users usually make very minute changes, so they are used to fragmented drill down clicks. But FOM users need a detailed, high level overview of the whole rate plan for big negotiations. I had to break my own Price List UX rules and design two different fragment patterns to match what the CPQ and FOM users actually needed.

[EMBED FIGMA PROTOTYPE: Interactive flow for Rate Plan creation, highlighting the differences between the CPQ negotiation view and the FOM overview]