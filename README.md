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

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Difficulties
* Ember is a powerful MVC framework that, while modularizing the different aspects of our app, has proven to be difficult for us to fully grasp.
* Although we tried to implement all features as talked about in the presentation, some proved to be beyond our abilities given the time constraints.

## Unimplemented Features
* Featured page: This was something that we regrettably removed. Our vision was that as you upvote different articles, the ones with the most upvotes would be transfered to the Featured page. This proved to be infeasible at this time due to lack of documentation online as well as time constraints.
* Messaging between users in article lobby page after selecting an article: We really wanted this feature to work. How cool would it be to have instant messaging between users after reading an article? We were able to get messages to post locally, but it does not send those messages to everyone else looking at the page. The difficulty with this one again stemmed from unfamiliarity with Ember.

## Bugs
* When viewing an article lobby page (after selecting an article from a category), if you press refresh, the necessary article information will not appear on screen.
* Upvoted articles do not always update for other people connected to the site.

## A Positive Note
Although there were some things that we were unable to fully implement by the end, we all agree that we have learned a great deal from this project. In the beginning, Ember seemed to put a large question mark above everyone's head. However, by the end, although we did still have some difficulties and unimplemented features, we all feel like we have a much better understanding of how the framework works.
