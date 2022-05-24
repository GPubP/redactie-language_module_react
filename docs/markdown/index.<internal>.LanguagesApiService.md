# Class: LanguagesApiService

[index](../wiki/index).[<internal>](../wiki/index.%3Cinternal%3E).LanguagesApiService

## Table of contents

### Constructors

- [constructor](../wiki/index.%3Cinternal%3E.LanguagesApiService#constructor)

### Methods

- [createLanguage](../wiki/index.%3Cinternal%3E.LanguagesApiService#createlanguage)
- [getLanguages](../wiki/index.%3Cinternal%3E.LanguagesApiService#getlanguages)
- [updateLanguage](../wiki/index.%3Cinternal%3E.LanguagesApiService#updatelanguage)

## Constructors

### constructor

• **new LanguagesApiService**()

## Methods

### createLanguage

▸ **createLanguage**(`language`): `Promise`<``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | [`LanguageSchema`](../wiki/index.LanguageSchema) |

#### Returns

`Promise`<``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)\>

#### Defined in

public/lib/services/languages/languages.service.ts:44

___

### getLanguages

▸ **getLanguages**(`searchParams`): `Promise`<``null`` \| [`LanguagesSchema`](../wiki/index#languagesschema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchParams` | `Record`<`string`, `string` \| `number` \| `boolean`\> |

#### Returns

`Promise`<``null`` \| [`LanguagesSchema`](../wiki/index#languagesschema)\>

#### Defined in

public/lib/services/languages/languages.service.ts:8

___

### updateLanguage

▸ **updateLanguage**(`language`): `Promise`<``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `Partial`<[`LanguageSchema`](../wiki/index.LanguageSchema)\> |

#### Returns

`Promise`<``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)\>

#### Defined in

public/lib/services/languages/languages.service.ts:29
