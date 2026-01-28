// Data awal untuk portofolio PELAJAR SMA
const defaultPortfolioData = {
    motto: '"Make your own luck!!"',
    socialMedia: [],
    education: [
        {
            title: 'Senior High School',
            institution: 'SMA Negeri 1 Magetan',
            period: '2023 - Present',
            description: 'Relevant courses: Mathematics, Physics, English.'
        },
        {
            title: 'Junior High School',
            institution: 'SMP Negeri 1 Magetan',
            period: '2020 - 2023',
            description: '-'
        }
    ],
    experience: [
        {
            title: 'Website for Local Bakery',
            company: 'Personal Project',
            period: 'June 2023',
            description: 'Designed and developed a responsive website for a family-owned bakery. Used HTML, CSS, and basic JavaScript. Implemented online ordering system.'
        },
        {
            title: 'School Library Management System',
            company: 'School Project',
            period: 'March 2023',
            description: 'Created a simple web-based system to track book borrowing for school library. Used JavaScript for interactive features.'
        }
    ],
    organizations: [
        {
            name: 'School Computer Club',
            role: 'Vice President',
            period: '2022 - Present',
            description: 'Organize weekly coding workshops, help members with programming projects, and coordinate participation in coding competitions.'
        },
        {
            name: 'Student Council',
            role: 'Technology Coordinator',
            period: '2022 - Present',
            description: 'Manage school website updates, create digital announcements, and assist with tech setup for school events.'
        }
    ],
    achievements: [
        {
            title: '2nd Place - Regional Web Design Competition',
            issuer: 'Indonesian Youth Tech Foundation',
            year: '2023',
            description: 'Awarded for creating an educational website about environmental conservation with best UI/UX design in student category.'
        },
        {
            title: 'Perfect Score - National Computer Olympiad',
            issuer: 'Ministry of Education',
            year: '2022',
            description: 'Achieved perfect score in algorithm and logic section at district level competition.'
        }
    ],
    skills: [
        { name: 'HTML/CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'Python', level: 'Beginner' },
        { name: 'UI/UX Design', level: 'Intermediate' },
        { name: 'Responsive Design', level: 'Intermediate' },
        { name: 'Git/GitHub', level: 'Beginner' }
    ],
    personalInfo: {
        'full-name': 'Siti Aisyah Sunarsih Handoyo',
        'status': 'High School Student (Grade 12)',
        'school': 'SMA Negeri 1 Magetan',
        'major': 'Engineering Science',
        'birth-date': 'December, 2007',
        'email': 'as4390306@gmail.com',
        'phone': '+62 812-2590-4486',
        'location': 'Magetan, East Java, Indonesia',
        'hobbies': 'Watch F1, Reading, Writting, Listen to hip hop musi',
        'about-text': 'Hello! I'm Aisyah, a 18-year-old high school student with big dreams in technology. My goal is to study Mechanical engineer in Sepuluh Nopember Institute Technology and eventually become a power unit engineer in Mercedes AMG at Formula 1. I believe in balancing academic excellence with personal growth through extracurricular activities!'
    },
    interests: {
        'tech-inspiration': 'Margaret Hamilton - NASA\'s lead software engineer for Apollo missions',
        'inspiration-quote': '"Don\'t let anyone rob you of your imagination, your creativity, or your curiosity. It\'s your place in the world; it\'s your life. Go on and do all you can with it, and make it the life you want to live." - Mae Jemison',
        'current-idol': 'Mark Zuckerberg - Started programming in middle school and built Facebook in college',
        'fav-tech': 'Web Development, UI/UX Design, Robotics, Mobile Apps',
        'learning-now': 'JavaScript Frameworks (React), Python for automation',
        'dream-project': 'Build an educational app for Indonesian students to learn coding interactively',
        'fav-games': 'Roblox (engineering games!), Minecraft (redstone circuits), Coding games on Code.org',
        'youtube-channels': 'Web Dev Simplified, Fireship, Indonesian Tech Vloggers',
        'life-motto': '"Code what you dream, build what you imagine"'
    },
    profileImage: 'https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2Fbf2928d5-a8fb-4fa4-b238-e891ad4e7e64%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4QTG2PSHUB%252F20260128%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260128T030900Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D108d5d5094253b2796fa17b6582dd4b1dcd98fb057b47491fc8a1c900257a8a7&sign=tVRuHVtea7pUclBVGteGC8mmyrnVAVNVIv9xKV6K4kE
'
};

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    // Set tahun saat ini di footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Load data dari localStorage atau gunakan default
    loadPortfolioData();
    
    // Inisialisasi data
    initializeData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup tab navigation
    setupTabs();
});

