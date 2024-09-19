---
sidebar_position: 1
---

# Getting Started

To use Upptime as an uptime monitor and status website generator, you start by creating a repository using the template on GitHub.

## Create a repository from the template

You can click on the following link to generate a repository using the template: [**Create a new repository**](https://github.com/LinkSharer/LinkSharer/generate).
Or visit the [LinkSharer repository on GitHub](https://github.com/LinkSharer/LinkSharer) and click on the "Use this template" button on the top-right.

In both cases, the next steps are:

1. Enter a name for your new repository.
2. Make sure it's public.
3. Click on "Create repository from template".

For more details on how to create repositories using template, read the article on the GitHub website: [Creating a repository from a template](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

## After creating your repository

The following steps apply to your new repository, not the `LinkSharer/LinkSharer` template repository.

### Enable GitHub Pages

To create the website, you have to enable GitHub Pages on your new repository.  
Usually, GitHub will enable GitHub Pages as soon as a `gh-pages` branch is detected.
If this doesn't happen should you do the following steps:

1. Go to your repository settings page
2. Go to the "Pages" sub-section on the left
3. Under "Source", change "None" to "Deploy from a branch"
4. In the Branch dropdown, select `gh-pages` and `/(root)`
5. Click on "Save"

After saving, you will see confirmation text "Your site is live at..." at the top of the page.
For more information on enabling GitHub Pages, see the article on the GitHub website: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Update configuration

The `user/config.ts` file is used as the central configuration store.
In that file, you can specify all the links and resources to share.
For more information, visit [Configuration](/docs/configuration).

Then, your status page may be hosted on https://user.github.io/repo/, where user is your GitHub username and repo is your repository name or to the specified `CNAME` if you provided one.
