import React from 'react';
import { Card, Icon } from '@shohojdhara/atomix';
import type { ComponentDocumentation } from '@/types/index';

interface AccessibilityGuideProps {
  component: ComponentDocumentation;
}

export const AccessibilityGuide: React.FC<AccessibilityGuideProps> = ({ component }) => {
  const accessibility = component.accessibility;

  if (!accessibility) {
    return (
      <div className="accessibility-guide empty">
        <p>No accessibility information available for this component.</p>
      </div>
    );
  }

  return (
    <div className="accessibility-guide">
      <section className="a11y-overview">
        <h2>Accessibility Overview</h2>
        <p>{accessibility.overview}</p>
      </section>

      {accessibility.keyboardSupport && accessibility.keyboardSupport.length > 0 && (
        <section className="keyboard-support">
          <h2>Keyboard Support</h2>
          <div className="keyboard-grid">
            {accessibility.keyboardSupport.map((item, index) => (
              <Card key={index} className="keyboard-item">
                <div className="keyboard-key">
                  <kbd>{item.key}</kbd>
                </div>
                <div className="keyboard-description">
                  <p>{item.action}</p>
                  {item.context && <small>{item.context}</small>}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {accessibility.ariaAttributes && accessibility.ariaAttributes.length > 0 && (
        <section className="aria-attributes">
          <h2>ARIA Attributes</h2>
          <div className="aria-table">
            <table>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                  <th>Description</th>
                  <th>Required</th>
                </tr>
              </thead>
              <tbody>
                {accessibility.ariaAttributes.map((attr, index) => (
                  <tr key={index}>
                    <td><code>{attr.attribute}</code></td>
                    <td><code>{attr.defaultValue ?? '-'}</code></td>
                    <td>{attr.description}</td>
                    <td>
                      {attr.required ? (
                        <Icon name="Check" size="sm" className="required-icon" />
                      ) : (
                        <Icon name="X" size="sm" className="optional-icon" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="additional-info">
        <h2>Additional Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>Screen Reader Support</h3>
            <p>{accessibility.screenReaderSupport || 'Not specified'}</p>
          </div>
          
          <div className="info-item">
            <h3>Focus Management</h3>
            <p>{accessibility.focusManagement || 'Not specified'}</p>
          </div>
          
          <div className="info-item">
            <h3>Color Contrast</h3>
            <p>
              {accessibility.colorContrastCompliant 
                ? '✅ Compliant with WCAG 2.1 AA standards' 
                : '⚠️ May not meet WCAG 2.1 AA standards'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};