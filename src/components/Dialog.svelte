<script>
    let dialog

    function showModal() {
        dialog.showModal() // Open the dialog
    }

    function closeModal() {
        dialog.close() // Close the dialog
    }
</script>

<button class="button-6" on:click={showModal}>Learn More..</button>

<dialog bind:this={dialog}>
    <h2>Hello.</h2>
    <p>
        A CSS-only modal based on the <a
            href="https://developer.mozilla.org/es/docs/Web/CSS/::backdrop"
            target="_blank">::backdrop</a
        > pseudo-class. Hope you find it helpful.
    </p>
    <p>
        You can also change the styles of the <code>::backdrop</code> from the CSS.
    </p>
    <button on:click={closeModal} aria-label="close" class="x">❌</button>
</dialog>

<style>
    .button-6 {
        align-items: center;
        background-color: transparent;
        border-style: none;
        box-sizing: border-box;
        color: rgba(255, 255, 255, 0.85);
        cursor: pointer;
        display: inline-flex;
        font-family:
            system-ui,
            -apple-system,
            system-ui,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif;
        font-size: 16px;
        font-weight: 600;
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 3rem;
        padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
        width: 100px;
        border-radius: 100px;
        padding: 5px 30px;
    }

    /* .button-6:hover,
    .button-6:focus {
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: rgba(0, 0, 0, 0.65);
    }

    .button-6:hover {
        transform: translateY(-1px);
    }

    .button-6:active {
        background-color: #f0f0f1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    } */
    dialog {
        padding: 1rem 3rem; /* Padding inside the dialog */
        background: white; /* White background */
        max-width: 400px; /* Maximum width */
        padding-top: 2rem; /* Top padding */
        border-radius: 20px; /* Rounded corners */
        border: 0; /* No border */
        box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%); /* Shadow */
        animation: fadeIn 1s ease both; /* Fade-in animation */

        position: fixed; /* Fixed positioning so it's always centered */
        top: 50%; /* Move it 50% from the top */
        left: 50%; /* Move it 50% from the left */
        transform: translate(-50%, -50%); /* Adjust the position to center it */
        z-index: 1000; /* Make sure it's above other content */
    }

    dialog::backdrop {
        animation: fadeIn 1s ease both;
        background: rgb(255 255 255 / 40%);
        z-index: 2;
        backdrop-filter: blur(20px);
    }

    .x {
        filter: grayscale(1);
        border: none;
        background: none;
        position: absolute;
        top: 15px;
        right: 10px;
        transition:
            ease filter,
            transform 0.3s;
        cursor: pointer;
        transform-origin: center;
    }

    .x:hover {
        filter: grayscale(0);
        transform: scale(1.1);
    }

    h2 {
        font-weight: 600;
        font-size: 2rem;
        padding-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.3rem;
        padding: 0.5rem 0;
    }

    body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Poppins, sans-serif;
        background: url(https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80)
            no-repeat center center;
        background-size: cover;
    }

    button.primary {
        display: inline-block;
        font-size: 0.8rem;
        color: #fff !important;
        background: rgb(var(--vs-primary) / 100%);
        padding: 13px 25px;
        border-radius: 17px;
        transition: background-color 0.1s ease;
        box-sizing: border-box;
        transition: all 0.25s ease;
        border: 0;
        cursor: pointer;
        box-shadow: 0 10px 20px -10px rgb(var(--vs-primary) / 50%);
    }

    button.primary:hover {
        box-shadow: 0 20px 20px -10px rgb(var(--vs-primary) / 50%);
        transform: translateY(-5px);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