// Fungsi untuk load data dari localStorage
function loadPortfolioData() {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
        try {
            window.portfolioData = JSON.parse(savedData);
            console.log('Data loaded from localStorage');
        } catch (e) {
            console.error('Error loading data from localStorage:', e);
            window.portfolioData = JSON.parse(JSON.stringify(defaultPortfolioData));
        }
    } else {
        window.portfolioData = JSON.parse(JSON.stringify(defaultPortfolioData));
        console.log('Using default data');
    }
}

// Fungsi untuk save data ke localStorage
function savePortfolioData() {
    try {
        localStorage.setItem('portfolioData', JSON.stringify(window.portfolioData));
        console.log('Data saved to localStorage');
    } catch (e) {
        console.error('Error saving data to localStorage:', e);
    }
}

// Fungsi untuk reset data ke default
function resetPortfolioData() {
    if (confirm('Are you sure you want to reset all data to default? This cannot be undone.')) {
        localStorage.removeItem('portfolioData');
        window.portfolioData = JSON.parse(JSON.stringify(defaultPortfolioData));
        savePortfolioData();
        initializeData();
        alert('Data has been reset to default!');
    }
}

// Fungsi untuk inisialisasi data
function initializeData() {
    // Inisialisasi motto
    document.getElementById('motto-text').textContent = window.portfolioData.motto;
    
    // Inisialisasi foto profil
    document.getElementById('profile-image').src = window.portfolioData.profileImage;
    
    // Inisialisasi informasi personal
    Object.keys(window.portfolioData.personalInfo).forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            element.textContent = window.portfolioData.personalInfo[field];
        }
    });
    
    // Inisialisasi interests
    Object.keys(window.portfolioData.interests).forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            element.textContent = window.portfolioData.interests[field];
        }
    });
    
    // Inisialisasi media sosial
    initializeSocialMedia();
    
    // Inisialisasi pendidikan
    initializeEducation();
    
    // Inisialisasi pengalaman
    initializeExperience();
    
    // Inisialisasi organisasi
    initializeOrganizations();
    
    // Inisialisasi prestasi
    initializeAchievements();
    
    // Inisialisasi skills
    initializeSkills();
}

// Fungsi untuk inisialisasi media sosial
function initializeSocialMedia() {
    const container = document.getElementById('social-icons-container');
    container.innerHTML = '';
    
    window.portfolioData.socialMedia.forEach(social => {
        const socialElement = document.createElement('a');
        socialElement.href = social.url;
        socialElement.target = '_blank';
        socialElement.className = 'social-icon';
        socialElement.innerHTML = `
            <i class="${social.icon}"></i>
            <span>${social.name}</span>
        `;
        container.appendChild(socialElement);
    });
}

// Fungsi untuk inisialisasi pendidikan
function initializeEducation() {
    const container = document.getElementById('education-timeline');
    container.innerHTML = '';
    
    window.portfolioData.education.forEach((edu, index) => {
        const eduElement = document.createElement('div');
        eduElement.className = 'timeline-item';
        eduElement.innerHTML = `
            <div class="timeline-header">
                <h3 class="timeline-title">${edu.title}</h3>
                <span class="timeline-period">${edu.period}</span>
            </div>
            <p class="timeline-institution">${edu.institution}</p>
            <p class="timeline-description">${edu.description}</p>
            <div class="timeline-actions">
                <button class="edit-btn edit-timeline-item" data-type="education" data-index="${index}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="edit-btn delete-btn" data-type="education" data-index="${index}">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        container.appendChild(eduElement);
    });
}

// Fungsi untuk inisialisasi pengalaman
function initializeExperience() {
    const container = document.getElementById('experience-timeline');
    container.innerHTML = '';
    
    window.portfolioData.experience.forEach((exp, index) => {
        const expElement = document.createElement('div');
        expElement.className = 'timeline-item';
        expElement.innerHTML = `
            <div class="timeline-header">
                <h3 class="timeline-title">${exp.title}</h3>
                <span class="timeline-period">${exp.period}</span>
            </div>
            <p class="timeline-institution">${exp.company}</p>
            <p class="timeline-description">${exp.description}</p>
            <div class="timeline-actions">
                <button class="edit-btn edit-timeline-item" data-type="experience" data-index="${index}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="edit-btn delete-btn" data-type="experience" data-index="${index}">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        container.appendChild(expElement);
    });
}

