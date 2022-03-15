import { Button } from '@acpaas-ui/react-components';
import { TableColumn } from '@redactie/utils';
import { path } from 'ramda';
import React from 'react';

import { LanguageModel } from '../../store/languages';

export const LANGUAGE_COLUMNS = (
	t: (keys: string | string[]) => string,
	languageChanging: boolean,
	onLanguageDeactivate: (uuid: string) => void
): TableColumn<LanguageModel>[] => [
	{
		label: 'Naam',
		value: 'name',
		width: '30%',
	},
	{
		label: 'Gebruikt op',
		width: '50%',
		component: (_, { sites }): React.ReactElement =>
			(sites || []).length ? (
				<p>{(sites || []).map(path(['data', 'name'])).join(', ')}</p>
			) : (
				<i className="u-text-light">Niet gebruikt.</i>
			),
		disableSorting: true,
	},
	{
		label: '',
		width: '20%',
		classList: ['u-text-right'],
		component: (_: string, { uuid, sites }): React.ReactElement => {
			return (
				<Button
					type="danger"
					outline
					disabled={!!sites?.length}
					onClick={() => onLanguageDeactivate(uuid)}
					iconLeft={languageChanging ? 'circle-o-notch fa-spin' : null}
				>
					Deactiveren
				</Button>
			);
		},
		disableSorting: true,
	},
];
