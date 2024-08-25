
<script setup lang="ts">
import WelcomeItem from '@/components/WelcomeItem.vue';//插入标题参数实现大标题（待实现）
import { marked } from 'marked';


import hljs from 'highlight.js'
import 'highlight.js/styles/foundation.css'
import { onMounted, ref, shallowRef } from 'vue';

let md = '## 博客交流群\n\n这是旧版介绍，用来显示看看效果，新版的 Readme 还没来得及写！\n\n项目交流 QQ 群号：777260310\n\n## 博客介绍\n\n\u003cp align=\"center\"\u003e\n   \u003ca target=\"_blank\" href=\"#\"\u003e\n      \u003cimg style=\"display: inline-block;\" src=\"https://img.shields.io/badge/Go-1.19-blue\"/\u003e\n      \u003cimg style=\"display: inline-block;\" src=\"https://img.shields.io/badge/Gin-v1.8.1-blue\"/\u003e\n      \u003cimg style=\"display: inline-block;\" src=\"https://img.shields.io/badge/Casbin-v2.56.0-blue\"/\u003e\n      \u003cimg style=\"display: inline-block;\" src=\"https://img.shields.io/badge/mysql-8.0-blue\"/\u003e\n      \u003cimg style=\"display: inline-block;\" src=\"https://img.shields.io/badge/GORM-v1.24.0-blue\"/\u003e\n      \u003cimg style=\"display: inline-block;\" src=\"https://img.shields.io/badge/redis-7.0-red\"/\u003e\n      \u003cimg style=\"display: inline-block;\" src=\"https://img.shields.io/badge/vue-v3.X-green\"/\u003e\n    \u003c/a\u003e\n\u003c/p\u003e\n\n[在线预览](#在线预览) | [项目介绍](#项目介绍) | [技术介绍](#技术介绍) | [目录结构](#目录结构) | [环境介绍](#环境介绍) | [快速开始](#快速开始) | [总结\u0026鸣谢](#总结鸣谢)  | [后续计划](#后续计划)\n\n您的 Star 是我坚持的动力，感谢大家的支持，欢迎提交 Pr 共同改进项目。\n\nGithub 地址：[https://github.com/szluyu99/gin-vue-blog](https://github.com/szluyu99/gin-vue-blog)\n\nGitee 地址：[https://gitee.com/szluyu99/gin-vue-blog](https://gitee.com/szluyu99/gin-vue-blog)\n\n## 在线预览\n\n博客前台链接：[hahacode.cn](https://www.hahacode.cn)（已适配移动端）\n\n博客后台链接：[hahacode.cn/admin](https://www.hahacode.cn/admin)（暂未专门适配移动端）\n\n\u003e 博客域名已通过备案，且配置 SSL，通过 https 访问\n\n测试账号：test@qq.com，密码：11111，前后台都可用这个账号登录\n\n\u003e 在线接口文档地址：[doc.hahacode.cn](http://doc.hahacode.cn/)，准备换成 Swagger\n\n## 有 Docker 环境可一键启动效果\n\nLinux/Mac 可直接运行，Windows 要使用 GitBash 运行（默认终端不能执行 shell）\n\n```bash\ngit clone https://github.com/szluyu99/gin-vue-blog \ncd gin-vue-blog/deploy\n./bootstrap.sh\n```\n\n## 项目介绍\n\nGithub 上有很多优秀的前后台框架，本项目也参考了许多开源项目，但是大多项目都比较重量级（并非坏处），如果从学习的角度来看对初学者并不是很友好。本项目在以**博客**这个业务为主的前提下，提供一个完整的全栈项目代码（前台前端 + 后台前端 + 后端），技术点基本都是最新 + 最火的技术，代码轻量级，注释完善，适合学习。\n\n同时，本项目可用于一键搭建动态博客（参考 [快速开始](#快速开始)）。\n\n前台：\n\n- 前台界面设计参考 Hexo 的 Butterfly 设计，美观简洁\n- 响应式布局，适配了移动端\n- 实现点赞，统计用户等功能 (Redis)\n- 评论 + 回复评论功能\n- 留言采用弹幕墙，效果炫酷\n- 文章详情页有文章目录、推荐文章等功能，优化用户体验\n\n后台：\n\n- 鉴权使用 JWT\n- 权限管理使用 CASBIN，实现基于 RBAC 的权限管理\n- 支持动态权限修改，前端菜单由后端生成（动态路由）\n- 文章编辑使用 Markdown 编辑器\n- 常规后台功能齐全：侧边栏、面包屑、标签栏等\n- 实现记录操作日志功能（GET 不记录）\n- 实现监听在线用户、强制下线功能\n- 文件上传支持七牛云、本地（后续计划支持更多）\n- 对 CRUD 操作封装了通用 Hook\n\n其他：\n\n- 采用 Restful 风格的 API\n- 前后端分离部署，前端使用 Nginx，后端使用 Docker\n- 代码整洁层次清晰，利于开发者学习\n- 技术点新颖，代码轻量级，适度封装\n- Docker Compose 一键运行，轻松搭建在线博客\n\n### 技术介绍\n\n\u003e 这里写一些主流的通用技术，详细第三方库：前端参考 `package.json` 文件，后端参考 `go.mod` 文件\n\n前端技术栈: 使用 pnpm 包管理工具\n\n- 基于 TypeScript\n- Vue3\n- VueUse: 服务于 Vue Composition API 的工具集\n- Unocss: 原子化 CSS\n- Pinia\n- Vue Router \n- Axios \n- Naive UI\n- ...\n\n后端技术栈:\n\n- Golang\n- Docker\n- Gin\n- GORM\n- Viper: 支持 TOML (默认)、YAML 等常用格式作为配置文件\n- Casbin\n- Zap\n- MySQL\n- Redis\n- Nginx: 部署静态资源 + 反向代理\n- ...\n\n其他:\n\n- 腾讯云人机验证\n- 七牛云对象存储\n- ...\n\n### 目录结构\n\n\u003e 这里简单列出目录结构，具体可以查看源码\n\n代码仓库目录：\n\n```bash\ngin-vue-blog\n├── gin-blog-admin      -- 博客后台前端\n├── gin-blog-front      -- 博客前台前端\n├── gin-blog-server     -- 博客后端\n├── deploy              -- 部署\n```\n\n\u003e 项目运行参考：[快速开始](#快速开始)\n\n后端目录：简略版\n\n```bash\ngin-blog-server\n├── api             -- API\n│   ├── front       -- 前台接口\n│   └── v1          -- 后台接口\n├── dao             -- 数据库操作模块\n├── service         -- 服务模块\n├── model           -- 数据模型\n│   ├── req             -- 请求 VO 模型\n│   ├── resp            -- 响应 VO 模型\n│   ├── dto             -- 内部传输 DTO 模型\n│   └── ...             -- 数据库模型对象 PO 模型\n├── routes          -- 路由模块\n│   └── middleware      -- 路由中间件\n├── utils           -- 工具模块\n│   ├── r               -- 响应封装\n│   ├── upload          -- 文件上传\n│   └── ...\n├── routes          -- 路由模块\n├── config          -- 配置文件\n├── test            -- 测试模块\n├── assets          -- 资源文件\n├── log             -- 存放日志的目录\n├── public          -- 外部访问的静态资源\n│   └── uploaded    -- 本地文件上传目录\n├── Dockerfile\n└── main.go\n```\n\n前端目录：简略版\n\n```\ngin-vue-admin / gin-vue-front 通用目录结构\n├── src              \n│   ├── api             -- 接口\n│   ├── assets          -- 静态资源\n│   ├── styles          -- 样式\n│   ├── components      -- 组件\n│   ├── composables     -- 组合式函数\n│   ├── router          -- 路由\n│   ├── store           -- 状态管理\n│   ├── utils           -- 工具方法\n│   ├── views           -- 页面\n│   ├── App.vue\n│   └── main.ts\n├── settings         -- 项目配置\n├── build            -- 构建相关的配置\n├── public           -- 公共资源, 在打包后会被加到 dist 根目录\n├── package.json \n├── package-lock.json\n├── index.html\n├── tsconfig.json\n├── unocss.config.ts -- unocss 配置\n└── vite.config.ts   -- vite 配置\n├── .env             -- 通用环境变量\n├── .env.development -- 开发环境变量\n├── .env.production  -- 线上环境变量\n├── .gitignore\n├── .editorconfig    -- 编辑器配置\n```\n\n部署目录：简略版\n\n```\ndeploy\n├── build      -- 镜像构建\n│   ├── mysql  -- mysql 镜像构建\n│   ├── server -- 后端镜像构建 (基于 gin-blog-server 目录)\n│   └── web    -- 前端镜像构建 (基于前端项目打包的静态资源)\n└── start\n    ├── docker-compose.yml    -- 多容器管理\n    └── .env                  -- 环境变量\n    └── ...\n```\n\n## 环境介绍\n\n### 线上环境\n\n服务器：腾讯云 2核 4G Ubuntu 22.04 LTS\n\n对象存储：七牛云\n\n### 开发环境\n\n| 开发工具                          | 说明                  |\n| ----------------------------- | ------------------- |\n| Vscode                        | Golang 后端 +  Vue 前端 |\n| Navicat                       | MySQL 远程连接工具        |\n| Another Redis Desktop Manager | Redis 远程连接工具        |\n| MobaXterm                     | Linux 远程工具          |\n| Apifox                        | 接口调试 + 文档生成         |\n\n| 开发环境   | 版本   |\n| ------ | ---- |\n| Golang | 1.19 |\n| MySQL  | 8.x  |\n| Redis  | 7.x  |\n\n### VsCode 插件\n\n目前推荐安装插件已经写到 `.vscode/extensions.json` 中，使用 VsCode 打开项目会推荐安装。\n\n\u003e 注意，使用 VsCode 打开 gin-blog-admin 和 gin-blog-front 这两个项目，而不是打开 gin-vue-blog 这个目录！\n\n## 快速开始\n\n建议下载本项目后，先一键运行起来，查看本项目在本地的运行效果。\n\n需要修改源码的话，参考常规运行，前后端分开运行。\n\n本项目开发环境是 Linux，如果 Windows 下运行有奇奇怪怪的问题，可以进群交流或提 Issue\n\n### 拉取项目前的准备 (Windows)\n\n如果是 Windows 系统，需要先执行以下指令，否则 Docker 构建过程可能会出 BUG。\n\n或者直接下载 ZIP 而不是通过 git clone 克隆项目。\n\nLinux 和 Mac 不需要进行该操作。\n\n\u003e 原因是该项目开发时基于 Linux，本项目规范使用 lf 换行符。而 Windows 的 git 在自动拉取项目时会将项目文件中换行符转换为 crlf，经过测试，构建过程会产生 BUG。\n\n```bash\n# 防止 git 自动将换行符转换为 crlf\ngit config --global core.autocrlf false\n```\n\n### 方式一：Docker Compose 一键运行\n\n需要有 Docker 和 Docker Compose 的环境\n\n\u003e 详细运行文档（包含环境搭建）参考：[deploy/README.md](https://github.com/szluyu99/gin-vue-blog/tree/main/deploy)\n\nLinux 下可以正常启动：（Windows 请使用 `GitBash` 进行操作）\n\n```bash\ngit clone https://github.com/szluyu99/gin-vue-blog \ncd gin-vue-blog/deploy\n./bootstrap.sh\n```\n\n本地前台访问 [localhost](http://localhost/)\n\n本地后台访问 [localhost/admin](http://localhost/admin)\n\n默认用户：\n\n- 管理员 admin 123456\n- 普通用户 user 123456\n- 测试用户 test 123456\n\n如果运行遇到问题，请查看详细文章 [deploy/README.md](https://github.com/szluyu99/gin-vue-blog/tree/main/deploy)\n\n### 方式二：常规运行\n\n需要安装 Golang、Node、MySQL、Redis 环境：\n \n- Golang 安装参考 [官方文档](https://go.dev/doc/install)\n\n- Node 安装建议使用 [Nvm](https://nvm.uihtm.com/)，也可以直接去 [Node 官网](https://nodejs.org/en) 下载\n\n- MySQL、Redis 建议使用 Docker 安装\n\n\u003e 以下使用 Docker 安装环境，未做持久化处理，仅用于开发和演示\n\nDocker 安装 MySQL：\n\n```bash\n# 注意: 必须安装 MySQL 8.0 以上版本\ndocker pull mysql:8.0\n\n# 运行 MySQL\ndocker run --name mysql8 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:8.0\n\n# 查看是否运行成功, STATUS 为 Up 即成功\ndocker ps\n\n# 进入容器, CTRL + D 退出\ndocker exec -it mysql8 bash\nmysql -u root -p123456\n```\n\nDocker 安装 Redis：\n\n```bash\ndocker pull redis:7.0\n\n# 运行 Redis\ndocker run --name redis7 -p 6379:6379 -d redis:7.0\n\n# 查看是否运行成功, STATUS 为 Up 即成功\ndocker ps\n\n# 进入容器, CTRL + D 退出\ndocker exec -it redis7 bash\nredis-cli\n```\n\n需要先运行后端服务，再运行前端项目，因为很多前端配置由后端动态加载（如菜单等）。\n\n拉取项目到本地：\n\n```bash\ngit clone https://github.com/szluyu99/gin-vue-blog.git\n```\n\n后端项目运行：\n\n```bash\n# 1、进入后端项目根目录 \ncd gin-blog-server\n\n# 2、修改项目运行的配置文件，默认加载位于 config/config.toml \n\n# 3、MySQL 导入 gvb.sql\n\n# 4、启动 Redis \n\n# 5、运行项目\ngo mod tidy\ngo run main.go\n```\n\n数据库中的默认用户：\n\n- 管理员 admin 123456\n- 普通用户 user 123456\n- 测试用户 test 123456\n\n前端项目运行： 本项目使用 pnpm 进行包管理，建议全局安装 `pnpm`\n\n```bash\nnpm install -g pnpm\n```\n\n前台前端：\n\n```bash\n# 1、进入前台前端项目根目录\ncd gin-blog-front\n\n# 2、安装依赖\npnpm install\n\n# 3、运行项目\npnpm dev\n```\n\n后台前端：\n\n```bash\n# 1、进入后台前端项目根目录\ncd gin-blog-admin\n\n# 2、安装依赖\npnpm install\n\n# 3、运行项目\npnpm dev\n```\n\n### 项目部署\n\nTODO\n\n## 总结鸣谢\n\n这个项目不管是前端，还是后端，都是花了比较大心血去架构的，并且从技术选型上，都是选择了目前最火 + 最新的技术栈。当然，这也是个人的学习之作，很多知识点都是边学边开发的（例如 Casbin），这个过程中也参考了很多优秀的开源项目，感谢大家的开源让程序员的世界更加美好，这也是开源本项目的目的之一。本项目中仍有很多不足，后续会继续更新。\n\n最后，项目整体代码风格很优秀，注释完善，适合 Golang 后端开发者、前端开发者学习。\n\n 鸣谢项目：\n\n- [https://butterfly.js.org/](https://butterfly.js.org/)\n- [https://github.com/qifengzhang007/GinSkeleton](https://github.com/qifengzhang007/GinSkeleton)\n- [https://github.com/zclzone/vue-naive-admin](https://github.com/zclzone/vue-naive-admin)\n- [https://github.com/antfu/vitesse](https://github.com/antfu/vitesse)\n- ...\n\n⭐ 博客后台的前端基于 [vue-naive-admin](https://github.com/zclzone/vue-naive-admin) 进行二开，感谢作者的开源。但是和原项目区别较大，详见 [gin-blog-admin/README.md](https://github.com/szluyu99/gin-vue-blog/tree/main/gin-blog-admin)\n\n\u003e 需要感谢的绝不止以上这些开源项目，但是一时难以全部列出，后面会慢慢补上。\n\n## 后续计划\n\n高优先级: \n\n- ~~完善图片上传功能, 目前文件上传还没怎么处理~~ 🆗\n- 后台首页重新设计（目前没放什么内容）\n- ~~前台首页搜索文章（目前使用数据库模糊搜索）~~ 🆗\n- ~~博客文章导入导出 (.md 文件)~~ 🆗\n- ~~权限管理中菜单编辑时选择图标（现在只能输入图标字符串）~~ 🆗\n- 后端日志切割\n- ~~后台修改背景图片，博客配置等~~ 🆗\n- ~~后端的 IP 地址检测 BUG 待修复~~ 🆗\n- ~~博客前台适配移动端~~ 🆗\n- ~~文章详情, 目录锚点跟随~~ 🆗\n- ~~邮箱注册 + 邮件发送验证码~~ 🆗\n- 修改测试环境的数据库为 SQLite3，方便运行\n\n后续有空安排上：\n\n- 黑夜模式\n- 前台收缩侧边信息功能\n- 说说\n- 相册\n- 音乐播放器\n- 鼠标左击特效\n- 看板娘\n- 第三方登录: QQ、微信、Github ...\n- 评论时支持选择表情，参考 Valine\n- 单独部署：前后端 + 环境\n- 重写单元测试，目前的单元测试是早期版本，项目架构更改后，无法跑通\n- 前台首页搜索集成 ElasticSearch\n- 国际化?\n\n其他：\n\n- 写一份好的文档\n- 补全 README.md\n- 完善 Apifox 生成的接口文档\n- ~~一键部署：使用 docker compose 单机一键部署整个项目（前后端 + 环境）~~ 🆗\n';
let article = '';
async function processMarkdown() {

 // 修正了字符串中的拼写错误

 
}