// Fungsi untuk inisialisasi organisasi
function initializeOrganizations() {
    const container = document.getElementById('organization-cards');
    container.innerHTML = '';
    
    window.portfolioData.organizations.forEach((org, index) => {
        const orgElement = document.createElement('div');
        orgElement.className = 'card';
        orgElement.innerHTML = `
            <h3 class="card-title">${org.name}</h3>
            <p class="card-subtitle">${org.role} | ${org.period}</p>
            <p class="card-description">${org.description}</p>
            <div class="timeline-actions">
                <button class="edit-btn edit-card-item" data-type="organization" data-index="${index}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="edit-btn delete-btn" data-type="organization" data-index="${index}">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        container.appendChild(orgElement);
    });
}

// Fungsi untuk inisialisasi prestasi
function initializeAchievements() {
    const container = document.getElementById('achievement-cards');
    container.innerHTML = '';
    
    window.portfolioData.achievements.forEach((achievement, index) => {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'card';
        achievementElement.innerHTML = `
            <h3 class="card-title">${achievement.title}</h3>
            <p class="card-subtitle">${achievement.issuer} | ${achievement.year}</p>
            <p class="card-description">${achievement.description}</p>
            <div class="timeline-actions">
                <button class="edit-btn edit-card-item" data-type="achievement" data-index="${index}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="edit-btn delete-btn" data-type="achievement" data-index="${index}">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        container.appendChild(achievementElement);
    });
}

// Fungsi untuk inisialisasi skills
function initializeSkills() {
    const container = document.getElementById('skills-list');
    container.innerHTML = '';
    
    window.portfolioData.skills.forEach((skill, index) => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">${skill.level}</span>
            <button class="inline-edit-btn edit-skill" data-index="${index}">
                <i class="fas fa-edit"></i>
            </button>
            <button class="inline-edit-btn delete-skill" data-index="${index}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        container.appendChild(skillElement);
    });
}

