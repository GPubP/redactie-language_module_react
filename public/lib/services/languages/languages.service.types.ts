import { EmbeddedResourceResponse } from '@redactie/utils';

export type LanguagesSchema = EmbeddedResourceResponse<'languages', LanguageSchema>;

interface SitesDetailData {
	name: string;
	url: string;
	contentTypes: string[];
	languages: string[];
	description: string;
	modulesConfig: unknown[];
}

interface SiteDetailModel {
	data: SitesDetailData;
	uuid: string;
}
export interface LanguageSchema {
	uuid: string;
	_id?: string;
	name: string;
	key: string;
	sites?: SiteDetailModel[];
	localizedName?: string;
	primary?: boolean;
	active?: boolean;
}
