# 🚀 Run & Testing Instructions

This guide provides step-by-step instructions on how to set up, run, and test the **HTML-CSS-JS** website project on your local machine.

---

## 📋 Prerequisites

To run and preview this project, you only need:
- Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Brave, Safari, or Opera).
- *(Optional, Recommended)*: A local HTTP development server (e.g., VS Code Live Server, Python, or Node.js) for optimal asset loading and script behavior.

---

## 🏃 Running the Project

You can run this project using any of the methods below.

### Method 1: Local HTTP Server via VS Code Live Server (Recommended)

1. Open the project folder in **Visual Studio Code**:
   ```bash
   code .
   ```
2. Install the **Live Server** extension by *Ritwick Dey* from the Extensions panel (`Ctrl + Shift + X`).
3. Right-click on `bootstrap.html` (or `index.html`) in the Explorer pane.
4. Select **"Open with Live Server"** (or click **"Go Live"** in the status bar).
5. Your default browser will launch at:
   ```text
   http://127.0.0.1:5500/bootstrap.html
   ```

---

### Method 2: Python Built-in HTTP Server

If you have Python installed (Python 3.x), you can start a zero-config HTTP server directly from your terminal:

1. Open a terminal or PowerShell in the project directory:
   ```bash
   cd path/to/HTML-CSS-JS
   ```
2. Start the HTTP server:
   ```bash
   python -m http.server 8000
   ```
   *(On some systems, use `python3` instead of `python`)*
3. Open your browser and navigate to:
   - Modern Home: [http://localhost:8000/bootstrap.html](http://localhost:8000/bootstrap.html)
   - Classical Showcase: [http://localhost:8000/index.html](http://localhost:8000/index.html)
4. To stop the server, press `Ctrl + C` in your terminal.

---

### Method 3: Node.js (`npx serve` or `http-server`)

If you have Node.js and `npm` installed:

1. Open your terminal in the project directory.
2. Run using `npx serve`:
   ```bash
   npx serve . -p 8000
   ```
   *or using `http-server`:*
   ```bash
   npx http-server -p 8000
   ```
3. Open [http://localhost:8000/bootstrap.html](http://localhost:8000/bootstrap.html) in your browser.

---

### Method 4: PHP Built-in Server

If you have PHP installed:

1. In the project root directory, run:
   ```bash
   php -S localhost:8000
   ```
2. Access [http://localhost:8000/bootstrap.html](http://localhost:8000/bootstrap.html) in your browser.

---

### Method 5: Direct File Opening (No Server Required)

Since this project consists of client-side static HTML, CSS, and JavaScript files, you can also view it directly:

1. Navigate to the project directory in your file explorer.
2. Double-click `bootstrap.html` (or `index.html`) to open it directly in your web browser.
3. *Note:* When opening files via the `file://` protocol, browser security rules may restrict certain external resource requests or local storage behaviors depending on browser configuration. Using an HTTP server (Methods 1-4) is recommended.

---

## 🧭 Page Navigation Map

When running the project, use the table below to explore all available pages:

| Page | File | URL (Port 8000) | Description |
| :--- | :--- | :--- | :--- |
| **Home (Bootstrap)** | `bootstrap.html` | `/bootstrap.html` | Main landing page featuring carousel, cards, and navigation |
| **Merch Shop** | `shop.html` | `/shop.html` | Product catalog with quantity selectors and cart dropdown preview |
| **Cart & Checkout** | `cart.html` | `/cart.html` | Shopping cart overview, quantity modifiers, and order summary |
| **Texting Chatbot** | `js.html` | `/js.html` | Interactive AI chatbot with utilities, animations, and history |
| **Contact Profile** | `contact.html` | `/contact.html` | Social profile / Twitter-style post card |
| **HTML/CSS Showcase** | `index.html` | `/index.html` | Foundational layout, CSS Grid chessboard, tables, and media |

---

## 🧪 Interactive Feature Testing Checklist

Follow these steps to thoroughly test every interactive feature in the application:

### 1. Merch Shop & Cart Workflow
1. Navigate to `shop.html`.
2. Click **"Add"** or the **`+`** button on a merchandise item (e.g., *Selfie* or *Paw*).
3. Observe the item count badge updating.
4. Click the cart dropdown icon (split button next to "Cart") in the navbar to verify the dropdown shows the item and correct count badge.
5. Click **"Cart"** or **"Checkout"** to navigate to `cart.html`.
6. Verify that only items with a quantity greater than zero are displayed.
7. Use the **`-`** button to reduce the quantity to `0`. Verify that the item row disappears automatically.
8. Refresh the browser page (`F5`) and confirm that cart states persist accurately from `localStorage`.

### 2. Chatbot Application (`js.html`)
1. Navigate to `js.html`.
2. Hover your mouse over the green **"Texting!"** heading and observe the touch counter incrementing dynamically.
3. Type a message in the input box and click the **Send** button (paper plane icon) or press Enter.
4. Test automated responses by typing conversational queries:
   - `who are you` -> Bot introduces itself
   - `movie` -> Recommends a movie
   - `tell me a joke` -> Tells a funny joke
   - `favorite color` -> Responds with color preference
5. Test built-in utility commands:
   - **Coin Flip**: Type `flip a coin` or `heads or tails` -> returns `Heads` or `Tails`.
   - **Dice Roll**: Type `roll a dice` or `roll a die` -> returns a random number from 0-6.
   - **Random Number**: Type `pick a number` or `random number` -> returns a random number (0-99).
6. Verify smooth scrolling: Send multiple messages until the view overflows to confirm automatic scrolling to the latest message.
7. Reload the page (`F5`) to verify that the conversation history persists from `localStorage`.
8. Click the **Delete** button (trash can icon) and verify all chat history is wiped from the screen and `localStorage`.

### 3. Bootstrap Home (`bootstrap.html`)
1. Observe the carousel sliding every 6 seconds.
2. Click the carousel previous/next arrows to navigate manually.
3. Dismiss the sleepy morning alert in slide 2 by clicking the close button (`×`).
4. Scroll down to the third card (*"Hello, i am cat's brother"*).
5. Toggle the checkbox button **"See us together"** to verify the card image dynamically changes between `Cat card 2a.jpg` and `Cat card 2b.jpg`.

### 4. Foundational Showcase (`index.html`)
1. Verify the 8x8 chessboard renders correctly with alternating cell background colors and Unicode chess pieces.
2. Verify the embedded looping video (`Videos/boom.mp4`) plays smoothly.
3. Test the interactive HTML5 form inputs at the bottom (slider, date picker, password field, and textarea).

---

## 🧹 Clearing Stored Data

If you need to reset the application state back to a clean slate:

1. Open your browser Developer Tools (`F12` or `Ctrl + Shift + I`).
2. Go to the **Application** tab (Chrome/Edge/Brave) or **Storage** tab (Firefox).
3. Expand **Local Storage** in the left sidebar and select the current site origin.
4. Right-click and choose **"Clear"**, or run the following command in the **Console** tab:
   ```javascript
   localStorage.clear();
   location.reload();
   ```

---

## 🔍 Troubleshooting

- **Images or video not loading**: Ensure relative paths are preserved and you have not moved files out of the `Images/` or `Videos/` folders.
- **Embedded iframe shows "Website not available"**: The test URL inside `index.html` (`go11ogle.om`) is an intentional demo placeholder.
- **Browser Autoplay Restrictions**: Some modern browsers require user interaction before playing audio or video with sound; the project video uses `autoplay muted loop` to comply with standard browser autoplay policies.
