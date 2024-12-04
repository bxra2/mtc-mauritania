<script>
    import { languages } from '../helpers/languages'
    export let currentLanguage
    import { worldMap } from '../helpers/Routes';
</script>

<div class="container">
    <div class="left-section">
        <h1>{languages[currentLanguage].presenceInTheWorld.title}</h1>
        <ul>
            {#each languages[currentLanguage].presenceInTheWorld.details as detail}
                <li>{detail}</li>
            {/each}
        </ul>
    </div>

    <div class="right-section">
        <div class="map-container">
            <img
                src={worldMap}
                alt="World Map"
                class="map"
            />
            <!-- Pin 1 USA -->
            <i
                class="fa-solid fa-location-dot pin"
                style="top: 51%; left: 25%; color: orange;"
            ></i>
            <!-- Pin 2 Italy -->
            <i
                class="fa-solid fa-location-dot pin"
                style="top: 48.2%; left: 51.2%; color: green;"
            ></i>
            <!-- Pin 3 UK-->
            <i
                class="fa-solid fa-location-dot pin"
                style="top: 41.7%; left: 46.5%; color: green;"
            ></i>
            <!-- Pin 4 Morocco-->
            <i
                class="fa-solid fa-location-dot pin"
                style="top: 53%; left: 46%; color: red;"
            ></i>
        </div>
        <div class="keymap">
            <ul>
                <li>
                    <i class="fa-solid fa-location-dot pin" style="color: red;"
                    ></i> <span>{languages[currentLanguage].presenceInTheWorld.established}</span>
                </li>
                <li>
                    <i
                        class="fa-solid fa-location-dot pin"
                        style="color: green;"
                    ></i> <span>{languages[currentLanguage].presenceInTheWorld.inProgress}</span>
                </li>
                <li>
                    <i
                        class="fa-solid fa-location-dot pin"
                        style="color: orange;"
                    ></i> <span>{languages[currentLanguage].presenceInTheWorld.underStudy}</span>
                </li>
            </ul>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        min-height: 70vh;
        flex-wrap: wrap;
    }

    .left-section {
        max-width: 500px;
        margin-right: 50px;
        flex: 1;
        margin-bottom: 20px;
    }

    .left-section h1 {
        font-size: 2.2rem;
        margin-bottom: 20px;
    }

    .left-section ul {
        list-style-type: disc;
        padding-left: 20px;
    }

    .left-section li {
        font-size: 1.2rem;
        margin: 10px;
    }

    .right-section {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        max-width: 800px;
    }

    .map-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 800px;
    }

    .map {
        width: 100%;
        height: auto;
    }

    .pin {
        position: absolute;
        font-size: 24px;
        transform: translate(-50%, -50%);
    }

    .keymap {
        width: 100%;
        margin-top: 20px;
        font-size: 1.1rem;
        color: #333;
        text-align: center;
    }

    .keymap ul {
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }

    .keymap li {
        display: flex;
        padding: 5px;
        align-items: center;
        font-size: 1.1rem;
        margin: 0 15px;
    }

    .keymap span{
        margin: 0 10px;
    }

    .keymap li i {
        padding-right: 10px;
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            height: auto;
        }

        .left-section {
            margin-right: 0;
            margin-bottom: 20px;
        }

        .keymap ul {
            flex-direction: column;
            justify-content: center;
        }

        .keymap li {
            margin-bottom: 10px;
        }
    }
</style>
