import {InlineCode} from "@/once-ui/components";

const person = {
    firstName: "권",
    lastName: "승민",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "백엔드 개발자",
    avatar: "/images/avatar.png",
    location: "Asia/Seoul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["Java", "Spring Boot", "RDBMS", "QueryDSL", "AWS", "Docker", "CI/CD", "RestDocs", "Swagger", "Jira"]
};

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
        <>
            I occasionally write about design, technology, and share thoughts on the intersection of
            creativity and engineering.
        </>
    ),
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/rnjstmdals6",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/company/once-ui/",
    },
    {
        name: "X",
        icon: "x",
        link: "",
    },
    {
        name: "Email",
        icon: "email",
        link: "mailto:example@gmail.com",
    },
];

const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>백엔드 개발자</>,
    subline: (
        <>
            I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive
            <br/> user experiences. After hours, I build my own projects.
        </>
    ),
};

const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: false,
        link: "https://cal.com",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                1년 차 주니어 개발자로서, 다양한 서버 기술을 배우고 적용하며 개발 전반에 대한 이해를 넓혀가고 있습니다.<br/>
                <br/>
                백엔드 개발뿐만 아니라 프론트엔드 개발도 직접 경험하며, 이를 통해 서버와 클라이언트의 연계를 더욱 깊이 이해할 수 있었습니다.<br/>
                <br/>
                새로운 기술을 배우고 팀과 함께 성장하며, 더 나은 결과를 만드는 것에 보람을 느낍니다. </>
        ),
    },

    technical: {
        display: true,
        title: "Technical Skills",
        skills: [
            {
                title: "서버 개발 역량",
                description: <>Java와 Spring Boot를 활용해 RESTful API 및 백엔드 애플리케이션을 설계하고 구현. 사용자 인증, 권한 관리, CRUD API 개발 및
                    문서화(Swagger/RestDocs)를 성공적으로 수행. WebSocket을 사용한 실시간 통신 기능을 구현하며 서비스의 상호작용성을 강화.</>,
                images: [],
            },
            {
                title: "데이터베이스 설계 및 관리",
                description: <>MySQL과 MariaDB를 사용해 데이터베이스를 설계 및 관리한 경험. JPA를 통해 데이터 연동을 구현하고, QueryDSL을 사용해 동적 쿼리를 작성하여
                    데이터 조회 요구사항을 유연하게 처리 가능.</>,
                images: [],
            },
            {
                title: "인프라 및 배포 경험",
                description: <>AWS 환경에서 EC2, S3, RDS를 활용한 안정적인 배포 및 운영 경험 보유. GitHub Actions와 Docker(JIB)를 사용해 CI/CD
                    파이프라인을 구축하고, Route 53을 통해 도메인 관리 및 SSL 인증서를 적용하여 보안성을 강화.</>,
                images: [],
            },
            {
                title: "클라이언트 협업 및 이해",
                description: <>React와 TypeScript를 활용해 기본적인 프론트엔드 작업이 가능하며, JavaScript 및 CSS를 사용한 스타일링 경험 보유. 백엔드 개발자로서
                    클라이언트의 요청 처리 흐름을 이해하고, API 설계 시 클라이언트와의 상호작용을 최적화하여 원활한 협업을 수행.</>,
                images: [],
            },
            {
                title: "협업 및 소통 역량",
                description: <>GitHub와 JIRA를 활용한 프로젝트 관리 경험. 다양한 포지션의 팀원들과 협업하며 소셜 로그인, 알림 기능 등 사용자 중심의 기능 설계 및 구현에 기여.
                    스터디 및 팀 프로젝트를 통해 소통과 협업 능력을 강화.</>,
                images: [],
            },
        ],
    },
    work: {
        display: true, // set to false to hide this section
        title: "Timeline",
        experiences: [
            {
                company: "Synap Soft",
                timeframe: "2023 - 2024",
                role: "App Service Team",
                achievements: [
                    <>
                        JavaScript를 활용해 사이냅 노트 및 에디터 제품을 개발하고, 사이냅 노트에 필요한 API 서버를 구축 및 개발.
                    </>,
                    <>
                        GitLab CI 파이프라인 문제를 분석 및 해결하여 방치되어 있던 CI 환경을 정상화.<br/>
                        CI 환경 구성으로 팀의 개발 및 배포 프로세스 생산성과 효율성 개선.
                    </>,
                    <>
                        nGrinder를 활용해 맞춤법 검사 API의 메모리 누수를 해결하고, TPS를 10에서 120으로 향상시켜 안정성과 응답 속도를 개선.
                    </>,
                    <>
                        에디터에서 유효한 URL을 입력하면 OG meta 태그를 크롤링하여 해당 사이트의 썸네일 이미지와 정보를 카드 형식으로 보여주는 플러그인 기능을 개발.<br/>
                        <a target={"_blank"} href={"https://synapeditor.com/docs/pages/viewpage.action?pageId=58949635"}>자세히</a>
                    </>,
                ],
                images: [{
                    src: "/images/projects/project-01/ogtag.gif",
                    alt: "OG Tag",
                    width: 16,
                    height: 9,
                },],
            },
            {
                company: "GDSC DJU",
                timeframe: "2021 - 2022",
                role: "Backend Member",
                achievements: [
                    <>
                        다양한 포지션의 팀원들과 협업하며 GDSC 멤버 전용 블로그 제작에 기여.
                    </>,
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/projects/project-01/gdsc.png",
                        alt: "GDSC Certification",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/projects/project-01/gdsc-blog.webp",
                        alt: "GDSC Blog Project",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "Daejin University",
                timeframe: "2017 - 2023",
                role: "Computer Engineering",
                achievements: [
                    <>
                        학점: 3.61 / 4.5
                    </>
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: false, // set to false to hide this section
        title: "Studies",
        institutions: [
            {
                name: "대진대학교",
                description: <>컴퓨터공학과</>,
            },
            {
                name: "Build the Future",
                description: <>Studied online marketing and personal branding.</>,
            },
        ],
    },
};

const blog = {
    label: "Projects",
    title: "프로젝트",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    label: "Work",
    title: "My projects",
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    label: "Gallery",
    title: "My photo gallery",
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: "/images/gallery/img-01.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-02.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-03.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-04.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-05.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-06.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-07.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-08.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-09.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-10.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-11.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-12.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-13.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-14.jpg",
            alt: "image",
            orientation: "horizontal",
        },
    ],
};

export {person, social, newsletter, home, about, blog, work, gallery};
