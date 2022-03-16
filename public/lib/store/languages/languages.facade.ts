import { alertService, BaseEntityFacade } from '@redactie/utils';

import { languagesApiService, LanguagesApiService, LanguageSchema } from '../../services/languages';

import { getAlertMessages } from './languages.messages';
import { languagesQuery, LanguagesQuery } from './languages.query';
import { languagesStore, LanguagesStore } from './languages.store';

export class LanguagesFacade extends BaseEntityFacade<
	LanguagesStore,
	LanguagesApiService,
	LanguagesQuery
> {
	public readonly languages$ = this.query.languages$;
	public readonly languageIdDeactivating$ = this.query.select('languageIdDeactivating');
	public readonly isLanguageActivating$ = this.query.select('isLanguageActivating');

	public getLanguages(props: Record<string, boolean | number | string>): void {
		const { isFetching } = this.query.getValue();

		if (isFetching) {
			return;
		}

		this.store.setIsFetching(true);

		this.service
			.getLanguages(props)
			.then(response => {
				if (!response) {
					throw new Error('Getting languages failed!');
				}

				this.store.set(response._embedded.languages);
				this.store.update({
					isFetching: false,
				});
			})
			.catch(error => {
				this.store.update({
					error,
					isFetching: false,
				});
			});
	}

	public updateLanguage(body: Partial<LanguageSchema>, alertId: string): Promise<void> {
		const { isUpdating } = this.query.getValue();

		if (isUpdating) {
			return Promise.resolve();
		}

		this.store.setIsUpdating(true);

		return this.service
			.updateLanguage(body)
			.then(response => {
				if (!response) {
					throw new Error(`Updating language '${body.uuid}' failed!`);
				}

				this.store.update({
					isUpdating: false,
				});

				alertService.success(getAlertMessages(response).update.success, {
					containerId: alertId,
				});
			})
			.catch(error => {
				this.store.update({
					error,
					isUpdating: false,
				});

				alertService.danger(getAlertMessages(body).update.error, {
					containerId: alertId,
				});
			});
	}

	public activateLanguage(languageId: string, alertId: string): Promise<void> {
		const { isUpdating } = this.query.getValue();

		if (isUpdating) {
			return Promise.resolve();
		}

		this.store.update({ isLanguageActivating: true });
		this.store.setIsUpdating(true);

		return this.service
			.updateLanguage({
				uuid: languageId,
				active: true,
			})
			.then(response => {
				if (!response) {
					throw new Error(`Activating language '${languageId}' failed!`);
				}

				this.store.update({ isUpdating: false, isLanguageActivating: false });
				this.store.upsert(languageId, { active: true });

				alertService.success(getAlertMessages(response).activate.success, {
					containerId: alertId,
				});
			})
			.catch(error => {
				this.store.update({
					error,
					isUpdating: false,
					isLanguageActivating: false,
				});

				alertService.danger(getAlertMessages({ uuid: languageId }).activate.error, {
					containerId: alertId,
				});
			});
	}

	public deactivateLanguage(languageId: string, alertId: string): Promise<void> {
		const { isUpdating } = this.query.getValue();

		if (isUpdating) {
			return Promise.resolve();
		}

		this.store.update({ languageIdDeactivating: languageId });
		this.store.setIsUpdating(true);

		return this.service
			.updateLanguage({
				uuid: languageId,
				active: false,
			})
			.then(response => {
				if (!response) {
					throw new Error(`Deactivating language '${languageId}' failed!`);
				}

				this.store.update({ isUpdating: false, languageIdDeactivating: null });
				this.store.upsert(languageId, { active: false });

				alertService.success(getAlertMessages(response).deactivate.success, {
					containerId: alertId,
				});
			})
			.catch(error => {
				this.store.update({
					error,
					isUpdating: false,
					languageIdDeactivating: null,
				});

				alertService.success(getAlertMessages({ uuid: languageId }).deactivate.error, {
					containerId: alertId,
				});
			});
	}

	public createLanguage(body: LanguageSchema, alertId: string): void {
		const { isCreating } = this.query.getValue();

		if (isCreating) {
			return;
		}

		this.store.setIsCreating(true);

		this.service
			.createLanguage(body)
			.then(response => {
				if (!response) {
					throw new Error(`Creating language '${body?.name}' failed!`);
				}

				this.store.update({
					isCreating: false,
				});
				alertService.success(getAlertMessages(response).create.success, {
					containerId: alertId,
				});
			})
			.catch(error => {
				this.store.update({
					error,
					isCreating: false,
				});

				alertService.danger(getAlertMessages(body).create.error, {
					containerId: alertId,
				});
			});
	}
}

export const languagesFacade = new LanguagesFacade(
	languagesStore,
	languagesApiService,
	languagesQuery
);
