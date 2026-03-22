export const EDITABLE_CONTENT_STORAGE_KEY = "wave-dome-editable-content-v1";

export const EDITABLE_IMAGE_KEYS = [
  "heroImage",
  "overviewImage",
  "storyImage",
  "featureGridImage1",
  "featureGridImage2",
  "itineraryImage",
  "brochureImage",
  "galleryImage1",
  "galleryImage2",
  "galleryImage3",
] as const;

export type EditableImageKey = (typeof EDITABLE_IMAGE_KEYS)[number];

export interface EditableImageSlot {
  key: EditableImageKey;
  section: string;
  label: string;
  src: string;
  alt: string;
}

export const editableImageDefaults: Record<EditableImageKey, EditableImageSlot> = {
  heroImage: {
    key: "heroImage",
    section: "Hero",
    label: "Replace Hero Image",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    alt: "Family enjoying warm tropical waves during sunset",
  },
  overviewImage: {
    key: "overviewImage",
    section: "Overview",
    label: "Replace Overview Image",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium tropical resort pool with elegant architecture",
  },
  storyImage: {
    key: "storyImage",
    section: "Story World",
    label: "Replace Story Section Art",
    src: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1400&q=80",
    alt: "Dreamlike underwater glow with soft blue light",
  },
  featureGridImage1: {
    key: "featureGridImage1",
    section: "Features",
    label: "Replace Feature Grid Image 1",
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    alt: "Family splashing together in a lagoon zone",
  },
  featureGridImage2: {
    key: "featureGridImage2",
    section: "Features",
    label: "Replace Feature Grid Image 2",
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    alt: "Resort-inspired water play area at golden hour",
  },
  itineraryImage: {
    key: "itineraryImage",
    section: "Itinerary",
    label: "Replace Itinerary Image",
    src: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1400&q=80",
    alt: "Family planning a day of adventure by the water",
  },
  brochureImage: {
    key: "brochureImage",
    section: "Brochure",
    label: "Replace Brochure Preview Image",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    alt: "Ocean horizon at sunrise with cinematic clouds",
  },
  galleryImage1: {
    key: "galleryImage1",
    section: "Gallery",
    label: "Replace Gallery Image 1",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    alt: "Soft tropical waves rolling along a luminous shoreline",
  },
  galleryImage2: {
    key: "galleryImage2",
    section: "Gallery",
    label: "Replace Gallery Image 2",
    src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    alt: "Children and parents creating joyful vacation memories",
  },
  galleryImage3: {
    key: "galleryImage3",
    section: "Gallery",
    label: "Replace Gallery Image 3",
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant tropical cove with storybook lighting",
  },
};

export const editableImageList = EDITABLE_IMAGE_KEYS.map(
  (key) => editableImageDefaults[key],
);
