import heroPortrait from "../assets/hero-portrait.jpg";
import tmtbotUi from "../assets/tmtbot-ui.png";
import dateTonightUi from "../assets/date-tonight-ui.png";
import utopiaSession from "../assets/utopia-session.jpg";
import utopiaGroup from "../assets/utopia-group.jpg";
import connectionDeskUi from "../assets/connection-desk-ui.png";
import carDyno from "../assets/car-dyno.jpg";
import whipsignalUi from "../assets/whipsignal-ui.png";
import golfPhoto from "../assets/golf.jpg";
import skiingPhoto from "../assets/skiing.jpg";
import rugbyPhoto from "../assets/rugby.jpg";
import founderDinnerPhoto from "../assets/founder-dinner.jpg";

export const profile = {
  name: "Tom Wang",
  cnName: "野蛮VC人Tom",
  headline: "NYU Economics · Builder · Early-stage Tech Observer",
  email: "fw2433@nyu.edu",
  xhsUrl: "https://xhslink.com/m/5y3LHhUI6d",
  linkedinUrl: "https://www.linkedin.com/in/tomwang111",
  heroTitle: "从小型商业闭环，到早期科技投资。",
  heroSubtitle:
    "我在用两条线理解早期公司：一边自己持续做小型产品和商业项目持续验证商业模式，一边从投资视角研究 AI、前沿硬件、社区和年轻 founder 生态。",
  thesis:
    "比起其他，我更关心的是：一个真实需求如何被发现、被验证、被分发，并最终变成一个可复用可scale的商业系统。",
  portrait: heroPortrait,
};

export const metrics = [
  {
    value: "3,000+",
    label: "学生社群覆盖",
    detail: "Utopia Network 覆盖美中地区三所美国大学城华人学生群体",
  },
  {
    value: "3",
    label: "城市 / 校园社区",
    detail: "Cleveland、Madison、Ann Arbor 的线下社交实验",
  },
  {
    value: "500+",
    label: "AI 工具用户",
    detail: "TMTBOT 产品覆盖北美、香港、澳洲、英国等金融业用户",
  },
  {
    value: "30%+",
    label: "单日市占率峰值",
    detail: "Instant Bite 项目在约 150 人的封闭社区中达到最高约 30% 日渗透率",
  },
];


export const builderArc = [
  {
    time: "初中",
    title: "Sneaker Resale",
    text: "从球鞋和潮流单品海外转售开始，第一次接触信息差、定价权、同龄人需求和点对点分发。",
  },
  {
    time: "高中",
    title: "Instant Bite - Lunch Box Operation",
    text: "发现校园午餐垄断、贵、慢、不方便的高频痛点后，协调外部供应商，并在校内搭建运输和分发网络，峰值单日 40+ 订单。理解价格敏感、信任和高频复购。",
  },
  {
    time: "大一",
    title: "Utopia Link",
    text: "把学生线下社交需求做成跨城市社区和活动平台，测试校园人群、组局系统、本地运营和商业化，",
  },
  {
    time: "现在",
    title: "AI Tools & VC Research",
    text: "使用 vibe coding 制作 MVP 并快速迭代上线；同时围绕 AR/MicroLED、AI-native 企业、基础设施和 agent 协议层做投资研究。",
  },
];

