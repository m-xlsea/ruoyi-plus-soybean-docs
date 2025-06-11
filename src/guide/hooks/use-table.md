# useTableHook 函数

请参考 Soybean Admin 文档 [useTableHook 函数](https://docs.soybeanjs.cn/zh/guide/hooks/use-table.html)

## 与 Soybean Admin 差异内容

### handleEdit

`handleEdit` 方法中，需要多传入 `field` 参数，用于指定编辑行的主键字段。

```ts
handleEdit('userId', userId);
```
