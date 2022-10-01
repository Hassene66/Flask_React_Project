<h1 align="center">
  <br/>
  <img src="./screenshots/logo.svg" alt="IsammLabs" width="250"/></a>
  <h4 align="center">A Tunisian based price tracking web application. </h4>
  <br/>
</h1>
<div align="center">


![Python](https://img.shields.io/badge/React-17.0.2-orange)
![Current Version](https://img.shields.io/badge/version-v1.0-blue)
![GitHub contributors](https://img.shields.io/github/contributors/Hassene66/IsammLabs)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
</div>

<p align="center">
  <a href="#basic-overview">Basic overview</a> •
  <a href="#key-features">Key features</a> •
  <a href="#technology-used">Technology used</a> •
  <a href="#how-to-use">How to use</a> •
  <a href="#project-overview">Project overview</a> •
  <a href="#you-may-also-like">You may also like</a>
  
</p>

## Basic overview
The application's sole purpose is to keep track of the products price available on Tunisian e-commerce websites,then provide the user with the lowest price. An automated scraping script is used to provide the products data.

## Key features
* Scraping popular tunisian e-commerce websites using <a href="https://scrapy.org" target="_blank">Scrapy</a> web-crawling framework 
* Hosting <a href="https://scrapyd.readthedocs.io/en/stable" target="_blank">scrapyd</a> (local scrapy spiders runner) on heroku cloud 
* Using Cron jobs to automate the daily scraping process.
* Implemented 'atlas search' service to rank relevant search results using react in the frontend and flask as a  backend server. 

## Technology used

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
    <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" />
    <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" />

## How to use
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer and [Setting the development environment](https://reactnative.dev/docs/environment-setup).
From your command line:
```bash
# Clone this repository
$ git clone https://github.com/Hassene66/Flask_React_Project

# Go into the repository
$ cd Flask_React_Project

# Install dependencies
$ npm install

# Run the app 
$ npm run dev
```




## Project overview


| | |
|:-------------------------:|:-------------------------:|
|<img width="600" alt="splashscreen" src="./screenshots/homepage.PNG"> |  <img width="600" alt="splashscreen" src="./screenshots/search.PNG">

## You may also like

- [HiCoach](https://github.com/salimkazdaghli/Hicotech-Frontend) - A coaching web app.
- [Tahi](https://github.com/Hassene66/Tahi-Project) - A traditional food delivery mobile app.
