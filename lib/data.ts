import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'lorenzoadacher@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Lorenzo, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Lod34' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/lorenzoadacher' },
    { name: 'facebook', url: 'https://www.facebook.com/lorenzo.adacher' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    programming: [
        { name: 'C++', icon: '/logo/Cpp.png' },
        { name: 'Python', icon: '/logo/Python.png' },
        { name: 'Java', icon: '/logo/Java Icon.png' },
        { name: 'Javascript', icon: '/logo/Javascript.png' },
        { name: 'HTML5', icon: '/logo/Html5.png' },
        { name: 'CSS3', icon: '/logo/Css.png' },
        { name: 'Powershell', icon: '/logo/Powershell.png' },
        { name: 'Markdown', icon: '/logo/Markdown.png' },
    ],
    ai_ml: [
        { name: 'PyTorch', icon: '/logo/Pytorch.png' },
        { name: 'TensorFlow', icon: '/logo/Tensorflow.png' },
        { name: 'Scikit-learn', icon: '/logo/Scikit-Learn.png' },
        { name: 'Matplotlib', icon: '/logo/Matplotlib.png' },
        { name: 'Pandas', icon: '/logo/Pandas.png' },
        { name: 'Numpy', icon: '/logo/Numpy.png' },
        { name: 'Anaconda', icon: '/logo/Anaconda.png' },
    ],
    electronics: [
        { name: 'Arduino', icon: '/logo/Arduino.png' },
        { name: 'Digispark', icon: '/logo/Digispark.png' },
    ],
    design: [
        { name: 'Adobe Illustrator', icon: '/logo/Adobe Illustrator Icon.png' },
        { name: 'Adobe Photoshop', icon: '/logo/Adobe Photoshop Icon.png' },
        { name: 'Adobe Premiere Pro', icon: '/logo/Adobe Premiere Pro.png' },
        { name: 'Adobe After Effects', icon: '/logo/Adobe After Effects.png' },
        { name: 'Aseprite', icon: '/logo/Aseprite.png' },
        { name: 'Canva', icon: '/logo/Canva.png' },
        { name: 'SketchUp', icon: '/logo/Sketchup.png' },
    ],
    game_dev: [
        { name: 'Godot', icon: '/logo/Godot.png' },
        { name: 'Itch', icon: '/logo/Itch.png' },
    ],
    productivity: [
        { name: 'Notion', icon: '/logo/Notion.png' },
        { name: 'Alfred', icon: '/logo/Alfred.png' },
        { name: 'Portfolio', icon: '/logo/Portfolio.png' },
    ],
    version_control: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
    ],
    utilities: [
        { name: 'TOR', icon: '/logo/Tor.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Animator2D',
        slug: 'animator2d',
        techStack: ['Python', 'PyTorch', 'AI', 'Jupyter Notebook'],
        thumbnail: '/logo/Portfolio.png',
        longThumbnail: '/logo/Portfolio.png',
        images: [],
        sourceCode: 'https://github.com/Lod34/Animator2D',
        year: 2025,
        description: 'Animator2D is an AI model that generates pixel-art sprite animations from text descriptions. It supports custom actions, directions, and frames, exporting the result as a GIF or sprite sheet. Designed for indie game developers, it transforms prompts like “a knight in red armor attacking with a sword, facing right” into animated sequences. The project explores modular AI workflows and advanced dataset management.',
        role: 'Creator & AI Developer',
    },
    {
        title: 'Scoundrels Kingdom',
        slug: 'scoundrels-kingdom',
        techStack: ['Godot', 'GDScript', 'C#', 'Game Development'],
        thumbnail: '/logo/Portfolio.png',
        longThumbnail: '/logo/Portfolio.png',
        images: [],
        sourceCode: 'https://github.com/Lod34/Scoundrels-Kingdom',
        year: 2025,
        description: 'Scoundrels Kingdom is an adventure RPG set in a fantasy kingdom full of magic, intrigue, and dark secrets. Players explore a vast open world, navigate complex political power games, and face tactical challenges against mystical creatures and cunning enemies.',
        role: 'Game Designer & Lead Developer',
    },
    {
        title: 'Knowledge Tribute',
        slug: 'knowledge-tribute',
        techStack: [],
        thumbnail: '/logo/Portfolio.png',
        longThumbnail: '/logo/Portfolio.png',
        images: [],
        sourceCode: 'https://github.com/Lod34/Knowledge-Tribute',
        year: 2025,
        description: 'Knowledge Tribute: repository not found or unavailable. Please check the repository for more details.',
        role: '',
    },
    {
        title: 'MultiBoot USB',
        slug: 'multiboot-usb',
        techStack: ['Ventoy', 'Kali Linux', 'Tails', 'USB', 'Bootable Media'],
        thumbnail: '/logo/Portfolio.png',
        longThumbnail: '/logo/Portfolio.png',
        images: [],
        sourceCode: 'https://github.com/Lod34/MultiBoot-USB',
        year: 2025,
        description: 'MultiBoot USB is a personal project to create a bootable USB drive with multiple operating systems (Kali Linux ARM/x86_64, Tails) for both ARM64 and x86_64 devices. Using Ventoy, the USB can boot on Macs and PCs, providing a portable toolkit for security, privacy, and experimentation.',
        role: 'Creator & Documenter',
    },
    {
        title: 'Asian Session Breakout Strategy',
        slug: 'asian-session-breakout-strategy',
        techStack: ['TradingView', 'Pine Script', 'Forex', 'Strategy'],
        thumbnail: '/logo/Portfolio.png',
        longThumbnail: '/logo/Portfolio.png',
        images: [],
        sourceCode: 'https://github.com/Lod34/Asian-Session-Breakout-Strategy',
        year: 2025,
        description: 'A forex trading strategy that takes advantage of the opening dynamics of the European and American sessions after the Asian session. It detects structural changes and makes precise entries during retracements, maximizing potential profits while minimizing risks. Designed for use on TradingView.',
        role: 'Strategy Developer',
    },
    {
        title: 'TrendBars Strategy',
        slug: 'trendbars-strategy',
        techStack: [],
        thumbnail: '/logo/Portfolio.png',
        longThumbnail: '/logo/Portfolio.png',
        images: [],
        sourceCode: 'https://github.com/Lod34/TrendBars-Strategy',
        year: 2025,
        description: 'TrendBars Strategy: repository not found or unavailable. Please check the repository for more details.',
        role: '',
    },
    {
        title: 'Equity Curve Simulator',
        slug: 'equity-curve-simulator',
        techStack: ['Python', 'JavaScript', 'HTML', 'CSS'],
        thumbnail: '/logo/Portfolio.png',
        longThumbnail: '/logo/Portfolio.png',
        images: [],
        sourceCode: 'https://github.com/Lod34/Equity-Curve-Simulator',
        year: 2025,
        description: 'A web application that simulates a trading system, displaying the results of various simulations in real-time. Features an interactive interface with custom sliders to adjust trading system parameters such as win probability, initial capital, risk per trade, and profit/risk ratio.',
        role: 'Full Stack Developer',
    },
    {
        title: 'Arduino Door Sensor',
        slug: 'sensore-porta-arduino',
        techStack: ['Arduino', 'C++', 'Electronics'],
        thumbnail: '/logo/Portfolio.png',
        longThumbnail: '/logo/Portfolio.png',
        images: [],
        sourceCode: 'https://github.com/Lod34/Sensore-porta-Arduino',
        year: 2025,
        description: 'An alarm sensor for a door created with Arduino Uno. It uses an ultrasonic sensor and an IR receiver to detect when the door is opened and triggers a sound and light alarm. This is an educational and practical project for home security.',
        role: 'Maker & Programmer',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'High School Student (Robotics Track)',
        company: 'Liceo Scientifico',
        duration: '2021 - Present',
    },
    {
        title: 'Freelance Developer (Arduino, Digispark, Web)',
        company: 'Fiverr',
        duration: '2022 - 2023',
    },
    {
        title: 'Freelance Video Editor (Clips for Creators)',
        company: 'Self-employed',
        duration: '2024 - Present',
    },
    {
        title: 'Independent Trader (Forex, Crypto, Stocks)',
        company: 'Self-employed',
        duration: '2022 - Present',
    },
];