export const projects = [
  {
    title: "Utopia Link",
    type: "Offline Social Platform",
    status: "Built / Operated",
    highlight: "覆盖 3,000+ 名学生，横跨 3 个美国大学城社群，并在首周实现正向现金流。",
    description:
      "一个面向美国大学城华人学生的线下社交平台，通过剧本杀、组局、社群运营和本地 DM 网络，把分散的学生社交需求组织成可运营的活动体系。",
    bullets: [
      "覆盖 Cleveland、Madison、Ann Arbor 等校园社区",
      "搭建本地 DM / operator 分工体系，测试跨城市复制",
      "验证定价、活动留存、微信群分发、线下信任密度等运营变量",
      "在启动早期实现收入闭环和正向现金流，验证学生线下社交活动的付费意愿",
    ],
    insight:
      "线下社区的关键不是流量，而是信任密度、复购场景和本地 operator 的执行质量。",
    image: utopiaGroup,
  },
  {
    title: "TMTBOT",
    type: "AI Market Brief Tool",
    status: "Built / Launched",
    highlight: "首月上线 500+ 付费用户，覆盖北美、香港、澳洲、英国等金融学习人群。",
    description:
      "一个面向 finance recruiting 和市场学习的 AI 市场简报工具，目标是把复杂市场叙事压缩成可复述、可面试、可讨论的高密度 insight。",
    bullets: [
      "服务 IB / VC / finance interview prep 场景",
      "把新闻流转化为结构化 talking points 和 market narrative",
      "测试 AI 在金融学生学习、内容压缩和日常输入中的产品价值",
    ],
    insight:
      "金融初学者缺的不是更多资讯，而是解释框架、复述能力和高频可用的市场语言。",
    image: tmtbotUi,
  },
  {
    title: "WhipSignal",
    type: "AI Stock Move Explainer",
    status: "MVP",
    highlight: "用 Finnhub API + GPT-4 mini 做出一个面向美股散户的即时异动解释器。",
    description:
      "一个面向中小美股投资者的 AI 信息分析平台。当股票出现大涨、大跌或板块联动时，系统会整合行情、新闻和同行业线索，帮助用户快速理解异动原因、情绪状态和潜在上下游影响，但不直接提供买入、卖出、加仓、减仓或止损建议。",
    bullets: [
      "接入 Finnhub API 获取股票行情、新闻和基础市场数据",
      "使用 GPT-4 mini 将异动拆解为公司因素、板块联动、大盘拖累和情绪波动",
      "围绕小散户的真实痛点设计：在 FOMO 或恐慌前先完成信息检查",
      "用 disclaimer 明确产品定位为信息整理工具，不构成投资建议",
    ],
    insight:
      "散户真正缺的不是更多观点，而是在波动发生时快速建立行业上下文、因果链条和风险边界的能力。",
    image: whipsignalUi,
  },
  {
    title: "Date Tonight",
    type: "Vibe-Coded Consumer App",
    status: "MVP",
    highlight: "用 AI-assisted coding 从 0 做出可公开访问的消费工具 MVP。",
    description:
      "一个帮助用户基于预算、关系阶段、场景氛围和城市位置生成约会/聚会方案的轻量网页应用。",
    bullets: [
      "从需求定义、页面结构到代码实现均通过 AI 协作完成",
      "围绕城市消费、社交决策、场景推荐做产品测试",
      "验证“降低社交决策成本”的小工具是否具备传播可能",
    ],
    insight:
      "消费工具不一定要复杂；只要能减少尴尬、选择困难和沟通成本，就有早期价值。",
    image: dateTonightUi,
  },
  {
    title: "Connection Desk",
    type: "Founder / Investor Network Tool",
    status: "Prototype",
    highlight: "把人脉从通讯录升级为可复盘、可分层、可激活的关系资产。",
    description:
      "一个面向早期投资人、学生 builder 和 founder network 的个人关系管理工具，用来记录关系来源、上下文、信任级别、合作潜力和后续动作。",
    bullets: [
      "区分 public-shareable contacts 和 private one-to-one relationships",
      "用结构化字段记录认识路径、关系强度和可共享程度",
      "探索年轻投资人如何系统化管理 founder / investor 网络",
    ],
    insight:
      "关系资本不会自动复利；只有上下文被记录、分类和重新激活时，它才真正变成资产。",
    image: connectionDeskUi,
  },
  {
    title: "Factory AI Brain",
    type: "Traditional Industry AI Concept",
    status: "Exploring",
    highlight: "围绕 鲜食制造 / 传统制造 / 国际贸易 场景，探索订单、原料、排产和损耗的 AI 数据层。",
    description:
      "基于家族背景，思考如何用历史订单、原材料消耗和产线数据辅助需求预测、采购计划和损耗控制。",
    bullets: [
      "关注老师傅经验估单、原材料下单、产线排期等传统决策流程",
      "探索用数据层和 AI agent 承接 dirty work，而不是直接替代核心工艺判断",
      "思考传统行业 AI transformation 的真实落地边界",
    ],
    insight:
      "传统行业不是没有数据，而是缺少能把数据转化为决策动作的界面，以及一个针对行业内各个公司都足够定制化的产品。AI Coding 和 agent的发展使这成为可能",
    image: null,
  },
];

