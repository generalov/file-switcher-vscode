'use strict';
import * as vscode from 'vscode';

const extension = 'file-switcher';

function showAlternativeFiles(args: any) {
    vscode.window.showInformationMessage('Hello World!');
}

export function activate(context: vscode.ExtensionContext) {
    console.log(`${extension} is active!`);
    context.subscriptions.push(vscode.commands.registerCommand(`${extension}.showAlternativeFiles`, showAlternativeFiles));
}

export function deactivate() {
}