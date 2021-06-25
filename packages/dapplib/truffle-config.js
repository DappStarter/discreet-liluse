require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember minor hockey process sun gaze'; 
let testAccounts = [
"0x5338b92b1889d742d3b1868040e69a45544efa0ec451e39ec1f4550ab9aa88ff",
"0x93246719c45b8835ec3e7e9ca3bbdade271c6185b02590e9b9b61f289b597755",
"0x8dbef6fecf89ab55ff8156571b9ace04a98ca4e03aeb48980b7e3ca4c8d282cc",
"0x56b4cda506030902b431cb3cf7dc1902d82dc6306bfb680153dedc142a4feabb",
"0x5d6505a2f604af4da4e7a0a2997f64d7384063602aa6347edf7cad56aa323742",
"0x7e47257a36728ebea90572f0b4187c01759c969ca22582b727d5e1c211711292",
"0x18f8c80638e51c063fc9b8ba226b6fa1d84255b483e8c8f0a0b8eb9420619067",
"0x6146fef16bd7b9e94b19ee1eb112f63807896b1d186d9e38989ab43b5c792c42",
"0xf7a87d819cbfdd871277775922d6bd70de3d2ddc3d44b66ef469491a1d43c2f4",
"0x0843e7049fff9c30e4745606c19972828220075d23e027250bd8c9a711ffba54"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

