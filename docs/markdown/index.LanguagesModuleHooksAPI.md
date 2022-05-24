# Interface: LanguagesModuleHooksAPI

[index](../wiki/index).LanguagesModuleHooksAPI

## Table of contents

### Properties

- [useActiveLanguages](../wiki/index.LanguagesModuleHooksAPI#useactivelanguages)
- [useActiveLanguagesForSite](../wiki/index.LanguagesModuleHooksAPI#useactivelanguagesforsite)
- [useLanguages](../wiki/index.LanguagesModuleHooksAPI#uselanguages)

## Properties

### useActiveLanguages

• **useActiveLanguages**: () => [`LoadingState`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

#### Type declaration

▸ (): [`LoadingState`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

##### Returns

[`LoadingState`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

#### Defined in

public/lib/api/api.types.ts:14

___

### useActiveLanguagesForSite

• **useActiveLanguagesForSite**: (`siteId`: `string`) => [`LoadingState`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

#### Type declaration

▸ (`siteId`): [`LoadingState`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

##### Parameters

| Name | Type |
| :------ | :------ |
| `siteId` | `string` |

##### Returns

[`LoadingState`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

#### Defined in

public/lib/api/api.types.ts:15

___

### useLanguages

• **useLanguages**: () => [`LoadingState`, `undefined` \| `string`, `boolean`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

#### Type declaration

▸ (): [`LoadingState`, `undefined` \| `string`, `boolean`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

##### Returns

[`LoadingState`, `undefined` \| `string`, `boolean`, `undefined` \| ``null`` \| [`LanguageSchema`](../wiki/index.LanguageSchema)[]]

#### Defined in

public/lib/api/api.types.ts:13
