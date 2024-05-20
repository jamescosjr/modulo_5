const readline = require('readline');

function criarInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

module.exports = { criarInterface };