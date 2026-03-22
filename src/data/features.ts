export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  color?: string;
}

export const features: Feature[] = [
  {
    id: "feat-1",
    icon: "🌊",
    title: "Central Wave Surge",
    description:
      "The heart of the dome — a dynamic wave generator producing rolling waves up to 3.5 ft, set within a cathedral-like geometric cave structure.",
    badge: "Signature",
    color: "ocean",
  },
  {
    id: "feat-2",
    icon: "🏖️",
    title: "Calm Shoreline Entry",
    description:
      "Zero-depth entry with gentle ripples, pixel-stone textures underfoot, and shallow pools perfect for toddlers and first-time wave explorers.",
    color: "teal",
  },
  {
    id: "feat-3",
    icon: "🗺️",
    title: "Biome Story Trail",
    description:
      "A narrated water trail winding through five distinct Minecraft biomes — from lush jungle to mesa canyon — each with unique theming and water features.",
    badge: "Story-Driven",
    color: "jungle",
  },
  {
    id: "feat-4",
    icon: "💎",
    title: "Diamond Cavern Pools",
    description:
      "Glowing geometric cave formations frame these tranquil deep-blue pools, illuminated with soft LED crystal light for an otherworldly atmosphere.",
    color: "ocean",
  },
  {
    id: "feat-5",
    icon: "🌋",
    title: "Lava Flow Waterfall",
    description:
      "A towering pixel-art lava cascade that transitions into a cool tropical waterfall — a dramatic photo moment and refreshing splash zone.",
    badge: "Family Favorite",
    color: "gold",
  },
  {
    id: "feat-6",
    icon: "🧱",
    title: "Pixel Climbing Boulders",
    description:
      "Oversized foam Minecraft blocks and climbing structures rise from the shallow zone, encouraging imaginative climbing play for young adventurers.",
    color: "sand",
  },
  {
    id: "feat-7",
    icon: "🐠",
    title: "Coral Reef Snorkel Zone",
    description:
      "A Minecraft-styled coral reef visible through underwater windows in the calm zone — kids can observe colorful pixel-fish art from above the water.",
    color: "teal",
  },
  {
    id: "feat-8",
    icon: "⚡",
    title: "Interactive Water Cannons",
    description:
      "Jungle-themed water cannon stations let guests control streams of water aimed at targets across the attraction, triggering hidden story events.",
    badge: "Interactive",
    color: "jungle",
  },
  {
    id: "feat-9",
    icon: "🌅",
    title: "Mesa Sunset Lounges",
    description:
      "Elevated terrace-style lounging areas styled as Minecraft mesa biome formations — shaded, comfortable, and perfectly positioned for watching the waves.",
    color: "sand",
  },
  {
    id: "feat-10",
    icon: "🎭",
    title: "Discoverable Story Moments",
    description:
      "Hidden throughout the dome are interactive story beats — touch panels, sound activations, and visual triggers that reveal chapters of the Minecraft world's narrative.",
    badge: "Hidden Gems",
    color: "gold",
  },
  {
    id: "feat-11",
    icon: "🏄",
    title: "Adventure Cove Waves",
    description:
      "The mid-intensity wave zone between calm shorelines and the central surge — ideal for families and older children learning to body surf and float.",
    color: "ocean",
  },
  {
    id: "feat-12",
    icon: "🌿",
    title: "Jungle Misting Grove",
    description:
      "A lush pixel-jungle walkway with overhead misting arches leads to the dome entrance — setting the scene before guests even touch the water.",
    color: "jungle",
  },
];
