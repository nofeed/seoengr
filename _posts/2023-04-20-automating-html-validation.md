---
title: Automating HTML Validation for a Happier Life
description: HTML validation should be a key part of any publishing platform, that can and should be automated programmatically.
layout: post
date: 2023-04-20
image: /assets/images/w3cs.png
---
HTML validation is a check you perform on an HTML document to see if it adheres to the [W3C standard](https://html.spec.whatwg.org/multipage/ "W3C HTML Spec").
When I first started building websites, there were a lot of discussions about web standards and how useful they were: it was a very different time, [with one browser implementation ruling all over the others](https://web.archive.org/web/20011208113836/http://www.thecounter.com/stats/2001/August/browser.php "TheCounter stats for Aug 2001"){:rel='nofollow'} and some very unhealthy development practices so wildly used that forced some of the best to show [the road to enlightenment](http://www.csszengarden.com/ "The CSS Zen Garden"){:rel='nofollow'}.

## Why should I validate?

![W3C Logo](/assets/images/w3cs.png){:class="float-left my-10 md:m-10"}

[The W3C has a document explaining why validating web pages is crucial](https://validator.w3.org/docs/why.html "Why validate?"), and it's the best way to elucidate the importance of it when publishing online.

As a developer, the validator has always been a trusted aid when crafting HTML. It is easier to have your syntax constantly checked by a specific compiler; it improves quality by catching most problems in real time.

The key benefit is future-proofing your documents. Even if the standard is updated, browsers will still properly interpret your document if it's a [valid XHTML 1.0 document](https://www.w3.org/TR/xhtml1/ "W3C XHTML 1.0 Spec"){:rel='nofollow'}. Invalid HTML code can cause varying interpretations and result in strange and undefined behavior such as rendering discrepancies or issues with JavaScript.

If you test on every browser on earth, good for you: I applaud your dedication and professionality. I [doubt](http://links.twibright.com/ "Links browser"){:rel="nofollow"} [every](https://apps.kde.org/en-gb/konqueror/ "Konqueror browser"){:rel="nofollow"} [browser](https://www.browzar.com/ "Browzar browser"){:rel="nofollow"} [though](https://www.fenrir-inc.com/jp/sleipnir/ "Sleipnir browser"){:rel="nofollow"}, really. But I understand, you test on Google Chrome, Firefox, Microsoft Edge and Apple Safari, you definitely should be in a good place. Starting with a valid HTML and CSS stylesheet though can greatly reduce testing and debugging costs. It establishes a common standard and incorporates best practices from the past 30 years.

I also must say, it's professional. HTML is a rather straightforward markup language, with just a bunch of words whose meaning is very straightforward to interpret semantically. It's not 1998 anymore and all browsers have been very good at interpreting it for a long time. If your HTML isn't valid, I think you're lazy, and probably shouldn't be writing HTML in the first place.

## Does it help with ranking?

In 2017, [John Mueller](https://io.google/2022/speakers/john-mueller/ "John Mueller bio") has been asked if W3C validation was relevant for the algorithm. [The answer was very succinct and clear](https://twitter.com/JohnMu/status/858990753909022720){:rel='nofollow'}:

<cite>
  &ldquo;As long as it can be rendered & SD extracted: validation pretty much doesn't matter.&rdquo;
</cite>

As most browsers do, Google tries its best to make sense of invalid markup, as long as it can be rendered and it can extract structured data.

In [another support page](https://support.google.com/webmasters/answer/9679690?visit_id=638173553390080774-2639895229&rd=1 "Reasons for drops in crawl rate"){:rel='nofollow'}, Google says that:

<cite>
  &ldquo;Broken HTML or unsupported content on your pages: If Googlebot can't parse the content of the page, perhaps because it uses an unsupported media type or the page is only images, it won't be able to crawl them. Use the URL Inspection tool to see how Googlebot sees your page.&rdquo;
</cite>

Though invalid HTML does not affect SEO performance or ranking, it's best to publish valid pages. This is emphasized by Roger Montti in his excellent article [&ldquo;6 Reasons why Google says valid HTML matters&rdquo;](https://www.searchenginejournal.com/google-valid-html/258881/).

## Should we automate it?

Most developers, at some point in their development process, validate HTML, which is helpful but highly suboptimal if done sporadically.

Because things change. Yesterday, you were asked to change an image, and today you need to add a new paragraph and a link. Despite starting with a valid HTML document, you're now left with a messy patchwork containing 40 validation errors. It happens, and reacting to change is a skill you should master.

[Continuous integration and delivery](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment "Continuous integration vs delivery vs development") are widely-used practices in software development. They help engineers maintain functionality when multiple developers make changes. In its simplest form, every time a release is triggered, the product's test suite is run, and the release happens only if all tests have a green light.

If we translate this practice to publishing content, every time we publish, deploy or somehow change anything on our website, we validate every page. Why every page? Because things change. With modern templating systems most pages are loosely coupled, you change the markup of your footer and suddenly all your pages are invalid.

Fortunately, the W3C comes to our aid [with an API](https://github.com/validator/validator/wiki/Service-%C2%BB-Input-%C2%BB-POST-body "Recommended way to call the W3C checker"), that lets us validate HTML programmatically.

## The code

Let's start by crafting some simple, invalid HTML, and save it in a **'test.html'** file.

```html
<!DOCTYPE html> 
<html lang="en">
<head> 
  <meta charset="UTF-8">
  <title>Invalid HTML Example</title>
  <noscript><img src="https://example.com/image.gif"></noscript> 
</head> 

<body>
  <h1>This HTML is invalid</h1>
  
  <p>On this page we will make some mistakes, to see the validator in action.
  <p>On the web we can create links to the <a href="https://www.w3.org/">W3C</a>, the group that determines web technologies.</p>
  <p>The <a href="http://validator.w3.org/>validator</a> is a tool that aids us in finding errors</p>
</body>
</html>
```

There are a few mistakes: first an invalid `<noscript>` tag in the head, [which could break hreflang](https://www.seroundtable.com/google-head-section-break-hreflang-unrecognizable-22340.html "Breaking Head Section Can Make Hreflang Unrecognizable To Google"); then a forgotten `"` leaves an `<a>` tag open.
Let's try this out using the magnificent [curl](https://curl.se/ 'Curl'){:rel="nofollow"}:

```bash
curl -H "Content-Type: text/html; charset=utf-8" \
  --data-binary @test.html \
  https://validator.w3.org/nu/\?out\=gnu
```

The output, as expected, highlights no less than 7 errors.

```
:4.5-4.28: info: Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.
:6.15-6.55: error: Bad start tag in “img” in “noscript” in “head”.
:6.15-6.55: error: An “img” element must have an “alt” attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.
:6.56-6.66: error: Stray end tag “noscript”.
:7.3-7.9: error: Stray end tag “head”.
:9.3-9.8: error: Start tag “body” seen but an element of the same type was already open.
:17.9-17.9: error: End of file reached when inside an attribute value. Ignoring tag.
```

Let's fix our HTML (I'll let you complete this exercise, it should be fairly straightforward) and submit it again to the API. If your HTML is valid, it returns nothing. My only criticism of this API is that it doesn't use HTTP status codes properly. It always returns a 200, but I believe it should [return a 200 only in case of success](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200 "200 OK"){:rel='nofollow'} and [400 for failure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400 "400 Bad Request"){:rel='nofollow'}.

Let's begin with something intriguing yet primitive - a [`bash`](https://www.gnu.org/software/bash/ "Bash"){:rel="nofollow"} script named **'validator.sh'** that can function on any Unix or properly configured Windows.

```bash
#!/usr/bin/env bash

shopt -s nullglob
for i in **/*.html; do
  echo "
  Validating $i:"
  curl -H "Content-Type: text/html; charset=utf-8" \
    --data-binary @"$i" \
    https://validator.w3.org/nu/\?out\=gnu
  echo ""
done
```

Now that we have the script, we can run it before publishing to have every HTML file validated, and in case correct the errors. Talking about Continuous Delivery, you can have the script return an error with `exit 1` in case the validation doesn't pass. Unfortunately, as I already mentioned, the API doesn't use HTTP codes properly, and we need a different solution:

```bash
#!/usr/bin/env bash

shopt -s nullglob
for i in "$1"/*.html; do
  echo "
  Validating $i:"
  output=$( curl -s -H "Content-Type: text/html; charset=utf-8" \
            --data-binary @"$i" \
            https://validator.w3.org/nu/\?out\=gnu )

  echo $output

  if [ -n "$output" ]; then
    exit 0
  else
    echo "
    $output"
    exit 1
  fi
done
```

We trap the output in a variable, and check if it's empty or has any content. [In case it's empty we exit with 0, in case it has something inside we exit with 1](https://tldp.org/LDP/abs/html/exit-status.html "Bash exit statuses"). Another improvement is that we can direct the script to a specific directory. For example:

```bash
$~ ./validator.sh ./my_blog/html
```

Again, this is very primitive, but possibly "good enough" to get you started and incorporate HTML validation into your development and in your build process. Although the API isn't perfect, it's quite useful. [It outputs JSON](https://github.com/validator/validator/wiki/Output-%C2%BB-JSON "JSON output for the W3C validator") which makes it easy to get validation results and integrate it into the build process using any language you might prefer.

### Bonus ~ eating my own dogfood

I really like [Jekyll](https://jekyllrb.com/ "Jekyll site generator"){:rel="nofollow"}, which is my favorite publishing platform and the platform this blog runs on. As an experienced Ruby developer I had to eat my own dog food. I integrated the [w3c_validators gem](https://github.com/w3c-validators/w3c_validators "W3C Validators gem"){:rel="nofollow"} into Jekyll in a plugin to avoid running bash scripts. Now every time the blog is regenerated I validate all my HTML and, surprise, all my CSS.

All code is on GitHub in [jekyll-validator](https://github.com/nofeed/jekyll-validator "Jekyll validator gem").
