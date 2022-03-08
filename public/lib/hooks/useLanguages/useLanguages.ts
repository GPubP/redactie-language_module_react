import { LoadingState, useObservable } from '@redactie/utils';

import { LanguageSchema } from '../../services/languages';
import { languagesFacade } from '../../store/languages';

const useLanguages = (): [LoadingState, LanguageSchema[] | null | undefined] => {
	const loading = useObservable(languagesFacade.isFetching$, LoadingState.Loading);
	const languages = useObservable(languagesFacade.languages$, null);
	const error = useObservable(languagesFacade.error$, null);

	const loadingState = error ? LoadingState.Error : loading;

	return [loadingState, languages];
};

export default useLanguages;
