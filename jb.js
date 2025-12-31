/* ============================================================
   1. STYLES (MATCHING RED & CHARCOAL THEME)
   ============================================================ */
const style = document.createElement('style');
style.textContent = `
    body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 0; padding: 0; background: #fdfdfd; color: #333; }
    
    header.site-header { background: #d9534f; color: white; padding: 25px; font-size: 26px; text-align: center; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    
    /* Changed black to a matching Deep Charcoal */
    .tabs { display:flex; justify-content:center; background: #542aa8ff; position: sticky; top: 0; z-index: 1000; border-bottom: 3px solid #d9534f; }
    .tab-btn { padding:15px 30px; border:none; background:transparent; color: #eee; cursor:pointer; font-weight: 600; transition: 0.3s; text-transform: uppercase; }
    .tab-btn:hover, .tab-btn.active { background: #d9534f; color: white; }

    /* Home Hero */
    .hero { 
        background: linear-gradient(rgba(217, 83, 79, 0.85), rgba(44, 44, 44, 0.9)), url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80');
        background-size: cover; background-position: center;
        height: 300px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; text-align: center; padding: 0 20px;
    }

    /* Chapter Cards */
    .container { max-width: 1100px; margin: -50px auto 60px; padding: 0 20px; }
    .chapter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .chapter-box { 
        background: white; padding: 40px; border-radius: 20px; text-align: center; 
        box-shadow: 0 15px 35px rgba(0,0,0,0.08); cursor: pointer; transition: 0.4s;
        border-top: 10px solid #d9534f;
    }
    .chapter-box:hover { transform: translateY(-10px); border-top-color: #2c2c2c; }
    .btn-action { padding:12px 25px; background: #d9534f; color:white; border:none; border-radius:30px; cursor:pointer; font-weight:bold; transition: 0.3s; }
    .btn-action:hover { background: #2c2c2c; }

    /* Lesson Content */
    .tab-content { display:none; padding: 60px 20px; animation: fadeIn 0.4s ease; }
    .tab-content.active { display:block; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 30px; border-radius: 12px; font-family: 'Consolas', monospace; line-height: 1.6; overflow-x: auto; white-space: pre-wrap; margin-top: 25px; border-left: 6px solid #d9534f; }

    /* ABOUT & CONTACT DESIGN */
    .card-layout { background: white; padding: 50px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #eee; }
    .about-card { display: flex; align-items: center; gap: 50px; flex-wrap: wrap; }
    .about-photo { 
        width: 220px; height: 220px; 
        border-radius: 30px; 
        object-fit: cover; 
        border: 4px solid #d9534f; 
        outline: 8px solid rgba(8, 8, 8, 0.19);
        outline-offset: 5px;
    }
    .skill-tag { background: #f8d7da; color: #721c24; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem; margin-right: 5px; font-weight: bold; }
    
    .ref-link { display: inline-block; margin-top: 15px; color: #d9534f; text-decoration: none; font-weight: bold; border-bottom: 2px solid transparent; transition: 0.3s; }
    .ref-link:hover { border-bottom-color: #d9534f; color: #2c2c2c; }

    footer { text-align:center; padding: 40px; background: #2c2c2c; color: #fff; margin-top: 60px; border-top: 4px solid #d9534f; }
`;
document.head.appendChild(style);

/* 2. DATA (CHAPTER 7 - 18 SUBTITLES)*/
const chaptersContent = {
    7: {
        title: "Chapter 7: Object Basics & Operations",
        code: `// 1. Creating Object (Basic)\nlet person = { name: "Ali", age: 25, city: "Mogadishu" };\n\n// 2. Object Literal Notation\nlet car = { brand: "Toyota", model: "Corolla", year: 2020 };\n\n// 3. Constructor Function\nfunction Phone(brand, model, price) {\n    this.brand = brand;\n    this.model = model;\n    this.price = price;\n}\nlet p1 = new Phone("Samsung", "A20", 200);\n\n// 4. Class Object\nclass Animal {\n    constructor(type, color) { this.type = type; this.color = color; }\n}\n\n// 5. Access Object\nconsole.log(person.name);\n\n// 6. Assignment (Loop)\nfunction Student(n, a) { this.name = n; this.age = a; }\n\n// 7. Modify Object\nperson.age = 30;\n\n// 8. Add New Properties\nperson.email = "ali@example.com";\n\n// 9. Object Method\nlet s3 = { Name: "Ali", greeting: function() { return "Hi " + this.Name; } };\n\n// 10. JSON.stringify\nlet json = JSON.stringify(person);\n\n// 11. JSON.parse\nlet obj = JSON.parse(json);\n\n// 12. For Loop\nfor (let i = 1; i <= 3; i++) { console.log(person.name); }\n\n// 13. Object.entries\nObject.entries(person);\n\n// 14. Object.values\nObject.values(person);\n\n// 15. Object.keys\nObject.keys(person);\n\n// 16. JSON stringify + parse combo\nlet clone = JSON.parse(JSON.stringify(person));\n\n// 17. JSON Format Example\n// {"name":"Ali"}\n\n// 18. for...in Loop\nfor (let key in person) { console.log(key); }`
    },
    8: {
        title: "Chapter 8: DOM Selection Methods",
        code: `// 1. getElementById\nconst title = document.getElementById("title");\n\n// 2. getElementsByTagName\nconst tags = document.getElementsByTagName("h1");\n\n// 3. getElementsByClassName\nconst classes = document.getElementsByClassName("container");\n\n// 4. querySelector\nconst first = document.querySelector(".box");\n\n// 5. querySelectorAll\nconst all = document.querySelectorAll(".item");`
    },
    9: {
        title: "Chapter 9: Events",
        code: `// 1. Click Event\nbtn.addEventListener("click", () => alert("Clicked"));\n\n// 2. Double Click\nbtn.addEventListener("dblclick", () => alert("Double!"));\n\n// 3. MouseOver\nbox.addEventListener("mouseover", () => box.style.background="red");\n\n// 4. Focus\ninput.addEventListener("focus", () => input.style.border="2px solid red");\n\n// 5. Form Submit\nform.addEventListener("submit", (e) => e.preventDefault());`
    }
};