// Fungsi untuk setup event listeners
function setupEventListeners() {
    // Edit motto
    document.getElementById('edit-motto').addEventListener('click', function() {
        openEditModal(
            'Edit Motto',
            window.portfolioData.motto,
            'motto',
            'motto'
        );
    });
    
    // Edit sosial media
    document.getElementById('edit-social').addEventListener('click', function() {
        openAddSocialModal();
    });
    
    // Edit foto profil
    document.getElementById('edit-image').addEventListener('click', function() {
        const currentImageUrl = document.getElementById('profile-image').src;
        
        // Buka modal khusus untuk gambar
        const modal = document.getElementById('add-modal');
        const titleElement = document.getElementById('add-modal-title');
        const formContent = document.getElementById('add-form-content');
        
        titleElement.textContent = 'Change Profile Photo';
        
        formContent.innerHTML = `
            <div class="form-group">
                <label for="image-url">Image URL:</label>
                <input type="text" id="image-url" placeholder="https://example.com/image.jpg" value="${currentImageUrl}">
                <div class="url-input-hint">
                    Tip: You can use Unsplash, Imgur, or any image hosting service.<br>
                    Example: hhttps://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2Fbf2928d5-a8fb-4fa4-b238-e891ad4e7e64%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4QTG2PSHUB%252F20260128%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260128T030900Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D108d5d5094253b2796fa17b6582dd4b1dcd98fb057b47491fc8a1c900257a8a7&sign=tVRuHVtea7pUclBVGteGC8mmyrnVAVNVIv9xKV6K4kEttps://images.unsplash.com/photo-1494790108755-2616b612b786
                </div>
            </div>
            <div class="form-group">
                <label>Image Preview:</label>
                <img id="image-preview" src="${currentImageUrl}" alt="Preview" onerror="this.style.display='none'">
            </div>
        `;
        
        // Setup untuk preview saat mengetik
        const urlInput = document.getElementById('image-url');
        const previewImg = document.getElementById('image-preview');
        
        urlInput.addEventListener('input', function() {
            if (this.value.trim()) {
                previewImg.src = this.value;
                previewImg.style.display = 'block';
            } else {
                previewImg.style.display = 'none';
            }
        });
        
        // Change modal untuk edit gambar
        currentEdit.type = 'image';
        modal.classList.add('active');
        
        // Focus pada input
        setTimeout(() => {
            urlInput.focus();
            urlInput.select();
        }, 100);
        
        // Setup event listener untuk save button
        const saveBtn = document.getElementById('save-add');
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        
        newSaveBtn.addEventListener('click', function() {
            const newUrl = document.getElementById('image-url').value.trim();
            
            if (!newUrl) {
                alert('Please enter an image URL');
                return;
            }
            
            // Validasi URL sederhana
            if (!isValidUrl(newUrl)) {
                alert('Please enter a valid URL (should start with http:// or https://)');
                return;
            }
            
            // Simpan ke portfolioData
            window.portfolioData.profileImage = newUrl;
            
            // Set gambar dengan error handling
            const imgElement = document.getElementById('profile-image');
            imgElement.src = newUrl;
            
            // Save to localStorage
            savePortfolioData();
            
            // Cek jika gambar gagal load
            imgElement.onerror = function() {
                alert('Failed to load image. Please check the URL and try again.');
                // Kembalikan ke gambar default
                imgElement.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                window.portfolioData.profileImage = imgElement.src;
                savePortfolioData();
            };
            
            // Tutup modal
            modal.classList.remove('active');
        });
    });
    
    // Edit informasi personal (inline)
    document.querySelectorAll('.inline-edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            const field = this.getAttribute('data-field');
            let element = document.getElementById(field);
            let value = '';
            let type = '';
            
            // Cek apakah field termasuk personal info atau interests
            if (window.portfolioData.personalInfo[field] !== undefined) {
                value = window.portfolioData.personalInfo[field];
                type = 'personal';
            } else if (window.portfolioData.interests[field] !== undefined) {
                value = window.portfolioData.interests[field];
                type = 'interest';
            } else {
                value = element.textContent;
                type = 'personal'; // fallback
            }
            
            const isTextarea = field === 'about-text' || field === 'inspiration-quote' || 
                               field === 'fav-tech' || field === 'learning-now' || 
                               field === 'dream-project' || field === 'fav-games' ||
                               field === 'youtube-channels' || field === 'life-motto' ||
                               field === 'tech-inspiration' || field === 'current-idol';
            
            openEditModal(
                `Edit ${field.replace('-', ' ')}`,
                value,
                field,
                type,
                isTextarea
            );
        });
    });
    
    // Tambah pendidikan
    document.getElementById('add-education').addEventListener('click', function() {
        openAddModal('education');
    });
    
    // Tambah pengalaman
    document.getElementById('add-experience').addEventListener('click', function() {
        openAddModal('experience');
    });
    
    // Tambah organisasi
    document.getElementById('add-organization').addEventListener('click', function() {
        openAddModal('organization');
    });
    
    // Tambah prestasi
    document.getElementById('add-achievement').addEventListener('click', function() {
        openAddModal('achievement');
    });
    
    // Tambah skill
    document.getElementById('add-skill').addEventListener('click', function() {
        openAddModal('skill');
    });
    
    // Event delegation untuk edit/delete timeline items
    document.addEventListener('click', function(e) {
        // Edit timeline items
        if (e.target.closest('.edit-timeline-item')) {
            const button = e.target.closest('.edit-timeline-item');
            const type = button.getAttribute('data-type');
            const index = parseInt(button.getAttribute('data-index'));
            editTimelineItem(type, index);
        }
        
        // Delete items
        if (e.target.closest('.delete-btn')) {
            const button = e.target.closest('.delete-btn');
            const type = button.getAttribute('data-type');
            const index = parseInt(button.getAttribute('data-index'));
            deleteItem(type, index);
        }
        
        // Edit card items
        if (e.target.closest('.edit-card-item')) {
            const button = e.target.closest('.edit-card-item');
            const type = button.getAttribute('data-type');
            const index = parseInt(button.getAttribute('data-index'));
            editCardItem(type, index);
        }
        
        // Edit skills
        if (e.target.closest('.edit-skill')) {
            const button = e.target.closest('.edit-skill');
            const index = parseInt(button.getAttribute('data-index'));
            editSkill(index);
        }
        
        // Delete skills
        if (e.target.closest('.delete-skill')) {
            const button = e.target.closest('.delete-skill');
            const index = parseInt(button.getAttribute('data-index'));
            deleteItem('skill', index);
        }
    });
    
    // Modal events
    setupModalEvents();
    
    // Tambah tombol reset di footer
    addResetButton();
}

// Fungsi untuk menambahkan tombol reset
function addResetButton() {
    const footer = document.querySelector('.footer');
    const resetBtn = document.createElement('button');
    resetBtn.className = 'edit-btn';
    resetBtn.style.marginTop = '10px';
    resetBtn.style.backgroundColor = 'var(--red-hair)';
    resetBtn.innerHTML = '<i class="fas fa-redo"></i> Reset to Default';
    resetBtn.addEventListener('click', resetPortfolioData);
    
    footer.appendChild(resetBtn);
}

