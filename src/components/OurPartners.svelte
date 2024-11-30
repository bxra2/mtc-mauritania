<script>
    import { partnerImages } from '../helpers/Routes'
    import { languages } from '../helpers/languages'

    export let currentLanguage
</script>

<section id="partners">
    <h2 class="text-5xl font-bold text-gray-900 text-center">
        {languages[currentLanguage].ourPartners}
    </h2>
    <div class="slider">
        <div class="slider-items">
            {#each partnerImages as { src, alt, id }}
                <div class="partner">
                    <img {src} {alt} />
                    <div class="hover-text">{alt}</div>
                    <!-- Text to show on hover -->
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    * {
        box-sizing: border-box;
        padding: 0%;
        margin: 0%;
        font-family: 'Poppins', sans-serif;
    }

    body {
        height: 100vh;
        background-color: #c9c9c9;
        display: grid;
        place-items: center;
    }

    section {
        display: grid;
        place-items: center;
        margin: 50px 0px;
    }

    h2 {
        font-size: 3rem;
        padding: 20px;
        margin: 20px 0px;
    }

    .slider {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 80%;
        overflow: hidden;
        background: rgb(255, 255, 255);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.4px);
        -webkit-backdrop-filter: blur(7.4px);
        border: 1px solid rgba(255, 255, 255, 0.4);
    }

    .slider-items {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        animation: scrolling 20s linear infinite;
    }

    @keyframes scrolling {
        0% {
            transform: translateX(80%);
        }

        100% {
            transform: translateX(-20%);
        }
    }

    .slider-items img {
        width: 12%;
        margin: 20px;
    }

    .partner {
        position: relative;
        width: 120px;
        height: 120px;
    }

    .partner img {
        width: 70%;
        height: 70%;
        object-fit: contain;
        transition: opacity 0.3s;
    }

    .hover-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: rgba(18, 18, 18, 0.8);
        color: white;
        padding: 5px;
        font-size: 14px;
        opacity: 0;
        transition: opacity 0.3s;
        border-radius: 5px;
    }

    .partner:hover .hover-text {
        opacity: 0.8;
    }

    .partner:hover img {
        opacity: 1;
    }
</style>
