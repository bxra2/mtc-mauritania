<script>
    import Card from './Card.svelte'
    import { languages } from '../helpers/languages'
    export let currentLanguage
    import Dialog from './Dialog.svelte'
    const items = [
        {
            title: 'hhohh',
            description: [
                'Acquisition, construction, and installation of equipment/site integration for mobile sites.',
                'Defining technical choices for site construction and electrification.',
                'Execution of sites with aesthetic solutions.',
            ],
        },
        {
            title: 'hehe',
            description: [
                'Electrical connection work for Telecom sites (electric generators, solar panels, hybrid energy).',
                'Installation of communication and wireless equipment, along with necessary infrastructure.',
            ],
        },
        {
            title: 'haha',
            description: [
                'Maintenance of GSM/GSM-R sites for ONCF.',
                'Management of blockages with local residents and authorities, which may involve maintenance or repair interventions to resolve encountered issues.',
            ],
        },
    ]
</script>

<div id="activities">
    <h2 class="text-5xl font-bold text-gray-900 text-center">
        DOMAINE D’ACTIVITÉ
    </h2>
    <div class="container">
        <Card
            dialogcontent={languages[currentLanguage].telecom}
            title={languages[currentLanguage].activity.telecomTitle}
            iconClasses={'fa-solid fa-tower-cell fa-6x'}
            desc={languages[currentLanguage].activity.telecom}
        />
        <Card
            dialogcontent={languages[currentLanguage].energy}
            title={languages[currentLanguage].activity.energyTitle}
            iconClasses={'fa-solid fa-bolt fa-6x'}
            desc={languages[currentLanguage].activity.energy}
        />
        <Card
            dialogcontent={languages[currentLanguage].IT}
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
