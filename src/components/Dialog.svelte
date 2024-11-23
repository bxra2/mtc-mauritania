<script>
    let dialog // Bind the dialog element

    // Function to open the modal
    function showModal() {
        dialog.showModal() // Open the dialog
    }

    // Function to close the modal
    function closeModal() {
        dialog.close() // Close the dialog
    }
</script>

<!-- Button to trigger modal opening -->
<button class="button-6" on:click={showModal}>Learn More..</button>

<!-- Modal dialog with multiple sections -->
<dialog bind:this={dialog}>
    <div class="modal-content">
        <!-- Section 1: Title and Close Button -->
        <div class="modal-section title">
            <h2>Modal Title</h2>
            <button on:click={closeModal} aria-label="close" class="x"
                >❌</button
            >
        </div>
        <div class="modal-sections">
            <!-- Section 2: Description -->
            <div class="modal-section description">
                <h3>Section 1</h3>
                <p>
                    This is the description of the first section. You can add
                    more details here. The modal supports multiple sections,
                    each with its own title and description.
                </p>
            </div>

            <!-- Section 3: Another Description -->
            <div class="modal-section description">
                <h3>Section 2</h3>
                <p>
                    This is the description of the second section. You can add
                    as many sections as you need, each with a title and
                    description.
                </p>
            </div>

            <!-- Section 4: Another Description -->
            <div class="modal-section description">
                <h3>Section 3</h3>
                <p>
                    This is the description of the third section. Each section
                    is separated, and the title will always stay the same size.
                </p>
            </div>
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
        max-width: 1000px; /* Increased width to fit content better */
        border-radius: 20px;
        border: 0;
        box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        animation: fadeIn 1s ease both;
        overflow-y: auto; /* Enable scrolling if content overflows */
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .modal-sections {
        display: flex;
        flex-direction: row;
    }
    .modal-section {
        margin: 10px;
    }

    .modal-section.title {
        display: flex;
        justify-content: center; /* Center the title horizontally */
        align-items: center; /* Center the title vertically */
        position: relative; /* For absolute positioning of the close button */
    }

    .modal-section.title h2 {
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0;
        text-align: center; /* Ensure the title is centered */
    }

    /* Close button styling */
    .modal-section.title .x {
        position: absolute; /* Position it at the top-right */
        top: 2px;
        right: 10px;
        font-size: 1.5rem;
        color: red;
        background: none;
        border: none;
        cursor: pointer;
    }

    .modal-section.title .x:hover {
        transform: scale(1.1);
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

    .modal-section.footer {
        text-align: right;
    }

    /* Close button styling */
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

    /* Animation for fade-in */
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
