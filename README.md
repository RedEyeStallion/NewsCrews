# News Cruise

This README outlines the details of collaborating on this Ember application.

## Description
News Cruise is our reimagined take on the classic 'news app', where users can get informed about various news stories as they occur on the fly. We support a variety of news categories, including sports, politics, science, econonomics, and entertainment. Our app integrates NewsAPI from newsapi.org to seamlessly bring you the latest articles to read and discuss from the some of the most well known and highly rated news outlets from around the world. After reading an article, you may upvote it as well as comment with others about it in our integrated messaging area. Welcome to News Cruise!

## Members
* Joseph Porter
* Andres Imperial
* Waymon Ho
* Chih-Hung Hsieh
* Ryan Hodgson
* Eric Lara

## How to use this app
1: With the ember server and websockets server running, navigate to http://localhost:4200/. News Cruise will appear on screen.

2: Use the navigation bar at the top of the screen to pick a category to browse through.

3: While browsing a category, you can select an article that interests you by clicking anywhere on the text or picture. This will take you to a new screen containing the article name, picture, a short description, and the source.

4: When you are ready to read the article, click the blue 'Read Article!' button, which will take you to the article source.

5: After you are done reading, you may return to the previous page and click the green 'Up Vote' button if you liked it. You can also post a message and chat about the article with others in our messaging area down below.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* Start ember server: `ember server`
* Start websockets server: `npm run server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
