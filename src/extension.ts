import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "verybadjoke" is now active!');

	let disposable = vscode.commands.registerCommand('verybadjoke.randomJoke', () => {

		const blagues = [
			"Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent toujours dans le bateau.",
			"Qu'est-ce qui est jaune et qui attend ? Jonathan.",
			"Qu'est-ce qu'un poisson dit à un autre poisson ? Rien, ils ne peuvent pas parler, ils sont des poissons !",
			"Pourquoi les planteurs de riz ne sont-ils jamais en colère ? Parce qu'ils ont la paix du riz.",
			"Comment appelle-t-on un boomerang qui ne revient jamais ? Un bâton.",
			"Pourquoi les plombiers sont-ils de bons musiciens ? Parce qu'ils sont de bons tuyautistes.",
			"Pourquoi les pluies ne peuvent-elles jamais garder de secrets ? Parce qu'elles tombent toujours.",
			"Qu'est-ce qu'un nuage dit à un autre nuage ? On se retrouve en bas.",
			"Comment appelle-t-on un chien magicien ? Un labracadabrador.",
			"Pourquoi les planteurs d'arbres sont-ils toujours invités aux fêtes ? Parce qu'ils sont de bons semeurs d'ambiance.",
			"Qu'est-ce qu'un oiseau dit à son petit le matin ? C'est l'heure de tweeter.",
			"Pourquoi les plombiers n'aiment-ils jamais jouer à cache-cache ? Parce qu'ils sont toujours trop bien raccordés.",
			"Quel est le comble pour un électricien ? De ne pas être au courant.",
			"Pourquoi les plongeurs plongent-ils toujours avec une bouteille d'eau ? Parce qu'ils ont soif de plongée.",
			"Qu'est-ce qu'un ordinateur mange pour le petit déjeuner ? Des cookies.",
		];
		
		const indexAleatoire = Math.floor(Math.random() * blagues.length);
		const blagueChoisie = blagues[indexAleatoire];
		vscode.window.showInformationMessage(blagueChoisie);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
