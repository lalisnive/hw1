// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
var hexpri=privKey.toString('hex');
console.log("privKey:", privKey);
console.log(hexpri);
 
// pubKey
const pubKey = wallet.getPublicKey();
var hexpub= pubKey.toString('hex');
console.log("pubKey:", pubKey);
console.log(hexpub);

// address
let address = wallet.getAddressString();
console.log("address:", address);

/***** address *****/

// step 2:  public_key_hash = Keccak-256(public_key)
let public_key_hash = keccak256(pubKey);
console.log("public_key_hash", public_key_hash);

// step 3:  address = ‘0x’ + last 20 bytes of public_key_hash
let address1="0x"+public_key_hash.substr(public_key_hash.length-40);
console.log("address1:", address1);

