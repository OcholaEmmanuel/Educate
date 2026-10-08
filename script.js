// Master Data Source containing all 19 programs identified across images
const programsData = [
    {
        id: "ctnas",
        title: "Certified TNA Specialist",
        code: "CTNAS",
        category: "hr",
        delivery: "Self-Paced / Zoom",
        duration: "Flexible / 10 Sessions",
        schedule: "Continuous Enrollment",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-blue-100 text-blue-800",
        summary: "Master Training Needs Analysis methodologies to align organizational learning with strategic business objectives.",
        objectives: [
            "Conduct micro and macro training needs assessments across multi-tiered organizations.",
            "Formulate competency gaps analysis models using empirical performance data.",
            "Design targeted instructional frameworks aligned with business strategy."
        ],
        audience: "HR Practitioners, Learning & Development Professionals, Training Managers, and Organizational Consultants.",
        syllabus: [
            {
                module: "Module 1: Strategic Foundations of TNA",
                content: "Introduction to organizational gap analysis, linking business performance drivers to skill requirements."
            },
            {
                module: "Module 2: Data Gathering & Assessment Tools",
                content: "Designing surveys, structured interviews, performance appraisal reviews, and observation protocols."
            },
            {
                module: "Module 3: Competency Mapping & Gap Analysis",
                content: "Quantifying capability deficits, prioritizing critical training interventions, and ROI projections."
            }
        ],
        books: [
            { title: "Training Needs Assessment: Methods, Tools, and Techniques", author: "Jean Barbazette", year: "2021" },
            { title: "Effective Training: Systems, Strategies, and Practices", author: "P. Nick Blanchard & James Thacker", year: "2019" }
        ],
        references: [
            "ISO 29993:2017 - Learning services outside formal education",
            "CPD Standards Office Competency Framework for Training Needs Analysis"
        ],
        quiz: [
            {
                q: "What is the primary objective of a Training Needs Assessment (TNA)?",
                options: ["To evaluate employee satisfaction", "To identify performance gaps correctable by learning", "To trim administrative overhead", "To schedule annual leave"],
                answer: 1
            }
        ]
    },
    {
        id: "citp",
        title: "Certified Information Technology Professional",
        code: "CITP",
        category: "it",
        delivery: "Self-Paced Learning",
        duration: "4 Months",
        schedule: "Flexible Entry",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-emerald-100 text-emerald-800",
        summary: "Advanced IT strategy, enterprise architecture, software lifecycle governance, and digital transformation management.",
        objectives: [
            "Understand enterprise architecture frameworks and digital systems architecture.",
            "Implement IT governance frameworks (COBIT/ITIL) across tech infrastructure.",
            "Lead cross-functional digital transformation initiatives effectively."
        ],
        audience: "IT Managers, Systems Analysts, Enterprise Architects, Software Engineers, and Technology Consultants.",
        syllabus: [
            { module: "Module 1: Enterprise IT Architecture & Strategy", content: "Structuring cloud, on-premise, and hybrid architectures for scalability." },
            { module: "Module 2: IT Service Management & Governance", content: "Implementing ITIL 4 frameworks and COBIT standards for operational efficiency." }
        ],
        books: [
            { title: "Enterprise Architecture as Strategy", author: "Jeanne W. Ross et al.", year: "2020" }
        ],
        references: ["ITIL 4 Practice Guides", "COBIT 2019 Governance Framework"],
        quiz: [
            {
                q: "Which framework is primarily used for IT service management and operations?",
                options: ["TOGAF", "ITIL 4", "PMBOK", "Six Sigma"],
                answer: 1
            }
        ]
    },
    {
        id: "ciita",
        title: "Certified Internal IT Auditor",
        code: "CIITA",
        category: "it",
        delivery: "Self-Paced Learning",
        duration: "4 Months",
        schedule: "Flexible Entry",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-purple-100 text-purple-800",
        summary: "Systematic auditing of IT controls, cybersecurity compliance, data integrity, and risk governance.",
        objectives: [
            "Execute rigorous IT risk audits based on ISACA standards.",
            "Assess cybersecurity controls, access permissions, and data protection compliance.",
            "Deliver executive-ready IT audit reports and risk mitigation pathways."
        ],
        audience: "Internal Auditors, IT Security Officers, Compliance Managers, Risk Officers.",
        syllabus: [
            { module: "Module 1: IT Audit Planning & Risk Assessment", content: "Establishing audit scope, control objectives, and risk-based audit plans." },
            { module: "Module 2: Cybersecurity & Infrastructure Audit", content: "Evaluating network security, vulnerability assessments, and access management." }
        ],
        books: [{ title: "Information Technology Control and Audit", author: "Sandra Senft et al.", year: "2022" }],
        references: ["ISACA IT Audit Framework (ITAF)", "NIST Cybersecurity Framework v2.0"],
        quiz: [
            {
                q: "What is the key purpose of an internal IT audit?",
                options: ["To write system code", "To independently evaluate IT controls and risk mitigation", "To procure network hardware", "To manage customer service"],
                answer: 1
            }
        ]
    },
    {
        id: "chrts",
        title: "Certified HR Transformation Specialist",
        code: "CHRTS",
        category: "hr",
        delivery: "Self-Paced Learning",
        duration: "4 Months",
        schedule: "Continuous",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-indigo-100 text-indigo-800",
        summary: "Architecting agile HR structures, digital HR technology integration, and organizational change management.",
        objectives: [
            "Lead digital HR transformation and AI HR tool adoption.",
            "Redesign talent operating models for hybrid and agile workplaces.",
            "Drive culture change during major corporate restructuring."
        ],
        audience: "HR Directors, Talent Leads, Transformation Consultants, Business Partners.",
        syllabus: [
            { module: "Module 1: Digital HR & Operating Model Design", content: "Evolving from transaction HR to strategic partner models." },
            { module: "Module 2: People Analytics & AI in HR", content: "Data-driven workforce planning and HR decision systems." }
        ],
        books: [{ title: "HR Transformation", author: "Dave Ulrich et al.", year: "2019" }],
        references: ["SHRM HR Transformation Playbook", "CPD HR Change Standards"],
        quiz: [
            {
                q: "What is a major focus of modern HR Transformation?",
                options: ["Manual filing", "Shifting HR from administrative support to strategic partner", "Eliminating employee reviews", "Restricting workforce training"],
                answer: 1
            }
        ]
    },
    {
        id: "cimp",
        title: "Certified Investment Management Professional",
        code: "CIMP",
        category: "finance",
        delivery: "Self-Paced / Zoom",
        duration: "4 Months",
        schedule: "Flexible",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-amber-100 text-amber-800",
        summary: "Portfolio theory, asset allocation strategy, equity evaluation, fixed income, and risk hedging.",
        objectives: [
            "Construct optimal investment portfolios using Modern Portfolio Theory.",
            "Analyze equity valuation models and yield curve mechanics.",
            "Apply derivative hedging tools for risk mitigation."
        ],
        audience: "Portfolio Managers, Investment Analysts, Wealth Managers, Financial Planners.",
        syllabus: [
            { module: "Module 1: Portfolio Theory & Asset Allocation", content: "Risk-return tradeoffs, Sharpe ratio optimization, and capital asset pricing models." },
            { module: "Module 2: Valuation of Equities & Fixed Income", content: "DCF analysis, bond pricing, term structures, and credit assessment." }
        ],
        books: [{ title: "Investments", author: "Zvi Bodie, Alex Kane, Alan Marcus", year: "2021" }],
        references: ["CFA Institute Code of Ethics & Standards", "CPD Financial Markets Guidelines"],
        quiz: [
            {
                q: "What does the Sharpe Ratio measure?",
                options: ["Total market share", "Risk-adjusted return of an investment portfolio", "Corporate tax efficiency", "Bond duration"],
                answer: 1
            }
        ]
    },
    {
        id: "cnap",
        title: "Certified Nonprofit Administrative Professional",
        code: "CNAP",
        category: "project",
        delivery: "Self-Paced Learning",
        duration: "4 Months",
        schedule: "Continuous",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-teal-100 text-teal-800",
        summary: "Governance, donor relations, grant administration, and operational compliance for non-profit entities.",
        objectives: [
            "Manage grant accounting and regulatory compliance for NGOs.",
            "Structure NGO board governance and donor stewardship plans.",
            "Optimize operational logistics in humanitarian projects."
        ],
        audience: "NGO Managers, Nonprofit Administrators, Project Officers, Grant Coordinators.",
        syllabus: [
            { module: "Module 1: Nonprofit Financial & Grant Management", content: "Grant accounting, donor reporting, and restricted funding compliance." }
        ],
        books: [{ title: "Nonprofit Management: Principles and Practice", author: "Michael J. Worth", year: "2021" }],
        references: ["UN Grant Management Guidelines", "CPD Nonprofit Standards"],
        quiz: [
            {
                q: "Why is restricted funding unique in NGO management?",
                options: ["It can be spent on anything", "It must be used strictly for the specific purpose designated by donors", "It requires no accounting", "It is untaxed profit"],
                answer: 1
            }
        ]
    },
    {
        id: "clfs",
        title: "Certified Logical Framework Specialist",
        code: "CLFS",
        category: "project",
        delivery: "Self-Paced Learning",
        duration: "4 Months",
        schedule: "Flexible",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-cyan-100 text-cyan-800",
        summary: "Design, implementation, and verification using the LogFrame Approach for complex development initiatives.",
        objectives: [
            "Construct comprehensive 4x4 LogFrame Matrices.",
            "Identify verifiable indicators, sources of verification, and critical assumptions.",
            "Align project activities with strategic impact objectives."
        ],
        audience: "Project Directors, M&E Specialists, NGO Consultants, Policy Officers.",
        syllabus: [
            { module: "Module 1: The Logical Framework Approach (LFA)", content: "Problem tree analysis, objective trees, and LogFrame construction." }
        ],
        books: [{ title: "Project Management for Development Professionals", author: "PM4DEV", year: "2020" }],
        references: ["OECD DAC Project Evaluation Standards", "EU Project Cycle Management Guidelines"],
        quiz: [
            {
                q: "In a LogFrame matrix, what links project outputs to outcomes?",
                options: ["Critical Assumptions", "Direct cash payments", "Software code", "Random selection"],
                answer: 0
            }
        ]
    },
    {
        id: "cprrs",
        title: "Certified Project Review and Recovery Specialist",
        code: "CPRRS",
        category: "project",
        delivery: "Self-Paced Learning",
        duration: "4 Months",
        schedule: "Flexible Entry",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-rose-100 text-rose-800",
        summary: "Auditing troubled projects, forensic root cause analysis, restructuring project scopes, and turnaround management.",
        objectives: [
            "Perform health-check reviews on troubled or delayed projects.",
            "Formulate rapid turnaround and scope realignment strategies.",
            "Negotiate stakeholder expectations during project recovery."
        ],
        audience: "Senior Project Managers, PMO Heads, Turnaround Consultants, Operations Directors.",
        syllabus: [
            { module: "Module 1: Project Diagnostics & Forensic Review", content: "Identifying early warning signs of project failure and cost overruns." }
        ],
        books: [{ title: "Rescuing Troubled Projects", author: "Trevor L. Young", year: "2018" }],
        references: ["PMI Standard for Project Risk & Diagnostics"],
        quiz: [
            {
                q: "What is the first step in project recovery management?",
                options: ["Fire the team", "Conduct a diagnostic health check and root cause analysis", "Increase budget blindly", "Cancel all deliverables"],
                answer: 1
            }
        ]
    },
    {
        id: "cadp",
        title: "Certified Administrative Professional",
        code: "CAdP",
        category: "project",
        delivery: "Self-Paced Learning",
        duration: "4 Months",
        schedule: "Continuous",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-orange-100 text-orange-800",
        summary: "Executive office operations, document control, workflow automation, and executive assistant leadership.",
        objectives: [
            "Master modern executive office workflow administration.",
            "Implement high-efficiency digital filing, calendar, and task management systems.",
            "Manage corporate communication and stakeholder relations."
        ],
        audience: "Executive Assistants, Office Managers, Administrative Officers, Operations Leads.",
        syllabus: [
            { module: "Module 1: Executive Office Management", content: "Optimizing office operations, records management, and executive support." }
        ],
        books: [{ title: "The Definitive Executive Assistant Handbook", author: "Sue France", year: "2021" }],
        references: ["CPD Administrative Excellence Framework"],
        quiz: [
            {
                q: "Which skill is critical for modern Executive Administrative Professionals?",
                options: ["Advanced workflow automation and priority management", "Manual typing only", "Hardware soldering", "Cold calling sales"],
                answer: 0
            }
        ]
    },
    {
        id: "cspmp",
        title: "Certified Strategic Project Management Practitioner",
        code: "CSPMP",
        category: "project",
        delivery: "Self-Paced Learning",
        duration: "4 Months",
        schedule: "Continuous",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-slate-200 text-slate-800",
        summary: "Aligning multi-project portfolios with executive business strategy, governance, and resource optimization.",
        objectives: [
            "Link project execution metrics directly to C-suite corporate strategies.",
            "Manage complex multi-project portfolios and resource conflicts.",
            "Establish high-performing Project Management Offices (PMO)."
        ],
        audience: "Program Managers, PMO Directors, Operations Executives, Project Consultants.",
        syllabus: [
            { module: "Module 1: Strategic Project Alignment & Portfolio Management", content: "Selecting and prioritizing projects based on business value creation." }
        ],
        books: [{ title: "Strategic Project Management Made Simple", author: "Terry Schmidt", year: "2021" }],
        references: ["PMI Standard for Portfolio Management 4th Ed"],
        quiz: [
            {
                q: "Strategic Project Management primarily aligns projects with what?",
                options: ["Daily operational routines", "Executive corporate objectives and value creation", "Random ideas", "Vendor discounts"],
                answer: 1
            }
        ]
    },
    {
        id: "ccfa",
        title: "Certified Corporate Finance Analyst",
        code: "CCFA",
        category: "finance",
        delivery: "Zoom Interactive",
        duration: "08 Sessions, 04 Months",
        schedule: "Sunday 22 NOV 2026 | 2:00-4:00 PM GMT / 5:00-7:00 PM EAT",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-blue-100 text-blue-900",
        summary: "Financial modeling, capital budgeting, corporate valuation, and M&A transaction analysis.",
        objectives: [
            "Build dynamic 3-statement financial models and forecasting scenarios.",
            "Evaluate capital expenditure decisions using NPV, IRR, and Payback periods.",
            "Perform valuation analyses using DCF and Comparable Company Analysis."
        ],
        audience: "Financial Analysts, Corporate Accountants, Investment Banking Associates, Finance Managers.",
        syllabus: [
            { module: "Module 1: Financial Statement Analysis & Modeling", content: "Income statement, balance sheet, and cash flow integration in Excel." },
            { module: "Module 2: Capital Budgeting & Valuation Techniques", content: "Discounted cash flow (DCF), WACC calculation, and sensitivity analysis." }
        ],
        books: [{ title: "Corporate Finance", author: "Jonathan Berk & Peter DeMarzo", year: "2020" }],
        references: ["CPD Corporate Finance Guidelines"],
        quiz: [
            {
                q: "Which valuation metric calculates the net present value of expected cash flows?",
                options: ["DCF", "SWOT", "P/E ratio alone", "Gross margin"],
                answer: 0
            }
        ]
    },
    {
        id: "chrg",
        title: "Certified Human Resource Generalist",
        code: "CHRG",
        category: "hr",
        delivery: "Zoom Interactive",
        duration: "10 Sessions, 04 Months",
        schedule: "Friday 20 NOV 2026 | 2:00-4:00 PM GMT / 5:00-7:00 PM EAT",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-yellow-100 text-yellow-800",
        summary: "End-to-end operational HR, talent acquisition, labor law compliance, performance management, and employee relations.",
        objectives: [
            "Execute complete recruitment, onboarding, and offboarding workflows.",
            "Draft compliant employment contracts and workplace policies.",
            "Manage performance management cycles and disciplinary procedures."
        ],
        audience: "HR Executives, Generalists, HR Officers, Personnel Administrators.",
        syllabus: [
            { module: "Module 1: Talent Acquisition & Employee Lifecycle", content: "Job architecture, behavioral interviewing, and onboarding protocols." },
            { module: "Module 2: Labor Law & Employee Relations", content: "Handling grievances, statutory compliance, and performance improvement plans." }
        ],
        books: [{ title: "Human Resource Management", author: "Gary Dessler", year: "2020" }],
        references: ["ILO International Labour Standards", "CPD HR Generalist Competency Code"],
        quiz: [
            {
                q: "What is a primary responsibility of an HR Generalist?",
                options: ["Managing core HR operations, compliance, and employee relations across the lifecycle", "Designing server networks", "Executing financial audits", "Managing logistics fleets"],
                answer: 0
            }
        ]
    },
    {
        id: "dmeal",
        title: "Diploma in Monitoring Evaluation, Accountability & Learning",
        code: "DMEAL",
        category: "project",
        delivery: "Zoom Interactive",
        duration: "32 Classes, 06 Months",
        schedule: "Sunday 15 NOV 2026 | 2:00-4:30 PM GMT / 5:00-7:30 PM EAT",
        accreditation: "World Academy, CPD, FieldMind",
        badgeColor: "bg-emerald-100 text-emerald-900",
        summary: "Comprehensive MEAL framework design, quantitative/qualitative data collection, accountability mechanisms, and learning systems.",
        objectives: [
            "Construct robust MEAL plans for large-scale international development initiatives.",
            "Design digital mobile data collection tools (KoboToolbox/ODK).",
            "Establish community feedback and accountability mechanisms."
        ],
        audience: "M&E Officers, MEAL Specialists, NGO Managers, Field Coordinators, Researchers.",
        syllabus: [
            { module: "Module 1: Fundamentals of MEAL & Theory of Change", content: "Designing indicators, baselines, and intervention logic." },
            { module: "Module 2: Digital Data Collection & Analysis", content: "Mobile data collection platforms, SPSS/Excel quantitative analysis." }
        ],
        books: [{ title: "RealWorld Evaluation", author: "Michael Bamberger et al.", year: "2019" }],
        references: ["Sphere Handbook Minimum Standards", "ALNAP Evaluation Guidelines"],
        quiz: [
            {
                q: "What does MEAL stand for?",
                options: ["Monitoring, Evaluation, Accountability, and Learning", "Management, Expense, Audit, and Logistics", "Method, Engagement, Alignment, and Leadership", "Metrics, Efficiency, Analysis, and Labor"],
                answer: 0
            }
        ]
    },
    {
        id: "cfrm",
        title: "Certified Financial Risk Manager",
        code: "CFRM",
        category: "finance",
        delivery: "Zoom Interactive",
        duration: "08 Sessions, 4 Months",
        schedule: "Saturday 14 NOV 2026 | 2:00-4:00 PM GMT / 5:00-7:00 PM EAT",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-yellow-100 text-yellow-900",
        summary: "Identification, quantification, and management of market, credit, operational, and liquidity risks.",
        objectives: [
            "Measure Market Risk using Value at Risk (VaR) models.",
            "Evaluate credit default risk and counterparty exposure.",
            "Formulate Enterprise Risk Management (ERM) frameworks."
        ],
        audience: "Risk Analysts, Chief Risk Officers, Compliance Officers, Treasury Managers.",
        syllabus: [
            { module: "Module 1: Market Risk & Value at Risk (VaR)", content: "Historical simulation, parametric, and Monte Carlo risk measurement." }
        ],
        books: [{ title: "Financial Risk Manager Handbook", author: "Philippe Jorion", year: "2020" }],
        references: ["Basel III Accord Standards", "ISO 31000 Risk Management Standard"],
        quiz: [
            {
                q: "What does Value at Risk (VaR) measure?",
                options: ["The maximum expected loss over a specific timeframe at a given confidence level", "The net profit margin", "The interest rate on loans", "Stock dividends"],
                answer: 0
            }
        ]
    },
    {
        id: "cpfa",
        title: "Certified Project Finance Analyst",
        code: "CPFA",
        category: "finance",
        delivery: "Zoom Interactive",
        duration: "10 Sessions, 04 Months",
        schedule: "Sunday 04 OCT 2026 | 2:00-4:00 PM GMT / 5:00-7:00 PM EAT",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-orange-100 text-orange-900",
        summary: "Structuring, evaluating, and financing non-recourse infrastructure and energy project finance deals.",
        objectives: [
            "Structure non-recourse project financing and Special Purpose Vehicles (SPV).",
            "Build project finance cash flow waterfall models.",
            "Analyze Debt Service Coverage Ratios (DSCR) and Loan Life Coverage Ratios (LLCR)."
        ],
        audience: "Project Finance Analysts, Infrastructure Developers, Corporate Bankers, Financial Advisors.",
        syllabus: [
            { module: "Module 1: Project Finance Structuring & SPVs", content: "Risk allocation, off-take agreements, and concession contracts." }
        ],
        books: [{ title: "Principles of Project Finance", author: "E.R. Yescombe", year: "2020" }],
        references: ["Equator Principles for Infrastructure Project Finance"],
        quiz: [
            {
                q: "What is DSCR used for in project finance?",
                options: ["To measure a project's cash flow capacity to service its debt obligations", "To calculate marketing revenue", "To evaluate tax rates", "To count employees"],
                answer: 0
            }
        ]
    },
    {
        id: "ckpis",
        title: "Certified KPI Specialist",
        code: "CKPIS",
        category: "hr",
        delivery: "Zoom Interactive",
        duration: "10 Sessions, 4 Months",
        schedule: "Friday 02 OCT 2026 | 2:00-4:00 PM GMT / 5:00-7:00 PM EAT",
        accreditation: "World Academy, CPD, UKRLP, CAP",
        badgeColor: "bg-sky-100 text-sky-900",
        summary: "Selecting, designing, and implementing Key Performance Indicators using Balanced Scorecards and OKRs.",
        objectives: [
            "Design SMART KPIs tailored to strategic department goals.",
            "Implement Balanced Scorecards and Objectives & Key Results (OKRs).",
            "Establish KPI data collection dashboards and performance reporting routines."
        ],
        audience: "Performance Managers, Strategy Officers, HR Managers, Department Heads.",
        syllabus: [
            { module: "Module 1: KPI Design & Cascading Methodology", content: "Translating executive strategy into operational KPIs across departments." }
        ],
        books: [{ title: "KPI Mega Library: 36,000+ Key Performance Indicators", author: "Rachad Baroudi", year: "2021" }],
        references: ["The Key Performance Indicator Institute Framework"],
        quiz: [
            {
                q: "What is a major advantage of the Balanced Scorecard framework?",
                options: ["It tracks performance across financial and non-financial perspectives", "It eliminates the need for metrics", "It focuses only on short-term cash", "It is used for tax filing only"],
                answer: 0
            }
        ]
    },
    {
        id: "cpt",
        title: "Certified Professional Trainer",
        code: "CPT",
        category: "hr",
        delivery: "Zoom Interactive",
        duration: "08 Sessions, 04 Months",
        schedule: "Sunday 25 OCT 2026 | 02:00-04:00 PM GMT / 05:00-07:00 PM EAT",
        accreditation: "World Academy, CPD, GDT",
        badgeColor: "bg-indigo-100 text-indigo-900",
        summary: "Train-the-Trainer mastery: adult learning theories, dynamic facilitation techniques, course design, and training evaluation.",
        objectives: [
            "Apply Knowles' Adult Learning Theory (Andragogy) to instructional design.",
            "Master interactive classroom facilitation and virtual delivery techniques.",
            "Evaluate training effectiveness using the Kirkpatrick 4-Level Model."
        ],
        audience: "Corporate Trainers, Facilitators, L&D Specialists, Technical Instructors.",
        syllabus: [
            { module: "Module 1: Adult Learning Principles & Design", content: "Andragogy vs pedagogy, learning styles, and instructional scaffolding." },
            { module: "Module 2: Facilitation Skills & Kirkpatrick Evaluation", content: "Managing difficult group dynamics and quantifying training impact." }
        ],
        books: [{ title: "Telling Ain't Training", author: "Harold D. Stolovitch", year: "2020" }],
        references: ["Kirkpatrick Model Standard for Training Evaluation"],
        quiz: [
            {
                q: "Which level in Kirkpatrick's model evaluates behavioral change on the job?",
                options: ["Level 1 (Reaction)", "Level 2 (Learning)", "Level 3 (Behavior)", "Level 4 (Results)"],
                answer: 2
            }
        ]
    },
    {
        id: "webinar-tna",
        title: "Webinar: Strategic TNA - How to Identify the Right Training Needs",
        code: "WEB-TNA",
        category: "webinar",
        delivery: "Live Zoom Webinar",
        duration: "1 Hour (4:00 - 5:00 PM Nepal Time)",
        schedule: "Monday 28 SEP 2026",
        accreditation: "World Academy, CPD (Free Entry - Certificate Available)",
        badgeColor: "bg-purple-100 text-purple-900",
        summary: "Executive masterclass on diagnosing organizational skill deficits before committing corporate training capital.",
        objectives: [
            "Learn how to align training budgets with true business bottlenecks.",
            "Keynote speaker Rupak M Nasrullah Zaidi (VP & Lead Consultant)."
        ],
        audience: "HR Managers, L&D Professionals, Business Leaders.",
        syllabus: [{ module: "Session Highlights", content: "Preventing wasted training spend, strategic skill auditing, diagnostic framework." }],
        books: [{ title: "Strategic Human Resource Development", author: "Jim Grieves", year: "2018" }],
        references: ["World Academy Masterclass Series Notes 2026"],
        quiz: [
            {
                q: "What is the key takeaway of Strategic TNA?",
                options: ["Conducting diagnostic evaluation before investing in training solutions", "Buying generic off-the-shelf courses", "Stopping all employee learning", "Focusing only on technical skills"],
                answer: 0
            }
        ]
    },
    {
        id: "webinar-perf",
        title: "Webinar: Performance by the Numbers - Are You Measuring What Matters?",
        code: "WEB-PERF",
        category: "webinar",
        delivery: "Live Zoom Webinar",
        duration: "1 Hour (10:00 - 11:00 AM Singapore Time)",
        schedule: "Saturday 03 OCT 2026",
        accreditation: "World Academy, CPD (Free Entry - Certificate Available)",
        badgeColor: "bg-teal-100 text-teal-900",
        summary: "Executive masterclass on avoiding vanity performance metrics and focusing on true organizational value drivers.",
        objectives: [
            "Differentiate vanity metrics from actionable outcome indicators.",
            "Keynote speaker Rupak M Nasrullah Zaidi (VP & Lead Consultant)."
        ],
        audience: "CEOs, Strategy Executives, HR Directors, Performance Analysts.",
        syllabus: [{ module: "Session Highlights", content: "Why traditional metrics fail, constructing meaningful performance frameworks." }],
        books: [{ title: "Measure What Matters", author: "John Doerr", year: "2018" }],
        references: ["World Academy Performance Executive Brief"],
        quiz: [
            {
                q: "What characterises a 'vanity metric'?",
                options: ["A metric that looks good on paper but doesn't inform actionable decisions", "A financial cash audit", "An accurate measure of profit", "A compliance certificate"],
                answer: 0
            }
        ]
    }
];

