// Predefined wallet addresses or seeds for automatic scanning
const predefinedSeeds = [
    "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about",
    // Add additional seeds if required
];

const wallets = [];

// Automatically start fetching wallet data from predefined seeds
window.onload = async function () {
    const table = document.getElementById("walletTable");
    table.innerHTML = '<tr><td colspan="5">Fetching wallet data...</td></tr>';

    for (let i = 0; i < predefinedSeeds.length; i++) {
        const seed = predefinedSeeds[i];
        try {
            const address = deriveAddressFromSeed(seed);
            const data = await fetchWalletData(address);

            wallets.push({ seed, address, ...data });
            updateTable(i + 1, address, data.balance, data.lastTransactionDate);
        } catch (error) {
            console.error(`Error processing wallet ${i + 1}:`, error.message);
        }
    }

    if (wallets.length === 0) {
        table.innerHTML = '<tr><td colspan="5">No data fetched</td></tr>';
    }
};

// Derive address from seed
function deriveAddressFromSeed(seed) {
    return "1FakeAddressForTesting123456";
}

// Mock function to fetch wallet data
async function fetchWalletData(address) {
    return {
        balance: Math.random() * 10,
        lastTransactionDate: Date(),
    };
}

// Update the table with fetched wallet data
function updateTable(index, address, balance, lastTransactionDate) {
    const table = document.getElementById("walletTable");
    table.innerHTML += `
        <tr>
            <td>${index}</td>
            <td>${address}</td>
            <td>${balance.toFixed(4)} BTC</td>
            <td>${lastTransactionDate}</td>
            <td><button onclick="viewWallet(${index - 1})">View Full</button></td>
        </tr>
    `;
}

// View full wallet details
function viewWallet(index) {
    const wallet = wallets[index];
    document.getElementById("seed").textContent = wallet.seed;
    document.getElementById("walletAddress").textContent = wallet.address;
    document.getElementById("walletBalance").textContent = `${wallet.balance.toFixed(4)} BTC`;
    document.getElementById("transactions").textContent = wallet.lastTransactionDate;

    document.getElementById("result").style.display = "none";
    document.getElementById("walletDetails").style.display = "block";
}

// Helper function to go back to the summary
function goBack() {
    document.getElementById("walletDetails").style.display = "none";
    document.getElementById("result").style.display = "block";
}