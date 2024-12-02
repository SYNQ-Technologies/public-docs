import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SYNQ Frontline Hero',
  tagline: 'The digital future of frontline work',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://synq-technologies.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/public-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SYNQ-Technologies', // Usually your GitHub org/user name.
  projectName: 'public-docs', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SYNQ-Technologies/public-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'SYNQ Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/SYNQ-Technologies/public-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Topics',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Get Started',
              to: '/docs/category/getting-started',
            },
            {
              label: 'Microsoft Teams',
              to: '/docs/getting-started/microsoft-teams',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              to: 'https://www.synqtech.com/terms-of-service',
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.synqtech.com/privacy-policy',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCMOueM3G_-hjm-oWZ4FyNDw',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/synq-access/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/synqtech/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/synqaccess',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Company',
              to: 'https://www.synqtech.com/about',
            },
            {
              label: 'Blog',
              to: 'https://www.synqtech.com/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SYNQ Technologies.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
