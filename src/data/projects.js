import f1fanzonewebp from "../assets/images/optimized/F1FanZone-1.webp";
import f1fanzonewebp2 from "../assets/images/optimized/fanzone-3.webp"; 
import f1fanzonepng from "../assets/images/F1FanZone.png";
import f1fanzonepng2 from "../assets/images/fanzone-2.png";

import fyyurwebp from "../assets/images/optimized/fyyur-3.webp";
import fyyurwebp2 from "../assets/images/optimized/fyyur-4.webp";
import fyyurpng from "../assets/images/fyyur-1.png";
import fyyurpng2 from "../assets/images/fyyur-2.png";

import gymfitwebp from "../assets/images/optimized/gymfit-1.webp";
import gymfitwebp2 from "../assets/images/optimized/gymfit-4.webp";
import gymfitpng from "../assets/images/gymfit.png";
import gymfitpng2 from "../assets/images/gymfit-2.png";

import techstackwebp from "../assets/images/optimized/techstack-1.webp";
import techstackwebp2 from "../assets/images/optimized/techstack_webp_2.webp";
import techstackpng from "../assets/images/techstack.png";
import techstackpng2 from "../assets/images/techstack-2.png";

import restwebp from "../assets/images/optimized/restWebp.webp";
import restwebp2 from "../assets/images/optimized/restWebp-2.webp";
import restpng from "../assets/images/rest.png";
import restpng2 from "../assets/images/rest-2.png";

import triviawebp from "../assets/images/optimized/trivia_webp.webp";
import triviawebp2 from "../assets/images/optimized/trivia_webp_2.webp";
import triviapng from "../assets/images/trivia.png";
import triviapng2 from "../assets/images/trivia-2.png";

