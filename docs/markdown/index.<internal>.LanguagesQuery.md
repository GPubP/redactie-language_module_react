# Class: LanguagesQuery

[index](../wiki/index).[<internal>](../wiki/index.%3Cinternal%3E).LanguagesQuery

## Hierarchy

- `BaseEntityQuery`<[`LanguagesState`](../wiki/index.LanguagesState)\>

  ↳ **`LanguagesQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/index.%3Cinternal%3E.LanguagesQuery#constructor)

### Properties

- [activeLanguages$](../wiki/index.%3Cinternal%3E.LanguagesQuery#activelanguages$)
- [isFetchingActiveLanguages$](../wiki/index.%3Cinternal%3E.LanguagesQuery#isfetchingactivelanguages$)
- [languages$](../wiki/index.%3Cinternal%3E.LanguagesQuery#languages$)

## Constructors

### constructor

• **new LanguagesQuery**(`store`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `BaseEntityStore`<[`LanguagesState`](../wiki/index.LanguagesState), [`LanguageSchema`](../wiki/index.LanguageSchema), `string`\> |
| `options?` | `QueryConfigOptions`<`any`\> |

#### Inherited from

BaseEntityQuery<LanguagesState\>.constructor

#### Defined in

node_modules/@redactie/utils/dist/store/baseEntity/baseEntity.query.d.ts:7

## Properties

### activeLanguages$

• **activeLanguages$**: `Observable`<[`LanguageSchema`](../wiki/index.LanguageSchema)[]\>

#### Defined in

public/lib/store/languages/languages.query.ts:8

___

### isFetchingActiveLanguages$

• **isFetchingActiveLanguages$**: `Observable`<`boolean`\>

#### Defined in

public/lib/store/languages/languages.query.ts:9

___

### languages$

• **languages$**: `Observable`<[`LanguageSchema`](../wiki/index.LanguageSchema)[]\>

#### Defined in

public/lib/store/languages/languages.query.ts:7
