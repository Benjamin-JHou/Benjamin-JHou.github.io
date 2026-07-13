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
        major: '生物科技融合',
        isPhD: false,
      },
      {
        period: '2013.08 – 2017.08',
        school: '',
        degree: '学士',
        major: '食品科技',
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
        major: 'Biotech Convergence',
        isPhD: false,
      },
      {
        period: 'Aug 2013 – Aug 2017',
        school: '',
        degree: 'B.Sc.',
        major: 'Food Science & Technology',
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

export const fr: LangContent = {
  nav: {
    about: 'À propos',
    education: 'Formation',
    experience: 'Expérience',
    expertise: 'Expertise',
    projects: 'Recherche',
    gallery: 'Vie',
    contact: 'Contact',
  },
  hero: {
    name: 'Junyu Zhou',
    title: 'Chercheur associé · Biotech & Médecine clinique · Développement intelligent de médicaments · Systèmes médicaux intelligents',
    affiliation: 'Université de Pékin · Institut de médecine clinique avancée',
    intro: 'Relier l\'intelligence artificielle et la médecine clinique pour faire progresser les soins de santé grâce à la recherche innovante et à la science translationnelle.',
    papersLabel: 'Publications',
    papersValue: '32+',
    citationsLabel: 'Citations',
    citationsValue: '640+',
    hIndexLabel: 'Indice H',
    hIndexValue: '12',
    achievementTitle: 'Réalisations académiques clés',
    achievementText: 'Médaille d\'argent du Concours national d\'innovation postdoctorale, titre de Postdoctorant d\'excellence national, Talent de retour exceptionnel provincial, Membre du comité jeunesse de photonique biomédicale de la Société optique chinoise.',
    publications: 'Premier auteur dans Expert Systems with Applications, Journal of Translational Internal Medicine, Journal of Chemical Information and Modeling, Food & Function et d\'autres revues internationales de premier plan.',
  },
  identities: [
    'Membre, Association des chercheurs de retour de l\'Ouest, Pékin',
    'Postdoctorant d\'excellence national (Médaille d\'argent, 3e Concours national d\'innovation postdoctorale)',
    'Talent de retour exceptionnel provincial',
    'Membre du comité jeunesse, 4e Comité de photonique biomédicale, Société optique chinoise',
    'Membre du comité jeunesse, Société chinoise de nutrition',
    'Membre du comité jeunesse, Société coréenne des sciences et technologies alimentaires',
    'Comité éditorial, Biomedical Informatics Journal',
  ],
  about: {
    title: 'À propos',
    paragraph: 'Le Dr Junyu Zhou est chercheur associé à l\'Institut de médecine clinique avancée de l\'Université de Pékin. Ses recherches se concentrent sur l\'intersection de l\'imagerie médicale intelligente, de l\'informatique clinique et de la chimie pharmaceutique pilotée par l\'IA. Il a été investigateur clé sur la technologie de neuromodulation cognitive cérébrale (Programme national clé de R&D, 2025) et la surveillance tumorale multimodale non invasive en temps réel (NSFC, 2024). Il a publié plus de 32 articles avec un facteur d\'impact cumulé supérieur à 210 et 640+ citations, et détient 1 brevet de modèle d\'utilité national et 3 droits d\'auteur logiciels.',
    identityTitle: 'Rôles et nominations académiques',
  },
  education: {
    title: 'Formation',
    phdBadge: 'PhD',
    list: [
      { period: 'Août 2020 – Août 2024', school: '', degree: 'Doctorat', major: 'Convergence biotechnologique', isPhD: true },
      { period: 'Mars 2018 – Mars 2020', school: '', degree: 'Master', major: 'Génie alimentaire', isPhD: false },
      { period: 'Août 2013 – Août 2017', school: '', degree: 'Licence', major: 'Alimentation et nutrition', isPhD: false },
    ],
  },
  experience: {
    title: 'Expérience',
    current: 'Actuel',
    list: [
      { type: 'Recherche postdoctorale', period: 'Oct 2024 – Présent', title: 'Université de Pékin · Institut de médecine clinique avancée', subtitle: 'Chercheur associé', isCurrent: true },
    ],
  },
  expertise: { title: 'Expertise' },
  projects: { title: 'Recherche', patent: 'Brevet', viewDetails: 'Voir détails' },
  awards: {
    title: 'Prix et distinctions',
    latest: 'Récent',
    list: [
      { year: '2025', title: 'Prix du meilleur article, ICFST 2025', level: 'Conf. Intl.', isLatest: true },
      { year: '2025', title: 'Postdoctorant d\'excellence national (Médaille d\'argent)', level: 'Prix national', isLatest: true },
      { year: '2024', title: 'Talent de retour exceptionnel provincial', level: 'Distinction provinciale', isLatest: false },
    ],
  },
  gallery: {
    title: 'Moments de vie',
    subtitle: 'Aperçus hors du laboratoire',
    photos: [
      { src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/2cc74c22442da1ace61ae10a9b2f4e.JPG', label: '2025 · Nanjing', desc: 'Ciel clair, soleil parfait.', aspect: 'aspect-square' },
      { src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/75e1931cf055093d1dcb97e696325d.JPG', label: '2024 · Chengdu', desc: 'Une brève pause, savourer le rythme lent dans une maison de thé.', aspect: 'aspect-3-4' },
      { src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/740c97df8bf20a3dda18a47d7ad725.JPG', label: '2024 · Pékin', desc: 'Promenade automnale dans les hutongs de Pékin.', aspect: 'aspect-4-5' },
      { src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/779f7eac95fb7e338f60cfa292ca0b.JPG', label: '2025 · Hangzhou', desc: 'En route ! Il est temps de voyager.', aspect: 'aspect-3-4' },
    ],
  },
  contact: {
    title: 'Contact',
    name: 'Junyu Zhou',
    affiliation: 'Université de Pékin · Institut de médecine clinique avancée',
    emailLabel: 'Email académique',
    email: 'benjaminjhou@bjmu.edu.cn',
    actionBtn: 'Envoyer un email',
    copyright: '© 2026 Junyu Zhou. Tous droits réservés.',
    googleScholar: 'Google Scholar',
    orcid: 'ORCID',
  },
}

export const ko: LangContent = {
  nav: {
    about: '소개',
    education: '학력',
    experience: '경력',
    expertise: '전문 분야',
    projects: '연구',
    gallery: '일상',
    contact: '연락처',
  },
  hero: {
    name: 'Junyu Zhou',
    title: '부연구원 · 생명공학 및 임상의학 · 스마트 약물 개발 · 지능형 의료 시스템',
    affiliation: '베이징대학교 · 임상의학고등연구원',
    intro: '인공지능과 임상의학의 융합을 통해 혁신적인 연구와 중개 과학으로 의료 발전에 기여합니다.',
    papersLabel: '논문',
    papersValue: '32+',
    citationsLabel: '인용',
    citationsValue: '640+',
    hIndexLabel: 'H-Index',
    hIndexValue: '12',
    achievementTitle: '주요 학술 성과',
    achievementText: '전국 박사후 혁신창업대회 은상 수상, 국가 우수 박사후 칭호, 성급 우수 귀국 인재, 중국광학학회 생물의학광자학위원회 청년위원.',
    publications: 'Expert Systems with Applications, Journal of Translational Internal Medicine, Journal of Chemical Information and Modeling, Food & Function 등 국제 최상위 저널에 제1저자로 논문 게재.',
  },
  identities: [
    '베이징 구미동창회 회원',
    '국가 우수 박사후 (제3회 전국 박사후 혁신창업대회 은상)',
    '성급 우수 귀국 인재',
    '중국광학학회 제4회 생물의학광자학위원회 청년위원',
    '중국영양학회 청년위원',
    '한국식품과학기술학회 청년위원',
    'Biomedical Informatics 저널 편집위원',
  ],
  about: {
    title: '소개',
    paragraph: '주준우 박사는 베이징대학교 임상의학고등연구원의 부연구원입니다. 그의 연구는 지능형 의료 영상, 임상 정보학 및 AI 기반 제약 화학의 융합에 중점을 두고 있습니다. 뇌 인지 신경 조절 기술(국가 중점 R&D 프로그램, 2025)과 다중 모드 비침습적 실시간 종양 세포 모니터링(NSFC, 2024)의 핵심 연구원으로 활동했습니다. 32편 이상의 논문을 발표했으며, 총 영향력 지수 210 이상, 640회 이상 인용되었고, 국가 실용신안 특허 1건과 소프트웨어 저작권 3건을 보유하고 있습니다.',
    identityTitle: '학술 직책',
  },
  education: {
    title: '학력',
    phdBadge: 'PhD',
    list: [
      { period: '2020.08 – 2024.08', school: '', degree: '박사', major: '생명공학 융합', isPhD: true },
      { period: '2018.03 – 2020.03', school: '', degree: '석사', major: '식품공학', isPhD: false },
      { period: '2013.08 – 2017.08', school: '', degree: '학사', major: '식품영양', isPhD: false },
    ],
  },
  experience: {
    title: '경력',
    current: '현재',
    list: [
      { type: '박사후 연구', period: '2024.10 – 현재', title: '베이징대학교 · 임상의학고등연구원', subtitle: '부연구원', isCurrent: true },
    ],
  },
  expertise: { title: '전문 분야' },
  projects: { title: '연구', patent: '특허', viewDetails: '자세히 보기' },
  awards: {
    title: '수상 및 영예',
    latest: '최신',
    list: [
      { year: '2025', title: 'ICFST 2025 최우수 논문상', level: '국제 학회', isLatest: true },
      { year: '2025', title: '국가 우수 박사후 (혁신창업대회 은상)', level: '국가상', isLatest: true },
      { year: '2024', title: '성급 우수 귀국 인재', level: '성급 영예', isLatest: false },
    ],
  },
  gallery: {
    title: '일상의 순간',
    subtitle: '연구실 밖의 모습',
    photos: [
      { src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/2cc74c22442da1ace61ae10a9b2f4e.JPG', label: '2025 · 난징', desc: '맑은 하늘, 완벽한 햇살.', aspect: 'aspect-square' },
      { src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/75e1931cf055093d1dcb97e696325d.JPG', label: '2024 · 청두', desc: '연구 중 잠시 휴식, 찻집에서 느긋한 시간을 즐기며.', aspect: 'aspect-3-4' },
      { src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/740c97df8bf20a3dda18a47d7ad725.JPG', label: '2024 · 베이징', desc: '베이징 후퉁의 가을 산책.', aspect: 'aspect-4-5' },
      { src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/779f7eac95fb7e338f60cfa292ca0b.JPG', label: '2025 · 항저우', desc: '출발! 여행과 탐험의 시간.', aspect: 'aspect-3-4' },
    ],
  },
  contact: {
    title: '연락처',
    name: 'Junyu Zhou',
    affiliation: '베이징대학교 · 임상의학고등연구원',
    emailLabel: '학술 이메일',
    email: 'benjaminjhou@bjmu.edu.cn',
    actionBtn: '이메일 보내기',
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

const patents_fr = [
  {
    name: 'Patch intelligent de surveillance ECG continue par IA',
    field: 'Matériel médical intelligent',
    desc: 'Un patch portable intelligent alimenté par des algorithmes d\'IA pour la surveillance électrocardiographique continue et en temps réel et la détection précoce des arythmies. Le système permet une surveillance cardiaque non invasive avec alerte automatique d\'anomalies pour les milieux cliniques et les soins à domicile.',
  },
  {
    name: 'Logiciel de procédé d\'extraction pharmaceutique intelligente',
    field: 'Informatique pharmaceutique',
    desc: 'Une plateforme logicielle pilotée par l\'IA qui optimise les flux de travail d\'extraction de médicaments en contrôlant intelligemment les paramètres de procédé et en prédisant les rendements. Elle rationalise la fabrication pharmaceutique traditionnelle grâce à l\'automatisation pilotée par les données et à l\'assurance qualité.',
  },
  {
    name: 'Logiciel de gestion de synthèse chimique pharmaceutique',
    field: 'Chimio-informatique',
    desc: 'Un système de gestion numérique complet pour suivre, optimiser et documenter les processus de synthèse chimique dans le développement de médicaments. Le logiciel intègre le suivi des réactions à une planification intelligente pour améliorer l\'efficacité du laboratoire et la conformité réglementaire.',
  },
  {
    name: 'Système d\'analyse de données médicales',
    field: 'Grands volumes de données médicales',
    desc: 'Une plateforme d\'analyse intégrée conçue pour traiter, visualiser et tirer des informations exploitables de grands ensembles de données cliniques et biomédicales. Le système prend en charge les applications de médecine de précision grâce à la fusion multimodale de données et à la modélisation prédictive.',
  },
]

const patents_ko = [
  {
    name: 'AI 연속 심전도 모니터링 스마트 패치',
    field: '스마트 의료 하드웨어',
    desc: 'AI 알고리즘으로 구동되는 지능형 웨어러블 패치로, 실시간 연속 심전도 모니터링과 조기 부정맥 감지를 제공합니다. 이 시스템은 임상 및 가정 간호 환경에서 자동 이상 알림과 함께 비침습적 심장 감시를 지원합니다.',
  },
  {
    name: '지능형 의약 추출 공정 소프트웨어',
    field: '제약 정보학',
    desc: '공정 매개변수를 지능적으로 제어하고 수율을 예측하여 의약 추출 작업 흐름을 최적화하는 AI 기반 소프트웨어 플랫폼입니다. 데이터 기반 자동화와 품질 보증을 통해 기존 제약 제조 공정을 간소화합니다.',
  },
  {
    name: '제약 화학 합성 관리 소프트웨어',
    field: '화학정보학',
    desc: '신약 개발 과정의 화학 합성 공정을 추적, 최적화 및 기록하는 포괄적인 디지털 관리 시스템입니다. 이 소프트웨어는 반응 모니터링과 지능형 스케줄링을 통합하여 실험실 효율성과 규정 준수를 향상시킵니다.',
  },
  {
    name: '의료 데이터 분석 시스템',
    field: '의료 빅데이터',
    desc: '대규모 임상 및 생의학 데이터셋을 처리, 시각화하고 실행 가능한 인사이트를 도출하도록 설계된 통합 분석 플랫폼입니다. 이 시스템은 다중 모달 데이터 융합과 예측 모델링을 통해 정밀 의료 애플리케이션을 지원합니다.',
  },
]

export const patents = { zh: patents_zh, en: patents_en, fr: patents_fr, ko: patents_ko }

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
  fr: [
    {
      number: '01',
      name: 'Diagnostic par IA',
      description: 'Développement de modèles d\'apprentissage profond pour l\'analyse automatisée de l\'imagerie médicale et des signaux physiologiques, permettant une détection précoce et un diagnostic de précision.',
    },
    {
      number: '02',
      name: 'Traitement du signal biomédical',
      description: 'Traitement et interprétation avancés des signaux ECG, EEG et biosignaux multimodaux à l\'aide de techniques de traitement du signal et d\'apprentissage automatique.',
    },
    {
      number: '03',
      name: 'Analyse de données cliniques',
      description: 'Exploitation de grands ensembles de données cliniques pour découvrir des modèles, prédire des résultats et soutenir la prise de décision fondée sur des preuves.',
    },
    {
      number: '04',
      name: 'Recherche translationnelle',
      description: 'Relier les découvertes de laboratoire aux applications cliniques, du prototypage de dispositifs médicaux aux études de validation clinique.',
    },
    {
      number: '05',
      name: 'Technologie de santé portable',
      description: 'Conception et validation de dispositifs portables alimentés par l\'IA pour la surveillance continue de la santé, y compris les patchs ECG intelligents.',
    },
  ],
  ko: [
    {
      number: '01',
      name: 'AI 기반 진단',
      description: '의료 영상 및 생리 신호의 자동 분석을 위한 딥러닝 모델 개발로 임상 환경에서 조기 발견 및 정밀 진단을 가능하게 합니다.',
    },
    {
      number: '02',
      name: '생체의학 신호 처리',
      description: '신호 처리 기술과 머신러닝을 활용한 심전도, 뇌파 및 다중 모드 생체 신호의 고급 처리 및 해석으로 실시간 건강 모니터링을 구현합니다.',
    },
    {
      number: '03',
      name: '임상 데이터 분석',
      description: '대규모 임상 데이터셋을 활용하여 패턴을 발견하고 결과를 예측하며 통계 모델링과 AI를 통한 근거 기반 의사 결정을 지원합니다.',
    },
    {
      number: '04',
      name: '중개 연구',
      description: '실험실 발견을 임상 응용으로 연결하여 의료 기기 프로토타입부터 임상 검증 연구까지 AI 솔루션을 환자 치료에 제공합니다.',
    },
    {
      number: '05',
      name: '웨어러블 헬스 기술',
      description: '스마트 심전도 패치 및 다중 센서 통합 플랫폼을 포함한 지속적인 건강 모니터링을 위한 AI 기반 웨어러블 기기 설계 및 검증.',
    },
  ],
}
