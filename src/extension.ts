import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let formatDisposable = vscode.commands.registerCommand('cookie-formatter.decompress', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            const text = document.getText(selection).trim();

            const cookies = text.split(';').filter(cookie => cookie.trim() !== '');
            const formattedText = cookies.map(cookie => cookie.trim()).join(';\n');

            editor.edit(editBuilder => {
                editBuilder.replace(selection, formattedText);
            });
        }
    });

    let reverseDisposable = vscode.commands.registerCommand('cookie-formatter.compress', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            const text = document.getText(selection).trim();

            const cookies = text.split(/[\n;]/).map(cookie => cookie.trim()).filter(cookie => cookie !== '');
            const reversedText = cookies.join('; ') + ';';

            editor.edit(editBuilder => {
                editBuilder.replace(selection, reversedText);
            });
        }
    });

    context.subscriptions.push(formatDisposable);
    context.subscriptions.push(reverseDisposable);
}

export function deactivate() {}