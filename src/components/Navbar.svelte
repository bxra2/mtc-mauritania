<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Flag from './Flag.svelte'
    import { whitelogo } from '../helpers/Routes'
    import { languages } from '../helpers/languages'

    export let currentLanguage

    // Reactive state for toggling navbar visibility on mobile
    let showNav = false;

    // Toggle function for the mobile menu
    function toggleNav() {
        showNav = !showNav;
    }

    // Close navbar when a link is clicked
    function closeNav() {
        showNav = false;
    }
</script>

<header class="nav-header">
    <img class="navbar-logo" alt="MTC" src={whitelogo} />
    <nav class="navbar {showNav ? 'show_nav' : ''}">
        <!-- Close button for mobile, hidden on larger screens -->
        <button class="nav-close-btn" on:click={toggleNav}>×</button>
        
        <!-- Navigation links -->
        <a href="/#" on:click={closeNav}> {languages[currentLanguage].navbar.home} </a>
        <a href="#history" on:click={closeNav}> {languages[currentLanguage].navbar.history} </a>
        <a href="#activities" on:click={closeNav}> {languages[currentLanguage].navbar.activity} </a>
        <a href="#partners" on:click={closeNav}> {languages[currentLanguage].navbar.partners} </a>
        <a href="#contact" on:click={closeNav}> {languages[currentLanguage].navbar.contact} </a>
    </nav>

    <!-- Hamburger button for mobile -->
    <button class="nav-btn" on:click={toggleNav}>
        <i class="fas fa-bars"></i>
    </button>

    <!-- Language selector -->
    <Flag {currentLanguage} />
</header>

<style>
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 8dvh;
        padding: 0 2rem;
        background: linear-gradient(to bottom right, #0c3259, #124c87);
        color: var(--textColor);
    }

    .navbar-logo {
        color: #7f591c;
        height: 50px;
    }

    .navbar a {
        margin: 0 1rem;
        color: #eee;
        text-decoration: none;
        transition: 0.3s;
    }

    .navbar a:hover {
        color: var(--secondaryColor);
    }

    .nav-header .nav-btn {
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        color: #eee;
        visibility: visible;
        font-size: 1.8rem;
        transition: transform 0.3s ease;
    }

    .nav-header .nav-btn:hover {
        transform: translateY(-2px);
    }

    .navbar {
        display: flex;
        align-items: center;
    }

    /* Hidden by default */
    .nav-header .nav-btn {
        display: none;
    }

    /* Close button for mobile */
    .nav-close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        color: #eee;
        background: none;
        border: none;
        cursor: pointer;
    }

    /* Styling for mobile navbar */
    .book-now-nav {
        display: block;
        background-color: #7f591c;
        padding: 8px 20px;
        border-radius: 20px;
        cursor: pointer;
        border-style: none;
        text-decoration: none;
        color: white;
        transition: 0.3s;
    }
    .book-now-nav:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }

    /* Mobile styling */
    @media only screen and (max-width: 800px) {
        .nav-header .nav-btn {
            visibility: visible;
            display: block;
        }

        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Align navbar items to the left */
            justify-content: flex-start; /* Align items to the top */
            gap: 2.5rem;
            transition: 0.5s;
            background-color: rgba(180, 180, 180, 0.4);
            backdrop-filter: blur(15px);
            z-index: 1;
            top: -100%; /* Hide initially */
            padding: 1rem;
        }

        /* Show navbar when toggled */
        .navbar.show_nav {
            top: 0;
        }

        /* Show close button (X) only on mobile */
        .nav-close-btn {
            display: block;
        }

        .navbar a {
            font-size: 1.5rem;
            animation: slide 0.5s ease-in;
        }

        .navbar a:hover {
            font-size: 1.6rem;
        }
    }

    /* Hide the close button (X) on desktop */
    @media only screen and (min-width: 801px) {
        .nav-close-btn {
            display: none;
        }
    }

    @keyframes slide {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
