import { ProjectItem } from "../types";

/**
 * M INSTALLATIONS — PROJECT GALLERY DATA
 *
 * Fotografías reales almacenadas en:
 * /public/images/projects/
 *
 * Proyecto 6 conserva su imagen SVG temporalmente.
 */

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    titleKey: "projects.items.proj1Title",
    category: "commercial",
    descriptionKey: "projects.items.proj1Desc",
    image: "/images/projects/10.jpg",
    tags: ["Commercial", "Security Cameras", "IP System"],
    metrics: "Multi-point IP surveillance",
    iconType: "camera",
  },
  {
    id: "proj-2",
    titleKey: "projects.items.proj2Title",
    category: "residential",
    descriptionKey: "projects.items.proj2Desc",
    image: "/images/projects/7.jpg",
    tags: ["Residential", "Security Cameras", "Driveway"],
    metrics: "Perimeter & entryway coverage",
    iconType: "residential-camera",
  },
  {
    id: "proj-3",
    titleKey: "projects.items.proj3Title",
    category: "audio-displays",
    descriptionKey: "projects.items.proj3Desc",
    image: "/images/projects/6.jpg",
    tags: ["Residential", "Audio & Displays", "Wire Concealment"],
    metrics: "Concealed in-wall cabling",
    iconType: "tv",
  },
  {
    id: "proj-4",
    titleKey: "projects.items.proj4Title",
    category: "commercial",
    descriptionKey: "projects.items.proj4Desc",
    image: "/images/projects/13.jpg",
    tags: ["Commercial", "Cabling", "Rack Integration"],
    metrics: "Structured Cat6 network drops",
    iconType: "network",
  },
  {
    id: "proj-5",
    titleKey: "projects.items.proj5Title",
    category: "audio-displays",
    descriptionKey: "projects.items.proj5Desc",
    image: "/images/projects/5.jpg",
    tags: ["Commercial", "Audio & Displays", "Multi-zone"],
    metrics: "Multi-screen & background audio",
    iconType: "audio",
  },
  {
    id: "proj-6",
    titleKey: "projects.items.proj6Title",
    category: "commercial",
    descriptionKey: "projects.items.proj6Desc",
    image: "/images/projects/2.jpeg",
    tags: ["Commercial", "Access Control", "Keypad"],
    metrics: "Magnetic lock & secure access",
    iconType: "access",
  },
];
