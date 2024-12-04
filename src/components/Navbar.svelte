<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Flag from './Flag.svelte'
    import { whitelogo } from '../helpers/Routes'
    import { languages } from '../helpers/languages'

    export let currentLanguage

    // Reactive state for toggling navbar visibility on mobile
    let showNav = false

    // Toggle function for the mobile menu
    function toggleNav() {
        showNav = !showNav
    }

    // Close navbar when a link is clicked
    function closeNav() {
        showNav = false
    }
</script>

<header class="nav-header">
    <img class="navbar-logo" alt="MTC" src={whitelogo} />
    <nav class="navbar {showNav ? 'show_nav' : ''}">
        <!-- Close button for mobile, hidden on larger screens -->
        <button class="nav-close-btn" on:click={toggleNav}>×</button>

        <!-- Navigation links -->
        <a href="/#" on:click={closeNav}>
            {languages[currentLanguage].navbar.home}
        </a>
        <a href="#history" on:click={closeNav}>
            {languages[currentLanguage].navbar.history}
        </a>
        <a href="#activities" on:click={closeNav}>
            {languages[currentLanguage].navbar.activity}
        </a>
        <a href="#partners" on:click={closeNav}>
            {languages[currentLanguage].navbar.partners}
        </a>
        <a href="#contact" on:click={closeNav}>
            {languages[currentLanguage].navbar.contact}
        </a>
    </nav>

    <Flag {currentLanguage} />

    <button class="nav-btn" on:click={toggleNav}>
        <i class="fas fa-bars"></i>
    </button>
</header>

<style>
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 8dvh;
        padding: 0 2rem;
        background: linear-gradient(
            to bottom right,
            #0a2237,
            #0d3550
        ); /* Darker gradient */
        color: var(--textColor);
    }

    .navbar-logo {
        color: #7f591c;
        height: 50px;
    }

    .navbar a {
        margin: 0 1rem;
        color: #ccc;
        text-decoration: none;
        transition: 0.3s;
    }

    .navbar a:hover {
        color: #fff;
    }

    .nav-header .nav-btn {
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        color: #ccc;
        visibility: visible;
        font-size: 1.8rem;
        transition:
            transform 0.3s ease,
            color 0.3s ease;
    }

    .nav-header .nav-btn:hover {
        color: #fff;
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
        display: none; /* Hide by default */
    }

    /* Mobile styling */
    @media only screen and (max-width: 800px) {
        .nav-header .nav-btn {
            visibility: visible;
            display: block;
        }
        .nav-header {
            padding: 0 1rem 0 0;
        }
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 2.5rem;
            transition: 0.5s;
            background-color: rgba(30, 30, 30, 0.8);
            backdrop-filter: blur(15px);
            z-index: 1;
            top: -100%;
            padding: 1rem;
        }

        /* Show navbar when toggled */
        .navbar.show_nav {
            top: 0;
        }

        /* Show close button (X) only on mobile when navbar is open */
        .nav-close-btn {
            display: block;
        }

        .navbar a {
            font-size: 1.5rem;
            animation: slide 0.5s ease-in;
            color: #ddd;
        }

        .navbar a:hover {
            font-size: 1.6rem;
            color: #fff;
        }

        /* Smaller logo on mobile */
        .navbar-logo {
            height: 40px;
            margin-left: 1rem;
        }

        .nav-header .nav-btn {
            color: #ccc;
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
