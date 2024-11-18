<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Flag from './Flag.svelte'
    import { whitelogo } from '../helpers/Routes'
    import { languages } from '../helpers/languages'

    export let currentLanguage
</script>

<header class="nav-header">
    <img class="navbar-logo" alt="MTC" src={whitelogo} />
    <nav class="navbar">
        <a href="/#"> {languages[currentLanguage].navbar.home} </a>
        <a href="#aboutme"> {languages[currentLanguage].navbar.history} </a>
        <a href="#career"> {languages[currentLanguage].navbar.activity} </a>
        <a href="#partners"> {languages[currentLanguage].navbar.partners} </a>
        <a href="#contact"> {languages[currentLanguage].navbar.contact} </a>
    </nav>
    <Flag {currentLanguage} />
</header>

<style>
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 8dvh;
        padding: 0 2rem;
        border-radius: 0px 0px 25px 25px;
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
        color: #040404;
        visibility: hidden;
        opacity: 0;
        font-size: 1.8rem;
        box-shadow: none;
        transition: transform 0.3s ease;
    }
    .nav-header .nav-btn:hover {
        transform: translateY(-2px);
    }

    .nav-header div,
    .navbar {
        display: flex;
        align-items: center;
    }

    .nav-header .nav-btn {
        display: none;
    }
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

    @media only screen and (max-width: 800px) {
        .nav-header .nav-btn {
            visibility: visible;
            opacity: 1;
            display: block;
        }
        .book-now-nav {
            display: none;
        }

        .navbar {
            position: fixed;
            top: -100vh;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            transition: 0.5s;
            background-color: rgba(180, 180, 180, 0.4);
            backdrop-filter: blur(15px);
            z-index: 1;
        }

        .nav-header .show_nav {
            transform: translateY(100vh);
        }

        .navbar .nav-close-btn {
            position: absolute;
            top: 2rem;
            right: 2rem;
        }

        .navbar a {
            font-size: 1.5rem;
            animation: slide 5s linear;
            animation-timeline: view();
            animation-range: entry 50% cover 50%;
        }
        .navbar a:hover {
            font-size: 1.6rem;
        }
    }

    @keyframes slide {
        0% {
            opacity: 0;
            transform: translateY(100%);
            transition:
                opacity 0.5s,
                transform 0.5s;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