/* ============================================================
   3. APP STRUCTURE
   ============================================================ */
document.body.innerHTML = `
    <header class="site-header">JavaScript Learning Portal</header>
    <nav class="tabs">
        <button class="tab-btn active" onclick="showTab('home')">Home</button>
        <button class="tab-btn" onclick="showTab('about')">About Me</button>
        <button class="tab-btn" onclick="showTab('contact')">Contact</button>
    </nav>

    <main>
        <section id="home" class="tab-content active">
            <div class="hero">
                <h1>Jamhuriya University Portfolio</h1>
                <p>Advanced JavaScript Student Projects | Class CM241</p>
            </div>
            <div class="container">
                <div class="chapter-grid">
                    <div class="chapter-box" onclick="openChapter(7)">
                        <h3>Chapter 7</h3>
                        <p>Object Basics & 18 Key Operations</p>
                        <button class="btn-action">View Lessons</button>
                    </div>
                    <div class="chapter-box" onclick="openChapter(8)">
                        <h3>Chapter 8</h3>
                        <p>DOM Selection & Manipulation</p>
                        <button class="btn-action">View Lessons</button>
                    </div>
                    <div class="chapter-box" onclick="openChapter(9)">
                        <h3>Chapter 9</h3>
                        <p>Events, Listeners & User Interactions</p>
                        <button class="btn-action">View Lessons</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="lesson-page" class="tab-content">
            <div class="container" style="margin-top: 30px;">
                <button onclick="showTab('home')" class="btn-action" style="background:#2c2c2c; margin-bottom:20px;">⬅ Back to Dashboard</button>
                <div class="lesson-container">
                    <h2 id="chapter-title" style="color:#d9534f; margin-top:0;"></h2>
                    <div id="chapter-content" class="code-block"></div>
                </div>
            </div>
        </section>

        <section id="about" class="tab-content">
            <div class="container" style="margin-top: 40px;">
                <div class="card-layout about-card">
                    <img src="jaabir.jpeg" class="about-photo" onerror="this.src='https://via.placeholder.com/220/d9534f/ffffff?text=Jabir'">
                    <div class="about-info">
                        <h2 style="color:#d9534f; margin-top:0;">Jabir Jamal Mohamed</h2>
                        <p><strong>University:</strong> Jamhuriya University of Science and Technology (JUST)</p>
                        <p><strong>Class:</strong> CM241</p>
                        <p><strong>Instructor:</strong> Jamila Hassan Mohamed</p>
                        <p><strong>Student ID:</strong> C5240029</p>
                        <div style="margin-top:15px;">
                            <span class="skill-tag">Computer Software</span>
                            <span class="skill-tag">Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="tab-content">
            <div class="container" style="margin-top: 40px;">
                <div class="card-layout" style="text-align:center;">
                    <h2 style="color:#d9534f;">Contact Information</h2>
                    <p>📧 <strong>Email:</strong> jabir.jamal@just.edu.so</p>
                    <p>📞 <strong>Phone:</strong> +252 616771989</p>
                    <hr style="margin: 30px 0; opacity: 0.2;">
                    <h3 style="color:#2c2c2c;">Learning References</h3>
                    <div style="display:flex; justify-content:center; gap:25px;">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="ref-link">MDN Web Docs</a>
                        <a href="https://www.w3schools.com/js/" target="_blank" class="ref-link">W3Schools JS Guide</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        Prepared by <strong>Jabir Jamal Mohamed</strong> | Jamhuriya University Student &copy; 2025
    </footer>
`;

/* ============================================================
   4. LOGIC
   ============================================================ */
window.showTab = function(id) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    const buttons = document.querySelectorAll('.tab-btn');
    if (id === 'home' || id === 'lesson-page') buttons[0].classList.add('active');
    if (id === 'about') buttons[1].classList.add('active');
    if (id === 'contact') buttons[2].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openChapter = function(num) {
    showTab('lesson-page');
    document.getElementById('chapter-title').innerText = chaptersContent[num].title;
    document.getElementById('chapter-content').innerText = chaptersContent[num].code;
};