import { Button } from '@acpaas-ui/react-components';
import { TableColumn, useObservable } from '@redactie/utils';
import { path } from 'ramda';
import React from 'react';
import { object, string } from 'yup';

import { LanguageModel, languagesFacade } from '../../store/languages';

export const LANGUAGES_DEFAULT_OPTION = {
	key: 'default-option',
	label: 'Selecteer een taal',
	value: '',
	disabled: true,
};

export const ADD_LANGUAGE_VALIDATION_SCHEMA = object().shape({
	languageId: string().required('Kies een taal'),
});

export const LANGUAGE_COLUMNS = (
	t: (keys: string | string[]) => string,
	onLanguageDeactivate: (uuid: string) => void,
	languageDeactivating?: string
): TableColumn<LanguageModel>[] => [
	{
		label: 'Naam',
		value: 'name',
		width: '30%',
	},
	{
		label: 'Gebruikt op',
		width: '50%',
		component: (_, { sites }): React.ReactElement => {
			if (!(sites || []).length) {
				<i className="u-text-light">Niet gebruikt.</i>;
			}

			return <p>{(sites || []).map(path(['data', 'name'])).join(', ')}</p>;
		},
		disableSorting: true,
	},
	{
		label: '',
		width: '20%',
		classList: ['u-text-right'],
		component: (_: string, { uuid, sites }): React.ReactElement => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			return (
				<Button
					type="danger"
					outline
					disabled={!!sites?.length}
					onClick={() => onLanguageDeactivate(uuid)}
					iconLeft={languageDeactivating === uuid ? 'circle-o-notch fa-spin' : null}
				>
					Deactiveren
				</Button>
			);
		},
		disableSorting: true,
	},
];
