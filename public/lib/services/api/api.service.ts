import Core from '@redactie/redactie-core';
import ky from 'ky';

import { LANGUAGES_REQUEST_PREFIX_URL } from './api.service.const';

export type KyInstance = typeof ky;

const CoreConfig = Core.config.getValue('core') || {};

// Create ky instance with defaults
const api: KyInstance = ky.create({
	prefixUrl: LANGUAGES_REQUEST_PREFIX_URL,
	timeout: false,
	headers: {
		'x-tenant-id': CoreConfig.tenantId,
	},
});

export default api;
