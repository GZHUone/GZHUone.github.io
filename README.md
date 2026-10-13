# 朱冠全的个人主页

复旦大学电子信息硕士 Guanquan Zhu（朱冠全）的个人主页，基于 Academic Pages 原模板定制。

网站地址：<https://gzhuone.github.io/>

## 更新内容

- `_pages/about.md`：简介、项目、经历、奖项、技术能力和联系方式。
- `_config.yml`：网站地址、姓名、邮箱及侧边栏信息。
- `_data/navigation.yml`：顶部导航。
- `images/affiliations/`：复旦大学校标与未来信息创新学院院标。
- `images/projects/`：项目图片。

## 一行命令发布

以后请在 `/Users/guanquan/fudan/个人网站/GZHUone.github.io` 目录中修改网站内容，然后在终端复制执行这一行：

```sh
cd "/Users/guanquan/fudan/个人网站/GZHUone.github.io" && git add -A && (git diff --cached --quiet || git commit -m "更新个人主页") && git push origin main
```

命令会提交仓库中的全部改动并推送到 `main`，随后 GitHub Actions 自动构建和发布网页。没有新改动时会跳过提交，继续推送已有提交。

在仓库 [Actions 页面](https://github.com/GZHUone/GZHUone.github.io/actions/workflows/jekyll.yml) 确认发布任务成功后，打开 <https://gzhuone.github.io/> 查看更新。

`academicpages.github.io-master` 是保留的模板副本；上面的命令只提交 `GZHUone.github.io` 目录中的改动。

## 预览与发布

在配置好 Ruby 3.3 和 Bundler 的环境中运行：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --force_polling
```

在浏览器打开 `http://localhost:4000`。macOS 上也可双击 `preview.command`。

提交到 `main` 或 `master` 后，由 `.github/workflows/jekyll.yml` 自动构建并发布至 GitHub Pages。Pages 的 Source 应设置为 **GitHub Actions**。

`Gemfile.lock` 固定构建依赖版本。本地缓存、开发依赖目录和 `_site/` 不提交到仓库。模板中的示例论文、博客、演讲等内容通过 `_config.yml` 排除，不会出现在网站中。

更多维护说明见 [PERSONAL_SITE.md](PERSONAL_SITE.md)。

## 模板与许可

采用 [Academic Pages](https://github.com/academicpages/academicpages.github.io)，其基础为 [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)。项目展示样式参考用户提供的同学网站 `ryannnice.github.io-master`，原模板 MIT 许可保留在 `LICENSE`。