const projects = [
  {
    title: "Fyyur",
    desc: "A booking site for creating shows based on artists and venues available.",
    stack: [
      "HTML and CSS",
      "JavaScript",
      "BootStrap",
      "Python(Flask)",
      "PostgreSQL",
    ],
    explanation:
      "Fyyur is a project I built for my Nanodegree project. I built a website where people could list their venues and artist could also list themselves. Users could then create shows based on artists and venues available.",
    web_stack:
      "I used CSS and Bootstrap framework for the frontend because I like how it was simple to build a nice interface. The website needed a backend, so I used Python for that with the Flask Framework and I used a relational database PostgreSQL because I needed relations between the Artists and Venues data in order to create shows. I deployed the site to Heroku because they provided a free Postgres Database.",
    lessons:
      "I learnt how to use an ORM for writing queries to my database. I also solidified my knowledge in JavaScript by formatting dates and timezones for shows.",
    webpscreenshot: fyyurwebp,
    webpscreenshot2: fyyurwebp2,
    pngscreenshot: fyyurpng,
    pngscreenshot2: fyyurpng2,
    liveLink: "https://fyyurbook.herokuapp.com/",
    githubLink: "https://github.com/Chilex23/Fyyur"
  },

  {
    title: "F1 Fan Zone",
    desc: "A web app for F1 fans, where they can get all the stats and news for the current season.",
    stack: ["HTML and CSS", "TailwindCSS", "DaisyUI", "ReactJS"],
    explanation:
      "F1 Fanzone is  a web app I built for a F1 fanatics like me. In the web app, users can get latest news and stats for the current season, constructors lineup and drivers lineups for the current season. Users can also view race results.",
    web_stack:
      "I used ReactJS as I wanted to solidify my knowledge about React. For the UI, I used TailwindCSS and DaisyUI as I also wanted to try these CSS frameworks. ContextAPI was used for managing state in the web app. I utilized Netlify for deployment, because it allows live updates alongside github.",
    lessons:
      "This project helped to solidify a lot my React knowledge, such as using hooks, code-splitting, error-boundaries and updating states. I also got a lot of great practice using ES6+ syntax across the entirety of the project.",
    webpscreenshot: f1fanzonewebp,
    webpscreenshot2: f1fanzonewebp2,
    pngscreenshot: f1fanzonepng,
    pngscreenshot2: f1fanzonepng2,
    liveLink: "https://kaholas-one.vercel.app/",
    githubLink: "https://github.com/Chilex23/F1-Fan-Zone"
  },

  {
    title: "TechStack",
    desc: "An e-commerce website for a Tech gadgets store. Users can buy and hire the products available.",
    stack: ["HTML and CSS", "BootStrap", "JQuery", "Python(Flask)", "MySQL"],
    explanation:
      "TechStack is an e-commerce website for Tech gadgets store. Users can buy and hire products available. This was a side project I decided to work on as I loved gadgets especially drones, so I wanted to create a niche e-commerce store for gadgets.",
    web_stack:
      "I used CSS with the BootStrap framework for the UI, JQuery for DOM manipulation because I did not like those long and repetitive lines of code for DOM manipulation using vanilla javascript. MySQL was used for storing products, users and orders. I integrated the Paystack API into the project for payment for orders. Python with the Flask framework for the backend as I liked its simplicity and how it could scale well with complexities.",
    lessons:
      "I learnt how to authorize users and create sessions for them. I also solidified my knowledge in JQuery, create ERD diagrams for my tables in my database, migrations in my database and how to work with payment service SDKs.",
    webpscreenshot: techstackwebp,
    webpscreenshot2: techstackwebp2,
    pngscreenshot: techstackpng,
    pngscreenshot2: techstackpng2,
    liveLink: "https://chilex23.pythonanywhere.com/",
    githubLink: "https://github.com/Chilex23/Techstack"
  },

  {
    title: "Trivia API",
    desc: "A RESTful API for trivia questions that cuts across general knowledge.",
    stack: ["HTML and CSS", "ReactJS", "Python(Flask)", "PostgreSQL"],
    explanation:
      "This was a RESTful API developed for my Nanodegree project. It was provided trivia questions that could be consumed by any frontend client. I built a frontend client using ReactJS",
    web_stack:
      "I used Python for developing the API as I like how fast it was to spin up a server and the ORM for accessing a database. I used PostgreSQL for the database. ReactJS was the clear tool for developing the frontend client because of how easy it was to monitor state for the quiz game built on top of the API.",
    lessons:
      "This project solidified my knowledge in building web servers. I learnt about CORS to handle request from different domains hitting my API server. I also learnt how to write proper documentation for my APIs.",
    webpscreenshot: triviawebp,
    webpscreenshot2: triviawebp2,
    pngscreenshot: triviapng,
    pngscreenshot2: triviapng2,
    liveLink: "https://udatrivia-live.herokuapp.com/",
    githubLink: "https://github.com/Chilex23/TriviaAPI"
  },

  {
    title: "Gym Fit",
    desc: "A landing page for a local gym.",
    stack: ["HTMl and CSS", "SASS", "JavaScript"],
    explanation:
      "This project is a landing page built for a local gym. Visitors can see relevant information about the gym from the landing page.",
    web_stack:
      "I used CSS with the SASS preprocessor as I liked the extra feature it gave to you when writing CSS and prevented you from writing repetitive CSS codes keeping in line with the DRY principle.",
    lessons:
      "I improved my knowledge about CSS grids. I also solidified my knowledge in SASS.",
    webpscreenshot: gymfitwebp,
    webpscreenshot2: gymfitwebp2,
    pngscreenshot: gymfitpng,
    pngscreenshot2: gymfitpng2,
    liveLink: "https://chilex23.github.io/GymFit/",
    githubLink: "https://github.com/Chilex23/GymFit"
  },

  {
    title: "RestCountries",
    desc: "A web app that displays information about all the countries in the world.",
    stack: ["HTML and CSS", "SASS", "JavaScript ES6+", "Webpack"],
    explanation:
      "This project is a site that shows all the countries in the world and relevant information about countries.",
    web_stack:
      "I used SASS for the UI as I wanted to be comfortable with it. JavaScript to handle dropdown interactions and DOM Manipulation. Axios for fetching data from the RestCountries API. Webpack for bundling as it was the bundler I wanted to learn.",
    lessons:
      "I solidified my knowledge in DOM manipulation using vanilla javascript, asynchronous actions for data fetching and also how to configure webpack for bundling and minifing.",
    webpscreenshot: restwebp,
    webpscreenshot2: restwebp2,
    pngscreenshot: restpng,
    pngscreenshot2: restpng2,
    liveLink: "https://chilex23.github.io/RestCountries_Deploy/",
    githubLink: "https://github.com/Chilex23/RESTcountries"
  },
];

export default projects;
