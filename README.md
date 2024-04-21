# Traveler - Full Stack Web Application

Traveler is a travel agency website where users can book various travel packages offered by the agency, checkout, and make payments directly from the website.

## Tech Stack

- MongoDB: Database management system.
- Bootstrap: Frontend framework for dynamic and responsive website design.
- Node.js and Express.js: Backend framework for server-side scripting and routing.
- CSS: Cascading Style Sheets for styling.
- React.js, HTML, JavaScript: Frontend development technologies.
- AWS: Cloud platform for deployment.
- EmailJS: Third-party library for sending emails.
- Braintree: Payment processing gateway.

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/yashwanth170/Traveler--React-JS-Node-JS-.git
    ```

2. Navigate to the backend directory:
    ```
    cd backend
    ```

3. Install backend dependencies:
    ```
    npm install
    ```

4. Run the backend server:
    ```
    node app.js
    ```

5. Navigate back to the root directory:
    ```
    cd ..
    ```

6. Navigate to the frontend directory:
    ```
    cd frontend
    ```

7. Install frontend dependencies:
    ```
    npm install
    ```

8. Start the frontend development server:
    ```
    npm start
    ```

## Usage

### Admin:
- Ability to create and update categories.
- Ability to create and update packages.
- Ability to manage customers.
- Access to view payments.

### Customer:
- Ability to view available packages.
- Ability to purchase packages.
- Ability to add packages to cart.
- Ability to proceed to checkout.

## Payment Integration

Traveler utilizes Braintree as the payment processing gateway to facilitate secure and seamless transactions. Additionally, EmailJS is integrated to handle email notifications related to bookings, payments, and other relevant communication with users.
