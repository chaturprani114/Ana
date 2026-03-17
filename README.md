# Anand's Payroll Articles
https://chaturprani114.github.io/Ana/

Anand is vibing with GPTs and has come out with beautiful documents that make anyone understand payroll systems and processes. His articles simplify complex payroll topics and make them engaging enough to get into binge reading.

This repository hosts those articles as web pages and presents them in a simple table format for easy access.

---

## 🌐 Website

All articles are hosted using **GitHub Pages**.  
The homepage lists every article along with its date, title, and link.

Readers can simply click **Open** to read the article.

---

## 📁 Repository Structure
.
├── index.html # Homepage displaying the table of articles
├── style.css # Styling for the webpage
├── script.js # Loads article data from JSON and builds the table
│
├── data/
│ └── articles.json # List of articles and their metadata
│
└── articles/
├── article1.html
├── article2.html
└── ...


---

## ➕ Adding a New Article

To add a new article:

### 1. Create the article page

Add a new HTML file inside the `articles/` folder.

Example: articles/payroll-basics.html

### 2. Add an entry in `articles.json`

Open: data/articles.json


Add a new object:

```json
{
  "date": "2026-03-21",
  "title": "Payroll Basics Explained",
  "author": "Anand",
  "link": "articles/payroll-basics.html"
}


🚀 Hosting

The site is hosted using GitHub Pages.

Once enabled in repository settings, the website becomes available at:

https://<username>.github.io/<repository-name>

