import { BaseComponent } from './base-component';

export class LabelComponent extends BaseComponent {
    constructor(locator) {
    super(locator);
    this.locator = locator;
    }

    getText() {
        return cy.get(this.locator).invoke('text');
    }

    containsText(expectedText) {
        cy.get(this.locator)
          .should('exist', "Label element doesn't exist")
          .should('contain.text', expectedText, `Label does not contain text: ${expectedText}`);
      }
}