import { FC } from "react";

import { Card, Icon, Row, GridCol } from "@shohojdhara/atomix";
import type { ComponentDocumentation } from "@/types/index";

interface AccessibilityGuideProps {
  component: ComponentDocumentation;
}

export const AccessibilityGuide: FC<AccessibilityGuideProps> = ({
  component,
}) => {
  const accessibility = component.accessibility;

  if (!accessibility) {
    return (
      <Card className="u-p-6 u-text-center">
        <p className="u-text-secondary-emphasis">
          No accessibility information available for this component.
        </p>
      </Card>
    );
  }

  return (
    <div className="u-mb-6">
      <section className="u-mb-8">
        <h2 className="u-fs-2xl u-fw-bold u-mb-3">Accessibility Overview</h2>
        <p className="u-text-secondary-emphasis">{accessibility.overview}</p>
      </section>

      {accessibility.keyboardSupport &&
        accessibility.keyboardSupport.length > 0 && (
          <section className="u-mb-8">
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Keyboard Support</h2>
            <Row>
              {accessibility.keyboardSupport.map((item, index) => (
                <GridCol key={index} md={6} lg={4}>
                  <Card className="u-p-4">
                    <div className="u-flex u-align-items-start u-gap-3">
                      <div className="u-bg-tertiary u-p-2 u-br-sm">
                        <kbd className="u-fs-sm u-fw-semibold u-m-0">
                          {item.key}
                        </kbd>
                      </div>
                      <div className="u-flex-grow-1">
                        <p className="u-m-0 u-mb-1">{item.action}</p>
                        {item.context && (
                          <small className="u-fs-sm u-text-secondary-emphasis">
                            {item.context}
                          </small>
                        )}
                      </div>
                    </div>
                  </Card>
                </GridCol>
              ))}
            </Row>
          </section>
        )}

      {accessibility.ariaAttributes &&
        accessibility.ariaAttributes.length > 0 && (
          <section className="u-mb-8">
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">ARIA Attributes</h2>
            <Card className="u-p-0 u-overflow-hidden">
              <div className="u-overflow-x-auto">
                <table
                  className="u-w-100"
                  style={{ borderCollapse: "collapse" }}
                >
                  <thead className="u-bg-tertiary">
                    <tr>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">
                        Attribute
                      </th>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">
                        Value
                      </th>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">
                        Description
                      </th>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">
                        Required
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {accessibility.ariaAttributes.map((attr, index) => (
                      <tr key={index} className="u-border-b u-border-subtle">
                        <td className="u-p-3">
                          <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">
                            {attr.attribute}
                          </code>
                        </td>
                        <td className="u-p-3">
                          <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">
                            {attr.defaultValue ?? "-"}
                          </code>
                        </td>
                        <td className="u-p-3 u-text-secondary-emphasis">
                          {attr.description}
                        </td>
                        <td className="u-p-3">
                          {attr.required ? (
                            <Icon
                              name="Check"
                              size="sm"
                              className="u-text-success"
                            />
                          ) : (
                            <Icon
                              name="X"
                              size="sm"
                              className="u-text-secondary-emphasis"
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>
        )}

      <section className="u-mb-8">
        <h2 className="u-fs-2xl u-fw-bold u-mb-4">Additional Information</h2>
        <Row>
          <GridCol md={6} lg={4}>
            <Card className="u-p-4">
              <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                Screen Reader Support
              </h3>
              <p className="u-text-secondary-emphasis u-m-0">
                {accessibility.screenReaderSupport || "Not specified"}
              </p>
            </Card>
          </GridCol>

          <GridCol md={6} lg={4}>
            <Card className="u-p-4">
              <h3 className="u-fs-lg u-fw-semibold u-mb-2">Focus Management</h3>
              <p className="u-text-secondary-emphasis u-m-0">
                {accessibility.focusManagement || "Not specified"}
              </p>
            </Card>
          </GridCol>

          <GridCol md={6} lg={4}>
            <Card className="u-p-4">
              <h3 className="u-fs-lg u-fw-semibold u-mb-2">Color Contrast</h3>
              <p className="u-m-0">
                {accessibility.colorContrastCompliant
                  ? "✅ Compliant with WCAG 2.1 AA standards"
                  : "⚠️ May not meet WCAG 2.1 AA standards"}
              </p>
            </Card>
          </GridCol>
        </Row>
      </section>
    </div>
  );
};
