<script>
    import { language } from '../helpers/languageStore'
    import { languages } from '../helpers/languages'

    export let currentLanguage
    // Function to change language
    function setLanguage(lang) {
        language.set(lang)
    }
</script>

<div>
    <div class="dropdown">
        <button class="dropbtn">
            <img
                src={languages[currentLanguage].flag}
                alt={languages[currentLanguage].name}
                class="flag"
            />
        </button>

        <ul class="dropdown-content">
            {#each Object.keys(languages) as lang}
                <li>
                    <button on:click={() => setLanguage(lang)}>
                        <img
                            src={languages[lang].flag}
                            alt={languages[lang].name}
                            class="flag"
                        />
                    </button>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .flag {
        width: 30px;
        height: 20px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
        margin-right: 10px;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown .dropbtn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%); /* Centers the dropdown */
        background-color: rgba(51, 51, 51, 0.9); /* Semi-transparent background */
        width: 60px;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
        border-radius: 8px; /* Rounded corners */
        text-align: center;
        padding: 5px 0;
        backdrop-filter: blur(5px); /* Applies blur effect to the background */
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content li {
        padding: 10px 0;
    }

    .dropdown-content a, .dropdown-content button {
        width: 100%;
        background: transparent;
        border: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    .dropdown-content img {
        width: 30px;
        height: 20px;
    }

    .dropdown-content a:hover, .dropdown-content button:hover {
        background-color: #575757;
    }
</style>
