<script>
    export let title, desc, iconClasses
</script>

<div class="card">
    <div class="ilustration">
        <i class={`${iconClasses}`}></i>
    </div>
    <h3>{title}</h3>
    <ul>
        {#each desc as item}
            <br />
            <li>{item}</li>
        {/each}
    </ul>
    <!-- <button>haha</button> -->
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');
    /*5 Minutes Challenge*/
    body {
        background: #eceff1;
    }
    .card {
        background-color: #eceff1;
        border-radius: 30px;
        text-align: center;
        padding: 15px;
        max-width: 375px;
        margin: 100px auto;
        box-shadow:
            20px 20px 20px #e6eaed,
            -20px -20px 20px #f2f4f5;
    }
    .card .ilustration {
        margin: 20px;
        border-radius: 30px;
        background-color: #124c87;
        display: flex;
        justify-content: center; /* Horizontal centering */
        align-items: center;
        padding: 50px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .card .ilustration i {
        border-radius: 10%;
        overflow: hidden;
        text-align: center;
        color: #f2f4f5;
        margin: auto;
        
    }
    .card h3 {
        font-family: 'Fredoka', sans-serif;
        font-size: 2rem;
        line-height: 2.2rem;
        color: #1d2428;
        font-weight: bold;
        margin: 30px 0;
    }
    .card p {
        font-family: 'Fredoka', sans-serif;
        font-size: 1rem;
        line-height: 1.3rem;
        color: #5e7280;
        margin: 30px auto;
        max-width: 80%;
    }
    .card button {
        font-family: 'Fredoka', sans-serif;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 15px 80px;
        border-radius: 25px;
        color: white;
        border: 0;
        margin: 30px 0;
        outline: none;
        background-color:  #143c64;
        box-shadow:
            10px 10px 10px rgba(122, 196, 125, 0.2),
            -10px -10px 10px rgba(136, 202, 139, 0.2);
        transition: ease all 0.3s;
        cursor: pointer;
    }
    .card button:hover {
        box-shadow:
            20px 20px 20px rgba(122, 196, 125, 0.1),
            -20px -20px 20px rgba(136, 202, 139, 0.1);
        transform: translateY(-3px);
    }
    .card button:active {
        transform: scale(0.9);
        box-shadow:
            inset -1px -1px 3px rgba(122, 196, 125, 0.3),
            -20px -20px 20px rgba(136, 202, 139, 0);
    }
    li {
        list-style: none;
    }
</style>
