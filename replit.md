# webdev-ads

A simple Node.js web application built with Express and Handlebars for server-side rendering. This is an educational project demonstrating basic web development concepts.

## Tech Stack

- **Runtime:** Node.js 20
- **Framework:** Express 5
- **Template Engine:** express-handlebars (Handlebars)
- **Package Manager:** npm

## Project Structure

- `index.js` — App entry point, configures Express, Handlebars, and starts server on port 5000
- `routes.js` — Route definitions (home, index2, sobre/:id)
- `views/` — Handlebars templates
  - `layouts/main.handlebars` — Master layout
  - `index.handlebars` — Home page
  - `index2.handlebars` — Secondary page
  - `sobre.handlebars` — Dynamic about page (uses URL param)
- `Public/` — Static assets (CSS, JS)

## Running the App

```bash
npm start
```

Server runs on `http://0.0.0.0:5000`

## Routes

- `/` — Home page
- `/index2` — Second page
- `/sobre/:id` — About page with dynamic ID parameter
