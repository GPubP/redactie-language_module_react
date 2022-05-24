# Class: LanguagesStore

[index](../wiki/index).[<internal>](../wiki/index.%3Cinternal%3E).LanguagesStore

## Hierarchy

- `BaseEntityStore`<[`LanguagesState`](../wiki/index.LanguagesState), [`LanguageModel`](../wiki/index#languagemodel)\>

  ↳ **`LanguagesStore`**

## Table of contents

### Constructors

- [constructor](../wiki/index.%3Cinternal%3E.LanguagesStore#constructor)

### Properties

- [activeLanguages](../wiki/index.%3Cinternal%3E.LanguagesStore#activelanguages)
- [isFetchingActiveLanguages](../wiki/index.%3Cinternal%3E.LanguagesStore#isfetchingactivelanguages)
- [isLanguageActivating](../wiki/index.%3Cinternal%3E.LanguagesStore#islanguageactivating)
- [languageIdDeactivating](../wiki/index.%3Cinternal%3E.LanguagesStore#languageiddeactivating)
- [languages](../wiki/index.%3Cinternal%3E.LanguagesStore#languages)

## Constructors

### constructor

• **new LanguagesStore**(`initialState?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState?` | `Partial`<[`LanguagesState`](../wiki/index.LanguagesState)\> |
| `options?` | `Partial`<`StoreConfigOptions`\> |

#### Inherited from

BaseEntityStore<LanguagesState, LanguageModel\>.constructor

#### Defined in

node_modules/@redactie/utils/dist/store/baseEntity/baseEntity.store.d.ts:4

## Properties

### activeLanguages

• `Optional` **activeLanguages**: [`LanguageSchema`](../wiki/index.LanguageSchema)

#### Defined in

public/lib/store/languages/languages.store.ts:12

___

### isFetchingActiveLanguages

• `Optional` **isFetchingActiveLanguages**: `boolean`

#### Defined in

public/lib/store/languages/languages.store.ts:10

___

### isLanguageActivating

• `Optional` **isLanguageActivating**: `boolean`

#### Defined in

public/lib/store/languages/languages.store.ts:9

___

### languageIdDeactivating

• `Optional` **languageIdDeactivating**: `string`

#### Defined in

public/lib/store/languages/languages.store.ts:8

___

### languages

• `Optional` **languages**: [`LanguageSchema`](../wiki/index.LanguageSchema)[]

#### Defined in

public/lib/store/languages/languages.store.ts:11
