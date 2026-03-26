# EduMetrics

A study tracker built for JEE prep. Log your mock tests, spot where your time is going wrong, and catch patterns before they cost you marks.

Built with plain HTML/CSS/JS — no framework, no build step, just open it in a browser.

---

## What it does

**Dashboard** — plots your marks and rank over time on a dual-axis chart. Helps you see when rank drops even though marks went up (tougher paper) vs when both slide.

**Deep Dive** — per-test breakdown by subject. You enter marks + time spent per subject, and it flags when you're burning time on a subject but not scoring (e.g. 70% of Physics time for 26% of Physics marks). Also tracks recurring weak topics across tests.

**Formula Deck** — every formula you mark as missed in Deep Dive lands here as a flashcard. Search by topic, mark reviewed, add manually.

**Insights** — linear regression on your history to project next test score, consistency score, and topic clusters from your weakness logs.

**PDF Export** — one-click export of your chart + test history.

---

## Stack

- HTML5 + Vanilla CSS (dark theme)
- Chart.js 4 via CDN
- jsPDF + html2canvas for export
- Firebase Firestore for cross-device sync

---

## Running locally

```bash
cd edumectrics
python -m http.server 8787
# open http://localhost:8787
```

Or use VS Code Live Server — right-click `index.html` → Open with Live Server.

---

## Project layout

```
├── index.html          # dashboard
├── deep-dive.html      # per-test analysis
├── formula-deck.html   # formula flashcards
├── ai-insights.html    # trends + predictions
└── src/
    ├── css/style.css
    ├── js/core/store.js         # data layer + logic
    ├── js/pages/dashboard.js
    ├── js/pages/deep-dive.js
    ├── js/pages/formula-deck.js
    └── js/pages/ai-insights.js
```

---

## License

MIT
