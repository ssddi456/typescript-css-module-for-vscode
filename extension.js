const vscode = require('vscode');

async function activate(/** @types vscode.ExtensionContext */context) {
    // Get the TS extension
    const tsExtension = vscode.extensions.getExtension('vscode.typescript-language-features');
    if (!tsExtension) {
        return;
    }

    await tsExtension.activate();

    // Get the API from the TS extension
    if (!tsExtension.exports || !tsExtension.exports.getAPI) {
        return;
    }

    const api = tsExtension.exports.getAPI(0);
    if (!api) {
        return;
    }

    // Configure the 'my-typescript-plugin-id' plugin
    api.configurePlugin('typescript-plugin-css-modules', {
        "customMatcher": "\\.(css|less|styl)$"
    });
}

module.exports = {
    activate
};
