const translations = {
    en: {
        btn: "Switch to Arabic / العربية",

        // ================= LEVEL 1 DATA =================
        mainTitle: "51Talk Academy L1", mainSubtitle: "Scientific Curriculum Design for Quantifiable Excellence",
        metric1Label: "Lessons 📖", metric1HoverTitle: "First 5 Lessons:",
        metric1Li1: "L1: Alphabet, Numbers & Days", metric1Li2: "L2: Classroom Objects & Grammar", metric1Li3: "L3: Spelling & Personal Info", metric1Li4: "L4: Countries & Nationalities", metric1Li5: "L5: Review & Stage Test 1",
        metric2Label: "Learning Stages 🔄", metric2HoverTitle: "Progressive Themes:",
        metric2Li1: "Stage 1: Foundations (Self/Family)", metric2Li2: "Stage 2: Daily Life (Food/School)", metric2Li3: "Stage 3: Activities (Health/Tech)", metric2Li4: "Stage 4: Community (Travel/Retail)", metric2Li5: "Stage 5: World View (Nature/Culture)",
        metric3Label: "Unit Topics 🌍", metric3HoverTitle: "First 5 Units:",
        metric3Li1: "U0: Classroom Basics", metric3Li2: "U1: All About Me", metric3Li3: "U2: Family & Feelings", metric3Li4: "U3: My Home & Rooms", metric3Li5: "U4: School Bag & Belongings",
        metric4Label: "CEFR Mastery 🏅", metric4HoverTitle: "International Alignment:",
        metric4Li1: "Saudi Public G4-G6 Goal", metric4Li2: "Int'l School G1-G2 Goal", metric4Li3: "Cambridge Pre-A1 Standard",
        loopTitle: "Internal Learning Loop Design", loopSubtitle: "A Scientific 5-Step Cycle for Guaranteed Retention",
        loop1Title: "Input 1 & 2", loop1Desc: "Knowledge Acquisition: Vocabulary & Grammar Building",
        loop2Title: "Output 1 & 2", loop2Desc: "Skill Application: Listening, Speaking & Applied Writing",
        loop3Title: "Review", loop3Desc: "Systematic Consolidation: Closing the Knowledge Loop",
        loop4Title: "Life Skills", loop4Desc: "Practical Competency: Innovation, ICT & Global Culture",
        loop5Title: "Final Test", loop5Desc: "Outcome Assessment & Proficiency Report",
        stageSectionTitle: "5 Stages of Level 1 Content",
        stage1a: "Self-Intro", stage1b: "Family", stage1c: "Home", stage2a: "Abilities", stage2b: "Food", stage2c: "School", stage3a: "Health", stage3b: "Technology", stage3c: "Professions", stage4a: "Places", stage4b: "Transportation", stage4c: "Shopping", stage5a: "World View", stage5b: "Nature", stage5c: "Culture",
        acadBoxTitle: "Academic Performance",
        acadText1Bold: "51Talk Academy L1", acadText1: "covers 100% of", acadText2Bold: "Saudi Public G4-G6", acadText2: "requirements and serves as a vital supplement for", acadText3Bold: "International G1-G2", acadText3: "curricula.",
        keyOutputs: "Key Practical Outputs:",
        outputLi1: "Identify 800+ vocabulary across 20 global themes", outputLi2: "Write formatted blogs, party invitations, and reviews", outputLi3: "Master ICT literacy and internet safety skills", outputLi4: "Compare UK, USA, and NZ cultures with local perspectives",
        footerTitle: "Advancing to Level 2", footerSubtitle: "Transitioning from Basic Identification to Narrative Fluency (CEFR A2)",
        foot1Title: "Linguistic Shift", foot1Desc: "Mastering Past Tenses for storytelling and personal history.",
        foot2Title: "Social Interaction", foot2Desc: "Engaging in sustained social interaction and detailed opinions.",
        foot3Title: "Exam Target", foot3Desc: "Comprehensive preparation for the Cambridge KET (A2) standard.",
        L1_chartLabels: ['Listening', 'Speaking', 'Reading', 'Writing', 'Grammar', 'Life Skills', 'Culture'], L1_chartLegend: '51Talk L1 Proficiency', L1_chartData: [90, 85, 82, 78, 95, 88, 92],

        // ================= LEVEL 2 DATA =================
        L2_mainTitle: "51Talk Academy L2", L2_mainSubtitle: "Narrative Excellence & Analytical Fluency Design",
        L2_metric1Label: "Lessons 📚", L2_metric1HoverTitle: "Advanced Unit Logic:",
        L2_metric1Li1: "Lessons 1-10: Past Simple & Stories", L2_metric1Li2: "Lessons 11-15: Comparisons & Tech", L2_metric1Li3: "Lessons 16-20: Nature & Mysteries", L2_metric1Li4: "Lessons 21-25: Future Plans & Test", L2_metric1Li5: "Focus: Paragraph Logic",
        L2_metric2Label: "Learning Stages 🔄", L2_metric2HoverTitle: "Progressive Mastery:",
        L2_metric2Li1: "Stage 1: Past simple of 'be' & Music", L2_metric2Li2: "Stage 2: History, Holidays & Careers", L2_metric2Li3: "Stage 3: Health, Tech & Society", L2_metric2Li4: "Stage 4: Past Cont. & Environmentalism", L2_metric2Li5: "Stage 5: Future with 'going to'",
        L2_metric3Label: "Thematic Units 🌍", L2_metric3HoverTitle: "Unit Highlights:",
        L2_metric3Li1: "U1: Sports & Games", L2_metric3Li2: "U5: Moments in History", L2_metric3Li3: "U9: Transport", L2_metric3Li4: "U12: Latest Technology", L2_metric3Li5: "U15: Mysteries in Nature",
        L2_metric4Label: "CEFR Mastery 🏅", L2_metric4HoverTitle: "Academic Alignment:",
        L2_metric4Li1: "Saudi Public G7-G9 Goal", L2_metric4Li2: "Int'l School G3-G4 Goal", L2_metric4Li3: "Cambridge KET (Key) Standard",
        L2_loopTitle: "Internal Learning Loop Design", L2_loopSubtitle: "Bridging Simple Identification to Logical Narrative",
        L2_loop1Title: "Input 1 & 2", L2_loop1Desc: "Knowledge Expansion: Adverbs, Past Tense & Compound Nouns",
        L2_loop2Title: "Output 1 & 2", L2_loop2Desc: "Narrative Power: Event Presentation & Story Writing",
        L2_loop3Title: "Review", L2_loop3Desc: "Accuracy Focus: Correcting Grammar in Context",
        L2_loop4Title: "Life Skills", L2_loop4Desc: "Critical Competency: ICT Blogging & Personal Well-being",
        L2_loop5Title: "Outcome Test", L2_loop5Desc: "KET Readiness & Complex Sentence Reporting",
        L2_stageSectionTitle: "5 Stages of Level 2 Content",
        L2_s1a: "Past Simple (be)", L2_s1b: "Music", L2_s1c: "Daily Events", L2_s2a: "History", L2_s2b: "Holiday Jobs", L2_s2c: "Rickshaws", L2_s3a: "Comparatives", L2_s3b: "Gadgets", L2_s3c: "Healthy Living", L2_s4a: "Past Continuous", L2_s4b: "Nature", L2_s4c: "Animal Welfare", L2_s5a: "Going to (Future)", L2_s5b: "Social Rules", L2_s5c: "Digital Blogs",
        L2_acadBoxTitle: "Narrative Mastery",
        L2_acadText1Bold: "51Talk Academy L2", L2_acadText1: "shifts from 'What is this?' to 'What happened?'. It aligns with", L2_acadText2Bold: "Saudi G7-G9", L2_acadText2: "standards and", L2_acadText3Bold: "Int'l G3-G4", L2_acadText3: "curricula.",
        L2_keyOutputs: "Level 2 Milestones:",
        L2_outputLi1: "Narrate historical events and personal stories using Past Simple.", L2_outputLi2: "Compare technology and products using Superlatives.", L2_outputLi3: "Write cohesive paragraphs for reviews, blogs, and emails.", L2_outputLi4: "Discuss global issues like environment and animal protection.",
        L2_footerTitle: "Advancing to Level 3", L2_footerSubtitle: "Transitioning from Fluency to Independent Critical Thinking (CEFR B1 Transition)",
        L2_foot1Title: "Linguistic Depth", L2_foot1Desc: "Introducing Perfect Tenses and Conditional logic.",
        L2_foot2Title: "Logical Debate", L2_foot2Desc: "Engaging in abstract reasoning and persuasive speech.",
        L2_foot3Title: "Academic Goal", L2_foot3Desc: "Moving towards Cambridge PET (B1) proficiency standards.",
        L2_chartLabels: ['Narrative Logic', 'Speaking Fluency', 'Grammar Range', 'Writing Structure', 'Abstract Vocab', 'Problem Solving', 'Social Awareness'], L2_chartLegend: '51Talk L2 Proficiency', L2_chartData: [88, 82, 90, 85, 80, 92, 94],

        // ================= LEVEL 3 DATA =================
        L3_mainTitle: "51Talk Academy L3", L3_mainSubtitle: "Independent Communication & Rational Thought Mastery",
        L3_metric1Label: "Vocabulary Depth 📚", L3_metric1HoverTitle: "Academic Expansion:",
        L3_metric1Li1: "Personality & Values", L3_metric1Li2: "Environmental Systems", L3_metric1Li3: "Global Markets & Career", L3_metric1Li4: "ICT & Digital Literacy", L3_metric1Li5: "Focus: Abstract Reasoning",
        L3_metric2Label: "Strategic Stages 🔄", L3_metric2HoverTitle: "Progressive Mastery:",
        L3_metric2Li1: "Stage 1: Personality & Changing Planet", L3_metric2Li2: "Stage 2: Superlatives & Travel Intent", L3_metric2Li3: "Stage 3: Relative Clauses & Digital Life", L3_metric2Li4: "Stage 4: Past Perfect & Life Experiences", L3_metric2Li5: "Stage 5: Passive Voice & World Literature",
        L3_metric3Label: "CEFR Mastery 🏅", L3_metric3HoverTitle: "International Sync:",
        L3_metric3Li1: "Saudi Public G8-G9 Goal", L3_metric3Li2: "Int'l School G5-G6 Standard", L3_metric3Li3: "Foundation for Independent B1",
        L3_metric4Label: "Exam Readiness 🎯", L3_metric4HoverTitle: "Skills Covered:",
        L3_metric4Li1: "Reading: Complex Detail Extraction", L3_metric4Li2: "Writing: Biographical & Formatted", L3_metric4Li3: "Listening: Inference & Summary", L3_metric4Li4: "Speaking: Collaborative Discussion",
        L3_loopTitle: "Internal Learning Loop Design", L3_loopSubtitle: "Transitioning from Fluency to Analytical Discussion",
        L3_loop1Title: "Advanced Input", L3_loop1Desc: "Content Acquisition: Present Perfect, Passives & Conditionals",
        L3_loop2Title: "Logical Output", L3_loop2Desc: "Argumentative Power: Biographies, Reviews & Debates",
        L3_loop3Title: "Systemic Review", L3_loop3Desc: "Structural Consolidation: Refining Sentence Variety",
        L3_loop4Title: "Global Skills", L3_loop4Desc: "Soft Competency: Brainstorming & Accepting Opinions",
        L3_loop5Title: "Outcome Report", L3_loop5Desc: "Assessment of Independent Communication Mastery",
        L3_stageSectionTitle: "5 Stages of Level 3 Content",
        L3_s1a: "Personality & Alphabet", L3_s1b: "Planet Earth", L3_s1c: "Holiday Plans", L3_s2a: "Superlative Adverbs", L3_s2b: "The Perfect School", L3_s2c: "Adjective Order", L3_s3a: "Relative Clauses", L3_s3b: "Digital Life (eSports)", L3_s3c: "City vs Country", L3_s4a: "Present Perfect", L3_s4b: "Life Changes", L3_s4c: "Reflexive Pronouns", L3_s5a: "Conditionals (if)", L3_s5b: "Passive Voice", L3_s5c: "World Literature",
        L3_acadBoxTitle: "Intellectual Outcomes",
        L3_acadText1Bold: "51Talk Academy L3", L3_acadText1: "evolves from narrative to analytical English. It synchronizes with", L3_acadText2Bold: "Saudi G8-G9", L3_acadText2: "academic requirements.",
        L3_keyOutputs: "Level 3 Milestones:",
        L3_outputLi1: "Communicate personal values and describe diverse personalities.", L3_outputLi2: "Write long-form biographies and analytical reviews (Movies/Books).", L3_outputLi3: "Master 'Process Description' using the Passive Voice.", L3_outputLi4: "Employ Critical Thinking to resolve social challenges and digital issues.",
        L3_footerTitle: "Path to Level 4", L3_footerSubtitle: "Transitioning to Advanced Independent Fluency (B1 Preliminary Standards)",
        L3_foot1Title: "Linguistic Complexity", L3_foot1Desc: "Mastering Reported Speech and Modals of Deduction.",
        L3_foot2Title: "Abstract Reasoning", L3_foot2Desc: "Discussing ethics, technology, and global societal changes.",
        L3_foot3Title: "Advanced Exam Target", L3_foot3Desc: "Comprehensive preparation for the Cambridge PET (B1) level.",
        L3_chartLabels: ['Critical Thinking', 'Complex Grammar', 'Independent Speech', 'Analytical Writing', 'Reading Depth', 'Problem Solving', 'Social Logic'], L3_chartLegend: '51Talk L3 Proficiency', L3_chartData: [92, 95, 88, 85, 90, 94, 91],

        // ================= LEVEL 4 DATA =================
        L4_mainTitle: "51Talk Academy L4", L4_mainSubtitle: "Advanced Fluency & Social Advocacy Mastery",
        L4_metric1Label: "Vocabulary Range 📖", L4_metric1HoverTitle: "Semantic Precision:",
        L4_metric1Li1: "Crime & Justice Terminology", L4_metric1Li2: "Scientific Hypotheses", L4_metric1Li3: "Digital Ethics & AI Phrasal Verbs", L4_metric1Li4: "Nuanced Emotional Adjectives",
        L4_metric2Label: "CEFR Milestone 🏅", L4_metric2HoverTitle: "Independence Level:",
        L4_metric2Li1: "Can handle most travel situations", L4_metric2Li2: "Describe experiences and ambitions", L4_metric2Li3: "Give brief reasons for opinions", L4_metric2Li4: "Synchronized with Saudi G9-G10",
        L4_metric3Label: "Exam Target 🎯", L4_metric3HoverTitle: "B1 Preliminary Skills:",
        L4_metric3Li1: "Reading: Identifying attitude & purpose", L4_metric3Li2: "Writing: 100-word Articles & Stories", L4_metric3Li3: "Listening: Following extended talk", L4_metric3Li4: "Speaking: Discussion & Negotiation",
        L4_metric4Label: "Thematic Units 🧩", L4_metric4HoverTitle: "Core Clusters:",
        L4_metric4Li1: "Social Responsibility", L4_metric4Li2: "Law & Order", L4_metric4Li3: "Technological Breakthroughs", L4_metric4Li4: "Career & Professionalism",
        L4_loopTitle: "Strategic Learning Architecture", L4_loopSubtitle: "Developing the 'Thinker's Voice' through systematic linguistic scaffolding.",
        L4_loop1Title: "Nuanced Input", L4_loop1Desc: "Reported Speech, Modals of Probability, 2nd Conditionals",
        L4_loop2Title: "Critical Output", L4_loop2Desc: "Writing Online Profiles, Book Reviews & Informal Appeals",
        L4_loop3Title: "Global Skills", L4_loop3Desc: "Identifying Reliable News & Conflict Resolution",
        L4_loop4Title: "Reflective Culture", L4_loop4Desc: "Comparing NYC, Hollywood, and Professional Arts Schools",
        L4_loop5Title: "Advocacy", L4_loop5Desc: "Using English to express surprise, disbelief & social stance",
        L4_s1a: "Fashion & Music Adverbs", L4_s1b: "Past Continuous Narrative", L4_s1c: "Comparatives (not as...as)", L4_s2a: "Crime & Justice", L4_s2b: "Reflexive Pronouns", L4_s2c: "Future: be going to vs Continuous", L4_s3a: "Present Perfect (for/since)", L4_s3b: "Will for Prediction", L4_s3c: "Modals of Probability", L4_s4a: "Relative Clauses", L4_s4b: "Passive Voice (Present)", L4_s4c: "Zero & 1st Conditionals", L4_s5a: "Reported Commands & Speech", L4_s5b: "2nd Conditional (Hypothetical)", L4_s5c: "Past Simple Passive",
        L4_acadBoxTitle: "Intellectual Outcomes",
        L4_acadLi1Bold: "Complex Narrative Mastery:", L4_acadLi1: "Ability to write creative stories and structured biographies with advanced time markers.",
        L4_acadLi2Bold: "Ethical Reasoning:", L4_acadLi2: "Discussing social issues like crime, punishment, and environmental responsibility using specific vocabulary.",
        L4_acadLi3Bold: "Hypothetical Thinking:", L4_acadLi3: "Utilizing Second Conditionals to discuss 'what if' scenarios and scientific experiments.",
        L4_acadLi4Bold: "Media Literacy:", L4_acadLi4: "Identifying reliable news sources and expressing personal surprise or disbelief toward illusions.",
        L4_footerTitle: "The Path to Level 5", L4_footerSubtitle: "Entering B1+ Intermediate Mastery: Precision, Rhetoric, and Professional Polish",
        L4_foot1Title: "Rhetorical Power", L4_foot1Desc: "Learning to persuade, negotiate complex deals, and use English for debate.",
        L4_foot2Title: "Advanced Syntax", L4_foot2Desc: "Mastering Perfect Passives and complex Subordinate Clauses for academic writing.",
        L4_foot3Title: "PET Final Target", L4_foot3Desc: "Achieving a high-pass in the Cambridge PET, proving B1+ competency for global schools.",
        L4_chartLabels: ['Abstract Reasoning', 'Syntactic Complexity', 'Argumentative Writing', 'Societal Awareness', 'Inference Listening', 'Debate Skills'], L4_chartLegend: 'Level 4 Proficiency Profile', L4_chartData: [95, 90, 88, 96, 92, 85],

        // ================= LEVEL 5 DATA (NEW) =================
        L5_mainTitle: "51Talk Academy L5",
        L5_mainSubtitle: "Global Leadership & Professional Fluency Portfolio",

        L5_metric1Label: "Vocab Range 📖",
        L5_metric1HoverTitle: "Advanced Lexis:",
        L5_metric1Li1: "Corporate Social Responsibility",
        L5_metric1Li2: "Scientific Ethics & AI",
        L5_metric1Li3: "Psychological Profiles",
        L5_metric1Li4: "Legal & Judicial Systems",

        L5_metric2Label: "Stages 🔄",
        L5_metric2HoverTitle: "Advanced Themes:",
        L5_metric2Li1: "S1: Identity & Modern Media",
        L5_metric2Li2: "S2: Global Ecology & Wealth",
        L5_metric2Li3: "S3: Narrative Arts & History",
        L5_metric2Li4: "S4: Ambition & Education",
        L5_metric2Li5: "S5: Logic, Literature & Rules",

        L5_metric3Label: "CEFR Mastery 🏅",
        L5_metric3HoverTitle: "International Benchmarks:",
        L5_metric3Li1: "Independent User B1+",
        L5_metric3Li2: "Foundation for B2 First",
        L5_metric3Li3: "Academic Writing Readiness",
        L5_metric3Li4: "Saudi High School G11-12 Sync",

        L5_metric4Label: "Path to FCE 🎯",
        L5_metric4HoverTitle: "Exam Competencies:",
        L5_metric4Li1: "Listening: Multiple Speakers",
        L5_metric4Li2: "Writing: Semi-formal Articles",
        L5_metric4Li3: "Reading: Complex Deductions",
        L5_metric4Li4: "Speaking: Collaborative Debate",

        L5_loopTitle: "Internal Learning Loop Design",
        L5_loopSubtitle: "From Fluency to Professional Rhetoric",
        L5_loop1Title: "Nuanced Input",
        L5_loop1Desc: "Knowledge: Past Perfect Continuous, Modals of Deduction & Wish/If only",
        L5_loop2Title: "Logical Output",
        L5_loop2Desc: "Application: Semi-formal Reviews, Thematic Debates & Narrative Articles",
        L5_loop3Title: "Consolidation",
        L5_loop3Desc: "Review: Structural Refining & Complex Linkers Mastery",
        L5_loop4Title: "Leadership",
        L5_loop4Desc: "Skills: Critical Observation, Self-Reflection & Global Stewardship",
        L5_loop5Title: "Outcome Report",
        L5_loop5Desc: "Proficiency Assessment: Ready for Global Higher Ed",

        L5_s1a: "Personality Adjectives", L5_s1b: "TV & Advertising", L5_s1c: "Dynamic Verbs",
        L5_s2a: "Environment Lexis", L5_s2b: "Wealth & Poverty", L5_s2c: "Comparison Clauses",
        L5_s3a: "Past Perfect Cont.", L5_s3b: "Travel Mysteries", L5_s3c: "Reporting Verbs",
        L5_s4a: "Educational Systems", L5_s4b: "Job Interviews", L5_s4c: "Modal Deductions",
        L5_s5a: "Literature Analysis", L5_s5b: "Social Logic (Wish)", L5_s5c: "Passive Reporting",

        L5_acadBoxTitle: "Academic Excellence",
        L5_acadText1Bold: "51Talk Academy L5",
        L5_acadText1: "prepares students for the transition from General English to",
        L5_acadText2Bold: "Academic/Business contexts",
        L5_acadText2: ", aligning with international university standards.",
        L5_keyOutputs: "Key Practical Outputs:",
        L5_outputLi1: "Present 5-minute extended talks on ethical/technological dilemmas.",
        L5_outputLi2: "Write formatted semi-formal reviews and complex narrative arcs.",
        L5_outputLi3: "Master 'Deductive Reasoning' using English to solve mysteries.",
        L5_outputLi4: "Critically analyze global literature and media bias.",

        L5_footerTitle: "Advancing to Level 6",
        L5_footerSubtitle: "The B2 Breakthrough: Achieving Near-Native Sophistication",
        L5_foot1Title: "Rhetoric & Style",
        L5_foot1Desc: "Mastering persuasion, irony, and advanced idiomatic nuances.",
        L5_foot2Title: "Academic Rigor",
        L5_foot2Desc: "Ready for IELTS 6.5+ foundation and university-level lectures.",
        L5_foot3Title: "Exam Peak",
        L5_foot3Desc: "Full-scale preparation for Cambridge First (FCE) B2 achievement.",

        L5_chartLabels: ['Critical Thinking', 'Complex Logic', 'Abstract Writing', 'Intercultural Skill', 'Grammar Precision', 'Lexical Depth', 'Auditory Inference'],
        L5_chartLegend: '51Talk L5 Mastery Profile',
        L5_chartData: [95, 92, 88, 94, 96, 90, 93]
    },
    ar: {
        btn: "Switch to English / الإنجليزية",

        // ================= LEVEL 1 ARABIC =================
        mainTitle: "أكاديمية 51Talk - المستوى الأول",
        mainSubtitle: "تصميم مناهج علمي لتميز قابل للقياس",
        // ... (L1 Arabic Data) ...
        metric1Label: "درسًا 📖", metric1HoverTitle: "أول 5 دروس:",
        metric1Li1: "د1: الحروف الأبجدية، الأرقام والأيام", metric1Li2: "د2: أدوات الفصل الدراسي والقواعد", metric1Li3: "د3: الإملاء والمعلومات الشخصية", metric1Li4: "د4: البلدان والجنسيات", metric1Li5: "د5: المراجعة واختبار المرحلة 1",
        metric2Label: "مراحل التعلم 🔄", metric2HoverTitle: "المواضيع التقدمية:",
        metric2Li1: "المرحلة 1: الأسس (الذات / الأسرة)", metric2Li2: "المرحلة 2: الحياة اليومية (الطعام / المدرسة)", metric2Li3: "المرحلة 3: الأنشطة (الصحة / التكنولوجيا)", metric2Li4: "المرحلة 4: المجتمع (السفر / التجزئة)", metric2Li5: "المرحلة 5: نظرة عالمية (الطبيعة / الثقافة)",
        metric3Label: "مواضيع الوحدات 🌍", metric3HoverTitle: "أول 5 وحدات:",
        metric3Li1: "و0: أساسيات الفصل الدراسي", metric3Li2: "و1: كل شيء عني", metric3Li3: "و2: العائلة والمشاعر", metric3Li4: "و3: منزلي والغرف", metric3Li5: "و4: الحقيبة المدرسية والممتلكات",
        metric4Label: "إتقان CEFR 🏅", metric4HoverTitle: "التوافق الدولي:",
        metric4Li1: "هدف المدارس الحكومية السعودية (الصف 4-6)", metric4Li2: "هدف المدارس الدولية (الصف 1-2)", metric4Li3: "معيار كامبريدج (ما قبل A1)",
        loopTitle: "تصميم دورة التعلم الداخلية", loopSubtitle: "دورة علمية من 5 خطوات لضمان ترسيخ المعلومات",
        loop1Title: "المدخلات 1 و 2", loop1Desc: "اكتساب المعرفة: بناء المفردات والقواعد",
        loop2Title: "المخرجات 1 و 2", loop2Desc: "تطبيق المهارات: الاستماع، التحدث والكتابة التطبيقية",
        loop3Title: "المراجعة", loop3Desc: "الدمج المنهجي: إغلاق حلقة المعرفة",
        loop4Title: "مهارات الحياة", loop4Desc: "الكفاءة العملية: الابتكار، تكنولوجيا المعلومات والثقافة العالمية",
        loop5Title: "الاختبار النهائي", loop5Desc: "تقييم النتائج وتقرير الكفاءة",
        stageSectionTitle: "5 مراحل لمحتوى المستوى الأول",
        stage1a: "التعريف بالنفس", stage1b: "العائلة", stage1c: "المنزل", stage2a: "القدرات", stage2b: "الطعام", stage2c: "المدرسة", stage3a: "الصحة", stage3b: "التكنولوجيا", stage3c: "المهن", stage4a: "الأماكن", stage4b: "المواصلات", stage4c: "التسوق", stage5a: "نظرة عالمية", stage5b: "الطبيعة", stage5c: "الثقافة",
        acadBoxTitle: "الأداء الأكاديمي",
        acadText1Bold: "أكاديمية 51Talk م1", acadText1: "تغطي 100% من متطلبات", acadText2Bold: "المدارس السعودية الحكومية (الصف 4-6)", acadText2: "وتعتبر مكملاً حيوياً لمناهج", acadText3Bold: "المدارس الدولية (الصف 1-2).", acadText3: "",
        keyOutputs: "المخرجات العملية الرئيسية:",
        outputLi1: "التعرف على أكثر من 800 مفردة عبر 20 موضوعاً عالمياً", outputLi2: "كتابة المدونات المنسقة، دعوات الحفلات، والمراجعات", outputLi3: "إتقان محو الأمية الرقمية ومهارات الأمان على الإنترنت", outputLi4: "مقارنة ثقافات المملكة المتحدة، أمريكا، ونيوزيلندا مع المنظور المحلي",
        footerTitle: "الانتقال إلى المستوى الثاني", footerSubtitle: "الانتقال من التعريف الأساسي إلى الطلاقة السردية (CEFR A2)",
        foot1Title: "التحول اللغوي", foot1Desc: "إتقان الأزمنة الماضية لسرد القصص والتاريخ الشخصي.",
        foot2Title: "التفاعل الاجتماعي", foot2Desc: "المشاركة في تفاعل اجتماعي مستدام وآراء مفصلة.",
        foot3Title: "هدف الامتحان", foot3Desc: "إعداد شامل لمعيار كامبريدج KET (A2).",
        L1_chartLabels: ['الاستماع', 'التحدث', 'القراءة', 'الكتابة', 'القواعد', 'مهارات الحياة', 'الثقافة'], L1_chartLegend: 'كفاءة 51Talk المستوى 1', L1_chartData: [90, 85, 82, 78, 95, 88, 92],

        // ================= LEVEL 2 ARABIC =================
        L2_mainTitle: "أكاديمية 51Talk - المستوى 2", L2_mainSubtitle: "التميز السردي وتصميم الطلاقة التحليلية",
        L2_metric1Label: "درسًا 📚", L2_metric1HoverTitle: "منطق الوحدات المتقدم:",
        L2_metric1Li1: "دروس 1-10: الماضي البسيط والقصص", L2_metric1Li2: "دروس 11-15: المقارنات والتكنولوجيا", L2_metric1Li3: "دروس 16-20: الطبيعة والألغاز", L2_metric1Li4: "دروس 21-25: خطط المستقبل والاختبار", L2_metric1Li5: "التركيز: منطق الفقرة",
        L2_metric2Label: "مراحل التعلم 🔄", L2_metric2HoverTitle: "الإتقان التدريجي:",
        L2_metric2Li1: "مرحلة 1: ماضي الكينونة (be) والموسيقى", L2_metric2Li2: "مرحلة 2: التاريخ، الوظائف والعطلات", L2_metric2Li3: "مرحلة 3: الصحة، التكنولوجيا والمجتمع", L2_metric2Li4: "مرحلة 4: الماضي المستمر والبيئة", L2_metric2Li5: "مرحلة 5: المستقبل بـ 'going to'",
        L2_metric3Label: "المواضيع العالمية 🌍", L2_metric3HoverTitle: "أبرز الوحدات:",
        L2_metric3Li1: "و1: الرياضة والألعاب", L2_metric3Li2: "و5: لحظات في التاريخ", L2_metric3Li3: "و9: المواصلات", L2_metric3Li4: "و12: أحدث التقنيات", L2_metric3Li5: "و15: ألغاز في الطبيعة",
        L2_metric4Label: "إتقان CEFR 🏅", L2_metric4HoverTitle: "التوافق الأكاديمي:",
        L2_metric4Li1: "هدف المدارس الحكومية (الصف 7-9)", L2_metric4Li2: "هدف المدارس الدولية (الصف 3-4)", L2_metric4Li3: "معيار كامبريدج KET (المفتاح)",
        L2_loopTitle: "تصميم دورة التعلم الداخلية", L2_loopSubtitle: "جسر من التحديد البسيط إلى السرد المنطقي",
        L2_loop1Title: "المدخلات 1 و 2", L2_loop1Desc: "توسع المعرفة: الظروف، الزمن الماضي والأسماء المركبة",
        L2_loop2Title: "المخرجات 1 و 2", L2_loop2Desc: "قوة السرد: تقديم الأحداث وكتابة القصة",
        L2_loop3Title: "المراجعة", L2_loop3Desc: "التركيز على الدقة: تصحيح القواعد في السياق",
        L2_loop4Title: "مهارات الحياة", L2_loop4Desc: "الكفاءة النقدية: التدوين الرقمي والرفاهية الشخصية",
        L2_loop5Title: "اختبار النتائج", L2_loop5Desc: "الجاهزية لـ KET وتقديم تقارير بجمل معقدة",
        L2_stageSectionTitle: "5 مراحل لمحتوى المستوى 2",
        L2_s1a: "الماضي (be)", L2_s1b: "الموسيقى", L2_s1c: "أحداث يومية", L2_s2a: "التاريخ", L2_s2b: "وظائف العطلة", L2_s2c: "الريكشا", L2_s3a: "صيغ المقارنة", L2_s3b: "الأدوات الذكية", L2_s3c: "الحياة الصحية", L2_s4a: "الماضي المستمر", L2_s4b: "الطبيعة", L2_s4c: "رعاية الحيوان", L2_s5a: "المستقبل (Going to)", L2_s5b: "القواعد الاجتماعية", L2_s5c: "المدونات الرقمية",
        L2_acadBoxTitle: "الإتقان السردي",
        L2_acadText1Bold: "أكاديمية 51Talk م2", L2_acadText1: "تنتقل من 'ما هذا؟' إلى 'ماذا حدث؟'. وتتوافق مع معايير", L2_acadText2Bold: "السعودية (الصف 7-9)", L2_acadText2: "ومناهج", L2_acadText3Bold: "المدارس الدولية (الصف 3-4).", L2_acadText3: "",
        L2_keyOutputs: "معالم المستوى 2:",
        L2_outputLi1: "سرد الأحداث التاريخية والقصص الشخصية باستخدام الماضي البسيط.", L2_outputLi2: "مقارنة التكنولوجيا والمنتجات باستخدام صيغ التفضيل.", L2_outputLi3: "كتابة فقرات مترابطة للمراجعات، المدونات، ورسائل البريد الإلكتروني.", L2_outputLi4: "مناقشة القضايا العالمية مثل البيئة وحماية الحيوان.",
        L2_footerTitle: "التقدم إلى المستوى 3", L2_footerSubtitle: "الانتقال من الطلاقة إلى التفكير النقدي المستقل (مرحلة انتقالية B1)",
        L2_foot1Title: "العمق اللغوي", L2_foot1Desc: "تقديم الأزمنة التامة والمنطق الشرطي.",
        L2_foot2Title: "النقاش المنطقي", L2_foot2Desc: "المشاركة في التفكير المجرد والخطاب المقنع.",
        L2_foot3Title: "الهدف الأكاديمي", L2_foot3Desc: "التحرك نحو معايير كفاءة كامبريدج PET (B1).",
        L2_chartLabels: ['المنطق السردي', 'طلاقة التحدث', 'نطاق القواعد', 'هيكل الكتابة', 'المفردات المجردة', 'حل المشكلات', 'الوعي الاجتماعي'], L2_chartLegend: 'كفاءة 51Talk المستوى 2', L2_chartData: [88, 82, 90, 85, 80, 92, 94],

        // ================= LEVEL 3 ARABIC =================
        L3_mainTitle: "أكاديمية 51Talk - المستوى 3",
        L3_mainSubtitle: "إتقان التواصل المستقل والفكر العقلاني",
        // ... (L3 Arabic Data) ...
        L3_metric1Label: "عمق المفردات 📚", L3_metric1HoverTitle: "التوسع الأكاديمي:",
        L3_metric1Li1: "الشخصية والقيم", L3_metric1Li2: "النظم البيئية", L3_metric1Li3: "الأسواق العالمية والمهن", L3_metric1Li4: "محو الأمية الرقمية والتقنية", L3_metric1Li5: "التركيز: التفكير المجرد",
        L3_metric2Label: "المراحل الاستراتيجية 🔄", L3_metric2HoverTitle: "الإتقان التقدمي:",
        L3_metric2Li1: "المرحلة 1: الشخصية وكوكب متغير", L3_metric2Li2: "المرحلة 2: صيغ التفضيل ونوايا السفر", L3_metric2Li3: "المرحلة 3: الجمل الموصولة والحياة الرقمية", L3_metric2Li4: "المرحلة 4: الماضي التام وتجارب الحياة", L3_metric2Li5: "المرحلة 5: المبني للمجهول والأدب العالمي",
        L3_metric3Label: "إتقان CEFR 🏅", L3_metric3HoverTitle: "التزامن الدولي:",
        L3_metric3Li1: "هدف المدارس السعودية (الصف 8-9)", L3_metric3Li2: "معيار المدارس الدولية (الصف 5-6)", L3_metric3Li3: "الأساس للمستوى المستقل B1",
        L3_metric4Label: "جاهزية الامتحان 🎯", L3_metric4HoverTitle: "المهارات المغطاة:",
        L3_metric4Li1: "القراءة: استخراج التفاصيل المعقدة", L3_metric4Li2: "الكتابة: السيرة الذاتية والمنسقة", L3_metric4Li3: "الاستماع: الاستنتاج والتلخيص", L3_metric4Li4: "التحدث: المناقشة التعاونية",
        L3_loopTitle: "تصميم دورة التعلم الداخلية", L3_loopSubtitle: "الانتقال من الطلاقة إلى المناقشة التحليلية",
        L3_loop1Title: "المدخلات المتقدمة", L3_loop1Desc: "اكتساب المحتوى: المضارع التام، المبني للمجهول والجمل الشرطية",
        L3_loop2Title: "المخرجات المنطقية", L3_loop2Desc: "قوة الحجة: السير الذاتية، المراجعات والمناظرات",
        L3_loop3Title: "المراجعة المنهجية", L3_loop3Desc: "الدمج الهيكلي: تحسين تنوع الجمل",
        L3_loop4Title: "المهارات العالمية", L3_loop4Desc: "الكفاءة الناعمة: العصف الذهني وتقبل الآراء",
        L3_loop5Title: "تقرير النتائج", L3_loop5Desc: "تقييم إتقان التواصل المستقل",
        L3_stageSectionTitle: "5 مراحل لمحتوى المستوى 3",
        L3_s1a: "الشخصية والأبجدية", L3_s1b: "كوكب الأرض", L3_s1c: "خطط العطلة", L3_s2a: "ظروف التفضيل", L3_s2b: "المدرسة المثالية", L3_s2c: "ترتيب الصفات", L3_s3a: "الجمل الموصولة", L3_s3b: "الحياة الرقمية", L3_s3c: "المدينة والريف", L3_s4a: "المضارع التام", L3_s4b: "تغيرات الحياة", L3_s4c: "الضمائر الانعكاسية", L3_s5a: "الجمل الشرطية (if)", L3_s5b: "المبني للمجهول", L3_s5c: "الأدب العالمي",
        L3_acadBoxTitle: "النتائج الفكرية",
        L3_acadText1Bold: "أكاديمية 51Talk م3", L3_acadText1: "تتطور من الإنجليزية السردية إلى التحليلية. وتتزامن مع المتطلبات الأكاديمية", L3_acadText2Bold: "للسعودية (الصف 8-9).", L3_acadText2: "",
        L3_keyOutputs: "معالم المستوى 3:",
        L3_outputLi1: "التعبير عن القيم الشخصية ووصف الشخصيات المتنوعة.", L3_outputLi2: "كتابة السير الذاتية الطويلة والمراجعات التحليلية (أفلام/كتب).", L3_outputLi3: "إتقان 'وصف العمليات' باستخدام المبني للمجهول.", L3_outputLi4: "توظيف التفكير النقدي لحل التحديات الاجتماعية والقضايا الرقمية.",
        L3_footerTitle: "الطريق إلى المستوى 4", L3_footerSubtitle: "الانتقال إلى الطلاقة المستقلة المتقدمة (معايير B1 الأولية)",
        L3_foot1Title: "التعقيد اللغوي", L3_foot1Desc: "إتقان الكلام المنقول والأفعال الناقصة للاستنتاج.",
        L3_foot2Title: "التفكير المجرد", L3_foot2Desc: "مناقشة الأخلاق، التكنولوجيا، والتغيرات المجتمعية العالمية.",
        L3_foot3Title: "هدف الامتحان المتقدم", L3_foot3Desc: "إعداد شامل لمستوى كامبريدج PET (B1).",
        L3_chartLabels: ['التفكير النقدي', 'قواعد معقدة', 'الحديث المستقل', 'الكتابة التحليلية', 'عمق القراءة', 'حل المشكلات', 'المنطق الاجتماعي'], L3_chartLegend: 'كفاءة 51Talk المستوى 3', L3_chartData: [92, 95, 88, 85, 90, 94, 91],

        // ================= LEVEL 4 ARABIC =================
        L4_mainTitle: "أكاديمية 51Talk - المستوى 4",
        L4_mainSubtitle: "إتقان الطلاقة المتقدمة والمناصرة الاجتماعية",
        // ... (L4 Arabic Data) ...
        L4_metric1Label: "نطاق المفردات 📖", L4_metric1HoverTitle: "الدقة الدلالية:",
        L4_metric1Li1: "مصطلحات الجريمة والعدالة", L4_metric1Li2: "الفرضيات العلمية", L4_metric1Li3: "الأخلاقيات الرقمية وأفعال الذكاء الاصطناعي", L4_metric1Li4: "صفات عاطفية دقيقة",
        L4_metric2Label: "إنجاز CEFR 🏅", L4_metric2HoverTitle: "مستوى الاستقلالية:",
        L4_metric2Li1: "التعامل مع معظم حالات السفر", L4_metric2Li2: "وصف التجارب والطموحات", L4_metric2Li3: "إعطاء أسباب موجزة للآراء", L4_metric2Li4: "متزامن مع السعودية (الصف 9-10)",
        L4_metric3Label: "هدف الامتحان 🎯", L4_metric3HoverTitle: "مهارات B1 الأولية:",
        L4_metric3Li1: "القراءة: تحديد الموقف والغرض", L4_metric3Li2: "الكتابة: مقالات وقصص (100 كلمة)", L4_metric3Li3: "الاستماع: متابعة حديث مطول", L4_metric3Li4: "التحدث: المناقشة والتفاوض",
        L4_metric4Label: "الوحدات الموضوعية 🧩", L4_metric4HoverTitle: "المجموعات الأساسية:",
        L4_metric4Li1: "المسؤولية الاجتماعية", L4_metric4Li2: "القانون والنظام", L4_metric4Li3: "الاختراقات التكنولوجية", L4_metric4Li4: "الحياة المهنية والاحترافية",
        L4_loopTitle: "هندسة التعلم الاستراتيجي", L4_loopSubtitle: "تطوير 'صوت المفكر' من خلال الدعم اللغوي المنهجي.",
        L4_loop1Title: "المدخلات الدقيقة", L4_loop1Desc: "الكلام المنقول، أفعال الاحتمالية، الجمل الشرطية (الحالة 2)",
        L4_loop2Title: "المخرجات النقدية", L4_loop2Desc: "كتابة الملفات الشخصية، مراجعات الكتب والمناشدات غير الرسمية",
        L4_loop3Title: "المهارات العالمية", L4_loop3Desc: "تحديد الأخبار الموثوقة وحل النزاعات",
        L4_loop4Title: "الثقافة التأملية", L4_loop4Desc: "مقارنة نيويورك، هوليوود، ومدارس الفنون المهنية",
        L4_loop5Title: "المناصرة", L4_loop5Desc: "استخدام الإنجليزية للتعبير عن المفاجأة، عدم التصديق والموقف الاجتماعي",
        L4_s1a: "ظروف الموضة والموسيقى", L4_s1b: "سرد الماضي المستمر", L4_s1c: "المقارنات (not as...as)", L4_s2a: "الجريمة والعدالة", L4_s2b: "الضمائر الانعكاسية", L4_s2c: "المستقبل: النية vs المستمر", L4_s3a: "المضارع التام (لمدة/منذ)", L4_s3b: "Will للتنبؤ", L4_s3c: "أفعال الاحتمالية الناقصة", L4_s4a: "الجمل الموصولة", L4_s4b: "المبني للمجهول (المضارع)", L4_s4c: "الشرطية الصفرية والأولى", L4_s5a: "الأوامر والكلام المنقول", L4_s5b: "الشرطية الثانية (الافتراضية)", L4_s5c: "الماضي البسيط المجهول",
        L4_acadBoxTitle: "النتائج الفكرية",
        L4_acadLi1Bold: "إتقان السرد المعقد:", L4_acadLi1: "القدرة على كتابة قصص إبداعية وسير ذاتية منظمة بعلامات زمنية متقدمة.",
        L4_acadLi2Bold: "التفكير الأخلاقي:", L4_acadLi2: "مناقشة قضايا اجتماعية مثل الجريمة، العقاب، والمسؤولية البيئية بمفردات محددة.",
        L4_acadLi3Bold: "التفكير الافتراضي:", L4_acadLi3: "استخدام الجمل الشرطية الثانية لمناقشة سيناريوهات 'ماذا لو' والتجارب العلمية.",
        L4_acadLi4Bold: "محو الأمية الإعلامية:", L4_acadLi4: "تحديد مصادر الأخبار الموثوقة والتعبير عن المفاجأة الشخصية أو عدم التصديق تجاه الأوهام.",
        L4_footerTitle: "الطريق إلى المستوى 5", L4_footerSubtitle: "دخول إتقان المتوسط B1+: الدقة، البلاغة، والصقل المهني",
        L4_foot1Title: "القوة البلاغية", L4_foot1Desc: "تعلم الإقناع، التفاوض في الصفقات المعقدة، واستخدام الإنجليزية للمناظرة.",
        L4_foot2Title: "النحو المتقدم", L4_foot2Desc: "إتقان المبني للمجهول التام والجمل الثانوية المعقدة للكتابة الأكاديمية.",
        L4_foot3Title: "هدف PET النهائي", L4_foot3Desc: "تحقيق نجاح عالٍ في كامبريدج PET، إثبات كفاءة B1+ للمدارس العالمية.",
        L4_chartLabels: ['التفكير المجرد', 'التعقيد النحوي', 'الكتابة الجدلية', 'الوعي المجتمعي', 'استنتاج الاستماع', 'مهارات المناظرة'], L4_chartLegend: 'ملف كفاءة المستوى 4', L4_chartData: [95, 90, 88, 96, 92, 85],

        // ================= LEVEL 5 ARABIC (NEW) =================
        L5_mainTitle: "أكاديمية 51Talk - المستوى 5",
        L5_mainSubtitle: "القيادة العالمية ومحفظة الطلاقة المهنية",

        L5_metric1Label: "نطاق المفردات 📖",
        L5_metric1HoverTitle: "المفردات المتقدمة:",
        L5_metric1Li1: "المسؤولية الاجتماعية للشركات",
        L5_metric1Li2: "الأخلاقيات العلمية والذكاء الاصطناعي",
        L5_metric1Li3: "التوصيف النفسي",
        L5_metric1Li4: "الأنظمة القانونية والقضائية",

        L5_metric2Label: "المراحل 🔄",
        L5_metric2HoverTitle: "المواضيع المتقدمة:",
        L5_metric2Li1: "م1: الهوية والإعلام الحديث",
        L5_metric2Li2: "م2: البيئة العالمية والثروة",
        L5_metric2Li3: "م3: فنون السرد والتاريخ",
        L5_metric2Li4: "م4: الطموح والتعليم",
        L5_metric2Li5: "م5: المنطق، الأدب والقواعد",

        L5_metric3Label: "إتقان CEFR 🏅",
        L5_metric3HoverTitle: "المعايير الدولية:",
        L5_metric3Li1: "مستخدم مستقل B1+",
        L5_metric3Li2: "الأساس لشهادة B2 First",
        L5_metric3Li3: "الجاهزية للكتابة الأكاديمية",
        L5_metric3Li4: "تزامن الثانوية السعودية (الصف 11-12)",

        L5_metric4Label: "الطريق إلى FCE 🎯",
        L5_metric4HoverTitle: "كفاءات الامتحان:",
        L5_metric4Li1: "الاستماع: متحدثون متعددون",
        L5_metric4Li2: "الكتابة: مقالات شبه رسمية",
        L5_metric4Li3: "القراءة: استنتاجات معقدة",
        L5_metric4Li4: "التحدث: المناقشة التعاونية",

        L5_loopTitle: "تصميم دورة التعلم الداخلية",
        L5_loopSubtitle: "من الطلاقة إلى البلاغة المهنية",
        L5_loop1Title: "المدخلات الدقيقة",
        L5_loop1Desc: "المعرفة: الماضي التام المستمر، أفعال الاستنتاج الناقصة والتمني (Wish/If only)",
        L5_loop2Title: "المخرجات المنطقية",
        L5_loop2Desc: "التطبيق: مراجعات شبه رسمية، مناظرات موضوعية ومقالات سردية",
        L5_loop3Title: "الترسيخ",
        L5_loop3Desc: "المراجعة: تحسين الهيكل وإتقان الروابط المعقدة",
        L5_loop4Title: "القيادة",
        L5_loop4Desc: "المهارات: الملاحظة النقدية، التأمل الذاتي والإشراف العالمي",
        L5_loop5Title: "تقرير النتائج",
        L5_loop5Desc: "تقييم الكفاءة: جاهز للتعليم العالي العالمي",

        L5_s1a: "صفات الشخصية", L5_s1b: "التلفزيون والإعلان", L5_s1c: "الأفعال الديناميكية",
        L5_s2a: "مفردات البيئة", L5_s2b: "الثروة والفقر", L5_s2c: "جمل المقارنة",
        L5_s3a: "الماضي التام المستمر", L5_s3b: "أسرار السفر", L5_s3c: "أفعال نقل الكلام",
        L5_s4a: "الأنظمة التعليمية", L5_s4b: "مقابلات العمل", L5_s4c: "الاستنتاجات الناقصة",
        L5_s5a: "تحليل الأدب", L5_s5b: "المنطق الاجتماعي (التمني)", L5_s5c: "الإبلاغ بالمبني للمجهول",

        L5_acadBoxTitle: "التميز الأكاديمي",
        L5_acadText1Bold: "أكاديمية 51Talk م5",
        L5_acadText1: "تعد الطلاب للانتقال من الإنجليزية العامة إلى",
        L5_acadText2Bold: "السياقات الأكاديمية/التجارية",
        L5_acadText2: "، بما يتماشى مع معايير الجامعات الدولية.",
        L5_keyOutputs: "المخرجات العملية الرئيسية:",
        L5_outputLi1: "تقديم محادثات مطولة (5 دقائق) حول المعضلات الأخلاقية/التكنولوجية.",
        L5_outputLi2: "كتابة مراجعات شبه رسمية منسقة وهياكل سردية معقدة.",
        L5_outputLi3: "إتقان 'الاستدلال الاستنتاجي' باستخدام الإنجليزية لحل الألغاز.",
        L5_outputLi4: "التحليل النقدي للأدب العالمي والتحيز الإعلامي.",

        L5_footerTitle: "التقدم إلى المستوى 6",
        L5_footerSubtitle: "اختراق B2: تحقيق التطور القريب من الناطق الأصلي",
        L5_foot1Title: "البلاغة والأسلوب",
        L5_foot1Desc: "إتقان الإقناع، السخرية، والفروق الدقيقة في التعابير المتقدمة.",
        L5_foot2Title: "الصرامة الأكاديمية",
        L5_foot2Desc: "جاهز لأساسيات IELTS 6.5+ والمحاضرات الجامعية.",
        L5_foot3Title: "ذروة الامتحان",
        L5_foot3Desc: "إعداد شامل لتحقيق إنجاز كامبريدج الأول (FCE) B2.",

        L5_chartLabels: ['التفكير النقدي', 'المنطق المعقد', 'الكتابة المجردة', 'المهارة بين الثقافات', 'دقة القواعد', 'العمق المعجمي', 'الاستدلال السمعي'],
        L5_chartLegend: 'ملف إتقان المستوى 5',
        L5_chartData: [95, 92, 88, 94, 96, 90, 93]
    }
};