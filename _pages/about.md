---
permalink: /
title: "Guanquan Zhu（朱冠全）"
description: "朱冠全，复旦大学电子信息硕士。关注大语言模型后训练、AI Agent、AI 基础设施与推理性能评测。"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

你好，很高兴在这里认识你！

我目前在**复旦大学未来信息创新学院**攻读**电子信息硕士**学位。此前在**香港中文大学（深圳）**、**深圳市大数据研究院**担任研究助理（RA），导师是**王阿康博士**（数据科学学院）。

欢迎计算机科学各方向的交流与合作。个人简历（准备中） · [**访问 TEAM NEXUS**](https://ryannnice.github.io/nexus/)

## 精选 AI 系统项目 {#projects}

<div class="project-list">

  <article class="project-card" id="project-clformer">
    <header class="project-card__header">
      <h3 class="project-card__title">项目一｜基于物理约束 CNN-Transformer 的空间望远镜高精度波前检测与端侧部署</h3>
      <p class="project-card__meta">中国科学院科研项目 · CLFormer · Jetson AGX Orin</p>
    </header>
    <figure class="project-media project-media--wide">
      <a href="{{ '/images/projects/segmented-telescope-workflow.png' | relative_url }}" aria-label="放大查看分块望远镜任务架构图">
        <img src="{{ '/images/projects/segmented-telescope-workflow.png' | relative_url }}" width="1410" height="894" loading="lazy" decoding="async" alt="分块望远镜智能波前感知流程：采集 PSF 图像、预测 Zernike 系数，并通过 Zernike 多项式恢复波前">
      </a>
      <figcaption>分块望远镜任务架构：PSF 图像采集 → Zernike 系数预测 → 波前重建</figcaption>
    </figure>
    <figure class="project-media project-media--wide">
      <a href="{{ '/images/projects/CLformer.png' | relative_url }}" aria-label="放大查看 CLFormer 模型架构图">
        <img src="{{ '/images/projects/CLformer.png' | relative_url }}" width="1768" height="920" loading="lazy" decoding="async" alt="CLFormer 模型架构：融合坐标注意力、局部频率自注意力、卷积块注意力与 Vision Transformer，完成 Zernike 系数回归和波前重建">
      </a>
      <figcaption>CLFormer 模型架构：空域与频域特征融合、全局建模及波前重建</figcaption>
    </figure>
    <details class="project-details">
      <summary>展开项目详情</summary>
      <div class="project-details__content">
        <p><strong>项目背景：</strong>作为核心研发成员，参与中国科学院空间望远镜智能波前检测相关科研项目。针对拼接式空间望远镜传统波前检测算法实时性不足、复杂像差重建精度受限等问题，研究基于物理约束神经网络的高精度波前感知方法，实现从光学仿真、深度学习模型优化到边缘计算设备部署的完整技术链路。</p>
        <p><strong>主要工作：</strong></p>
        <ul>
          <li><strong>物理仿真与数据集构建：</strong>基于光学成像机理与 Zernike 多项式建立波前像差仿真模型，构建包含 <strong>10 万组样本</strong>的数据集，每组包含 5 幅不同离焦量的 PSF 图像及对应的 Zernike 系数标签，模拟噪声与光学失真，为模型训练和泛化评估提供数据支撑。</li>
          <li><strong>CNN-Transformer 模型设计与优化：</strong>研发 CLFormer 波前检测模型，融合坐标注意力（CA）、局部频率自注意力（LFSA）、卷积块注意力（CBAM）与 Vision Transformer，实现空域、频域特征提取及跨子镜全局建模，完成高维 Zernike 系数回归与波前重建，并通过消融实验验证模块有效性。</li>
          <li><strong>模型加速与边缘端部署：</strong>基于 PyTorch → ONNX → TensorRT 完成模型转换与推理引擎构建，在 <strong>Jetson AGX Orin</strong> 平台部署，采用 CUDA Graph、Pinned Memory、显存复用及异步数据传输优化推理链路，并开展精度一致性和批量推理测试。</li>
        </ul>
        <p class="project-card__metrics"><strong>核心成果：</strong>构建 CLFormer 高精度波前检测模型，波前重建 RMSE 达到 <strong>0.01</strong>，相比 ViT 基准模型误差降低 <strong>66.7%</strong>；在 Jetson AGX Orin 平台实现单组 5 幅 PSF 图像约 <strong>1.49 ms</strong> 推理，折合单幅约 <strong>0.298 ms</strong>，较 20 ms 考核指标提升约 <strong>67 倍</strong>，且工程优化前后输出保持逐位一致，满足项目阶段性精度与实时性指标。</p>
      </div>
    </details>
  </article>

  <article class="project-card" id="project-guidellm">
    <header class="project-card__header">
      <h3 class="project-card__title">项目二｜GuideLLM Bench——大模型推理服务性能评测平台</h3>
      <p class="project-card__meta">GuideLLM · LLMPerf · 推理服务性能评测</p>
    </header>
    <div class="project-media-grid">
      <figure class="project-media">
        <a href="{{ '/images/projects/guidellm-bench.png' | relative_url }}" aria-label="放大查看 GuideLLM Bench 平台界面"><img src="{{ '/images/projects/guidellm-bench.png' | relative_url }}" width="2672" height="1460" loading="lazy" decoding="async" alt="GuideLLM Bench Web 性能评测平台的任务配置与结果界面"></a>
        <figcaption>GuideLLM Bench · Web 性能评测平台</figcaption>
      </figure>
      <figure class="project-media">
        <a href="{{ '/images/projects/guidellm.png' | relative_url }}" aria-label="放大查看 GuideLLM 测试流程"><img src="{{ '/images/projects/guidellm.png' | relative_url }}" width="1672" height="941" loading="lazy" decoding="async" alt="GuideLLM 的工具入口、数据源、负载模型、后端系统、执行测试与结果输出流程"></a>
        <figcaption>多负载配置、自动化测试与结果输出</figcaption>
      </figure>
    </div>
    <details class="project-details">
      <summary>展开项目详情</summary>
      <div class="project-details__content">
        <p><strong>项目背景：</strong>针对大语言模型部署后，不同推理服务在并发处理能力、响应延迟和吞吐性能方面存在差异，以及传统命令行压测配置复杂、测试结果分散、缺少统一评测入口等问题，基于 GuideLLM 与 LLMPerf 构建 Web 可视化性能评测平台。用户通过网页提交模型服务地址及端口、测试参数和负载配置，即可自动完成性能测试、指标统计与结果展示，为大模型在线部署和服务容量规划提供数据支持。</p>
        <ul>
          <li><strong>多端服务接入与 Web 测试任务管理：</strong>构建可视化 Benchmark 任务管理流程，支持通过网站提交符合 OpenAI API 规范的模型推理服务地址，兼容自定义服务及中转站接口，实现推理服务接入、测试数据集生成、任务提交与执行状态管理。</li>
          <li><strong>多负载模型配置与自动化性能测试：</strong>集成 LLMPerf 和 GuideLLM 测试能力，支持固定 Token 长度测试及可配置的负载 Profile。通过 Sweep 模式自动执行同步基线、极限吞吐和多档固定到达率扫描，采集 TTFT、TPOT、请求吞吐、输出 Token 吞吐、并发数及错误数等指标，实现不同负载条件下的性能评估。</li>
          <li><strong>性能指标分析与可视化排行榜：</strong>构建测试结果统计与展示模块，支持任务列表、模型性能排行榜及 JSON、HTML 等格式的结果查看。结合 P99 延迟和请求失败数等 SLA 约束，对不同负载档位进行筛选，识别满足服务质量要求的高吞吐工作点。</li>
        </ul>
        <p class="project-card__metrics"><strong>核心成果：</strong>实现从 Web 端提交测试任务、自动化执行压测到性能指标统计及排行榜展示的完整评测流程，支持多端模型服务接入和负载 Profile 自定义配置。以 Qwen3-32B-W8A8 模型为例，在输入、输出均为 512 Token 的测试条件下，采用 Sweep 多档负载扫描，在满足 P99 TTFT ≤ 2000 ms、P99 TPOT ≤ 100 ms 及零失败请求的约束下，筛选出并发约 15、请求到达率约 1.5 req/s、输出吞吐约 401 tok/s 的推荐工作点，为推理服务负载配置与容量规划提供量化依据。</p>
      </div>
    </details>
  </article>

  <article class="project-card" id="project-darc-ft">
    <header class="project-card__header">
      <h3 class="project-card__title">项目三｜DARC-FT：基于双模型相对置信度引导的大语言模型参数高效微调方法</h3>
      <p class="project-card__meta">GIFT · 动态损失加权 · LoRA 参数迁移</p>
    </header>
    <figure class="project-media project-media--wide">
      <a href="{{ '/images/projects/darc-ft.png' | relative_url }}" aria-label="放大查看 DARC-FT 方法架构"><img src="{{ '/images/projects/darc-ft.png' | relative_url }}" width="1916" height="821" loading="lazy" decoding="async" alt="DARC-FT 双模型相对置信度引导的 LoRA 训练，以及参数迁移、合并与单模型推理架构"></a>
      <figcaption>双模型相对置信度引导训练 → 参数迁移与合并 → 单模型推理</figcaption>
    </figure>
    <details class="project-details">
      <summary>展开项目详情</summary>
      <div class="project-details__content">
        <p><strong>项目背景：</strong>针对大语言模型领域微调过程中通用能力退化、低置信度 token 干扰训练以及监督信号利用不充分等问题，基于 GIFT 框架，研究双模型相对置信度引导的动态损失加权与跨模型参数迁移方法，提升模型的任务适配能力。</p>
        <ul>
          <li><strong>基线复现与评测框架搭建：</strong>基于 Qwen、Llama 系列模型复现 GIFT 的教师引导、LoRA 参数高效微调及 Base-to-Instruct 参数迁移流程，搭建涵盖数据预处理、模型训练、参数合并和 Benchmark 评测的完整实验框架。</li>
          <li><strong>双模型相对置信度引导机制设计：</strong>提出 DARC-FT 方法，利用 Base Model 与 Instruct Model 对目标 token 的对数概率差衡量相对置信度，通过 Sigmoid 函数与温度参数构建 token 级动态权重，对交叉熵损失进行自适应加权，引导模型重点学习 Instruct 相对 Base 具有更高预测置信度的训练信号。</li>
          <li><strong>跨模型参数迁移与消融实验：</strong>在冻结 Base 主干参数的条件下训练 LoRA，将学习得到的参数更新合并至 Instruct，实现单模型推理；设计 SFT+Merge、GIFT-BaseT、GIFT 等对照实验，结合数学推理、医疗问答及通用能力评测，分析相对置信度加权机制的有效性与跨领域适用性。</li>
        </ul>
        <p class="project-card__metrics"><strong>核心成果：</strong>完成 DARC-FT 方法设计与工程实现，构建双模型置信度计算、动态加权训练、LoRA 参数迁移及单模型推理的完整流程；现有数学任务实验结果提供了初步有效性证据，同时发现医疗任务中仍存在性能局限，为后续置信度约束优化及跨领域泛化研究提供实验依据。</p>
      </div>
    </details>
  </article>
</div>

## 已发表文章 {#publications}

1. **G. Zhu**, Z. Luo, M. Ye, et al., [Instance Segmentation of Sugar Apple (Annona squamosa) in Natural Orchard Scenes Using an Improved YOLOv9-seg Model](https://www.mdpi.com/2077-0472/15/12/1278). *Agriculture*, 2025, 15(12), 1278.

2. **G. Zhu**, M. Ye, X. Yu, et al., [Optimizing Route Planning via the Weighted Sum Method and Multi-Criteria Decision-Making](https://www.mdpi.com/2227-7390/13/11/1704). *Mathematics*, 2025, 13(11), 1704.

3. X. Zhong, J. Liu, Y. Mao, Y. Zhong, and **G. Zhu**, [RFA2Net: A Receptive Field and Global Attention Enhanced Model for Semantic Segmentation of High-Resolution Remote-Sensing Images](https://www.mdpi.com/2673-2688/7/5/156). *AI*, 2026, 7(5), 156.

4. H. Shi, Z. Luo, Y. Ma, **G. Zhu**, and X. Dai, [SSGTN: Spectral–Spatial Graph Transformer Network for Hyperspectral Image Classification](https://www.mdpi.com/2072-4292/18/2/199). *Remote Sensing*, 2026, 18(2), 199.

5. J. Liu, J. Jiang, H. Liang, **G. Zhu**, et al., [GAE-SpikeYOLO: An Energy-Efficient Tea Bud Detection Model with Spiking Neural Networks for Complex Natural Environments](https://www.mdpi.com/2077-0472/16/3/353). *Agriculture*, 2026, 16(3), 353.

## 个人动态 {#news}

- **2025 年 9 月** — 推免至**复旦大学未来信息创新学院**，攻读电子信息硕士学位。
- **2025 年 7 月** — 获**香港科技大学（广州）人工智能研究型硕士（MPhil）**录取及**全额奖学金**。

## 教育与研究经历 {#experience}

- **复旦大学**，中国 · 上海  
  2026 年 9 月 – 2029 年 6 月（预计）  
  **未来信息创新学院 · 电子信息硕士**

- **香港大学**，中国 · 香港  
  2026 年 7 月  
  **暑期学校学员**

- **深圳市大数据研究院（SRIBD）**，中国 · 深圳  
  2026 年 3 月 – 2026 年 6 月  
  **算法实习生**  
  从事 AI 基础设施、加速器算子优化、大语言模型推理基准测试与压力测试。

- **香港大学 / 澳门大学**，中国 · 香港 / 澳门  
  2023 年 11 月  
  **跨学科项目组长**  
  **GPA：97.50/100.00**；获胜团队杰出表现嘉奖信。

## 荣誉与奖励 {#awards}

- **2025 年 12 月 — 国家奖学金**，中华人民共和国教育部。
- 2025 年 9 月 — 中国国际大学生创新大赛，**国家银奖、广东省金奖**，中华人民共和国教育部。
- 2025 年 5 月 — 计算机设计大赛，**广东省一等奖**，广东省教育厅。
- **2024 年 12 月 — 国家奖学金**，中华人民共和国教育部。
- 2024 年 12 月 — 全国大学生数学建模竞赛，**广东省一等奖**，广东省教育厅。
- 2024 年 11 月 — 第九届全国密码技术竞赛，**全国三等奖**，中国密码学会。
- **2024 年 8 月 — 第九届全国高校密码数学挑战赛，全国三等奖、中南赛区一等奖（广东省仅两支队伍获得）**，中国密码学会。
- 2024 年 7 月 — 第十届全国大学生统计建模大赛，**广东赛区一等奖**，中国统计教育学会。

## 技术能力 {#skills}

- **大语言模型后训练与 Agent：** Qwen3、Transformer、SFT、DPO/RPO、LoRA、Tool Calling、模型外记忆、多轮上下文编排与 Agent 评测。
- **检索与模型服务：** Embedding、Reranker、BM25 / 向量混合检索、RRF、Cross-Encoder、vLLM 与 SGLang。
- **AI 基础设施：** CUDA、昇腾 910B/910C、msprof 性能分析、推理基准测试与算子优化。
- **工程开发：** Python、C、PyTorch、Hugging Face、MS-SWIFT、FastAPI、SQLite、Docker、Git、Vue 3 与 Linux。
- **AI 辅助开发：** 每日高频使用 Codex 与 Claude Code，月度 Token 使用量达亿级。
- **文档与媒体：** LaTeX、Markdown、MS Office / Visio、Adobe。

## 学习之外 {#misc}

> 学习是世界上最幸福的事情之一。

喜欢电影、音乐、摄影、篮球、跑步、羽毛球、徒步与烹饪……

## 保持联系 {#contact}

欢迎计算机科学各方向的交流与合作。

- **邮箱：** [26213090299@m.fudan.edu.cn](mailto:26213090299@m.fudan.edu.cn)
- **GitHub：** [GZHUone](https://github.com/GZHUone)
- **学习小组：** [TEAM NEXUS](https://ryannnice.github.io/nexus/)

<figure class="wechat-qr" id="wechat">
  <a href="{{ site.author.wechat | relative_url }}" aria-label="放大朱冠全的微信二维码">
    <img src="{{ site.author.wechat | relative_url }}" width="888" height="1131" loading="lazy" decoding="async" alt="朱冠全的微信二维码">
  </a>
  <figcaption>微信 · 点击查看原图</figcaption>
</figure>