// Fungsi untuk setup tab navigation
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show active tab pane
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Fungsi untuk setup modal events
function setupModalEvents() {
    const editModal = document.getElementById('edit-modal');
    const addModal = document.getElementById('add-modal');
    
    // Close modal buttons
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            editModal.classList.remove('active');
            addModal.classList.remove('active');
        });
    });
    
    // Cancel buttons
    document.getElementById('cancel-edit').addEventListener('click', function() {
        editModal.classList.remove('active');
    });
    
    document.getElementById('cancel-add').addEventListener('click', function() {
        addModal.classList.remove('active');
    });
    
    // Save edit button
    document.getElementById('save-edit').addEventListener('click', function() {
        saveEdit();
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === editModal) {
            editModal.classList.remove('active');
        }
        if (e.target === addModal) {
            addModal.classList.remove('active');
        }
    });
}

// Variabel untuk melacak data yang sedang diedit
let currentEdit = {
    type: null,
    field: null,
    index: null
};

// Fungsi untuk membuka modal edit
function openEditModal(title, value, field, type, isTextarea = false) {
    const modal = document.getElementById('edit-modal');
    const titleElement = document.getElementById('modal-title');
    const input = document.getElementById('edit-input');
    const textInput = document.getElementById('edit-input-text');
    
    titleElement.textContent = title;
    
    if (isTextarea) {
        input.value = value;
        input.classList.remove('hidden');
        textInput.classList.add('hidden');
    } else {
        textInput.value = value;
        textInput.classList.remove('hidden');
        input.classList.add('hidden');
    }
    
    currentEdit.type = type;
    currentEdit.field = field;
    
    modal.classList.add('active');
    
    if (isTextarea) {
        input.focus();
        input.select();
    } else {
        textInput.focus();
        textInput.select();
    }
}

// Fungsi untuk menyimpan edit
function saveEdit() {
    const modal = document.getElementById('edit-modal');
    const input = document.getElementById('edit-input');
    const textInput = document.getElementById('edit-input-text');
    const value = input.classList.contains('hidden') ? textInput.value.trim() : input.value.trim();
    
    if (!value) {
        alert('Please enter a value');
        return;
    }
    
    if (currentEdit.type === 'personal') {
        // Update personal info
        window.portfolioData.personalInfo[currentEdit.field] = value;
        document.getElementById(currentEdit.field).textContent = value;
    } else if (currentEdit.type === 'interest') {
        // Update interests
        window.portfolioData.interests[currentEdit.field] = value;
        document.getElementById(currentEdit.field).textContent = value;
    } else if (currentEdit.type === 'motto') {
        // Update motto
        window.portfolioData.motto = value;
        document.getElementById('motto-text').textContent = value;
    }
    
    // Save to localStorage
    savePortfolioData();
    
    modal.classList.remove('active');
}

// Fungsi validasi URL
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Fungsi untuk membuka modal tambah sosial media
function openAddSocialModal() {
    const modal = document.getElementById('add-modal');
    const titleElement = document.getElementById('add-modal-title');
    const formContent = document.getElementById('add-form-content');
    
    titleElement.textContent = 'Add Social Media';
    
    formContent.innerHTML = `
        <div class="form-group">
            <label for="social-name">Platform Name:</label>
            <input type="text" id="social-name" placeholder="e.g., GitHub, LinkedIn">
        </div>
        <div class="form-group">
            <label for="social-icon">FontAwesome Icon Class:</label>
            <input type="text" id="social-icon" placeholder="e.g., fab fa-github">
            <small style="color: var(--text-secondary); margin-top: 5px; display: block;">
                Get icons from <a href="https://fontawesome.com/icons" target="_blank" style="color: var(--accent-blue);">FontAwesome</a>
            </small>
        </div>
        <div class="form-group">
            <label for="social-url">Profile URL:</label>
            <input type="text" id="social-url" placeholder="https://...">
        </div>
    `;
    
    currentEdit.type = 'social';
    modal.classList.add('active');
    
    document.getElementById('social-name').focus();
}

