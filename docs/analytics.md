---
sidebar_position: 4
---

# Analytics

Analytics are entirely handled by [simpleanalytics.com](https://www.simpleanalytics.com/?referral=rofes).

You can see the analytics for the demo website [here](https://dashboard.simpleanalytics.com/demo.linksharer.js.org?referral=rofes).

## Usage

Follow these steps to enable analytics in you LinkSharer website:

1. Enable `analytics` in you [configuration file](configuration).
2. Signup to [simpleanalytics.com](https://www.simpleanalytics.com/?referral=rofes) and [enter your domain](#limitations)

## Short Links

If analytics are enabled and a sort version of a link is set, analytics are collected on that link.

### How?

When a link in the links list is clicked, the user is redirected to `/s/[short_version]`, when the [simpleanalytics](https://www.simpleanalytics.com/?referral=rofes) script is loaded and analytics are collected, the user will be redirected to the actual url.

## Limitations

In order to enable analytics you can't use an url like user.github.io/repository, you must set a [CNAME](configuration) or create a repository named `user.github.io`, where `user` is your username.
