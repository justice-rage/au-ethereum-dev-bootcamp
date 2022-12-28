const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    // Solution 2:
    // ------
    return secp.recoverPublicKey(hashMessage(message), signature, recoveryBit);

    // solution 1:
    // ------
    // const publicKey = secp.recoverPublicKey(hashMessage(message), signature, recoveryBit);
    // return publicKey;
}

module.exports = recoverKey;