const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;

context('App Tests', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should launch the app and initialise it', () => {
    // verify initialization the form elements
    cy.get('.AddressForm__name-input').should('be.empty');
    cy.get('.AddressForm__favourite-food-input').should('be.empty');
    cy.get('.AddressForm__rating-input').should('be.empty');
    cy.get('.AddressForm__located-text').should('not.exist');
    cy.get('.AddressForm__locate-button').should('be.disabled');
    cy.get('.AddressForm__add-to-favourite-button').should('be.disabled');

    // verify initialization of the list
    cy.get('.RestaurantList__no-items-text').should('be.visible');
  });

  it('should be able to locate and add a restaurant', () => {
    // enter info
    cy.get('.AddressForm__name-input').type('The Fence, 67-69 Cowcross St, Farringdon, London EC1M 6BP');
    cy.get('.AddressForm__favourite-food-input').type('Burgers');
    cy.get('.AddressForm__rating-input').then(($range) => {
      // get the DOM node
      const range = $range[0];
      // set the value manually
      nativeInputValueSetter.call(range, 4);
      // now dispatch the event
      range.dispatchEvent(new Event('change', { value: 4, bubbles: true }));
    });

    cy.get('.AddressForm__located-text').should('not.be.visible');
    cy.get('.AddressForm__locate-button').should('be.enabled');
    cy.get('.AddressForm__add-to-favourite-button').should('be.disabled');

    // locate the restaurant
    cy.get('.AddressForm__locate-button').click();
    cy.get('.AddressForm__located-text').should('be.visible');
    cy.get('.AddressForm__locate-button').should('not.be.visible');
    cy.get('.AddressForm__add-to-favourite-button').should('be.enabled');

    //add the item to the list
    cy.get('.AddressForm__add-to-favourite-button').click();

    // verify the item is added in the list
    cy.get('.RestaurantList__no-items-text').should('not.be.visible');
    cy.get('.RestaurantList__item').should('have.length', 1);
    let firstItem = cy.get('.RestaurantList__item').first();
    firstItem.get('.RestaurantList__item-name')
      .should('contain', 'The Fence, 67-69 Cowcross St, Farringdon, London EC1M 6BP');
    firstItem.get('.RestaurantList__item-favourite-food')
      .should('contain', 'Burgers');
    firstItem.get('.RestaurantList__item-rating')
      .should('contain', '4');
    firstItem.get('.RestaurantList__item-remove')
      .should('be.visible');

    cy.get('.MapPin__image').first().should('be.visible');
  });

  it('should be able retain previous data on refresh', () => {
    // verify the items added previously
    cy.get('.RestaurantList__no-items-text').should('not.be.visible');
    cy.get('.RestaurantList__item').should('have.length', 1);
    let firstItem = cy.get('.RestaurantList__item').first();
    firstItem.get('.RestaurantList__item-name')
      .should('contain', 'The Fence, 67-69 Cowcross St, Farringdon, London EC1M 6BP');
    firstItem.get('.RestaurantList__item-favourite-food')
      .should('contain', 'Burgers');
    firstItem.get('.RestaurantList__item-rating')
      .should('contain', '4');
    firstItem.get('.RestaurantList__item-remove')
      .should('be.visible');
  });

  it('should be able to add two more items', () => {
    cy.get('.AddressForm__name-input').type('LEON, 7 Canvey St The Blue Fin Building, London SE1 9AN');
    cy.get('.AddressForm__favourite-food-input').type('Wraps');
    cy.get('.AddressForm__rating-input').then(($range) => {
      // get the DOM node
      const range = $range[0];
      // set the value manually
      nativeInputValueSetter.call(range, 3);
      // now dispatch the event
      range.dispatchEvent(new Event('change', { value: 3, bubbles: true }));
    });

    cy.get('.AddressForm__locate-button').click();
    cy.get('.AddressForm__locate-button').should('not.be.visible');
    cy.get('.AddressForm__add-to-favourite-button').click();

    cy.get('.AddressForm__name-input').type('The Salt Room, 106 Kings Rd, Brighton BN1 2FU');
    cy.get('.AddressForm__favourite-food-input').type('Seafood');
    cy.get('.AddressForm__rating-input').then(($range) => {
      // get the DOM node
      const range = $range[0];
      // set the value manually
      nativeInputValueSetter.call(range, 5);
      // now dispatch the event
      range.dispatchEvent(new Event('change', { value: 5, bubbles: true }));
    });

    cy.get('.AddressForm__locate-button').click();
    cy.get('.AddressForm__locate-button').should('not.be.visible');
    cy.get('.AddressForm__add-to-favourite-button').click();

    cy.get('.AddressForm__name-input').type('Icebergs Dining Room and Bar, 473F+XP Bondi Beach, New South Wales, Australia');
    cy.get('.AddressForm__favourite-food-input').type('Seafood');
    cy.get('.AddressForm__rating-input').then(($range) => {
      // get the DOM node
      const range = $range[0];
      // set the value manually
      nativeInputValueSetter.call(range, 4);
      // now dispatch the event
      range.dispatchEvent(new Event('change', { value: 4, bubbles: true }));
    });

    cy.get('.AddressForm__locate-button').click();
    cy.get('.AddressForm__locate-button').should('not.be.visible');
    cy.get('.AddressForm__add-to-favourite-button').click();

    // verify the items added
    cy.get('.RestaurantList__item').should('have.length', 4);
    let secondItem = cy.get('.RestaurantList__item').eq(2);
    secondItem.get('.RestaurantList__item-name')
      .should('contain', 'The Salt Room, 106 Kings Rd, Brighton BN1 2FU');
    secondItem.get('.RestaurantList__item-favourite-food')
      .should('contain', 'Seafood');
    secondItem.get('.RestaurantList__item-rating')
      .should('contain', '5');
    secondItem.get('.RestaurantList__item-remove')
      .should('be.visible');
  });

  it('should be able to select any item from the list', () => {
    // select the first item
    cy.get('.RestaurantList__item').eq(0).click();
    cy.get('.RestaurantList__item').eq(1).click();
    cy.get('.RestaurantList__item').eq(2).click();
    cy.get('.RestaurantList__item').eq(3).click();
  });

  it('should be able to removed any item from the list', () => {
    // select the first item
    cy.get('.RestaurantList__item .RestaurantList__item-remove').eq(3).click();
    cy.get('.RestaurantList__item .RestaurantList__item-remove').eq(2).click();
    cy.get('.RestaurantList__item .RestaurantList__item-remove').eq(1).click();
    cy.get('.RestaurantList__item .RestaurantList__item-remove').eq(0).click();

    cy.get('.RestaurantList__no-items-text').should('be.visible');
  });
});
