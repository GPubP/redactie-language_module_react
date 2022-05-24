# Class: LanguagesFacade

[index](../wiki/index).[<internal>](../wiki/index.%3Cinternal%3E).LanguagesFacade

## Hierarchy

- `BaseEntityFacade`<[`LanguagesStore`](../wiki/index.%3Cinternal%3E.LanguagesStore), [`LanguagesApiService`](../wiki/index.%3Cinternal%3E.LanguagesApiService), [`LanguagesQuery`](../wiki/index.%3Cinternal%3E.LanguagesQuery)\>

  ↳ **`LanguagesFacade`**

## Table of contents

### Constructors

- [constructor](../wiki/index.%3Cinternal%3E.LanguagesFacade#constructor)

### Properties

- [activeLanguages$](../wiki/index.%3Cinternal%3E.LanguagesFacade#activelanguages$)
- [isFetchingActiveLanguages$](../wiki/index.%3Cinternal%3E.LanguagesFacade#isfetchingactivelanguages$)
- [isLanguageActivating$](../wiki/index.%3Cinternal%3E.LanguagesFacade#islanguageactivating$)
- [languageIdDeactivating$](../wiki/index.%3Cinternal%3E.LanguagesFacade#languageiddeactivating$)
- [languages$](../wiki/index.%3Cinternal%3E.LanguagesFacade#languages$)

### Methods

- [activateLanguage](../wiki/index.%3Cinternal%3E.LanguagesFacade#activatelanguage)
- [createLanguage](../wiki/index.%3Cinternal%3E.LanguagesFacade#createlanguage)
- [deactivateLanguage](../wiki/index.%3Cinternal%3E.LanguagesFacade#deactivatelanguage)
- [getActiveLanguages](../wiki/index.%3Cinternal%3E.LanguagesFacade#getactivelanguages)
- [getLanguages](../wiki/index.%3Cinternal%3E.LanguagesFacade#getlanguages)
- [updateLanguage](../wiki/index.%3Cinternal%3E.LanguagesFacade#updatelanguage)

## Constructors

### constructor

• **new LanguagesFacade**(`store`, `service`, `query`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`LanguagesStore`](../wiki/index.%3Cinternal%3E.LanguagesStore) |
| `service` | [`LanguagesApiService`](../wiki/index.%3Cinternal%3E.LanguagesApiService) |
| `query` | [`LanguagesQuery`](../wiki/index.%3Cinternal%3E.LanguagesQuery) |

#### Inherited from

BaseEntityFacade<
	LanguagesStore,
	LanguagesApiService,
	LanguagesQuery
\>.constructor

#### Defined in

node_modules/@redactie/utils/dist/store/baseEntity/baseEntity.facade.d.ts:7

## Properties

### activeLanguages$

• `Readonly` **activeLanguages$**: `Observable`<[`LanguageSchema`](../wiki/index.LanguageSchema)[]\>

#### Defined in

public/lib/store/languages/languages.facade.ts:16

___

### isFetchingActiveLanguages$

• `Readonly` **isFetchingActiveLanguages$**: `Observable`<`boolean`\>

#### Defined in

public/lib/store/languages/languages.facade.ts:19

___

### isLanguageActivating$

• `Readonly` **isLanguageActivating$**: `Observable`<`any`\>

#### Defined in

public/lib/store/languages/languages.facade.ts:18

___

### languageIdDeactivating$

• `Readonly` **languageIdDeactivating$**: `Observable`<`any`\>

#### Defined in

public/lib/store/languages/languages.facade.ts:17

___

### languages$

• `Readonly` **languages$**: `Observable`<[`LanguageSchema`](../wiki/index.LanguageSchema)[]\>

#### Defined in

public/lib/store/languages/languages.facade.ts:15

## Methods

### activateLanguage

▸ **activateLanguage**(`languageId`, `alertId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageId` | `string` |
| `alertId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

public/lib/store/languages/languages.facade.ts:114

___

### createLanguage

▸ **createLanguage**(`body`, `alertId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`LanguageSchema`](../wiki/index.LanguageSchema) |
| `alertId` | `string` |

#### Returns

`void`

#### Defined in

public/lib/store/languages/languages.facade.ts:198

___

### deactivateLanguage

▸ **deactivateLanguage**(`languageId`, `alertId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageId` | `string` |
| `alertId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

public/lib/store/languages/languages.facade.ts:156

___

### getActiveLanguages

▸ **getActiveLanguages**(`props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Record`<`string`, `string` \| `number` \| `boolean`\> |

#### Returns

`void`

#### Defined in

public/lib/store/languages/languages.facade.ts:47

___

### getLanguages

▸ **getLanguages**(`props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Record`<`string`, `string` \| `number` \| `boolean`\> |

#### Returns

`void`

#### Defined in

public/lib/store/languages/languages.facade.ts:21

___

### updateLanguage

▸ **updateLanguage**(`body`, `alertId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Partial`<[`LanguageSchema`](../wiki/index.LanguageSchema)\> |
| `alertId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

public/lib/store/languages/languages.facade.ts:78
