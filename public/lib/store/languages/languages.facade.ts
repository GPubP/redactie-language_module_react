import { alertService, BaseEntityFacade } from '@redactie/utils';

import { ALERT_CONTAINER_IDS } from '../../language.const';
import {
	languagesApiService,
	LanguagesApiService,
	LanguageSchema,
	LanguagesSearchParams,
} from '../../services/languages';

import { getAlertMessages } from './languages.messages';
import { languagesQuery, LanguagesQuery } from './languages.query';
import { languagesStore, LanguagesStore } from './languages.store';

export class LanguagesFacade extends BaseEntityFacade<
	LanguagesStore,
	LanguagesApiService,
	LanguagesQuery
> {
	public readonly meta$ = this.query.meta$;
	public readonly languages$ = this.query.languages$;
	public readonly language$ = this.query.language$;
	public readonly languageDraft$ = this.query.languageDraft$;

	public getLanguages(searchParams: LanguagesSearchParams): void {
		const { isFetching } = this.query.getValue();

		if (isFetching) {
			return;
		}

		this.store.setIsFetching(true);

		this.service
			.getLanguages(searchParams)
			.then(response => {
				if (!response) {
					throw new Error('Getting languages failed!');
				}

				this.store.set(response._embedded);
				this.store.update({
					meta: response._page,
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

	public getLanguage(uuid: string): void {
		const { isFetchingOne, contentType } = this.query.getValue();
		if (isFetchingOne || contentType?.uuid === uuid) {
			return;
		}

		this.store.setIsFetchingOne(true);
		this.service
			.getLanguage(uuid)
			.then(response => {
				if (!response) {
					throw new Error(`Getting language '${uuid}' failed!`);
				}

				this.store.update({
					language: response,
					isFetchingOne: false,
				});
			})
			.catch(error => {
				this.store.update({
					error,
					isFetchingOne: false,
				});
			});
	}

	public updateLanguage(body: LanguageSchema, alertId: string): Promise<void> {
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
					language: response,
					languageDraft: response,
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
					language: response,
					languageDraft: response,
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

	public async deleteLanguage(body: LanguageSchema): Promise<void> {
		const { isRemoving } = this.query.getValue();

		if (isRemoving) {
			return Promise.resolve();
		}

		this.store.setIsRemoving(true);

		return this.service
			.deleteLanguage(body.uuid as string)
			.then(() => {
				this.store.update({
					language: undefined,
					languageDraft: undefined,
					isRemoving: false,
				});

				// Timeout because the alert should be visible on the overview page
				setTimeout(() => {
					alertService.success(getAlertMessages(body).delete.success, {
						containerId: ALERT_CONTAINER_IDS.overview,
					});
				}, 300);
			})
			.catch(error => {
				this.store.update({
					error,
					isRemoving: false,
				});

				alertService.danger(getAlertMessages(body).delete.error, {
					containerId: ALERT_CONTAINER_IDS.settings,
				});

				throw new Error('Deleting language failed!');
			});
	}

	public setLanguage(language: LanguageSchema): void {
		this.store.update({
			language,
		});
	}

	public setLanguageDraft(languageDraft: LanguageSchema): void {
		this.store.update({
			languageDraft,
		});
	}

	public unsetLanguageDraft(): void {
		this.store.update({
			languageDraft: undefined,
		});
	}

	public unsetLanguage(): void {
		this.store.update({
			language: undefined,
		});
	}
}

export const languagesFacade = new LanguagesFacade(
	languagesStore,
	languagesApiService,
	languagesQuery
);
