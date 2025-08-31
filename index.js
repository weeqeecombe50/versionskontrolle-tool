// Hauptdatei für die Anwendung

const { startCLI, startGUI } = require('./vkt');

const args = process.argv.slice(2);

if (args.includes('--help')) {
    console.log('Kommandozeilen-Hilfe: Verwendung: node index.js [gui | --help]');
} else if (args.includes('gui')) {
    startGUI();
} else {
    startCLI();
}