import { I18NextTranslations } from '@redactie/translations-module';

import translationsConnector from '../connectors/translations';

const tKey = translationsConnector.core.tKey;

// TODO: Place all your copy here
const MODULE_TRANSLATIONS = Object.freeze<I18NextTranslations>({
	LANGUAGES_TITLE: tKey('LANGUAGES_TITLE', 'Talen'),
});

export { MODULE_TRANSLATIONS };
