/* ==========================================================================
   BILINGUAL DATA DICTIONARY (ZH / EN)
   ========================================================================== */
const siteData = {
    zh: {
        nav: {
            about: "关于我",
            education: "教育背景",
            experience: "工作经历",
            research: "研究成果",
            awards: "学术荣誉",
            gallery: "生活",
            contact: "联系方式"
        },
        about: {
            badge: "北京大学 · 临床医学高等研究院",
            name: "周俊宇",
            title: "助理研究员 · 生物科技与临床医学交叉 · 智能药物开发 · 智能医疗系统",
            mentorTitle: "导师背景",
            mentorText: "硕博导师为国际著名代谢学专家 <strong>Sunmin Park 教授</strong>（韩国科学院院士）",
            papers: "发表论文",
            citations: "总被引次数",
            hIndex: "H 指数",
            scientistNote: "🏆 AD Scientific Index 评选全球顶尖 2% 科学家",
            identityTitle: "学术身份与社会任职",
            profileTitle: "学术档案与学术主页",
            googleScholar: "Google Scholar",
            orcid: "ORCID"
        },
        identities: [
            "北京欧美同学会会员",
            "全国优秀博士后（全国第三届博士后创新创业大赛银奖）",
            "省级优秀归国人才",
            "中国光学学会第四届生物医学光子学专业委员会青年委员",
            "中国营养学会青年委员",
            "韩国食品科学技术学会青年委员",
            "Biomedical Informatics 期刊编委"
        ],
        education: {
            title: "教育背景",
            phdBadge: "PhD",
            list: [
                {
                    period: "2020.08 – 2024.08",
                    school: "建国大学校（Konkuk University）",
                    degree: "博士",
                    major: "生物科技融合",
                    isPhD: true
                },
                {
                    period: "2018.03 – 2020.03",
                    school: "建国大学校（Konkuk University）",
                    degree: "硕士",
                    major: "食品工学",
                    isPhD: false
                },
                {
                    period: "2013.08 – 2017.08",
                    school: "建国大学校（Konkuk University）",
                    degree: "学士",
                    major: "食品营养",
                    isPhD: false
                }
            ]
        },
        experience: {
            title: "工作经历",
            current: "进行中",
            list: [
                {
                    type: "博士后研究",
                    period: "2024.10 – 至今",
                    title: "北京大学 · 临床医学高等研究院",
                    subtitle: "博士后",
                    isCurrent: true
                },
                {
                    type: "科研与学术任职",
                    period: "2024.10 – 至今",
                    title: "北京大学 · 临床医学高等研究院",
                    subtitle: "助理研究员",
                    isCurrent: true
                }
            ]
        },
        research: {
            title: "研究成果",
            subtitle: "专利成果",
            patents: [
                {
                    name: "AI连续心电监测智能贴片",
                    field: "智能医疗硬件",
                    desc: "一款基于人工智能算法的智能可穿戴贴片，用于实时连续心电图监测和早期心律失常检测。该系统支持临床与家庭护理场景下的无创心脏监护，具备自动异常报警功能。"
                },
                {
                    name: "药物智能提取工艺流程软件",
                    field: "药物信息学",
                    desc: "一个由AI驱动的软件平台，通过智能控制工艺参数和预测产量结果来优化药物提取工作流程。它通过数据驱动的自动化与质量保障，简化传统制药制造流程。"
                },
                {
                    name: "药物化学合成管理软件",
                    field: "化学信息学",
                    desc: "一款用于追踪、优化和记录药物开发中化学合成过程的综合数字管理系统。该软件将反应监测与智能调度相结合，以提高实验室效率与法规合规性。"
                },
                {
                    name: "医疗数据分析系统",
                    field: "医疗大数据",
                    desc: "一个集成分析平台，旨在处理、可视化并从大规模临床和生物医学数据集中提取可操作的洞察。该系统通过多模态数据融合与预测建模能力，支持精准医疗应用。"
                }
            ]
        },
        awards: {
            title: "学术荣誉与奖项",
            latest: "最新",
            list: [
                {
                    year: "2025",
                    title: "2025年国际食品科学与技术大会（ICFST 2025）最佳论文奖",
                    level: "国际学术会议",
                    isLatest: true
                },
                {
                    year: "2025",
                    title: "全国优秀博士后（创新创业大赛银奖）",
                    level: "国家级奖项",
                    isLatest: true
                },
                {
                    year: "2024",
                    title: "省级优秀归国人才",
                    level: "省级荣誉",
                    isLatest: false
                }
            ]
        },
        gallery: {
            title: "生活瞬间",
            subtitle: "科研之余的点滴",
            photos: [
                {
                    src: "https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/2cc74c22442da1ace61ae10a9b2f4e.JPG",
                    label: "2025 · 南京",
                    desc: "晴空万里，阳光正好",
                    aspect: "aspect-square"
                },
                {
                    src: "https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/75e1931cf055093d1dcb97e696325d.JPG",
                    label: "2024 · 成都",
                    desc: "研究间隙的小憩，在茶馆里感受慢生活。",
                    aspect: "aspect-3-4"
                },
                {
                    src: "https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/740c97df8bf20a3dda18a47d7ad725.JPG",
                    label: "2024 · 北京",
                    desc: "秋日的胡同漫步，古老与现代的交汇中思考",
                    aspect: "aspect-4-5"
                },
                {
                    src: "https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/779f7eac95fb7e338f60cfa292ca0b.JPG",
                    label: "2025 · 杭州",
                    desc: "出发啦！去玩啦",
                    aspect: "aspect-3-4"
                }
            ]
        },
        contact: {
            title: "联系方式",
            name: "周俊宇",
            affiliation: "北京大学 · 临床医学高等研究院",
            emailLabel: "学术邮箱",
            actionBtn: "发送电子邮件",
            copyright: "© 2026 Junyu Zhou. 保留所有权利。"
        }
    },
    en: {
        nav: {
            about: "About Me",
            education: "Education",
            experience: "Experience",
            research: "Research",
            awards: "Awards",
            gallery: "Life",
            contact: "Contact"
        },
        about: {
            badge: "Peking University · Institute of Advanced Clinical Medicine",
            name: "Junyu Zhou",
            title: "Assistant Researcher · Biotech & Clinical Medicine · Smart Drug Development · Intelligent Medical Systems",
            mentorTitle: "Advisor Background",
            mentorText: "PhD & MSc Advisor: renowned metabolism expert <strong>Prof. Sunmin Park</strong> (Member, Korean Academy of Science and Technology)",
            papers: "Publications",
            citations: "Citations",
            hIndex: "H-Index",
            scientistNote: "🏆 Ranked in top 2% globally by AD Scientific Index 2023",
            identityTitle: "Academic Roles & Appointments",
            profileTitle: "Academic Profiles & Research Hubs",
            googleScholar: "Google Scholar",
            orcid: "ORCID"
        },
        identities: [
            "Member, Western Returned Scholars Association, Beijing",
            "National Excellent Postdoc (Silver Award, 3rd National Postdoc Innovation Competition)",
            "Provincial Outstanding Returned Talent",
            "Youth Committee Member, 4th Biomedical Photonics Committee, Chinese Optical Society",
            "Youth Committee Member, Chinese Nutrition Society",
            "Youth Committee Member, Korean Society of Food Science and Technology",
            "Editorial Board, Biomedical Informatics Journal"
        ],
        education: {
            title: "Education",
            phdBadge: "PhD",
            list: [
                {
                    period: "Aug 2020 – Aug 2024",
                    school: "Konkuk University",
                    degree: "Ph.D.",
                    major: "Biotech Convergence",
                    isPhD: true
                },
                {
                    period: "Mar 2018 – Mar 2020",
                    school: "Konkuk University",
                    degree: "M.Sc.",
                    major: "Food Engineering",
                    isPhD: false
                },
                {
                    period: "Aug 2013 – Aug 2017",
                    school: "Konkuk University",
                    degree: "B.Sc.",
                    major: "Food & Nutrition",
                    isPhD: false
                }
            ]
        },
        experience: {
            title: "Experience",
            current: "Current",
            list: [
                {
                    type: "Postdoctoral Research",
                    period: "Oct 2024 – Present",
                    title: "Peking University · Institute of Advanced Clinical Medicine",
                    subtitle: "Postdoctoral Fellow",
                    isCurrent: true
                },
                {
                    type: "Research & Academic Appointment",
                    period: "Oct 2024 – Present",
                    title: "Peking University · Institute of Advanced Clinical Medicine",
                    subtitle: "Assistant Researcher",
                    isCurrent: true
                }
            ]
        },
        research: {
            title: "Research",
            subtitle: "Patents",
            patents: [
                {
                    name: "AI Continuous ECG Monitoring Smart Patch",
                    field: "Smart Medical Hardware",
                    desc: "An intelligent wearable patch powered by AI algorithms for real-time, continuous electrocardiogram monitoring and early arrhythmia detection. The system enables non-invasive cardiac surveillance with automated anomaly alerting for clinical and home-care settings."
                },
                {
                    name: "Intelligent Pharmaceutical Extraction Process Software",
                    field: "Pharmaceutical Informatics",
                    desc: "An AI-driven software platform that optimizes drug extraction workflows by intelligently controlling process parameters and predicting yield outcomes. It streamlines traditional pharmaceutical manufacturing through data-driven automation and quality assurance."
                },
                {
                    name: "Pharmaceutical Chemical Synthesis Management Software",
                    field: "Cheminformatics",
                    desc: "A comprehensive digital management system for tracking, optimizing, and documenting chemical synthesis processes in drug development. The software integrates reaction monitoring with intelligent scheduling to enhance laboratory efficiency and regulatory compliance."
                },
                {
                    name: "Medical Data Analytics System",
                    field: "Medical Big Data",
                    desc: "An integrated analytics platform designed to process, visualize, and derive actionable insights from large-scale clinical and biomedical datasets. The system supports precision medicine applications through multi-modal data fusion and predictive modeling capabilities."
                }
            ]
        },
        awards: {
            title: "Awards & Honors",
            latest: "Latest",
            list: [
                {
                    year: "2025",
                    title: "Best Paper Award, International Congress of Food Science and Technology (ICFST 2025)",
                    level: "Intl. Conf.",
                    isLatest: true
                },
                {
                    year: "2025",
                    title: "National Excellent Postdoc (Silver Award, Innovation & Entrepreneurship Competition)",
                    level: "National Award",
                    isLatest: true
                },
                {
                    year: "2024",
                    title: "Provincial Outstanding Returned Talent",
                    level: "Provincial Honor",
                    isLatest: false
                }
            ]
        },
        gallery: {
            title: "Life Moments",
            subtitle: "Glimpses outside the laboratory",
            photos: [
                {
                    src: "https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/2cc74c22442da1ace61ae10a9b2f4e.JPG",
                    label: "2025 · Nanjing",
                    desc: "Clear sky, perfect sunshine.",
                    aspect: "aspect-square"
                },
                {
                    src: "https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/75e1931cf055093d1dcb97e696325d.JPG",
                    label: "2024 · Chengdu",
                    desc: "A brief break from research, savoring the slow pace at a tea house.",
                    aspect: "aspect-3-4"
                },
                {
                    src: "https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/740c97df8bf20a3dda18a47d7ad725.JPG",
                    label: "2024 · Beijing",
                    desc: "Autumn stroll in Beijing's old hutongs, reflecting at the intersection of history and modern life.",
                    aspect: "aspect-4-5"
                },
                {
                    src: "https://miaoda-conversation-file.cdn.bcebos.com/user-bnp7wmwuptkw/app-bofgszkndkht/20260516/779f7eac95fb7e338f60cfa292ca0b.JPG",
                    label: "2025 · Hangzhou",
                    desc: "Off we go! Time to travel and explore.",
                    aspect: "aspect-3-4"
                }
            ]
        },
        contact: {
            title: "Contact Info",
            name: "Junyu Zhou",
            affiliation: "Peking University · Institute of Advanced Clinical Medicine",
            emailLabel: "Academic Email",
            actionBtn: "Send Email Address",
            copyright: "© 2026 Junyu Zhou. All Rights Reserved."
        }
    }
};

