# Genoshi.io Intern Project

Welcome to the Genoshi.io Intern Project! This project aims to build out pages for the existing Genoshi.io product using TypeScript, JavaScript, React, and Tailwind CSS. It includes features such as user profile pages, a create new graph page, graph details page, account settings, pricing page, and more.

## Project Structure

```plaintext
src
├── components
│   ├── layout.tsx
│   ├── navbar.tsx
│   ├── page.tsx
│   ├── pricing
│   │   ├── page.tsx
│   │   └── components
│   │       └── pricecard.tsx
│   └── profile
│       ├── page.tsx
│       └── components
│           ├── accountdetails.tsx
│           ├── activity.tsx
│           ├── index.ts
│           ├── profiledetails.tsx
│           └── usagemetrics.tsx
├── styles
│   └── tailwind.css
└── App.tsx
```

## User Interface Overview

### Profile Pages

#### Profile Dashboard
- User profile details: name, email, profile photo, bio
- Account details: current subscription plan & status
- Recent activity feed: show recent graphs, collections, queries
- Buttons to create new graphs, share graphs, upload papers
- List of saved graphs with title, date created, preview thumbnail
- Link to Favourites and Collections pages
- View graph details with edit, share, delete options
- 
### Pricing Page

- Display 3 pricing plan cards with features, cost, and benefits
- Allow users to select a pricing plan with radio buttons
- Show selected plan details in a highlighted card

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version)
- npm (version)

```bash
# Clone the repository
git clone https://github.com/JrG-One/genoshi.git

# Navigate to the project directory
cd genoshi

# Install dependencies
npm install

#Start on local Server
npm start
```