console.log(history.state.POST_ID)//测试POSTID


article =  await marked.parse(md, { async: true }),
   

   // 现在 md 包含了解析后的 markdown 字符串
   console.log('处理后的 markdown:', article);
  onMounted(async () => {
 

    processMarkdown()

   

})

processMarkdown();
 // 创建一个空字符串来接收 Markdown 内容

// 调用 marked() 方法，将 Markdown 转换为 HTML

 

</script>

<template>
  <WelcomeItem ></WelcomeItem>
<div>
  <div class="acl">

<n-avatar
class="user_ico"
  round
  :size="60"
  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
/>



    <div v-html="article" class="post_md">
   
  
</div>


</div>
<n-grid x-gap="12"  :y-gap="15" :cols="1">
<n-gi>
  <div class="light-green1" >

    <div class="user_discuss">
        <n-avatar
  round
  :size="88"
  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
/>
<h3 class="user_name">USER</h3>
    </div>
    
    <div class="user_txt">
        <!-- 限制400字符 -->
        <h3 >你好啊</h3> 
    </div>

  </div>

</n-gi>
</n-grid>



</div>
  

  <div class="user_input">
    <div>
      <n-input
      placeholder="发送一条评论吧"
      type="textarea"
      size="large"
      :autosize="{
        minRows: 3,
        maxRows: 5,
      }"
    />
    </div>

    <n-button class="post_t">发送</n-button>
  </div>
