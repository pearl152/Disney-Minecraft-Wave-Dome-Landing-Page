export interface ItineraryItem {
  time: string;
  activity: string;
  description: string;
  icon: string;
  type: "arrival" | "water" | "dining" | "rest" | "experience" | "departure";
}

export interface ItineraryDay {
  day: string;
  label: string;
  theme: string;
  items: ItineraryItem[];
}

export const singleDayItinerary: ItineraryItem[] = [
  {
    time: "8:00 AM",
    activity: "Resort Arrival & Check-In",
    description:
      "Arrive at Aulani and complete express check-in. Pick up your resort wristbands and receive your complimentary Wave Dome orientation map.",
    icon: "🏨",
    type: "arrival",
  },
  {
    time: "8:30 AM",
    activity: "Breakfast at Makahiki",
    description:
      "Fuel up with a character breakfast at Makahiki – The Experience. Meet Disney characters in their Hawaiʻi resort attire before the crowds arrive.",
    icon: "🍳",
    type: "dining",
  },
  {
    time: "9:00 AM",
    activity: "Wave Dome Opens – Early Access",
    description:
      "Resort guests get first entry. Start in the calm shoreline zone and let younger children warm up to the environment before exploring deeper.",
    icon: "🌊",
    type: "water",
  },
  {
    time: "10:30 AM",
    activity: "Biome Story Trail Exploration",
    description:
      "Follow the story trail through all five biomes. Activate hidden story moments together as a family. Look for the Diamond Cavern's hidden chest.",
    icon: "🗺️",
    type: "experience",
  },
  {
    time: "12:00 PM",
    activity: "Poolside Lunch Break",
    description:
      "Take a break at the Lava Falls Snack Bar for Minecraft-themed bites. Grab a shaded lounge chair in the Mesa Sunset section to relax.",
    icon: "🥪",
    type: "dining",
  },
  {
    time: "1:00 PM",
    activity: "Adventure Cove Wave Session",
    description:
      "Head to Adventure Cove for the gentle rolling waves. Perfect for older kids to try floating and body-surfing under the watchful eye of lifeguards.",
    icon: "🏄",
    type: "water",
  },
  {
    time: "2:30 PM",
    activity: "Interactive Water Cannon Challenge",
    description:
      "Team up at the water cannon stations to trigger hidden story events. The family that activates all four triggers unlocks a special dome light show.",
    icon: "⚡",
    type: "experience",
  },
  {
    time: "3:30 PM",
    activity: "Rest & Recharge",
    description:
      "Relax in the shaded terrace lounges. Light refreshments available. Great time for parents to plan dinner while kids wind down.",
    icon: "☀️",
    type: "rest",
  },
  {
    time: "4:00 PM",
    activity: "Central Wave Surge",
    description:
      "Experience the signature wave surge in the main dome chamber. Dynamic waves, jaw-dropping geometric cave theming, and pure water adventure.",
    icon: "💎",
    type: "water",
  },
  {
    time: "5:30 PM",
    activity: "Sunset Stroll & Photos",
    description:
      "Catch the golden hour along Aulani's Ko Olina beachfront. Perfect for family photos and a gentle wind-down before dinner.",
    icon: "🌅",
    type: "rest",
  },
  {
    time: "6:30 PM",
    activity: "Dinner at Ama Ama",
    description:
      "End the day at Aulani's signature beachfront restaurant. Fresh Pacific cuisine, spectacular ocean views, and a warm Hawaiʻi sunset to remember.",
    icon: "🍽️",
    type: "dining",
  },
];

export const threeDayItinerary: ItineraryDay[] = [
  {
    day: "Day 1",
    label: "Arrive & Discover",
    theme: "ocean",
    items: [
      {
        time: "Afternoon",
        activity: "Check-In & Resort Orientation",
        description:
          "Settle into your room, collect your Wave Dome map, and take a relaxed stroll through the resort grounds to get your bearings.",
        icon: "🏨",
        type: "arrival",
      },
      {
        time: "Late Afternoon",
        activity: "First Visit to the Wave Dome",
        description:
          "A gentle introduction — stay in the calm shoreline zone, explore the Jungle Misting Grove entrance, and let the magic sink in.",
        icon: "🌊",
        type: "water",
      },
      {
        time: "Evening",
        activity: "Lūʻau at Aulani",
        description:
          "Experience Disney's Aulani Lūʻau featuring traditional Hawaiian music, hula, and a feast under the stars.",
        icon: "🌺",
        type: "experience",
      },
    ],
  },
  {
    day: "Day 2",
    label: "Full Dome Day",
    theme: "teal",
    items: [
      {
        time: "Morning",
        activity: "Character Breakfast + Early Dome Access",
        description:
          "Meet characters at Makahiki, then head straight to the dome for early resort guest access before the crowds build.",
        icon: "🍳",
        type: "dining",
      },
      {
        time: "Mid-Morning",
        activity: "Complete Biome Story Trail",
        description:
          "Tackle all five biomes, activate every story moment, and attempt to unlock the full dome light show via the water cannon challenge.",
        icon: "🗺️",
        type: "experience",
      },
      {
        time: "Afternoon",
        activity: "Central Wave Surge + Adventure Cove",
        description:
          "Graduate to the main wave zones. Kids who loved the calm zone can try Adventure Cove; older kids tackle the Central Surge.",
        icon: "🏄",
        type: "water",
      },
      {
        time: "Evening",
        activity: "Beachfront Dinner & Stargazing",
        description:
          "Dine at Ama Ama with views of Ko Olina lagoon, then join Aulani's evening astronomy program on the beach.",
        icon: "⭐",
        type: "rest",
      },
    ],
  },
  {
    day: "Day 3",
    label: "Explore & Depart",
    theme: "jungle",
    items: [
      {
        time: "Morning",
        activity: "Last Wave Dome Session",
        description:
          "Revisit your family's favorite spots. Try anything you haven't yet — the Diamond Cavern Pools, Lava Flow Waterfall, or Pixel Climbing Boulders.",
        icon: "💎",
        type: "water",
      },
      {
        time: "Mid-Morning",
        activity: "Snorkeling at Waikolohe Pool",
        description:
          "Experience Aulani's famous snorkeling pool — a completely different water adventure to round out your resort stay.",
        icon: "🐠",
        type: "water",
      },
      {
        time: "Afternoon",
        activity: "Souvenir Shopping & Check-Out",
        description:
          "Browse the Aulani gift shops for Minecraft-themed Aulani merchandise, then check out and head home with memories for a lifetime.",
        icon: "🎁",
        type: "departure",
      },
    ],
  },
];
