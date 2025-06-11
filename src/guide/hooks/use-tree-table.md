# useTreeTableHook 函数

与 Soybean Admin [useTableHook 函数](https://docs.soybeanjs.cn/zh/guide/hooks/use-table.html) 类似，但支持树形结构。

## 与 useTableHook 差异内容

### 分页参数

因为树形结构不需要分页，所以分页参数不再需要传入 `pageSize` 和 `pageNum` 参数。
故 `useTreeTable` 函数中，有关分页的内容均已删除。

### 数据结构

`useTreeTable` 函数中，需要额外配置一些内容，`TreeConfig` 类型定义如下：

```ts
/** The configuration options for constructing tree structure data */
type TreeConfig = {
  /** id field name */
  idField: string;
  /** parent id field name */
  parentIdField?: string;
  /** children field name */
  childrenField?: string;
  /** filter function */
  filterFn?: (node: any) => boolean;
};
```

### handleEdit

`handleEdit` 方法中，需要传入整行数据，而不是主键字段。

```ts
handleEdit(row);
```

### 折叠参数

此参数用于控制树形结构的全部折叠和展开。

```ts
// 是否折叠
isCollapse: boolean;
// 是否展开所有
expandAll: boolean;
// 是否折叠所有
collapseAll: boolean;
```
