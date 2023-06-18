<h1 align="center">🛒 React Game Store</h1>

<p align="center">
  <img src="https://github.com/yondagonda/ecommerce-store/assets/109213163/3e1d5e9b-5a8b-4223-802b-2c4b80d0cae2" alt="Game store home page">
</p>

<p align="center">
  Home page
</p>

## Description
A React-based e-commerce game store. Features include customized pages for individual games, a search bar, shopping cart functionality, and filters for different genres or for checking wishlist items.
You can read about [features](#features), [performance tests](#performance) and the [technologies](#technologies) used in the making of this site below.

## 🔴 Demo
🧪 [Live Demo](https://yondagonda.github.io/ecommerce-store) available. Click "Live Demo" to open it.

## Motivations
I wanted to create this project as having just learnt Tailwind CSS and some of React's less used hooks such as useRef and useContext, It made sense to try and practice these new skills on a UI and logic heavy project. Furthermore, I wanted exposure to a project that would require a larger codebase compared to all my previous projects so that I could better prepare myself for future work in a professional setting.

## Showcase
Here are some showcase images of the project. 
<p>
<img src="https://github.com/yondagonda/ecommerce-store/assets/109213163/12b3ffd7-5f1b-4d6e-9d6d-8536ee026523" alt="Spiderman Miles Morales game page">
</p>
<p>
<img src="https://github.com/yondagonda/ecommerce-store/assets/109213163/1c4c1fbf-bd99-44f6-a587-c20c5787bcd2" alt="Browse section of the site">
</p>
<p>
<img src="https://github.com/yondagonda/ecommerce-store/assets/109213163/9c946c2a-1e09-4d60-8fe2-596b35e2d5fa" alt="Shopping cart of the user">
</p>

Here is a GIF simulating a user starting at the home page, then browsing the library of games, before selecting a game and adding it to their cart.
<p align="center">
<img src="https://github.com/yondagonda/ecommerce-store/assets/109213163/fa528744-924f-4152-a35e-0730ba317d52" alt="Shopping cart of the user">
</p>

## Features
- **Responsive Design**: Fully responsive, ensuring a seamless experience across various devices and screen sizes.
- **Smooth Animations**: Built with Framer Motion and Tailwind CSS.
- **Clean and Modern UI**: Visually appealing and intuitive user interface, providing an enjoyable browsing experience.
- **Search Filters**: Filtering options are available to refine the game selection based on genres, helping users find games that match their preferences.
- **Wishlist**: Users can save games to their wishlist, making it easier to keep track of games they want to purchase or explore further.

## Performance
There were some issues with performance originally, unsurprsingly arising as a result of loading 30+ high quality images all at once in the 'browse' page.
After some research, I went to work on compressing the image sizes by converting them to the more effiect .webp format, and also by creating a minified version of the image that would be rendered as the thumbnail.

Below are some performance metrics as analysed by [Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)

<p align="center">
<img src="https://github.com/yondagonda/ecommerce-store/assets/109213163/1b408764-88a4-4806-9cae-d37b6ae477c4" alt="Shopping cart of the user">
</p>

## Technologies 
- React Context API
- React Router 
- Framer Motion
- Tailwind CSS
- Git

## What I learnt:
- How to better organise my code when working in a larger project
- Framer motion and its complexities with animating components upon mount and unmount
- Furthered understanding of React Router through having to organise and connect my pages
- React Context API and hooks such as useRef
- How to more efficiently integrate a large number of images into a site without completely ruining performance

## Possible Features/Improvements to Implement:
- Implementing Stripe Demo Payments into the checkout process
- Using a CDN to further improve performance

## Disclaimer
All rights to the pictures, products, and names displayed on this website belong to the respective publishers of the games. They are used solely for the purpose of creating a coding environment to learn and showcase web development skills.
This website is not intended for commercial use, and no profit is being generated from it. It serves as a personal project to explore and demonstrate coding abilities in a practical context.
<p>
If you are the owner of any copyrighted material featured on this website and have concerns or issues with its inclusion, please contact me immediately.
</p>
