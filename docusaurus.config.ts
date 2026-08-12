import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Interstellar Docs',
  tagline: 'Human-intent verification for blockchains, payments, and agents',
  favicon: 'img/Interstellar_Favicon_Black.png',

  future: {
    v4: true,
    faster: true,
  },

  url: 'https://docs.interstellar.network',
  baseUrl: '/',

  organizationName: 'Interstellar-Network',
  projectName: 'interstellar-docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/Persistence_of_Vision_Slide.png',
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for Interstellar Network — Proof of Human Intent, mobile security, and the Mobile SDK.',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'Interstellar',
        src: 'img/Interstellar_Circle_Icon_Black.png',
        href: 'https://interstellar.network',
        target: '_blank',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'networkSidebar',
          position: 'left',
          label: 'Interstellar Network',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sdkSidebar',
          position: 'left',
          label: 'Mobile SDK',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
