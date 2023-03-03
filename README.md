# Portfolio Site

![Build and Deploy](https://github.com/brandonmkunkel/brandonmkunkel.github.io/actions/workflows/build_deploy.yml/badge.svg)
![License](https://img.shields.io/github/license/brandonmkunkel/brandonmkunkel.github.io)

## About

Hello World! This repository is used to generate my portfolio website hosted here [brandonmkunkel.github.io](https://brandonmkunkel.github.io)

[![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brandon-kunkel/)

## How it was made

### Tech Stack

* React (javascript)
* Material UI library
* NPM

### CI/CD - Github Actions

Github Actions was used to continuously build and release the React app into static HTML
that can be hosted on Github Pages. The worflows can be found in `/.github/workflows/`

## Routing in Github Pages

Github Pages is designed to be a static site host, and React Single Page Apps don't fit this model. I needed to use the 
React `HashRouter` which routes pages as `%BASE_URL%/#/%PAGE_NAME%` through the main `index.js` logic, rather than trying
to load an HTML file that doesn't exist within this model.

This [Medium post](https://medium.com/@bennirus/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2) 
was my starting point for my implementation with the HashRouter. 

I ran into a couple quirks with using Material Buttons and their `href` or `to` fields to route between pages/views,
but this did not work correctly because the hash router requires the use of the `Link` class from the `react-router-dom`
package to recognize the router and adjust the URL that the router points to. The fix with external button and link objects
from packages like the Material UI React package, required them to be assigned the React Router Dom `Link` element as a
component, then the buttons would route properly. 

Thank goodness for [this post on StackOverflow](https://stackoverflow.com/questions/69420620/how-to-type-a-button-with-react-router-dom-link-in-mui-v5) which saved me from more hours of head scratching. This issue gave
more trouble than I would like to admit

### Favicons

I used [favicon.io](https://favicon.io/favicon-generator/) to generate the simple "B" favicon

### README profile badge

[This repository](https://github.com/alexandresanlim/Badges4-README.md-Profile) has great badges that can be used on your Github profile

### Dark / Light theme resources

I used the MUI theme model and React hooks to implement local storage for theme persistence. 

* [Material UI Theme example](https://mui.com/material-ui/customization/dark-mode/)
* [React hook for using local storage for the theme](https://lightrains.com/blogs/using-localstorage-hook-react/)

### PDF Rendering

I used the `react-pdf` package to implement the Resume pdf viewer [found here](https://brandonmkunkel.github.io/resume)
