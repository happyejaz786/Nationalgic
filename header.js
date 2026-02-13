function loadHeader() {
    const headerPlaceholder = document.getElementById('dynamic-header');
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
        <style>
            /* === GLOBAL HEADER STYLE === */
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
                font-size: 1.5rem;
                font-weight: 700;
                padding: 4px 15px;
                border-radius: 4px;
                display: inline-block;
                margin: 5px 0;
            }

            .header-address {
                font-size: 1.5rem;
                color: #333;
                font-weight: 600;
                text-transform: uppercase;
                margin: 0;
            }

            /* === NAVIGATION === */
            .navbar {
                background: #004d40;
                position: sticky;
                top: 0;
                z-index: 999;
                margin-top: 10px;
            }

            .nav-container {
                max-width: 1200px;
                margin: 0 auto;
            }

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
            }

            .nav-links li a:hover { background: #d4af37; color: #004d40; }

            /* Dropdown Menu */
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

            .dropdown-content li a {
                color: #333 !important;
                padding: 12px 15px;
                border-bottom: 1px solid #eee;
            }

            /* Mobile Menu Icon */
            .menu-icon { 
                display: none; 
                color: white; 
                padding: 15px; 
                cursor: pointer; 
                font-weight: bold; 
                justify-content: space-between; 
            }

            /* === MOBILE SPECIAL === */
            @media (max-width: 768px) {
                .header-container { gap: 10px; }
                .college-logo { width: 60px; }
                .college-name { font-size: 1.1rem; }
                .minority-tag { font-size: 0.7rem; }
                .header-address { display: none; }

                .menu-icon { display: flex; }

                .nav-links { 
                    display: none; /* Default Hidden */
                    flex-direction: column; 
                    width: 100%; 
                    background: #004d40; 
                }

                .nav-links li { width: 100%; border-bottom: 1px solid rgba(255,255,255,0.1); }
                
                /* Mobile Dropdown */
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
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}

// Toggle function fix
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

window.onload = loadHeader;