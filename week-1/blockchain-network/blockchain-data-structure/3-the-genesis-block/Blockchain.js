const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block('Genesis') ];
    }
}

module.exports = Blockchain;