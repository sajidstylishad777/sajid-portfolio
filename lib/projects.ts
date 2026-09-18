export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  location: string;
  size: "wide" | "tall" | "large" | "small";
  variant: number;
  // Optional: add a real photo. Put the file in /public/images and set this
  // to "/images/your-file-name.jpg". If left out, a placeholder sketch is used.
  image?: string;
  // Optional: up to 3 extra photos shown in the project's gallery section.
  gallery?: string[];
  scope: string;
  concept: string;
  materials: string[];
  challenge: string;
  solution: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "Corporate Office2",
    name: "GRADIANT",
    category: "Corporate Office",
    year: "2025",
    location: "Abu Dhabi, UAE",
    
    image: "/images/gradiant.jpg",
    gallery: [
      "/images/Gradiantplan.png",
      "/images/Conference1.jpg",
      "/images/Conference2.jpg",
      "/images/Conference3.jpg",
      "/images/gradiant1.jpg",
      "/images/gradiant2.jpg",
      "/images/gradiant3.jpg",
      "/images/gradiant4.jpg",
      "/images/gradiant5.jpg",
      "/images/gradiant6.jpg",
      "/images/gradiant7.jpg",
      "/images/gradiant8.jpg",
      "/images/gradiant9.jpg",
      "/images/gradiant10.jpg",
      "/images/gradiant11.jpg",
    ],
    
    size: "large",
    variant: 1,
    scope: "Full interior fit-out for a 1800. SqM. Residential House spanning two floors.",
    concept: "A sophisticated luxury villa designed to create a seamless balance between modern elegance, comfort, and functionality. The concept combines clean architectural lines, premium materials, refined textures, and carefully planned lighting to create a timeless and luxurious atmosphere.",

    challenge: "The existing shell had a low finished-ceiling height and a dense column grid that threatened to fragment the open-plan layout.",
    solution: "Services were rerouted along a continuous ceiling datum to recover height, and columns were absorbed into millwork joinery so they read as intentional partitions rather than obstructions.",
    result: "A workplace that reduced perceived floor congestion by consolidating storage into the column joinery, with staff-reported satisfaction rising in the post-occupancy survey.",
    materials: []
  },
  {
    slug: "Cafe Interior",
    name: "Starbucks Cafe",
    category: "Restaurant Interior",
    year: "2022",
    location: "Al Jewn Tower,Abu Dhabi, UAE",
    image: "/images/Cafe-pro.jpg",
    gallery: [
      "/images/Starplan.png",
      "/images/Starbucks.png",
      "/images/DINING1.jpg",
      "/images/DINING2.jpg",
      "/images/DINING3.jpg",
    ],
    size: "tall",
    variant: 2,
    scope:
      "Concept interior design for a Starbucks cafe, including dining hall, private room and open exhibition kitchen.",
    concept:
      "A contemporary café interior designed to create a warm, inviting, and premium coffeehouse experience, combining natural materials with modern aesthetics. The concept focuses on extensive use of wooden furniture, timber claddings, and warm-toned finishes to establish a comfortable and welcoming atmosphere.",
    materials: [
      "Solid Wood Joinery",
      "Wooden Furnitures",
      "Mesh Ceiling",
      "Wooden Flooring",
    ],
    challenge:
      "Matching the specified wooden cladding, furniture finishes, and decorative materials with the approved design while maintaining the required quality.",
    solution:
      "Material samples were reviewed and approved in advance, and suitable alternatives were identified to avoid delays while maintaining the intended design appearance.",
    result:
      "Through effective site coordination, material planning, quality control, and close supervision, the project challenges were successfully managed while achieving the intended café concept and design aesthetics.",
  },
  {
    slug: "Corporate Office1",
    name: "Kent International Arabia LTD.",
    category: "Corporate Office",
    year: "2024",
    location: "2nd Floor, ABu Dhabi Mall, ABu Dhabi, UAE",
    image: "/images/kent.jpg",
    gallery: [
      "/images/Kent1.jpg",
      "/images/Kent2.jpg",
      "/images/Kent3.png",
      "/images/Kent4.jpg",
      "/images/Kent5.jpg",
      "/images/Kent6.jpg",
      "/images/Kent7.jpg",
      "/images/Kent8.jpg",
      "/images/Kent9.jpg",
      "/images/Kent10.jpg",
    ],
    size: "wide",
    variant: 3,
    scope:
      "A complete corporate office interior design and fit-out project developed to create a modern, professional, and highly functional workplace. The design focuses on maximizing space efficiency while providing a comfortable and inspiring environment for employees and visitors.",
    concept:
      "A modern open-plan corporate office designed around an industrial-inspired aesthetic, combining functionality, collaboration, and a contemporary workplace environment. The concept focuses on a spacious open workstation layout, allowing maximum flexibility, natural interaction, and efficient use of the available floor area.",
    materials: [
      "Carpet Flooring",
      "Furnitures with Wooden Finishes",
      "Electrical and Data Cabling",
      "HVAC Systems",
    ],
    challenge:
      "One of the key challenges during the project execution was coordinating the fit-out works with the Facility Management (FM) team, particularly because the office adopted an open industrial ceiling concept. Existing building services, MEP systems, access requirements, maintenance clearances, and FM regulations had to be carefully considered while implementing the new design.",
    solution:
      "Maintained continuous coordination with the Facility Management team through site inspections, technical discussions, coordinated drawings, and work approvals. Existing MEP services were carefully assessed before installation, and the open ceiling layout was coordinated to maintain proper access for future maintenance and servicing. Any site observations or FM comments were addressed promptly to avoid delays and rework.",
    result:
      "Successfully achieved the intended open industrial ceiling concept and open workstation layout while complying with building requirements and maintaining accessibility and functionality for ongoing Facility Management and maintenance.",
  },
  {
    slug: "Corporate Office",
    name: "Emirates Business Group (EBG)",
    category: "Real State Office",
    year: "2024",
    location: "Abu Dhabi, UAE",
    image: "/images/ebg.jpg",
    gallery: [
      "/images/ebgplan.png",
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
      "/images/30000.jpg",
      "/images/40000.jpg",
      "/images/60000.jpg",
      "/images/70000.jpg",
      "/images/80000.jpg",
    ],
    size: "small",
    variant: 4,
    scope:
      "The project included the complete interior development of reception and waiting areas, executive offices, meeting rooms, open workstations, manager cabins, staff areas, pantry, and supporting facilities. The interiors were enhanced with contemporary partitions, feature walls, custom joinery, ceiling designs, premium flooring, and coordinated lighting solutions.",
    concept:
      "A sophisticated luxury corporate office designed to combine elegance, functionality, and a strong professional identity. The concept focuses on creating a premium workplace environment through refined material selection, contemporary architectural detailing, and carefully layered lighting.",
    materials: [
      "Mix of Wooden and Carpet Flooring",
      "Gypsum Partitions",
      "Gypsum Decorative Ceilings",
      "Wall Claddings",
    ],
    challenge:
      "Integrating the new luxury design with existing building conditions and services while minimizing disruption.",
    solution:
      "Conducted a detailed site survey and planned the execution sequence carefully to identify constraints and avoid unnecessary rework.",
    result:
      "Through effective design coordination, FM collaboration, material control, and quality supervision, the project achieved the intended luxury corporate identity while maintaining functionality, build quality, and compliance with building requirements.",
  },
  {
    slug: "Library and Kids Play Area",
    name: "Aldar, Al Zeina",
    category: "Library and Kids Play Area",
    year: "2025",
    location: "ADNEC,Abu Dhabi, UAE",
    image: "/images/library.png",
    gallery: [
      "/images/CR-Plan.png",
      "/images/GR-Plan.png",
      "/images/CR-Mezzanine.png",
      "/images/GR-Mezzanine.png",
      "/images/Library1.png",
      "/images/Library2.png",
      "/images/Library3.png",
      "/images/Library4.png",
      "/images/Play1.png",
      "/images/Play2.png",
      "/images/Play3.png",
      "/images/Play4.png",
    ],
    size: "tall",
    variant: 5,
    scope:
      "A thoughtfully designed Library and Kids Play Area created to provide a welcoming, educational, and engaging environment for both children and families. The concept combines a calm reading atmosphere with a vibrant play zone, encouraging learning, creativity, exploration, and social interaction.",
    concept:
      "The library features comfortable reading spaces, organized book storage, child-friendly furniture, and dedicated study areas. Warm materials, soft textures, and carefully planned lighting create a peaceful environment that supports concentration and reading.",
    materials: [
      "Wooden Shelving and Furniture",
      "Smoked oak flooring",
      "Gypsum Ceilings with Profile Lighting and Track Lighting",
    ],
    challenge:
      "Designing a playful environment while minimizing potential risks from sharp edges, furniture, and play equipment.",
    solution:
      "Child-friendly furniture, rounded edges, safe materials, adequate circulation space, and appropriate protective finishes were incorporated throughout the design.",
    result:
      "The final design successfully combined learning, recreation, safety, and functionality, creating a welcoming environment where children can read, learn, play, and interact comfortably.",
  },
  {
    slug: "Residential Project",
    name: "Villa Ellysium",
    category: "Residential",
    year: "2022",
    location: "Dubai, UAE",
    image: "/images/Res-pro.jpg",
    gallery: [
      "/images/Ground.png",
      "/images/First.png",
      "/images/LV1.jpg",
      "/images/LV2.jpg",
      "/images/Bed2.jpg",
      "/images/Bed3.jpg",
      "/images/Kitchen.jpg",
      "/images/Master.jpg",
      "/images/Bedroom.png",
      "/images/AA-Elevation.png",
      "/images/BB-Elevation.png",
      "/images/CC-Elevation.png",
    ],
    size: "wide",
    variant: 6,
    scope:
      "Concept Design → Space Planning → Detailed Interior Design → 3D Visualization → Material Selection → Technical Drawings → MEP Coordination → Shop Drawing Review → Site Supervision & Design Coordination",
    concept:
      "A modern and functional corporate office interior designed to create a professional workplace while combining contemporary aesthetics with an industrial-inspired character. The design focuses on efficient space planning, visual connectivity, and a balanced combination of natural materials and modern architectural elements.",
    materials: [
      "HVAC Systems",
      "Wooden Louvre Partitions",
      "Glass Partitions",
      "Carpet Flooring",
    ],
    challenge:
      "Creating a seamless visual transition between the exposed industrial ceiling in the workstation area and the gypsum plain ceiling inside private offices.",
    solution:
      "Carefully coordinated ceiling levels, partitions, lighting, and service connections to create a clean and intentional transition between the two design styles.",
    result:
      "The project successfully achieved a modern corporate workplace combining industrial character with refined private office spaces, while maintaining functionality, MEP accessibility, Facility Management requirements, and the desired interior design quality.",
  },
  {
    slug: "Rest Interior",
    name: "El Chico Cafe",
    category: "Restaurant Interior",
    year: "2026",
    location: "Abu Dhabi, UAE",
    image: "/images/Rest.jpg",
    gallery: [
      "/images/Rest.jpg",
      "/images/Rest1.jpg",
      "/images/Rest2.jpg",
    ],
    size: "small",
    variant: 7,
    scope:
      "Concept interior design for a Starbucks cafe, including dining hall, private room and open exhibition kitchen.",
    concept:
      "A contemporary café interior designed to create a warm, inviting, and premium coffeehouse experience, combining natural materials with modern aesthetics. The concept focuses on extensive use of wooden furniture, timber claddings, and warm-toned finishes to establish a comfortable and welcoming atmosphere.",
    materials: [
      "Solid Wood Joinery",
      "Wooden Furnitures",
      "Mesh Ceiling",
      "Wooden Flooring",
    ],
    challenge:
      "Matching the specified wooden cladding, furniture finishes, and decorative materials with the approved design while maintaining the required quality.",
    solution:
      "Material samples were reviewed and approved in advance, and suitable alternatives were identified to avoid delays while maintaining the intended design appearance.",
    result:
      "Through effective site coordination, material planning, quality control, and close supervision, the project challenges were successfully managed while achieving the intended café concept and design aesthetics.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
