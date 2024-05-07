# ListraCoins

Welcome to the ListraCoins project documentation! ListraCoins is an application developed with Expo, React Navigation, TypeScript (NativeWind), Tailwind, Axios, and JSON Server.

## Getting Started

To install and run the ListraCoins project in your development environment, follow these steps:

> Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

1. Clone the project repository from GitHub:

   ```
   git clone https://github.com/HubertRyanOfficial/listra-coins.git
   ```

2. Navigate to the project directory:

   ```
   cd listra-coins
   ```

3. Install project dependencies using npm or yarn:

   ```
   npm install
   # or
   yarn install
   ```

### Running the JSON Server

1. Make sure you have JSON Server installed globally:

   ```
   npm install -g json-server
   ```

2. Start the JSON server:

   ```
   json-server --watch db.json --port 3000
   ```

### Running the Expo Project

1. Install the Expo CLI globally:

   ```
   npm install -g expo-cli
   ```

2. Start the Expo project:

   ```
   npx expo start
   ```

## Project Overview

ListraCoins is an e-commerce application that allows users to view a list of available products, add products to the shopping cart, edit their profile, share products, and receive push notifications.

## Features

### 1. Authentication

Within the app, it's possible to create and log in with an account using email and password.

### 1. Product List

The product list is a central feature of the application. Users can view a variety of products available for purchase. Each item in the list displays product details such as name, price, and image.

- Products are retrieved from the `/products` endpoint using Axios to make requests to the JSON Server API.
- The user interface uses React Navigation to navigate between the product list and the product detail page.
- Users can add products to the shopping cart by clicking the "Add to Cart" button on each item in the list.

### 2. User Profile

The user profile allows users to manage their personal information, such as name, address, and profile picture. Users have the ability to edit their profile picture.

- User information is stored in the `/users` endpoint and accessed through Axios requests.
- Users can edit their personal information on the profile page, including editing their profile picture.
- The Expo ImagePicker library is used to allow users to select or take a photo for their profile picture.
- After selecting the image, users have the option to upload and save the profile picture on the server.

### 2. Product Sharing

Users can share products with their friends through a simple long press on each item in the product list.

- The sharing functionality is implemented using native operating system APIs, such as the Share API for mobile devices.
- A long press on an item in the product list triggers the sharing option, allowing the user to share the product link with other installed apps on the device.

### 3. Mobile First

ListraCoins is developed with a "Mobile First" approach, ensuring an optimized user experience on offline mobile devices.

- The layout and design of the application are adapted for smaller screens, prioritizing functionality and usability on mobile devices.
- The user interface is responsive and adjusts automatically to different screen sizes and orientations.

### 4. Push Notifications

The application uses push notifications to keep users informed about promotions, product updates, and other important notifications.

- The push notification functionality is integrated using the Expo Notifications library.
- Users can choose to receive push notifications and configure their notification preferences in the application settings.

## Conclusion

ListraCoins is a comprehensive e-commerce application that offers a variety of features to facilitate the user shopping experience. With an intuitive interface, advanced features, and a mobile-first approach, the application is designed to offer convenience and practicality to users during their online and offline shopping experiences.
