import { FC } from "react";

import { Card, Badge } from "@shohojdhara/atomix";

interface Showcase {
  title: string;
  description: string;
  tags: string[];
  component: React.ReactNode;
}

interface ComponentShowcaseProps {
  showcases: Showcase[];
}

export const ComponentShowcaseGrid: FC<ComponentShowcaseProps> = ({
  showcases,
}) => {
  if (!showcases || showcases.length === 0) {
    return (
      <Card>
        <div className="card-body">
          <p className="u-text-muted u-mb-0">
            No showcases available for this component.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="u-mb-6">
      <h3 className="u-mb-4">Showcase</h3>
      <div className="u-flex u-flex-column u-gap-4">
        {showcases.map((showcase, index) => (
          <div key={index} className="u-flex u-flex-column u-gap-2">
            <h4 className="u-mb-0">{showcase.title}</h4>
            <p className="u-text-muted u-mb-2">{showcase.description}</p>
            <div className="u-flex u-flex-wrap u-gap-2">
              {showcase.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} label={tag} variant="secondary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="u-mt-2">{showcase.component}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};
