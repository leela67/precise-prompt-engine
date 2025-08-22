export type Property = {
  id: string;          // stable slug-friendly id
  title: string;       // display title
  address: string;
  bedrooms: number;
  bathrooms: number;
  price?: string;      // prices exist but DO NOT render on Featured Properties page
  images: string[];    // local image paths
  description?: string;
  details?: Array<{ label: string; value: string }>;
};

export const properties: Property[] = [
  {
    id: "naysha",
    title: "Naysha",
    address: "Premium Residential Complex, Hyderabad",
    bedrooms: 3,
    bathrooms: 3,
    price: "₹1.2 Cr onwards",
    images: [
      "/terranova/images/naysha/1.png",
      "/terranova/images/naysha/2.png",
      "/terranova/images/naysha/3.png",
      "/terranova/images/naysha/4.png",
      "/terranova/images/naysha/5.png",
      "/terranova/images/naysha/6.png",
      "/terranova/images/naysha/7.png",
      "/terranova/images/naysha/8.png",
    ],
    description: "Modern luxury apartments with contemporary design and premium amenities in the heart of Hyderabad. Naysha offers sophisticated living spaces with world-class facilities and excellent connectivity to major business districts.",
    details: [
      { label: "Project Type", value: "Residential Apartments" },
      { label: "Total Floors", value: "G+15" },
      { label: "Unit Types", value: "2BHK, 3BHK" },
      { label: "Amenities", value: "Gym, Pool, Clubhouse" },
      { label: "Location", value: "Prime Hyderabad" },
      { label: "Status", value: "Ready to Move" },
    ],
  },
  {
    id: "golden-palm",
    title: "The Golden Palm",
    address: "Luxury Villas, Hyderabad",
    bedrooms: 4,
    bathrooms: 4,
    price: "₹2.5 Cr onwards",
    images: [
      "/terranova/images/goldenleaf/1.png",
      "/terranova/images/goldenleaf/2.png",
      "/terranova/images/goldenleaf/3.png",
      "/terranova/images/goldenleaf/4.png",
      "/terranova/images/goldenleaf/5.png",
      "/terranova/images/goldenleaf/6.png",
      "/terranova/images/goldenleaf/7.png",
    ],
    description: "Exclusive villa community offering spacious homes with world-class facilities and serene surroundings. The Golden Palm represents the epitome of luxury living with premium amenities and thoughtful design in every detail.",
    details: [
      { label: "Project Type", value: "Independent Villas" },
      { label: "Plot Size", value: "200-300 sq yards" },
      { label: "Villa Types", value: "3BHK, 4BHK Duplex" },
      { label: "Amenities", value: "Clubhouse, Swimming Pool" },
      { label: "Location", value: "Gated Community" },
      { label: "Status", value: "Under Construction" },
    ],
  },
  {
    id: "silver-leaf",
    title: "The Silver Leaf",
    address: "Elite Residences, Hyderabad",
    bedrooms: 2,
    bathrooms: 2,
    price: "₹85 Lakh onwards",
    images: [
      "/terranova/images/silver/1.png",
      "/terranova/images/silver/2.png",
      "/terranova/images/silver/3.png",
      "/terranova/images/silver/4.png",
      "/terranova/images/silver/5.png",
      "/terranova/images/silver/6.png",
    ],
    description: "Sophisticated residential towers featuring elegant design and premium lifestyle amenities. The Silver Leaf offers modern living spaces with contemporary architecture and excellent connectivity to Hyderabad's key locations.",
    details: [
      { label: "Project Type", value: "High-rise Apartments" },
      { label: "Total Floors", value: "G+20" },
      { label: "Unit Types", value: "1BHK, 2BHK, 3BHK" },
      { label: "Amenities", value: "Sky Lounge, Fitness Center" },
      { label: "Location", value: "IT Corridor" },
      { label: "Status", value: "Launching Soon" },
    ],
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};