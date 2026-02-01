# 流水账本系统

## 项目简介

基于Node.js的个人账本管理系统，使用MongoDB作为数据库存储，实现了完整的用户认证和账单管理功能。

## 技术选型

### 后端技术

- **Node版本**: Node.js 14.18.0
- **框架**: Express 4.16.1
- **模板引擎**: EJS 2.6.1
- **数据库**: MongoDB 6.0.21
- **数据访问**: Mongoose 8.13.1

### 前端技术

- **UI框架**: Bootstrap 5.3.0
- **JavaScript库**: jQuery 3.6.0

## 项目结构

```code
liushui/
├── bin/
│   └── www                                       # 服务器启动脚本
├── config/                                       # 配置文件
│   └── config.js                                 # 配置文件
├── db/                                           # 数据库文件
│   ├── lowdb.js                                  # LowDB数据库配置
│   ├── lowdb.json                                # LowDB数据文件
│   └── mongodb.js                                # MongoDB数据库配置
├── middlewares/                                  # 中间件目录
│   ├── checkToken.js                             # Token验证中间件
│   └── checkUser.js                              # Session用户验证中间件
├── models/                                       # 模型目录
│   ├── bill.js                                   # 账单数据模型
│   └── user.js                                   # 用户数据模型
├── public/                                       # 静态资源文件
│   ├── css/                                      # CSS样式文件
│   │   ├── bootstrap-datepicker.min.css          # 日期选择器样式
│   │   └── bootstrap.min.css                     # Bootstrap样式
│   ├── js/                                       # JS脚本文件
│   │   ├── bootstrap-datepicker.min.js           # 日期选择器脚本
│   │   ├── bootstrap-datepicker.zh-CN.min.js     # 日期选择器中文包
│   │   ├── bootstrap.bundle.min.js               # Bootstrap脚本
│   │   ├── jquery.min.js                         # jQuery脚本
│   │   └── main.js                               # 自定义脚本
│   └── favicon.ico                               # 网站图标
├── routes/                                       # 路由
│   ├── api/                                      # 接口路由
│   │   ├── bill.js                               # 账单接口
│   │   └── token.js                              # 签发接口
│   └── web/                                      # 页面路由
│       ├── auth.js                               # 认证相关页面
│       └── bill.js                               # 账单相关页面
├── views/                                        # 视图模板文件
│   ├── 404.ejs                                   # 404错误页面
│   ├── error.ejs                                 # 通用错误页面
│   ├── failed.ejs                                # 操作失败页面
│   ├── success.ejs                               # 操作成功页面
│   ├── auth/                                     # 认证相关页面
│   │   ├── login.ejs                             # 登录页面
│   │   └── register.ejs                          # 注册页面
│   └── bill/                                     # 账单相关页面
│       ├── add.ejs                               # 添加账单页面
│       ├── detail.ejs                            # 账单详情页面
│       ├── edit.ejs                              # 编辑账单页面
│       └── list.ejs                              # 账单列表页面
├── .gitignore                                    # Git忽略文件
├── app.js                                        # 应用入口文件
├── LICENSE                                       # 许可证文件
├── package.json                                  # 项目依赖配置
├── package-lock.json                             # 锁定依赖版本文件
└── README.md                                     # 项目说明文档
```

## 功能模块

### 认证模块

- 用户注册：新用户可以通过注册页面创建账号
- 用户登录：已注册用户可以登录系统
- 会话管理：通过Session或Token管理用户状态
- 用户登出：安全退出系统

### 账单模块

- 账单列表：展示所有账单记录
- 添加账单：创建新的账单记录
- 查看详情：查看特定账单的详细信息
- 编辑账单：修改现有账单信息
- 删除账单：移除不需要的账单记录

## 接口说明

### 认证相关

- `POST /auth/register` - 用户注册
- `POST /auth/login` - 用户登录
- `GET /auth/logout` - 用户登出

### 账单相关

- `GET /bill/list` - 查看账单列表
- `GET /bill/detail/:id` - 查看账单详情
- `GET /bill/add` - 添加账单页面
- `GET /bill/edit/:id` - 编辑账单页面
- `POST /bill/create` - 创建账单
- `POST /bill/update` - 更新账单
- `GET /bill/delete/:id` - 删除账单

## 数据库设计

### 用户表 (users)

- id：用户唯一标识
- username：用户名
- password：密码
- time：创建时间

### 账单表 (bills)

- id：账单唯一标识
- title：账单标题
- time：账单时间
- type：账单类型（收入/支出）
- cost：金额
- remark：备注

## 部署说明

### 环境要求

- Node.js 14.18.0
- MongoDB 6.0.21

### 数据库

启动数据库，在 `config/config.js` 中修改数据库连接参数：
```javascript
module.exports = {
  DB_HOST: '127.0.0.1',  // MongoDB服务器地址
  DB_PORT: 27017,        // MongoDB端口
  DB_NAME: 'liushui',    // 数据库名称
  TOKEN_SERCET: 'salt'   // Token密钥
}
```

### 部署步骤

安装依赖：
```bash
npm install
```

启动应用：
```bash
npm start
```

访问应用：
[http://localhost:3000/](http://localhost:3000/)
