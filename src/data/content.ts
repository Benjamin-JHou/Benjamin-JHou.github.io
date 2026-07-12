export interface EduItem {
  period: string
  school: string
  degree: string
  major: string
  isPhD: boolean
}

export interface ExpItem {
  type: string
  period: string
  title: string
  subtitle: string
  isCurrent: boolean
}

export interface PatentItem {
  name: string
  field: string
  desc: string
}

export interface AwardItem {
  year: string
  title: string
  level: string
  isLatest: boolean
}

export interface PhotoItem {
  src: string
  label: string
  desc: string
  aspect: string
}

export interface LangContent {
  nav: {
    about: string
    education: string
    experience: string
    expertise: string
    projects: string
    gallery: string
    contact: string
  }
  hero: {
    name: string
    title: string
    affiliation: string
    intro: string
    papersLabel: string
    papersValue: string
    citationsLabel: string
    citationsValue: string
    hIndexLabel: string
    hIndexValue: string
    achievementTitle: string
    achievementText: string
    publications: string
  }
  about: {
    title: string
    paragraph: string
    identityTitle: string
  }
  identities: string[]
  education: {
    title: string
    phdBadge: string
    list: EduItem[]
  }
  experience: {
    title: string
    current: string
    list: ExpItem[]
  }
  expertise: {
    title: string
  }
  projects: {
    title: string
    patent: string
    viewDetails: string
  }
  awards: {
    title: string
    latest: string
    list: AwardItem[]
  }
  gallery: {
    title: string
    subtitle: string
    photos: PhotoItem[]
  }
  contact: {
    title: string
    name: string
    affiliation: string
    emailLabel: string
    email: string
    actionBtn: string
    copyright: string
    googleScholar: string
    orcid: string
  }
}

export const zh: LangContent = {
  nav: {
    about: '关于我',
    education: '教育背景',
    experience: '工作经历',
    expertise: '专业领域',
    projects: '研究成果',
    gallery: '生活',
    contact: '联系方式',
  },
  hero: {
    name: '周俊宇',
    title: '副研究员 · 生物科技与临床医学交叉 · 智能药物开发 · 智能医疗系统',
    affiliation: '北京大学 · 临床医学高等研究院',
    intro: '致力于人工智能与临床医学的交叉融合，通过创新研究与转化科学推动医疗健康事业的进步。',
    papersLabel: '发表论文',
    papersValue: '32+',
    citationsLabel: '总引用',
    citationsValue: '640+',
    hIndexLabel: 'H 指数',
    hIndexValue: '12',
    achievementTitle: '主要学术成果',
    achievementText:
      '全国博士后创新创业大赛银奖获得者，国家优秀博士后称号，省级优秀留学回国人才，中国光学学会生物医学光子学会青年委员。',
    publications:
      '以第一作者在 Expert Systems with Applications、Journal of Translational Internal Medicine、Journal of Chemical Information and Modeling、Food & Function 等国际顶级期刊发表研究',
  },
  identities: [
    '北京欧美同学会会员',
    '全国优秀博士后（全国第三届博士后创新创业大赛银奖）',
    '省级优秀归国人才',
    '中国光学学会第四届生物医学光子学专业委员会青年委员',
    '中国营养学会青年委员',
    '韩国食品科学技术学会青年委员',
    'Biomedical Informatics 期刊编委',
  ],
  about: {
    title: '关于我',
    paragraph:
       '我的研究聚焦于智能医学影像与临床信息与人工智能药物化学交叉研究，以项目骨干开展了脑认知神经智能调控技术（国家重点研发计划-科技部，2025年），基于多模态无创实时动态监测肿瘤细胞技术（国家自然科学基金委，2024年）的研究工作。累计发表论文 32余篇， 总影响因子达210余分， 总他引640余次，授权国家实用新型专利1项；软件著作权3项。',
    identityTitle: '学术身份与社会任职',
  },
  education: {
    title: '教育背景',
    phdBadge: 'PhD',
    list: [
      {
        period: '2020.08 – 2024.08',
        school: '',
        degree: '博士',
        major: '生物科技融合',
        isPhD: true,
      },
      {
        period: '2018.03 – 2020.03',
        school: '',
        degree: '硕士',
        major: '食品工学',
        isPhD: false,
      },
      {
        period: '2013.08 – 2017.08',
        school: '',
        degree: '学士',
        major: '食品营养',
        isPhD: false,
      },
    ],
  },
  experience: {
    title: '工作经历',
    current: '进行中',
      list: [
      {
        type: '博士后研究',
        period: '2024.10 – 至今',
        title: '北京大学 · 临床医学高等研究院',
        subtitle: '副研究员',
        isCurrent: true,
      },
    ],
  },
  expertise: {
    title: '专业领域',
  },
  projects: {
    title: '研究成果',
    patent: '专利',
    viewDetails: '查看详情',
  },
  awards: {
    title: '学术荣誉与奖项',
    latest: '最新',
    list: [
      {
        year: '2025',
        title: '2025年国际食品科学与技术大会（ICFST 2025）最佳论文奖',
        level: '国际学术会议',
        isLatest: true,
      },
      {
        year: '2025',
        title: '全国优秀博士后（创新创业大赛银奖）',
        level: '国家级奖项',
        isLatest: true,
      },
      {
        year: '2024',
        title: '省级优秀归国人才',
        level: '省级荣誉',
        isLatest: false,
      },
    ],
  },
  gallery: {
    title: '生活瞬间',
    subtitle: '科研之余的点滴',
    photos: [
      {
        src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/2cc74c22442da1ace61ae10a9b2f4e.JPG',
        label: '2025 · 南京',
        desc: '晴空万里，阳光正好',
        aspect: 'aspect-square',
      },
      {
        src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/75e1931cf055093d1dcb97e696325d.JPG',
        label: '2024 · 成都',
        desc: '研究间隙的小憩，在茶馆里感受慢生活。',
        aspect: 'aspect-3-4',
      },
      {
        src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/740c97df8bf20a3dda18a47d7ad725.JPG',
        label: '2024 · 北京',
        desc: '秋日的胡同漫步，古老与现代的交汇中思考',
        aspect: 'aspect-4-5',
      },
      {
        src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/779f7eac95fb7e338f60cfa292ca0b.JPG',
        label: '2025 · 杭州',
        desc: '出发啦！去玩啦',
        aspect: 'aspect-3-4',
      },
    ],
  },
  contact: {
    title: '联系方式',
    name: '周俊宇',
    affiliation: '北京大学 · 临床医学高等研究院',
    emailLabel: '学术邮箱',
    email: 'benjaminjhou@bjmu.edu.cn',
    actionBtn: '发送电子邮件',
    copyright: '© 2026 Junyu Zhou. 保留所有权利。',
    googleScholar: 'Google Scholar',
    orcid: 'ORCID',
  },
}

