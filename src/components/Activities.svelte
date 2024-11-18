<script>
    import Card from './Card.svelte'
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<h1>DOMAINE D’ACTIVITÉ</h1>
<div class="container">
    <Card
        iconClasses={'fa-solid fa-tower-cell fa-6x'}
        desc={languages[currentLanguage].activity.telecom}
        title={languages[currentLanguage].activity.telecomTitle}
    />
    <Card
        iconClasses={'fa-solid fa-bolt fa-6x'}
        desc={languages[currentLanguage].activity.energy}
        title={languages[currentLanguage].activity.energyTitle}
    />
    <Card
        iconClasses={'fa-solid fa-network-wired fa-6x'}
        desc={languages[currentLanguage].activity.it}
        title={languages[currentLanguage].activity.itTitle}
    />
</div>

<style>
    h1 {
        text-align: center;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
    }
</style>
