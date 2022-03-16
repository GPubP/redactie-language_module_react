import { LanguageSchema } from '../../services/languages';

export const getAlertMessages = (data: Partial<LanguageSchema>): Record<string, any> => ({
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
	activate: {
		success: {
			title: 'Geactiveerd',
			message: `De taal "${data.name}" is succesvol geactiveerd`,
		},
		error: {
			title: 'Activatie mislukt',
			message: `Het activeren van de taal is mislukt`,
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
});
