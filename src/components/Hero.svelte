<script>
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<section class="">
    <div
        class="bg-[#151414] text-white h-[92vh] element flex items-center justify-center"
    >
        <div
            class="container flex flex-col md:flex-row items-center my-16 md:my-20"
        >
            <div
                class="flex flex-col w-full lg:w-1/3 justify-center items-start p-10"
            >
                <h1 class="text-4xl md:text-7xl text-[#064888] tracking-loose">
                    MTC
                </h1>
                <h2
                    class="text-4xl md:text-5xl leading-relaxed md:leading-snug mb-4"
                >
                    {languages[currentLanguage].hero.title}
                </h2>
                <p class="text-lg md:text-xl text-gray-50 mb-6">
                    {languages[currentLanguage].hero.description}
                </p>
                <a
                    href="#contact"
                    class="bg-transparent hover:bg-[#064888] text-[#064888] hover:text-white rounded shadow hover:shadow-lg py-3 px-6 border border-[#064888] hover:border-transparent"
                >
                    Contact Us
                </a>
            </div>
            <div
                class="p-10 mt-16 mb-8 md:mb-0 md:mt-0 ml-0 md:ml-16 lg:w-2/3 justify-center"
            >
                <div class="h-56 flex flex-wrap content-center">
                    <div>
                        <img
                            alt="link"
                            class="inline-block mt-32 hidden xl:block"
                            style="width: 220px; border-radius: 8px;"
                            src="http://localhost:5173/images/LINK.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            class="inline-block mt-32 md:mt-0 p-8 md:p-0"
                            style="width: 420px; border-radius: 8px; padding:20px"
                            src="http://localhost:5173/images/prj1.png"
                        />
                    </div>
                    <div>
                        <img
                            alt="gsm"
                            class="inline-block mt-32 hidden lg:block"
                            style="width: 220px; border-radius: 8px;"
                            src="http://localhost:5173/images/GSM.png"
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
</style>