/* ==========================================================================
   STATE MANAGEMENT
   ========================================================================== */
let currentLang = 'zh';

// Check browser preferred language
const savedLang = localStorage.getItem('site-lang');
if (savedLang === 'zh' || savedLang === 'en') {
    currentLang = savedLang;
} else {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('en')) {
        currentLang = 'en';
    }
}

/* ==========================================================================
   TRANSLATION RENDERER
   ========================================================================== */
function updateLanguage() {
    const data = siteData[currentLang];
    
    // Save selection
    localStorage.setItem('site-lang', currentLang);
    
    // Update button text
    document.getElementById('lang-text').textContent = currentLang === 'zh' ? 'EN' : '中';
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

    // 1. Text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const path = element.getAttribute('data-i18n');
        const keys = path.split('.');
        let val = data;
        
        for (let key of keys) {
            if (val) val = val[key];
        }
        
        if (val !== undefined) {
            // Check if element contains html tags (like strong)
            if (path.includes('mentorText')) {
                element.innerHTML = val;
            } else {
                element.textContent = val;
            }
        }
    });

    // 2. Dynamic Component: Academic Roles (Badges)
    const identitiesContainer = document.getElementById('academic-identities');
    if (identitiesContainer) {
        identitiesContainer.innerHTML = '';
        data.identities.forEach(role => {
            const badge = document.createElement('div');
            badge.className = 'identity-badge';
            badge.textContent = role;
            identitiesContainer.appendChild(badge);
        });
    }

    // 3. Dynamic Component: Education Timeline
    const eduContainer = document.getElementById('education-timeline');
    if (eduContainer) {
        eduContainer.innerHTML = '';
        data.education.list.forEach(edu => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            
            item.innerHTML = `
                <div class="timeline-node"></div>
                <div class="timeline-card glass-card">
                    <div class="timeline-time">${edu.period}</div>
                    <div class="timeline-header">
                        <h4 class="timeline-title">${edu.school}</h4>
                        ${edu.isPhD ? `<span class="tech-badge"><span class="logo-dot"></span>${data.education.phdBadge}</span>` : ''}
                    </div>
                    <div class="timeline-subtitle">${edu.degree} · ${edu.major}</div>
                </div>
            `;
            eduContainer.appendChild(item);
        });
    }

    // 4. Dynamic Component: Experience Timeline
    const expContainer = document.getElementById('experience-timeline');
    if (expContainer) {
        expContainer.innerHTML = '';
        data.experience.list.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            
            item.innerHTML = `
                <div class="timeline-node"></div>
                <div class="timeline-card glass-card">
                    <div class="timeline-time">${exp.period}</div>
                    <div class="timeline-header">
                        <h4 class="timeline-title">${exp.title}</h4>
                        ${exp.isCurrent ? `<span class="tech-badge"><span class="logo-dot"></span>${data.experience.current}</span>` : ''}
                    </div>
                    <div class="timeline-subtitle">${exp.type} · ${exp.subtitle}</div>
                </div>
            `;
            expContainer.appendChild(item);
        });
    }

    // 5. Dynamic Component: Patents Grid
    const patentsContainer = document.getElementById('patents-grid');
    if (patentsContainer) {
        patentsContainer.innerHTML = '';
        data.research.patents.forEach(patent => {
            const card = document.createElement('div');
            card.className = 'patent-card glass-card';
            
            card.innerHTML = `
                <div class="patent-header">
                    <span class="patent-field">${patent.field}</span>
                    <span class="tech-badge"><span class="logo-dot"></span>Patent</span>
                </div>
                <h3 class="patent-title">${patent.name}</h3>
                <p class="patent-desc">${patent.desc}</p>
            `;
            patentsContainer.appendChild(card);
        });
    }

    // 6. Dynamic Component: Awards List
    const awardsContainer = document.getElementById('awards-list');
    if (awardsContainer) {
        awardsContainer.innerHTML = '';
        data.awards.list.forEach(award => {
            const item = document.createElement('div');
            item.className = 'award-item glass-card';
            
            item.innerHTML = `
                <div class="award-main">
                    <div class="award-year">${award.year}</div>
                    <div class="award-details">
                        <h3 class="award-title">${award.title}</h3>
                        <span class="award-level">${award.level}</span>
                    </div>
                </div>
                ${award.isLatest ? `<span class="tech-badge" style="border-color: rgba(245, 158, 11, 0.3); color: var(--accent-gold);"><span class="logo-dot" style="background: var(--accent-gold); box-shadow: 0 0 8px var(--accent-gold);"></span>${data.awards.latest}</span>` : ''}
            `;
            awardsContainer.appendChild(item);
        });
    }

    // 7. Dynamic Component: Gallery Grid
    const galleryContainer = document.getElementById('gallery-grid');
    if (galleryContainer) {
        galleryContainer.innerHTML = '';
        data.gallery.photos.forEach((photo, idx) => {
            const item = document.createElement('div');
            item.className = `gallery-item ${photo.aspect}`;
            item.setAttribute('data-index', idx);
            
            item.innerHTML = `
                <img class="gallery-img" src="${photo.src}" alt="${photo.label}" loading="lazy" />
                <div class="gallery-overlay">
                    <span class="gallery-label">${photo.label}</span>
                    <span class="gallery-desc">${photo.desc}</span>
                </div>
            `;
            
            // Lightbox trigger listener
            item.addEventListener('click', () => openLightbox(idx));
            galleryContainer.appendChild(item);
        });
    }

    // Re-initialize dynamic mouse listeners for new dynamic cards
    initSpotlightEffect();
}

