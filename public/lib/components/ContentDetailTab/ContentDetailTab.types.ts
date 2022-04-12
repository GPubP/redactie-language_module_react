export interface TranslationTableRow {
	language: string;
	title: string;
	lastModified: string;
	status: string;
	published?: boolean;
	viewPath?: string;
	editPath?: string;
	createPath?: string;
}
