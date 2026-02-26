# 🃏 Xì Dzách — Score Keeper

A simple, mobile-friendly score keeper app for the Vietnamese card game **Xì Dzách** (21/Blackjack variant).

Built with **React + TypeScript + Vite**.

---

## Features

- 📋 **Score table** — columns per player, rows per round, totals pinned at the bottom
- 🏦 **Nhà cái (Dealer)** — one player is designated dealer; their score is auto-computed as the negative sum of all other players so every round totals zero
- 🔄 **Đổi cái** — swap the dealer to any player at any time
- ➕ **Nhập điểm** — input round scores with `−` / `+` buttons; dealer score updates live
- 👤 **Thêm người chơi** — add players at any time; existing rounds are padded with `0`
- 💾 **Persistent state** — all players, scores and dealer are saved to `localStorage` and survive page reloads
- 🔁 **Chơi lại** — reset everything back to the start (with confirmation prompt)
- 📱 **Mobile-first UI** — fixed bottom action bar, horizontal + vertical table scrolling, sticky header/footer rows and first column

---

## Tech Stack

| | |
|---|---|
| Framework | React 19 |
| Language | TypeScript (strict) |
| Build tool | Vite 7 |
| Icons | lucide-react |
| Persistence | localStorage (custom `useLocalStorage` hook) |

---

## Project Structure

```
src/
├── components/
│   ├── ActionBar.tsx        # Fixed bottom bar with action buttons
│   ├── AddPlayerDialog.tsx  # Popup to add a new player
│   ├── ConfirmDialog.tsx    # Generic confirmation popup
│   ├── InputScoreDialog.tsx # Popup to input scores for a round
│   ├── OptionsMenu.tsx      # Popover menu anchored to the options button
│   ├── PlayerHeader.tsx     # Table <thead> with player name columns
│   ├── ScoreRow.tsx         # Single round row in the table
│   ├── ScoreTable.tsx       # Full score table (header + rows + totals)
│   ├── SwapDealerDialog.tsx # Popup to choose a new dealer
│   └── TotalRow.tsx         # Sticky <tfoot> totals row
├── hooks/
│   └── useLocalStorage.ts   # Generic localStorage-backed useState hook
├── App.tsx
├── App.css
├── index.css
└── main.tsx
public/
├── logo.png
└── app-128.png
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Game Rules (Score Logic)

- Every round, non-dealer players get a score (positive or negative).
- The **dealer's score** is automatically set to `-(sum of all other players)`.
- This guarantees the **sum of all scores in a round = 0**.
- The **Tổng** (total) row shows each player's cumulative score. The leading player is highlighted with 👑.