let activeCategory = 'all';
let currentCourse = null;

document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    renderCourseGrid(programsData);
});

function renderCourseGrid(courses) {
    const grid = document.getElementById("courseGrid");
    const noResults = document.getElementById("noResults");
    grid.innerHTML = "";

    if (courses.length === 0) {
        noResults.classList.remove("hidden");
        return;
    } else {
        noResults.classList.add("hidden");
    }

    courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group";
        
        card.innerHTML = `
            <div>
                <div class="p-5 border-b border-slate-100 bg-slate-50/50">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-extrabold px-2.5 py-1 rounded-md ${course.badgeColor}">${course.code}</span>
                        <span class="text-xs text-slate-500 font-medium">${course.delivery}</span>
                    </div>
                    <h3 class="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition leading-snug">${course.title}</h3>
                </div>
                <div class="p-5 space-y-3">
                    <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">${course.summary}</p>
                    <div class="space-y-1 text-xs text-slate-500">
                        <div class="flex items-center"><i data-lucide="calendar" class="w-3.5 h-3.5 mr-1.5 text-amber-500"></i> ${course.schedule}</div>
                        <div class="flex items-center"><i data-lucide="clock" class="w-3.5 h-3.5 mr-1.5 text-indigo-500"></i> ${course.duration}</div>
                    </div>
                </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[10px] text-slate-400 font-medium">CPD Accredited</span>
                <button onclick="openCourseHub('${course.id}')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center transition shadow-sm">
                    Access Learning Portal <i data-lucide="chevron-right" class="w-3.5 h-3.5 ml-1"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    lucide.createIcons();
}

function setCategory(cat) {
    activeCategory = cat;
    
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.className = "cat-btn bg-white text-slate-600 hover:bg-slate-100 px-4 py-2 rounded-lg whitespace-nowrap border border-slate-200 text-sm font-medium";
    });
    
    const activeBtn = document.getElementById(`btn-${cat}`);
    if (activeBtn) {
        activeBtn.className = "cat-btn bg-slate-900 text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-sm text-sm font-medium";
    }

    applyFilters();
}

function filterCourses() {
    applyFilters();
}

function filterCoursesMobile() {
    const val = document.getElementById("mobileSearchInput").value;
    document.getElementById("searchInput").value = val;
    applyFilters();
}

function applyFilters() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();

    const filtered = programsData.filter(course => {
        const matchesCategory = (activeCategory === 'all') || (course.category === activeCategory);
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) ||
                              course.code.toLowerCase().includes(searchTerm) ||
                              course.summary.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    renderCourseGrid(filtered);
}

function openCourseHub(courseId) {
    currentCourse = programsData.find(c => c.id === courseId);
    if (!currentCourse) return;

    document.getElementById("hubTitle").innerText = currentCourse.title;
    document.getElementById("hubSubtitle").innerText = currentCourse.summary;
    document.getElementById("hubCodeBadge").innerText = currentCourse.code;
    document.getElementById("hubCategoryBadge").innerText = currentCourse.category.toUpperCase();
    document.getElementById("hubSchedule").innerText = currentCourse.schedule;
    document.getElementById("hubDuration").innerText = currentCourse.duration;
    document.getElementById("hubDelivery").innerText = currentCourse.delivery;
    document.getElementById("hubAccreditation").innerText = currentCourse.accreditation;

    const objList = document.getElementById("hubObjectives");
    objList.innerHTML = "";
    currentCourse.objectives.forEach(obj => {
        const li = document.createElement("li");
        li.innerText = obj;
        objList.appendChild(li);
    });
    document.getElementById("hubAudience").innerText = currentCourse.audience;

    const syllabusContainer = document.getElementById("hubSyllabusContainer");
    syllabusContainer.innerHTML = "";
    currentCourse.syllabus.forEach(m => {
        const div = document.createElement("div");
        div.className = "p-4 bg-slate-50 rounded-lg border border-slate-200";
        div.innerHTML = `
            <h4 class="font-bold text-slate-800 text-sm mb-1">${m.module}</h4>
            <p class="text-slate-600 text-xs leading-relaxed">${m.content}</p>
        `;
        syllabusContainer.appendChild(div);
    });

    const booksContainer = document.getElementById("hubBooksContainer");
    booksContainer.innerHTML = "";
    currentCourse.books.forEach(b => {
        const card = document.createElement("div");
        card.className = "p-4 border rounded-xl bg-slate-50 flex items-start space-x-3";
        card.innerHTML = `
            <div class="bg-indigo-100 p-2.5 rounded-lg text-indigo-700">
                <i data-lucide="book" class="w-5 h-5"></i>
            </div>
            <div>
                <h5 class="font-bold text-slate-800 text-sm">${b.title}</h5>
                <p class="text-xs text-slate-500">Author: ${b.author} (${b.year})</p>
                <span class="inline-block mt-2 text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">Recommended Text</span>
            </div>
        `;
        booksContainer.appendChild(card);
    });

    const refContainer = document.getElementById("hubReferencesContainer");
    refContainer.innerHTML = "";
    currentCourse.references.forEach(r => {
        const item = document.createElement("div");
        item.className = "p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center text-xs text-slate-700 font-medium";
        item.innerHTML = `<i data-lucide="bookmark" class="w-4 h-4 text-amber-500 mr-2 flex-shrink-0"></i> ${r}`;
        refContainer.appendChild(item);
    });

    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = "";
    document.getElementById("quizScoreBadge").classList.add("hidden");

    currentCourse.quiz.forEach((q, idx) => {
        const qBox = document.createElement("div");
        qBox.className = "space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200";
        
        let optionsHTML = "";
        q.options.forEach((opt, oIdx) => {
            optionsHTML += `
                <label class="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer p-2 rounded hover:bg-slate-200/60 transition">
                    <input type="radio" name="quiz_q${idx}" value="${oIdx}" class="text-indigo-600 focus:ring-indigo-500">
                    <span>${opt}</span>
                </label>
            `;
        });

        qBox.innerHTML = `
            <p class="font-bold text-xs sm:text-sm text-slate-800">${idx + 1}. ${q.q}</p>
            <div class="space-y-1">${optionsHTML}</div>
        `;
        quizContainer.appendChild(qBox);
    });

    const savedNotes = localStorage.getItem(`notes_${currentCourse.id}`) || "";
    document.getElementById("userNotesTextArea").value = savedNotes;

    document.getElementById("catalogView").classList.add("hidden");
    document.getElementById("headerSearchContainer").classList.add("hidden");
    document.getElementById("courseHubView").classList.remove("hidden");

    switchHubTab('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    lucide.createIcons();
}

function closeCourseHub() {
    document.getElementById("courseHubView").classList.add("hidden");
    document.getElementById("catalogView").classList.remove("hidden");
    document.getElementById("headerSearchContainer").classList.remove("hidden");
    currentCourse = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchHubTab(tabName) {
    document.querySelectorAll('.hub-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.hub-tab-btn').forEach(btn => {
        btn.className = "hub-tab-btn py-3.5 border-b-2 border-transparent text-slate-500 hover:text-slate-800 whitespace-nowrap flex items-center";
    });

    document.getElementById(`hubContent-${tabName}`).classList.remove('hidden');
    const activeTabBtn = document.getElementById(`tabBtn-${tabName}`);
    if (activeTabBtn) {
        activeTabBtn.className = "hub-tab-btn py-3.5 border-b-2 border-indigo-600 text-indigo-600 whitespace-nowrap flex items-center";
    }
}

function gradeQuiz() {
    if (!currentCourse) return;
    let score = 0;
    const total = currentCourse.quiz.length;

    currentCourse.quiz.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="quiz_q${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    const scoreBadge = document.getElementById("quizScoreBadge");
    scoreBadge.innerText = `Score: ${score} / ${total} (${Math.round((score/total)*100)}%)`;
    scoreBadge.classList.remove("hidden");
    
    if (score === total) {
        scoreBadge.className = "text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full";
    } else {
        scoreBadge.className = "text-xs font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-full";
    }
}

function saveUserNotes() {
    if (!currentCourse) return;
    const notesText = document.getElementById("userNotesTextArea").value;
    localStorage.setItem(`notes_${currentCourse.id}`, notesText);
    
    const status = document.getElementById("saveStatus");
    status.innerText = "Saved to browser storage!";
    setTimeout(() => {
        status.innerText = "Auto-saves to local storage";
    }, 2000);
}