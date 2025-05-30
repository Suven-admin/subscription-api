# Logana Subscription Backend

This is the backend API for the Logana Subscription Library. It provides endpoints to manage subscription plans, users, subscriptions, and payments.

---

## Features

- **Manage subscription plans**
- **Manage users**
- **Manage subscriptions**
- **Manage payments**

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd subscription-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

---

## Project Structure

```
├── config/ 
│   ├── db.js              # Database connection setup
│   ├── knexfile.js        # Knex configuration
├── models/                # Objection.js models
│   ├── Payment.js
│   ├── Subscription.js
│   ├── SubscriptionPlan.js
│   ├── User.js
├── routes/ 
│   ├── index.js           # API routes
├── server.js              # Express server setup
├── start.sh               # Script to start the server
├── package.json           # Project dependencies and scripts
```

---

## API Endpoints

### Subscription Plans
- **GET** `/subscriptions/plans` - Fetch all subscription plans

### Users
- **GET** `/subscriptions/users` - Fetch all users

### Subscriptions
- **GET** `/subscriptions/subscriptions` - Fetch all subscriptions with user and plan details

### Payments
- **GET** `/subscriptions/payments` - Fetch all payments with user and subscription details

---

## Dependencies

- **express** - Web framework
- **knex** - SQL query builder
- **objection** - ORM for Node.js
- **pg** - PostgreSQL client

