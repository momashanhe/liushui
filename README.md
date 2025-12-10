# 流水账本系统

基于Node.js的个人账本管理系统，使用MongoDB作为数据库存储，实现了完整的用户认证和账单管理功能。

## 功能特性

- 用户注册与登录
- 账单的增删改查操作
- 账单详情查看
- 会话管理与权限验证
- 响应式界面设计

## 技术选型

- **后端**: Node.js, Express
- **数据库**: MongoDB
- **模板引擎**: EJS
- **会话管理**: express-session, connect-mongo
- **其他依赖**: moment.js, shortid, md5

## 项目结构

```code
liushui/
├── app.js                 # 应用入口文件
├── bin/
│   └── www                # 服务器启动脚本
├── config/
│   └── config.js          # 配置文件
├── db/
│   ├── lowdb.js           # LowDB数据库配置
│   ├── lowdb.json         # LowDB数据文件
│   └── mongodb.js         # MongoDB数据库配置
├── middlewares/
│   ├── checkToken.js      # Token验证中间件
│   └── checkUser.js       # Session用户验证中间件
├── models/
│   ├── bill.js            # 账单数据模型
│   └── user.js            # 用户数据模型
├── public/                # 静态资源文件
│   ├── css/
│   └── js/
├── routes/
│   ├── api/               # 接口路由
│   │   ├── bill.js        # 账单接口
│   │   └── token.js       # 签发接口
│   └── web/               # 页面路由
│       ├── auth.js        # 认证相关页面
│       └── bill.js        # 账单相关页面
├── views/                 # 视图模板文件
└── package.json           # 项目依赖配置
```

## 功能模块

### 用户认证模块

- 用户注册：新用户可以通过注册页面创建账户
- 用户登录：已注册用户可以登录系统
- 会话管理：通过Session或Token管理用户状态
- 用户登出：安全退出系统

### 账单管理模块

- 账单列表：展示所有账单记录
- 添加账单：创建新的账单记录
- 查看详情：查看特定账单的详细信息
- 编辑账单：修改现有账单信息
- 删除账单：移除不需要的账单记录

## 数据库设计

### 用户表 (users)

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | String | 用户唯一标识 |
| username | String | 用户名 |
| password | String | 密码（MD5加密） |
| time | Date | 创建时间 |

### 账单表 (bills)

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | String | 账单唯一标识 |
| title | String | 账单标题 |
| time | Date | 账单时间 |
| type | Number | 账单类型（收入/支出） |
| cost | Number | 金额 |
| remark | String | 备注 |

## 部署说明

### 环境要求

- Node.js >= 14.x
- MongoDB >= 4.x

### 部署步骤

1. 克隆项目代码
   ```bash
   git clone <repository-url>
   cd liushui
   ```
2. 安装依赖
   ```bash
   npm install
   ```
3. 配置数据库
   在 `config/config.js` 中修改数据库连接参数：
   ```javascript
   module.exports = {
     DB_HOST: '127.0.0.1',  // MongoDB服务器地址
     DB_PORT: 27017,        // MongoDB端口
     DB_NAME: 'test',       // 数据库名称
     TOKEN_SERCET: 'salt'   // Token密钥
   }
   ```
4. 启动MongoDB服务
5. 启动应用
   ```bash
   npm start
   ```
6. 访问应用
   默认地址：`http://localhost:3000`

## 接口说明

### 认证相关

- `POST /auth/register` - 用户注册
- `POST /auth/login` - 用户登录
- `GET /auth/logout` - 用户登出

### 账单相关

- `GET /bill/list` - 获取账单列表
- `GET /bill/add` - 添加账单页面
- `POST /bill/create` - 创建账单
- `GET /bill/detail/:id` - 查看账单详情
- `GET /bill/edit/:id` - 编辑账单页面
- `POST /bill/update` - 更新账单
- `GET /bill/delete/:id` - 删除账单
