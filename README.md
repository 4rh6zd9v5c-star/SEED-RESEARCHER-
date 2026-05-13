# SEED-RESEARCHER Wallet Checker

The `SEED-RESEARCHER Wallet Checker` is a web-based application for scanning up to 100 cryptocurrency wallet seeds to retrieve balances, last transaction information, and other account data. This application fetches data in real-time using the Blockchair API.

## Features
- Paste up to 100 wallet BIP-39 seed phrases.
- Derive wallet addresses from seed phrases.
- Check wallet balances and last transaction details.
- View full wallet information, including:
  - Seed phrase
  - Wallet address
  - Current balance
  - Last transaction details
- Ability to copy wallet details (seed/address) for external use.

## Technologies Used
- **HTML**: For the app structure.
- **JavaScript**: Handles logic for seed derivation and interaction with the Blockchair API.
  - `bitcoinjs-lib`: Used for wallet key derivation.
  - `@noble/secp256k1`: Cryptographic library for Bitcoin operations.
- **CSS**: Used for responsiveness and style.

## How to Run the App
### Clone Repository
```bash
git clone https://github.com/4rh6zd9v5c-star/SEED-RESEARCHER-.git
cd SEED-RESEARCHER-
```

### Open the App Locally
Open the `index.html` file in your browser to load the Wallet Balance Checker app.

### Deploy Using GitHub Pages
1. Go to your repository settings on GitHub.
2. Scroll down to the "Pages" section.
3. Select the branch (e.g., `main`) containing the app files and `/root` directory.
4. Save. The app will be available at `<your-github-username>.github.io/SEED-RESEARCHER-/`.

## Notes
- Ensure internet access for API calls to the Blockchair API.
- Add your own API key for higher request limits on Blockchair.

## Contribution
Feel free to open issues or create pull requests to improve this app.