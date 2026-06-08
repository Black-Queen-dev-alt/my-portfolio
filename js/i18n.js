/* ================================================
   i18n.js — Multilingual Translation System
   Langues: FR, EN, ES, AR, ZH, PT
   ================================================ */

// ── Language definitions ──────────────────────────
const LANGUAGES = [
  { code: 'fr', name: 'Français',   flag: '🇫🇷', dir: 'ltr' },
  { code: 'en', name: 'English',    flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', name: 'Español',    flag: '🇪🇸', dir: 'ltr' },
  { code: 'ar', name: 'العربية',    flag: '🇸🇦', dir: 'rtl' },
  { code: 'zh', name: '中文',        flag: '🇨🇳', dir: 'ltr' },
  { code: 'pt', name: 'Português',  flag: '🇧🇷', dir: 'ltr' },
];

// ── Translation dictionary ─────────────────────────
const TRANSLATIONS = {

  // ── NAVBAR ──────────────────────────────────────
  'nav.accueil':    { fr:'Accueil',     en:'Home',      es:'Inicio',    ar:'الرئيسية',   zh:'首页',    pt:'Início'    },
  'nav.apropos':    { fr:'À Propos',    en:'About',     es:'Sobre mí',  ar:'عن',         zh:'关于',    pt:'Sobre'     },
  'nav.portfolio':  { fr:'Projets',     en:'Projects',  es:'Proyectos', ar:'أعمالي',     zh:'项目',    pt:'Projetos'  },
  'nav.services':   { fr:'Services',    en:'Services',  es:'Servicios', ar:'الخدمات',   zh:'服务',    pt:'Serviços'  },
  'nav.contact':    { fr:'Me Contacter',en:'Contact',   es:'Contáctame',ar:'تواصل معي',  zh:'联系我',  pt:'Contato'   },

  // ── HERO (index.html) ────────────────────────────
  'hero.greeting':  { fr:'Salut !',     en:'Hi there!', es:'¡Hola!',    ar:'مرحباً!',    zh:'你好！',  pt:'Olá!'      },
  'hero.intro':     { fr:'Je suis',     en:"I'm",       es:'Soy',       ar:'أنا',        zh:'我是',    pt:'Sou'       },
  'hero.subtitle':  {
    fr:'Développeuse Full Stack passionnée, je conçois des interfaces intuitives et des API robustes au service d\'applications web et mobiles innovantes.',
    en:'Passionate Full Stack Developer, I design intuitive interfaces and robust APIs for innovative web and mobile applications.',
    es:'Desarrolladora Full Stack apasionada, diseño interfaces intuitivas y APIs robustas para aplicaciones web y móviles innovadoras.',
    ar:'مطورة Full Stack شغوفة، أصمم واجهات سهلة الاستخدام وواجهات برمجية قوية لتطبيقات الويب والموبايل المبتكرة.',
    zh:'热情的全栈开发者，我为创新的网页和移动应用设计直观的界面和强大的API。',
    pt:'Desenvolvedora Full Stack apaixonada, projeto interfaces intuitivas e APIs robustas para aplicações web e mobile inovadoras.',
  },
  'hero.highlight.projects': {
    fr:'✅ 10+ projets réalisés',    en:'✅ 10+ projects completed', es:'✅ 10+ proyectos realizados',
    ar:'✅ +10 مشاريع منجزة',         zh:'✅ 10+ 个已完成项目',        pt:'✅ 10+ projetos realizados',
  },
  'hero.highlight.experience': {
    fr:'✅ 3+ ans d\'expérience',     en:'✅ 3+ years of experience', es:'✅ 3+ años de experiencia',
    ar:'✅ +3 سنوات خبرة',             zh:'✅ 3+ 年经验',               pt:'✅ 3+ anos de experiência',
  },
  'hero.highlight.satisfaction': {
    fr:'✅ 100% de satisfaction client', en:'✅ 100% client satisfaction', es:'✅ 100% satisfacción del cliente',
    ar:'✅ رضا العملاء 100%',           zh:'✅ 100% 客户满意度',          pt:'✅ 100% satisfação do cliente',
  },
  'hero.btn.projects': { fr:'voir mes projets', en:'view my projects', es:'ver mis proyectos', ar:'عرض مشاريعي', zh:'查看项目', pt:'ver projetos' },
  'hero.btn.cv':       { fr:'Télécharger mon CV', en:'Download my CV', es:'Descargar mi CV', ar:'تحميل سيرتي الذاتية', zh:'下载简历', pt:'Baixar meu CV' },

  // ── EXPERTISE (index.html) ───────────────────────
  'expertise.tag':   { fr:'Mes domaines', en:'My fields', es:'Mis áreas', ar:'مجالاتي', zh:'我的领域', pt:'Minhas áreas' },
  'expertise.title': {
    fr:'Expertise & Spécialités', en:'Expertise & Specialties', es:'Experiencia & Especialidades',
    ar:'خبراتي وتخصصاتي', zh:'专业领域', pt:'Expertise & Especialidades',
  },
  'expertise.subtitle': {
    fr:'Une maîtrise complète de la chaîne de développement, du design à la base de données.',
    en:'Complete mastery of the development chain, from design to database.',
    es:'Dominio completo de la cadena de desarrollo, desde el diseño hasta la base de datos.',
    ar:'إتقان كامل لسلسلة التطوير من التصميم إلى قاعدة البيانات.',
    zh:'从设计到数据库的完整开发链掌握。',
    pt:'Domínio completo da cadeia de desenvolvimento, do design ao banco de dados.',
  },
  'expertise.web.title':    { fr:'Développement Web',    en:'Web Development',    es:'Desarrollo Web',    ar:'تطوير الويب',      zh:'网页开发',     pt:'Desenvolvimento Web'    },
  'expertise.web.desc':     {
    fr:'Sites web et applications SPA modernes avec les meilleures technologies frontend et backend.',
    en:'Modern websites and SPA applications with the best frontend and backend technologies.',
    es:'Sitios web modernos y aplicaciones SPA con las mejores tecnologías frontend y backend.',
    ar:'مواقع ويب وتطبيقات SPA حديثة بأفضل تقنيات الواجهة الأمامية والخلفية.',
    zh:'采用最佳前后端技术的现代网站和SPA应用程序。',
    pt:'Sites modernos e aplicações SPA com as melhores tecnologias frontend e backend.',
  },
  'expertise.mobile.title': { fr:'Développement Mobile', en:'Mobile Development', es:'Desarrollo Móvil',   ar:'تطوير التطبيقات', zh:'移动开发',     pt:'Desenvolvimento Mobile' },
  'expertise.mobile.desc':  {
    fr:'Applications mobiles cross-platform performantes et natives pour iOS et Android.',
    en:'High-performance cross-platform and native mobile apps for iOS and Android.',
    es:'Aplicaciones móviles de alto rendimiento multiplataforma y nativas para iOS y Android.',
    ar:'تطبيقات موبايل متعددة المنصات وأصيلة عالية الأداء لـ iOS وAndroid.',
    zh:'面向iOS和Android的高性能跨平台和原生移动应用。',
    pt:'Aplicações móveis de alto desempenho multiplataforma e nativas para iOS e Android.',
  },
  'expertise.db.title':     { fr:'Base de Données',      en:'Databases',          es:'Bases de datos',    ar:'قواعد البيانات',  zh:'数据库',       pt:'Banco de Dados'        },
  'expertise.db.desc':      {
    fr:'Conception, optimisation et administration de bases de données relationnelles et NoSQL.',
    en:'Design, optimization and administration of relational and NoSQL databases.',
    es:'Diseño, optimización y administración de bases de datos relacionales y NoSQL.',
    ar:'تصميم وتحسين وإدارة قواعد البيانات العلائقية وغير العلائقية.',
    zh:'关系型和NoSQL数据库的设计、优化和管理。',
    pt:'Concepção, otimização e administração de bancos de dados relacionais e NoSQL.',
  },

  // ── TECH SECTION (index.html) ────────────────────
  'tech.tag':   { fr:'Stack Technique', en:'Tech Stack',    es:'Stack Técnico',  ar:'التقنيات', zh:'技术栈', pt:'Stack Técnico' },
  'tech.title': { fr:'Technologies maîtrisées', en:'Mastered Technologies', es:'Tecnologías dominadas', ar:'التقنيات المتقنة', zh:'掌握的技术', pt:'Tecnologias dominadas' },

  // ── RECENT PROJECTS (index.html) ────────────────
  'projects.tag':   { fr:'Portfolio', en:'Portfolio', es:'Portafolio', ar:'أعمالي', zh:'作品集', pt:'Portfólio' },
  'projects.title': { fr:'Projets récents', en:'Recent Projects', es:'Proyectos recientes', ar:'المشاريع الأخيرة', zh:'近期项目', pt:'Projetos recentes' },
  'projects.viewall': { fr:'Voir tous les projets →', en:'View all projects →', es:'Ver todos los proyectos →', ar:'عرض كل المشاريع ←', zh:'查看所有项目 →', pt:'Ver todos os projetos →' },

  'project1.title': { fr:'E-Commerce Full Stack', en:'Full Stack E-Commerce', es:'E-Commerce Full Stack', ar:'متجر إلكتروني متكامل', zh:'全栈电商平台', pt:'E-Commerce Full Stack' },
  'project1.desc':  {
    fr:'Plateforme e-commerce complète avec gestion des stocks, paiements et tableau de bord admin.',
    en:'Complete e-commerce platform with inventory management, payments and admin dashboard.',
    es:'Plataforma de e-commerce completa con gestión de inventario, pagos y panel de administración.',
    ar:'منصة تجارة إلكترونية كاملة مع إدارة المخزون والمدفوعات ولوحة تحكم المسؤول.',
    zh:'完整的电商平台，包含库存管理、支付和管理员仪表盘。',
    pt:'Plataforma de e-commerce completa com gestão de estoque, pagamentos e painel admin.',
  },
  'project2.title': { fr:'App de Gestion Scolaire', en:'School Management App', es:'App de Gestión Escolar', ar:'تطبيق إدارة المدرسة', zh:'学校管理应用', pt:'App de Gestão Escolar' },
  'project2.desc':  {
    fr:'Application mobile multiplateforme pour la gestion des élèves, notes et bulletins scolaires.',
    en:'Cross-platform mobile app for managing students, grades and school report cards.',
    es:'App móvil multiplataforma para gestión de alumnos, calificaciones y boletines escolares.',
    ar:'تطبيق موبايل متعدد المنصات لإدارة الطلاب والدرجات وبطاقات التقارير.',
    zh:'用于管理学生、成绩和成绩单的跨平台移动应用。',
    pt:'App móvel multiplataforma para gestão de alunos, notas e boletins escolares.',
  },
  'project3.title': { fr:'Système de Gestion RH', en:'HR Management System', es:'Sistema de Gestión de RRHH', ar:'نظام إدارة الموارد البشرية', zh:'人力资源管理系统', pt:'Sistema de Gestão de RH' },
  'project3.desc':  {
    fr:'Système complet de gestion des ressources humaines avec base de données optimisée.',
    en:'Complete human resources management system with optimized database.',
    es:'Sistema completo de gestión de recursos humanos con base de datos optimizada.',
    ar:'نظام متكامل لإدارة الموارد البشرية مع قاعدة بيانات محسّنة.',
    zh:'具有优化数据库的完整人力资源管理系统。',
    pt:'Sistema completo de gestão de recursos humanos com banco de dados otimizado.',
  },
  'project.details': { fr:'Détails', en:'Details', es:'Detalles', ar:'التفاصيل', zh:'详情', pt:'Detalhes' },
  'project4.title': { fr:'Dashboard Analytics', en:'Analytics Dashboard', es:'Panel de Analítica', ar:'لوحة تحكم تحليلية', zh:'分析仪表板', pt:'Dashboard Analytics' },
  'project4.desc':  {
    fr:'Tableau de bord analytique temps réel avec graphiques dynamiques, KPIs, et exports PDF/Excel pour les décideurs.',
    en:'Real-time analytical dashboard with dynamic charts, KPIs, and PDF/Excel exports for decision-makers.',
    es:'Panel analítico en tiempo real con gráficos dinámicos, KPIs y exportaciones PDF/Excel para tomadores de decisiones.',
    ar:'لوحة تحكم تحليلية في الوقت الفعلي مع رسوم بيانية ديناميكية ومؤشرات أداء رئيسية وصادرات PDF/Excel لصناع القرار.',
    zh:'具有动态图表、KPI 以及为决策者提供的 PDF/Excel 导出的实时分析仪表板。',
    pt:'Painel analítico em tempo real com gráficos dinâmicos, KPIs e exportações PDF/Excel para tomadores de decisão.',
  },
  'project5.title': { fr:'App Fitness & Santé', en:'Fitness & Health App', es:'App de Fitness & Salud', ar:'تطبيق اللياقة والصحة', zh:'健身与健康应用', pt:'App Fitness & Saúde' },
  'project5.desc':  {
    fr:"Application mobile de suivi fitness avec programmes d'entraînement personnalisés, tracking nutritionnel et statistiques de progression.",
    en:'Mobile fitness tracking app with personalized workout programs, nutritional tracking and progress statistics.',
    es:'Aplicación móvil de seguimiento de fitness con programas de entrenamiento personalizados, seguimiento nutricional y estadísticas de progreso.',
    ar:'تطبيق موبايل لتتبع اللياقة البدنية مع برامج تمارين مخصصة وتتبع التغذية وإحصائيات التقدم.',
    zh:'具有个性化训练计划、营养跟踪和进度统计的移动健身追踪应用。',
    pt:'Aplicativo móvel de acompanhamento fitness com programas de treino personalizados, acompanhamento nutricional e estatísticas de progresso.',
  },
  'project6.title': { fr:'Gestion Clinique Médicale', en:'Medical Clinic Management', es:'Gestión de Clínica Médica', ar:'إدارة العيادة الطبية', zh:'医疗诊所管理', pt:'Gestão de Clínica Médica' },
  'project6.desc':  {
    fr:'Système de gestion pour clinique : patients, rendez-vous, dossiers médicaux, ordonnances avec une BDD sécurisée et conforme RGPD.',
    en:'Clinic management system: patients, appointments, medical records, prescriptions with a secure and GDPR-compliant database.',
    es:'Sistema de gestión de clínica: pacientes, citas, expedientes médicos, recetas con una base de datos segura y conforme al RGPD.',
    ar:'نظام إدارة العيادة: المرضى، المواعيد، السجلات الطبية، الوصفات الطبية مع قاعدة بيانات آمنة ومتوافقة مع GDPR.',
    zh:'诊所管理系统：患者、预约、病历、处方，具有安全且符合 GDPR 标准의 数据库。',
    pt:'Sistema de gestão de clínica: pacientes, consultas, prontuários médicos, prescrições com um banco de dados seguro e em conformidade com o RGPD.',
  },
  'project.demo':    { fr:'Démo', en:'Demo', es:'Demo', ar:'عرض تجريبي', zh:'演示', pt:'Demo' },
  'project.code':    { fr:'Code', en:'Code', es:'Código', ar:'الكود', zh:'代码', pt:'Código' },

  // ── CTA BAND (index.html) ────────────────────────
  'cta.tag':      { fr:'Débutons ensemble', en:"Let's get started", es:'Empecemos juntos', ar:'لنبدأ معاً', zh:'让我们开始吧', pt:'Vamos começar' },
  'cta.title':    { fr:'Votre projet, ma passion', en:'Your project, my passion', es:'Tu proyecto, mi pasión', ar:'مشروعك، شغفي', zh:'您的项目，我的激情', pt:'Seu projeto, minha paixão' },
  'cta.subtitle': {
    fr:"Vous avez une idée ? Un projet à concrétiser ? Je suis là pour transformer votre vision en réalité numérique.",
    en:"Have an idea? A project to bring to life? I'm here to turn your vision into digital reality.",
    es:"¿Tienes una idea? ¿Un proyecto que concretar? Estoy aquí para transformar tu visión en realidad digital.",
    ar:'هل لديك فكرة؟ مشروع لتحقيقه؟ أنا هنا لتحويل رؤيتك إلى واقع رقمي.',
    zh:'有想法？有项目想实现？我在这里将您的愿景转化为数字现实。',
    pt:'Tem uma ideia? Um projeto a concretizar? Estou aqui para transformar sua visão em realidade digital.',
  },
  'cta.btn':      { fr:'Démarrer un projet', en:'Start a project', es:'Iniciar un proyecto', ar:'ابدأ مشروعاً', zh:'开始项目', pt:'Iniciar um projeto' },

  // ── FOOTER ───────────────────────────────────────
  'footer.tagline': {
    fr:'Développeuse Full Stack | Mobile | Base de Données\nPassionnée par la création de solutions digitales impactantes.',
    en:'Full Stack Developer | Mobile | Database\nPassionate about creating impactful digital solutions.',
    es:'Desarrolladora Full Stack | Mobile | Base de datos\nApasionada por crear soluciones digitales de impacto.',
    ar:'مطورة Full Stack | موبايل | قواعد بيانات\nشغوفة بإنشاء حلول رقمية مؤثرة.',
    zh:'全栈开发者 | 移动端 | 数据库\n热衷于创造有影响力的数字解决方案。',
    pt:'Desenvolvedora Full Stack | Mobile | Banco de Dados\nApaixonada por criar soluções digitais impactantes.',
  },
  'footer.nav.title':   { fr:'Navigation', en:'Navigation', es:'Navegación', ar:'التنقل', zh:'导航', pt:'Navegação' },
  'footer.contact.title': { fr:'Contact', en:'Contact', es:'Contacto', ar:'تواصل', zh:'联系', pt:'Contato' },
  'footer.copyright':   {
    fr:'© 2026 Congo S Anifatou. Tous droits réservés.',
    en:'© 2026 Congo S Anifatou. All rights reserved.',
    es:'© 2026 Congo S Anifatou. Todos los derechos reservados.',
    ar:'© 2026 Congo S Anifatou. جميع الحقوق محفوظة.',
    zh:'© 2026 Congo S Anifatou. 版权所有。',
    pt:'© 2026 Congo S Anifatou. Todos os direitos reservados.',
  },
  'footer.madewith':    { fr:'Fait avec', en:'Made with', es:'Hecho con', ar:'صنع بـ', zh:'用❤制作', pt:'Feito com' },

  // ── ABOUT PAGE ───────────────────────────────────
  'about.tag':      { fr:'Mon parcours', en:'My journey', es:'Mi trayectoria', ar:'مسيرتي', zh:'我的历程', pt:'Minha trajetória' },
  'about.title':    { fr:'À Propos de Moi', en:'About Me', es:'Sobre Mí', ar:'عن نفسي', zh:'关于我', pt:'Sobre Mim' },
  'about.subtitle': {
    fr:'Passionnée par la technologie et l\'innovation numérique.',
    en:'Passionate about technology and digital innovation.',
    es:'Apasionada por la tecnología y la innovación digital.',
    ar:'شغوفة بالتكنولوجيا والابتكار الرقمي.',
    zh:'热衷于技术和数字创新。',
    pt:'Apaixonada por tecnologia e inovação digital.',
  },
  'about.who.tag':  { fr:'Qui suis-je ?', en:'Who am I?', es:'¿Quién soy?', ar:'من أنا؟', zh:'我是谁？', pt:'Quem sou eu?' },
  'about.bio1': {
    fr:"Développeuse Full Stack passionnée, je conçois et développe des solutions digitales complètes — du site web à l'application mobile, en passant par la conception de bases de données robustes.",
    en:"Passionate Full Stack Developer, I design and develop complete digital solutions — from websites to mobile applications, including the design of robust databases.",
    es:"Desarrolladora Full Stack apasionada, diseño y desarrollo soluciones digitales completas — desde sitios web hasta aplicaciones móviles, incluyendo bases de datos robustas.",
    ar:"مطورة Full Stack شغوفة، أصمم وأطور حلولاً رقمية متكاملة — من مواقع الويب إلى تطبيقات الموبايل، بما في ذلك تصميم قواعد بيانات قوية.",
    zh:"热情的全栈开发者，我设计并开发完整的数字解决方案——从网站到移动应用，包括强大的数据库设计。",
    pt:"Desenvolvedora Full Stack apaixonada, projeto e desenvolvo soluções digitais completas — de sites a aplicações móveis, incluindo a concepção de bancos de dados robustos.",
  },
  'about.bio2': {
    fr:"Mon approche combine rigueur technique et sens du détail UX pour livrer des produits de qualité qui répondent réellement aux besoins métiers.",
    en:"My approach combines technical rigor and UX attention to detail to deliver quality products that truly meet business needs.",
    es:"Mi enfoque combina rigor técnico y atención al detalle UX para entregar productos de calidad que realmente satisfacen las necesidades del negocio.",
    ar:"يجمع نهجي بين الصرامة التقنية والاهتمام بتفاصيل تجربة المستخدم لتسليم منتجات عالية الجودة تلبي الاحتياجات التجارية.",
    zh:"我的方法结合技术严谨性和用户体验细节，提供真正满足业务需求的高质量产品。",
    pt:"Minha abordagem combina rigor técnico e atenção a detalhes de UX para entregar produtos de qualidade que realmente atendem às necessidades do negócio.",
  },
  'about.bio3': {
    fr:"Curieuse, autonome et toujours en veille technologique, je m'adapte à chaque contexte projet pour apporter la solution la plus adaptée.",
    en:"Curious, autonomous and always keeping up with technology, I adapt to each project context to bring the most suitable solution.",
    es:"Curiosa, autónoma y siempre al día con la tecnología, me adapto a cada contexto de proyecto para aportar la solución más adecuada.",
    ar:"فضولية ومستقلة ودائمة التابعة للتطورات التكنولوجية، أتكيف مع كل سياق مشروع لتقديم الحل الأنسب.",
    zh:"好奇、自主且始终关注技术动态，我适应每个项目背景，提供最合适的解决方案。",
    pt:"Curiosa, autônoma e sempre atualizada com a tecnologia, adapto-me a cada contexto de projeto para trazer a solução mais adequada.",
  },
  'about.btn.cv':       { fr:'📄 Télécharger mon CV', en:'📄 Download my CV', es:'📄 Descargar mi CV', ar:'📄 تحميل السيرة الذاتية', zh:'📄 下载简历', pt:'📄 Baixar meu CV' },
  'about.btn.projects': { fr:'Voir mes projets', en:'See my projects', es:'Ver mis proyectos', ar:'مشاريعي', zh:'查看项目', pt:'Ver meus projetos' },

  // Stats
  'stat.projects':    { fr:'Projets réalisés', en:'Projects completed', es:'Proyectos realizados', ar:'مشاريع منجزة', zh:'已完成项目', pt:'Projetos realizados' },
  'stat.years':       { fr:"Années d'expérience", en:'Years of experience', es:'Años de experiencia', ar:'سنوات خبرة', zh:'年经验', pt:'Anos de experiência' },
  'stat.techs':       { fr:'Technologies maîtrisées', en:'Technologies mastered', es:'Tecnologías dominadas', ar:'تقنيات متقنة', zh:'掌握技术', pt:'Tecnologias dominadas' },
  'stat.satisfaction':{ fr:'Satisfaction client', en:'Client satisfaction', es:'Satisfacción del cliente', ar:'رضا العملاء', zh:'客户满意度', pt:'Satisfação do cliente' },

  // Skills
  'skills.tag':    { fr:'Compétences', en:'Skills', es:'Habilidades', ar:'المهارات', zh:'技能', pt:'Habilidades' },
  'skills.title':  { fr:'Stack Technique', en:'Tech Stack', es:'Stack Técnico', ar:'المكدس التقني', zh:'技术栈', pt:'Stack Técnico' },
  'skills.front':  { fr:'Frontend', en:'Frontend', es:'Frontend', ar:'الواجهة الأمامية', zh:'前端', pt:'Frontend' },
  'skills.back':   { fr:'Backend', en:'Backend', es:'Backend', ar:'الخلفية', zh:'后端', pt:'Backend' },
  'skills.mobile': { fr:'Mobile & BDD', en:'Mobile & DB', es:'Mobile & BDD', ar:'موبايل وقواعد بيانات', zh:'移动 & 数据库', pt:'Mobile & BD' },

  // Experience & Education
  'exp.tag':    { fr:'Expérience', en:'Experience', es:'Experiencia', ar:'الخبرة', zh:'经验', pt:'Experiência' },
  'edu.tag':    { fr:'Formation', en:'Education', es:'Formación', ar:'التعليم', zh:'教育', pt:'Formação' },
  'exp1.date':  { fr:'2024 – Présent', en:'2024 – Present', es:'2024 – Presente', ar:'2024 – الآن', zh:'2024 – 至今', pt:'2024 – Presente' },
  'exp1.title': { fr:'Développeuse Full Stack Freelance', en:'Freelance Full Stack Developer', es:'Desarrolladora Full Stack Freelance', ar:'مطورة Full Stack مستقلة', zh:'自由全栈开发者', pt:'Desenvolvedora Full Stack Freelance' },
  'exp1.org':   { fr:'Indépendant', en:'Self-employed', es:'Independiente', ar:'مستقلة', zh:'自由职业', pt:'Autônoma' },
  'exp1.desc':  {
    fr:"Conception et développement d'applications web et mobiles pour des clients variés. Livraison de projets clé en main.",
    en:'Design and development of web and mobile applications for various clients. Turnkey project delivery.',
    es:'Diseño y desarrollo de aplicaciones web y móviles para diversos clientes. Entrega de proyectos llave en mano.',
    ar:'تصميم وتطوير تطبيقات ويب وموبايل لعملاء متنوعين. تسليم مشاريع متكاملة.',
    zh:'为各类客户设计和开发网络和移动应用程序。交付交钥匙项目。',
    pt:'Concepção e desenvolvimento de aplicações web e móveis para diversos clientes. Entrega de projetos chave na mão.',
  },
  'exp2.date':  { fr:'2023 – 2024', en:'2023 – 2024', es:'2023 – 2024', ar:'2023 – 2024', zh:'2023 – 2024', pt:'2023 – 2024' },
  'exp2.title': { fr:'Développeuse Web & Mobile', en:'Web & Mobile Developer', es:'Desarrolladora Web & Mobile', ar:'مطورة ويب وموبايل', zh:'网页与移动开发者', pt:'Desenvolvedora Web & Mobile' },
  'exp2.org':   { fr:'Projet Académique & Personnel', en:'Academic & Personal Project', es:'Proyecto Académico & Personal', ar:'مشروع أكاديمي وشخصي', zh:'学术与个人项目', pt:'Projeto Acadêmico & Pessoal' },
  'exp2.desc':  {
    fr:"Développement d'applications complètes incluant gestion scolaire, e-commerce et systèmes de gestion avec des bases de données avancées.",
    en:'Development of complete applications including school management, e-commerce and management systems with advanced databases.',
    es:'Desarrollo de aplicaciones completas incluyendo gestión escolar, e-commerce y sistemas de gestión con bases de datos avanzadas.',
    ar:'تطوير تطبيقات متكاملة تشمل إدارة المدارس والتجارة الإلكترونية وأنظمة الإدارة مع قواعد بيانات متقدمة.',
    zh:'开发完整应用程序，包括学校管理、电子商务和具有高级数据库的管理系统。',
    pt:'Desenvolvimento de aplicações completas incluindo gestão escolar, e-commerce e sistemas de gestão com bancos de dados avançados.',
  },
  'exp3.date':  { fr:'2022 – 2023', en:'2022 – 2023', es:'2022 – 2023', ar:'2022 – 2023', zh:'2022 – 2023', pt:'2022 – 2023' },
  'exp3.title': { fr:'Développeuse Junior', en:'Junior Developer', es:'Desarrolladora Junior', ar:'مطورة مبتدئة', zh:'初级开发者', pt:'Desenvolvedora Júnior' },
  'exp3.org':   { fr:"Projets d'apprentissage", en:'Learning projects', es:'Proyectos de aprendizaje', ar:'مشاريع تعليمية', zh:'学习项目', pt:'Projetos de aprendizagem' },
  'exp3.desc':  {
    fr:"Maîtrise des fondamentaux du développement web, des bases de données et des premières applications mobiles.",
    en:'Mastery of web development fundamentals, databases and first mobile applications.',
    es:'Dominio de los fundamentos del desarrollo web, bases de datos y primeras aplicaciones móviles.',
    ar:'إتقان أساسيات تطوير الويب وقواعد البيانات وأولى تطبيقات الموبايل.',
    zh:'掌握网页开发基础知识、数据库和第一批移动应用。',
    pt:'Domínio dos fundamentos do desenvolvimento web, bancos de dados e primeiras aplicações móveis.',
  },
  'edu1.date':  { fr:'2022 – 2025', en:'2022 – 2025', es:'2022 – 2025', ar:'2022 – 2025', zh:'2022 – 2025', pt:'2022 – 2025' },
  'edu1.title': { fr:'Licence en Informatique', en:"Bachelor's in Computer Science", es:'Licenciatura en Informática', ar:'بكالوريوس علوم الحاسوب', zh:'计算机科学学士', pt:'Licenciatura em Informática' },
  'edu1.org':   { fr:'Développement Logiciel & Réseaux', en:'Software Development & Networks', es:'Desarrollo de Software & Redes', ar:'تطوير البرمجيات والشبكات', zh:'软件开发与网络', pt:'Desenvolvimento de Software & Redes' },
  'edu1.desc':  {
    fr:"Formation complète en génie logiciel, algorithmique, bases de données et développement d'applications.",
    en:'Complete training in software engineering, algorithms, databases and application development.',
    es:'Formación completa en ingeniería de software, algoritmos, bases de datos y desarrollo de aplicaciones.',
    ar:'تدريب شامل في هندسة البرمجيات والخوارزميات وقواعد البيانات وتطوير التطبيقات.',
    zh:'软件工程、算法、数据库和应用程序开发的全面培训。',
    pt:'Formação completa em engenharia de software, algoritmos, bancos de dados e desenvolvimento de aplicações.',
  },
  'edu2.date':  { fr:'2021 – 2022', en:'2021 – 2022', es:'2021 – 2022', ar:'2021 – 2022', zh:'2021 – 2022', pt:'2021 – 2022' },
  'edu2.title': { fr:'Certifications en ligne', en:'Online Certifications', es:'Certificaciones en línea', ar:'شهادات عبر الإنترنت', zh:'在线认证', pt:'Certificações online' },
  'edu2.org':   { fr:'Udemy, Coursera, freeCodeCamp', en:'Udemy, Coursera, freeCodeCamp', es:'Udemy, Coursera, freeCodeCamp', ar:'Udemy, Coursera, freeCodeCamp', zh:'Udemy, Coursera, freeCodeCamp', pt:'Udemy, Coursera, freeCodeCamp' },
  'edu2.desc':  {
    fr:'Certifications avancées en React, Flutter, Python Django, et conception de bases de données.',
    en:'Advanced certifications in React, Flutter, Python Django, and database design.',
    es:'Certificaciones avanzadas en React, Flutter, Python Django y diseño de bases de datos.',
    ar:'شهادات متقدمة في React و Flutter و Python Django وتصميم قواعد البيانات.',
    zh:'React、Flutter、Python Django和数据库设计的高级认证。',
    pt:'Certificações avançadas em React, Flutter, Python Django e concepção de bancos de dados.',
  },
  'edu3.date':  { fr:'2020 – 2021', en:'2020 – 2021', es:'2020 – 2021', ar:'2020 – 2021', zh:'2020 – 2021', pt:'2020 – 2021' },
  'edu3.title': { fr:'Autodidaxie en Développement Web', en:'Self-taught Web Development', es:'Autodidacta en Desarrollo Web', ar:'التعلم الذاتي في تطوير الويب', zh:'自学网页开发', pt:'Autodidata em Desenvolvimento Web' },
  'edu3.org':   { fr:'Projets personnels', en:'Personal projects', es:'Proyectos personales', ar:'مشاريع شخصية', zh:'个人项目', pt:'Projetos pessoais' },
  'edu3.desc':  {
    fr:"Premières bases en HTML, CSS, JavaScript et Python. Création de mini-projets personnels.",
    en:'First foundations in HTML, CSS, JavaScript and Python. Creation of mini personal projects.',
    es:'Primeras bases en HTML, CSS, JavaScript y Python. Creación de mini-proyectos personales.',
    ar:'أولى الأسس في HTML و CSS و JavaScript و Python. إنشاء مشاريع شخصية صغيرة.',
    zh:'HTML、CSS、JavaScript和Python的基础。创建个人小项目。',
    pt:'Primeiras bases em HTML, CSS, JavaScript e Python. Criação de mini-projetos pessoais.',
  },

  // About CTA
  'about.cta.title':    { fr:'Travaillons ensemble', en:"Let's work together", es:'Trabajemos juntos', ar:'لنعمل معاً', zh:'让我们合作', pt:'Vamos trabalhar juntos' },
  'about.cta.subtitle': {
    fr:'Vous avez un projet ? Je serais ravie d\'en discuter avec vous.',
    en:'Have a project? I\'d love to discuss it with you.',
    es:'¿Tienes un proyecto? Me encantaría discutirlo contigo.',
    ar:'هل لديك مشروع؟ سيسعدني مناقشته معك.',
    zh:'有项目？我很乐意与您讨论。',
    pt:'Tem um projeto? Ficaria feliz em discuti-lo com você.',
  },
  'about.cta.btn': { fr:'Me contacter', en:'Contact me', es:'Contáctame', ar:'تواصل معي', zh:'联系我', pt:'Me contatar' },

  // ── PORTFOLIO PAGE ───────────────────────────────
  'portfolio.page.tag':     { fr:'Mes Réalisations', en:'My Work',      es:'Mis Trabajos',    ar:'أعمالي',          zh:'我的作品',      pt:'Meus Trabalhos'    },
  'portfolio.page.title':   { fr:'Portfolio',         en:'Portfolio',    es:'Portafolio',      ar:'معرض الأعمال',    zh:'作品集',        pt:'Portfólio'         },
  'portfolio.page.subtitle':{
    fr:"Découvrez mes projets — de l'idée à la mise en production.",
    en:'Discover my projects — from idea to production.',
    es:'Descubre mis proyectos — desde la idea hasta la producción.',
    ar:'اكتشف مشاريعي — من الفكرة إلى الإطلاق.',
    zh:'探索我的项目——从创意到上线。',
    pt:'Descubra meus projetos — da ideia à produção.',
  },
  'filter.all':     { fr:'Tous', en:'All',      es:'Todos',   ar:'الكل',    zh:'全部',   pt:'Todos'   },
  'filter.web':     { fr:'Web',  en:'Web',      es:'Web',     ar:'ويب',     zh:'网页',   pt:'Web'     },
  'filter.mobile':  { fr:'Mobile',en:'Mobile',  es:'Móvil',   ar:'موبايل',  zh:'移动端', pt:'Mobile'  },
  'filter.db':      { fr:'Base de Données',en:'Database',es:'Base de datos',ar:'قواعد البيانات',zh:'数据库',pt:'Banco de Dados' },

  // ── SERVICES PAGE ────────────────────────────────
  'services.page.tag':     { fr:'Ce que je propose', en:'What I offer',    es:'Lo que ofrezco', ar:'ما أقدمه',     zh:'我的服务',    pt:'O que ofereço'    },
  'services.page.title':   { fr:'Mes Services',       en:'My Services',     es:'Mis Servicios',  ar:'خدماتي',       zh:'我的服务',    pt:'Meus Serviços'    },
  'services.page.subtitle':{
    fr:'Des solutions sur-mesure pour concrétiser vos projets digitaux.',
    en:'Custom solutions to bring your digital projects to life.',
    es:'Soluciones personalizadas para hacer realidad tus proyectos digitales.',
    ar:'حلول مخصصة لتحقيق مشاريعك الرقمية.',
    zh:'量身定制的解决方案，让您的数字项目成真。',
    pt:'Soluções personalizadas para concretizar seus projetos digitais.',
  },

  // ── CONTACT PAGE ─────────────────────────────────
  'contact.page.tag':      { fr:'Restons en contact', en:"Let's connect",  es:'Conectemos',        ar:'لنتواصل',          zh:'保持联系',    pt:'Vamos nos conectar' },
  'contact.page.title':    { fr:'Me Contacter',        en:'Contact Me',     es:'Contáctame',        ar:'تواصل معي',        zh:'联系我',     pt:'Entre em Contato'   },
  'contact.page.subtitle': {
    fr:'Vous avez un projet ou une question ? N\'hésitez pas à me contacter.',
    en:'Have a project or a question? Feel free to contact me.',
    es:'¿Tienes un proyecto o una pregunta? No dudes en contactarme.',
    ar:'هل لديك مشروع أو سؤال؟ لا تتردد في التواصل معي.',
    zh:'有项目或问题？请随时联系我。',
    pt:'Tem um projeto ou pergunta? Não hesite em entrar em contato comigo.',
  },
  'contact.form.name':     { fr:'Nom complet', en:'Full name', es:'Nombre completo', ar:'الاسم الكامل', zh:'全名', pt:'Nome completo' },
  'contact.form.email':    { fr:'Email', en:'Email', es:'Correo electrónico', ar:'البريد الإلكتروني', zh:'电子邮件', pt:'E-mail' },
  'contact.form.subject':  { fr:'Sujet', en:'Subject', es:'Asunto', ar:'الموضوع', zh:'主题', pt:'Assunto' },
  'contact.form.message':  { fr:'Message', en:'Message', es:'Mensaje', ar:'الرسالة', zh:'消息', pt:'Mensagem' },
  'contact.form.send':     { fr:'Envoyer le message', en:'Send message', es:'Enviar mensaje', ar:'إرسال الرسالة', zh:'发送消息', pt:'Enviar mensagem' },

  // ── TYPING ANIMATION WORDS ───────────────────────
  'typing.words': {
    fr: ['Développeuse Full Stack', 'Développeuse Mobile', 'Experte Base de Données'],
    en: ['Full Stack Developer', 'Mobile Developer', 'Database Expert'],
    es: ['Desarrolladora Full Stack', 'Desarrolladora Móvil', 'Experta en Bases de Datos'],
    ar: ['مطورة Full Stack', 'مطورة موبايل', 'خبيرة قواعد بيانات'],
    zh: ['全栈开发者', '移动开发者', '数据库专家'],
    pt: ['Desenvolvedora Full Stack', 'Desenvolvedora Mobile', 'Especialista em Banco de Dados'],
  },

  // ── BADGE — availability ─────────────────────────
  'badge.available': { fr:'Disponible', en:'Available', es:'Disponible', ar:'متاحة', zh:'可接项目', pt:'Disponível' },
  'badge.forprojects':{ fr:'Pour vos projets', en:'For your projects', es:'Para tus proyectos', ar:'لمشاريعكم', zh:'接受项目', pt:'Para seus projetos' },

  // ── CONTACT PAGE — extra texts ──────────────────
  'contact.hello':     { fr:'Restons en contact 👋', en:"Let's stay in touch 👋", es:'Mantengamos el contacto 👋', ar:'لنبقى على تواصل 👋', zh:'保持联系 👋', pt:'Fiquemos em contato 👋' },
  'contact.intro':     {
    fr:"Que ce soit pour un projet, une collaboration ou simplement pour échanger autour de la tech, n'hésitez pas !",
    en:"Whether it's for a project, a collaboration, or just to chat about tech, don't hesitate!",
    es:'Ya sea para un proyecto, una colaboración o simplemente para hablar de tecnología, ¡no dudes!',
    ar:'سواء كان لمشروع أو تعاون أو مجرد حديث عن التكنولوجيا، لا تتردد!',
    zh:'无论是项目、合作还是技术交流，请随时联系！',
    pt:'Seja para um projeto, uma colaboração ou simplesmente para trocar ideias sobre tech, não hesite!',
  },
  'contact.response':  { fr:'Délai de réponse typique : < 24h', en:'Typical response time: < 24h', es:'Tiempo de respuesta típico: < 24h', ar:'وقت الاستجابة المعتاد: أقل من 24 ساعة', zh:'通常回复时间：< 24h', pt:'Tempo de resposta típico: < 24h' },
  'contact.socials':   { fr:'Mes réseaux', en:'My networks', es:'Mis redes', ar:'شبكاتي', zh:'我的社交', pt:'Minhas redes' },
  'contact.social.gh': { fr:'Suivre sur GitHub', en:'Follow on GitHub', es:'Seguir en GitHub', ar:'تابعني على GitHub', zh:'关注 GitHub', pt:'Seguir no GitHub' },
  'contact.social.in': { fr:'Suivre sur LinkedIn', en:'Follow on LinkedIn', es:'Seguir en LinkedIn', ar:'تابعني على LinkedIn', zh:'关注 LinkedIn', pt:'Seguir no LinkedIn' },
  'contact.social.wa': { fr:'Discuter sur WhatsApp', en:'Chat on WhatsApp', es:'Chatear en WhatsApp', ar:'دردشة على WhatsApp', zh:'在 WhatsApp 上聊天', pt:'Conversar no WhatsApp' },
  'contact.social.ml': { fr:'Envoyer un email', en:'Send an email', es:'Enviar un correo', ar:'إرسال بريد إلكتروني', zh:'发送电子邮件', pt:'Enviar um e-mail' },
  'contact.formtitle': { fr:'Envoyez-moi un message', en:'Send me a message', es:'Envíame un mensaje', ar:'أرسل لي رسالة', zh:'给我留言', pt:'Envie-me uma mensagem' },
  'contact.formdesc':  {
    fr:'Remplissez le formulaire ci-dessous et je vous recontacte rapidement.',
    en:'Fill out the form below and I will get back to you quickly.',
    es:'Completa el formulario y te responderé rápidamente.',
    ar:'املأ النموذج أدناه وسأعود إليك بسرعة.',
    zh:'填写下面的表格，我会尽快回复您。',
    pt:'Preencha o formulário abaixo e entrarei em contato rapidamente.',
  },
  'contact.form.service':  { fr:'Type de service', en:'Service type', es:'Tipo de servicio', ar:'نوع الخدمة', zh:'服务类型', pt:'Tipo de serviço' },
  'contact.form.choose':   { fr:'Choisir un service…', en:'Choose a service…', es:'Elegir un servicio…', ar:'اختر خدمة…', zh:'选择服务…', pt:'Escolher um serviço…' },
  'contact.form.fullstack':{ fr:'Projet Full Stack', en:'Full Stack Project', es:'Proyecto Full Stack', ar:'مشروع Full Stack', zh:'全栈项目', pt:'Projeto Full Stack' },
  'contact.form.other':    { fr:'Autre', en:'Other', es:'Otro', ar:'أخرى', zh:'其他', pt:'Outro' },
  'contact.form.p_name':   { fr:'CONGO Anifatou', en:'CONGO Anifatou', es:'CONGO Anifatou', ar:'كونغو أنيفاتو', zh:'CONGO Anifatou', pt:'CONGO Anifatou' },
  'contact.form.p_email':  { fr:'congoanifa7@gmail.com', en:'congoanifa7@gmail.com', es:'congoanifa7@gmail.com', ar:'congoanifa7@gmail.com', zh:'congoanifa7@gmail.com', pt:'congoanifa7@gmail.com' },
  'contact.form.p_subj':   { fr:"Développement d'une application mobile…", en:'Mobile app development…', es:'Desarrollo de aplicación móvil…', ar:'تطوير تطبيق جوال…', zh:'移动应用开发…', pt:'Desenvolvimento de aplicativo móvel…' },
  'contact.form.p_msg':    { fr:'Décrivez votre projet, vos besoins, vos délais…', en:'Describe your project, needs, deadlines…', es:'Describe tu proyecto, necesidades, plazos…', ar:'صف مشروعك، احتياجاتك، المواعيد النهائية…', zh:'描述您的项目、需求、期限…', pt:'Descreva seu projeto, necessidades, prazos…' },

  // ── CONTACT FORM VALIDATION & FEEDBACK ──────────
  'contact.form.error.required': { fr:'Ce champ est requis.', en:'This field is required.', es:'Este campo es obligatorio.', ar:'هذا الحقل مطلوب.', zh:'此字段为必填项。', pt:'Este campo é obrigatório.' },
  'contact.form.error.email':    { fr:'Adresse email invalide.', en:'Invalid email address.', es:'Dirección de correo inválida.', ar:'عنوان بريد إلكتروني غير صالح.', zh:'电子邮件地址无效。', pt:'Endereço de e-mail inválido.' },
  'contact.form.error.message':  { fr:'Le message doit faire au moins 20 caractères.', en:'Message must be at least 20 characters.', es:'El mensaje debe tener al menos 20 caracteres.', ar:'يجب أن تكون الرسالة 20 حرفاً على الأقل.', zh:'信息必须至少包含 20 个字符。', pt:'A mensagem deve ter pelo menos 20 caracteres.' },
  'contact.form.status.sending': { fr:'Envoi en cours…', en:'Sending…', es:'Enviando…', ar:'جاري الإرسال...', zh:'发送中...', pt:'Enviando...' },
  'contact.form.status.sent':    { fr:'✓ Message envoyé !', en:'✓ Message sent!', es:'¡✓ Mensaje enviado!', ar:'✓ تم إرسال الرسالة!', zh:'✓ 信息已发送！', pt:'✓ Mensagem enviada!' },
  'contact.form.status.success': { fr:'Votre message a été envoyé avec succès !', en:'Your message has been sent successfully!', es:'¡Tu mensaje ha sido enviado con éxito!', ar:'تم إرسال رسالتك بنجاح!', zh:'Votre message a été envoyé avec succès !', pt:'Sua mensagem foi enviada com sucesso!' },

  // ── FAQ ─────────────────────────────────────────
  'faq.tag':   { fr:'Questions fréquentes', en:'Frequently Asked Questions', es:'Preguntas frecuentes', ar:'أسئلة شائعة', zh:'常见问题', pt:'Perguntas frequentes' },
  'faq.title': { fr:'FAQ', en:'FAQ', es:'FAQ', ar:'الأسئلة الشائعة', zh:'常见问题', pt:'FAQ' },
  'faq1.q':    { fr:'⏱ Quel est le délai de réalisation ?', en:'⏱ What is the delivery time?', es:'⏱ ¿Cuál es el plazo de realización?', ar:'⏱ ما هو وقت التسليم؟', zh:'⏱ 交付时间是多久？', pt:'⏱ Qual é o prazo de entrega?' },
  'faq1.a':    {
    fr:'Cela dépend de la complexité. Un site vitrine : 1-2 semaines. Une app mobile complète : 4-8 semaines. Je fournis un planning précis avant chaque démarrage.',
    en:'It depends on complexity. A showcase site: 1-2 weeks. A complete mobile app: 4-8 weeks. I provide a precise schedule before each start.',
    es:'Depende de la complejidad. Un sitio vitrina: 1-2 semanas. Una app móvil completa: 4-8 semanas. Proporciono un calendario preciso antes de cada inicio.',
    ar:'يعتمد على التعقيد. موقع عرض: 1-2 أسابيع. تطبيق موبايل كامل: 4-8 أسابيع. أقدم جدولاً زمنياً دقيقاً قبل كل بداية.',
    zh:'取决于复杂度。展示网站：1-2周。完整移动应用：4-8周。每次开始前我都会提供精确的时间表。',
    pt:'Depende da complexidade. Um site vitrine: 1-2 semanas. Um app móvel completo: 4-8 semanas. Forneço um cronograma preciso antes de cada início.',
  },
  'faq2.q':    { fr:'💰 Comment se passe le paiement ?', en:'💰 How does payment work?', es:'💰 ¿Cómo funciona el pago?', ar:'💰 كيف يتم الدفع؟', zh:'💰 付款方式是什么？', pt:'💰 Como funciona o pagamento?' },
  'faq2.a':    {
    fr:'Généralement 30% à la commande, 30% à mi-projet et 40% à la livraison. Des modalités différentes peuvent être discutées selon le projet.',
    en:'Generally 30% at order, 30% at mid-project and 40% at delivery. Different terms can be discussed depending on the project.',
    es:'Generalmente 30% al pedido, 30% a mitad de proyecto y 40% en la entrega. Se pueden discutir diferentes modalidades.',
    ar:'عموماً 30% عند الطلب، 30% في منتصف المشروع و40% عند التسليم. يمكن مناقشة شروط مختلفة حسب المشروع.',
    zh:'通常下单30%、项目中期30%、交付40%。可以根据项目讨论不同条款。',
    pt:'Geralmente 30% no pedido, 30% no meio do projeto e 40% na entrega. Diferentes modalidades podem ser discutidas.',
  },
  'faq3.q':    { fr:'🔄 Proposez-vous un suivi après livraison ?', en:'🔄 Do you offer post-delivery support?', es:'🔄 ¿Ofrecen seguimiento post-entrega?', ar:'🔄 هل تقدمين دعماً بعد التسليم؟', zh:'🔄 您提供交付后支持吗？', pt:'🔄 Você oferece suporte pós-entrega?' },
  'faq3.a':    {
    fr:"Oui ! J'offre une période de garantie et de corrections gratuites après livraison. Des contrats de maintenance peuvent aussi être proposés.",
    en:"Yes! I offer a warranty period and free corrections after delivery. Maintenance contracts can also be offered.",
    es:'¡Sí! Ofrezco un período de garantía y correcciones gratuitas después de la entrega. También se pueden ofrecer contratos de mantenimiento.',
    ar:'نعم! أقدم فترة ضمان وتصحيحات مجانية بعد التسليم. يمكن أيضاً تقديم عقود صيانة.',
    zh:'是的！我提供保修期和交付后免费修改。也可以提供维护合同。',
    pt:'Sim! Ofereço um período de garantia e correções gratuitas após a entrega. Contratos de manutenção também podem ser oferecidos.',
  },
  'faq4.q':    { fr:'🌍 Travaillez-vous à distance ?', en:'🌍 Do you work remotely?', es:'🌍 ¿Trabaja a distancia?', ar:'🌍 هل تعملين عن بُعد؟', zh:'🌍 您远程工作吗？', pt:'🌍 Você trabalha remotamente?' },
  'faq4.a':    {
    fr:'Absolument. Je travaille avec des clients partout dans le monde via email, WhatsApp, et visioconférence (Zoom, Meet, Teams).',
    en:'Absolutely. I work with clients worldwide via email, WhatsApp, and video conferencing (Zoom, Meet, Teams).',
    es:'Absolutamente. Trabajo con clientes en todo el mundo por email, WhatsApp y videoconferencia (Zoom, Meet, Teams).',
    ar:'بالتأكيد. أعمل مع عملاء حول العالم عبر البريد الإلكتروني وواتساب ومكالمات الفيديو (Zoom, Meet, Teams).',
    zh:'当然。我通过电子邮件、WhatsApp和视频会议（Zoom、Meet、Teams）与全球客户合作。',
    pt:'Absolutamente. Trabalho com clientes em todo o mundo via e-mail, WhatsApp e videoconferência (Zoom, Meet, Teams).',
  },

  // ── SERVICES PAGE — Process ─────────────────────
  'process.tag':      { fr:'Comment je travaille', en:'How I work', es:'Cómo trabajo', ar:'كيف أعمل', zh:'我的工作方式', pt:'Como trabalho' },
  'process.title':    { fr:'Mon Processus', en:'My Process', es:'Mi Proceso', ar:'منهجيتي', zh:'我的流程', pt:'Meu Processo' },
  'process.subtitle': {
    fr:'Une méthodologie claire et transparente pour chaque projet.',
    en:'A clear and transparent methodology for each project.',
    es:'Una metodología clara y transparente para cada proyecto.',
    ar:'منهجية واضحة وشفافة لكل مشروع.',
    zh:'每个项目都有清晰透明的方法论。',
    pt:'Uma metodologia clara e transparente para cada projeto.',
  },
  'step1.label': { fr:'ÉTAPE 01', en:'STEP 01', es:'PASO 01', ar:'الخطوة 01', zh:'步骤 01', pt:'ETAPA 01' },
  'step1.title': { fr:'Analyse & Cadrage', en:'Analysis & Scoping', es:'Análisis & Alcance', ar:'تحليل وتأطير', zh:'分析与范围', pt:'Análise & Escopo' },
  'step1.desc':  {
    fr:'Compréhension approfondie de vos besoins, objectifs et contraintes pour définir le périmètre exact du projet.',
    en:'Deep understanding of your needs, goals and constraints to define the exact project scope.',
    es:'Comprensión profunda de sus necesidades, objetivos y restricciones para definir el alcance exacto del proyecto.',
    ar:'فهم عميق لاحتياجاتكم وأهدافكم وقيودكم لتحديد نطاق المشروع بدقة.',
    zh:'深入了解您的需求、目标和限制，以确定精确的项目范围。',
    pt:'Compreensão profunda de suas necessidades, objetivos e restrições para definir o escopo exato do projeto.',
  },
  'step2.label': { fr:'ÉTAPE 02', en:'STEP 02', es:'PASO 02', ar:'الخطوة 02', zh:'步骤 02', pt:'ETAPA 02' },
  'step2.title': { fr:'Design & Architecture', en:'Design & Architecture', es:'Diseño & Arquitectura', ar:'تصميم وهيكلة', zh:'设计与架构', pt:'Design & Arquitetura' },
  'step2.desc':  {
    fr:"Conception de l'architecture technique, de la structure de données et des maquettes UI/UX.",
    en:'Design of the technical architecture, data structure and UI/UX mockups.',
    es:'Diseño de la arquitectura técnica, estructura de datos y maquetas UI/UX.',
    ar:'تصميم البنية التقنية وهيكل البيانات ونماذج واجهة المستخدم.',
    zh:'设计技术架构、数据结构和UI/UX原型。',
    pt:'Concepção da arquitetura técnica, estrutura de dados e mockups UI/UX.',
  },
  'step3.label': { fr:'ÉTAPE 03', en:'STEP 03', es:'PASO 03', ar:'الخطوة 03', zh:'步骤 03', pt:'ETAPA 03' },
  'step3.title': { fr:'Développement', en:'Development', es:'Desarrollo', ar:'التطوير', zh:'开发', pt:'Desenvolvimento' },
  'step3.desc':  {
    fr:"Développement itératif avec des points réguliers pour garantir l'alignement avec vos attentes.",
    en:'Iterative development with regular checkpoints to ensure alignment with your expectations.',
    es:'Desarrollo iterativo con puntos regulares para garantizar la alineación con sus expectativas.',
    ar:'تطوير تكراري مع نقاط مراجعة منتظمة لضمان التوافق مع توقعاتكم.',
    zh:'迭代开发，定期检查以确保与您的期望一致。',
    pt:'Desenvolvimento iterativo com pontos regulares para garantir alinhamento com suas expectativas.',
  },
  'step4.label': { fr:'ÉTAPE 04', en:'STEP 04', es:'PASO 04', ar:'الخطوة 04', zh:'步骤 04', pt:'ETAPA 04' },
  'step4.title': { fr:'Livraison & Suivi', en:'Delivery & Support', es:'Entrega & Seguimiento', ar:'التسليم والمتابعة', zh:'交付与支持', pt:'Entrega & Suporte' },
  'step4.desc':  {
    fr:'Tests complets, déploiement, formation et support post-livraison pour assurer le succès de votre projet.',
    en:'Complete testing, deployment, training and post-delivery support to ensure project success.',
    es:'Pruebas completas, despliegue, formación y soporte post-entrega para asegurar el éxito de su proyecto.',
    ar:'اختبارات شاملة ونشر وتدريب ودعم بعد التسليم لضمان نجاح مشروعكم.',
    zh:'完整测试、部署、培训和交付后支持，确保项目成功。',
    pt:'Testes completos, deploy, treinamento e suporte pós-entrega para garantir o sucesso do seu projeto.',
  },

  // ── SERVICES PAGE — Advantages ──────────────────
  'why.tag':   { fr:'Pourquoi moi ?', en:'Why me?', es:'¿Por qué yo?', ar:'لماذا أنا؟', zh:'为什么选我？', pt:'Por que eu?' },
  'why.title': { fr:'Ce qui me distingue', en:'What sets me apart', es:'Lo que me distingue', ar:'ما يميزني', zh:'我的优势', pt:'O que me diferencia' },
  'adv1.title': { fr:'Livraison rapide & de qualité', en:'Fast & quality delivery', es:'Entrega rápida y de calidad', ar:'تسليم سريع وعالي الجودة', zh:'快速优质交付', pt:'Entrega rápida e de qualidade' },
  'adv1.desc':  { fr:'Respect des délais avec un code propre, maintenable et bien documenté.', en:'On-time delivery with clean, maintainable and well-documented code.', es:'Cumplimiento de plazos con código limpio, mantenible y bien documentado.', ar:'التزام بالمواعيد مع كود نظيف وقابل للصيانة وموثق.', zh:'按时交付，代码整洁、可维护且文档齐全。', pt:'Respeito dos prazos com código limpo, manutenível e bem documentado.' },
  'adv2.title': { fr:'Sécurité & Performance', en:'Security & Performance', es:'Seguridad & Rendimiento', ar:'الأمان والأداء', zh:'安全与性能', pt:'Segurança & Performance' },
  'adv2.desc':  { fr:'Applications sécurisées, optimisées et prêtes pour la montée en charge.', en:'Secure, optimized applications ready for scaling.', es:'Aplicaciones seguras, optimizadas y listas para escalar.', ar:'تطبيقات آمنة ومحسنة وجاهزة للتوسع.', zh:'安全、优化且可扩展的应用程序。', pt:'Aplicações seguras, otimizadas e prontas para escalar.' },
  'adv3.title': { fr:'Communication transparente', en:'Transparent communication', es:'Comunicación transparente', ar:'تواصل شفاف', zh:'透明沟通', pt:'Comunicação transparente' },
  'adv3.desc':  { fr:'Points réguliers, réponse rapide et implication totale dans votre projet.', en:'Regular updates, quick response and full involvement in your project.', es:'Actualizaciones regulares, respuesta rápida e implicación total en su proyecto.', ar:'تحديثات منتظمة واستجابة سريعة ومشاركة كاملة في مشروعكم.', zh:'定期更新、快速响应、全力参与您的项目。', pt:'Atualizações regulares, resposta rápida e envolvimento total no seu projeto.' },
  'adv4.title': { fr:'Solutions évolutives', en:'Scalable solutions', es:'Soluciones escalables', ar:'حلول قابلة للتطوير', zh:'可扩展解决方案', pt:'Soluções escaláveis' },
  'adv4.desc':  { fr:'Architecture pensée pour grandir avec votre business, pas contre lui.', en:'Architecture designed to grow with your business, not against it.', es:'Arquitectura pensada para crecer con su negocio, no en su contra.', ar:'بنية مصممة للنمو مع عملك وليس ضده.', zh:'架构设计旨在与您的业务一起成长。', pt:'Arquitetura pensada para crescer com o seu negócio.' },

  // ── SERVICE FEATURES ────────────────────────────
  'svc.web.f1': { fr:'Sites vitrine & Landing pages', en:'Showcase sites & Landing pages', es:'Sitios vitrina & Landing pages', ar:'مواقع عرض وصفحات هبوط', zh:'展示网站和着陆页', pt:'Sites vitrine & Landing pages' },
  'svc.web.f2': { fr:'Applications web SPA (React, Vue)', en:'SPA Web Apps (React, Vue)', es:'Apps web SPA (React, Vue)', ar:'تطبيقات ويب SPA (React, Vue)', zh:'SPA 网页应用 (React, Vue)', pt:'Aplicações web SPA (React, Vue)' },
  'svc.web.f3': { fr:'Backend & API REST', en:'Backend & REST API', es:'Backend & API REST', ar:'الخلفية وAPI REST', zh:'后端与REST API', pt:'Backend & API REST' },
  'svc.web.f4': { fr:'E-Commerce & plateformes web', en:'E-Commerce & web platforms', es:'E-Commerce & plataformas web', ar:'التجارة الإلكترونية ومنصات الويب', zh:'电商与网络平台', pt:'E-Commerce & plataformas web' },
  'svc.web.f5': { fr:'Tableau de bord & Admin', en:'Dashboard & Admin', es:'Panel de control & Admin', ar:'لوحة التحكم والإدارة', zh:'仪表盘与管理后台', pt:'Dashboard & Admin' },
  'svc.mob.f1': { fr:'Apps Flutter (iOS & Android)', en:'Flutter Apps (iOS & Android)', es:'Apps Flutter (iOS & Android)', ar:'تطبيقات Flutter (iOS & Android)', zh:'Flutter应用 (iOS & Android)', pt:'Apps Flutter (iOS & Android)' },
  'svc.mob.f2': { fr:'Apps React Native', en:'React Native Apps', es:'Apps React Native', ar:'تطبيقات React Native', zh:'React Native应用', pt:'Apps React Native' },
  'svc.mob.f3': { fr:'Intégration API & Firebase', en:'API & Firebase Integration', es:'Integración API & Firebase', ar:'تكامل API و Firebase', zh:'API与Firebase集成', pt:'Integração API & Firebase' },
  'svc.mob.f4': { fr:'Notifications push', en:'Push Notifications', es:'Notificaciones push', ar:'إشعارات فورية', zh:'推送通知', pt:'Notificações push' },
  'svc.mob.f5': { fr:'Publication App Store / Play Store', en:'App Store / Play Store Publishing', es:'Publicación App Store / Play Store', ar:'نشر على App Store / Play Store', zh:'App Store / Play Store 发布', pt:'Publicação App Store / Play Store' },
  'svc.db.f1':  { fr:'Modélisation & conception BDD', en:'Database Modeling & Design', es:'Modelado & diseño BDD', ar:'نمذجة وتصميم قواعد البيانات', zh:'数据库建模与设计', pt:'Modelagem & concepção BD' },
  'svc.db.f2':  { fr:'PostgreSQL, MySQL, MongoDB', en:'PostgreSQL, MySQL, MongoDB', es:'PostgreSQL, MySQL, MongoDB', ar:'PostgreSQL, MySQL, MongoDB', zh:'PostgreSQL, MySQL, MongoDB', pt:'PostgreSQL, MySQL, MongoDB' },
  'svc.db.f3':  { fr:'Performance & optimisation', en:'Performance & Optimization', es:'Rendimiento & optimización', ar:'الأداء والتحسين', zh:'性能优化', pt:'Performance & otimização' },
  'svc.db.f4':  { fr:'API REST & GraphQL', en:'REST API & GraphQL', es:'API REST & GraphQL', ar:'API REST & GraphQL', zh:'REST API & GraphQL', pt:'API REST & GraphQL' },
  'svc.db.f5':  { fr:'Migration & maintenance BDD', en:'Database Migration & Maintenance', es:'Migración & mantenimiento BDD', ar:'ترحيل وصيانة قواعد البيانات', zh:'数据库迁移与维护', pt:'Migração & manutenção BD' },
};

// ── Current language state ─────────────────────────
let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

// ── Get translation ────────────────────────────────
function t(key, lang) {
  lang = lang || currentLang;
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[lang] || entry['fr'] || key;
}

// ── Apply translations to the page ─────────────────
function applyTranslations(lang) {
  const langDef = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  // Update html lang & dir
  document.documentElement.lang = lang;
  document.documentElement.dir  = langDef.dir;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key, lang);
    if (translation) el.textContent = translation;
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = t(key, lang);
    if (translation) el.placeholder = translation;
  });

  // Update [data-i18n-html] (with HTML content)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const translation = t(key, lang);
    if (translation) el.innerHTML = translation.replace(/\n/g, '<br>');
  });

  // Update typing animation words
  const typingEl = document.querySelector('[data-typing]');
  if (typingEl) {
    const words = TRANSLATIONS['typing.words']?.[lang] || TRANSLATIONS['typing.words']?.['fr'] || [];
    typingEl.setAttribute('data-typing', JSON.stringify(words));
    typingEl.textContent = '';
    // Stop current animation then restart
    if (typeof window._stopTyping === 'function') window._stopTyping();
    if (typeof initTyping === 'function') setTimeout(initTyping, 50);
  }

  // Update page title & meta if needed
  const pageTitles = {
    'index.html':    { fr:'Congo S Anifatou — Développeuse Full Stack | Mobile | Base de Données', en:'Congo S Anifatou — Full Stack Developer | Mobile | Database', es:'Congo S Anifatou — Desarrolladora Full Stack | Mobile | Base de Datos', ar:'Congo S Anifatou — مطورة Full Stack', zh:'Congo S Anifatou — 全栈开发者', pt:'Congo S Anifatou — Desenvolvedora Full Stack' },
    'about.html':    { fr:'À Propos — Congo S Anifatou', en:'About — Congo S Anifatou', es:'Sobre Mí — Congo S Anifatou', ar:'عن — Congo S Anifatou', zh:'关于 — Congo S Anifatou', pt:'Sobre — Congo S Anifatou' },
    'portfolio.html':{ fr:'Portfolio — Congo S Anifatou', en:'Portfolio — Congo S Anifatou', es:'Portafolio — Congo S Anifatou', ar:'أعمالي — Congo S Anifatou', zh:'作品集 — Congo S Anifatou', pt:'Portfólio — Congo S Anifatou' },
    'services.html': { fr:'Services — Congo S Anifatou', en:'Services — Congo S Anifatou', es:'Servicios — Congo S Anifatou', ar:'الخدمات — Congo S Anifatou', zh:'服务 — Congo S Anifatou', pt:'Serviços — Congo S Anifatou' },
    'contact.html':  { fr:'Contact — Congo S Anifatou', en:'Contact — Congo S Anifatou', es:'Contacto — Congo S Anifatou', ar:'تواصل — Congo S Anifatou', zh:'联系 — Congo S Anifatou', pt:'Contato — Congo S Anifatou' },
  };
  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (pageTitles[page]?.[lang]) {
    document.title = pageTitles[page][lang];
  }
}

