const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    // Solution 2:
    // ------
    return keccak256(utf8ToBytes(message));
    
    // Solution 1:
    // ------
    // const bytes = utf8ToBytes(message);
    // return keccak256(bytes);
}

module.exports = hashMessage;