Curtain and MyTube serve similar purposes, so it would be fair to compare them. Comparisons made with MyTube version `7.x-1.2` and Curtain version `1.0.0`.

# Focus
Curtain focuses on any and all embeds, *period*. MyTube, on the other hand, primarily focuses on embedded video content (although it does work with non-video content just fine).

# Size
There are two things to consider here: the size for the end-user, and the size of how much it takes up on your server.

Here's how much MyTube takes up, also bringing in JQuery:
| File(s)                                       | UTF-8 bytes       |
|:---------------------------------------------:|:-----------------:|
| MyTube (JavaScript)                           | 1,239             |
| MyTube (CSS)                                  | 734               |
| MyTube (CSS + JavaScript)                     | 1,983             |
| JQuery 1.4.4 (minified)                       | 78,600            | <!-- JQuery 1.4.4 is the version Drupal 7.89 uses -->
| JQuery 1.7.2 (minified)                       | 94,839            | <!-- JQuery 1.7.2 is the version the EFF uses as of writing --> 
| JQuery 1.12.4 (minified)                      | 97,162            | <!-- JQuery 1.12.4 is the latest JQuery 1.x --> 
| JQuery 3.6.0 (minified)                       | 91,866            | <!-- JQuery 3.6.0 is the latest JQuery as of writing --> 
| **MyTube (CSS + JavaScript + JQuery 1.4.4)**  | **80,583**        |
| **MyTube (CSS + JavaScript + JQuery 1.7.2)**  | **96,822**        |
| **MyTube (CSS + JavaScript + JQuery 1.12.4)** | **99,145**        |
| **MyTube (CSS + JavaScript + JQuery 3.6.0)**  | **93,849**        |

Additionally, following the install instructions in `INSTALL.txt` leaves a server administrator with [] bytes used up.

Curtain with every module *does* take up more than MyTube standalone, sitting at [] UTF-8 bytes. However, Curtain by itself only takes up [] UTF-8 bytes.

# Features
## Referrer policy
MyTube does *not* set a referrer policy under `iframe` elements. The default referrer policy is `no-referrer-when-downgrade`, meaning HTTPS -> HTTPS connections *do* send referrer headers. This is a privacy problem; by default, Curtain sets the referrer policy to `no-referrer`.

## Domain changes
You can get better privacy when loading YouTube videos by changing the domain of a YouTube embed from `youtube.com` to `youtube-nocookie.com`. When you make this change, YouTube will add significantly less cookies to your browser. Curtain makes this change for you by default, and allows for many others; MyTube does not have such option.

# Other differences
* MyTube is under the GNU General Public License version 2, while Curtain is under the Apache 2.0 license
* Curtain is detected as free when using LibreJS, while MyTube is not

