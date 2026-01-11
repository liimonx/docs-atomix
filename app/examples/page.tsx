"use client";

import Link from "next/link";
import { Button } from "@shohojdhara/atomix";

export default function ExamplesIndexPage() {
  const examples = [
    {
      title: "Landing Page",
      description: "A modern, responsive landing page with various sections and components",
      path: "/examples/landing-page",
      featured: true
    },
    {
      title: "Dashboard",
      description: "An admin dashboard with charts, tables, and statistics",
      path: "/examples/dashboard",
      featured: false
    },
    {
      title: "E-commerce",
      description: "A product catalog with shopping cart and checkout flow",
      path: "/examples/ecommerce",
      featured: false
    }
  ];

  return (
    <div className="u-container u-pt-10 u-pb-16">
      <div className="u-text-center u-mb-12">
        <h1 className="u-fs-4xl u-fw-bold u-mb-3">Example Applications</h1>
        <p className="u-fs-lg u-text-secondary-emphasis">
          Browse sample applications built with Atomix to inspire your next project
        </p>
      </div>

      <div className="u-row">
        {examples.map((example, index) => (
          <div key={index} className={`u-col-${example.featured ? '12' : '12'} u-col-md-${example.featured ? '12' : '6'} u-col-lg-${example.featured ? '12' : '4'} u-mb-6`}>
            <div className="u-card u-h-100 u-p-5 u-rounded-lg u-border u-border-border">
              <h3 className="u-fs-xl u-fw-bold u-mb-2">{example.title}</h3>
              <p className="u-text-secondary-emphasis u-mb-3">{example.description}</p>
              <Button 
                variant="primary" 
                LinkComponent={Link} 
                href={example.path}
                className="u-mt-2"
              >
                View Example
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="u-text-center u-mt-10">
        <p className="u-text-secondary-emphasis u-mb-4">Don't see what you're looking for?</p>
        <Button 
          variant="outline-primary" 
          href="https://github.com/Shohojdhara/atomix/issues"
          target="_blank"
        >
          Request an Example
        </Button>
      </div>
    </div>
  );
}