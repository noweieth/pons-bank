# Pons Bank

A responsive single-page token dashboard designed to match the minimal, dark visual language of the Pons launchpad.

## Included

- Token overview and core market metrics
- Fee-share totals and next distribution summary
- Holder distribution and top-holder leaderboard
- Recent on-chain reward table
- Community and social links

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Production data

The current metrics, wallet addresses, token contract, and social URLs are interface preview data. Replace them in `index.html` after the token launches, or connect the fields to an indexer/API before treating them as live on-chain information.
