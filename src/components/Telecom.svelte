<script>
    import Card from './Card.svelte'
    import { languages } from '../helpers/languages'

    export let currentLanguage
</script>

<h1>oabd</h1>
<div class="container">
    <Card
        iconClasses={'fa-regular fa-lightbulb fa-7x'}
        desc={languages[currentLanguage].telecom.design}
        title={languages[currentLanguage].telecom.designTitle}
    />
    <Card
        iconClasses={'fa-solid fa-bullseye fa-7x'}
        desc={languages[currentLanguage].telecom.facility}
        title={languages[currentLanguage].telecom.facilityTitle}
    />
    <Card
        iconClasses={'fa-solid fa-gears fa-7x'}
        desc={languages[currentLanguage].telecom.maintenance}
        title={languages[currentLanguage].telecom.maintenanceTitle}
    />
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
    }
</style>
