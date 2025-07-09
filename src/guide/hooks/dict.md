# useDictHook 函数

`useDict` 是一个和 Pinia 状态管理的字典数据处理 Hook。它封装了字典数据的获取、缓存、转换和映射功能，方便在组件中统一管理和使用系统字典数据。

该 Hook 主要用于根据字典类型（`dictType`）异步获取字典数据，提供字典列表、字典映射记录以及用于表单选择的选项数组，同时支持数据的即时加载和响应式更新。

## 功能介绍

- 根据字典类型获取字典数据，优先从 Pinia 缓存中读取，缓存不存在时调用接口拉取。
- 提供字典数据列表（`data`）、字典值到标签的映射（`record`）和用于表单选择的选项数组（`options`）。
- 支持字典数据的转换与筛选，方便根据字典值获取对应的字典项。
- 支持立即加载和按需监听字典数据变化。

## 参数说明

| 参数名      | 类型      | 默认值 | 说明                                   |
| :---------- | :-------- | :----- | :------------------------------------- |
| `dictType`  | `string`  | 无     | 字典类型标识，用于获取对应的字典数据。 |
| `immediate` | `boolean` | `true` | 是否在 Hook 初始化时立即加载字典数据。 |

## 返回值

| 名称                | 类型                                                                                          | 说明                             |
| :------------------ | :-------------------------------------------------------------------------------------------- | :------------------------------- |
| `data`              | `Ref<Api.System.DictData[]>`                                                                  | 当前字典类型对应的字典数据列表。 |
| `record`            | `Ref<Record<string, string>>`                                                                 | 字典值到字典标签的映射对象。     |
| `options`           | `Ref<CommonType.Option[]>`                                                                    | 用于表单选择的字典选项数组。     |
| `getData`           | `() => Promise<void>`                                                                         | 手动触发获取字典数据。           |
| `getRecord`         | `() => Promise<void>`                                                                         | 手动生成字典值到标签的映射。     |
| `getOptions`        | `() => Promise<void>`                                                                         | 手动生成字典选项数组。           |
| `transformDictData` | `(dictValue: string[] \| number[] \| string \| number) => Api.System.DictData[] \| undefined` | 根据字典值转换筛选对应的字典项。 |

## 方法说明

### `getData()`

异步获取字典数据，优先从 Pinia 缓存获取，若无缓存则调用接口拉取，并更新缓存。

### `getRecord()`

根据当前字典数据生成字典值（`dictValue`）到字典标签（`dictLabel`）的映射对象，方便快速查询。

### `getOptions()`

根据当前字典数据生成适合表单组件使用的选项数组，格式为 `{ label: string, value: string }`。

### `transformDictData(dictValue)`

根据传入的字典值（支持单个值或数组，支持字符串或数字），筛选并返回对应的字典项数组。如果字典数据未加载或传入值为空，返回 `undefined`。

## 使用示例

```ts
import { useDict } from '@/hooks/business/dict';

// 使用字典类型为 'sys_normal_disable'，立即加载数据
const { data, record, options, transformDictData } = useDict('sys_normal_disable');

// 根据字典值获取对应字典项
const userStatusLabel = transformDictData('0');
```

### 性能优化

1. **合理使用 immediate 参数**：

   ```ts
   // 如果组件初始化时就需要字典数据，使用默认的 immediate: true
   const { options } = useDict('user_status');

   // 如果字典数据只在特定条件下使用，设置 immediate: false
   const { options, getOptions } = useDict('advanced_options', false);
   ```

2. **避免重复初始化**：

   ```ts
   // 推荐：在组件级别使用
   const { record } = useDict('status_type');

   // 避免：在函数内部重复初始化
   function handleSomething() {
     const { record } = useDict('status_type'); // 不推荐
   }
   ```

### 使用组件

```ts
useDict('sys_normal_disable');

<DictRadio v-model:value="model.status" dict-code="sys_normal_disable" />
<DictSelect v-model:value="model.status" dict-code="sys_normal_disable" />
<DictTag size="small" :value="rowData.status" dict-code="sys_normal_disable" />
```

## 注意事项

1. **字典类型标识符**：确保传入的 `dictType` 与后端API中定义的字典类型一致
2. **数据缓存**：Hook会自动在Pinia store中缓存数据，避免重复请求
3. **响应式更新**：返回的数据都是响应式的，当字典数据更新时，UI会自动重新渲染
4. **空值处理**：使用 `transformDictData` 时注意处理可能的空值情况
5. **异步加载**：所有数据获取方法都是异步的，在使用前确保数据已加载完成
