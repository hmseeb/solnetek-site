/* ============================================================
   SOLNETEK – Main Script
   ============================================================ */

(function () {
  'use strict';

  /* ---------- EN / ES Translations ---------- */
  var translations = {
    en: {
      'nav-home': 'Home',
      'nav-services': 'Services',
      'nav-about': 'About',
      'nav-contact': 'Contact',
      'header-cta': 'Get Started',

      'hero-badge': 'Verified Credentials &bull; LCCA-Led &bull; For Growing Businesses',
      'hero-title': 'Cybersecurity &amp; Compliance<br /><span class="hero__title--accent">for Every Mission</span>',
      'hero-subtitle': 'Atlanta-based, LCCA-led CMMC compliance and cybersecurity consulting for the Defense Industrial Base, government agencies, and small businesses nationwide.',
      'hero-cta': 'Do the math \u2014 Get Free Assessment',
      'hero-note': '0 minutes commitment &bull; LCCA-led &bull; No obligation',

      'trust-1': 'LCCA-Certified Leadership',
      'trust-2': 'Certified Ethical Hacker (CEH)',
      'trust-3': 'CISSP Credentialed',
      'trust-4': 'Atlanta-Based, Nationwide Service',

      'services-label': 'What We Do',
      'services-title': 'Comprehensive Cybersecurity &amp; Compliance Services',
      'services-desc': 'Solnetek delivers mission-critical cybersecurity solutions tailored to the unique demands of defense contractors, government agencies, and growth-stage businesses.',

      's1-title': 'CMMC Compliance Consulting',
      's1-desc': 'Navigate the Cybersecurity Maturity Model Certification (CMMC) framework with confidence. We guide Defense Industrial Base (DIB) contractors through every level of certification \u2014 from gap assessment to full compliance readiness.',
      's1-li1': 'CMMC Level 1 &amp; Level 2 Readiness',
      's1-li2': 'Gap Analysis &amp; Remediation Roadmap',
      's1-li3': 'System Security Plan (SSP) Development',
      's1-li4': 'SPRS Score Assessment',
      's1-link': 'Get CMMC Assessment',

      's2-title': 'Penetration Testing &amp; Ethical Hacking',
      's2-desc': 'Our Certified Ethical Hackers (CEH) simulate real-world attacks to uncover vulnerabilities before adversaries do. We deliver detailed findings and actionable remediation steps to harden your environment.',
      's2-li1': 'Network &amp; Application Penetration Testing',
      's2-li2': 'Social Engineering Assessments',
      's2-li3': 'Vulnerability Scanning &amp; Analysis',
      's2-li4': 'Detailed Risk Reports',
      's2-link': 'Schedule a Pentest',

      's3-title': 'Risk Management &amp; Security Strategy',
      's3-desc': 'Build a resilient security posture with a comprehensive risk management strategy. Our CISSP-credentialed team aligns your security program to NIST frameworks, helping you manage threats effectively and meet regulatory obligations.',
      's3-li1': 'NIST SP 800-171 &amp; RMF Alignment',
      's3-li2': 'Risk Assessment &amp; Mitigation Planning',
      's3-li3': 'Security Policy Development',
      's3-li4': 'Incident Response Planning',
      's3-link': 'Start Risk Assessment',

      's4-title': 'Small Business Cybersecurity',
      's4-desc': "You don't need a Fortune 500 budget to have enterprise-grade security. Solnetek offers right-sized cybersecurity programs for growing businesses \u2014 protecting your data, customers, and reputation without breaking the bank.",
      's4-li1': 'Security Awareness Training',
      's4-li2': 'Email &amp; Endpoint Protection',
      's4-li3': 'Compliance Roadmapping',
      's4-li4': 'vCISO Advisory Services',
      's4-link': 'Protect My Business',

      's5-title': 'Government Agency Consulting',
      's5-desc': 'Solnetek supports federal, state, and local government agencies in building and maintaining robust cybersecurity programs that meet federal mandates, protect sensitive data, and uphold public trust.',
      's5-li1': 'FedRAMP &amp; FISMA Readiness',
      's5-li2': 'Authority to Operate (ATO) Support',
      's5-li3': 'Continuous Monitoring Programs',
      's5-li4': 'Security Control Assessments',
      's5-link': 'Agency Inquiry',

      's6-title': 'Security Training &amp; Awareness',
      's6-desc': 'Empower your team to be the first line of defense. Solnetek delivers customized security awareness training programs that transform employees from a vulnerability into a security asset.',
      's6-li1': 'Phishing Simulation Campaigns',
      's6-li2': 'Role-Based Security Training',
      's6-li3': 'CMMC Workforce Education',
      's6-li4': 'Ongoing Awareness Programs',
      's6-link': 'Train My Team',

      'cta-title': 'Do the math.',
      'cta-desc': 'A single data breach costs small businesses an average of $3.31 million. An assessment with Solnetek costs nothing. Schedule your free, no-obligation cybersecurity assessment today.',
      'cta-btn': 'Get Free Assessment',

      'about-location': 'Atlanta, GA',
      'cred1-name': 'Lead Cybersecurity Compliance Advisor',
      'cred2-name': 'Certified Cybersecurity Advisor',
      'cred3-name': 'Certified Cybersecurity Professional',

      'about-label': 'About Us',
      'about-title': 'Mission-Ready Cybersecurity, Built for Compliance',
      'about-p1': 'Solnetek is an Atlanta-based cybersecurity and compliance consulting firm led by Juan Velasquez, a Lead CMMC Certified Assessor (LCCA). We specialize in helping Defense Industrial Base (DIB) contractors, government agencies, and small businesses build the security programs they need to win contracts, pass audits, and protect sensitive data.',
      'about-p2': 'Juan Velasquez embarked on his Information Technology journey in 1995, a time when technology was just beginning to take its first steps. His foresight was evident from the start, as he grasped the significance of robust fundamental knowledge in programming, computer networks and systems, system administration, database systems, security, and web application development.',
      'about-p3': 'His understanding of the role of education in safeguarding not just friends, but entire communities and national infrastructure, is a testament to the profound impact of his knowledge and expertise. As a project lead in network design, implementation, redundancy, security, compliance, regulation, and all relevant aspects of end-to-end continuity, Juan has mentored team members and tackled escalated, complex issues with proven leadership.',
      'about-p4': "He deeply appreciates the pivotal role of documentation and training \u2014 the bedrock of Solnetek's commitment to delivering successful implementations and the highest level of professional services to every client.",
      'stat1-label': 'Clients Supported',
      'stat2-label': 'Compliance Experts',
      'stat3-label': 'Defense Industry Focus',
      'about-cta': 'Work With Us',

      'ind-label': 'Who We Serve',
      'ind-title': 'Tailored for Your Industry',
      'ind1-title': 'Defense Industrial Base',
      'ind1-desc': 'CMMC compliance, DFARS 252.204-7012 adherence, and full DoD contractor support from pre-assessment to certification.',
      'ind2-title': 'Government Agencies',
      'ind2-desc': 'Federal, state, and local government cybersecurity programs, ATO support, FedRAMP readiness, and continuous monitoring.',
      'ind3-title': 'Growing Businesses',
      'ind3-desc': 'Right-sized security programs, vCISO services, and compliance roadmaps that scale with your business as you grow.',

      'contact-label': 'Get In Touch',
      'contact-title': 'Ready to Secure Your Mission?',
      'contact-intro': 'Schedule your free, no-obligation cybersecurity assessment. Our LCCA-led team will analyze your current posture and show you exactly where you stand \u2014 and where you need to go.',
      'contact-call-label': 'Call Us',
      'contact-email-label': 'Email Us',
      'contact-loc-label': 'Location',
      'contact-loc-sub': 'Serving Clients Nationwide',

      'form-title': 'Get Your Free Assessment',
      'form-note': 'No obligation &bull; LCCA-led &bull; Quick turnaround',
      'form-fname-label': 'First Name <span aria-hidden="true">*</span>',
      'form-lname-label': 'Last Name <span aria-hidden="true">*</span>',
      'form-email-label': 'Business Email <span aria-hidden="true">*</span>',
      'form-phone-label': 'Phone Number',
      'form-company-label': 'Company / Organization <span aria-hidden="true">*</span>',
      'form-service-label': "I'm interested in...",
      'form-opt0': 'Select a service',
      'form-opt1': 'CMMC Compliance Consulting',
      'form-opt2': 'Penetration Testing',
      'form-opt3': 'Risk Management &amp; Strategy',
      'form-opt4': 'Small Business Cybersecurity',
      'form-opt5': 'Government Agency Consulting',
      'form-opt6': 'Security Training &amp; Awareness',
      'form-opt7': 'Free Assessment (Not Sure)',
      'form-msg-label': 'Tell us about your needs',
      'form-submit': 'Request Free Assessment',
      'form-success': "Thank you! We'll be in touch within one business day.",
      'form-fname-ph': 'Jane',
      'form-lname-ph': 'Smith',
      'form-email-ph': 'jane@yourcompany.com',
      'form-company-ph': 'Your Company Name',
      'form-msg-ph': "Briefly describe your organization's security goals or compliance challenges...",

      'footer-tagline': 'Cybersecurity &amp; Compliance for Every Mission.',
      'footer-address': 'Atlanta, Georgia \u2014 Serving Clients Nationwide',
      'footer-services-hd': 'Services',
      'footer-s1': 'CMMC Compliance',
      'footer-s2': 'Penetration Testing',
      'footer-s3': 'Risk Management',
      'footer-s4': 'Small Business Security',
      'footer-s5': 'Government Consulting',
      'footer-s6': 'Security Training',
      'footer-company-hd': 'Company',
      'footer-c1': 'About Us',
      'footer-c2': 'Contact',
      'footer-c3': 'Free Assessment',
      'footer-creds-hd': 'Credentials',
      'footer-cr1': 'LCCA-Led',
      'footer-cr2': 'Certified Ethical Hacker (CEH)',
      'footer-cr3': 'CISSP',
      'footer-cr4': 'CMMC Compliance',
      'footer-cr5': 'NIST SP 800-171',
      'footer-rights': 'All rights reserved.',
      'footer-privacy': 'Privacy Policy',
      'footer-terms': 'Terms of Service'
    },

    es: {
      'nav-home': 'Inicio',
      'nav-services': 'Servicios',
      'nav-about': 'Nosotros',
      'nav-contact': 'Contacto',
      'header-cta': 'Comenzar',

      'hero-badge': 'Credenciales Verificadas &bull; Liderado por LCCA &bull; Para Empresas en Crecimiento',
      'hero-title': 'Ciberseguridad y Cumplimiento<br /><span class="hero__title--accent">para Cada Misi\u00f3n</span>',
      'hero-subtitle': 'Con sede en Atlanta, liderado por LCCA, consultor\u00eda de cumplimiento CMMC y ciberseguridad para la Base Industrial de Defensa, agencias gubernamentales y peque\u00f1as empresas en todo el pa\u00eds.',
      'hero-cta': 'Haz los n\u00fameros \u2014 Obt\u00e9n una Evaluaci\u00f3n Gratuita',
      'hero-note': 'Sin compromiso &bull; Liderado por LCCA &bull; Sin obligaci\u00f3n',

      'trust-1': 'Liderazgo Certificado por LCCA',
      'trust-2': 'Hacker \u00c9tico Certificado (CEH)',
      'trust-3': 'Credencial CISSP',
      'trust-4': 'Con Sede en Atlanta, Servicio Nacional',

      'services-label': 'Lo Que Hacemos',
      'services-title': 'Servicios Integrales de Ciberseguridad y Cumplimiento',
      'services-desc': 'Solnetek ofrece soluciones de ciberseguridad de misi\u00f3n cr\u00edtica adaptadas a las demandas \u00fanicas de contratistas de defensa, agencias gubernamentales y empresas en crecimiento.',

      's1-title': 'Consultor\u00eda de Cumplimiento CMMC',
      's1-desc': 'Navegue el marco de Certificaci\u00f3n del Modelo de Madurez de Ciberseguridad (CMMC) con confianza. Guiamos a los contratistas de la Base Industrial de Defensa (DIB) a trav\u00e9s de cada nivel de certificaci\u00f3n, desde la evaluaci\u00f3n de brechas hasta la preparaci\u00f3n para el cumplimiento total.',
      's1-li1': 'Preparaci\u00f3n para Nivel 1 y Nivel 2 de CMMC',
      's1-li2': 'An\u00e1lisis de Brechas y Hoja de Ruta de Remediaci\u00f3n',
      's1-li3': 'Desarrollo del Plan de Seguridad del Sistema (SSP)',
      's1-li4': 'Evaluaci\u00f3n de Puntuaci\u00f3n SPRS',
      's1-link': 'Obtener Evaluaci\u00f3n CMMC',

      's2-title': 'Pruebas de Penetraci\u00f3n y Hacking \u00c9tico',
      's2-desc': 'Nuestros Hackers \u00c9ticos Certificados (CEH) simulan ataques del mundo real para descubrir vulnerabilidades antes que los adversarios. Entregamos hallazgos detallados y pasos de remediaci\u00f3n accionables para fortalecer su entorno.',
      's2-li1': 'Pruebas de Penetraci\u00f3n de Redes y Aplicaciones',
      's2-li2': 'Evaluaciones de Ingenier\u00eda Social',
      's2-li3': 'Escaneo y An\u00e1lisis de Vulnerabilidades',
      's2-li4': 'Informes Detallados de Riesgos',
      's2-link': 'Programar una Prueba de Penetraci\u00f3n',

      's3-title': 'Gesti\u00f3n de Riesgos y Estrategia de Seguridad',
      's3-desc': 'Construya una postura de seguridad resiliente con una estrategia integral de gesti\u00f3n de riesgos. Nuestro equipo con credencial CISSP alinea su programa de seguridad con los marcos NIST, ayud\u00e1ndole a gestionar amenazas eficazmente y cumplir con las obligaciones regulatorias.',
      's3-li1': 'Alineaci\u00f3n con NIST SP 800-171 y RMF',
      's3-li2': 'Evaluaci\u00f3n de Riesgos y Planificaci\u00f3n de Mitigaci\u00f3n',
      's3-li3': 'Desarrollo de Pol\u00edticas de Seguridad',
      's3-li4': 'Planificaci\u00f3n de Respuesta a Incidentes',
      's3-link': 'Iniciar Evaluaci\u00f3n de Riesgos',

      's4-title': 'Ciberseguridad para Peque\u00f1as Empresas',
      's4-desc': 'No necesita un presupuesto de Fortune 500 para tener seguridad de nivel empresarial. Solnetek ofrece programas de ciberseguridad del tama\u00f1o adecuado para empresas en crecimiento: protegiendo sus datos, clientes y reputaci\u00f3n sin gastar una fortuna.',
      's4-li1': 'Capacitaci\u00f3n en Concienciaci\u00f3n sobre Seguridad',
      's4-li2': 'Protecci\u00f3n de Correo Electr\u00f3nico y Endpoints',
      's4-li3': 'Hoja de Ruta de Cumplimiento',
      's4-li4': 'Servicios de Asesor\u00eda vCISO',
      's4-link': 'Proteger Mi Empresa',

      's5-title': 'Consultor\u00eda para Agencias Gubernamentales',
      's5-desc': 'Solnetek apoya a agencias gubernamentales federales, estatales y locales en la construcci\u00f3n y mantenimiento de programas robustos de ciberseguridad que cumplen con los mandatos federales, protegen datos sensibles y mantienen la confianza p\u00fablica.',
      's5-li1': 'Preparaci\u00f3n para FedRAMP y FISMA',
      's5-li2': 'Soporte de Autorizaci\u00f3n para Operar (ATO)',
      's5-li3': 'Programas de Monitoreo Continuo',
      's5-li4': 'Evaluaciones de Controles de Seguridad',
      's5-link': 'Consulta para Agencias',

      's6-title': 'Capacitaci\u00f3n y Concienciaci\u00f3n en Seguridad',
      's6-desc': 'Capacite a su equipo para ser la primera l\u00ednea de defensa. Solnetek ofrece programas personalizados de capacitaci\u00f3n en concienciaci\u00f3n sobre seguridad que transforman a los empleados de una vulnerabilidad en un activo de seguridad.',
      's6-li1': 'Campa\u00f1as de Simulaci\u00f3n de Phishing',
      's6-li2': 'Capacitaci\u00f3n en Seguridad Basada en Roles',
      's6-li3': 'Educaci\u00f3n de la Fuerza Laboral CMMC',
      's6-li4': 'Programas Continuos de Concienciaci\u00f3n',
      's6-link': 'Capacitar a Mi Equipo',

      'cta-title': 'Haz los n\u00fameros.',
      'cta-desc': 'Una sola violaci\u00f3n de datos le cuesta a las peque\u00f1as empresas un promedio de $3.31 millones. Una evaluaci\u00f3n con Solnetek no cuesta nada. Programe su evaluaci\u00f3n de ciberseguridad gratuita y sin obligaci\u00f3n hoy mismo.',
      'cta-btn': 'Obtener Evaluaci\u00f3n Gratuita',

      'about-location': 'Atlanta, GA',
      'cred1-name': 'Asesor L\u00edder de Cumplimiento en Ciberseguridad',
      'cred2-name': 'Asesor Certificado en Ciberseguridad',
      'cred3-name': 'Profesional Certificado en Ciberseguridad',

      'about-label': 'Sobre Nosotros',
      'about-title': 'Ciberseguridad Lista para la Misi\u00f3n, Construida para el Cumplimiento',
      'about-p1': 'Solnetek es una firma de consultor\u00eda de ciberseguridad y cumplimiento con sede en Atlanta, liderada por Juan Velasquez, un Evaluador Certificado L\u00edder CMMC (LCCA). Nos especializamos en ayudar a contratistas de la Base Industrial de Defensa (DIB), agencias gubernamentales y peque\u00f1as empresas a construir los programas de seguridad que necesitan para ganar contratos, pasar auditor\u00edas y proteger datos sensibles.',
      'about-p2': 'Juan Velasquez comenz\u00f3 su viaje en Tecnolog\u00eda de la Informaci\u00f3n en 1995, cuando la tecnolog\u00eda apenas daba sus primeros pasos. Su visi\u00f3n fue evidente desde el principio, al comprender la importancia del conocimiento fundamental s\u00f3lido en programaci\u00f3n, redes y sistemas inform\u00e1ticos, administraci\u00f3n de sistemas, bases de datos, seguridad y desarrollo de aplicaciones web.',
      'about-p3': 'Su comprensi\u00f3n del papel de la educaci\u00f3n en la protecci\u00f3n no solo de amigos, sino de comunidades enteras e infraestructura nacional, es un testimonio del profundo impacto de su conocimiento y experiencia. Como l\u00edder de proyectos en dise\u00f1o de redes, implementaci\u00f3n, redundancia, seguridad, cumplimiento, regulaci\u00f3n y todos los aspectos relevantes de la continuidad de extremo a extremo, Juan ha mentoreado a miembros del equipo y abordado problemas complejos escalados con liderazgo probado.',
      'about-p4': "Aprecia profundamente el papel fundamental de la documentaci\u00f3n y la capacitaci\u00f3n \u2014 la base del compromiso de Solnetek de ofrecer implementaciones exitosas y el m\u00e1s alto nivel de servicios profesionales a cada cliente.",
      'stat1-label': 'Clientes Apoyados',
      'stat2-label': 'Expertos en Cumplimiento',
      'stat3-label': 'Enfoque en la Industria de Defensa',
      'about-cta': 'Trabajar Con Nosotros',

      'ind-label': 'A Qui\u00e9n Servimos',
      'ind-title': 'Adaptado para Su Industria',
      'ind1-title': 'Base Industrial de Defensa',
      'ind1-desc': 'Cumplimiento CMMC, adherencia a DFARS 252.204-7012 y soporte completo para contratistas del DoD desde la evaluaci\u00f3n previa hasta la certificaci\u00f3n.',
      'ind2-title': 'Agencias Gubernamentales',
      'ind2-desc': 'Programas de ciberseguridad para gobiernos federales, estatales y locales, soporte ATO, preparaci\u00f3n para FedRAMP y monitoreo continuo.',
      'ind3-title': 'Empresas en Crecimiento',
      'ind3-desc': 'Programas de seguridad del tama\u00f1o adecuado, servicios vCISO y hojas de ruta de cumplimiento que escalan con su empresa a medida que crece.',

      'contact-label': 'Cont\u00e1ctenos',
      'contact-title': '\u00bfListo para Asegurar Su Misi\u00f3n?',
      'contact-intro': 'Programe su evaluaci\u00f3n de ciberseguridad gratuita y sin obligaci\u00f3n. Nuestro equipo liderado por LCCA analizar\u00e1 su postura actual y le mostrar\u00e1 exactamente d\u00f3nde est\u00e1 y hacia d\u00f3nde debe ir.',
      'contact-call-label': 'Ll\u00e1menos',
      'contact-email-label': 'Env\u00edenos un Correo',
      'contact-loc-label': 'Ubicaci\u00f3n',
      'contact-loc-sub': 'Atendiendo Clientes en Todo el Pa\u00eds',

      'form-title': 'Obtenga Su Evaluaci\u00f3n Gratuita',
      'form-note': 'Sin obligaci\u00f3n &bull; Liderado por LCCA &bull; Respuesta r\u00e1pida',
      'form-fname-label': 'Nombre <span aria-hidden="true">*</span>',
      'form-lname-label': 'Apellido <span aria-hidden="true">*</span>',
      'form-email-label': 'Correo Electr\u00f3nico Empresarial <span aria-hidden="true">*</span>',
      'form-phone-label': 'N\u00famero de Tel\u00e9fono',
      'form-company-label': 'Empresa / Organizaci\u00f3n <span aria-hidden="true">*</span>',
      'form-service-label': 'Me interesa...',
      'form-opt0': 'Seleccionar un servicio',
      'form-opt1': 'Consultor\u00eda de Cumplimiento CMMC',
      'form-opt2': 'Pruebas de Penetraci\u00f3n',
      'form-opt3': 'Gesti\u00f3n de Riesgos y Estrategia',
      'form-opt4': 'Ciberseguridad para Peque\u00f1as Empresas',
      'form-opt5': 'Consultor\u00eda para Agencias Gubernamentales',
      'form-opt6': 'Capacitaci\u00f3n y Concienciaci\u00f3n en Seguridad',
      'form-opt7': 'Evaluaci\u00f3n Gratuita (No Estoy Seguro)',
      'form-msg-label': 'Cu\u00e9ntenos sobre sus necesidades',
      'form-submit': 'Solicitar Evaluaci\u00f3n Gratuita',
      'form-success': '\u00a1Gracias! Nos pondremos en contacto dentro de un d\u00eda h\u00e1bil.',
      'form-fname-ph': 'Juan',
      'form-lname-ph': 'Garc\u00eda',
      'form-email-ph': 'juan@suempresa.com',
      'form-company-ph': 'Nombre de Su Empresa',
      'form-msg-ph': 'Describa brevemente los objetivos de seguridad o los desaf\u00edos de cumplimiento de su organizaci\u00f3n...',

      'footer-tagline': 'Ciberseguridad y Cumplimiento para Cada Misi\u00f3n.',
      'footer-address': 'Atlanta, Georgia \u2014 Atendiendo Clientes en Todo el Pa\u00eds',
      'footer-services-hd': 'Servicios',
      'footer-s1': 'Cumplimiento CMMC',
      'footer-s2': 'Pruebas de Penetraci\u00f3n',
      'footer-s3': 'Gesti\u00f3n de Riesgos',
      'footer-s4': 'Seguridad para Peque\u00f1as Empresas',
      'footer-s5': 'Consultor\u00eda Gubernamental',
      'footer-s6': 'Capacitaci\u00f3n en Seguridad',
      'footer-company-hd': 'Empresa',
      'footer-c1': 'Sobre Nosotros',
      'footer-c2': 'Contacto',
      'footer-c3': 'Evaluaci\u00f3n Gratuita',
      'footer-creds-hd': 'Credenciales',
      'footer-cr1': 'Liderado por LCCA',
      'footer-cr2': 'Hacker \u00c9tico Certificado (CEH)',
      'footer-cr3': 'CISSP',
      'footer-cr4': 'Cumplimiento CMMC',
      'footer-cr5': 'NIST SP 800-171',
      'footer-rights': 'Todos los derechos reservados.',
      'footer-privacy': 'Pol\u00edtica de Privacidad',
      'footer-terms': 'T\u00e9rminos de Servicio'
    }
  };

  var currentLang = 'en';

  function applyTranslations(lang) {
    var dict = translations[lang];
    if (!dict) return;

    // Text / HTML elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update toggle active state
    var toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      toggleBtn.querySelector('.lang-toggle__en').classList.toggle('lang-toggle--active', lang === 'en');
      toggleBtn.querySelector('.lang-toggle__es').classList.toggle('lang-toggle--active', lang === 'es');
    }
  }

  /* ---------- Language Toggle ---------- */
  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      applyTranslations(currentLang);
    });
  }

  // Apply default language on load
  applyTranslations(currentLang);

  /* ---------- Footer Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header Scroll Effect ---------- */
  const header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Active Nav Link on Scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  function highlightNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionH = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionH) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  /* ---------- Hamburger / Mobile Nav ---------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      nav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close on nav link click
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (
        nav.classList.contains('open') &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Smooth Anchor Scrolling ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
          10
        ) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Contact Form ---------- */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        // Trigger browser native validation UI
        form.reportValidity();
        return;
      }

      // Simulate submission (no backend)
      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending…</span>';

      setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formSuccess.hidden = false;
        form.reset();
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1200);
    });
  }

  /* ---------- Intersection Observer – Fade-in Animations ---------- */
  if ('IntersectionObserver' in window) {
    const style = document.createElement('style');
    style.textContent = [
      '.fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.55s ease, transform 0.55s ease; }',
      '.fade-in.visible { opacity: 1; transform: translateY(0); }'
    ].join('');
    document.head.appendChild(style);

    const animEls = document.querySelectorAll(
      '.service-card, .industry-card, .about__text-col, .about__img-col, .cred-card, .contact-detail'
    );

    animEls.forEach(function (el) {
      el.classList.add('fade-in');
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animEls.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
