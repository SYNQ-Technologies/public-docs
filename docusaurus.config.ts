import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';
import lunrSearch from 'docusaurus-lunr-search'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'SYNQ Frontline Hero',
    tagline: 'The digital future of frontline work',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://docs.synqtech.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

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

    plugins: [
        [
            // Note: search doesn't work in dev mode. 
            // You need to run `npm run build` and `npm run serve`.
            lunrSearch,
            {
                languages: ['en'],
            }
        ],
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/SYNQ-Technologies/public-docs/tree/main/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
        [
            'redocusaurus',
            {
                // Note: the download button 404s in development, but works on a full build
                specs: [
                    {
                        id: 'call-for-help-api',
                        spec: 'static/api/call-for-help-api.yaml',
                    },
                    {
                        id: 'lockers-api',
                        spec: 'static/api/lockers-api.yaml',
                    },
                    {
                        id: 'radio-api',
                        spec: 'static/api/radio-api.yaml',
                    },
                ],
                theme: {
                    primaryColor: '#01a2ff',
                    options: {
                        disableSearch: true,
                        scrollYOffset: 60,
                    },
                },
            },
        ] satisfies Redocusaurus.PresetEntry,
    ],
    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
            },
        },
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
                    position: 'right',
                    className: 'header-github-link',
                    title: 'GitHub repository',
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
                            to: 'https://www.synqtech.com/privacy-policy',
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
