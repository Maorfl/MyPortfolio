var projects = [
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
for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
    var project = projects_1[_i];
    document.getElementById("projects").innerHTML += "\n        <div class=\"col-lg-4 mb-4\" data-aos=\"zoom-in\">\n            <div class=\"card shadow\" style=\"width: 27rem;\">\n                <div class=\"imageContainer\">\n                    <a href=".concat(project.site, " target=\"_blank\"><img src=").concat(project.img, " class=\"card-img-top\" alt=").concat(project.name, "></a>\n                </div>\n                <div class=\"card-body border-bottom border-top\">\n                    <h2>").concat(project.name, "</h2>\n                    <p class=\"card-text\">").concat(project.description, "</p>\n                </div>\n                <div class=\"p-3\">\n                    <p><b>Tools: </b>").concat(project.tools.map(function (tool) { return " " + tool; }), "</p>\n                    <a href=").concat(project.gitRepo, " target=\"_blank\" class=\"text-secondary text-decoration-none\"><i class=\"fa-brands fa-github\"></i> Github Repo</a>\n                </div>\n            </div>\n        </div>\n        ");
}
var handleSubmit = function () {
    var name = document.getElementById("floatingName").value;
    var email = document.getElementById("floatingEmail").value;
    if (!name.length) {
        alert("Name is required!");
    }
    else if (!email.length) {
        alert("Email is required!");
    }
    else {
        alert("Thank you for contacting me!");
        document.getElementById("contactForm").reset();
    }
};
