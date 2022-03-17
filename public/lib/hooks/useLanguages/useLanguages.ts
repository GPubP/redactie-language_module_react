import { LoadingState, useObservable } from '@redactie/utils';

import { LanguageSchema } from '../../services/languages';
import { languagesFacade } from '../../store/languages';

const useLanguages = (): [
	LoadingState,
	string | undefined,
	boolean,
	LanguageSchema[] | null | undefined
] => {
	const loading = useObservable(languagesFacade.isFetching$, LoadingState.Loading);
	const languages = useObservable(languagesFacade.languages$, null);
	const languageIdDeactivating = useObservable(languagesFacade.languageIdDeactivating$, null);
	const isLanguageActivating = useObservable(languagesFacade.isLanguageActivating$, false);
	const error = useObservable(languagesFacade.error$, null);

	const loadingState = error ? LoadingState.Error : loading;

	return [loadingState, languageIdDeactivating, isLanguageActivating, languages];
};

export default useLanguages;
