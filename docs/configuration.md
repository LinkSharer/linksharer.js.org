---
sidebar_position: 2
---

# Configuration

Here's a list of available confuguration fields:

| Field    | Type                       | Description                                                 |
| -------- | -------------------------- | ----------------------------------------------------------- |
| template | string                     | The url of the CSS template.                                |
| cname    | string                     | _Optional_. The `CNAME`.                                    |
| seo      | [SEO](#seo)                | SEO configurations.                                         |
| user     | [User](#user)              | User configurations.                                        |
| links    | Array of [Link](#link)     | A list of links/resources.                                  |
| socials  | Array of [Social](#social) | _Optional_. A list of socials to display after the links.   |
| credits  | boolean                    | _Optional_. Whether the credits should be displayed or not. |

## User

| Field  | Type   | Description                                         |
| ------ | ------ | --------------------------------------------------- |
| name   | string | The name to be displayed in the user's information. |
| bio    | string | A short description of the website.                 |
| avatar | string | The url to the user's avatar.                       |

## SEO

| Field       | Type   | Description                |
| ----------- | ------ | -------------------------- |
| title       | string | The website's title.       |
| description | string | The website's description. |

## Social

| Field  | Type   | Description                                                                             |
| ------ | ------ | --------------------------------------------------------------------------------------- |
| url    | string | The social's url.                                                                       |
| icon   | string | The social's icon. Use [Fontawesome's Icons](https://fontawesome.com/search?o=r&m=free) |
| target | string | _Optional_. The target of the anchor element. Default's `self`.                         |

## Link

| Field    | Type    | Description                                                                                    |
| -------- | ------- | ---------------------------------------------------------------------------------------------- |
| name     | string  | The name of the link.                                                                          |
| url      | string  | The social's url.                                                                              |
| icon     | string  | The social's icon. Use [Fontawesome's Icons](https://fontawesome.com/search?o=r&m=free)        |
| target   | string  | _Optional_. The target of the anchor element. Default's `self`.                                |
| sameAs   | boolean | _Optional_. Whether `itemprop="sameAs"` should be included in the HTML element or not.         |
| privacy  | boolean | _Optional_. Whether `rel="noopener noreferrer"` should be included in the HTML element or not. |
| external | boolean | _Optional_. Whether `rel="external"` should be included in the HTML element or not.            |
