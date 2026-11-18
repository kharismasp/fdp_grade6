/* Original FDP enrichment practice. Illustrations set the scene; diagrams show exact data. */
const ZONES = [
  {
    "id": "harbour",
    "name": "Connection Harbour",
    "short": "Connect",
    "icon": "◈",
    "time": "10 min",
    "color": "blue",
    "intro": "Convert, compare, and check the details.",
    "desc": "Close values, missing numbers and a picture puzzle."
  },
  {
    "id": "workshop",
    "name": "Operation Workshop",
    "short": "Calculate",
    "icon": "✳",
    "time": "15 min",
    "color": "teal",
    "intro": "Choose a method that makes sense.",
    "desc": "Mixed operations, shortcuts and missing numbers."
  },
  {
    "id": "lookout",
    "name": "Strategy Lookout",
    "short": "Reason",
    "icon": "⌁",
    "time": "10 min",
    "color": "gold",
    "intro": "Look for a useful first step.",
    "desc": "Choose a strategy and test your reasoning."
  },
  {
    "id": "trail",
    "name": "Story Trail",
    "short": "Apply",
    "icon": "⚑",
    "time": "13 min",
    "color": "rose",
    "intro": "Read the story. Track what changes.",
    "desc": "Help Pip solve four problems on the trail."
  },
  {
    "id": "summit",
    "name": "Summit Checkpoint",
    "short": "Mix it up",
    "icon": "△",
    "time": "8 min",
    "color": "violet",
    "intro": "Put your strategies to work.",
    "desc": "Finish with four mixed practice problems."
  },
  {
    "id": "bonus",
    "name": "Beyond the Map",
    "short": "Bonus",
    "icon": "✧",
    "time": "15–25 min extra",
    "color": "gold",
    "intro": "Ready for an extra challenge?",
    "desc": "Six optional puzzles to explore at your own pace."
  }
];
const QUESTIONS = [
  {
    "id": "h1",
    "zone": "harbour",
    "type": "match",
    "tag": "Match equivalent values",
    "title": "Same value, different form",
    "prompt": "Match each fraction to the decimal and percentage with the same value. Choose a fraction on the left, then its match on the right.",
    "left": [
      "7/16",
      "1 3/5",
      "9/40",
      "13/8"
    ],
    "right": [
      "0.225 = 22.5%",
      "1.625 = 162.5%",
      "0.4375 = 43.75%",
      "1.6 = 160%"
    ],
    "pairs": [
      2,
      3,
      0,
      1
    ],
    "skill": "FDP connections",
    "hint": [
      "Try a familiar fraction first. For example, 1/8 = 0.125.",
      "7/16 is half of 7/8. For 9/40, you can make the denominator 200."
    ],
    "steps": [
      "7/16 = 0.4375 = 43.75%. One way: 7/8 = 0.875, then halve it.",
      "1 3/5 = 1.6 = 160%. A value greater than 1 is greater than 100%.",
      "9/40 = 45/200 = 0.225 = 22.5%.",
      "13/8 = 1 5/8 = 1.625 = 162.5%."
    ],
    "takeaway": "Choose the conversion that makes each fraction easiest to work with.",
    "revision": 2
  },
  {
    "id": "h2",
    "zone": "harbour",
    "type": "order",
    "tag": "Compare five close values",
    "title": "A close finish",
    "prompt": "Arrange the cards from smallest to largest. Tap a card to add it to the line. Tap a placed card to remove it.",
    "items": [
      "61%",
      "0.605",
      "5/8",
      "0.602",
      "3/5"
    ],
    "answer": [
      4,
      3,
      1,
      0,
      2
    ],
    "visual": "numberline",
    "skill": "Comparing values",
    "hint": [
      "Write all five values as decimals. Use three decimal places to compare them.",
      "61% = 0.610, 5/8 = 0.625, and 3/5 = 0.600."
    ],
    "steps": [
      "Use decimals: 0.610, 0.605, 0.625, 0.602 and 0.600.",
      "Compare from the tenths place, then the hundredths, then the thousandths.",
      "0.600 < 0.602 < 0.605 < 0.610 < 0.625.",
      "So the order is 3/5, 0.602, 0.605, 61%, 5/8."
    ],
    "takeaway": "When values are close, line up the decimal places before comparing them.",
    "revision": 2
  },
  {
    "id": "h3",
    "zone": "harbour",
    "type": "truth",
    "tag": "True or false?",
    "title": "Check every detail",
    "prompt": "Read each statement about 0.875. Choose True or False for every row.",
    "statements": [
      "0.875 is equal to 7/8.",
      "0.875 is equal to 87.5%.",
      "0.875 is 12.5% less than 1.",
      "0.875 is 0.125% less than 1.",
      "0.875 rounded to 2 decimal places is 0.87."
    ],
    "answer": [
      true,
      true,
      true,
      false,
      false
    ],
    "skill": "FDP connections",
    "hint": [
      "Separate the exact value, the gap from 1, and the rounded value.",
      "The gap from 1 is 0.125, which is 12.5% of 1. To round to 2 decimal places, look at the third decimal digit."
    ],
    "steps": [
      "0.875 = 875/1000 = 7/8, and 0.875 = 87.5%. The first two statements are true.",
      "1 − 0.875 = 0.125 = 12.5% of 1. The third statement is true; the fourth is false.",
      "The third decimal digit in 0.875 is 5, so it rounds up to 0.88. The fifth statement is false."
    ],
    "takeaway": "0.125 and 0.125% are different values. Always check whether the % sign is present.",
    "revision": 2
  },
  {
    "id": "h4",
    "zone": "harbour",
    "type": "number",
    "tag": "Connect two forms",
    "title": "Find the missing fraction",
    "prompt": "A number is 0.075 less than 3/4. What is the number? Write your answer as a fraction in its simplest form.",
    "answer": 0.675,
    "requireFraction": true,
    "simplest": true,
    "placeholder": "e.g. 2/3",
    "visual": "gap",
    "skill": "FDP connections",
    "hint": [
      "Write 3/4 as a decimal, then subtract 0.075.",
      "0.750 − 0.075 = 0.675. Now turn 675/1000 into a fraction in its simplest form."
    ],
    "steps": [
      "3/4 = 0.750.",
      "0.750 − 0.075 = 0.675 = 675/1000.",
      "Divide the numerator and denominator by 25: 675/1000 = 27/40."
    ],
    "takeaway": "Use the easiest form for the calculation, then change to the form the question asks for.",
    "revision": 2
  },
  {
    "id": "h5",
    "zone": "harbour",
    "type": "choice",
    "tag": "Read the picture",
    "title": "Which area is the whole?",
    "prompt": "The board is made of equal-sized squares. Some are blue, some are gold, and the rest are blank. What percentage of the coloured area is blue?",
    "options": [
      "37.5%",
      "40%",
      "60%",
      "62.5%"
    ],
    "answer": 2,
    "visual": "board",
    "skill": "Identifying the whole",
    "hint": [
      "The question asks about the coloured area. Leave out the blank squares.",
      "Count 9 blue squares and 6 gold squares. Compare the 9 blue squares with all 15 coloured squares."
    ],
    "steps": [
      "There are 9 blue squares and 6 gold squares: 15 coloured squares altogether.",
      "The blue fraction of the coloured area is 9/15 = 3/5.",
      "3/5 = 60%. The blank squares are not part of the whole used in this question."
    ],
    "takeaway": "Read the whole carefully: “of the coloured area” means blue and gold together.",
    "revision": 2
  },
  {
    "id": "w1",
    "zone": "workshop",
    "type": "number",
    "tag": "Mixed operations",
    "title": "Choose your order",
    "prompt": "Work out the calculation below. Give your answer as a decimal.",
    "expression": "(1 1/4 − 0.45) ÷ 2/5 + 15%",
    "answer": 2.15,
    "decimalOnly": true,
    "visual": "operation-order",
    "skill": "Mixed FDP operations",
    "hint": [
      "Start inside the brackets. Then divide. Add the percentage last.",
      "1.25 − 0.45 = 0.8. Since 2/5 = 0.4, the next step is 0.8 ÷ 0.4."
    ],
    "steps": [
      "Inside the brackets: 1.25 − 0.45 = 0.8.",
      "Divide: 0.8 ÷ 0.4 = 2.",
      "Convert 15% to 0.15, then add: 2 + 0.15 = 2.15."
    ],
    "takeaway": "Do not work straight from left to right. Check the brackets and the operation order first.",
    "revision": 2
  },
  {
    "id": "w2",
    "zone": "workshop",
    "type": "strategy",
    "tag": "Choose a method, then solve",
    "title": "A shortcut worth spotting",
    "prompt": "Work out 6.4 × 1.25 + 3.6 × 1.25. Choose how you want to start, then find the answer.",
    "expression": "6.4 × 1.25 + 3.6 × 1.25",
    "routes": [
      {
        "label": "Group: (6.4 + 3.6) × 1.25",
        "note": "Both terms have the factor 1.25. You can add 6.4 and 3.6 first."
      },
      {
        "label": "Work out both products, then add",
        "note": "This method also works. Keep the decimal points in the right places."
      },
      {
        "label": "Use 1.25 = 5/4",
        "note": "You can divide each number by 4, multiply by 5, then add."
      }
    ],
    "answer": 12.5,
    "skill": "Multiplication and division",
    "hint": [
      "What factor appears in both parts of the addition?",
      "6.4 × 1.25 + 3.6 × 1.25 = (6.4 + 3.6) × 1.25."
    ],
    "steps": [
      "Both products contain 1.25, so group them: (6.4 + 3.6) × 1.25.",
      "6.4 + 3.6 = 10, and 10 × 1.25 = 12.5.",
      "Or calculate separately: 6.4 × 1.25 = 8 and 3.6 × 1.25 = 4.5. Then 8 + 4.5 = 12.5."
    ],
    "takeaway": "Before doing a long calculation, look for a repeated factor or a pair that adds to a friendly number.",
    "revision": 2
  },
  {
    "id": "w3",
    "zone": "workshop",
    "type": "staged",
    "tag": "Divide and interpret the answer",
    "title": "Enough ribbon for one more?",
    "prompt": "Pip the otter has 3.6 m of ribbon. He uses 1/6 of it to decorate a flag. Each badge needs 0.24 m of ribbon.",
    "parts": [
      {
        "prompt": "How many complete badges can Pip make with the ribbon that is left?",
        "answer": 12,
        "unit": "badges",
        "hint": "After the flag, 3 m remains. Divide by 0.24. Only complete badges count."
      },
      {
        "prompt": "How many metres of ribbon remain after he makes those badges?",
        "answer": 0.12,
        "unit": "m",
        "hint": "Find the ribbon used for 12 badges, then subtract it from the 3 m available."
      }
    ],
    "visual": "ribbon",
    "skill": "Multiplication and division",
    "hint": [
      "Find the ribbon left after the flag before you count the badges.",
      "1/6 of 3.6 m is 0.6 m, leaving 3 m. 3 ÷ 0.24 = 12.5. What does that mean for complete badges?"
    ],
    "steps": [
      "The flag uses 3.6 ÷ 6 = 0.6 m, so 3 m remains.",
      "3 ÷ 0.24 = 12.5. Pip can make 12 complete badges. There is not enough for a thirteenth.",
      "The 12 badges use 12 × 0.24 = 2.88 m.",
      "Ribbon left: 3 − 2.88 = 0.12 m."
    ],
    "takeaway": "In a story problem, a decimal answer may need interpreting. Half a badge is not a complete badge.",
    "revision": 2
  },
  {
    "id": "w4",
    "zone": "workshop",
    "type": "number",
    "tag": "Find the missing number",
    "title": "Work backwards",
    "prompt": "What number belongs in the box? Write your answer as a fraction in its simplest form.",
    "expression": "(1 1/2 − 3/8) ÷ □ = 1 4/5",
    "answer": 0.625,
    "requireFraction": true,
    "simplest": true,
    "placeholder": "e.g. 2/3",
    "skill": "Fraction operations",
    "hint": [
      "First work out the brackets. Then think about how to undo the division.",
      "1 1/2 − 3/8 = 9/8. The missing number is (9/8) ÷ (1 4/5)."
    ],
    "steps": [
      "1 1/2 = 12/8, so 12/8 − 3/8 = 9/8.",
      "The missing divisor is (9/8) ÷ (9/5).",
      "(9/8) × (5/9) = 5/8.",
      "Check: (9/8) ÷ (5/8) = 9/5 = 1 4/5."
    ],
    "takeaway": "Working backwards is useful when a number is missing. Put it back into the original calculation to check.",
    "revision": 2
  },
  {
    "id": "w5",
    "zone": "workshop",
    "type": "choice",
    "tag": "Find the first mistake",
    "title": "Which step went wrong?",
    "prompt": "Pip works out the calculation below. Which line contains his first mistake?",
    "expression": "2/3 + 0.4 × 5/6",
    "options": [
      "Line 1: = (2/3 + 0.4) × 5/6",
      "Line 2: = 16/15 × 5/6",
      "Line 3: = 8/9",
      "There is no mistake."
    ],
    "answer": 0,
    "skill": "Reasoning and checking",
    "hint": [
      "Which operation should happen first in the original calculation?",
      "Multiplication comes before addition. Line 1 adds brackets that were not there."
    ],
    "steps": [
      "The first mistake is in line 1: Pip adds the first two numbers before multiplying.",
      "Instead, multiply first: 0.4 × 5/6 = 2/5 × 5/6 = 1/3.",
      "Then add: 2/3 + 1/3 = 1."
    ],
    "takeaway": "Adding brackets can change a calculation. Follow the original operation order.",
    "revision": 2
  },
  {
    "id": "w6",
    "zone": "workshop",
    "type": "multi",
    "tag": "More than one correct answer",
    "title": "Different routes to 0.6",
    "prompt": "Which calculations give exactly 0.6? Select every correct answer.",
    "options": [
      "3/4 × 0.8",
      "0.9 ÷ 1.5",
      "60% of 0.6",
      "(2/5 + 0.1) × 1.2",
      "1.2 ÷ 0.5"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "skill": "Mixed FDP operations",
    "hint": [
      "Check one calculation at a time. There are three correct answers.",
      "60% of 0.6 is less than 0.6. Dividing 1.2 by 0.5 makes it larger."
    ],
    "steps": [
      "3/4 × 0.8 = 0.6.",
      "0.9 ÷ 1.5 = 9/15 = 0.6.",
      "60% of 0.6 = 0.36, so this one does not work.",
      "(2/5 + 0.1) × 1.2 = 0.5 × 1.2 = 0.6.",
      "1.2 ÷ 0.5 = 2.4, so this one does not work."
    ],
    "takeaway": "A quick size check can rule out some answers before you calculate exactly.",
    "revision": 2
  },
  {
    "id": "l1",
    "zone": "lookout",
    "type": "strategy",
    "tag": "Choose a method, then solve",
    "title": "Find 12.5% the easy way",
    "prompt": "What is 12.5% of 64? Choose a method, then work out the answer.",
    "routes": [
      {
        "label": "Use 12.5% = 1/8",
        "note": "One eighth is a useful shortcut here. Divide 64 by 8."
      },
      {
        "label": "Multiply 0.125 by 64",
        "note": "This works too. Check where the decimal point belongs."
      },
      {
        "label": "Find 10%, then add 2.5%",
        "note": "You can split the percentage into two easier parts."
      }
    ],
    "answer": 8,
    "skill": "Percentage strategies",
    "hint": [
      "12.5% is half of 25%.",
      "25% = 1/4, so 12.5% = 1/8."
    ],
    "steps": [
      "12.5% = 12.5/100 = 1/8.",
      "64 ÷ 8 = 8.",
      "Alternative: 10% of 64 is 6.4, and 2.5% is 1.6. Add to get 8."
    ],
    "takeaway": "Useful pairs to remember: 50% = 1/2, 25% = 1/4, 20% = 1/5 and 12.5% = 1/8.",
    "revision": 2
  },
  {
    "id": "l2",
    "zone": "lookout",
    "type": "choice",
    "tag": "Compare two calculations",
    "title": "Do you need to calculate both?",
    "prompt": "Compare these two amounts. Which answer is correct?",
    "options": [
      "48% of 25",
      "25% of 48",
      "They have the same value"
    ],
    "answer": 2,
    "skill": "Percentage strategies",
    "hint": [
      "Write both percentages as fractions over 100.",
      "Compare (48 × 25)/100 and (25 × 48)/100."
    ],
    "steps": [
      "48% of 25 = (48 × 25)/100.",
      "25% of 48 = (25 × 48)/100. Multiplication can be reversed, so they are equal.",
      "Both equal 12; 25% of 48 may be the easier route."
    ],
    "takeaway": "a% of b equals b% of a. Use whichever calculation is easier.",
    "revision": 2
  },
  {
    "id": "l3",
    "zone": "lookout",
    "type": "choice",
    "tag": "Test a statement",
    "title": "Always, sometimes, or never?",
    "prompt": "“Multiplying a positive number by a fraction makes it smaller.” Is this statement always, sometimes, or never true?",
    "options": [
      "Always true",
      "Sometimes true",
      "Never true"
    ],
    "answer": 1,
    "skill": "Reasoning and checking",
    "hint": [
      "A fraction can be greater than 1. Try 3/2.",
      "Compare multiplying by 1/2, by 1, and by 3/2."
    ],
    "steps": [
      "It is sometimes true. For example, 8 × 1/2 = 4.",
      "But 8 × 3/2 = 12, and 8 × 1/1 = 8.",
      "For a positive starting number, a multiplier between 0 and 1 makes it smaller; a multiplier above 1 makes it larger."
    ],
    "takeaway": "Try examples on both sides of 1 before deciding whether a statement is always true.",
    "revision": 2
  },
  {
    "id": "l4",
    "zone": "lookout",
    "type": "choice",
    "tag": "Error detective",
    "title": "The whole has changed",
    "prompt": "A game costs $80. The price is reduced by 25%. Later, the reduced price goes up by 25%. What is the final price?",
    "options": [
      "$60",
      "$75",
      "$80",
      "$85"
    ],
    "answer": 1,
    "skill": "Identifying the whole",
    "hint": [
      "The second 25% is a percentage of the new price.",
      "After the discount, the game costs $60. Find 25% of $60."
    ],
    "steps": [
      "25% of $80 = $20, so the reduced price is $60.",
      "The increase is 25% of $60 = $15.",
      "Final price: $60 + $15 = $75. The two changes use different wholes."
    ],
    "takeaway": "Before finding a percentage, ask: “A percentage of which amount?”",
    "visual": "price-change",
    "revision": 2
  },
  {
    "id": "t1",
    "zone": "trail",
    "type": "staged",
    "tag": "Follow the pages",
    "title": "Pip’s weekend reading",
    "prompt": "Pip reads 2/5 of a 150-page book on Saturday. On Sunday, he reads 30% of the pages he has not read yet.",
    "parts": [
      {
        "prompt": "How many pages has Pip not read by the end of Saturday?",
        "answer": 90,
        "unit": "pages",
        "hint": "Find 2/5 of 150, then subtract that from 150."
      },
      {
        "prompt": "How many pages are still unread after Sunday?",
        "answer": 63,
        "unit": "pages",
        "hint": "On Sunday, Pip reads 30% of the remaining 90 pages."
      }
    ],
    "skill": "Fractions of a remainder",
    "hint": [
      "Draw a bar for the whole book, then keep only the unread part.",
      "Saturday: 150 − 60 = 90 left. Sunday uses 90 as its whole."
    ],
    "steps": [
      "Saturday: 2/5 × 150 = 60 pages read, leaving 90.",
      "Sunday: 30% × 90 = 27 pages read.",
      "Still unread: 90 − 27 = 63 pages."
    ],
    "takeaway": "“Of the pages left” tells you to use a new whole for the next step.",
    "image": "reading",
    "visual": "reading",
    "revision": 2
  },
  {
    "id": "t2",
    "zone": "trail",
    "type": "staged",
    "tag": "Compare two offers",
    "title": "The expedition shop",
    "prompt": "Two shops sell the same backpack for $48 before discounts. Shop A gives 25% off. Shop B takes $10 off first, then gives 10% off the price that remains.",
    "parts": [
      {
        "prompt": "What does the backpack cost at Shop A after the discount?",
        "answer": 36,
        "unit": "dollars",
        "hint": "25% is one quarter. Subtract one quarter of $48."
      },
      {
        "prompt": "What does it cost at Shop B after both discounts?",
        "answer": 34.2,
        "unit": "dollars",
        "hint": "First subtract $10. Then take 10% off the remaining $38."
      },
      {
        "prompt": "How much cheaper is Shop B?",
        "answer": 1.8,
        "unit": "dollars",
        "hint": "Compare $36 with $34.20."
      }
    ],
    "skill": "Multi-step applications",
    "hint": [
      "Work out one offer at a time. Compare final prices.",
      "Shop B applies its 10% discount to $38."
    ],
    "steps": [
      "Shop A: $48 − $12 = $36.",
      "Shop B: $48 − $10 = $38, then $38 − $3.80 = $34.20.",
      "Shop B is cheaper by $36 − $34.20 = $1.80."
    ],
    "takeaway": "Work out each final price. Follow the discounts in the order the shop gives them.",
    "image": "shop",
    "visual": "offers",
    "revision": 2
  },
  {
    "id": "t3",
    "zone": "trail",
    "type": "number",
    "tag": "Work backwards",
    "title": "How much water was there?",
    "prompt": "Pip uses 35% of his water supply. He has 26 litres left. How many litres did he have at the start?",
    "answer": 40,
    "unit": "litres",
    "visual": "remaining",
    "skill": "Identifying the whole",
    "hint": [
      "If 35% was used, what percentage remains?",
      "65% represents 26 litres. Divide by 65 to find 1%, then multiply by 100."
    ],
    "steps": [
      "100% − 35% = 65% remains.",
      "65% = 26 litres, so 1% = 26 ÷ 65 = 0.4 litres.",
      "100% = 40 litres. Check: 35% of 40 is 14, leaving 26."
    ],
    "takeaway": "Label the amount you know before working back to the full 100%.",
    "image": "water",
    "revision": 2
  },
  {
    "id": "t4",
    "zone": "trail",
    "type": "number",
    "tag": "Count equal groups",
    "title": "Trail-mix packs",
    "prompt": "Pip has 1.5 kg of trail mix. He uses 2/5 of it on the first day. He puts the rest into packs of 0.075 kg each. How many full packs can he fill?",
    "answer": 12,
    "unit": "packs",
    "skill": "Multi-step applications",
    "hint": [
      "Find the mass left before counting packs.",
      "3/5 of 1.5 kg = 0.9 kg. Now divide by the mass of one pack."
    ],
    "steps": [
      "The fraction left is 1 − 2/5 = 3/5.",
      "Mass left: 3/5 × 1.5 = 0.9 kg.",
      "Number of packs: 0.9 ÷ 0.075 = 900 ÷ 75 = 12."
    ],
    "takeaway": "First find the amount left. Then divide it into equal groups.",
    "image": "trailmix",
    "visual": "trailmix",
    "revision": 2
  },
  {
    "id": "s1",
    "zone": "summit",
    "type": "number",
    "tag": "Mixed checkpoint · 1 of 4",
    "title": "From a calculation to a percentage",
    "prompt": "Work out the calculation below. Give your answer as a percentage. Type the number before the % sign.",
    "expression": "1 − (0.35 + 2/5)",
    "answer": 25,
    "unit": "%",
    "skill": "Mixed FDP operations",
    "hint": [
      "Work inside the brackets first.",
      "2/5 = 0.4. The bracket is 0.75."
    ],
    "steps": [
      "1 − (0.35 + 0.4) = 1 − 0.75 = 0.25.",
      "0.25 = 25%."
    ],
    "takeaway": "Check both the calculation and the requested answer form.",
    "revision": 2
  },
  {
    "id": "s2",
    "zone": "summit",
    "type": "multi",
    "tag": "Mixed checkpoint · 2 of 4",
    "title": "Which statements are true?",
    "prompt": "Check all four statements. Select every true statement.",
    "options": [
      "0.6 ÷ 0.2 = 0.3",
      "3/5 of 45 = 27",
      "An increase from 40 to 50 is 10%",
      "0.125 = 12.5%"
    ],
    "answer": [
      1,
      3
    ],
    "skill": "Reasoning and checking",
    "hint": [
      "Check each statement separately. Two are true.",
      "For percentage increase, divide the increase by the original amount."
    ],
    "steps": [
      "0.6 ÷ 0.2 = 3, because three groups of 0.2 fit into 0.6.",
      "3/5 × 45 = 27 is true.",
      "40 to 50 is an increase of 10 out of 40: 10/40 = 25%.",
      "0.125 × 100% = 12.5% is true."
    ],
    "takeaway": "A difference of 10 is an amount. A percentage change also needs a reference whole.",
    "revision": 2
  },
  {
    "id": "s3",
    "zone": "summit",
    "type": "number",
    "tag": "Mixed checkpoint · 3 of 4",
    "title": "Find the tank’s capacity",
    "prompt": "A tank is 3/4 full. After 18 litres of water are removed, it is 45% full. How many litres can the tank hold when full?",
    "answer": 60,
    "unit": "litres",
    "skill": "Identifying the whole",
    "hint": [
      "Find what fraction or percentage of the full tank the 18 litres represents.",
      "75% − 45% = 30%. So 30% of the capacity is 18 litres."
    ],
    "steps": [
      "3/4 = 75%. The amount removed is 75% − 45% = 30% of the capacity.",
      "30% represents 18 litres, so 10% represents 6 litres.",
      "100% represents 60 litres."
    ],
    "takeaway": "When both percentages use the same whole, their difference represents the amount changed.",
    "visual": "tank",
    "revision": 2
  },
  {
    "id": "s4",
    "zone": "summit",
    "type": "number",
    "tag": "Mixed checkpoint · 4 of 4",
    "title": "Look before you divide",
    "prompt": "Work out the calculation below. Check the brackets first.",
    "expression": "(5/6 − 1/4) ÷ 7/12",
    "answer": 1,
    "skill": "Fraction operations",
    "hint": [
      "Start inside the brackets using denominator 12.",
      "5/6 − 1/4 = 10/12 − 3/12."
    ],
    "steps": [
      "5/6 − 1/4 = 10/12 − 3/12 = 7/12.",
      "(7/12) ÷ (7/12) = 1."
    ],
    "takeaway": "Look at the result of the brackets before doing more arithmetic.",
    "revision": 2
  },
  {
    "id": "b1",
    "zone": "bonus",
    "type": "number",
    "tag": "Bonus · a hidden fraction",
    "title": "Three colours of tokens",
    "prompt": "In a collection of tokens, 2/5 are blue. Of the tokens that are not blue, 1/3 are red. The remaining 24 tokens are gold. How many tokens are in the whole collection?",
    "answer": 60,
    "unit": "tokens",
    "skill": "Fractions of a remainder",
    "hint": [
      "After the blue tokens are removed, 3/5 of the collection remains.",
      "Gold is 2/3 of the remainder: 2/3 × 3/5 = 2/5 of the whole."
    ],
    "steps": [
      "The non-blue part is 3/5 of the collection.",
      "Gold is 2/3 of this part, so gold = 2/3 × 3/5 = 2/5 of the whole.",
      "2/5 = 24 tokens, so 1/5 = 12 and the whole is 60."
    ],
    "takeaway": "A fraction of the part left can help you find a fraction of the original whole.",
    "revision": 2
  },
  {
    "id": "b2",
    "zone": "bonus",
    "type": "number",
    "tag": "Bonus · construct an example",
    "title": "Between two neighbours",
    "prompt": "Write a fraction greater than 0.47 but less than 48%. Use 1,000 as the denominator.",
    "range": [
      0.47,
      0.48
    ],
    "requireFraction": true,
    "denominator": 1000,
    "skill": "Comparing values",
    "hint": [
      "Write both endpoints as thousandths.",
      "0.47 = 470/1,000 and 48% = 480/1,000. Choose a numerator between 470 and 480."
    ],
    "steps": [
      "Any fraction from 471/1,000 to 479/1,000 works.",
      "For example, 475/1,000 = 0.475, and 0.47 < 0.475 < 0.48.",
      "Here the requested denominator is 1,000, so there is no need to simplify."
    ],
    "takeaway": "Changing to smaller equal parts helps you find numbers between two close values.",
    "revision": 2
  },
  {
    "id": "b3",
    "zone": "bonus",
    "type": "number",
    "tag": "Bonus · reverse a change",
    "title": "Back to the original price",
    "prompt": "A price is reduced by 20%. What percentage increase on the reduced price would bring it back to the original price? Type the number before the % sign.",
    "answer": 25,
    "unit": "%",
    "skill": "Identifying the whole",
    "hint": [
      "Choose an easy original price, such as $100.",
      "The reduced price is $80. To regain $20, compare 20 with 80."
    ],
    "steps": [
      "Suppose the original price is $100. After a 20% fall, it is $80.",
      "It must rise by $20. This is 20/80 = 1/4 = 25% of the reduced price."
    ],
    "takeaway": "Try an easy starting value, such as 100, to understand a percentage-change problem.",
    "revision": 2
  },
  {
    "id": "b4",
    "zone": "bonus",
    "type": "number",
    "tag": "Bonus · use a relationship",
    "title": "A number with two clues",
    "prompt": "40% of a number is 6 more than 1/4 of the same number. What is the number?",
    "answer": 40,
    "skill": "Percentage strategies",
    "hint": [
      "Both parts are fractions of the same number. Compare 40% and 25%.",
      "The difference, 15% of the number, is 6."
    ],
    "steps": [
      "1/4 = 25%. The gap is 40% − 25% = 15%.",
      "15% of the number = 6. Therefore 5% = 2 and 100% = 40."
    ],
    "takeaway": "When two parts use the same whole, compare the parts to find the whole.",
    "revision": 2
  },
  {
    "id": "b5",
    "zone": "bonus",
    "type": "choice",
    "tag": "Bonus · compare two numbers",
    "title": "Turn the comparison around",
    "prompt": "A and B are positive numbers. A is 20% greater than B. Which statement about B is correct?",
    "options": [
      "B is 20% less than A.",
      "B is 1/6 less than A.",
      "B is 1/5 greater than A.",
      "B is 25% less than A."
    ],
    "answer": 1,
    "skill": "Reasoning and checking",
    "hint": [
      "Choose B = 100. Then A = 120.",
      "B is 20 less than A. Compare that difference with A = 120."
    ],
    "steps": [
      "Let B = 100 and A = 120.",
      "B is 20 below A, and 20/120 = 1/6.",
      "So B is 1/6 less than A. The reference whole matters."
    ],
    "takeaway": "“Greater than B” uses B as the whole. “Less than A” uses A as the whole.",
    "revision": 2
  },
  {
    "id": "b6",
    "zone": "bonus",
    "type": "number",
    "tag": "Bonus · compare fractions",
    "title": "Two parts, one amount",
    "prompt": "3/4 of one number is equal to 60% of a second number. The second number is 50. What is the first number?",
    "answer": 40,
    "skill": "Multi-step applications",
    "hint": [
      "Find the shared amount first.",
      "60% of 50 = 30. So 3/4 of the first number is 30."
    ],
    "steps": [
      "60% of 50 = 30.",
      "3/4 of the first number = 30, so 1/4 = 10.",
      "The first number is 4 × 10 = 40."
    ],
    "takeaway": "Start with the amount you can work out. Then use it to find the missing whole.",
    "revision": 2
  }
];
