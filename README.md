# Tom Personal Site Pack

这是一个可直接运行的 Vite + React + Tailwind 个人网站 v0。

## 本地启动

```bash
npm install
npm run dev
```

打开终端显示的本地地址，例如：

```bash
http://localhost:5173
```

## 编辑内容

主要内容都在：

```bash
src/data/profile.js
```

你可以先改：
- 关键数字
- 项目卡片
- 研究方向
- 联系方式
- 小红书链接

## 部署建议

最简单路径：

1. 用 GitHub Desktop 创建 repo，并 push 到 GitHub
2. 打开 Vercel
3. Import GitHub repo
4. Framework 选择 Vite
5. Build command: `npm run build`
6. Output directory: `dist`

## 当前定位

这版不是传统简历页，而是一个面向国内社交、VC networking 和 founder-facing 场景的个人 landing page。核心逻辑：

- 首屏先用 4 个数字建立可信度
- 再用 Builder Arc 讲清楚“初中卖鞋 → 高中盒饭 → 大学 startup → AI tools / VC research”的连续叙事
- 项目卡片强调 impact highlight，而不是堆履历
- 研究区承接 VC 方向


## 本次更新

- 接入了个人照片与项目 proof 图
- AI 工具用户数更新为 500+
- Research themes 增加了 AI-native enterprise、AI infra / agent protocol layer
