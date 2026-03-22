export interface SafetyPanel {
  id: string;
  icon: string;
  title: string;
  items: string[];
  accentColor: string;
}

export const safetyPanels: SafetyPanel[] = [
  {
    id: "best-for",
    icon: "👨‍👩‍👧‍👦",
    title: "Best For",
    accentColor: "teal",
    items: [
      "Children ages 2 and up (with parental supervision)",
      "Non-swimmers and beginners in calm shoreline zones",
      "Older children (7+) and teens in Adventure Cove",
      "Adults of all swim levels",
      "Guests with sensory sensitivities (quiet hours available)",
      "Multi-generational family groups",
    ],
  },
  {
    id: "parent-notes",
    icon: "📋",
    title: "Parent Notes",
    accentColor: "ocean",
    items: [
      "Keep children within arm's reach in all wave zones",
      "Review zone color codes with children before entering",
      "Establish a clear meeting point at the dome entrance",
      "Apply reef-safe sunscreen before entry and re-apply every 90 minutes",
      "Hydrate regularly — it's easy to forget in the climate-controlled dome",
      "The dome has restrooms, first aid, and nursing stations on all levels",
    ],
  },
  {
    id: "wave-intensity",
    icon: "🌊",
    title: "Wave Intensity Guide",
    accentColor: "gold",
    items: [
      "🟢 Calm Shoreline: 0–6 inch ripples — ideal for ages 2+",
      "🟡 Adventure Cove: 1–2 ft gentle rolling — ideal for ages 5+",
      "🔴 Central Surge: Up to 3.5 ft dynamic waves — recommended 48\"+ or supervised",
      "Wave cycles run approximately 90 seconds on, 60 seconds off",
      "Wave intensity may be reduced at Cast Member discretion",
      "Posted schedules show daily wave timing in each zone",
    ],
  },
  {
    id: "supervision",
    icon: "🦺",
    title: "Supervision",
    accentColor: "jungle",
    items: [
      "Certified Disney Cast Member lifeguards stationed throughout",
      "Lifeguard rotation every 20 minutes for maximum alertness",
      "Emergency response equipment at all guard stations",
      "Children under 12 require adult (18+) within the water, not poolside",
      "Non-swimming adults must wear a provided life jacket in Adventure Cove",
      "Zero-tolerance for running on all pool decks",
    ],
  },
  {
    id: "accessibility",
    icon: "♿",
    title: "Accessibility",
    accentColor: "teal",
    items: [
      "Zero-depth entry with sloped ramp access at all zones",
      "Waterproof wheelchair assistance available at Guest Services",
      "Companion seating areas with direct sightlines to all zones",
      "Sensory-friendly hours (reduced crowds, lower audio) on select mornings",
      "Visual water depth markers and tactile paving at zone transitions",
      "Service animals welcome in non-pool areas; comfort animal policy applies",
    ],
  },
  {
    id: "what-to-bring",
    icon: "🎒",
    title: "What to Bring",
    accentColor: "sand",
    items: [
      "Reef-safe sunscreen (required — available at resort shops)",
      "Water shoes (recommended — pixel surfaces can be textured)",
      "Rash guard / swim shirt for UV protection",
      "Resort wristband (required for entry)",
      "Towels (provided at Aulani for resort guests)",
      "Waterproof phone case if you want to capture moments",
    ],
  },
];
