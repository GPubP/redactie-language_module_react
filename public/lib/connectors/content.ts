import {
	ContentAPI,
	ContentModel,
	ExternalCompartmentOptions,
	ExternalTabOptions,
} from '@redactie/content-module';
import Core from '@redactie/redactie-core';
import { SearchParams } from '@redactie/utils';

class ContentConnector {
	public api: ContentAPI;

	public readonly apiName: string = 'content-module';

	constructor() {
		this.api = Core.modules.getModuleAPI<ContentAPI>(this.apiName);
	}

	public registerContentDetailCompartment(
		name: string,
		options: ExternalCompartmentOptions
	): void | false {
		return this.api ? this.api.registerContentDetailCompartment(name, options) : false;
	}

	public registerContentDetailTab(name: string, options: ExternalTabOptions): void | false {
		return this.api ? this.api.registerContentDetailTab(name, options) : false;
	}

	public getContentItem = (siteId: string, contentItemId: string): void | false =>
		this.api ? this.api.store.content.facade.getContentItem(siteId, contentItemId) : false;

	public getContent = (siteId: string, searchParams: SearchParams): Promise<void> | false =>
		this.api ? this.api.store.content.facade.getContent(siteId, searchParams) : false;

	public setBaseContentItem = (contentItem: ContentModel): void | false =>
		this.api ? this.api.store.content.facade.setBaseContentItem(contentItem) : false;

	public get contentService(): ContentAPI['store']['content']['service'] {
		return this.api.store.content.service;
	}

	public get useContent(): ContentAPI['hooks']['useContent'] {
		return this.api.hooks.useContent;
	}
}

const contentConnector = new ContentConnector();

export default contentConnector;
