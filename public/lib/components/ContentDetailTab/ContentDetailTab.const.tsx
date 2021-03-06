import { Link as AUILink, Icon } from '@acpaas-ui/react-components';
import { EllipsisWithTooltip } from '@acpaas-ui/react-editorial-components';
import { TranslateFunc } from '@redactie/translations-module';
import { TableColumn } from '@redactie/utils';
import classnames from 'classnames';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

import { CORE_TRANSLATIONS } from '../../connectors/translations';
import { DATE_FORMATS } from '../../language.const';

import { TranslationTableRow } from './ContentDetailTab.types';

export const TRANSLATIONS_COLUMNS = (t: TranslateFunc): TableColumn<TranslationTableRow>[] => {
	return [
		{
			label: 'Taal',
			value: 'language',
			width: '18%',
		},
		{
			label: 'Titel',
			value: 'title',
			disableSorting: true,
			width: '18%',
			component(label: string, { viewPath }) {
				return (
					<AUILink to={viewPath} component={Link}>
						<EllipsisWithTooltip>{label}</EllipsisWithTooltip>
					</AUILink>
				);
			},
		},
		{
			label: t(CORE_TRANSLATIONS['TABLE_LAST-MODIFIED']),
			value: 'lastModified',
			disableSorting: true,
			width: '20%',
			format: (data: string) => (data ? moment(data).format(DATE_FORMATS.dateAndTime) : ''),
		},
		{
			label: 'Status',
			value: 'status',
			width: '10%',
			disableSorting: true,
		},
		{
			label: 'Online',
			value: 'published',
			disableSorting: true,
			width: '5%',
			component(value, { published }) {
				return published !== undefined ? (
					<span
						className={classnames('fa fa-circle', [
							published ? 'u-text-success' : 'u-text-danger',
						])}
					/>
				) : (
					<></>
				);
			},
		},
		{
			label: '',
			classList: ['u-text-right'],
			disableSorting: true,
			width: '15%',
			component(value, { title, editPath, createPath, setBaseContentItem }) {
				return (
					<>
						{title ? (
							<AUILink
								ariaLabel="Edit"
								to={editPath}
								className="a-button a-button--transparent has-icon"
								component={Link}
							>
								<Icon name="edit"></Icon>
							</AUILink>
						) : (
							<AUILink
								to={createPath}
								className="a-button-outline"
								component={Link}
								onClick={setBaseContentItem}
							>
								Nieuw aanmaken
							</AUILink>
						)}
					</>
				);
			},
		},
	];
};
