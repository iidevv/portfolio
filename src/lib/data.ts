import { LanguageIcon, InboxStackIcon, ServerStackIcon, TableCellsIcon, ShareIcon } from '@heroicons/react/24/solid';

export interface ProjectI {
    id: number;
    title: string;
    description: string;
    tags: string[];
    category: string;
    thumbnail: string;
    images: string[];
    project_link: string;
    github_link: string;
}

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
        id: 1,
        title: "Warehouse Web App",
        description: `
        The goal of this project is to create a highly efficient and easy to use e-commerce platform that will integrate with large suppliers. This will allow for quick products filling for BigCommerce, reducing time costs and simplifying the assortment management process.

        Project Features:
        
        Integrations with large Vendors: I have provided integration with leading distributors, which will automate the purchasing and products management process. This will also provide instant access to a wide range of products.
        
        Quickly filling BigCommerce products: With my platform, products can be quickly and easily uploaded to BigCommerce. This simplifies the process of adding new products.
        
        Chat GPT integration: I integrated an AI chatbot based on GPT for description and SEO.
        
        Stock and price synchronization: the system automatically synchronizes stocks and prices with Vendors. This helps prevent errors in accounting and inventory management, and keeps prices up to date.
        
        Ability to customize products: The platform offers a powerful tool for product customization, allowing you to make individual changes to descriptions, price and other product features depending on business needs.
        
        The project is aimed at optimizing business processes and increasing the efficiency of online stores.
        `,
        tags: ["React", "Redux", "Node.js", "MongoDB", "SCSS", "Tailwind CSS", "JavaScript", "HTML5", "ExpressJS", "BigCommerce", "API Integration"],
        category: "Full stack",
        thumbnail: "/projects/1_warehouse/thumbnail.jpg",
        images: [
            "/projects/1_warehouse/1.jpg",
            "/projects/1_warehouse/2.jpg",
            "/projects/1_warehouse/3.jpg",
            "/projects/1_warehouse/4.jpg",
            "/projects/1_warehouse/5.jpg",
        ],
        project_link: "",
        github_link: "https://github.com/iidevv/dmg-inventory"

    },
    {
        id: 2,
        title: "Flooring website",
        description: `
        - Recreating website from scratch (frontend, backend)
        - Google spreadsheets API integrations (Inventory sheet)
        - Connecting with quickbooks via Zapier
        - Affiliate program (Plugin customization)
        - Product samples (created the plugin)
        - Ajax blog
        - Ajax gallery
        - Product options plugin customization (correct display of the price when changing the quantity of products)
        - SEO optimization (titles, descriptions, image attributes, correct robots.txt and sitemap)
        `,
        tags: ["HTML", "CSS", "SCSS", "JavaScript", "PHP", "GULP", "React", "APIs", "WooCommerce"],
        category: "Full stack",
        thumbnail: "/projects/2_flooring/thumbnail.jpg",
        images: [
            "/projects/2_flooring/1.jpg",
            "/projects/2_flooring/2.jpg",
            "/projects/2_flooring/3.jpg",
            "/projects/2_flooring/4.jpg",
            "/projects/2_flooring/5.jpg",
            "/projects/2_flooring/6.jpg",
        ],
        project_link: "https://admflooring.com/",
        github_link: ""
    },
    {
        id: 3,
        title: "IT Sales website",
        description: `
        - Development of a website for the sale of IT equipment.
        - Synchronization of products with 4dealers.
        - Sending orders and contact forms to amoCRM.
        - Personal account.
        - The site was made from the layout in figma to the end.
        `,
        tags: ["HTML", "CSS", "SCSS", "JavaScript", "PHP", "GULP", "React", "APIs", "WooCommerce"],
        category: "Full stack",
        thumbnail: "/projects/3_itsales/thumbnail.jpg",
        images: ["/projects/3_itsales/1.jpg"],
        project_link: "",
        github_link: ""

    },
    {
        id: 4,
        title: "GT Safety website",
        description: `
        - from figma to html
        - interactive map
        - animations
        - seo optimization
        - pagespeed optimization
        `,
        tags: ["HTML", "CSS", "SCSS", "Animations", "JavaScript", "GULP"],
        category: "Frontend",
        thumbnail: "/projects/4_gtsafety/thumbnail.jpg",
        images: ["/projects/4_gtsafety/1.jpg"],
        project_link: "https://gtsafety.pro/",
        github_link: ""

    },
    {
        id: 5,
        title: "Ultraparking website",
        description: `
        - from Adobe AI to wordpress
        - seo optimization
        - pagespeed optimization
        `,
        tags: ["HTML", "CSS", "SCSS", "Animations", "JavaScript", "PHP", "WooCommerce", "GULP"],
        category: "Full stack",
        thumbnail: "/projects/5_parking/thumbnail.jpg",
        images: ["/projects/5_parking/1.jpg"],
        project_link: "https://ultraparking.ru/",
        github_link: ""
    },
    {
        id: 6,
        title: "Express Service website",
        description: `
        - from figma to wordpress(woocommerce)
        - seo optimization
        - pagespeed optimization
        `,
        tags: ["HTML", "CSS", "SCSS", "JavaScript", "PHP", "WooCommerce", "GULP"],
        category: "Full stack",
        thumbnail: "/projects/6_express/thumbnail.jpg",
        images: ["/projects/6_express/1.jpg"],
        project_link: "https://express-service-spb.ru/",
        github_link: ""
    },
    {
        id: 7,
        title: "Sims auto website",
        description: `
        - vehicle configurator
        - seo optimization
        - pagespeed optimization
        `,
        category: "Backend",
        tags: ["HTML", "CSS", "SCSS", "JavaScript", "PHP", "WooCommerce"],
        thumbnail: "/projects/7_auto/thumbnail.jpg",
        images: ["/projects/7_auto/1.jpg"],
        project_link: "",
        github_link: ""
    },
    {
        id: 8,
        title: "JK&M website",
        description: `The site was made from the layout in figma to the end`,
        category: "Full stack",
        tags: ["HTML", "CSS", "SCSS", "JavaScript", "PHP", "WordPress"],
        thumbnail: "/projects/8_jkm/thumbnail.jpg",
        images: ["/projects/8_jkm/1.jpg"],
        project_link: "https://jkm.lv/",
        github_link: ""
    }
] as ProjectI[];

