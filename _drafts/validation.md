---
title: Automating HTML validation to live a happier life
description: HTML validation should be a fundamental part of any publishing platform, that can and should be done programmatically.
date: 2023-04-14
layout: post
---
HTML validation is a check you perform on an HTML document to see if it adheres to the [W3C standard](https://html.spec.whatwg.org/multipage/ "W3C HTML Spec").
When I first started building websites, there were a lot of discussions about web standards and how useful they were: it was a very different time, [with one browser implementation ruling all over the others](https://web.archive.org/web/20011208113836/http://www.thecounter.com/stats/2001/August/browser.php "TheCounter stats for Aug 2001"){:rel='nofollow'} and some very unhealthy development practices so wildly used that forced some of the best to show [the road to enlightenment](http://www.csszengarden.com/ "The CSS Zen Garden"){:rel='nofollow'}.

## Why should I validate?

![W3C Logo](/assets/images/w3cs.png){:class="w-40 float-left"}

[The W3C has a document explaining why validating web pages is crucial](https://validator.w3.org/docs/why.html "Why validate?"), and it's the best way to elucidate the importance of it when publishing online.

As a developer, the validator has always been a trusted aid when crafting HTML. It is easier to have your syntax constantly checked by a specific compiler; it improves quality by catching most problems in real time.

The key benefit is future-proofing your documents. Even if the standard is updated, browsers will still properly interpret your document if it's a [valid XHTML 1.0 document](https://www.w3.org/TR/xhtml1/ "W3C XHTML 1.0 Spec"){:rel='nofollow'}. Invalid HTML code can cause varying interpretations and result in strange and undefined behavior such as rendering discrepancies or issues with JavaScript.

If you test on every browser on earth, good for you: I applaud your dedication and professionality. I [doubt](http://links.twibright.com/ "Links browser"){:rel="nofollow"} [every](https://apps.kde.org/en-gb/konqueror/ "Konqueror browser"){:rel="nofollow"} [browser](https://www.browzar.com/ "Browzar browser"){:rel="nofollow"} [though](https://www.fenrir-inc.com/jp/sleipnir/ "Sleipnir browser"){:rel="nofollow"}, really. But I understand, you test on Google Chrome, Firefox, Microsoft Edge and Apple Safari, you definitely should be in a good place. Starting with a valid HTML and CSS stylesheet though can greatly reduce testing and debugging costs. It establishes a common standard and incorporates best practices from the past 30 years.

I also must say, it's professional. HTML is a rather straightforward markup language, with just a bunch of words whose meaning is very straightforward to interpret semantically. It's not 1998 anymore and all browsers have been very good at interpreting it for a long time. If your HTML isn't valid, I think you're lazy, and probably shouldn't be writing HTML in the first place.

## Does it help with ranking?

## Should we automate it?

## The code

### Bonus content