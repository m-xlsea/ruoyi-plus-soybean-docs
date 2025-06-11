# useDownloadHook 函数

`useDownload` 是一个封装了文件下载功能的 Hook，支持多种下载场景，包括通过接口 POST 请求下载文件、通过 OSS ID 下载资源以及通过 GET 请求下载 ZIP 文件。它内置了请求头管理、加载状态提示、错误处理和文件流处理，方便前端统一调用下载接口并处理文件保存。

## 功能介绍

- 支持通过 POST 请求携带参数下载文件，自动处理 Blob 流并保存为本地文件。
- 支持通过 OSS 资源 ID 下载文件，自动从响应头获取文件名。
- 支持通过 GET 请求下载 ZIP 类型文件，自动处理错误信息提示。
- 自动添加鉴权 Token 和客户端 ID 到请求头。
- 支持加载状态显示和隐藏，提升用户体验。
- 统一错误捕获并通过全局消息提示错误信息。

## 方法详细说明

### `download(url, params, fileName)`

- 发送 POST 请求到 `${baseURL}${url}`，携带 `params` 作为请求体（`FormData` 格式）。
- 请求头自动添加 `Authorization`（Bearer Token）、`Clientid` 和 `Content-Type`。
- 响应为文件流时，自动调用 `downloadByData` 保存文件。
- 响应为 JSON 时，解析错误信息并提示。
- 显示和隐藏全局加载状态。

### `oss(ossId)`

- 发送 GET 请求到 `${baseURL}/resource/oss/download/${ossId}`。
- 自动从响应头 `Download-Filename` 获取文件名。
- 下载文件流并保存。
- 显示和隐藏全局加载状态。

### `zip(url, fileName)`

- 发送 GET 请求到 `${baseURL}${url}`，自动添加时间戳防止缓存。
- 支持接口返回 JSON 格式的错误信息处理。
- 下载文件流并保存为 ZIP 格式。
- 显示和隐藏全局加载状态。

### `downloadByData(data, filename, type)`

- 将传入的二进制数据 `data` 封装为 Blob。
- 创建临时 `<a>` 标签，触发浏览器下载行为。
- 自动释放 Blob URL。

## 返回方法说明

| 方法名     | 参数说明                                                                              | 功能描述                                       |
| :--------- | :------------------------------------------------------------------------------------ | :--------------------------------------------- |
| `download` | `url: string` 请求接口路径<br>`params: any` 请求参数对象<br>`fileName: string` 文件名 | 通过 POST 请求下载文件，支持传递请求参数。     |
| `oss`      | `ossId: CommonType.IdType` OSS 资源唯一标识                                           | 根据 OSS ID 下载文件，自动获取文件名。         |
| `zip`      | `url: string` 请求接口路径<br>`fileName: string` 文件名                               | 通过 GET 请求下载 ZIP 文件，支持接口错误处理。 |

## 使用示例

```ts
import { useDownload } from '@/hooks/business/download';

// 获取下载方法
const { downloadByData, download, oss, zip } = useDownload();

// 1. 直接数据下载 - 导出JSON数据
const exportData = { users: [{ name: '张三', age: 25 }] };
downloadByData(JSON.stringify(exportData), 'users.json', 'application/json');

// 2. 从API下载文件 - 导出用户列表
const exportParams = {
  status: '0',
  deptId: '100'
};
download('/system/user/export', exportParams, '用户列表.xlsx');

// 3. OSS文件下载 - 下载已上传的文件
oss('100'); // 使用文件ID下载

// 4. ZIP文件下载 - 下载日志文件
zip('/system/log/export', '系统日志.zip');
```

## 注意事项

- 请求头中的 Token 从本地存储获取，确保登录态有效。
- `baseURL` 通过工具函数动态获取，支持开发环境代理配置。
- 文件下载时，浏览器安全策略可能限制某些行为，确保文件类型和 MIME 设置正确。
- 该 Hook 适合下载较大文件，避免直接在页面中处理大文件数据。

1. **权限配置**：确保请求头中包含有效的 Token 和客户端 ID

   ```ts
   // Hook会自动处理以下头信息：
   // Authorization: `Bearer ${token}`
   // Clientid: clientId
   ```

2. **浏览器兼容性**：

   - 使用现代浏览器 API（Fetch、Blob、URL.createObjectURL）
   - 在老版本浏览器中可能需要 polyfill

3. **文件大小限制**：

   - 浏览器对下载文件大小有限制
   - 大文件建议使用分块下载或服务器直接链接

4. **安全性考虑**：

   - 所有下载请求都需要用户授权
   - 文件下载 URL 会自动添加时间戳防止缓存
   - OSS 文件通过 ID 访问，避免直接暴露文件路径

5. **用户体验**：
   - 下载过程中会显示加载提示
   - 下载完成或失败后会自动隐藏加载提示
   - 建议在 UI 中提供下载进度反馈
