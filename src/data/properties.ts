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
      "/images/Nyhsha/Screenshot 2025-08-17 at 5.57.31ÔÇ»PM.png",
      "/images/Nyhsha/Screenshot 2025-08-17 at 5.57.50ÔÇ»PM.png",
      "/images/Nyhsha/Screenshot 2025-08-17 at 5.58.05ÔÇ»PM.png",
      "/images/Nyhsha/Screenshot 2025-08-17 at 5.58.28ÔÇ»PM.png",
      "/images/Nyhsha/Screenshot 2025-08-17 at 5.58.43ÔÇ»PM.png",
      "/images/Nyhsha/Screenshot 2025-08-17 at 5.58.56ÔÇ»PM.png",
      "/images/Nyhsha/Screenshot 2025-08-17 at 5.59.35ÔÇ»PM.png",
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
      "/images/The Golden Palm/Screenshot 2025-08-17 at 6.01.46ÔÇ»PM.png",
      "/images/The Golden Palm/Screenshot 2025-08-17 at 6.01.56ÔÇ»PM.png",
      "/images/The Golden Palm/Screenshot 2025-08-17 at 6.02.06ÔÇ»PM.png",
      "/images/The Golden Palm/Screenshot 2025-08-17 at 6.02.18ÔÇ»PM.png",
      "/images/The Golden Palm/Screenshot 2025-08-17 at 6.02.28ÔÇ»PM.png",
      "/images/The Golden Palm/Screenshot 2025-08-17 at 6.02.40ÔÇ»PM.png",
      "/images/The Golden Palm/Screenshot 2025-08-17 at 6.02.48ÔÇ»PM.png",
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
      "/images/The Silver Leaf/Screenshot 2025-08-17 at 6.05.34ÔÇ»PM.png",
      "/images/The Silver Leaf/Screenshot 2025-08-17 at 6.05.42ÔÇ»PM.png",
      "/images/The Silver Leaf/Screenshot 2025-08-17 at 6.05.50ÔÇ»PM.png",
      "/images/The Silver Leaf/Screenshot 2025-08-17 at 6.05.57ÔÇ»PM.png",
      "/images/The Silver Leaf/Screenshot 2025-08-17 at 6.06.07ÔÇ»PM.png",
      "/images/The Silver Leaf/Screenshot 2025-08-17 at 6.06.14ÔÇ»PM.png",
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