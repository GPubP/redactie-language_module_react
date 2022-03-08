import { LanguageSchema } from '../../services/languages';

export const getAlertMessages = (data: LanguageSchema): Record<string, any> => ({
	create: {
		success: {
			title: 'Aangemaakt',
			message: `De nieuwe taal "${data.name}" is succesvol aangemaakt`,
		},
		error: {
			title: 'Aanmaken mislukt',
			message: `Het aanmaken van de taal "${data.name}" is mislukt`,
		},
	},
	update: {
		success: {
			title: 'Bewaard',
			message: `De taal "${data.name}" is bewaard`,
		},
		error: {
			title: 'Bewaren mislukt',
			message: `Het bewaren van de taal "${data.name}" is mislukt`,
		},
	},
	delete: {
		success: {
			title: 'Verwijderd',
			message: `De taal "${data.name}" is verwijderd`,
		},
		error: {
			title: 'Verwijderen mislukt',
			message: `Het verwijderen van de taal "${data.name}" is mislukt`,
		},
	},
});
