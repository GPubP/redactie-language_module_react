import { apiService } from '../api';

import { LanguageSchema, LanguagesSchema } from './languages.service.types';

export class LanguagesApiService {
	public async getLanguages(): Promise<LanguagesSchema | null> {
		try {
			const response: LanguagesSchema = await apiService.get('languages').json();

			if (!response._embedded) {
				throw new Error('Failed to get languages');
			}

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
}

export const languagesApiService = new LanguagesApiService();
