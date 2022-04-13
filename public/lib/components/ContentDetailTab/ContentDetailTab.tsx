import { Table } from '@acpaas-ui/react-editorial-components';
import { ExternalTabProps } from '@redactie/content-module';
import { LoadingState, SelectOption, useNavigate } from '@redactie/utils';
import React, { FC, useEffect, useMemo } from 'react';

import contentConnector from '../../connectors/content';
import translationsConnector, { CORE_TRANSLATIONS } from '../../connectors/translations';
import workflowsConnector from '../../connectors/workflows';
import { useActiveLanguagesForSite } from '../../hooks';
import { contentCreate, contentDetail, contentEdit, SITES_ROOT } from '../../language.const';

import { TRANSLATIONS_COLUMNS } from './ContentDetailTab.const';
import { ContentSystemNames, TranslationTableRow } from './ContentDetailTab.types';

const ContentDetailTab: FC<ExternalTabProps> = ({ siteId, contentType, contentItem }) => {
	const [t] = translationsConnector.useCoreTranslation();
	const { generatePath } = useNavigate(SITES_ROOT);
	const [, languages] = useActiveLanguagesForSite(siteId);
	const [contentLoadingState, content] = contentConnector.useContent();
	const {
		pagination: statusesPagination,
	} = workflowsConnector.hooks.usePaginatedWorkflowStatuses(
		{
			page: 1,
			pagesize: -1,
		},
		{
			siteId,
		}
	);

	const workflowStatuses = useMemo<Record<string, SelectOption>>(() => {
		if (!statusesPagination?.data) {
			return {};
		}

		return statusesPagination.data.reduce((acc, status) => {
			if (status.data.systemName === ContentSystemNames.NEW) {
				return acc;
			}

			return {
				...acc,
				[status.data.systemName as string]: {
					label: status.data.name,
					value: status.data.systemName,
				},
			};
		}, {});
	}, [statusesPagination]);

	useEffect(() => {
		contentConnector.getContent(siteId, {
			translationId: contentItem.meta.translationId,
			pagesize: -1,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const languagesRows: TranslationTableRow[] = useMemo(
		() =>
			(languages || []).map(language => {
				const contentItemLang = (content || []).find(
					item => item.meta.lang === language.key
				);

				const defaultNavigateParameters = {
					siteId,
					contentTypeId: contentType.uuid,
					lang: language.key,
				};

				return {
					language: `${language.name} (${language.key.toUpperCase()})`,
					title: contentItemLang?.meta?.label || '',
					lastModified: contentItemLang?.meta?.lastModified || '',
					status:
						workflowStatuses[
							contentItemLang?.meta?.historySummary?.workflowState as string
						]?.label ||
						statusesPagination?.data.find(
							status =>
								status.data.technicalState ===
								contentItemLang?.meta?.historySummary?.latestStatus
						)?.data.name,
					published: contentItemLang?.meta?.published,
					viewPath:
						contentItemLang &&
						generatePath(contentDetail, {
							contentId: contentItemLang.uuid,
							...defaultNavigateParameters,
						}),
					editPath:
						contentItemLang &&
						generatePath(contentEdit, {
							contentId: contentItemLang.uuid,
							...defaultNavigateParameters,
						}),
					createPath: generatePath(
						contentCreate,
						defaultNavigateParameters,
						new URLSearchParams({
							translationId: contentItem.meta.translationId,
						})
					),
				};
			}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[languages, content]
	);

	return (
		<Table
			fixed
			className="u-margin-top"
			tableClassName="a-table--fixed--xs"
			columns={TRANSLATIONS_COLUMNS(t)}
			rows={languagesRows}
			loading={contentLoadingState === LoadingState.Loading}
			noDataMessage={t(CORE_TRANSLATIONS['TABLE_NO-RESULT'])}
			loadDataMessage="Vertalingen ophalen"
		/>
	);
};

export default ContentDetailTab;
