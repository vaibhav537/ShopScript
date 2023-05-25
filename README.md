# ShopScript
ShopScript is a Next.js application that consists of two directories: **shopscript-admin** and  **shopscript-front**.The **shopscript-admin** directory is responsible for managing the backend and administrative tasks, while the **shopscript-front** directory handles the frontend for the user-facing ecommerce website.

## Features

### Admin Directory
- Dashboard page for managing the shop's overall performance and analytics.
- Orders page for viewing and managing customer orders.
- Category page for managing product categories.
- Products page for managing product listings, including image uploading to AWS S3.
- Styling using Tailwind CSS.
### Ecommerce Directory
- Home page for displaying featured products and promotions.
- Category page for browsing products by category.
- Products page for viewing and searching available products.
- Cart endpoint for managing the user's shopping cart.
- Styling using Styled Components.
- Integration with the Stripe payment gateway for secure online payments.
### Installation
1. Clone the repository:
```
git clone https://github.com/vaibhav537/shopscript.git
```
2. Navigate to the **shopscript-admin** directory:
```
cd shopscript-admin
```
3. Install dependencies:
```
yarn install
```
4. Set up AWS credentials for image uploading to AWS S3. Refer to the AWS documentation for more information.
5. Start the development server:
```
yarn run dev
```
6. Open your browser and navigate to http://localhost:3000 to access the admin dashboard.
7. To set up the ecommerce site, navigate to the **shopscript-front** directory:
```
cd ..
cd shopscript-front
```
