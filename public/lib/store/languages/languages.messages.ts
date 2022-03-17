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
			message: `"${data.name}" is nu geactiveerd voor je tenant en kan gebruikt worden op content te vertalen.`,
		},
		error: {
			title: 'Activatie mislukt',
			message: `Het activeren van de taal is mislukt`,
		},
	},
	deactivate: {
		success: {
			title: 'Gedeactiveerd',
			message: `"${data.name}" is gedeactiveerd en kan niet meer gebruikt worden om content te vertalen.`,
		},
		error: {
			title: 'Deactivatie mislukt',
			message: `Het deactiveren van de taal is mislukt`,
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