</template>


<style>


.post_t{

  position: relative;
  left: 90%;
  top: 38px;
}

.user_input{

  min-height: 150px;
 max-height: 600px;

  width: 827px;
  position: relative;
  left: 23%;


  padding: 2%;

  
  box-shadow: 1px 1px 10px 1px #080808;


}


.user_txt{

    width: 86%;

    height: 190px;
    position: absolute;
    word-break: break-all;
    left: 14%;
    top: 0%;

}

.user_name{

    position: absolute;
    top: 74%;
    left: 20%;

}

.user_discuss{

    position: absolute;

    
    top: 4%;
    left: 2%;
    height: 110px;
    width: 100px;
}

.light-green1 {
  min-height: 210px;
  width: 900px;


  height:auto;


 
  position: relative;
  top: 0%;
  left: 23%;

  box-shadow: 1px 1px 10px 1px #080808;
}

.user_cs{

    width: 900px;
    min-height: 300px;
    
    box-shadow: 1px 1px 10px 1px #080808;
    position: absolute;
    left: 23%;
}


 .post_md img {

    max-width: 40%;


}
.post_md{

    max-width: 80%;


    position:  relative;
    left: 18%;
    top: 0px;
    

}


.acl{
    

    max-width: 900px;

     min-height: 700px;
    box-shadow: 1px 1px 10px 1px #080808;
    position: relative;
    left: 23%;
    top: 23.1%;
    

}

.user_ico{
    position: absolute;
    top: 0.1%;
    left: 7%;
}

</style>