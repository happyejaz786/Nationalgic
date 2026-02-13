function loadHeader() {
    const headerPlaceholder = document.getElementById('dynamic-header');
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
        <header class="main-header">
            <div class="header-container">
                <div class="logo-area">
                    <img src="images/logo.jpg" alt="NGIC Logo" class="college-logo">
                </div>
                <div class="text-area-centered">
                    <h1 class="college-name">NATIONAL GIRLS INTER COLLEGE</h1>
                    <p class="minority-tag">A Minority Educational Institution</p>
                    <p class="header-address">Mohalla Alizai, Shahjahanpur</p>
                </div>
            </div>
        </header>

        <nav class="navbar">
            <div class="nav-container">
                <div class="menu-icon" onclick="toggleMenu()">
                    MENU <span>☰</span>
                </div>

                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Message ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="president.html">President Message</a></li>
                            <li><a href="manager.html">Manager Message</a></li>
                            <li><a href="principal.html">Principal Message</a></li>
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

// Simple Toggle Function
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
    } else {
        nav.classList.add("active");
    }
}

window.onload = loadHeader;