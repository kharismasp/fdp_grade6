# Matthew’s FDP Expedition

An English practice adventure for a confident Cambridge Year 6 learner who benefits from help choosing a strategy and checking details.

The main route has 23 activities: Connection Harbour (10 minutes), Operation Workshop (15), Strategy Lookout (10), Story Trail (13), and Summit Checkpoint (8). Leave about 4 minutes for reflection. Beyond the Map offers 6 optional puzzles for another 15–25 minutes. Timings are suggestions, not a countdown.

The activities include matching, ordering, True/False rows, multiple answers, error detection, strategy selection, missing numbers, numeric responses, and progressive story problems. The first two sections focus on enrichment: close FDP values, rounding, changing the reference whole, mixed operations, a repeated-factor shortcut, a missing divisor, and interpreting a non-whole quotient. Every activity includes two hints and a worked solution. Equivalent fractions and mixed numbers are accepted unless a particular form is requested. Progress distinguishes solved activities from activities reviewed with a solution.

Pip, a brown otter with a blue scarf, is the only character in the four generated story illustrations. The illustrations set the scene; exact mathematical information is shown in separate HTML/SVG models. Most models open on request. The area grid and shop-offer cards are shown directly because they contain the data needed for the problem. Images are included in the ZIP, so the illustrations also work offline.

To use the downloadable version, extract the ZIP and open `index.html` in a browser. Keep the four site files together. The mathematics and interactions need no server or account; fonts use a system fallback when offline. Progress and notes are saved in the current browser when browser storage is available. They do not sync between devices.

All questions are original practice items; this is not an official Cambridge or TKA paper.

## Development verification

Run `node scripts/verify.cjs`. This checks all 29 activity structures, mathematical answers, input formats, the open-answer range puzzle, True/False grading, complete-item division, the exact area grid, and completion of staged problems. The second edition uses a separate browser-storage key so previous-edition progress is not treated as completion of revised problems.
