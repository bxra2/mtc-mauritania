<script>
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<section id="" class="bg-[#eee] py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl font-bold text-gray-900 text-center">
            {languages[currentLanguage].ourMission.title}
        </h2>
        <div class="mt-12 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-32">
            <div>
                <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-[#064888] text-white"
                >
                    <i class="fa-solid fa-chart-line"></i>
                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">Mission</h3>
                    <p class="mt-2 text-base text-gray-500">
                        {languages[currentLanguage].ourMission.points[1]}
                    </p>
                </div>
            </div>
            <div>
                <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-[#064888] text-white"
                >
                    <i class="fa-solid fa-lightbulb"></i>
                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">Values</h3>
                    <p class="mt-2 text-base text-gray-500">
                        {languages[currentLanguage].ourMission.points[2]}
                    </p>
                </div>
            </div>
            <div>
                <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-[#064888] text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">Objective</h3>
                    <p class="mt-2 text-base text-gray-500">
                        {languages[currentLanguage].ourMission.points[3]}

                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
