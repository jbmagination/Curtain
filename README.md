
# Curtain
The [Electronic Frontier Foundation](https://eff.org) couldn't have said it any better than I can:
> Including [embeds] on your website creates some privacy risk, allowing the party that hosts the [content] to record information about your visitors and place cookies in their browser. This usually happens as soon as a visitor loads a webpage [...]

Curtain limits the privacy risks of embeds in various ways. The lazy Curtain script serves as a replacement to their [MyTube](https://www.eff.org/pages/mytube-limit-privacy-risks-embedded-video). The regular Curtain script, on the other hand, is merely an alternative; it even excels in certain areas.

## Features
### On-the-fly domain changes
Curtain makes changes on-the-fly as to the website that gets loaded *before it even does*, so your visitors enjoy a more private experience. **This feature is not available in the lazy Curtain script.**

### Doesn't use JQuery
[JQuery](https://jquery.com/) comes with a [slew of vulnerabilities](https://snyk.io/blog/84-percent-of-all-websites-impacted-by-jquery-xss-vulnerabilities/) and [usually isn't needed](https://youmightnotneedjquery.com/). It *especially* isn't for Curtain; it does not, and never will, use JQuery.

### LibreJS compatibility
[LibreJS](https://www.gnu.org/software/librejs/), as described by the GNU Project:
> GNU LibreJS aims to address the JavaScript problem described in Richard Stallman's article [The JavaScript Trap](https://www.gnu.org/philosophy/javascript-trap.html). LibreJS is a free add-on for GNU IceCat and other Mozilla-based browsers. It blocks nonfree nontrivial JavaScript while allowing JavaScript that is free and/or trivial.

The Curtain script is compatible with LibreJS: it does not need to be manually whitelisted. Note that websites embedded with Curtain may not be compatible with LibreJS.
