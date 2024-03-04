# ABC Business Dashboard

ABC Business Dashboard is a web application designed to provide users with a comprehensive overview.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Introduction

ABC Business Dashboard is a React-based web application developed to help businesses manage their operations efficiently. It offers various features such as overview, document management, payments tracking, messaging, and report center, all accessible from a single interface.

## Features

- **Overview:** Provides a high-level summary of key business metrics, including revenue, recent activities, and alerts.
- **Documents:** Coming Soon.
- **Payments:** Coming Soon.
- **Messages:** Coming Soon.
- **Report Center:** Coming Soon.
- **User Preferences:** Coming Soon.
- **Responsive Design:** Optimized for various screen sizes, ensuring a seamless user experience across devices.

## Installation

1. Clone the repository to your local machine:

`git clone https://github.com/SShipu/abc-business-dashboard.git`

2. Navigate to the project directory:

`cd abc-business-dashboard`

3. Switch to master branch

`git checkout master`

4. Install dependencies:

`npm install`

5. Start the development server:

`npm start`

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Usage

To use ABC Business Dashboard, follow these steps:

1. Open the application in your web browser.
3. Navigate through different tabs to access various features and functionalities.

## Components

The project consists of the following components:

- **Sidebar:** Provides navigation links to different sections of the dashboard.
- **Header:** Displays the application title and user profile options.
- **Body:** Renders the main content area based on the selected tab.

## Documentation

### Approach:

- This project is a React application created using Create React App.
- It includes components for the sidebar, header, and body, as well as separate pages for each tab in the body.
- Each component is designed to be modular and reusable for better code organization.
- State management is handled using React's useState hook.
- Bootstrap is used for styling and layout to ensure a consistent look and feel.
- No third-party plugins or libraries were used, as instructed.

### Assumptions:

- The project assumes the need for a dashboard-style interface with a sidebar for navigation and a header for user options.
- The sidebar contains main menu items and preference items, and clicking each item changes the content displayed in the body.
- The project assumes the requirement for responsiveness to support various screen sizes.

### Challenges Faced:

- State Management: Managing the state for the active tab and sidebar open/close functionality required thoughtful planning.
- Styling and Layout: Ensuring consistent styling and layout across components while maintaining responsiveness was a key consideration.
- Component Organization: Organizing components and pages to maintain readability and modularity required careful attention.
- Dynamic Content Rendering: Rendering content dynamically based on user interactions required efficient handling.
- Bootstrap Integration: Integrating Bootstrap for styling while customizing styles to match design requirements required careful implementation.

Throughout the development process, the focus was on simplicity, modularity, and user experience to create a functional and visually appealing dashboard application.
