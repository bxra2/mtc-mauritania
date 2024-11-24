<script>
    import Card2 from './Card2.svelte'
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<div id="activities">
    <h1>DOMAINE D’ACTIVITÉ</h1>
    <div class="container">
        <Card2
            title={languages[currentLanguage].activity.telecomTitle}
            iconClasses={'fa-solid fa-tower-cell fa-6x'}
            desc={languages[currentLanguage].activity.telecom}
        />
        <Card2
            title={languages[currentLanguage].activity.energyTitle}
            iconClasses={'fa-solid fa-bolt fa-6x'}
            desc={languages[currentLanguage].activity.energy}
        />
        <Card2
            title={languages[currentLanguage].activity.itTitle}
            iconClasses={'fa-solid fa-network-wired fa-6x'}
            desc={languages[currentLanguage].activity.it}
        />
    </div>
</div>

<style>
    #activities {
        margin: 40px 0;
    }
    h1 {
        text-align: center;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 20px;
    }
</style>
