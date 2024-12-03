<script>
    import { languages } from '../helpers/languages'

    export let currentLanguage
</script>

<div id="history">
    <h2 class="text-5xl font-bold text-gray-900 text-center">
        {languages[currentLanguage].ourHistory.title}
    </h2>
    <br />
    <ul>
        <li style="--accent-color:#13538a">
            <div class="date">2023-2024</div>
            &emsp;
            <div class="descr">
                {languages[currentLanguage].ourHistory.points[2023]}
                <strong
                    >{languages[currentLanguage].ourHistory
                        .points[2024]}</strong
                >
            </div>
        </li>
        <li style="--accent-color:#1c88cf">
            <div class="date">2022</div>
            &emsp;
            <br />
            <div class="descr">
                {languages[currentLanguage].ourHistory.points[2022]}
            </div>
        </li>
        <li style="--accent-color:#18afd6">
            <div class="date">2021</div>
            &emsp;
            <br />
            <div class="descr">
                {languages[currentLanguage].ourHistory.points[2021]}
            </div>
        </li>
        <li style="--accent-color:#37c9ef">
            <div class="date">2020</div>
            &emsp;
            <br />
            <div class="descr">
                {languages[currentLanguage].ourHistory.points[2020]}
            </div>
        </li>
        <li style="--accent-color:#3edad8">
            <div class="date">2018</div>
            &emsp;
            <br />
            <div class="descr">
                {languages[currentLanguage].ourHistory.points[2018]}
            </div>
        </li>
        <li style="--accent-color:#86eae9">
            <div class="date">2017</div>
            &emsp;
            <br />
            <div class="descr">
                {languages[currentLanguage].ourHistory.points[2017]}
            </div>
        </li>
    </ul>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #history {
        margin: 30px 0;
    }

    ul {
        --col-gap: 2rem;
        --row-gap: 2rem;
        --line-w: 0.25rem;
        display: grid;
        grid-template-columns: var(--line-w) 1fr;
        grid-auto-columns: max-content;
        column-gap: var(--col-gap);
        list-style: none;
        width: min(60rem, 90%);
        margin-inline: auto;
    }

    ul::before {
        content: '';
        grid-column: 1;
        grid-row: 1 / span 20;
        background: rgb(225, 225, 225);
        border-radius: calc(var(--line-w) / 2);
    }

    ul li:not(:last-child) {
        margin-bottom: var(--row-gap);
    }

    ul li .date {
        --dateH: 3rem;
        height: var(--dateH);
        margin-inline: calc(var(--inlineP) * -1);

        text-align: center;
        background-color: var(--accent-color);

        color: white;
        font-size: 1.25rem;
        font-weight: 700;

        display: grid;
        place-content: center;
        position: relative;

        border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
    }

    ul li .date::before {
        content: '';
        width: var(--inlineP);
        aspect-ratio: 1;
        background: var(--accent-color);
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
        position: absolute;
        top: 100%;

        clip-path: polygon(0 0, 100% 0, 0 100%);
        right: 0;
    }

    ul li .date::after {
        content: '';
        position: absolute;
        width: 2rem;
        aspect-ratio: 1;
        background: var(--bgColor);
        border: 0.3rem solid var(--accent-color);
        border-radius: 50%;
        top: 50%;

        transform: translate(50%, -50%);
        right: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }

    ul li .title,
    ul li .descr {
        background: #fff;
        position: relative;
        padding-inline: 1.5rem;
        border-radius: 10px;
    }
    ul li .title {
        overflow: hidden;
        padding-block-start: 1.5rem;
        padding-block-end: 1rem;
        font-weight: 500;
    }
    ul li .descr {
        padding-block-end: 1.5rem;
        font-weight: 300;
    }

    ul li .title::before,
    ul li .descr::before {
        content: '';
        position: absolute;
        width: 90%;
        height: 0.5rem;
        background: rgba(0, 0, 0, 0.5);
        left: 50%;
        border-radius: 50%;
        filter: blur(4px);
        transform: translate(-50%, 50%);
    }
    ul li .title::before {
        bottom: calc(100% + 0.125rem);
    }

    ul li .descr::before {
        z-index: -1;
        bottom: 0.25rem;
    }

    @media (min-width: 40rem) {
        ul {
            grid-template-columns: 1fr var(--line-w) 1fr;
        }
        ul::before {
            grid-column: 2;
        }
        ul li:nth-child(odd) {
            grid-column: 1;
        }
        ul li:nth-child(even) {
            grid-column: 3;
        }

        ul li:nth-child(2) {
            grid-row: 2/4;
        }

        ul li:nth-child(odd) .date::before {
            clip-path: polygon(0 0, 100% 0, 100% 100%);
            left: 0;
        }

        ul li:nth-child(odd) .date::after {
            transform: translate(-50%, -50%);
            left: calc(100% + var(--col-gap) + var(--line-w) / 2);
        }
        ul li:nth-child(odd) .date {
            border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
        }
    }

    .credits {
        margin-top: 1rem;
        text-align: right;
    }
    .credits a {
        color: var(--color);
    }
    @keyframes slideUp {
        from {
            transform: translateY(30px); /* Start below */
            opacity: 0; /* Start invisible */
        }
        to {
            transform: translateY(0); /* End in the final position */
            opacity: 1; /* Fully visible */
        }
    }

    ul li {
        grid-column: 2;
        --inlineP: 1.5rem;
        margin-inline: var(--inlineP);
        background-color: #fff;
        grid-row: span 2;
        display: grid;
        border-radius: 10px;
        grid-template-rows: min-content min-content min-content;

        opacity: 0; /* Initially set to invisible */
        animation: slideUp 0.5s ease-out forwards; /* Apply the animation with forwards so it stays visible after */
    }

    ul li:nth-child(1) {
        animation-delay: 0s;
    }

    ul li:nth-child(2) {
        animation-delay: 0.2s;
    }

    ul li:nth-child(3) {
        animation-delay: 0.4s;
    }

    ul li:nth-child(4) {
        animation-delay: 0.6s;
    }

    ul li:nth-child(5) {
        animation-delay: 0.8s;
    }

    ul li:nth-child(6) {
        animation-delay: 1s;
    }
</style>
