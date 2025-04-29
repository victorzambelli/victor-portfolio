interface Project {
    title: string;
    description: string;
    languages: string;
    image: string;
    link: string;
}

interface ProjectsData {
    firstdata: Project[];
    seconddata: Project[];
    thirddata: Project[];
    fourthdata: Project[];
}

export const projectsData: ProjectsData = {
    firstdata: [
        {
        title: "NLW eSports",
        description: "Projeto desenvolvido com base no evento Next Level Week da Rocketseat.",
        languages: "Tecnologias usadas: HTML, CSS, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/NLW-eSports/main/preview.png",
        link: "https://nlw-esports-six.vercel.app/"
        },
        {
        title: "Calculadora",
        description: "Projeto desenvolvido de uma calculadora com funções simples.",
        languages: "Tecnologias usadas: HTML, CSS, JavaScript, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/calculadora/main/preview.png",
        link: "https://calculadora-chi-ashen.vercel.app/"
        },
        {
        title: "Discord Bot Site",
        description: "Projeto desenvolvido para ser um site de um bot discord.",
        languages: "Tecnologias usadas: HTML, CSS, BootStrap, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/discordbot-website/main/preview.png",
        link: "https://discordbot-website.vercel.app/"
        }
    ],
    seconddata: [
        {
        title: "Portfólio com Bulma",
        description: "Projeto desenvolvido com base no curso da Onebitcode.",
        languages: "Tecnologias usadas: HTML, Bulma, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/bulma_portfolio/main/preview.png",
        link: "https://bulma-project.vercel.app/"
        },
        {
        title: "Calculadora IMC",
        description: "Projeto desenvolvido com base em calcular o imc de uma pessoa.",
        languages: "Tecnologias usadas: HTML, CSS, JavaScript, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/calculadora_imc/main/preview.png",
        link: "https://calculadora-imc-alpha.vercel.app/"
        },
        {
        title: "Landing Page",
        description: "Design de Landing Page feito por Rafaella Ballerini e códigos por mim!",
        languages: "Tecnologias usadas: HTML, CSS, Sass, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/balle-bot/main/preview.png",
        link: "https://balle-bot-inky.vercel.app/"
        }
    ],
    thirddata: [
        {
        title: "Página 404",
        description: "Projeto desenvolvido de uma página de erro 404.",
        languages: "Tecnologias usadas: HTML, CSS, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/404-page/main/preview.png",
        link: "https://404-page-hazel.vercel.app/"
        },
        {
        title: "Contador",
        description: "Projeto desenvolvido com base em um contador comum, com funções de aumentar e diminuir.",
        languages: "Tecnologias usadas: HTML, CSS, JavaScript, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/contador/main/assets/preview.png",
        link: "https://contador-lime.vercel.app/"
        },
        {
        title: "Gerador de Senha",
        description: "Projeto simples para gerar senhas com a quantidade escolhida pelo usuário!",
        languages: "Tecnologias usadas: Python",
        image: "https://raw.githubusercontent.com/victorzambelli/GeradorDeSenha/main/preview.png",
        link: "https://github.com/victorzambelli/GeradorDeSenha"
        }
    ],
    fourthdata: [
        {
        title: "Efeito vidro",
        description: "Projeto desenvolvido com base no efeito glassmorphism do CSS.",
        languages: "Tecnologias usadas: HTML, CSS, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/GlassMorphismCard/master/preview.png",
        link: "https://glassmorphismcard.vercel.app/"
        },
        {
        title: "Gerador QR Code",
        description: "Projeto desenvolvido para gerar códigos QR!",
        languages: "Tecnologias usadas: HTML, CSS, JavaScript, Google Chart API, Git e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/gerador_qrcode/main/preview.png",
        link: "https://gerador-qrcode-six.vercel.app/"
        },
        {
        title: "Aplicativo de Clima",
        description: "Projeto para pesquisar clima de uma cidade!",
        languages: "Tecnologias usadas: HTML, CSS, JavaScript, OpenWeatherAPI e Github.",
        image: "https://raw.githubusercontent.com/victorzambelli/Weather_app/main/preview.png",
        link: "https://github.com/victorzambelli/Weather_app"
        }
    ]
};

export interface Technology {
    name: string;
    iconClass: string;
}

export const technologies: Technology[] = [
    { name: "Windows", iconClass: "devicon-windows8-original colored" },
    { name: "VSCode", iconClass: "devicon-vscode-plain colored" },
    { name: "HTML", iconClass: "devicon-html5-plain colored" },
    { name: "CSS", iconClass: "devicon-css3-plain colored" },
    { name: "Sass", iconClass: "devicon-sass-original colored" },
    { name: "BootStrap", iconClass: "devicon-bootstrap-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "Tailwind", iconClass: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { name: "NPM", iconClass: "devicon-npm-original-wordmark colored" },
    { name: "PNPM", iconClass: "devicon-pnpm-plain colored" },
    { name: "jQuery", iconClass: "devicon-jquery-plain colored" },
    { name: "Yarn", iconClass: "devicon-yarn-plain colored" },
    { name: "Git", iconClass: "devicon-git-plain colored" },
    { name: "GitHub", iconClass: "devicon-github-original" },
    { name: "SQLServer", iconClass: "devicon-microsoftsqlserver-plain colored" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
    { name: "MariaDB", iconClass: "devicon-mariadb-plain colored" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
    { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark" },
    { name: "Docker", iconClass: "devicon-docker-plain colored" },
    { name: "Lua", iconClass: "devicon-lua-plain-wordmark colored" },
    { name: "Python", iconClass: "devicon-python-plain colored" },
    { name: "Java", iconClass: "devicon-java-plain colored" },
];