export const en: LangContent = {
  nav: {
    about: 'About',
    education: 'Education',
    experience: 'Experience',
    expertise: 'Expertise',
    projects: 'Research',
    gallery: 'Life',
    contact: 'Contact',
  },
  hero: {
    name: 'Junyu Zhou',
    title:
      'Associate Researcher · Biotech & Clinical Medicine · Smart Drug Development · Intelligent Medical Systems',
    affiliation: 'Peking University · Institute of Advanced Clinical Medicine',
    intro: 'Bridging artificial intelligence and clinical medicine to advance healthcare through innovative research and translational science.',
    papersLabel: 'Publications',
    papersValue: '32+',
    citationsLabel: 'Citations',
    citationsValue: '640+',
    hIndexLabel: 'H-Index',
    hIndexValue: '12',
    achievementTitle: 'Key Academic Achievements',
    achievementText:
      'Silver Award winner of the National Postdoctoral Innovation and Entrepreneurship Competition, National Excellent Postdoc title, Provincial Outstanding Returned Talent, Youth Committee Member of the Biomedical Photonics Committee of the Chinese Optical Society.',
    publications:
      'Published as first author in top international journals including Expert Systems with Applications, Journal of Translational Internal Medicine, Journal of Chemical Information and Modeling, and Food & Function.',
  },
  identities: [
    'Member, Western Returned Scholars Association, Beijing',
    'National Excellent Postdoc (Silver Award, 3rd National Postdoc Innovation Competition)',
    'Provincial Outstanding Returned Talent',
    'Youth Committee Member, 4th Biomedical Photonics Committee, Chinese Optical Society',
    'Youth Committee Member, Chinese Nutrition Society',
    'Youth Committee Member, Korean Society of Food Science and Technology',
    'Editorial Board, Biomedical Informatics Journal',
  ],
  about: {
    title: 'About',
    paragraph:
       'Dr. Junyu Zhou is an Associate Researcher at Peking University\'s Institute for Advanced Clinical Medicine. His research focuses on the intersection of intelligent medical imaging, clinical informatics, and AI-driven pharmaceutical chemistry. He has served as a key investigator on brain cognitive neuromodulation technology (National Key R&D Program, Ministry of Science and Technology, 2025) and multimodal non-invasive real-time dynamic tumor cell monitoring (National Natural Science Foundation of China, 2024). He has published over 32 papers with a cumulative impact factor exceeding 210 and 640+ citations, and holds 1 national utility model patent and 3 software copyrights.',
    identityTitle: 'Academic Roles & Appointments',
  },
  education: {
    title: 'Education',
    phdBadge: 'PhD',
    list: [
      {
        period: 'Aug 2020 – Aug 2024',
        school: '',
        degree: 'Ph.D.',
        major: 'Biotech Convergence',
        isPhD: true,
      },
      {
        period: 'Mar 2018 – Mar 2020',
        school: '',
        degree: 'M.Sc.',
        major: 'Food Engineering',
        isPhD: false,
      },
      {
        period: 'Aug 2013 – Aug 2017',
        school: '',
        degree: 'B.Sc.',
        major: 'Food & Nutrition',
        isPhD: false,
      },
    ],
  },
  experience: {
    title: 'Experience',
    current: 'Current',
    list: [
      {
        type: 'Postdoctoral Research',
        period: 'Oct 2024 – Present',
        title: 'Peking University · Institute of Advanced Clinical Medicine',
        subtitle: 'Associate Researcher',
        isCurrent: true,
      },
    ],
  },
  expertise: {
    title: 'Expertise',
  },
  projects: {
    title: 'Research',
    patent: 'Patent',
    viewDetails: 'View Details',
  },
  awards: {
    title: 'Awards & Honors',
    latest: 'Latest',
    list: [
      {
        year: '2025',
        title: 'Best Paper Award, International Congress of Food Science and Technology (ICFST 2025)',
        level: 'Intl. Conf.',
        isLatest: true,
      },
      {
        year: '2025',
        title: 'National Excellent Postdoc (Silver Award, Innovation & Entrepreneurship Competition)',
        level: 'National Award',
        isLatest: true,
      },
      {
        year: '2024',
        title: 'Provincial Outstanding Returned Talent',
        level: 'Provincial Honor',
        isLatest: false,
      },
    ],
  },
  gallery: {
    title: 'Life Moments',
    subtitle: 'Glimpses outside the laboratory',
    photos: [
      {
        src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/2cc74c22442da1ace61ae10a9b2f4e.JPG',
        label: '2025 · Nanjing',
        desc: 'Clear sky, perfect sunshine.',
        aspect: 'aspect-square',
      },
      {
        src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/75e1931cf055093d1dcb97e696325d.JPG',
        label: '2024 · Chengdu',
        desc: 'A brief break from research, savoring the slow pace at a tea house.',
        aspect: 'aspect-3-4',
      },
      {
        src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/740c97df8bf20a3dda18a47d7ad725.JPG',
        label: '2024 · Beijing',
        desc: 'Autumn stroll in Beijing\'s old hutongs, reflecting at the intersection of history and modern life.',
        aspect: 'aspect-4-5',
      },
      {
        src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/779f7eac95fb7e338f60cfa292ca0b.JPG',
        label: '2025 · Hangzhou',
        desc: 'Off we go! Time to travel and explore.',
        aspect: 'aspect-3-4',
      },
    ],
  },
  contact: {
    title: 'Contact Info',
    name: 'Junyu Zhou',
    affiliation: 'Peking University · Institute of Advanced Clinical Medicine',
    emailLabel: 'Academic Email',
    email: 'benjaminjhou@bjmu.edu.cn',
    actionBtn: 'Send Email',
    copyright: '© 2026 Junyu Zhou. All Rights Reserved.',
    googleScholar: 'Google Scholar',
    orcid: 'ORCID',
  },
}

