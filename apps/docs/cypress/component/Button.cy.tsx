import React from "react";
import { Button } from "@/registry/ui/react/button";

describe('Button.cy.tsx', () => {
  it('renders with default props', () => {
    cy.mount(<Button>Default Button</Button>);
    cy.get('button').should('exist');
    cy.get('button').should('have.text', 'Default Button');
    cy.get('button').should('have.class', 'bg-primary');
  });

  it('applies variants and sizes correctly', () => {
    cy.mount(<Button variant="success" size="lg">Success Button</Button>);
    cy.get('button').should('have.class', 'bg-success');
    cy.get('button').should('have.class', 'h-10 px-5');
  });

  it('disables the button when isDisabled is true', () => {
    cy.mount(<Button isDisabled>Disabled Button</Button>);
    cy.get('button').should('be.disabled');
  });

  it('shows a loader when isLoading is true', () => {
    cy.mount(<Button isLoading>Loading Button</Button>);
    cy.get('[aria-label="loading"]').should('exist');
    cy.get('button').should('have.attr', 'disabled');
  });

  it('handles click events', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={onClickSpy}>Clickable Button</Button>);
    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });

  it('renders prefix and suffix elements', () => {
    cy.mount(<Button prefix={<span>Prefix</span>} suffix={<span>Suffix</span>}>Button</Button>);
    cy.get('button').should('contain.text', 'Prefix');
    cy.get('button').should('contain.text', 'Suffix');
  });

  it('applies custom styles via className', () => {
    cy.mount(<Button className="custom-class">Styled Button</Button>);
    cy.get('button').should('have.class', 'custom-class');
  });

  it('renders as a link when href is provided', () => {
    cy.mount(<Button href="https://example.com" target="_blank">Link Button</Button>);
    cy.get('a').should('have.attr', 'href', 'https://example.com');
    cy.get('a').should('have.attr', 'target', '_blank');
  });
});
