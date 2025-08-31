// Hauptdatei für die Anwendung

const { startCLI, startGUI } = require('./vkt');

const args = process.argv.slice(2);

if (args.includes('--help')) {
    console.log('Kommandozeilen-Hilfe');
} else if (args.includes('gui')) {
    startGUI();
} else {
    startCLI();
}