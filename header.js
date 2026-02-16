function loadHeader() {
    const headerPlaceholder = document.getElementById('dynamic-header');
    
    // --- PART 1: HEADER, MENU & CSS ---
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
        <style>
            .main-header {
                background: #fff;
                border-bottom: 5px solid #004d40;
                padding: 10px 0;
                font-family: 'Poppins', sans-serif;
            }
            .header-container {
                display: flex;
                flex-direction: row; 
                align-items: center;
                justify-content: center;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 15px;
                gap: 20px;
            }
            .logo-area { flex-shrink: 0; }
            .college-logo {
                display: block;
                width: 120px; 
                height: auto;
            }
            .text-area-centered {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .college-name {
                font-family: 'Cinzel', serif;
                font-size: 2.2rem;
                color: #004d40;
                font-weight: 800;
                line-height: 1.1;
                margin-bottom: 5px;
                text-transform: uppercase;
            }
            .minority-tag {
                background: #fff;
                color: #d4af37;
                border: 1px solid #eee;
                font-size: 1rem;
                font-weight: 700;
                padding: 4px 15px;
                border-radius: 4px;
                display: inline-block;
                margin: 5px 0;
            }
            .header-address {
                font-size: 1rem;
                color: #333;
                font-weight: 600;
                text-transform: uppercase;
                margin: 0;
            }
            .navbar {
                background: #004d40;
                position: sticky;
                top: 0;
                z-index: 999;
                margin-top: 10px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .nav-container { max-width: 1200px; margin: 0 auto; }
            .nav-links { 
                display: flex; 
                justify-content: center; 
                list-style: none; 
                padding: 0; 
                margin: 0; 
            }
            .nav-links li { position: relative; }
            .nav-links li a { 
                color: white; 
                padding: 15px 20px; 
                text-decoration: none; 
                display: block; 
                font-weight: 500;
                transition: 0.3s;
            }
            .nav-links li a:hover { background: #d4af37; color: #004d40; }
            .dropdown-content {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                background: #fff;
                min-width: 200px;
                box-shadow: 0 8px 16px rgba(0,0,0,0.1);
                border-top: 3px solid #d4af37;
            }
            .dropdown:hover .dropdown-content { display: block; }
            .dropdown-content li a { color: #333 !important; padding: 12px 15px; border-bottom: 1px solid #eee; }
            .menu-icon { display: none; color: white; padding: 15px; cursor: pointer; font-weight: bold; justify-content: space-between; }
            @media (max-width: 768px) {
                .header-container { gap: 10px; }
                .college-logo { width: 60px; }
                .college-name { font-size: 1.1rem; }
                .minority-tag { font-size: 0.7rem; }
                .header-address { display: none; }
                .menu-icon { display: flex; }
                .nav-links { display: none; flex-direction: column; width: 100%; background: #004d40; }
                .nav-links.active { display: flex; }
                .nav-links li { width: 100%; border-bottom: 1px solid rgba(255,255,255,0.1); }
                .dropdown-content { position: static; background: #00332b; box-shadow: none; border: none; }
                .dropdown-content li a { color: #ccc !important; padding-left: 40px; }
            }
        </style>

        <header class="main-header">
            <div class="header-container">
                <div class="logo-area">
                    <img src="images/logo.jpg" alt="Logo" class="college-logo">
                </div>
                <div class="text-area-centered">
                    <h1 class="college-name">National Girls Inter College</h1>
                    <div class="minority-wrapper">
                        <span class="minority-tag">A Minority Educational Institution</span>
                    </div>
                    <p class="header-address">Mohalla Alizai, Shahjahanpur, Uttar Pradesh</p>
                </div>
            </div>
        </header>

        <nav class="navbar">
            <div class="nav-container">
                <div class="menu-icon" onclick="toggleMenu()">
                    <span>MENU</span> <span>☰</span>
                </div>
                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li class="dropdown">
                        <a href="javascript:void(0)">Message ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="president.html">President's Message</a></li>
                            <li><a href="manager.html">Manager's Message</a></li>
                            <li><a href="principal.html">Principal's Message</a></li>
                        </ul>
                    </li>
                    <li><a href="admission.html">Admission</a></li>
                    <li><a href="admission.html">Staff</a></li>
                    <li><a href="alumni.html">Alumni of National Girls</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        `;
    }

    // --- PART 2: FOOTER (Side-by-Side Layout) ---
    
    // Purana Footer Delete Karo
    const oldFooter = document.querySelector('footer');
    if (oldFooter) {
        oldFooter.remove();
    }

    // Naya Footer: Left (Copyright) & Right (Counter)
    const footerHTML = `
        <footer class="main-footer" style="background-color: #002b24; color: white; padding: 15px 0; margin-top: 30px;">
            <div class="footer-container" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 15px; flex-wrap: wrap;">
                
                <p style="margin: 0; font-weight: bold; text-align: left;">&copy; 2026 National Girls Inter College. All Rights Reserved.</p>
                
                <div class="hit-counter" style="background: rgba(255,255,255,0.1); padding: 5px 10px; border-radius: 5px; display: flex; align-items: center;">
                    <span style="font-size: 0.85rem; margin-right: 10px; color: #ddd;">Total Visitors:</span>
                    <img src="https://hitwebcounter.com/counter/counter.php?page=123456&style=0006&nbdigits=5&type=page&initCount=0" 
                         title="Free Counter" Alt="web counter" border="0" style="vertical-align: middle;" />
                </div>

            </div>
            <div style="text-align: center; font-size: 0.7rem; color: #888; margin-top: 5px;">Developed by: Mohammad Ejaz Khan</div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}


window.onload = loadHeader;





