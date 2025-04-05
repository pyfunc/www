// Projects Rendering Script
import PYFUNC_CONFIG from './config.js';

// Render Projects Function
function renderProjects() {
    const projectList = document.getElementById('project-list');

    // Clear existing projects
    projectList.innerHTML = '';

    // Render each project
    PYFUNC_CONFIG.repositories.forEach(repo => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-dark-800 p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg code-bg';

        // Generate topic badges
        const topicBadges = repo.topics.map(topic =>
            `<span class="bg-pyfunc-green-900 text-pyfunc-green-300 px-2 py-1 rounded-full text-xs mr-2 mb-2 inline-block">
                ${topic}
            </span>`
        ).join('');

        projectCard.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-2xl font-bold text-pyfunc-green-400">${repo.name}</h3>
                <span class="text-sm text-gray-500 bg-dark-700 px-3 py-1 rounded-full">
                    ${repo.language}
                </span>
            </div>
            <p class="text-gray-400 mb-4 flex-grow">${repo.description}</p>
            <div class="mb-4">
                ${topicBadges}
            </div>
            <a href="${repo.url}" target="_blank" 
               class="bg-pyfunc-green-600 text-white px-4 py-2 rounded-lg hover:bg-pyfunc-green-700 transition-colors inline-block">
                View Project
            </a>
        `;

        projectList.appendChild(projectCard);
    });
}

// Render projects on page load
document.addEventListener('DOMContentLoaded', renderProjects);