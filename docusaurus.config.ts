import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const githubOrg = "https://github.com/LinkSharer";
const githubUrl = `${githubOrg}/LinkSharer`;
const demoUrl = "https://demo.linkshare.js.org";

const config: Config = {
  title: 'Link Sharer',
  tagline: 'Link & Resource sharer powered by GitHub Pages',
  favicon: 'img/favicon.ico',

  url: 'https://linkshare.js.org',
  baseUrl: '/',

  organizationName: 'LinkSharer',
  projectName: 'LinkSharer',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${githubUrl}/tree/main/packages/create-docusaurus/templates/shared/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            `${githubUrl}/tree/main/packages/create-docusaurus/templates/shared/`,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'LinkSharer',
      logo: {
        alt: 'LinkSharer Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          label: "Example Website",
          to: demoUrl,
        },
        {
          label: "GitHub Template",
          to: githubUrl
        },
        {
          href: githubUrl,
          label: '@LinkSharer on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'LinkSharer',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog'
            },
            {
              label: 'Example Website',
              href: demoUrl
            },
            {
              label: 'GitHub Organization',
              href: githubOrg
            }
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Start a Discussion',
              href: `${githubUrl}/discussions`
            },
            {
              label: 'Open an Issue',
              href: `${githubUrl}/issues`
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/linksharer',
            },
            {
              label: 'Feedback',
              href: 'mailto:sebastiano@racca.me',
            },
            {
              label: 'Contributing',
              href: '/docs/contributing'
            }
          ],
        },
        {
          title: "Sebastiano's OpenSource",
          items: [
            {
              label: '@SebaOfficial on GitHub',
              href: 'https://github.com/SebaOfficial',
            },
            {
              label: "Blog",
              href: "https://blog.racca.me"
            },
            {
              label: "Website",
              href: "https://racca.me"
            }
          ],
        },
      ],
      copyright: `LinkSharer is an open-source project by <a href="https://racca.me">Sebastiano Racca</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
