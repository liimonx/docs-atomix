"use client";

import Link from "next/link";
import { HomePageLayout } from "@/components/layout/HomePageLayout";
import {
  Hero,
  Block,
  Card,
  Button,
  Icon,
  GridCol,
  SectionIntro,
  AtomixGlass,
  Grid,
  Callout,
  Badge,
  List,
} from "@shohojdhara/atomix";

export default function ExampleLandingPage() {
  // Stats for the overview section
  const stats = [
    {
      label: "Active Users",
      value: "10K+",
      icon: "Users" as const,
      color: "primary" as const,
      description: "Happy customers using our platform daily",
    },
    {
      label: "Projects",
      value: "500+",
      icon: "Folder" as const,
      color: "success" as const,
      description: "Successfully completed projects",
    },
    {
      label: "Countries",
      value: "80+",
      icon: "Globe" as const,
      color: "info" as const,
      description: "Serving clients worldwide",
    },
    {
      label: "Awards",
      value: "12",
      icon: "Medal" as const,
      color: "warning" as const,
      description: "Industry recognition and awards",
    },
  ];

  // Features of the app
  const features = [
    {
      icon: <Icon name="Lightning" />,
      title: "Lightning Fast",
      description:
        "Built with performance in mind, ensuring the fastest experience for your users.",
    },
    {
      icon: <Icon name="Lock" />,
      title: "Secure by Default",
      description:
        "Enterprise-grade security with end-to-end encryption and secure authentication.",
    },
    {
      icon: <Icon name="Gear" />,
      title: "Fully Customizable",
      description:
        "Tailor every aspect of the application to match your unique business needs.",
    },
    {
      icon: <Icon name="ChartLine" />,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with our powerful analytics and reporting tools.",
    },
    {
      icon: <Icon name="DeviceMobile" />,
      title: "Mobile Optimized",
      description:
        "Seamless experience across all devices with responsive design.",
    },
    {
      icon: <Icon name="ShareNetwork" />,
      title: "Easy Integration",
      description:
        "Connect with your favorite tools and services through our API.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CTO at TechCorp",
      quote:
        "This platform transformed how we work. The efficiency gains have been remarkable.",
      avatar: "AJ",
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      quote:
        "Intuitive interface and powerful features. It's a game-changer for our team.",
      avatar: "SW",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      quote: "Perfect solution for scaling our operations. Worth every penny!",
      avatar: "MC",
    },
  ];

  // Pricing plans
  const pricingPlans = [
    {
      title: "Starter",
      price: "$19",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "Standard components",
      ],
      popular: false,
    },
    {
      title: "Professional",
      price: "$49",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Premium components",
        "Custom branding",
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "24/7 dedicated support",
        "Premium components",
        "Custom branding",
        "API access",
        "Single sign-on",
      ],
      popular: false,
    },
  ];

  // FAQ section
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Simply sign up for an account and follow our guided onboarding process.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for non-profit organizations.",
    },
  ];

  return (
    <HomePageLayout>
      {/* Hero Section with enhanced styling */}
      <Hero
        className="u-pt-52 u-pb-40"
        subtitle="The Ultimate Solution"
        title="Transform Your Business with Our Platform"
        text="A powerful, customizable platform designed to help you achieve your goals faster and more efficiently. Join thousands of satisfied users who have already transformed their workflow."
        alignment="center"
        contentWidth="1200px"
        actions={
          <div className="u-flex u-flex-wrap u-justify-center u-gap-3">
            <Button
              variant="primary"
              icon={<Icon name="Rocket" />}
              href="#features"
              LinkComponent={Link}
            >
              Explore Features
            </Button>
            <Button
              variant="outline-light"
              icon={<Icon name="Play" />}
              href="#demo"
            >
              Watch Demo
            </Button>
          </div>
        }
      />

      {/* Stats Section with enhanced styling */}
      <Block>
        <SectionIntro
          title="Trusted by Thousands"
          text="Our platform delivers exceptional value to businesses worldwide"
          alignment="center"
          className="u-pt-0"
        />
        <Grid>
          {stats.map((stat, index) => (
            <GridCol key={index} sm={6} lg={3} className="u-mb-6">
              <Card
                title={stat.value}
                text={stat.label}
                icon={<Icon name={stat.icon as any} size={24} />}
                className="u-h-100"
                row
              />
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* Features Section */}
      <Block id="features">
        <SectionIntro
          title="Powerful Features"
          text="Everything you need to streamline operations and boost productivity"
          alignment="center"
        />
        <Grid>
          {features.map((feature, index) => (
            <GridCol key={index} md={6} lg={4} className="u-mb-6">
              <Card
                title={feature.title}
                text={feature.description}
                icon={feature.icon}
                className="u-h-100"
              />
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* How It Works Section with Steps */}
      <Block>
        <SectionIntro
          title="How It Works"
          text="Get started in just three simple steps"
          alignment="center"
        />
        <div className="u-flex u-flex-column u-gap-4 u-mt-8">
          {[
            { title: "Sign Up", description: "Create your account in seconds" },
            { title: "Configure", description: "Customize to fit your needs" },
            { title: "Launch", description: "Go live and start growing" },
          ].map((step, index) => (
            <Card key={index} className="u-p-6">
              <h3 className="u-mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </Block>

      {/* Testimonials Section */}
      <Block className="u-pt-20 u-pb-20" background="secondary">
        <SectionIntro
          title="What Our Customers Say"
          text="Hear from professionals who trust our platform daily"
          alignment="center"
        />
        <Grid>
          {testimonials.map((testimonial, index) => (
            <GridCol key={index} md={4} className="u-mb-6">
              <Card
                title={testimonial.name}
                text={testimonial.quote}
                icon={
                  <div className="u-flex u-align-items-center u-justify-center u-rounded-circle u-bg-primary u-text-white u-w-10 u-h-10 u-mb-3">
                    {testimonial.avatar}
                  </div>
                }
                className="u-h-100"
              />
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* Feature Showcase with Static Content (Tabs alternative) */}
      <Block>
        <SectionIntro
          title="Feature Showcase"
          text="See our powerful features in action"
          alignment="center"
        />
        <div className="u-grid u-grid-cols-1 u-gap-6 md:u-grid-cols-3">
          <div className="u-p-4 u-bg-primary-1 u-br-lg u-border u-border-border">
            <h3 className="u-text-xl u-font-bold u-mb-3 u-text-primary">
              Advanced Analytics
            </h3>
            <p className="u-text-secondary-emphasis u-mb-4">
              Monitor your business metrics in real-time with our comprehensive
              analytics suite.
            </p>
            <div className="u-flex u-gap-2 u-flex-wrap">
              <Badge label="Real-time" variant="primary" />
              <Badge label="AI-Powered" variant="success" />
              <Badge label="Custom Reports" variant="info" />
            </div>
          </div>

          <div className="u-p-4 u-bg-success-1 u-br-lg u-border u-border-border">
            <h3 className="u-text-xl u-font-bold u-mb-3 u-text-success">
              Enterprise Security
            </h3>
            <p className="u-text-secondary-emphasis u-mb-4">
              Protect your data with military-grade encryption and advanced
              security protocols.
            </p>
            <List>
              <li>End-to-end encryption</li>
              <li>Two-factor authentication</li>
              <li>Regular security audits</li>
              <li>Compliance certifications</li>
            </List>
          </div>

          <div className="u-p-4 u-bg-warning-1 u-br-lg u-border u-border-border">
            <h3 className="u-text-xl u-font-bold u-mb-3 u-text-warning">
              Seamless Integrations
            </h3>
            <p className="u-text-secondary-emphasis u-mb-4">
              Connect with over 200+ popular apps and services to streamline
              your workflow.
            </p>
            <div className="u-grid u-grid-cols-2 u-gap-2">
              <Badge label="Slack" variant="secondary" />
              <Badge label="Salesforce" variant="secondary" />
              <Badge label="Google Workspace" variant="secondary" />
              <Badge label="Microsoft Teams" variant="secondary" />
            </div>
          </div>
        </div>
      </Block>

      {/* Pricing Section */}
      <Block id="pricing">
        <SectionIntro
          title="Simple, Transparent Pricing"
          text="Choose the plan that works best for your team"
          alignment="center"
        />
        <Grid>
          {pricingPlans.map((plan, index) => (
            <GridCol key={index} md={4} className="u-mb-6">
              {plan.popular && (
                <div className="u-text-center u-mb-3">
                  <Badge label="Most Popular" variant="primary" />
                </div>
              )}
              <Card
                title={plan.title}
                text={plan.description}
                className={`u-h-100 ${
                  plan.popular ? "u-border-2 u-border-primary" : ""
                }`}
              >
                <div className="u-mb-4">
                  <span className="u-text-4xl u-font-bold u-text-primary">
                    {plan.price}
                  </span>
                  <span className="u-text-secondary-emphasis">
                    /{plan.period}
                  </span>
                </div>
                <ul className="u-list-unstyled u-mb-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="u-flex u-align-items-center u-mb-2"
                    >
                      <Icon name="Check" className="u-text-success u-mr-2" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "primary" : "outline-primary"}
                  className="u-w-100"
                >
                  Get Started
                </Button>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* FAQ Section */}
      <Block>
        <SectionIntro
          title="Frequently Asked Questions"
          text="Find answers to common questions about our platform"
          alignment="center"
        />
        <div className="u-mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="u-mb-4">
              <h4 className="u-text-lg u-font-semibold u-mb-2 u-text-primary">
                {faq.question}
              </h4>
              <p className="u-text-secondary-emphasis">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* CTA Section */}
      <Block
        className="u-overflow-hidden"
        style={{
          background: "var(--atomix-primary-gradient)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 20%), 
                              radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 0%, transparent 20%)`,
            pointerEvents: "none",
          }}
        />
        <AtomixGlass
          displacementScale={150}
          blurAmount={1.5}
          mode="shader"
          shaderVariant="premiumGlass"
          borderRadius={32}
          withBorder={true}
          padding="4rem 3rem"
          saturation={200}
          elasticity={0}
        >
          <div className="u-text-center">
            <h2 className="u-text-3xl u-font-700 u-mb-4 u-text-primary-emphasis">
              Ready to Transform Your Business?
            </h2>
            <p className="u-text-xl u-text-secondary-emphasis u-lh-relaxed u-mb-5 u-max-w-3xl u-mx-auto">
              Join thousands of satisfied customers and experience the
              difference today.
            </p>
            <div className="u-flex u-flex-wrap u-justify-center u-gap-3 u-mt-6">
              <Button
                variant="primary"
                icon={<Icon name="Rocket" />}
                href="/examples/landing-page"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline-light"
                icon={<Icon name="ChatTeardrop" />}
                href="/examples/landing-page"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </AtomixGlass>
      </Block>

      {/* Final Info Callout */}
      <Block>
        <Callout variant="info" title="Need a custom solution?">
          Our team of experts can help you build a tailored solution that fits
          your unique business requirements.
        </Callout>
      </Block>
    </HomePageLayout>
  );
}
