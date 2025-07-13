# 🔗 URL Shortener

A simple Node.js application to shorten long URLs, track click analytics, and redirect users using short links. Built using **Express**, **MongoDB**, and **EJS**.

---

## 📌 Features

- ✅ Generate a short URL from a long URL
- ✅ Redirect to the original URL using the short ID
- ✅ Track the number of visits for each short URL
- ✅ Store click history (with timestamps)
- ✅ View all generated URLs in a dashboard

---

<!-- ## 🚀 Live Demo

You can run this project locally or deploy it on platforms like [Render](https://render.com/) or [Vercel](https://vercel.com/).

--- -->

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (using Mongoose)
- EJS for templating

---

## 📂 Project Structure

```
short-url/
│
├── controllers/
│ └── url.js # Handles URL creation and analytics logic
│
├── models/
│ └── url.js # Mongoose schema for URL model
│
├── routes/
│ ├── url.js # API routes
│ └── staticRouter.js # View rendering route
│
├── views/
│ └── home.ejs # Main front-end template
│
├── connects.js # MongoDB connection setup
├── index.js # App entry point
└── README.md # You're here!
```
---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/short-url.git
cd short-url
```

### 2. Install dependencies
```bash
npm install
```

### Set up ```.env``` file
Create a ```.env``` file in the root with the following content:

```bash
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/urlshortener
```
Replace <username> and <password> with your MongoDB Atlas credentials.

### Run the App

```bash
npm start
```
Visit: http://localhost:8001

### Analytics API

- POST ```/url``` → Generate a new short URL

- GET ```/url/analytics/:shortId``` → Get total clicks and visit history


### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.