import Ember from 'ember';
var $ = window.jQuery;

export default Ember.Route.extend({
  model() {

    $.get("https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=538efd35759443348adfb06e7bcd1689", function(serverResponse) {
        console.log(serverResponse);
      });

    let record1 = this.store.createRecord('buzzfeed', {
      "author": "Abhimanyu Ghoshal",
      "title": "Google fortifies Gmail on Android to battle phishing attacks",
      "description": "Right after a major Docs phishing scam began doing the rounds, Google has updated its Gmail app for Android to help users avoid falling for such traps.\r\n\r\nThe new feature warns users ...",
      "url": "https://thenextweb.com/apps/2017/05/04/google-fortifies-gmail-on-android-to-battle-phishing-attacks/",
      "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Safer-Links-in-Gmail-on-Android-hed.jpg",
      "publishedAt": "2017-05-04T06:03:37Z"
    });

    let record2 = this.store.createRecord('buzzfeed', {
      "author": "Rachel Kaser",
      "title": "Watch: Dashcam footage captures plane crash and insane explosion",
      "description": "Everyone's lost their electricity for a little while, but usually it's because of something mundane -- routine maintenance, a lightning strike, an electrocuted squirrel. The residents ...",
      "url": "https://thenextweb.com/insider/2017/05/04/watch-dashcam-footage-captures-plane-crash-insane-explosion/",
      "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/giphy-22.gif",
      "publishedAt": "2017-05-04T01:26:50Z"
    });

    let record3 = this.store.createRecord('buzzfeed', {
      "author": "Bryan Clark",
      "title": "18-year-old student creates cancer-detecting bra",
      "description": "A high schooler from Mexico designed a bra that helps in the early detection of breast cancer. Drawing inspiration from his mother -- who lost both breasts to the disease -- Julian ...",
      "url": "https://thenextweb.com/gadgets/2017/05/04/18-year-old-student-creates-cancer-detecting-bra/",
      "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/bra.jpg",
      "publishedAt": "2017-05-04T01:12:56Z"
    });

    let record4 = this.store.createRecord('buzzfeed', {
      "author": "Napier Lopez",
      "title": "Facebook brings reactions to comments, because of course they did",
      "description": "It was only a matter of time: Facebook has now brought reactions to comments.\r\n\r\nAs first reported by The Verge, reactions have now started to show up in comments for desktop users. ...",
      "url": "https://thenextweb.com/facebook/2017/05/04/facebook-brings-reactions-comments-course/",
      "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Reactions-in-comments.jpg",
      "publishedAt": "2017-05-04T00:43:04Z"
    });

    let record5 = this.store.createRecord('buzzfeed', {
      "author": "Rachel Kaser",
      "title": "Pirates may have cracked the code to 4K UHD torrents",
      "description": "Someone may have finally cracked a form of DVD encryption believed to be impenetrable. Potentially, this could mean it's now possible to download 4K Blu-Ray movies online, though you ...",
      "url": "https://thenextweb.com/insider/2017/05/04/pirates-may-cracked-code-4k-uhd-torrents/",
      "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Generic-disc-image.jpg",
      "publishedAt": "2017-05-04T00:02:06Z"
    });

    let record6 = this.store.createRecord('buzzfeed', {
      "author": "Bryan Clark",
      "title": "WhatsApp is down [Update: It’s back]",
      "description": "WhatsApp, the popular Facebook-owned messaging app, is down.\r\n\r\nAccording to hundreds of users on Twitter, the outage seems to have started around 30 minutes ago, and there's no word ...",
      "url": "https://thenextweb.com/apps/2017/05/03/whatsapp-is-down/",
      "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/04/whatsapp.jpg",
      "publishedAt": "2017-05-03T23:39:44Z"
    });

    let record7 = this.store.createRecord('buzzfeed', {
      "author": "Napier Lopez",
      "title": "Massive Google Docs phishing attack swept the internet today [Updated]",
      "description": "If you just received an unexpected email in which someone you know is sharing a Google Doc with you, do not open it. \r\n\r\nThere is currently a rather massive phishing attack making ...",
      "url": "https://thenextweb.com/security/2017/05/03/massive-google-docs-phishing-attack-currently-sweeping-internet/",
      "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/No..jpg",
      "publishedAt": "2017-05-03T22:23:10Z"
    });

    return [record1, record2, record3, record4, record5, record6, record7];
  }
});
