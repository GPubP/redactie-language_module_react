# Interface: LanguagesState

[index](../wiki/index).LanguagesState

## Hierarchy

- `BaseEntityState`<[`LanguageModel`](../wiki/index#languagemodel-1), `string`\>

  ↳ **`LanguagesState`**

## Table of contents

### Properties

- [activeLanguages](../wiki/index.LanguagesState#activelanguages-1)
- [entities](../wiki/index.LanguagesState#entities-1)
- [error](../wiki/index.LanguagesState#error-1)
- [ids](../wiki/index.LanguagesState#ids-1)
- [isCreating](../wiki/index.LanguagesState#iscreating-1)
- [isFetching](../wiki/index.LanguagesState#isfetching-1)
- [isFetchingActiveLanguages](../wiki/index.LanguagesState#isfetchingactivelanguages-1)
- [isFetchingOne](../wiki/index.LanguagesState#isfetchingone-1)
- [isRemoving](../wiki/index.LanguagesState#isremoving-1)
- [isUpdating](../wiki/index.LanguagesState#isupdating-1)
- [languages](../wiki/index.LanguagesState#languages-1)
- [loading](../wiki/index.LanguagesState#loading-1)

## Properties

### activeLanguages

• **activeLanguages**: [`LanguageSchema`](../wiki/index.LanguageSchema)[]

#### Defined in

public/lib/store/languages/languages.model.ts:13

___

### entities

• `Optional` **entities**: `HashMap`<[`LanguageSchema`](../wiki/index.LanguageSchema)\>

#### Inherited from

BaseEntityState.entities

#### Defined in

node_modules/@datorama/akita/lib/types.d.ts:7

___

### error

• `Optional` **error**: `any`

#### Inherited from

BaseEntityState.error

#### Defined in

node_modules/@datorama/akita/lib/types.d.ts:10

___

### ids

• `Optional` **ids**: `string`[]

#### Inherited from

BaseEntityState.ids

#### Defined in

node_modules/@datorama/akita/lib/types.d.ts:8

___

### isCreating

• **isCreating**: `boolean`

#### Inherited from

BaseEntityState.isCreating

#### Defined in

node_modules/@redactie/utils/dist/store/baseEntity/baseEntity.state.d.ts:5

___

### isFetching

• **isFetching**: `boolean`

#### Inherited from

BaseEntityState.isFetching

#### Defined in

node_modules/@redactie/utils/dist/store/baseEntity/baseEntity.state.d.ts:3

___

### isFetchingActiveLanguages

• **isFetchingActiveLanguages**: `boolean`

#### Defined in

public/lib/store/languages/languages.model.ts:14

___

### isFetchingOne

• **isFetchingOne**: `boolean`

#### Inherited from

BaseEntityState.isFetchingOne

#### Defined in

node_modules/@redactie/utils/dist/store/baseEntity/baseEntity.state.d.ts:4

___

### isRemoving

• **isRemoving**: `boolean`

#### Inherited from

BaseEntityState.isRemoving

#### Defined in

node_modules/@redactie/utils/dist/store/baseEntity/baseEntity.state.d.ts:7

___

### isUpdating

• **isUpdating**: `boolean`

#### Inherited from

BaseEntityState.isUpdating

#### Defined in

node_modules/@redactie/utils/dist/store/baseEntity/baseEntity.state.d.ts:6

___

### languages

• **languages**: [`LanguageSchema`](../wiki/index.LanguageSchema)[]

#### Defined in

public/lib/store/languages/languages.model.ts:12

___

### loading

• `Optional` **loading**: `boolean`

#### Inherited from

BaseEntityState.loading

#### Defined in

node_modules/@datorama/akita/lib/types.d.ts:9
