import { pick } from 'ramda';

import { apiService } from '../api';

import { LanguageSchema, LanguagesSchema } from './languages.service.types';

export class LanguagesApiService {
	public async getLanguages(
		searchParams: Record<string, string | number | boolean>
	): Promise<LanguagesSchema | null> {
		try {
			const response: LanguagesSchema = await apiService
				.get('languages', {
					searchParams,
				})
				.json();

			if (!response._embedded.languages) {
				throw new Error('Failed to get languages');
			}

			return response;
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	public async updateLanguage(language: Partial<LanguageSchema>): Promise<LanguageSchema | null> {
		try {
			const response: LanguageSchema = await apiService
				.patch(`languages/${language.uuid}`, {
					json: pick(['active', 'primary'])(language),
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
}

export const languagesApiService = new LanguagesApiService();
