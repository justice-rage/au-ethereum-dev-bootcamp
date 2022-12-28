const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    // Solution 2:
    // ------
    return keccak256(publicKey.slice(1)).slice(-20);

    // Solution 1:
    // ------
    // const slicePublicKey = publicKey.slice(1);
    // const hashPublicKey = keccak256(slicePublicKey);
    // const last20Bytes = hashPublicKey.slice(-20);
    // return last20Bytes;
}

module.exports = getAddress;