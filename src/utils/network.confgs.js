export const EthereumMainnet = [
  {
    name: "Ethereum Mainnet",
    chain: "ETH",
    network: "mainnet",
    icon: "ethereum",
    rpc: [
      `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      `wss://mainnet.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      "https://api.mycryptoapi.com/eth",
      "https://cloudflare-eth.com",
    ],
    faucets: [],
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    infoURL: "https://ethereum.org",
    shortName: "eth",
    chainId: "0x1",
    networkId: 1,
    slip44: 60,
    ens: { registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    explorers: [
      { name: "etherscan", url: "https://etherscan.io", standard: "EIP3091" },
    ],
  },
];
