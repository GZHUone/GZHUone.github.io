# 朱冠全的个人主页

此目录直接在 Academic Pages 模板中填入个人内容，保留原有 Jekyll 布局、导航、侧边栏、主题和响应式样式。项目展示复用同学网站 `_sass/layout/_home.scss` 中的项目样式。

## 更新内容

- `_pages/about.md`：简介、三个项目、已发表文章、动态、经历、奖项、技术能力和联系方式。
- `_config.yml`：姓名、邮箱、GitHub、网站地址和侧边栏资料。
- `_data/navigation.yml`：顶部导航及对应的首页锚点。
- `images/avatar.png`、`images/wechat.jpg`：头像与微信二维码。
- `images/projects/`：项目配图。
- `images/affiliations/`：复旦大学和未来信息创新学院 logo，显示在顶部导航区域。

个人简历暂时显示“准备中”。模板中的示例论文、教学、演讲、博客和简历仍保留在源目录，但通过 `_config.yml` 排除，不会出现在生成的网站中。

## 本地预览

在 macOS 上双击 `preview.command`，保持打开的终端窗口运行即可预览。修改 Markdown 后会自动重新构建；修改 `_config.yml` 后需要停止并重新运行。

也可以在已安装 Ruby 3.3 和 Bundler 的环境中运行：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --force_polling
```

浏览器地址为 `http://localhost:4000`。

## 发布

网站地址已配置为 `https://gzhuone.github.io`，仓库为 `GZHUone/GZHUone.github.io`。此目录是 Jekyll 源码，不能直接双击 Markdown 文件预览网站。

将本目录的源码（包括 `.github`）上传到对应仓库，在仓库 Settings → Pages 中将 Source 设为 GitHub Actions。部署工作流支持 `main` 和 `master` 分支。

不要上传 `vendor/`、`.bundle/`、`.jekyll-cache/` 或本地预览用的 `_site/`。这些目录已被 `.gitignore` 忽略。

推送到 `main` 或 `master` 后，GitHub Actions 会自动构建并发布。可在仓库的 Actions 页面查看部署记录。
