import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  networkSidebar: [
    'interstellar-network',
    {
      type: 'category',
      label: 'Proof of Human Intent',
      link: {
        type: 'generated-index',
        title: 'Proof of Human Intent',
        description:
          'How Interstellar binds critical actions to human validation with cryptographic proofs. ✨',
      },
      items: [
        'proof-of-human-intent/overview',
        'proof-of-human-intent/threat-model',
        'proof-of-human-intent/dynamic-visual-cryptography',
        'proof-of-human-intent/visual-simulation',
        'proof-of-human-intent/garbled-circuits',
      ],
    },
    {
      type: 'category',
      label: 'Design',
      link: {
        type: 'generated-index',
        title: 'Design',
        description:
          'Architecture and technology behind Interstellar Network. ✨',
      },
      items: [
        'design/mobile-devices',
        'design/interstellar-blockchain',
      ],
    },
    {
      type: 'category',
      label: 'Core Advantages',
      link: {
        type: 'generated-index',
        title: 'Core Advantages',
        description:
          'How Interstellar compares to or complements other solutions. ✨',
      },
      items: [
        'advantages/vs-traditional-wallets',
        'advantages/vs-passkeys-social-logins',
        'advantages/vs-authenticator-apps',
        'advantages/vs-edr-mtd-security',
      ],
    },
    {
      type: 'category',
      label: 'Deployments',
      link: {
        type: 'generated-index',
        title: 'Deployments',
        description:
          'Blockchains and agent protocols Interstellar supports or is bringing online. ✨',
      },
      items: [
        'deployments/blockchains',
        'deployments/agents',
      ],
    },
  ],
};

export default sidebars;
