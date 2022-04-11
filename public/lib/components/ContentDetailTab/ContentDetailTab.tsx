import { Table } from '@acpaas-ui/react-editorial-components';
import { ExternalTabProps } from '@redactie/content-module';
import { LoadingState, useNavigate } from '@redactie/utils';
import React, { FC, useEffect, useMemo } from 'react';

import contentConnector from '../../connectors/content';
import translationsConnector, { CORE_TRANSLATIONS } from '../../connectors/translations';
import { useActiveLanguagesForSite } from '../../hooks';
import { contentDetail, SITES_ROOT } from '../../language.const';

import { TRANSLATIONS_COLUMNS } from './ContentDetailTab.const';
import { TranslationTableRow } from './ContentDetailTab.types';

const ContentDetailTab: FC<ExternalTabProps> = ({ siteId, contentType, contentItem }) => {
	const [t] = translationsConnector.useCoreTranslation();
	const { generatePath, navigate } = useNavigate(SITES_ROOT);
	const [, languages] = useActiveLanguagesForSite(siteId);
	const [contentLoadingState, content] = contentConnector.useContent();

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

				return {
					language: `${language.name} (${language.key.toUpperCase()})`,
					title: contentItemLang?.meta?.label || '',
					lastModified: contentItemLang?.meta?.lastModified || '',
					status: contentItemLang?.meta?.status || '',
					published: contentItemLang?.meta?.published,
					navigate: (path: string) =>
						navigate(
							path,
							{
								contentId: contentItemLang?.uuid,
								siteId,
								contentTypeId: contentType.uuid,
								lang: language.key,
							},
							undefined,
							new URLSearchParams({
								translationId: contentItem.meta.translationId,
							})
						),
					viewPath:
						contentItemLang &&
						generatePath(contentDetail, {
							contentId: contentItemLang.uuid,
							siteId,
							contentTypeId: contentType.uuid,
						}),
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
