import Core from '@redactie/redactie-core';
import { RolesRightsModuleAPI } from '@redactie/roles-rights-module';

class RolesRightsConnector {
	public static apiName = 'roles-rights-module';
	public securityRights = {
		create: 'languages_create',
		read: 'languages_read',
		update: 'languages_update',
		delete: 'languages_remove',
		activate: 'languages_activate',
		deactivate: 'languages_deactivate',
	};
	public api: RolesRightsModuleAPI;

	constructor(api?: RolesRightsModuleAPI) {
		if (!api) {
			throw new Error(
				`Roles rights Module:
				Dependencies not found: ${RolesRightsConnector.apiName}`
			);
		}
		this.api = api;
	}
}

const rolesRightsConnector = new RolesRightsConnector(
	Core.modules.getModuleAPI<RolesRightsModuleAPI>(RolesRightsConnector.apiName)
);

export default rolesRightsConnector;
