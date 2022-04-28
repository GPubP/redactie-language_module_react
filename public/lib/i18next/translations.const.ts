import { I18NextTranslations } from '@redactie/translations-module';

import translationsConnector from '../connectors/translations';

const tKey = translationsConnector.core.tKey;

// TODO: Place all your copy here
const MODULE_TRANSLATIONS = Object.freeze<I18NextTranslations>({
	LANGUAGES_TITLE: tKey('LANGUAGES_TITLE', 'Talen'),
	LANGUAGES_DELETE_DESCRIPTION: tKey(
		'LANGUAGES_DELETE_DESCRIPTION',
		'Er zijn binnen deze tenant geen sites die deze taal gebruiken. Als je deze taal deactiveert kan deze niet meer geactiveerd worden op een site.'
	),
});

export { MODULE_TRANSLATIONS };
