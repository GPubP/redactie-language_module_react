# Interface: LanguagesModuleAPI

[index](../wiki/index).LanguagesModuleAPI

## Table of contents

### Properties

- [hooks](../wiki/index.LanguagesModuleAPI#hooks-1)
- [store](../wiki/index.LanguagesModuleAPI#store-1)

## Properties

### hooks

• **hooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `useActiveLanguages` | () => [`LoadingState`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]] |
| `useActiveLanguagesForSite` | (`siteId`: `string`) => [`LoadingState`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]] |
| `useLanguages` | () => [`LoadingState`, `undefined` \| `string`, `boolean`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]] |

#### Defined in

public/lib/language.types.ts:19

___

### store

• **store**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `languages` | { `facade`: `Pick`<`LanguagesFacade`, ``"getLanguages"`` \| ``"getActiveLanguages"``\> ; `service`: `LanguagesApiService`  } |
| `languages.facade` | `Pick`<`LanguagesFacade`, ``"getLanguages"`` \| ``"getActiveLanguages"``\> |
| `languages.service` | `LanguagesApiService` |

#### Defined in

public/lib/language.types.ts:13