// Fungsi untuk membuka modal tambah data
function openAddModal(type) {
    const modal = document.getElementById('add-modal');
    const titleElement = document.getElementById('add-modal-title');
    const formContent = document.getElementById('add-form-content');
    
    currentEdit.type = type;
    
    let formHTML = '';
    let title = '';
    
    switch(type) {
        case 'education':
            title = 'Add Education';
            formHTML = `
                <div class="form-group">
                    <label for="add-title">Degree/Title:</label>
                    <input type="text" id="add-title" placeholder="e.g., High School Diploma">
                </div>
                <div class="form-group">
                    <label for="add-institution">Institution:</label>
                    <input type="text" id="add-institution" placeholder="e.g., SMA Negeri 1 Jakarta">
                </div>
                <div class="form-group">
                    <label for="add-period">Period:</label>
                    <input type="text" id="add-period" placeholder="e.g., 2021 - Present">
                </div>
                <div class="form-group">
                    <label for="add-description">Description:</label>
                    <textarea id="add-description" rows="3" placeholder="Describe your education"></textarea>
                </div>
            `;
            break;
            
        case 'experience':
            title = 'Add Experience';
            formHTML = `
                <div class="form-group">
                    <label for="add-title">Project Title:</label>
                    <input type="text" id="add-title" placeholder="e.g., Website for Local Business">
                </div>
                <div class="form-group">
                    <label for="add-company">Company/Type:</label>
                    <input type="text" id="add-company" placeholder="e.g., Personal Project, School Project">
                </div>
                <div class="form-group">
                    <label for="add-period">Period:</label>
                    <input type="text" id="add-period" placeholder="e.g., June 2023">
                </div>
                <div class="form-group">
                    <label for="add-description">Description:</label>
                    <textarea id="add-description" rows="3" placeholder="Describe your project and achievements"></textarea>
                </div>
            `;
            break;
            
        case 'organization':
            title = 'Add Organization';
            formHTML = `
                <div class="form-group">
                    <label for="add-name">Organization Name:</label>
                    <input type="text" id="add-name" placeholder="e.g., School Computer Club">
                </div>
                <div class="form-group">
                    <label for="add-role">Your Role:</label>
                    <input type="text" id="add-role" placeholder="e.g., Vice President, Member">
                </div>
                <div class="form-group">
                    <label for="add-period">Period:</label>
                    <input type="text" id="add-period" placeholder="e.g., 2022 - Present">
                </div>
                <div class="form-group">
                    <label for="add-description">Description:</label>
                    <textarea id="add-description" rows="3" placeholder="Describe your involvement"></textarea>
                </div>
            `;
            break;
            
        case 'achievement':
            title = 'Add Achievement';
            formHTML = `
                <div class="form-group">
                    <label for="add-title">Achievement Title:</label>
                    <input type="text" id="add-title" placeholder="e.g., 2nd Place - Web Design Competition">
                </div>
                <div class="form-group">
                    <label for="add-issuer">Issuer:</label>
                    <input type="text" id="add-issuer" placeholder="e.g., Indonesian Youth Tech Foundation">
                </div>
                <div class="form-group">
                    <label for="add-year">Year:</label>
                    <input type="text" id="add-year" placeholder="e.g., 2023">
                </div>
                <div class="form-group">
                    <label for="add-description">Description:</label>
                    <textarea id="add-description" rows="3" placeholder="Describe the achievement"></textarea>
                </div>
            `;
            break;
            
        case 'skill':
            title = 'Add Skill';
            formHTML = `
                <div class="form-group">
                    <label for="add-name">Skill Name:</label>
                    <input type="text" id="add-name" placeholder="e.g., HTML/CSS, JavaScript">
                </div>
                <div class="form-group">
                    <label for="add-level">Skill Level:</label>
                    <select id="add-level">
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
            `;
            break;
    }
    
    titleElement.textContent = title;
    formContent.innerHTML = formHTML;
    modal.classList.add('active');
    
    // Focus on first input
    formContent.querySelector('input, textarea, select').focus();
}

