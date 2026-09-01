# Portfolio Content Update — RFID Case Studies

Content-only spec. Keep existing design system (dark theme, rounded cards, tag chip style, corner arrow icon on cards, timeline component for Experience) — no new visual language needed, just new copy and a layout tier split.

---

## 1. Projects section — split into Featured + Secondary

**Featured (promote to top, larger cards, 2 across):**

### 3PL — Logistics & Warehouse Visualization Platform
- **Problem:** Warehouse operations needed digitizing — inventory, reporting, and a way for staff to navigate unfamiliar warehouse layouts.
- **Role:** Delivery lead for a 4-person team (2 backend, 2 mobile). Personally led the AR/3D visualization R&D from a standing start — learned Unity, Blender, and Immersal, then scanned and modeled two physical facilities.
- **Result:** Shipped authentication, warehouse/storage CRUD, filtered reporting with Excel export, and inventory management. The AR/3D navigation R&D hit a real hardware limit — mobile cameras couldn't spatially map large warehouse areas — and was shelved in favor of the core platform.
- **Tags:** `PHP` `Flutter` `Unity/Blender (R&D)` `Team Leadership`

### CarLog — Fleet Maintenance Tracking System
- **Problem:** Vehicle maintenance, equipment checklists, and accident reporting needed a proper system instead of ad hoc tracking.
- **Role:** Owned SRS documentation end-to-end across 4 revisions, coordinated a backend and a mobile developer, ran the phase 2 planning cycle.
- **Result:** Shipped authentication, a notification system, exportable maintenance and accident records, and conditional equipment checklist logic.
- **Tags:** `SRS/Requirements` `PHP` `Flutter` `JWT Auth`

**Layout note for featured cards:** replace the current single-paragraph description with three short labeled lines (PROBLEM / ROLE / RESULT) inside the card body. Keep the existing card chrome (border, tag chips, arrow icon) — only the description area changes structure.

**Secondary (demote below featured, smaller cards, under a lighter sub-heading like "Also built" or "Coursework"):**
- Horse Racing Database System (unchanged)
- Uber Trip Analytics & ML Predictor (unchanged)
- Blood Drive Management System (unchanged)

No copy changes to these three — just reduce their visual weight relative to the two featured cards.

---

## 2. Experience section — add to existing "Software Engineer · RFID Saudi Trading Company" entry

Add two new bullets to the existing bullet list for that role (don't create a new timeline entry):

> Compiled and presented a department-wide IT status and strategic roadmap review to leadership — covering security practices, documentation standards, and training processes across the app portfolio.

> Also contributed to the company website (owned documentation and content organization, working with the developer building it) and recovered/stabilized a previously-built internal password manager application for handoff to production.

Style the second line lighter/muted if the timeline component supports a secondary text weight — it's intentionally smaller in scope than the two case-study projects and should read that way.

---

## 3. Media placement

- **Professional headshot:** About section, alongside the existing bio text.
- **Work photo (with a colleague, tied to 3PL/CarLog work):** Also in About, placed near the headshot — reads as a "polished photo + candid work photo" pair rather than needing new UI in the Projects grid.
- **Video clip of the IT roadmap presentation:** short clip (30–60 sec preferred over the full recording), linked or embedded next to the new "Compiled and presented a department-wide IT status and strategic roadmap review..." bullet in Experience — not attached to the 3PL/CarLog project cards.

Before publishing the photo/video: check the video's background for anything on-screen that shouldn't be public (slides, whiteboards), and if a colleague is identifiable in the work photo, give them a heads-up it's going on a public site.

---

## Notes for whoever's coding this (Claude Code)
- No employer name changes needed elsewhere — RFID Saudi Trading Company already appears generically in Experience.
- Don't add screenshots or UI images for 3PL/CarLog project cards — these stay text-only case studies by design (confidentiality + the raw material isn't visually presentable).
- Keep tag chip styling identical to existing Skills/Project tags for visual consistency.
- No completion percentages anywhere in Result copy — feature lists only.
