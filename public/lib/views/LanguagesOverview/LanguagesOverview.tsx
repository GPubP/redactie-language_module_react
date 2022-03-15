import { Button, Select } from '@acpaas-ui/react-components';
import {
	Container,
	ContextHeader,
	ContextHeaderTopSection,
	Table,
} from '@acpaas-ui/react-editorial-components';
import { ModuleRouteConfig, useBreadcrumbs } from '@redactie/redactie-core';
import { AlertContainer, DataLoader, ErrorMessage, useRoutes } from '@redactie/utils';
import { Field, Formik } from 'formik';
import React, { FC, ReactElement, useEffect, useState } from 'react';

import { CORE_TRANSLATIONS, useCoreTranslation } from '../../connectors/translations';
import { useLanguages } from '../../hooks';
import useHomeBreadcrumb from '../../hooks/useHomeBreadcrumb/useHomeBreadcrumb';
import { ALERT_CONTAINER_IDS, BREADCRUMB_OPTIONS } from '../../language.const';
import { LanguagesOverviewRowData } from '../../language.types';
import { languagesFacade } from '../../store/languages';

import {
	ADD_LANGUAGE_VALIDATION_SCHEMA,
	LANGUAGE_COLUMNS,
	LANGUAGES_DEFAULT_OPTION,
} from './LanguagesOverview.const';

const LanguagesOverview: FC = () => {
	/**
	 * Hooks
	 */
	const [sorting, setSorting] = useState({
		key: 'name',
		order: 'asc',
	});
	const routes = useRoutes();
	const breadcrumbs = useBreadcrumbs(routes as ModuleRouteConfig[], {
		...BREADCRUMB_OPTIONS,
		extraBreadcrumbs: [useHomeBreadcrumb()],
	});
	const [languagesLoading, languages] = useLanguages();
	const [t] = useCoreTranslation();

	useEffect(() => {
		languagesFacade.getLanguages({
			pagesize: '-1',
			includeOccurrences: true,
			sort: `${sorting.order === 'desc' ? '-' : ''}${sorting.key}`,
		});
	}, [sorting]);

	/**
	 * Methods
	 */
	const handleLanguageDeactivate = console.log;
	const onSubmit = ({ languageId }: { languageId: string }): void => {
		languagesFacade.activateLanguage(languageId, ALERT_CONTAINER_IDS.overview);
	};

	/**
	 * Render
	 */
	const renderOverview = (): ReactElement | null => {
		const languagesRows: LanguagesOverviewRowData[] = (languages || [])
			.filter(language => !!language.active)
			.map(language => ({
				uuid: language.uuid,
				name: language.name,
				sites: language.sites || [],
			}));

		const languageOptions: { label: string; value: string }[] = (languages || [])
			.filter(language => !language.active)
			.map(language => ({
				value: language.uuid,
				label: language.name,
			}));

		return (
			<>
				<AlertContainer
					toastClassName="u-margin-bottom"
					containerId={ALERT_CONTAINER_IDS.overview}
				/>
				<Table
					fixed
					className="u-margin-top"
					tableClassName="a-table--fixed--xs"
					columns={LANGUAGE_COLUMNS(t, false, handleLanguageDeactivate)}
					rows={languagesRows}
					noDataMessage={t(CORE_TRANSLATIONS['TABLE_NO-RESULT'])}
					loadDataMessage="Talen ophalen"
					activeSorting={sorting}
					orderBy={setSorting}
				/>
				<div className="m-card u-padding u-margin-top">
					<Formik
						initialValues={{ languageId: '' }}
						onSubmit={onSubmit}
						validationSchema={ADD_LANGUAGE_VALIDATION_SCHEMA}
					>
						{({ submitForm }) => (
							<div className="row">
								<div className="col-xs-12 col-md">
									<Field
										required
										id="languageId"
										label="Taal"
										name="languageId"
										options={[LANGUAGES_DEFAULT_OPTION, ...languageOptions]}
										as={Select}
									/>
									<small className="u-block u-text-light u-margin-top-xs">
										Select de taal die u wil activeren voor deze tenant.
									</small>
									<ErrorMessage name="languageId" />
								</div>

								<div className="u-flex-shrink-md col-xs-12 col-sm-4 u-margin-top">
									<Button htmlType="button" onClick={submitForm} outline>
										{t(CORE_TRANSLATIONS.BUTTON_ADD)}
									</Button>
								</div>
							</div>
						)}
					</Formik>
				</div>
			</>
		);
	};

	return (
		<>
			<ContextHeader title="Talen">
				<ContextHeaderTopSection>{breadcrumbs}</ContextHeaderTopSection>
			</ContextHeader>
			<Container>
				<DataLoader
					loadingState={languagesLoading}
					render={renderOverview}
					notFoundMessage={t(CORE_TRANSLATIONS['TABLE_NO-RESULT'])}
				/>
			</Container>
		</>
	);
};

export default LanguagesOverview;