// Fungsi untuk menyimpan data baru
function saveAdd() {
    const type = currentEdit.type;
    let isValid = true;
    
    switch(type) {
        case 'social':
            const name = document.getElementById('social-name').value.trim();
            const icon = document.getElementById('social-icon').value.trim();
            const url = document.getElementById('social-url').value.trim();
            
            if (!name || !icon || !url) {
                isValid = false;
                alert('Please fill all fields');
                break;
            }
            
            window.portfolioData.socialMedia.push({ name, icon, url });
            initializeSocialMedia();
            break;
            
        case 'education':
            const eduTitle = document.getElementById('add-title').value.trim();
            const institution = document.getElementById('add-institution').value.trim();
            const eduPeriod = document.getElementById('add-period').value.trim();
            const eduDescription = document.getElementById('add-description').value.trim();
            
            if (!eduTitle || !institution || !eduPeriod) {
                isValid = false;
                alert('Please fill required fields');
                break;
            }
            
            window.portfolioData.education.push({
                title: eduTitle,
                institution,
                period: eduPeriod,
                description: eduDescription
            });
            initializeEducation();
            break;
            
        case 'experience':
            const expTitle = document.getElementById('add-title').value.trim();
            const company = document.getElementById('add-company').value.trim();
            const expPeriod = document.getElementById('add-period').value.trim();
            const expDescription = document.getElementById('add-description').value.trim();
            
            if (!expTitle || !company || !expPeriod) {
                isValid = false;
                alert('Please fill required fields');
                break;
            }
            
            window.portfolioData.experience.push({
                title: expTitle,
                company,
                period: expPeriod,
                description: expDescription
            });
            initializeExperience();
            break;
            
        case 'organization':
            const orgName = document.getElementById('add-name').value.trim();
            const role = document.getElementById('add-role').value.trim();
            const orgPeriod = document.getElementById('add-period').value.trim();
            const orgDescription = document.getElementById('add-description').value.trim();
            
            if (!orgName || !role || !orgPeriod) {
                isValid = false;
                alert('Please fill required fields');
                break;
            }
            
            window.portfolioData.organizations.push({
                name: orgName,
                role,
                period: orgPeriod,
                description: orgDescription
            });
            initializeOrganizations();
            break;
            
        case 'achievement':
            const achievementTitle = document.getElementById('add-title').value.trim();
            const issuer = document.getElementById('add-issuer').value.trim();
            const year = document.getElementById('add-year').value.trim();
            const achievementDescription = document.getElementById('add-description').value.trim();
            
            if (!achievementTitle || !issuer || !year) {
                isValid = false;
                alert('Please fill required fields');
                break;
            }
            
            window.portfolioData.achievements.push({
                title: achievementTitle,
                issuer,
                year,
                description: achievementDescription
            });
            initializeAchievements();
            break;
            
        case 'skill':
            const skillName = document.getElementById('add-name').value.trim();
            const level = document.getElementById('add-level').value;
            
            if (!skillName) {
                isValid = false;
                alert('Please enter skill name');
                break;
            }
            
            window.portfolioData.skills.push({
                name: skillName,
                level
            });
            initializeSkills();
            break;
    }
    
    if (isValid) {
        // Save to localStorage
        savePortfolioData();
        document.getElementById('add-modal').classList.remove('active');
    }
}

// Fungsi untuk edit timeline item
function editTimelineItem(type, index) {
    let item;
    
    if (type === 'education') {
        item = window.portfolioData.education[index];
    } else if (type === 'experience') {
        item = window.portfolioData.experience[index];
    }
    
    openAddModal(type);
    
    // Pre-fill form dengan data yang ada
    setTimeout(() => {
        if (type === 'education') {
            document.getElementById('add-title').value = item.title;
            document.getElementById('add-institution').value = item.institution;
            document.getElementById('add-period').value = item.period;
            document.getElementById('add-description').value = item.description;
        } else if (type === 'experience') {
            document.getElementById('add-title').value = item.title;
            document.getElementById('add-company').value = item.company;
            document.getElementById('add-period').value = item.period;
            document.getElementById('add-description').value = item.description;
        }
        
        // Simpan index untuk update
        currentEdit.index = index;
        
        // Ubah judul dan tombol
        document.getElementById('add-modal-title').textContent = `Edit ${type === 'education' ? 'Education' : 'Experience'}`;
        document.getElementById('save-add').textContent = 'Update';
        
        // Ubah event listener untuk update
        const saveBtn = document.getElementById('save-add');
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        
        newSaveBtn.addEventListener('click', function() {
            updateTimelineItem(type, index);
        });
    }, 100);
}

// Fungsi untuk update timeline item
function updateTimelineItem(type, index) {
    if (type === 'education') {
        window.portfolioData.education[index] = {
            title: document.getElementById('add-title').value.trim(),
            institution: document.getElementById('add-institution').value.trim(),
            period: document.getElementById('add-period').value.trim(),
            description: document.getElementById('add-description').value.trim()
        };
        initializeEducation();
    } else if (type === 'experience') {
        window.portfolioData.experience[index] = {
            title: document.getElementById('add-title').value.trim(),
            company: document.getElementById('add-company').value.trim(),
            period: document.getElementById('add-period').value.trim(),
            description: document.getElementById('add-description').value.trim()
        };
        initializeExperience();
    }
    
    // Save to localStorage
    savePortfolioData();
    document.getElementById('add-modal').classList.remove('active');
}

