<section
    class="cta-video-wrapper section-padding bg-cover"
    style="background-image: url('assets/img/home4/cta-bg.png')"
>
    <div class="container">
        <div class="row align-items-center">
            <div
                class="col-lg-8 col-12 mt-5 mt-lg-0 order-2 order-lg-1 text-center text-white text-lg-left"
            >
                <div class="cta-contents-wrap">
                    <h1>MTC</h1>
                    <h3>
                        Est le leader Marocain indépendant des services
                        multi-techniques dans les domaines du systèmes de
                        communication ,Génie civil ainsi que des services
                        spécialisés liés à l'énergie.
                    </h3>
                </div>
            </div>
            <div class="col-lg-4 col-12 order-1 order-lg-2">
                <div
                    class="video_popup justify-content-center d-flex align-items-center"
                >
                    <div class="video-play-btn">
                        <a
                            href="https://www.youtube.com/watch?v=AF7xpe_TABo"
                            class="play-video popup-video"
                            ><i class="fa-solid fa-play"></i></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .cta-video-wrapper {
        background-color: #064888;
        padding: 50px 0; /* Added more padding for better spacing */
        background-size: cover; /* Ensures the background image covers the entire container */
        background-position: center; /* Centers the background image */
    }

    .cta-contents-wrap h1 {
        font-size: 42px; /* Increased the font size of MTC */
        margin-bottom: 15px; /* Space between title and subtitle */
        text-align: left; /* Aligns the MTC heading to the left */
        color: white; /* Ensures the text color is white */
    }

    .cta-contents-wrap h3 {
        font-size: 24px; /* Increased the font size of the subtitle */
        line-height: 1.6; /* Adds spacing between lines for readability */
        text-align: left; /* Aligns the subtitle to the left */
        color: white; /* Ensures the text color is white */
    }

    .popup-video {
        background-color: white;
        border-radius: 50%; /* Ensures the button is circular */
        width: 120px; /* Increased the button size */
        height: 120px; /* Keep the width and height same for a perfect circle */
        display: flex;
        justify-content: center; /* Centers the icon horizontally */
        align-items: center; /* Centers the icon vertically */
        cursor: pointer; /* Makes the button clickable */
        transition: transform 0.2s; /* Smooth scaling effect on hover */
        animation: pulseAnimation 4s infinite; /* Adds the pulsing animation */
    }

    .popup-video i {
        font-size: 25px; /* Increased the play icon size */
        color: #064888; /* Matching the section's background color */
        outline: none; /* Removes any outline around the icon */
    }

    .popup-video:hover {
        transform: scale(1.1); /* Slightly scale up the button on hover */
    }

    .video_popup {
        display: flex;
        justify-content: center; /* Centers the video button */
        align-items: center;
        height: 100%; /* Ensures it's vertically centered */
    }

    /* Remove outline and border on click/focus */
    .popup-video a {
        outline: none; /* Removes the default outline */
        border: none; /* Removes any border */
    }

    /* Pulsing Animation */
    @keyframes pulseAnimation {
        0% {
            transform: scale(1); /* Normal size */
        }
        50% {
            transform: scale(1.05); /* Slightly bigger */
        }
        100% {
            transform: scale(1); /* Back to normal size */
        }
    }

    /* Responsive Design for Smaller Screens */
    @media (max-width: 768px) {
        .cta-video-wrapper {
            padding: 40px 15px; /* Less padding on smaller screens */
        }

        .cta-contents-wrap h1 {
            font-size: 36px; /* Adjust heading size on smaller screens */
        }

        .cta-contents-wrap h3 {
            font-size: 20px; /* Adjust subtitle size on smaller screens */
        }

        .popup-video {
            width: 100px; /* Smaller button on mobile */
            height: 100px;
        }

        .popup-video i {
            font-size: 20px; /* Slightly smaller icon on mobile */
        }
    }
</style>
