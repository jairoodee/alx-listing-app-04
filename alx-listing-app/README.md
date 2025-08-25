# ALX Listing App

A modern Airbnb-style listing application built using **Next.js** and **TailwindCSS**.  
This project is part of the ALX Software Engineering learning journey and is designed to demonstrate full-stack development skills through a responsive and dynamic accommodation listing interface.

---

## 🚀 Project Goals

The **ALX Listing App** replicates core features of a typical Airbnb listing page, including:
- A responsive layout with TailwindCSS
- Display of property listings
- Reusable components for scalability
- Modular structure for maintainability
- Optimized static assets and efficient client-side rendering

---

## 📁 Project Structure

Here's a high-level breakdown of the key directories and some notable files:

```

.
├── components/
│   └── common/
│       ├── Card.tsx       # Reusable Card component for displaying property details
│       └── Button.tsx     # Reusable Button component for user actions like “Book Now”
│
├── interfaces/
│   └── index.ts           # Centralized file to define and export all TypeScript interfaces
│                          # Includes: CardProps, ButtonProps, and more as needed
│
├── constants/
│   └── index.ts           # Stores reusable values such as API URLs, UI labels, configs
│
├── public/assets/         # Static media (e.g., images, icons)
├── pages/                 # Next.js pages and route entry points
├── styles/                # TailwindCSS setup and global styles

````

---

## 🛠️ Getting Started

To run the ALX Listing App locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
````

### 2. Install Dependencies

Ensure [Node.js](https://nodejs.org/) is installed, then run:

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application in your browser.

---

## 🧱 Built With

* **Next.js** – React framework for production
* **TailwindCSS** – Utility-first CSS framework
* **TypeScript** – Strong typing and interface-based architecture

---

## 📌 Notes

* `components/common/Card.tsx`: Defines a reusable `Card` component used throughout the app to display property details like title, image, price, etc.
* `components/common/Button.tsx`: Defines a reusable `Button` component used for actions such as “Book Now,” “See Details,” and navigation.
* `interfaces/index.ts`: Contains all TypeScript interface definitions for the app. It starts with `CardProps` and `ButtonProps` for type safety and component clarity.
* `constants/index.ts`: A centralized location for constants like API endpoints, default values, and reusable UI strings.