// Fungsi untuk edit card item
function editCardItem(type, index) {
    let item;
    
    if (type === 'organization') {
        item = window.portfolioData.organizations[index];
    } else if (type === 'achievement') {
        item = window.portfolioData.achievements[index];
    }
    
    openAddModal(type);
    
    // Pre-fill form dengan data yang ada
    setTimeout(() => {
        if (type === 'organization') {
            document.getElementById('add-name').value = item.name;
            document.getElementById('add-role').value = item.role;
            document.getElementById('add-period').value = item.period;
            document.getElementById('add-description').value = item.description;
        } else if (type === 'achievement') {
            document.getElementById('add-title').value = item.title;
            document.getElementById('add-issuer').value = item.issuer;
            document.getElementById('add-year').value = item.year;
            document.getElementById('add-description').value = item.description;
        }
        
        // Simpan index untuk update
        currentEdit.index = index;
        
        // Ubah judul dan tombol
        document.getElementById('add-modal-title').textContent = `Edit ${type === 'organization' ? 'Organization' : 'Achievement'}`;
        document.getElementById('save-add').textContent = 'Update';
        
        // Ubah event listener untuk update
        const saveBtn = document.getElementById('save-add');
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        
        newSaveBtn.addEventListener('click', function() {
            updateCardItem(type, index);
        });
    }, 100);
}

// Fungsi untuk update card item
function updateCardItem(type, index) {
    if (type === 'organization') {
        window.portfolioData.organizations[index] = {
            name: document.getElementById('add-name').value.trim(),
            role: document.getElementById('add-role').value.trim(),
            period: document.getElementById('add-period').value.trim(),
            description: document.getElementById('add-description').value.trim()
        };
        initializeOrganizations();
    } else if (type === 'achievement') {
        window.portfolioData.achievements[index] = {
            title: document.getElementById('add-title').value.trim(),
            issuer: document.getElementById('add-issuer').value.trim(),
            year: document.getElementById('add-year').value.trim(),
            description: document.getElementById('add-description').value.trim()
        };
        initializeAchievements();
    }
    
    // Save to localStorage
    savePortfolioData();
    document.getElementById('add-modal').classList.remove('active');
}

// Fungsi untuk edit skill
function editSkill(index) {
    const skill = window.portfolioData.skills[index];
    
    // Buka modal edit khusus skill
    const modal = document.getElementById('add-modal');
    const titleElement = document.getElementById('add-modal-title');
    const formContent = document.getElementById('add-form-content');
    
    titleElement.textContent = 'Edit Skill';
    
    formContent.innerHTML = `
        <div class="form-group">
            <label for="edit-skill-name">Skill Name:</label>
            <input type="text" id="edit-skill-name" value="${skill.name}">
        </div>
        <div class="form-group">
            <label for="edit-skill-level">Skill Level:</label>
            <select id="edit-skill-level">
                <option value="Beginner" ${skill.level === 'Beginner' ? 'selected' : ''}>Beginner</option>
                <option value="Intermediate" ${skill.level === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
                <option value="Advanced" ${skill.level === 'Advanced' ? 'selected' : ''}>Advanced</option>
                <option value="Expert" ${skill.level === 'Expert' ? 'selected' : ''}>Expert</option>
            </select>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Simpan index untuk update
    currentEdit.index = index;
    currentEdit.type = 'skill-edit';
    
    // Ubah event listener untuk update skill
    const saveBtn = document.getElementById('save-add');
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
    
    newSaveBtn.textContent = 'Update';
    
    newSaveBtn.addEventListener('click', function() {
        updateSkill(index);
    });
    
    // Focus pada input
    setTimeout(() => {
        document.getElementById('edit-skill-name').focus();
        document.getElementById('edit-skill-name').select();
    }, 100);
}

// Fungsi untuk update skill
function updateSkill(index) {
    const name = document.getElementById('edit-skill-name').value.trim();
    const level = document.getElementById('edit-skill-level').value;
    
    if (!name) {
        alert('Please enter skill name');
        return;
    }
    
    window.portfolioData.skills[index] = { name, level };
    initializeSkills();
    
    // Save to localStorage
    savePortfolioData();
    document.getElementById('add-modal').classList.remove('active');
}

// Fungsi untuk menghapus item
function deleteItem(type, index) {
    if (!confirm('Are you sure you want to delete this item?')) {
        return;
    }
    
    switch(type) {
        case 'education':
            window.portfolioData.education.splice(index, 1);
            initializeEducation();
            break;
            
        case 'experience':
            window.portfolioData.experience.splice(index, 1);
            initializeExperience();
            break;
            
        case 'organization':
            window.portfolioData.organizations.splice(index, 1);
            initializeOrganizations();
            break;
            
        case 'achievement':
            window.portfolioData.achievements.splice(index, 1);
            initializeAchievements();
            break;
            
        case 'skill':
            window.portfolioData.skills.splice(index, 1);
            initializeSkills();
            break;
    }
    
    // Save to localStorage
    savePortfolioData();
}