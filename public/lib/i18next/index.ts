import translations from '../../assets/i18n/locales/template.json';
import translationsConnector from '../connectors/translations';

export const registerTranslations = (): void => {
	translationsConnector.modules.addTranslation('languages', 'nl_BE', translations);
};
