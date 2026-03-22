export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is the Minecraft Wave Dome?",
    answer:
      "The Minecraft Wave Dome is a signature indoor aquatic attraction at Aulani, A Disney Resort & Spa in Ko Olina, Hawaiʻi. It combines immersive Minecraft worldbuilding with Disney storytelling to create a one-of-a-kind indoor wave experience set inside a geometric dome inspired by Minecraft biomes. Guests of all ages can enjoy gentle wave currents, themed water play areas, and discoverable story moments woven throughout the environment.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Is the Minecraft Wave Dome suitable for young children?",
    answer:
      "Absolutely. The Minecraft Wave Dome is designed with families at its core. There are calm, shallow zones ideal for toddlers and young children aged 2 and up, along with gradual depth transitions clearly marked throughout the attraction. Parents can comfortably supervise from the water or from shaded poolside areas. Lifeguards are stationed throughout the dome at all times.",
    category: "Family",
  },
  {
    id: "faq-3",
    question: "What are the wave intensity levels?",
    answer:
      "The dome features multiple wave zones. Calm Shoreline zones have barely perceptible ripple effects perfect for toddlers and non-swimmers. Adventure Cove offers gentle rolling waves (1–2 ft) ideal for kids and adults who enjoy light wave action. The Central Surge zone features the most dynamic waves (up to 3.5 ft) for older kids and adults seeking more excitement. All zones are clearly marked with color-coded signage.",
    category: "Safety",
  },
  {
    id: "faq-4",
    question: "Do I need to be a Minecraft fan to enjoy this?",
    answer:
      "Not at all! While Minecraft fans will delight in the detailed world-building, pixel art details, and character references, the attraction is designed to be enjoyed by anyone. The Disney storytelling layer means every family member — regardless of gaming familiarity — can appreciate the narrative, the beautiful biome environments, and the water experience itself.",
    category: "General",
  },
  {
    id: "faq-5",
    question: "Is the Minecraft Wave Dome included with Aulani resort access?",
    answer:
      "Yes. The Minecraft Wave Dome is part of Aulani's signature aquatic complex and is included with your resort stay admission. Guests staying at Aulani, A Disney Resort & Spa have full access to the dome during operating hours. Day guests may purchase separate admission through Aulani's day guest passes, subject to availability.",
    category: "Pricing",
  },
  {
    id: "faq-6",
    question: "What are the operating hours?",
    answer:
      "The Minecraft Wave Dome typically operates from 9:00 AM to 6:00 PM daily, with extended hours during peak seasons. Hours may vary based on weather conditions, private events, or seasonal programming. We recommend checking Aulani's official website or the My Disney Experience app for the most current schedule before your visit.",
    category: "Planning",
  },
  {
    id: "faq-7",
    question: "Are life jackets available?",
    answer:
      "Yes. Complimentary U.S. Coast Guard-approved life jackets are available at no charge throughout the dome in a range of sizes for children and adults. Our Cast Members are happy to help fit guests with the appropriate size. Personal flotation devices from outside the resort are not permitted for safety consistency.",
    category: "Safety",
  },
  {
    id: "faq-8",
    question: "Is the attraction accessible for guests with disabilities?",
    answer:
      "Aulani is committed to accessibility. The Minecraft Wave Dome features sloped zero-entry access, a dedicated accessible entry lane, waterproof wheelchair assistance, and companion seating areas. Guests with mobility considerations are encouraged to speak with a Guest Services Cast Member prior to their visit to arrange any special accommodations needed.",
    category: "Accessibility",
  },
  {
    id: "faq-9",
    question: "Can we bring food and drinks into the dome?",
    answer:
      "Outside food and beverages are not permitted inside the dome. However, the nearby Waikolohe Valley dining area and Ama Ama Restaurant offer a wide range of dining options, and poolside beverage service is available. Designated snack areas with Minecraft-themed treats are located at the dome's entrance plaza.",
    category: "Planning",
  },
  {
    id: "faq-10",
    question: "What should we wear or bring?",
    answer:
      "Wear your favorite swimwear — rash guards are encouraged for extended sun protection. Water shoes are recommended for the rocky-textured pixel surfaces. Bring reef-safe sunscreen (required at all Aulani aquatic areas), a towel, and any personal swim aids. Lockers are available near the entrance. Leave valuables in your room safe.",
    category: "Planning",
  },
  {
    id: "faq-11",
    question: "Are there height or age restrictions?",
    answer:
      "There are no height restrictions for the general dome area. Some specific interactive elements and the Central Surge wave zone require swimmers to be at least 48 inches tall or accompanied by an adult. Children under 48 inches must wear a provided life jacket in the Adventure Cove and Central Surge zones. All children under age 12 must have adult supervision.",
    category: "Safety",
  },
  {
    id: "faq-12",
    question: "Can we book a private experience or character meet-and-greet?",
    answer:
      "Yes! Aulani offers special Minecraft Character Experience packages that can be booked through Disney's resort concierge. These include early-morning dome access before general opening, themed character appearances featuring Minecraft-inspired Disney character costumes, a dedicated Cast Member guide, and a commemorative photo package. Availability is limited — we recommend booking 60–90 days in advance.",
    category: "Special Experiences",
  },
];
