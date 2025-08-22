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
    id: "780-palm-island-drive-miami-beach-fl",
    title: "780 Palm Island Drive",
    address: "Miami Beach, FL",
    bedrooms: 6,
    bathrooms: 7.5,
    price: "$8,750,000",
    images: [
      "/images/780-palm/1.jpg",
      "/images/780-palm/2.jpg",
      "/images/780-palm/3.jpg",
      "/images/780-palm/4.jpg",
    ],
    description: "Nestled on prestigious Palm Island Drive, this extraordinary waterfront estate represents the pinnacle of Miami Beach luxury living. This architectural masterpiece offers unparalleled sophistication with panoramic bay views and world-class amenities throughout its expansive layout.",
    details: [
      { label: "Lot Size", value: "12,000 sq ft" },
      { label: "Year Built", value: "2022" },
      { label: "Property Type", value: "Single Family" },
      { label: "Parking", value: "3-car garage" },
      { label: "Pool", value: "Infinity pool with spa" },
      { label: "Waterfront", value: "Direct bay access" },
    ],
  },
  {
    id: "1425-sunset-plaza-west-hollywood-ca",
    title: "1425 Sunset Plaza Drive",
    address: "West Hollywood, CA",
    bedrooms: 4,
    bathrooms: 5,
    price: "$5,950,000",
    images: [
      "/images/1425-sunset/1.jpg",
      "/images/1425-sunset/2.jpg",
      "/images/1425-sunset/3.jpg",
      "/images/1425-sunset/4.jpg",
      "/images/1425-sunset/5.jpg",
    ],
    description: "Perched high in the coveted Sunset Plaza, this contemporary masterpiece offers breathtaking city and canyon views. The open-concept design seamlessly blends indoor and outdoor living, creating the perfect environment for both intimate gatherings and grand entertaining.",
    details: [
      { label: "Lot Size", value: "8,500 sq ft" },
      { label: "Year Built", value: "2021" },
      { label: "Property Type", value: "Single Family" },
      { label: "Parking", value: "2-car garage + guest" },
      { label: "Pool", value: "Saltwater pool" },
      { label: "View", value: "City & canyon views" },
    ],
  },
  {
    id: "2870-benedict-canyon-beverly-hills-ca",
    title: "2870 Benedict Canyon Drive",
    address: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 6,
    price: "$12,500,000",
    images: [
      "/images/2870-benedict/1.jpg",
      "/images/2870-benedict/2.jpg",
      "/images/2870-benedict/3.jpg",
      "/images/2870-benedict/4.jpg",
      "/images/2870-benedict/5.jpg",
      "/images/2870-benedict/6.jpg",
    ],
    description: "A rare opportunity in the prestigious Benedict Canyon, this magnificent estate sits on a prime lot offering complete privacy and serenity. The sophisticated architecture harmonizes classic elegance with modern luxury, featuring premium finishes and state-of-the-art amenities throughout.",
    details: [
      { label: "Lot Size", value: "15,000 sq ft" },
      { label: "Year Built", value: "2023" },
      { label: "Property Type", value: "Single Family" },
      { label: "Parking", value: "4-car garage" },
      { label: "Pool", value: "Resort-style pool & spa" },
      { label: "Features", value: "Wine cellar, gym, theater" },
    ],
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};