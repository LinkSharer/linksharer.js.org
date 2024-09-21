---
sidebar_position: 2
---

# Configuration

Here's a list of available confuguration fields:

| Field     | Type                       | Description                                                                           |
| --------- | -------------------------- | ------------------------------------------------------------------------------------- |
| template  | string                     | The url of the CSS template.                                                          |
| cname     | string                     | _Optional_. The `CNAME`.                                                              |
| seo       | [SEO](#seo)                | SEO configurations.                                                                   |
| user      | [User](#user)              | User configurations.                                                                  |
| links     | Array of [Link](#link)     | A list of links/resources.                                                            |
| socials   | Array of [Social](#social) | _Optional_. A list of socials to display after the links.                             |
| analytics | boolean                    | _Optional_. Whether [analytics](analytics) should be enabled or not. Default's false. |
| scripts   | Array of [Script](#script) | _Optional_. A list of scripts to be included in the page.                             |
| credits   | boolean                    | _Optional_. Whether the credits should be displayed or not. Default's true.           |

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
| name   | string | _Optional_. The name of the url, will be used as `aria-label`.                          |

## Link

| Field    | Type    | Description                                                                                                     |
| -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| name     | string  | The name of the link.                                                                                           |
| url      | string  | The link's url.                                                                                                 |
| icon     | string  | The link's icon. Use [Fontawesome's Icons](https://fontawesome.com/search?o=r&m=free)                           |
| target   | string  | _Optional_. The target of the anchor element. Default's `self`.                                                 |
| sameAs   | boolean | _Optional_. Whether `itemprop="sameAs"` should be included in the HTML element or not. Default's false.         |
| privacy  | boolean | _Optional_. Whether `rel="noopener noreferrer"` should be included in the HTML element or not. Default's false. |
| external | boolean | _Optional_. Whether `rel="external"` should be included in the HTML element or not. Default's false.            |

## Script

| Field | Type    | Description                                                                                       |
| ----- | ------- | ------------------------------------------------------------------------------------------------- |
| src   | string  | The `src` attribute of the `<script` tag                                                          |
| head  | boolean | _Optional_. Whether the script should be in the `<head>` or in the `<body>` tag. Default's false. |
| ...   | any     | _Optional_. Any other key-value pair to add as attributes to the `<script>` tag.                  |
