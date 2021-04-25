require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict help frame tribe stomach regret misery unhappy gown light army ghost'; 
let testAccounts = [
"0x7d00e9ee98ff00a26673488ea3a666cbef47f7bdfb9699aa5be1265a4815ec1c",
"0x0561d25d38345caf187923025df17881a0a64c92827110f44097a9cd0f367747",
"0x42a4d83587b38ceb3984b3c07621ddba24caff4dddbef40159fee3e15b33095f",
"0x4ac9fcbdc800935967f0ac62059965721a661233111ed7ae2120f0515175928d",
"0x5f515b9981da6be6c936b4b6df7bb36b6962d4f27c5a9336a1be30dc532d7ee4",
"0x3c537ef87c26f577b252256779a0f196fbb9cd72bb0d90df1a97e397e4393820",
"0x5cea9a8ebd7f0083645d0db45c88dcbf4c5ff7354a539343a5ae70834e14ddbf",
"0x49b2a587892a6117e4dbdb7efcba337e252e001ef0682950e089d95701210b3c",
"0xba50fa6d2d4e25de1873969377e91bdfabcf467d9f9826bf737b7d0257b83592",
"0xb0aa913aa84b050b5ce2bd551e0ba3173ccec405315371eb74d20fd245e90ff6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

