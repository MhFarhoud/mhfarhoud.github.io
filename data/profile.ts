export type Lang='fa'|'en';
export type Bilingual={fa:string;en:string};
export const profile={name:{fa:'محمدحسین دیزج فرهود',en:'Mohammad Hossein Dizaj Farhoud'},github:'https://github.com/MhFarhoud',telegram:'https://t.me/MhFarhoud',instagram:'https://www.instagram.com/ArFarhoud/',scholar:'https://scholar.google.com/citations?user=_na4VyUAAAAJ&hl=fa',about:{fa:'پژوهشگر هوش مصنوعی، مهندس نرم‌افزار و زیرساخت‌های دیجیتال و مدرس فناوری. در تقاطع هوش مصنوعی و امنیت سایبری پژوهش می‌کنم و ایده‌ها را به سامانه‌های کاربردی و تجربه‌های آموزشی تبدیل می‌کنم.',en:'AI researcher, software and digital infrastructure engineer, and technology educator. I work at the intersection of artificial intelligence and cybersecurity, translating ideas into practical systems and learning experiences.'},membership:{fa:'عضو حقیقی انجمن ملی هوش مصنوعی ایران',en:'Individual member of the National Artificial Intelligence Association of Iran'}};
export const research=[{year:'2024',title:'The Future of Artificial Intelligence in Cyber Security',tag:'AI × CYBERSECURITY',description:{fa:'بررسی نقش آیندهٔ هوش مصنوعی در امنیت سایبری، پایش هوشمند تهدیدات و سامانه‌های دفاعی پیش‌بینانه.',en:'Exploring the future role of AI in cybersecurity, intelligent threat monitoring and predictive defensive systems.'}},{year:'2024',title:'Similarity of Human Nervous System with Artificial Intelligence Machine Algorithms: An Innovative Review',tag:'NEURAL COMPUTATION',description:{fa:'مروری تطبیقی بر شباهت‌های ساختاری سیستم عصبی انسان و الگوریتم‌های ماشین و شبکه‌های عصبی مصنوعی.',en:'A comparative review of structural similarities between the human nervous system, machine algorithms and artificial neural networks.'}},{year:'2025',title:'Pleasure — The Ultimate Goal',tag:'COGNITION & BEHAVIOR',description:{fa:'پژوهشی با موضوع تحلیل شناختی و مدل‌سازی رفتاری.',en:'Research concerning cognitive analysis and behavioral modeling.'}}];
export const projects=[
  {
    "name": "Project Cassandra",
    "url": "https://github.com/MhFarhoud/project-cassandra",
    "visual": "cassandra",
    "subtitle": {
      "fa": "چارچوب آزمایشی سنجش چاپلوسی در مدل‌های زبانی",
      "en": "Experimental framework for evaluating LLM sycophancy"
    },
    "category": "LLM BEHAVIOR RESEARCH",
    "description": {
      "fa": "بررسی اثر شخصیتِ القاشده در پرامپت کاربر بر احتمال موافقت مدل زبانی با پیش‌فرض‌های نادرست؛ با مقایسهٔ پاسخ‌های کنترل و آزمایش در سناریوهای واقعیات عینی.",
      "en": "Investigates how user personas in prompts influence a language model’s agreement with false premises, using paired control and treatment responses to objective factual scenarios."
    },
    "details": {
      "fa": "خط لولهٔ Python شامل اجرای قابل‌ادامه، ارزیاب قطعی مبتنی بر قواعد، آزمون McNemar و اصلاح FDR است. زیرساخت پژوهش پیاده‌سازی و پیش‌ثبت شده، اما گردآوری کامل داده‌های تجربی هنوز انجام نشده است. موضوع سنجش، رفتار قابل مشاهده است؛ نه قصد فریب یا دروغ‌گویی مدل.",
      "en": "The Python pipeline includes resumable execution, deterministic rule-based evaluation, McNemar’s test and FDR correction. Research infrastructure is implemented and preregistered; full empirical data collection is not complete. It measures observable behavior, not a model’s intent to deceive."
    },
    "tags": [
      "Python",
      "Paired trials",
      "Rule-based evaluation"
    ]
  },
  {
    "name": "PAB — Persian AI Benchmark",
    "url": "https://github.com/MhFarhoud/PAB-Persian-AI-Benchmark",
    "visual": "pab",
    "subtitle": {
      "fa": "ارزیابی بازتولیدپذیر توانمندی‌های فارسی مدل‌های هوش مصنوعی",
      "en": "Reproducible evaluation of Persian-language AI capabilities"
    },
    "category": "PERSIAN LANGUAGE EVALUATION",
    "description": {
      "fa": "چارچوب متن‌باز و محلی‌محور برای ارزیابی درک زبان فارسی، استدلال، ریاضیات، دانش واقعی و پیروی از دستور؛ با مجموعه‌دادهٔ اعتبارسنجی‌شده و موتور مستقل از ارائه‌دهنده.",
      "en": "An open-source, local-first framework evaluating Persian language understanding, reasoning, mathematics, factual knowledge and instruction following through validated datasets and a provider-independent engine."
    },
    "details": {
      "fa": "از مدل‌های محلی Ollama و APIهای سازگار با OpenAI پشتیبانی می‌کند. معیارها شامل تطابق دقیق، تطابق نرمال‌شدهٔ فارسی و دقت عددی هستند؛ گزارش‌ها بازه‌های اطمینان Wilson، تحلیل حوزه‌ها و فرادادهٔ بازتولیدپذیری هر اجرا را در بر می‌گیرند.",
      "en": "Supports local Ollama models and OpenAI-compatible APIs. Metrics include Exact Match, Persian Normalized Exact Match and Numeric Accuracy, with Wilson confidence intervals, per-domain reporting and reproducibility metadata for each run."
    },
    "tags": [
      "Python / CLI",
      "Ollama",
      "Reproducible benchmarks"
    ]
  },
  {
    "name": "SPSR",
    "url": "https://github.com/MhFarhoud/SPSR",
    "visual": "spsr",
    "subtitle": {
      "fa": "سامانهٔ پایش، ارزیابی، همسویی و فالوآپ کودک",
      "en": "Child monitoring, assessment, alignment & follow-up"
    },
    "category": "CHILD ASSESSMENT PLATFORM",
    "description": {
      "fa": "سامانه‌ای برای ثبت ارزیابی والد و مربی، محاسبهٔ نمرات TPCS/PPCS، مقایسهٔ دیدگاه‌ها و پیگیری روند پیشرفت کودک.",
      "en": "A platform for parent and teacher assessments, TPCS/PPCS scoring, comparison of perspectives and follow-up tracking of a child’s progress."
    },
    "details": {
      "fa": "شامل موتور امتیازدهی با زیرمقیاس‌ها و نقاط برش، موتور همسویی و موتور فالوآپ است. رابط React و TypeScript به API مبتنی بر Express متصل می‌شود؛ فرم‌های ثبت‌شده قفل و تغییرات در سابقهٔ ممیزی ثبت می‌شوند.",
      "en": "Includes scoring with subscales and cutoffs, an alignment engine and a follow-up engine. A React and TypeScript interface connects to an Express API; submitted forms are locked and changes recorded in an audit log."
    },
    "tags": [
      "React / TypeScript",
      "Express",
      "TPCS / PPCS"
    ]
  }
];
export const experience=[{role:{fa:'کارشناس فناوری اطلاعات',en:'IT & Systems Administrator'},org:{fa:'مؤسسه آموزش شهر',en:'Shahr Education Institute'},place:{fa:'تهران، ایران',en:'Tehran, Iran'},text:{fa:'یکپارچه‌سازی زیرساخت وب شبکه آموزش شهر، نگهداری و رفع اشکال سامانه‌های نرم‌افزاری و مدیریت امنیت داده‌ها.',en:'Integration of Shahr Education Network web infrastructure, software maintenance and debugging, and data security management.'},tags:['IT infrastructure','Web systems','Data security']},{role:{fa:'مهندسی وب و سئوی بین‌المللی',en:'Web Engineering & International SEO'},org:{fa:'MhFarhoud / ITF Group',en:'MhFarhoud / ITF Group'},place:{fa:'وب و پلتفرم‌های چندزبانه',en:'Web & multilingual platforms'},text:{fa:'طراحی پورتال‌های وب و معماری چندزبانه برای رویدادها و نمایشگاه‌های منطقه CIS و بازار صادرات.',en:'Web portal design and multilingual architecture for CIS regional exhibitions, events and export markets.'},tags:['Web architecture','Multilingual systems','International SEO']}];
export const teaching=[{title:{fa:'از اولین خط کد',en:'From the first line of code'},school:{fa:'دبستان فروغ دانش، آمل',en:'Forough Danesh Elementary School, Amol'},text:{fa:'مفاهیم پایهٔ کامپیوتر، برنامه‌نویسی و آشنایی با هوش مصنوعی برای دانش‌آموزان ابتدایی.',en:'Computer fundamentals, programming and introductions to artificial intelligence for elementary students.'}},{title:{fa:'تا درک فناوری‌های فردا',en:'To understanding tomorrow’s technology'},school:{fa:'دبیرستان شاهد و دبیرستان‌های دخترانه',en:'Shahed High School & girls’ high schools'},text:{fa:'کارگاه‌ها و نشست‌های آشنایی با مبانی هوش مصنوعی و فناوری‌های نوین.',en:'Workshops and introductory sessions on artificial intelligence and emerging technologies.'}}];
export const recognition=[{kind:{fa:'پشتیبانی آموزشی',en:'EDUCATIONAL SUPPORT'},title:{fa:'نامهٔ پشتیبانی فرمانداری محمودآباد',en:'Official letter of educational support'},desc:{fa:'حمایت از همکاری آموزشی برای برگزاری کلاس‌های فناوری در مدارس؛ آذر ۱۴۰۲.',en:'Mahmoudabad Governor’s Office support for technology education in schools; December 2023.'}},{kind:{fa:'تقدیر رسمی',en:'OFFICIAL RECOGNITION'},title:{fa:'لوح تقدیر روز خبرنگار',en:'Journalist’s Day recognition'},desc:{fa:'تقدیر فرمانداری محمودآباد از فعالیت در عرصهٔ اطلاع‌رسانی.',en:'Recognition from the Mahmoudabad Governor’s Office for work in journalism.'}},{kind:{fa:'خبرنگاری',en:'JOURNALISM'},title:{fa:'خبرنگار برتر پانا در مازندران',en:'PANA top journalist recognition'},desc:{fa:'تجلیل از فعالیت خبرنگاری در استان مازندران در آیین روز خبرنگار.',en:'Recognition of journalism work in Mazandaran at the Journalist’s Day ceremony.'}}];
