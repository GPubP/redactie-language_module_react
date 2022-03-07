import React, { ReactElement } from 'react';

import translationsConnector from '../../connectors/translations';
import { MODULE_TRANSLATIONS } from '../../i18next/translations.const';

const LanguagesOverview = (): ReactElement => {
	const [t] = translationsConnector.useModuleTranslation();
	return <h1>{t(MODULE_TRANSLATIONS.LANGUAGE_TITLE)}</h1>;
};

export default LanguagesOverview;