// Helper to clear typing timeouts
let _typingTimeout = null;
function clearTypingTimeouts() {
  if (_typingTimeout) clearTimeout(_typingTimeout);
  _typingTimeout = null;
}
// Override setTimeout in initTyping context (store last timeout)
const _origSetTimeout = window.setTimeout;
function patchedSetTimeout(fn, delay) {
  _typingTimeout = _origSetTimeout(fn, delay);
  return _typingTimeout;
}

// ── Switch language ─────────────────────────────────
function switchLanguage(lang) {
  if (!LANGUAGES.find(l => l.code === lang)) return;
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  applyTranslations(lang);
  updateLangButtonUI(lang);
}

// Update language button display
function updateLangButtonUI(lang) {
  const langDef = LANGUAGES.find(l => l.code === lang);
  if (!langDef) return;

  // Update all lang buttons on page
  document.querySelectorAll('.lang-btn-flag').forEach(el => el.textContent = langDef.flag);
  document.querySelectorAll('.lang-btn-code').forEach(el => el.textContent = lang.toUpperCase());

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });
}

// ── Build language dropdown HTML ─────────────────────
function buildLangDropdown() {
  return LANGUAGES.map(l => `
    <button class="lang-option${l.code === currentLang ? ' active' : ''}"
            data-lang="${l.code}"
            onclick="switchLanguage('${l.code}'); closeLangDropdown()">
      <span class="lang-option-flag">${l.flag}</span>
      <span class="lang-option-name">${l.name}</span>
      <span class="lang-option-code">${l.code}</span>
    </button>
  `).join('');
}

// ── Toggle dropdown ──────────────────────────────────
function toggleLangDropdown() {
  const sel = document.querySelectorAll('.lang-selector');
  sel.forEach(s => s.classList.toggle('open'));
}

function closeLangDropdown() {
  document.querySelectorAll('.lang-selector').forEach(s => s.classList.remove('open'));
}

// Close dropdown when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.lang-selector')) {
    closeLangDropdown();
  }
});

// ── Init i18n ─────────────────────────────────────────
function initI18n() {
  // Inject lang dropdown content
  document.querySelectorAll('.lang-dropdown').forEach(dd => {
    dd.innerHTML = buildLangDropdown();
  });

  // Set initial state
  updateLangButtonUI(currentLang);
  applyTranslations(currentLang);
}

// Export
window.switchLanguage      = switchLanguage;
window.toggleLangDropdown  = toggleLangDropdown;
window.closeLangDropdown   = closeLangDropdown;
window.initI18n            = initI18n;
window.t                   = t;
window.currentLang         = currentLang;
