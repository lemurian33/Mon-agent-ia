import { OllamaModels } from "@/features/solutions/ollama-models";
import { FeaturesSection } from "@/features/landing/feature-section";

const features = [
  {
    badge: "Scheduling",
    title: "Plan your content effortlessly",
    description: "Schedule posts across all platforms from a single dashboard.",
    image: "/images/dashboard-admin-devis.jpg",
  },
  {
    badge: "Analytics",
    title: "Track your performance",
    description: "Get detailed insights on your posts and audience growth.",
    image: "/images/dashboard-admin.jpg",
  },
  {
    badge: "AI Writing",
    title: "Write better content faster",
    description: "Let AI suggest, rewrite and optimize your posts for engagement.",
    image: "/images/dashboard-admin-articles.jpg",
  },
  {
    badge: "Collaboration",
    title: "Work with your team",
    description: "Invite members, assign roles and review content before publishing.",
    image: "/images/colaborate.jpg",
  },
];

function Page() {
  return (
    <>
      <FeaturesSection features={features} />
      <OllamaModels />
    </>
  );
}

export default Page;