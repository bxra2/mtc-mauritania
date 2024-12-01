<script>
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

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
                    <h3>
                        {languages[currentLanguage].video}
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
        padding: 50px 0;
        background-size: cover;
        background-position: center;
    }

    .cta-contents-wrap h1 {
        font-size: 42px;
        margin-bottom: 15px;
        text-align: left;
        color: white;
    }

    .cta-contents-wrap h3 {
        font-size: 24px;
        line-height: 1.6;
        text-align: left;
        color: white;
    }

    .popup-video {
        background-color: white;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.2s;
        animation: pulseAnimation 4s infinite;
    }

    .popup-video i {
        font-size: 25px;
        color: #064888;
        outline: none;
    }

    .popup-video:hover {
        transform: scale(1.1);
    }

    .video_popup {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .popup-video a {
        outline: none;
        border: none;
    }

    @keyframes pulseAnimation {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    @media (max-width: 768px) {
        .cta-video-wrapper {
            padding: 40px 15px;
        }

        .cta-contents-wrap h1 {
            font-size: 36px;
        }

        .cta-contents-wrap h3 {
            font-size: 20px;
        }

        .popup-video {
            width: 100px;
            height: 100px;
        }

        .popup-video i {
            font-size: 20px;
        }
    }
</style>
