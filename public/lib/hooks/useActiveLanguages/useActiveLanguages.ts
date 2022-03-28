import { LoadingState, useObservable } from '@redactie/utils';

import { LanguageSchema } from '../../services/languages';
import { languagesFacade } from '../../store/languages';

const useActiveLanguages = (): [LoadingState, LanguageSchema[] | null | undefined] => {
	const loading = useObservable(languagesFacade.isFetchingActiveLanguages$, true);
	const activeLanguages = useObservable(languagesFacade.activeLanguages$, null);
	const error = useObservable(languagesFacade.error$, null);

	const loadingState = error
		? LoadingState.Error
		: loading
		? LoadingState.Loading
		: LoadingState.Loaded;

	if (!activeLanguages) {
		languagesFacade.getActiveLanguages({
			pagesize: '-1',
			includeSiteOccurrences: true,
			sort: 'name',
		});
	}

	return [loadingState, activeLanguages];
};

export default useActiveLanguages;
