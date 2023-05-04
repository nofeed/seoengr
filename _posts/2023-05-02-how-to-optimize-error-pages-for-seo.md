---
title: "How to Optimise Error Pages for SEO: A Concise Guide"
description: Error pages are an important factor in SEO and user experience. Poorly designed error pages can lead to a negative user experience, lower rankings on search engine results, and decreased engagement. To optimize error pages for SEO, reduce errors as much as possible, serve the correct HTTP status code, and customize
layout: post
date: 2023-05-02
last_modified_at: 2023-05-02
image: /assets/images/404.jpg
---
![GitHub's 404 error page](/assets/images/github-404-error-page.png)

This is GitHub's 404 page, the page that is actually served on my company's website if the URL you try to access is not available. In the years, I had a number of personal blogs that are now forgotten and don't exist anymore, but that I somehow linked somewhere. If you find one of those ancient links, that's what you get: GitHub's 404 for [GitHub pages](https://pages.github.com/ "GitHub pages homepage"){:rel=>'nofollow'} which is where my website is hosted as I've never customized my 404 and I'm returning whatever my hosting service returns. The user is lost in a page that has no branding and looks generic. Unfortunately, search engines also see the same page when they follow those links, which is not good.

Optimizing error pages (such as the 404 page) for SEO and to improve user experience is a strategic way to boost your website's ranking and turn inactive pages into valuable marketing assets. Encountering an error page can be frustrating, but improving its functionality and usefulness can lead to __a better user experience and increased engagement__.
We'll work on improving the design and content of our error pages to ensure that search engines recognize them as valuable resources for users.

## Understanding Error Pages

[Error pages are an often overlooked](https://www.pingdom.com/blog/the-5-most-common-http-errors-according-to-google/ "The 5 most common HTTP errors according to Google") but important factor in SEO and user experience. They directly impact a website's SERP ranking and user retention. This section delves into the different types of error pages, how they affect the user experience, and their impact on SEO rankings.
There's no escaping it: as you surf the web, *you're bound to run into a number of different errors*. Some common ones include:

  - [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403 "403 Forbidden"){:rel="nofollow"}: This error occurs when a user tries to access a restricted page or resource, for which they don't have permission.
  - [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404 "404 Not Found"){:rel="nofollow"}: This error occurs when a user tries to access a non-existent page or a deleted resource on the website.
  - [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 "500 Internal Server Error"){:rel="nofollow"}: This error is caused by server-side issues and may indicate a problem with the website's code or hosting provider.

The presence of different errors on the website points to diverse issues, each with a unique cause. What is important is to find out the problems as soon as possible using logs and Google Search Console crawl errors.
When error pages appear, it can result in a negative user experience as it causes visitors to feel frustrated and confused. Users might leave a website and look for information elsewhere if the error page is poorly designed. This could adversely affect the website's credibility and reputation.

A well-designed error page can guide users to relevant content on the site and keep them engaged for longer. Moreover, it provides useful data that can aid users in understanding the matter and maybe even fixing it independently.

## Technical SEO for Error Pages

The first step is obviously reducing errors as much as possible. While I may not be able to diagnose issues on someone else's sites, I have observed frequent issues that result from common errors.
It is advisable to redirect all 404 errors, particularly if they serve as targets for any links. Websites change, so it might often not be possible, but redirecting is first good user experience, __*second preserves link juice*__. If there's no good match for a redirect, serve a 404.

Error pages can directly impact a website's visibility on search engines. Google and other search engines factor in user experience when determining a site's ranking in the SERPs, poor user experience can lower a site's ranking.
To manage 404 errors effectively, you need to account for two types: those that happen on your site and those that pop up on sites you link to. According to Google, [the ones on your website don't really hurt rankings and are a blend of misspellings, outdated content, or nonexistent pages](https://support.google.com/webmasters/answer/2445990?hl=en&sjid=10049565889766394268-EU "404 (Page Not Found) errors"){:rel="nofollow"}. Linking to 404 pages can harm your rankings because search engines may consider the pages with broken links outdated or unmaintained, which can damage your website's credibility and lower its ranking. To maintain a website's rankings, it's essential to routinely monitor the site for errors and address them as quickly as possible. Using a crawler like [ScreamingFrog](https://www.screamingfrog.co.uk/seo-spider/ "ScreamingFrog SEO Spider") is one of the simplest ways to identify broken links on your website.

[Do not ever redirect a 404 to the homepage](https://yoast.com/seo-anti-patterns-301-redirect-all-your-404s-to-your-homepage/ "SEO anti-patterns: 301 redirect all your 404s to your homepage"). Preserving link juice by using the most representative and generic page of the website might look like a good idea, but it isn't. There's a risk that search engines might perceive your homepage as a soft-404 error.

Remember that properly handling redirects, for example, is essential for maintaining solid SEO performances. Avoid using temporary 302 redirects in favor of permanent 301 redirects, as [301s pass some link juice to the new page](https://www.searchenginejournal.com/301-redirect-pagerank/275503/ "Google Shares How 301 Redirects Pass PageRank"), whereas 302s do not.

Correct usage of HTTP status codes is also a critical factor to keep in mind. If you serve a 404, do it with a 404 HTTP status code, not with a 200 (Success). [Soft-404 - 404 pages served within a 200 response - are bad user experience, and must be fixed](https://developers.google.com/search/blog/2008/08/farewell-to-soft-404s "Farewell to soft 404s"){:rel="nofollow"}.

Handling 500s is another area where mistakes can easily occur. When your website is under maintenance and a user asks for a specific URL, make sure to redirect them to a maintenance page like https://mywebsite/503 with the appropriate [503 status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503 "503 Service Unavailable"){:rel="nofollow"} and the [retry-after header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After "Retry-After Header"){:rel="nofollow"}, instead of serving a 200 success response. If you don't take care, indexed pages can be overwritten by error page content, leading to reduced click-throughs and search engine traffic.

It's worth mentioning that error pages __don't transfer link authority__. This is an important aspect to consider. Are you working on creating a custom 404 page? Ensure optimal user experience by prioritizing the page's utility over its SEO value. Its primary focus should be to help users navigate through a missing page.

<div class="my-10">
  <blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">The link goes nowhere, so we drop it. If you recommend something that doesn&#39;t exist anymore, it&#39;s really a useful recommendation, right?</p>&mdash; giovannimu (official) — #StaplerLife (@JohnMu) <a href="https://twitter.com/JohnMu/status/1461264550578343946?ref_src=twsrc%5Etfw">November 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

## Optimizing Error Page Content

Optimizing the content of error pages plays a crucial role in ensuring a better user experience and maintaining SEO value. Focus on three main areas: __*informative error messages*__, __*navigation options*__, and __*relevant visuals and graphics*__.

Instead of displaying generic or unhelpful error messages, customize them to provide value to the user. Ensure that the content is informative and, if possible, includes keywords that can boost your SEO. Additionally, provide a helpful suggestion or a brief explanation of the error, which can guide users on what to do next.

Adding a search bar and navigation menu on the error page lets users quickly find content without going back to the homepage. This feature not only improves user experience but also increases the page's usefulness. Additionally, consider adding links to popular or recent content, as well as contact information, in case users need further assistance.

Including eye-catching visuals has the potential to enhance the appearance and overall user experience of the page. Ensure that the visuals are relevant to the error message and align with your website's design and branding. This approach __can effectively turn an otherwise negative experience into a positive one for the user__.

![Moz's 404 error page](/assets/images/moz-404-error-page.png)

Moz's 404 page is an excellent example to examine, as it exemplifies all the traits I just listed. The webpage effectively conveys its message and provides a seamlessly accessible search bar and menu, allowing users to engage further with the content. The use of [Roger, MOZ's mascot](https://moz.com/blog/the-evolution-of-roger "The evolution of Roger"){:rel="nofollow"}, adds a fun and engaging touch that reinforces the brand.

## How did I fix my 404 page?

![NoFeed's 404 error page](/assets/images/nofeed-404-error-page.png "https://nofeed.org 404 Error page")

The first step was to jot down some text that appealed to me. Although not extraordinary, it's interesting to note that the website has been around for quite some time now - [its domain was registered in 2008, making it 15 years old](https://who.is/whois/nofeed.org "Whois for nofeed.org"){:rel="nofollow"} - and has been put to use in various ways over the years. On one hand this can be interesting, on the other it explains why the page doesn't exist anymore.

To match the website's overall aesthetics, I incorporated red headings, blue links, and identical fonts. This helps make the page blend in with the rest of the website instead of looking out of place.
Finally, I have included links to my homepage and resume, giving the user the option to either leave the site or explore additional content. My website is quite basic, lacking both a menu and a search form. Actually, it doesn't matter much. If I can successfully redirect the user to the homepage or my resume, it will be a significant win.

## Monitoring and Adjusting Your Optimization Efforts

As the competitive landscape of SEO evolves, it is crucial for marketers to revisit their error page optimization strategies and identify opportunities for improvement.

One of the most effective ways to gauge the success of your error page optimization efforts is through analyzing traffic and conversions. By using tools like [Google Analytics](https://analytics.google.com "Google Analytics"){:rel="nofollow"}, you can track user behavior on your error pages, including engagement metrics and conversion rates. Determine if users are finding your error page content valuable by analyzing metrics like time spent on the page and click-through rates. Remember also to check your outbound links for 404s, providing broken links to your users can harm their experience on your website and lower your ranking on Google.

### To summarize:

- Monitor logs and Google Search Console for errors.
- Attempt to fix as many as possible with redirects.
- When there is an error, it's important to use the correct HTTP status code and provide custom content. This will help the user and also improve your brand image.
- Monitor errors and error pages accordingly.
