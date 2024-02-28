document.addEventListener('DOMContentLoaded', function() {
    setSkillLevel('Skill-HTML', 100, '#4CAF50');
    setSkillLevel('Skill-CSS', 70, '#2196F3');
    setSkillLevel('Skill-JS', 50, '#ffc107'); // Mis à jour pour correspondre à votre HTML
    setSkillLevel('Skill-C', 10, '#f44336'); // Mis à jour pour correspondre à votre HTML
    // setSkillLevel('Skill-SQL', 80); // Enlever ou ajouter si vous avez un SkillBar pour SQL
});

function setSkillLevel(skillId, level, color) {
    const skillBar = document.getElementById(skillId);
    const progress = skillBar.querySelector('.Progress');
    const percentText = skillBar.querySelector('.PercentText');
    progress.style.width = `${level}%`;
    progress.style.backgroundColor = color; // Assigner la couleur
    percentText.textContent = `${level}%`;
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('smoothScrollButton');
    scrollButton.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le comportement de lien par défaut
        const targetSection = document.querySelector(this.getAttribute('href')); // Sélectionne la section cible
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Réalise un défilement doux vers la section
        }
    });
});