export const researchThemes = [
  {
    title: "AR / MicroLED / Waveguide",
    highlight: "围绕 AR 上游供应链做深度研究，覆盖 MicroLED 光机、光波导和量产瓶颈。",
    text: "研究过 4/8/12 英寸晶圆成本、良率、MicroLED vs MicroOLED、SRG/VHG/阵列光波导等技术路线，以及从 demo 到量产之间的真实约束。",
  },
  {
    title: "AI-Native Enterprise",
    highlight: "关注 AI 时代企业软件如何从 seat-based SaaS 转向 execution-native systems。",
    text: "重点关注 AI-native 企业产品、workflow automation、vertical agents，以及企业内部知识与动作层如何被重构。",
  },
  {
    title: "AI Infra / Agent Protocol Layer",
    highlight: "我认为 AI 时代的 infra 底层架构和 agent 协议层会是未来的大市场之一。",
    text: "兴趣覆盖 model orchestration、tooling、context / memory、protocol interfaces、多 agent 协作、以及 agent-native app stack 的底层抽象。",
  },
  {
    title: "Humanoid Robotics",
    highlight: "关注机器人从技术展示到商业部署之间的断点。",
    text: "重点看 embodied AI、供应链瓶颈、量产成本、应用场景和 venture-scale deployment 的可行性。",
  },
];

export const lookingFor = [
  "看早期项目的 VC 同行：交换行业 thesis、项目线索和年轻 founder 生态观察",
  "正在从 0 到 1 的青年 founder：聊真实用户、冷启动、商业化和第一批高质量反馈",
  "有创业想法但还没实践的朋友：一起把 idea 拆成可验证的问题、MVP 和第一批用户",
  "对纽约 / 上海 founder network、AI 工具、校园创业和小型商业闭环感兴趣的人",
];

export const interests = ["Cars", "Skiing", "Rugby", "Founder Dinners", "Urban Consumer Culture"];

export const outsideWorkVisual = {
  image: carDyno,
  title: "Cars",
  text: "我对 cars 的兴趣更多在工程、性能调校和机械系统。",
};

export const writings = [
  {
    title: "小项目教会我的商业闭环。",
    type: "Builder Story",
    date: "2026",
    summary:
      "从初中卖鞋、高中盒饭，到大学做 Utopia、TMTBOT 和一系列 AI 工具。我更关心的不是项目看起来多大，而是每一次小商业闭环如何训练我发现需求、验证需求和组织供给的能力。",
    tags: ["Builder Arc", "Commercial Loops", "Personal Story"],
    link: "https://xhslink.com/m/5y3LHhUI6d",
  },
  {
    title: "为什么学生 founder 最缺的不是 idea，而是真实分发。",
    type: "Founder Note",
    date: "2026",
    summary:
      "很多学生创业停在概念、BP 和 demo 阶段，真正稀缺的是早期用户、信任入口、复购场景和可持续的分发路径。",
    tags: ["Student Founders", "Distribution", "Early Stage"],
    link: "https://xhslink.com/m/5y3LHhUI6d",
  },
  {
    title: "AI 工具不是替你判断，而是帮你更快建立上下文。",
    type: "Product Reflection",
    date: "2026",
    summary:
      "从 TMTBOT 到 WhipSignal，我更想探索的是 AI 如何把碎片化信息压缩成可用判断框架，而不是直接替用户做买卖决策。",
    tags: ["AI Tools", "Finance", "Information Interface"],
    link: "https://xhslink.com/m/5y3LHhUI6d",
  },
  {
    title: "我为什么关注 AI 原生企业软件和 Agent 协议层。",
    type: "Investment Note",
    date: "2026",
    summary:
      "AI 时代的企业软件可能不再只是 SaaS seat，而是围绕任务执行、上下文记忆、工具调用和多 agent 协作重新组织。",
    tags: ["AI Infra", "Agent Protocol", "Enterprise AI"],
    link: "https://xhslink.com/m/5y3LHhUI6d",
  },
];


export const outsideSlides = [
  {
    title: "Cars",
    label: "Engineering / Tuning",
    image: carDyno,
    text: "我喜欢玩车的原因在于工程、性能调校和机械系统，以及下赛道的感觉。",
  },
  {
    title: "Golf",
    label: "Patience / Rhythm",
    image: golfPhoto,
    text: "Golf 对我来说更像节奏、耐心和长期主义训练。",
  },
  {
    title: "Skiing",
    label: "Speed / Control",
    image: skiingPhoto,
    text: "Skiing 吸引我的地方在于高速状态下的控制感、反馈速度和风险偏好。",
  },
  {
    title: "Rugby",
    label: "Contact / Execution",
    image: rugbyPhoto,
    text: "Rugby 让我更能理解对抗、协作、执行力和身体层面的 team trust。",
  },
  {
    title: "Founder Dinners",
    label: "Network / Conversations",
    image: founderDinnerPhoto,
    text: "我喜欢通过小型 dinner 和 coffee chat 维持真实交流，而不是只做表层 networking。",
  },
];


