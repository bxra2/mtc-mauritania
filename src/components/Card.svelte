<script>
    import { onMount } from 'svelte'
    import { languages } from '../helpers/languages'
    import Dialog from './Dialog.svelte'

    export let title, desc, iconClasses, dialogcontent,currentLanguage

    let cardElement

    // Intersection Observer to trigger the animation when the card enters the viewport
    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add class to trigger fade-in and slide-up
                        entry.target.classList.add('show')
                    }
                })
            },
            { threshold: 0.2 }
        ) // Trigger when 10% of the card is visible

        if (cardElement) {
            observer.observe(cardElement)
        }
    })
</script>

<div bind:this={cardElement} class="card-wrap">
    <div class="card-header one">
        <i class={iconClasses}></i>
    </div>
    <div class="card-content">
        <h1 class="card-title">{title}</h1>
        <p class="card-text">
            {desc}
        </p>
        <button class="card-btn one"><Dialog {currentLanguage} {title} {dialogcontent} /></button>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    :root {
        --color-text: #616161;
        --color-text-btn: #ffffff;
        --card1-gradient-color1: #010509;
        --card1-gradient-color2: #124c87;
        --card2-gradient-color1: #7f00ff;
        --card2-gradient-color2: #e100ff;
        --card3-gradient-color1: #3f2b96;
        --card3-gradient-color2: #a8c0ff;
        --card4-gradient-color1: #11998e;
        --card4-gradient-color2: #38ef7d;
    }
    body {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(to right, #8e9eab, #eef2f3);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }
    @keyframes fadeSlideUp {
        0% {
            opacity: 0;
            transform: translateY(
                80px
            ); /* Starts below the original position */
        }
        100% {
            opacity: 1;
            transform: translateY(0); /* Ends at the normal position */
        }
    }

    /* Apply the animation to card-wrap */
    .card-wrap {
        width: 300px;
        margin: 20px;
        background: #fff;
        border-radius: 20px;
        border: 5px solid #fff;
        overflow: hidden;
        color: var(--color-text);
        box-shadow:
            rgba(0, 0, 0, 0.19) 0px 10px 20px,
            rgba(0, 0, 0, 0.23) 0px 6px 6px;
        transition: all 0.2s ease-in-out;

        opacity: 0; /* Initially hidden */
    }

    .card-wrap.show {
        opacity: 1;
        animation: fadeSlideUp 0.8s ease-out; /* Apply the animation */
    }
    /* .card-wrap:hover {
        transform: scale(1.1);
    } */
    .card-header {
        height: 180px;
        width: 100%;
        background: red;
        border-radius: 100% 0% 100% 0% / 0% 50% 50% 100%;
        display: grid;
        place-items: center;
    }

    .card-header i {
        color: #fff;
        font-size: 72px;
    }
    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
        margin: 0 auto;
    }
    .card-title {
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .card-text {
        text-align: center;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .card-btn {
        border: none;
        border-radius: 100px;
        padding: 5px; /* Reduced padding */
        font-size: 14px; /* Smaller font size */
        color: #fff;
        margin-bottom: 15px;
        text-transform: uppercase;
    }

    .card-header.one {
        background: linear-gradient(
            to bottom left,
            var(--card1-gradient-color1),
            var(--card1-gradient-color2)
        );
    }

    .card-btn.one {
        background: linear-gradient(
            to left,
            var(--card1-gradient-color1),
            var(--card1-gradient-color2)
        );
    }
</style>
