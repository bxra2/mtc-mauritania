<script>
    import { languages } from '../helpers/languages'
    export let currentLanguage
    import { heroImages } from '../helpers/Routes'
</script>

<section>
    <div
        class="bg-[#151414] text-white min-h-[92vh] element flex items-center justify-center"
    >
        <div class="container flex flex-col md:flex-row items-center md:my-20">
            <!-- Left Column with Text -->
            <div
                class="flex flex-col w-full md:w-1/3 justify-center items-start p-6 md:p-10 animate-fade-slide-up"
            >
                <h1 class="text-4xl md:text-7xl text-[#064888] tracking-loose">
                    MTC
                </h1>
                <h2
                    class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-4"
                >
                    {languages[currentLanguage].hero.title}
                </h2>
                <p class="text-base md:text-xl text-gray-50 mb-6">
                    {languages[currentLanguage].hero.description}
                </p>
                <a
                    href="#contact"
                    aria-label="Contact us for more information"
                    class="bg-[#064888] hover:bg-[#053c63] text-white hover:text-white rounded shadow hover:shadow-lg py-3 px-6 transition ease-in-out duration-300"
                >
                    {languages[currentLanguage].hero.contactUs}
                </a>
            </div>

            <!-- Right Column with Images -->
            <div
                class="p-4 md:p-10 md:mt-16 mb-4 md:mb-8 ml-0 md:ml-16 lg:w-2/3 justify-center animate-fade-slide-up"
            >
                <div class="h-56 flex flex-wrap justify-center items-center">
                    <div class="flex justify-center w-full lg:w-auto mb-4">
                        <img
                            alt="link"
                            class="inline-block max-w-full lg:max-w-[200px] rounded-md hidden lg:block"
                            src={heroImages.link}
                        />
                    </div>
                    <div class="flex justify-center w-full lg:w-auto mb-4">
                        <img
                            alt=""
                            class="inline-block max-w-full sm:max-w-[80%] md:max-w-[340px] xl:max-w-[420px] p-4 rounded-xl"
                            src={heroImages.prj1}
                        />
                    </div>
                    <div
                        class="flex justify-center w-full lg:w-auto mb-4 hidden 2xl:block"
                    >
                        <img
                            alt="gsm"
                            class="inline-block max-w-full lg:max-w-[200px] rounded-md"
                            src={heroImages.GSM}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .element {
        background: #151414;
        background-image: linear-gradient(
                45deg,
                rgba(0, 0, 0, 0.1) 25%,
                transparent 25%
            ),
            linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%);
        background-size: 10px 10px;
        background-blend-mode: multiply;
    }

    /* Keyframes for fade and slide up effect */
    @keyframes fadeSlideUp {
        0% {
            opacity: 0;
            transform: translateY(
                50px
            ); /* Start slightly lower than the final position */
        }
        100% {
            opacity: 1;
            transform: translateY(0); /* End at normal position */
        }
    }

    /* Animation class for fade and slide-up effect */
    .animate-fade-slide-up {
        animation: fadeSlideUp 1s ease-out; /* 'forwards' ensures the element stays visible after animation */
    }
</style>
