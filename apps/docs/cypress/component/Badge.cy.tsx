import React from "react";
import { Badge } from "@/registry/ui/react/badge";

describe("Badge.cy.tsx", () => {
  it("renders with default props", () => {
    cy.mount(<Badge>Default Badge</Badge>);
    cy.get("span").should("exist");
    cy.get("span").should("have.text", "Default Badge");
    cy.get("span").should("have.class", "bg-primary");
  });

  it("applies variant styles correctly", () => {
    cy.mount(<Badge variant="success">Success Badge</Badge>);
    cy.get("span").should("have.class", "bg-success");

    cy.mount(<Badge variant="danger">Danger Badge</Badge>);
    cy.get("span").should("have.class", "bg-destructive");
  });

  it("applies size styles correctly", () => {
    cy.mount(<Badge size="lg">Large Badge</Badge>);
    cy.get("span").should("have.class", "h-7");
    cy.get("span").should("have.class", "px-4");
  });

  it("renders with an icon", () => {
    const Icon = () => <svg aria-label="icon" />;
    cy.mount(<Badge icon={<Icon />}>Badge with Icon</Badge>);
    cy.get('[aria-label="icon"]').should("exist");
    cy.get("span").contains("Badge with Icon");
  });

  it("renders custom styles with className", () => {
    cy.mount(<Badge className="custom-class">Custom Styled Badge</Badge>);
    cy.get("span").should("have.class", "custom-class");
  });

  it("handles additional HTML attributes", () => {
    cy.mount(<Badge data-testid="badge-element">Badge with Attributes</Badge>);
    cy.get('[data-testid="badge-element"]').should("exist");
  });

  it("renders different variants and sizes together", () => {
    cy.mount(
      <>
        <Badge variant="warning" size="sm">
          Warning Small
        </Badge>
        <Badge variant="neutral" size="md">
          Neutral Medium
        </Badge>
        <Badge variant="accent" size="lg">
          Accent Large
        </Badge>
      </>,
    );
    cy.get("span")
      .eq(0)
      .should("have.class", "bg-warning")
      .and("have.class", "h-5");
    cy.get("span")
      .eq(1)
      .should("have.class", "bg-neutral")
      .and("have.class", "h-6");
    cy.get("span")
      .eq(2)
      .should("have.class", "bg-accent")
      .and("have.class", "h-7");
  });
});