const patents_zh = [
  {
    name: 'AI连续心电监测智能贴片',
    field: '智能医疗硬件',
    desc: '一款基于人工智能算法的智能可穿戴贴片，用于实时连续心电图监测和早期心律失常检测。该系统支持临床与家庭护理场景下的无创心脏监护，具备自动异常报警功能。',
  },
  {
    name: '药物智能提取工艺流程软件',
    field: '药物信息学',
    desc: '一个由AI驱动的软件平台，通过智能控制工艺参数和预测产量结果来优化药物提取工作流程。它通过数据驱动的自动化与质量保障，简化传统制药制造流程。',
  },
  {
    name: '药物化学合成管理软件',
    field: '化学信息学',
    desc: '一款用于追踪、优化和记录药物开发中化学合成过程的综合数字管理系统。该软件将反应监测与智能调度相结合，以提高实验室效率与法规合规性。',
  },
  {
    name: '医疗数据分析系统',
    field: '医疗大数据',
    desc: '一个集成分析平台，旨在处理、可视化并从大规模临床和生物医学数据集中提取可操作的洞察。该系统通过多模态数据融合与预测建模能力，支持精准医疗应用。',
  },
]

const patents_en = [
  {
    name: 'AI Continuous ECG Monitoring Smart Patch',
    field: 'Smart Medical Hardware',
    desc: 'An intelligent wearable patch powered by AI algorithms for real-time, continuous electrocardiogram monitoring and early arrhythmia detection. The system enables non-invasive cardiac surveillance with automated anomaly alerting for clinical and home-care settings.',
  },
  {
    name: 'Intelligent Pharmaceutical Extraction Process Software',
    field: 'Pharmaceutical Informatics',
    desc: 'An AI-driven software platform that optimizes drug extraction workflows by intelligently controlling process parameters and predicting yield outcomes. It streamlines traditional pharmaceutical manufacturing through data-driven automation and quality assurance.',
  },
  {
    name: 'Pharmaceutical Chemical Synthesis Management Software',
    field: 'Cheminformatics',
    desc: 'A comprehensive digital management system for tracking, optimizing, and documenting chemical synthesis processes in drug development. The software integrates reaction monitoring with intelligent scheduling to enhance laboratory efficiency and regulatory compliance.',
  },
  {
    name: 'Medical Data Analytics System',
    field: 'Medical Big Data',
    desc: 'An integrated analytics platform designed to process, visualize, and derive actionable insights from large-scale clinical and biomedical datasets. The system supports precision medicine applications through multi-modal data fusion and predictive modeling capabilities.',
  },
]

