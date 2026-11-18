# Project memory

## Product intent & audience

- VOLT GYM is a fitness facility website built with vite-react (JSX + Tailwind + Lucide React).
- Audience likely includes gym members, prospective clients interested in workouts, group classes, karate/other sports, and personal training/coaching.

## Brand personality & voice

- Visual identity is black, white, and red; must be preserved across updates.
- Photographic content must be authentic — no promotional posters, text graphics, offers, or unrelated images standing in for gym photography.
- Do not invent gym interiors, equipment, coach identities, or activities.

## Visual design & UX direction

- Site sections include: Gym & equipment, Workout & fitness programs, Coaches & training activities, Group classes, Karate & other sports.
- Sections use dark placeholders where suitable real photos are not yet available; placeholders are replaced only when genuine photography exists.
- Program section uses `karate-program.jpg` (suitable).
- `coaches-team.jpg` exists but is a single-person schedule graphic — not used as a team photo.
- `public/images/volt-gym/media-02-2026-11-15.jpg` is a text-based riddle graphic — intentionally unused as photography.
- Avoid duplicate images across sections.

## Decisions, constraints & rationale

- Media source file `volt-gym-all-media-links.txt` (29 URLs) was not present in the project filesystem; only an existing extracted media manifest could be used.
- Manifest contained 5 remaining photo URLs beyond the 6 previously downloaded; 4 expired/invalid, 1 accessible but unsuitable.
- Expired URLs returned tiny invalid responses; those download artifacts were removed.
- Build passes after updates.
- No new suitable real photos were available from the remaining URLs; most sections still rely on dark placeholders.

## Open questions & assumptions

- The original 29-photo text file is still unavailable; if re-uploaded, it could yield additional real photography for Gym/equipment, Workout, Coaches/training, Group classes, and Other sports.
- Sections still needing real photos: Gym & equipment, Workout & fitness programs, Coaches & training activities, Group classes, and other sports (except Karate which has `karate-program.jpg`).
- Confirm whether `coaches-team.jpg` should be removed or kept for future replacement with an actual team photo.