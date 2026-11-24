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
          'PoHI makes human intent cryptographically verifiable. ✨',
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
      label: 'Core Components',
      link: {
        type: 'generated-index',
        title: 'Core Components',
        description:
          'Interstellar connects your mobile device to purpose-built signer networks to power PoHI workflows. ✨',
      },
      items: [
        'components/mobile-devices',
        'components/signer-networks',
      ],
    },
    {
      type: 'category',
      label: 'Advantages',
      link: {
        type: 'generated-index',
        title: 'Advantages',
        description:
          'How does Interstellar compare to, or complement other solutions? ✨',
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
          'Deployment environments Interstellar already supports or is bringing online. ✨',
      },
      items: [
        'deployments/blockchains',
        'deployments/agents',
      ],
    },
  ],
};

export default sidebars;
