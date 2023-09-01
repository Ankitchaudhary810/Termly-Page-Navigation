
const navLinks = document.querySelectorAll('.nav-link');
const content = document.getElementById('content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSection = 1;

const sectionContents = {
    section1: `
     <h1>Privacy Policy Uses</h1>
     <p>Content for Section 1</p>
     `,
    section2: `
     <h1>User Information</h1>
     <p>Content for Section 2</p>
     `,
    section3: `
     <h1>Collection of Information</h1>
     <p>Content for Section 3</p>
     `,
    section4: `
     <h1>Use of Information</h1>
     <p>Content for Section 4</p>
     `,
    section5: `
     <h1>Disclosure of Information</h1>
     <p>Content for Section 5</p>
     `,
    section6: `
     <h1>Use of Tracking Technologies</h1>
     <p>Content for Section 6</p>
     `,
    section7: `
     <h1>User Rights</h1>
     <p>Content for Section 7</p>
     `,
};

function loadContent(sectionId) {
    content.innerHTML = sectionContents[sectionId];
}

loadContent('section1');

function updateButtons() {
    prevBtn.disabled = currentSection === 1;
    nextBtn.disabled = currentSection === 7;
}

nextBtn.addEventListener('click', () => {
    if (currentSection < 7) {
        currentSection++;
        loadContent(`section${currentSection}`);
    }
    updateButtons();
});

prevBtn.addEventListener('click', () => {
    if (currentSection > 1) {
        currentSection--;
        loadContent(`section${currentSection}`);
    }
    updateButtons();
});

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('href').substring(1);
        loadContent(sectionId);
        currentSection = parseInt(sectionId.replace('section', ''), 10);
        updateButtons();
    });
});


navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('href').substring(1);
        loadContent(sectionId);
        updateButtons();
    });
});

updateButtons();
