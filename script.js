const themeToggleBtn = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
});

const track = document.getElementById('timelineTrack');

const milestonesData = [
    { date: "Aug 2024", title: "Irvine Valley College", subtitle: "Foundation", desc: "Pursuing A.S. in Electrical Engineering." },
    { date: "Fall 2026", title: "Transfer to UCI", subtitle: "Target Protocol", desc: "Aiming to join Samueli School of Engineering." },
    { date: "Future", title: "Industry Engineer", subtitle: "Career Goal", desc: "Hardware & embedded systems engineering." }
];

milestonesData.forEach(ms => {
    const node = document.createElement('div');
    node.className = 'timeline-node milestone';
    node.innerHTML = `
        <h4>${ms.date}</h4>
        <h3>${ms.title}</h3>
        <p>${ms.desc}</p>
    `;
    track.appendChild(node);
});