// export const projectsData = [
//     {
//         title: "Visualizer",
//         description: "A versatile tool that operates as a slider, allowing users to overlay various flooring options onto multiple interior scenes. This interactive approach helps in visualizing and choosing the ideal flooring for diverse design settings.",
//         tags: ["React", "Swiper", "PHP", "MySQL"],
//         category: "Full stack",
//         images: ["/projects/visualizer-cover.jpg"],
//         project_link: "",
//         github_link: "https://github.com/iidevv/visualizer"

//     },
//     {
//         title: "Warehouse",
//         description: "A platform that synchronizes stock levels and prices from suppliers, enables product creation using supplier data, and provides automatic variations for seamless inventory management.",
//         tags: ["React", "Redux", "MongoDB", "Node.js", "suppliers APIs"],
//         category: "Full stack",
//         images: ["/projects/warehouse-cover.jpg"],
//         project_link: "",
//         github_link: "https://github.com/iidevv/dmg-inventory"

//     },
//     {
//         title: "AI SEO Tool",
//         description: "Using supplier descriptions, it creates SEO-optimized product listings powered by Chat GPT, ensuring enhanced online visibility and improved search rankings.",
//         tags: ["React", "Redux", "Node.js", "ChatGPT API"],
//         category: "Full stack",
//         images: ["/projects/aiseo-cover.jpg"],
//         project_link: "",
//         github_link: "https://github.com/iidevv/dmg-inventory/blob/main/client/src/redux/reducers/pu-product-reducer.js"

//     },
//     {
//         title: "Dropshipping system",
//         description: "An efficient platform that captures all order details and facilitates one-click order placement with suppliers, simplifying the entire procurement process.",
//         tags: ["React", "Node.js", "Dropshipping APIs"],
//         category: "Full stack",
//         images: ["/projects/dropshipping-cover.jpg"],
//         project_link: "",
//         github_link: "https://github.com/iidevv/dmg-inventory/blob/main/server/src/routes/dropship.js"

//     },
//     {
//         title: "Data parser",
//         description: "A comprehensive tool that utilizes Puppeteer for product data scraping, while leveraging PapaParse for CSV parsing and 'xlsx' for handling XLSX files, ensuring versatile data extraction capabilities.",
//         tags: ["Node.js", "Puppeteer", "PapaParse"],
//         category: "Backend",
//         images: ["/iidev-default.jpg"],
//         project_link: "",
//         github_link: "https://github.com/iidevv/dmg-inventory"

//     },
//     {
//         title: "Image Optimizer",
//         description: "An essential tool that facilitates image optimization during product creation. It fine-tunes the images by adjusting their size, add backgrounds, and converts them to a single format, providing a web-friendly experience.",
//         tags: ["Node.js", "sharp", "file system"],
//         category: "Backend",
//         images: ["/iidev-default.jpg"],
//         project_link: "",
//         github_link: "https://github.com/iidevv/dmg-inventory/blob/main/server/src/routes/external/imgs-optimization.js"
//     }
// ] as const;
