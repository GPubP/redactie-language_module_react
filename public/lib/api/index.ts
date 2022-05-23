import Core from '@redactie/redactie-core';

import * as API from './api';

export const registerLanguagesModule = (): void => {
	Core.modules.exposeModuleApi('languages-module', API);
};

export { API };
