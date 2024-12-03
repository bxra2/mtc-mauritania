<script>
    let dialog // Bind the dialog element
    export let dialogcontent, title

    // Function to open the modal
    function showModal() {
        dialog.showModal() // Open the dialog
    }

    // Function to close the modal
    function closeModal() {
        dialog.close() // Close the dialog
    }

    console.log('dialogcontent', dialogcontent)
</script>

<!-- Button to trigger modal opening -->
<button class="button-6" on:click={showModal}>Learn More..</button>

<!-- Modal dialog with multiple sections -->
<dialog bind:this={dialog}>
    <div class="modal-content">
        <!-- Section 1: Title and Close Button -->
        <div class="modal-section-header title">
            <h2>{title}</h2>
            <button on:click={closeModal} aria-label="close" class="x">
                ❌
            </button>
        </div>
        <hr />
        <!-- Section: Description Loop -->
        <div class="modal-sections">
            {#each dialogcontent as section}
                <div class="modal-section description">
                    <h3>{section.title}</h3>
                    {#each section.description as desc}
                        <p>{desc}</p>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</dialog>

<style>
    .button-6 {
        align-items: center;
        background-color: transparent;
        border-style: none;
        color: rgba(255, 255, 255, 0.85);
        cursor: pointer;
        display: inline-flex;
        font-family:
            system-ui,
            -apple-system,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif;
        font-size: 16px;
        font-weight: 600;
        justify-content: center;
        margin: 0;
        padding: 5px 30px;
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        vertical-align: baseline;
        border-radius: 100px;
    }

    dialog {
        padding: 1rem 3rem;
        background: white;
        width: 70%;
        border-radius: 20px;
        border: 0;
        box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        animation: fadeIn 1s ease both;
        overflow-y: auto;
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
    }

    .modal-sections {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        width: 100%;
    }

    .modal-section-header {
        width: 100%;
        margin: 10px;
    }

    .modal-section {
        flex: 1 1 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .modal-section-header.title {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .modal-section-header.title h2 {
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
    }

    .modal-section-header.title .x {
        position: absolute;
        top: 2px;
        right: 10px;
        font-size: 1.5rem;
        color: red;
        background: none;
        border: none;
        cursor: pointer;
    }

    .modal-section.description h3 {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 10px;
    }

    .modal-section.description p {
        font-size: 1rem;
        line-height: 1.5;
        padding: 10px;
    }

    .x {
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1.5rem;
        color: red;
        transition: transform 0.3s ease;
    }

    .x:hover {
        transform: scale(1.1);
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
