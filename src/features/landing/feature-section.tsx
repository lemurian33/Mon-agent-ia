"use client";
import { Typography } from "@/components/nowts/typography";
import { DotPattern } from "@/components/svg/dot-pattern";
import { Badge } from "@/components/ui/badge";
import { ClientMarkdown } from "@/features/markdown/client-markdown";
import type { ReactNode } from "react";
import Image from "next/image";
import { SectionLayout } from "./section-layout";

type FeatureLineProps = {
  badge: string;
  title: string;
  description: string;
  component?: ReactNode;
  image?: string;
};

export const FeaturesSection = ({
  features = [],
}: {
  features?: FeatureLineProps[];
}) => {
  return (
    <SectionLayout size="sm" className="relative" id="features">
      <div className="relative flex flex-col gap-16 lg:gap-28">
        <div className="flex flex-col items-center gap-2">
          <Badge>The features you NEED.</Badge>
          <Typography variant="h2" className="m-auto max-w-xl text-center">
            More than a post schedulure, we will help you <u>grow</u>.
          </Typography>
          <Typography variant="muted" className="m-auto max-w-lg text-center text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>
        {features.map((f, i) => (
          <FeatureLine key={i} {...f} />
        ))}
      </div>
    </SectionLayout>
  );
};

const FeatureLine = (props: FeatureLineProps) => {
  return (
    <div className="flex items-center gap-4 odd:flex-row-reverse max-lg:!flex-col">
      <div className="flex flex-1 flex-col items-start gap-2">
        <Badge color="pink">{props.badge}</Badge>
        <Typography variant="h3">{props.title}</Typography>
        <ClientMarkdown className="prose-sm">{props.description}</ClientMarkdown>
      </div>
      <div className="w-full max-w-sm">
        <DotPattern>
          {props.image ? (
            <Image
              src={props.image}
              alt={props.title}
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
          ) : (
            props.component
          )}
        </DotPattern>
      </div>
    </div>
  );
};