/* ==========================================================================
   SPOTLIGHT GLOW EFFECT (CARD CURSOR REFLECTION)
   ========================================================================== */
function initSpotlightEffect() {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

/* ==========================================================================
   LIGHTBOX MODAL
   ========================================================================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxClose = document.getElementById('lightbox-close');

let activePhotoIndex = 0;

function openLightbox(index) {
    if (!lightbox) return;
    activePhotoIndex = index;
    const photo = siteData[currentLang].gallery.photos[index];
    
    lightboxImg.src = photo.src;
    lightboxTitle.textContent = photo.label;
    lightboxDesc.textContent = photo.desc;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scroll
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Lightbox listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}
if (lightbox) {
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard shortcuts for Lightbox & navigation
window.addEventListener('keydown', e => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const photos = siteData[currentLang].gallery.photos;
        let newIndex = activePhotoIndex;
        
        if (e.key === 'ArrowRight') {
            newIndex = (activePhotoIndex + 1) % photos.length;
        } else {
            newIndex = (activePhotoIndex - 1 + photos.length) % photos.length;
        }
        openLightbox(newIndex);
    }
});

/* ==========================================================================
   NAVIGATION & ACTIVE LINKS ON SCROLL
   ========================================================================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function checkScrollActiveLink() {
    let scrollPos = window.scrollY + 120; // offset for nav height
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', checkScrollActiveLink);

/* ==========================================================================
   INIT / EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle Click
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            updateLanguage();
        });
    }

    // Set initial translations and render dynamic lists
    updateLanguage();
    
    // Quick double check link focus states
    checkScrollActiveLink();
});
