document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Website Scrum",
            description: "A FATEC propôs aos alunos do 1° semestre de 2024 criar um produto cujo objetivo seja ensinar aos usuários sobre a metodologia Scrum e ao final do curso, a pessoa consegue emitir um certificado.",
            image: "imagens/website_scrum.png",
            link: "https://github.com/DevsScrumAcademy/1-DSM---DevsAcademy"
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <a href="${project.link}" target="_blank" rel="noopener" class="project-link">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </a>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
});