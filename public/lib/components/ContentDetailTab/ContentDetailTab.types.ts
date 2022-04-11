export interface TranslationTableRow {
	language: string;
	title: string;
	lastModified: string;
	status: string;
	published?: boolean;
	navigate: (path: string) => void;
	viewPath?: string;
}
