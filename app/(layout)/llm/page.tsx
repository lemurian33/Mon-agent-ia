import React from 'react';
import { OllamaModels } from "@/features/solutions/ollama-models";
import { FeaturesSection} from "@/features/landing/feature-section";

function page() {
  return (
    <>
      <FeaturesSection/>
      <OllamaModels />
    </>
  );
}

export default page;