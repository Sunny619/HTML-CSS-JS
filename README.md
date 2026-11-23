# 🐾 HTML-CSS-JS Web Showcase

A comprehensive multi-page front-end web project demonstrating the progression from foundational HTML5 & CSS3 styling to modern responsive design with Bootstrap 5 and dynamic DOM & state management using Vanilla JavaScript.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Project Highlights & Features](#-project-highlights--features)
  - [1. Modern Bootstrap Home (`bootstrap.html`)](#1-modern-bootstrap-home-bootstraphtml)
  - [2. Interactive Merch Shop (`shop.html`)](#2-interactive-merch-shop-shophtml)
  - [3. Dynamic Shopping Cart & Checkout (`cart.html`)](#3-dynamic-shopping-cart--checkout-carthtml)
  - [4. Interactive AI Chatbot (`js.html`)](#4-interactive-ai-chatbot-jshtml)
  - [5. Social Profile & Post Card (`contact.html`)](#5-social-profile--post-card-contacthtml)
  - [6. Fundamental HTML5 & CSS3 Showcase (`index.html`)](#6-fundamental-html5--css3-showcase-indexhtml)
- [Project Structure](#-project-structure)
- [Technologies & Libraries](#-technologies--libraries)
- [State Management (`localStorage`)](#-state-management-localstorage)
- [Getting Started](#-getting-started)
- [Author & Acknowledgments](#-author--acknowledgments)

---

## 🌟 Overview

This repository captures a practical front-end web development journey. Rather than a static set of demo pages, the project builds out a cohesive cat-themed web experience ("Kat") combining:

- **Semantic HTML5** for structured and accessible markup.
- **Custom CSS3** featuring CSS variables, CSS Grid, Flexbox, custom keyframe animations, and gradient styling.
- **Bootstrap 5 (v5.0.0-beta1)** components including responsive navbar, carousels, cards, grids, alerts, and badges.
- **Vanilla JavaScript (ES6)** handling real-time DOM manipulation, custom event listeners, responsive viewport resize calculations, and persistent client-side storage with `localStorage`.

---

## 🚀 Project Highlights & Features

### 1. Modern Bootstrap Home (`bootstrap.html`)
The main entry point featuring modern Bootstrap components:
- **Responsive Dark Navigation Bar**: Collapsible menu with navigation links, external project references, and dropdown menus.
- **Interactive Hero Carousel**: Auto-sliding image carousel with customizable intervals, dark theme controls, captions, and dismissible alerts.
- **Merch & Profile Cards**: Responsive multi-column layout showing shop highlights and cat cards.
- **Dynamic Image Switcher**: Interactive checkbox toggle powered by `bootstrap.js` that swaps between solo and sibling cat images seamlessly.

### 2. Interactive Merch Shop (`shop.html`)
An eCommerce product catalog:
- **Responsive Adaptive Layout**: Utilizes dynamic JavaScript viewport resizing (`resizep()`) adjusting from 2 columns on mobile up to 6 columns on ultra-wide screens.
- **Quantity Controls**: Add items directly to cart with real-time `+` / `-` increment buttons.
- **Live Navbar Cart Preview**: Dropdown cart widget in the header displaying items added, current quantities, and custom badges.
- **Custom Order Inputs**: Allows users to upload a selfie for custom personalized merch.
- **State Synchronization**: Automatically syncs product counts with `localStorage` so quantities persist across page reloads.

### 3. Dynamic Shopping Cart & Checkout (`cart.html`)
A dedicated cart management and checkout screen:
- **Dynamic Item List**: Reads current cart contents from `localStorage` upon loading and hides empty items.
- **Real-time Quantity Adjustments**: Increase or decrease quantities inline.
- **Automatic Item Removal**: Decrementing an item count to zero automatically hides the product from the cart view and updates storage.
- **Order Summary**: Displays order details with upload checks for custom items.

### 4. Interactive AI Chatbot (`js.html`)
A messaging interface with an automated rule-based chatbot:
- **Chat Interface**: Clean chat window featuring chat bubble animations (`@keyframes comein`) for incoming messages and distinct styling for sent and received texts.
- **Auto-Scrolling**: Automatically scrolls smoothly to the latest message whenever new messages arrive.
- **Rule-Based Conversational Engine (`javascript.js`)**: Matches user queries across 100+ conversation topics, jokes, trivia, and bot personality replies.
- **Built-in Mini-Utilities**:
  - *Coin Flip*: Detects queries like "coin flip", "flip a coin", "heads or tails" and returns random results.
  - *Dice Roll*: Simulates a dice roll (0-6) on triggers like "roll a die" or "roll dice".
  - *Random Number Generator*: Generates random numbers on commands like "pick a number" or "random number".
- **Chat History Persistence**: Full message history is preserved in `localStorage` across refreshes.
- **Clear Chat**: A dedicated delete button wipes chat history and resets state.
- **Interactive Header**: Tracks hover/touch counts dynamically.

### 5. Social Profile & Post Card (`contact.html`)
A Twitter/X-style social media post card:
- **Flexbox Architecture**: Nested flex containers managing author metadata, avatar, content body, and engagement footer.
- **Verified / Themed Badges**: Profile handle, avatar with rounded border, and follow button.
- **Engagement Bar**: Displays likes, shares, comments, and action buttons.

### 6. Fundamental HTML5 & CSS3 Showcase (`index.html`)
The foundational exploratory webpage:
- **CSS Variables & Custom Properties**: Demonstrates root variables (`--hex-gray`) and fallback color handling.
- **Pure CSS 8x8 Chessboard**: Built entirely using CSS Grid (`repeat(8, 30px)`) alternating colors and rendered with Unicode chess pieces (♚, ♛, ♜, ♝, ♞, ♟).
- **Semantic Tables & Forms**: Includes styled HTML tables, captions, textareas, sliders (`<input type="range">`), password fields, and date pickers.
- **Media Embeds**: Embedded looped video (`Videos/boom.mp4`), embedded iframe, and fallback text attributes.

---

## 📁 Project Structure

```text
HTML-CSS-JS/
├── Images/                     # Image assets for UI, shop, and cards
│   ├── Cat card 0.jpg
│   ├── Cat card 1.jpg
│   ├── Cat card 2a.jpg
│   ├── Cat card 2b.jpg
│   ├── cat dp.jpg
│   ├── cat.jpg
│   ├── carousel0.jpg
│   ├── carousel1.jpg
│   ├── carousel2.jpg
│   ├── carousel3.jpg
│   ├── delete.png
│   ├── send.png
│   ├── shop0.jpg
│   ├── shop1.jpg
│   └── shop2.jpg
├── Videos/                     # Video assets
│   └── boom.mp4
├── bootstrap.html              # Main modern landing page with Bootstrap 5
├── bootstrap.js                # Image toggle scripts for bootstrap.html
├── cart.html                   # Cart and checkout page
├── cart.js                     # Cart state management and quantity logic
├── contact.html                # Twitter-style profile post card
├── index.html                  # Foundational HTML5 & CSS3 showcase
├── javascript.js               # Chatbot logic, dictionary, utilities, and storage
├── js.html                     # Chatbot messaging interface
├── shop.html                   # Product catalog with interactive cart integration
├── shop.js                     # Dynamic grid resizing & catalog cart handlers
├── README.md                   # Project overview and documentation
└── run_instructions.md         # Detailed guide on running & testing locally
```

---

## 🛠 Technologies & Libraries

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, forms, media embedding (`<video>`, `<iframe>`), and accessible layout |
| **CSS3** | Flexbox, CSS Grid, CSS Variables (`:root`), animations (`@keyframes`), and responsive gradients |
| **Bootstrap 5.0.0-beta1** | Responsive grid system, navbar, carousel, cards, buttons, badges, and modals via CDN |
| **Vanilla JavaScript (ES6)** | DOM manipulation, event handling, dynamic element generation, and state logic |
| **Web Storage API (`localStorage`)** | Client-side persistence for shopping cart items and chat conversations |
| **Google Fonts** | Custom typography featuring *Raleway*, *Chilanka*, and *Source Sans Pro* |

---

## 💾 State Management (`localStorage`)

The project utilizes browser `localStorage` to retain state without requiring an external backend database:

- **Shopping Cart State**:
  - `itemcount1` through `itemcount6`: Stores integer quantities for each merchandise product.
  - Automatically read by `shop.js` on catalog load and by `cart.js` on checkout page load.
- **Chatbot Conversation State**:
  - `count`: Total count of user messages sent.
  - `1`, `2`, ..., `N`: Stores individual user messages.
  - `1r`, `2r`, ..., `Nr`: Stores corresponding bot replies.
  - Retained across browser reloads and easily reset via the clear button in `js.html`.

---

## 🏁 Getting Started

To explore or run the project on your local machine, open any `.html` file in your preferred web browser, or launch a lightweight local development server.

For complete step-by-step instructions, server configurations (VS Code Live Server, Python, Node.js, PHP), and feature walkthroughs, refer to [run_instructions.md](file:///f:/G/Sunny/Projects/HTML-CSS-JS/run_instructions.md).

---

## 👤 Author & Acknowledgments

- **Author**: Sunny ([@Sunny619](https://github.com/Sunny619))
- **Related Projects**:
  - [Flappy Bird](https://github.com/Sunny619/FlappyBird)
  - [Steve's Run](https://play.google.com/store/apps/details?id=com.Sunny.Game)
