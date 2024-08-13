# Bhide Products & Add to Cart

This is a simple web application that displays a list of products. The user can add a product to the list, delete a product from the list, and view the details of a product.

- Motive : Create a `Add to Cart` Functionality.

### Preview : [Visit](https://bhide-products.vercel.app) 

![Preview](/static/preview_desktop.png)
![Preview](/static/cart_page.png)

## Features

- Add to Cart
- Delete from Cart
- Increase/Decrease Quantity
- Total Price Calculation, Discount Price Calculation
- Total Unique Items in Cart
- Additional Discount on Total Price
- Notification on Add to Cart/Place Order
- Maximum 5 Units are allowed in each order
- Clear Cart 
- Responsive UI for Mobile and Desktop

## Tech Stack

- Sveltekit (Fullstack)
- Tailwind CSS (Styling)

## Utility

- Core Functionality is located at : [Cart Stuff]('./src/lib/index.ts')
- Notification Function is located at : [Notify Stuff]('./src/lib/utils.ts')

## Improvements

- Application can be improved by adding Shadcn Components and Svelte Components.
- As this was not mentioned in the requirement, I have not added it.
