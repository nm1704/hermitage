# Haven — Day 1: Setup + Static UI

## Run it
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## What's here
- Vite + React + Tailwind, configured and ready
- `Navbar`, `Hero`, `PropertyCard`, `Footer` — all static, no state yet
- Custom Tailwind palette in `tailwind.config.js` (`ink`, `brass`, `sand`, `sage`, `line`)
- `PropertyCard` intentionally has hardcoded data — Day 2 refactors it to use props

## Your Day 1 tasks
1. Get it running locally and confirm the layout renders correctly on desktop + mobile (resize the browser or use dev tools device mode).
2. Change the color palette in `tailwind.config.js` to something of your own — try it before you fall in love with the current one.
3. Add a 4th "stat" to `PropertyCard` (e.g., "Parking" or "Pet friendly").
4. Make the mobile nav actually work: right now `Navbar`'s links (`Buy`, `Rent`, `Sell`, `Agents`) are hidden below the `md` breakpoint (`hidden md:flex`). Add a hamburger icon that's visible on mobile and toggles a dropdown — you'll need `useState` for this, so it's a good preview of Day 3.
5. Swap at least one Unsplash image for a different search term so the layout doesn't feel copy-pasted.

## Notes
- Fonts: `Fraunces` (display/serif) + `Work Sans` (body) — loaded via Google Fonts in `index.html`.
- Everything is a single source file per component on purpose — keep it that way through Day 2 as well.
