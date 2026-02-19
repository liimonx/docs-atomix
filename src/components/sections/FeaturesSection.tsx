import { FC } from "react";
import {
  Card,
  Icon,
  Container,
  Row,
  GridCol,
  SectionIntro,
} from "@shohojdhara/atomix";

export const FeaturesSection: FC = () => {
  const features = [
    {
      title: "Accessible by Default",
      description:
        "All components follow WCAG 2.1 AA guidelines with full keyboard navigation and screen reader support.",
      icon: "Wheelchair",
      color: "blue",
    },
    {
      title: "Fully Customizable",
      description:
        "Easily theme and customize components using CSS custom properties and comprehensive styling options.",
      icon: "Palette",
      color: "purple",
    },
    {
      title: "TypeScript Support",
      description:
        "First-class TypeScript support with comprehensive type definitions for all components and props.",
      icon: "FileCode",
      color: "teal",
    },
    {
      title: "Responsive Design",
      description:
        "Mobile-first responsive components that work beautifully on all device sizes.",
      icon: "DeviceMobile",
      color: "green",
    },
    {
      title: "Performance Optimized",
      description:
        "Lightweight components with minimal bundle impact and efficient rendering strategies.",
      icon: "Lightning",
      color: "orange",
    },
    {
      title: "Developer Experience",
      description:
        "Comprehensive documentation, clear APIs, and consistent design patterns for rapid development.",
      icon: "Code",
      color: "red",
    },
  ];

  return (
    <section className="u-py-16">
      <Container>
        <SectionIntro
          title="Why Choose Atomix"
          text="Built for modern web applications with developers and designers in mind"
          className="u-text-center u-mb-12"
        />

        <Row className="u-gap-8">
          {features.map((feature, index) => (
            <GridCol key={index} xs={12} md={6} lg={4}>
              <Card className="u-h-100 u-p-8 u-transition-all u-cursor-pointer u-hover-transform-up">
                <div
                  className="u-flex u-align-items-center u-justify-center u-w-15 u-h-15 u-br-lg u-mb-6"
                  style={{ backgroundColor: "var(--atomix-color-bg-brand)" }}
                >
                  <Icon
                    name={feature.icon as any}
                    size="lg"
                    style={{ color: "var(--atomix-color-text-brand)" }}
                  />
                </div>
                <div>
                  <h3 className="u-fs-xl u-fw-semibold u-mb-3 u-color-text-primary">
                    {feature.title}
                  </h3>
                  <p className="u-text-secondary-emphasis u-line-height-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Container>
    </section>
  );
};
