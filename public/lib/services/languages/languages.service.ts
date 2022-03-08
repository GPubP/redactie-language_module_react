import { parseSearchParams, SearchParams } from '@redactie/utils';

import { apiService, DEFAULT_SEARCH_PARAMS } from '../api';

import { LanguageSchema, LanguagesSchema, LanguagesSearchParams } from './languages.service.types';

export class LanguagesApiService {
	public async getLanguages(
		searchParams: LanguagesSearchParams = DEFAULT_SEARCH_PARAMS
	): Promise<LanguagesSchema | null> {
		try {
			const response: LanguagesSchema = await apiService
				.get(`languages?${parseSearchParams(searchParams as SearchParams)}`)
				.json();

			if (!response._embedded) {
				throw new Error('Failed to get languages');
			}

			return response;
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	public async getLanguage(uuid: string): Promise<LanguageSchema | null> {
		try {
			const response: LanguageSchema = await apiService.get(`languages/${uuid}`).json();

			return response;
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	public async updateLanguage(language: LanguageSchema): Promise<LanguageSchema | null> {
		try {
			const response: LanguageSchema = await apiService
				.put(`languages/${language.uuid}`, {
					json: language,
				})
				.json();

			return response;
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	public async createLanguage(language: LanguageSchema): Promise<LanguageSchema | null> {
		try {
			const response: LanguageSchema = await apiService
				.post(`languages`, {
					json: language,
				})
				.json();

			return response;
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	public async deleteLanguage(languageId: string): Promise<void> {
		return apiService.delete(`languages/${languageId}`).json();
	}
}

export const languagesApiService = new LanguagesApiService();
