<script>
    let dialog // Bind the dialog element
    export let dialogcontent, title
    import { languages } from '../helpers/languages'
    export let currentLanguage
    // Function to open the modal
    function showModal() {
        dialog.showModal() // Open the dialog
    }

    // Function to close the modal
    function closeModal() {
        dialog.close() // Close the dialog
    }

    // Close the dialog if click happens outside of modal content
    function handleOutsideClick(event) {
        if (event.target === dialog) {
            closeModal()
        }
    }

    // Set up the event listener for clicking outside
    import { onMount, onDestroy } from 'svelte'

    onMount(() => {
        // Add the event listener when the component mounts
        dialog.addEventListener('click', handleOutsideClick)
    })

    onDestroy(() => {
        // Remove the event listener when the component is destroyed
        dialog.removeEventListener('click', handleOutsideClick)
    })

    console.log('dialogcontent', dialogcontent)
</script>

<!-- Button to trigger modal opening -->
<button class="button-6" on:click={showModal}
    >{languages[currentLanguage].activity.learnMore}</button
>

<!-- Modal dialog with multiple sections -->
<dialog bind:this={dialog} class=" w-full sm:w-[70%]">
    <div class="modal-content">
        <!-- Section 1: Title and Close Button -->
        <div class="modal-section-header title">
            <h2>{title}</h2>
            <button on:click={closeModal} aria-label="close" class="x">
                <i class="fa-solid fa-x"></i>
            </button>
        </div>
        <hr />
        <!-- Section: Description Loop -->
        <div class="modal-sections">
            {#each dialogcontent as section}
                <div class="modal-section description">
                    <h3>{section.title}</h3>
                    <ul>
                        {#each section.description as desc}
                            <li>{desc}</li>
                        {/each}
                    </ul>
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
        width: inherit;
        padding: 8px 25px;
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        vertical-align: baseline;
        border-radius: 100px;
    }
    /* Base styles for larger screens (laptops and up) */
    dialog {
        min-height: fit-content;
        padding: 1rem 3rem;
        background: white;
        border-radius: 20px;
        height: max-content;
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
        position: relative;
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
        padding-bottom: 20px;
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
        color: #aaa;
        background: none;
        border: none;
        cursor: pointer;
    }

    .modal-section.description h3 {
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .modal-section.description li {
        font-size: 1rem;
        line-height: 1.5;
        padding-bottom: 10px;
    }

    .x {
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1.5rem;
        color: #aaa;
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

    /* Mobile adjustments (screens 768px or smaller) */
    @media (max-width: 768px) {
        dialog {
            min-width: 80vw; /* Ensure the dialog is responsive, but not too wide */
            max-width: 90vw; /* Set a maximum width */
            padding: 0rem 1rem; /* Reduce padding for mobile */
        }

        .modal-content {
            padding: 10px; /* Adjust padding for smaller screens */
            min-height: 90%; /* Ensure the modal doesn't collapse */
        }

        .modal-section-header.title h2 {
            font-size: 1.5rem; /* Slightly smaller title font on mobile */
        }

        .modal-section-header.title .x {
            font-size: 1.2rem; /* Smaller close icon on mobile */
            top: 5px;
            right: 5px;
        }

        .modal-section.description h3 {
            font-size: 1.4rem; /* Smaller section headers on mobile */
        }

        .modal-section.description li {
            font-size: 0.9rem; /* Adjust font size for better readability on mobile */
        }

        .modal-sections {
            flex-direction: column; /* Stack the sections vertically on mobile */
            gap: 10px; /* Smaller gap between sections */
        }
    }
</style>
