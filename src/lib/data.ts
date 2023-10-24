import { LanguageIcon, InboxStackIcon, ServerStackIcon, TableCellsIcon, ShareIcon } from '@heroicons/react/24/solid';

export const menuItemsData = [
    {
        name: "Home",
        link: "#home"
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Projects",
        link: "#projects"
    },
    {
        name: "Contact",
        link: "#contact"
    },
] as const;

export const skillsData = [
    {
        title: "Languages",
        items: ["HTML, CSS (SCSS, BEM)", "JavaScript ES6+", "TypeScript"],
        icon: LanguageIcon
    },
    {
        title: "Frameworks & Libraries",
        items: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
        icon: InboxStackIcon
    },
    {
        title: "Backend",
        items: ["Node.js (Express.js)", "PHP"],
        icon: ServerStackIcon
    },
    {
        title: "Databases",
        items: ["MongoDB", "MySQL"],
        icon: TableCellsIcon
    },
    {
        title: "API",
        items: ["RESTful API"],
        icon: ShareIcon
    },
] as const;

export const projectsData = [
    {
        title: "Warehouse",
        description: "A platform that synchronizes stock levels and prices from suppliers, enables product creation using supplier data, and provides automatic variations for seamless inventory management.",
        tags: ["React", "Redux", "MongoDB", "Node.js", "suppliers APIs"],
        category: "Full stack",
        images: ["/iidev-default.jpg"],
        project_link: "",
        github_link: "https://github.com/iidevv/dmg-inventory"

    },
    {
        title: "AI SEO Tool",
        description: "Using supplier descriptions, it creates SEO-optimized product listings powered by Chat GPT, ensuring enhanced online visibility and improved search rankings.",
        tags: ["React", "Redux", "Node.js", "ChatGPT API"],
        category: "Full stack",
        images: ["/iidev-default.jpg"],
        project_link: "",
        github_link: "https://github.com/iidevv/dmg-inventory"

    },
    {
        title: "Dropshipping system",
        description: "An efficient platform that captures all order details and facilitates one-click order placement with suppliers, simplifying the entire procurement process.",
        tags: ["React", "Node.js", "Dropshipping APIs"],
        category: "Full stack",
        images: ["/iidev-default.jpg"],
        project_link: "",
        github_link: "https://github.com/iidevv/dmg-inventory"

    },
    {
        title: "Visualizer",
        description: "A versatile tool that operates as a slider, allowing users to overlay various flooring options onto multiple interior scenes. This interactive approach helps in visualizing and choosing the ideal flooring for diverse design settings.",
        tags: ["React", "Typescript", "PHP", "MySQL"],
        category: "Full stack",
        images: ["/iidev-default.jpg"],
        project_link: "",
        github_link: "https://github.com/iidevv/dmg-inventory"

    },
    {
        title: "Data parser",
        description: "A comprehensive tool that utilizes Puppeteer for product data scraping, while leveraging PapaParse for CSV parsing and 'xlsx' for handling XLSX files, ensuring versatile data extraction capabilities.",
        tags: ["Node.js", "Puppeteer", "PapaParse"],
        category: "Backend",
        images: ["/iidev-default.jpg"],
        project_link: "",
        github_link: "https://github.com/iidevv/dmg-inventory"

    },
    {
        title: "Image Optimizer",
        description: "An essential tool that facilitates image optimization during product creation. It fine-tunes the images by adjusting their size, add backgrounds, and converts them to a single format, providing a web-friendly experience.",
        tags: ["Node.js", "sharp", "file system"],
        category: "Backend",
        images: ["/iidev-default.jpg"],
        project_link: "",
        github_link: "https://github.com/iidevv/dmg-inventory"
    }
] as const;
