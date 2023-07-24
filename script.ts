interface Project {
    img: string;
    name: string;
    description: string;
    tools: string[];
    gitRepo: string;
    site: string;
}

let projects: Project[] = [
    {
        img: "/images/Techit.jpg",
        name: "Techit",
        description: "Web electronic store",
        tools: ["HTML5", "CSS", "Bootstrap", "JavaScript", "Font-Awesome"],
        gitRepo: "https://github.com/Maorfl/Techit.git",
        site: "https://maor-techit.netlify.app"
    },
    {
        img: "/images/Account.jpg",
        name: "Account",
        description: "Personal interface of money managment",
        tools: ["HTML5", "Bootstrap", "JavaScript with OOP", "Font-Awesome"],
        gitRepo: "https://github.com/Maorfl/My-Account.git",
        site: "https://maor-account.netlify.app"
    },
    {
        img: "/images/ManageU.jpg",
        name: "Manage-U",
        description: "A simple task-manager to manage your activities and tasks",
        tools: ["HTML5", "Bootstrap", "TypeScript", "Font-Awesome"],
        gitRepo: "https://github.com/Maorfl/Manageu.git",
        site: "https://maor-manageu.netlify.app"
    },
    {
        img: "/images/Capital-city.jpg",
        name: "Capital City",
        description: "Search engine that provides details on searched capital city",
        tools: ["HTML5", "Bootstrap", "JavaScript", "Axios", "Font-Awesome"],
        gitRepo: "https://github.com/Maorfl/Manageu.git",
        site: "https://maor-capital-city.netlify.app"
    }
];

for (let project of projects) {
    (document.getElementById("projects") as HTMLDivElement).innerHTML += `
        <div class="col-lg-4 mb-4" data-aos="zoom-in">
            <div class="card shadow" style="width: 27rem;">
                <div class="imageContainer">
                    <a href=${project.site} target="_blank"><img src=${project.img} class="card-img-top" alt=${project.name}></a>
                </div>
                <div class="card-body border-bottom border-top">
                    <h2>${project.name}</h2>
                    <p class="card-text">${project.description}</p>
                </div>
                <div class="p-3">
                    <p><b>Tools: </b>${project.tools.map((tool: string) => " " + tool)}</p>
                    <a href=${project.gitRepo} target="_blank" class="text-secondary text-decoration-none"><i class="fa-brands fa-github"></i> Github Repo</a>
                </div>
            </div>
        </div>
        `;
}
