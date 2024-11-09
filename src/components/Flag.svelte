<!-- Flag.svelte -->
<script>
    import { language } from '../languageStore'
    import { languages } from '../languages'

    export let currentLanguage
    // Function to change language
    function setLanguage(lang) {
        language.set(lang)
    }
</script>

<div>
    <li class="dropdown">
        <a href="#" class="dropbtn">
            <img
                src={languages[currentLanguage].flag}
                alt="English"
                class="flag"
            /></a
        >

        <ul class="dropdown-content">
            <li>
                <a href="#">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                        alt="English"
                        class="flag"
                        on:click={() => setLanguage('en')}
                    /></a
                >
            </li>
            <li>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                    alt="Français"
                    class="flag"
                    on:click={() => setLanguage('fr')}
                />
            </li>
            <li><a href="#"></a></li>
        </ul>
    </li>
</div>

<style>
    .flag {
        width: 30px;
        height: 20px;
        cursor: pointer;
        margin-right: 10px;
    }
    .dropdown {
        list-style: none;

        position: relative;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content {
        display: none;
        list-style: none;
        position: absolute;
        background-color: #333;
        min-width: 60px;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
        background-color: #575757;
    }
</style>