export const patents = { zh: patents_zh, en: patents_en }

export const expertiseItems = {
  zh: [
    {
      number: '01',
      name: 'AI 驱动诊断',
      description: '开发深度学习模型用于医学影像和生理信号的自动分析，实现临床场景中的早期检测与精准诊断。',
    },
    {
      number: '02',
      name: '生物医学信号处理',
      description: '利用信号处理技术和机器学习对心电、脑电及多模态生物信号进行高级处理与解读，实现实时健康监测。',
    },
    {
      number: '03',
      name: '临床数据分析',
      description: '利用大规模临床数据集发现模式、预测结果，通过统计建模和AI支持循证决策。',
    },
    {
      number: '04',
      name: '转化研究',
      description: '连接实验室发现与临床应用，从医疗设备原型到临床验证研究，将AI解决方案带给患者护理。',
    },
    {
      number: '05',
      name: '可穿戴健康技术',
      description: '设计和验证AI驱动的可穿戴设备用于持续健康监测，包括智能心电贴片和多传感器集成平台。',
    },
  ],
  en: [
    {
      number: '01',
      name: 'AI-Driven Diagnostics',
      description: 'Developing deep learning models for automated analysis of medical imaging and physiological signals, enabling early detection and precision diagnosis in clinical settings.',
    },
    {
      number: '02',
      name: 'Biomedical Signal Processing',
      description: 'Advanced processing and interpretation of ECG, EEG, and multi-modal biosignals using signal processing techniques and machine learning for real-time health monitoring.',
    },
    {
      number: '03',
      name: 'Clinical Data Analytics',
      description: 'Leveraging large-scale clinical datasets to uncover patterns, predict outcomes, and support evidence-based decision-making through statistical modeling and AI.',
    },
    {
      number: '04',
      name: 'Translational Research',
      description: 'Bridging laboratory discoveries with clinical applications, from medical device prototyping to clinical validation studies that bring AI solutions to patient care.',
    },
    {
      number: '05',
      name: 'Wearable Health Technology',
      description: 'Designing and validating AI-powered wearable devices for continuous health monitoring, including smart ECG patches and multi-sensor integration platforms.',
    },
  ],
}
