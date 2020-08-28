Feature: Place the order

    Scenario Outline: create an order, we need 4 parameters. (orderNumber, ItemId, Quantity, pick location)

        Given I launch the browser and Login to the Application.
        When I search the item.
        And I add the item to cart.
        Then I click on Buy Now Button.
        And I provide "<orderNumber>" and "<ItemID>" and "<Quantity>" and "<Pick Location>".
        Then I click on place oreder button.
        And Verify that Order has been placed.

        Examples:
            | orderNumber | ItemID | Quantity | Pick Location |
            | 1           | i01    | 3        | Agra          |
            | 2           | i02    | 4        | Delhi         |
            | 3           | i03    | 2        | Mumbai        |
            | 4           | i04    | 5        | Lucknow       |
            | 5           | i05    | 6        | kolkata       |
            | 6           | i06    | 9        | Ranchi        |
            | 7           | i07    | 1        | Patna         |
            | 8           | i08    | 4        | Jaipur        |