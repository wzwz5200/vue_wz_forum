# WZ Forum API 接口文档

## 基础配置
- 基础URL: `http://localhost:8080/api`
- 请求头: 
  ```js
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${token}' // 需要认证的接口
  }
  ```

## 文章相关接口

### 1. 获取文章列表
```http
GET /posts
```

查询参数：
- `category`: 文章分类（可选）
- `page`: 页码（可选，默认1）
- `limit`: 每页数量（可选，默认10）

响应示例：
```json
{
  "code": 200,
  "data": {
    "total": 100,
    "posts": [{
      "id": "1",
      "title": "文章标题",
      "author": "作者名",
      "avatar": "作者头像URL",
      "category": "分类",
      "date": "2024-01-19",
      "summary": "文章摘要...",
      "views": 100,
      "comments": 10,
      "likes": 20
    }]
  }
}
```

### 2. 获取文章详情
```http
POST /article
```

请求体：
```json
{
  "id": "文章ID"
}
```

响应示例：
```json
{
  "code": 200,
  "data": {
    "id": "1",
    "title": "文章标题",
    "content": "Markdown内容",
    "author": "作者名",
    "avatar": "作者头像URL",
    "category": "分类",
    "date": "2024-01-19",
    "views": 100,
    "comments": 10,
    "likes": 20
  }
}
```

### 3. 发布文章
```http
POST /article/publish
```

请求体：
```json
{
  "title": "文章标题",
  "content": "Markdown内容",
  "category": "分类"
}
```

响应示例：
```json
{
  "code": 200,
  "data": {
    "id": "新文章ID",
    "message": "发布成功"
  }
}
```

## 评论相关接口

### 1. 获取文章评论
```http
GET /comments/{articleId}
```

查询参数：
- `page`: 页码（可选，默认1）
- `limit`: 每页数量（可选，默认10）

响应示例：
```json
{
  "code": 200,
  "data": {
    "total": 50,
    "comments": [{
      "id": "1",
      "username": "评论者",
      "avatar": "评论者头像",
      "content": "评论内容",
      "time": "2024-01-19 12:00:00"
    }]
  }
}
```

### 2. 发表评论
```http
POST /comment
```

请求体：
```json
{
  "articleId": "文章ID",
  "content": "评论内容"
}
```

响应示例：
```json
{
  "code": 200,
  "data": {
    "id": "评论ID",
    "message": "评论成功"
  }
}
```

## 用户相关接口

### 1. 用户登录
```http
POST /user/login
```

请求体：
```json
{
  "username": "用户名",
  "password": "密码"
}
```

响应示例：
```json
{
  "code": 200,
  "data": {
    "token": "JWT token",
    "user": {
      "id": "用户ID",
      "username": "用户名",
      "avatar": "头像URL"
    }
  }
}
```

### 2. 用户注册
```http
POST /user/register
```

请求体：
```json
{
  "username": "用户名",
  "password": "密码",
  "email": "邮箱"
}
```

响应示例：
```json
{
  "code": 200,
  "data": {
    "message": "注册成功"
  }
}
```

## 错误响应格式
```json
{
  "code": 400,
  "message": "错误信息描述"
}
```

## 状态码说明
- 200: 请求成功
- 400: 请求参数错误
- 401: 未授权/未登录
- 403: 权限不足
- 404: 资源不存在
- 500: 服务器内部错误

## 注意事项
1. 所有需要认证的接口都需要在请求头中携带 token
2. 文章内容支持 Markdown 格式
3. 日期格式统一使用 ISO 8601 标准
4. 图片上传接口待定
5. 所有请求和响应编码均为 UTF-8
