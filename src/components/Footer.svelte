<script>
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<footer id="contactme" class="footer">
    <div class="container">
        <div class="footer__columns">
            <div class="footer__col">
                <h3 class="footer__col-title">
                    <i data-feather="shopping-bag"></i> <span>La boutique</span>
                </h3>
                <nav class="footer__nav">
                    <ul class="footer__nav-list">
                        <li class="footer__nav-item">
                            <a href="" class="footer__nav-link">
                                Mentions légales
                            </a>
                        </li>
                        <li class="footer__nav-item">
                            <a href="" class="footer__nav-link">
                                Politique de confidentialité
                            </a>
                        </li>
                        <li class="footer__nav-item">
                            <a href="" class="footer__nav-link"> CGV </a>
                        </li>
                        <li class="footer__nav-item">
                            <a href="" class="footer__nav-link">
                                Livraisons et retours
                            </a>
                        </li>
                        <li class="footer__nav-item">
                            <a href="" class="footer__nav-link">
                                Règlement concours
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">
                    <i data-feather="share-2"></i>
                    <span>{languages[currentLanguage].footer.followUs}</span>
                </h3>
                <nav class="footer__nav">
                    <ul class="footer__nav-list">
                        <li class="footer__nav-item">
                            <a
                                href="https://www.linkedin.com/company/multiservice-telecom-company/"
                                class="footer__nav-link"
                            >
                                <i data-feather="linkedin"></i><span
                                    >Linkedin</span
                                >
                            </a>
                        </li>
                        <li class="footer__nav-item">
                            <a
                                href="https://www.facebook.com/multiservicetelecomcompany/"
                                class="footer__nav-link"
                            >
                                <i data-feather="facebook"></i><span
                                    >Facebook</span
                                >
                            </a>
                        </li>
                        <li class="footer__nav-item">
                            <a
                                href="https://www.instagram.com/multiservice_telecom_company/"
                                class="footer__nav-link"
                            >
                                <i data-feather="instagram"></i><span
                                    >Instagram</span
                                >
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">
                    <i data-feather="send"></i> <span>Contact</span>
                </h3>
                <nav class="footer__nav">
                    <ul class="footer__nav-list">
                        <li class="footer__nav-item">
                            <a
                                href="contact@mtc-maroc.com"
                                class="footer__nav-link"
                            >
                                contact@mtc-maroc.com
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="footer__copyrights">
            <p>2022 MTC-MAROC. All Rights Reserved</p>
        </div>
    </div>
</footer>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

    .footer {
        position: relative;
        margin-top: 300px;
        padding: 3rem 0;
        color: #fff;
        background: #124c87;
        margin-top: 70px;
    }

    .container {
        width: 100%;
        max-width: 1600px;
        margin: 0 auto;
    }
    .footer__columns {
        display: flex;
        justify-content: space-between;
    }
    .footer__col-title {
        font-size: 1.6rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
    }
    .footer__col-title * ~ span {
        margin-left: 1rem;
    }
    .footer a {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
    }
    .footer a * ~ span {
        margin-left: 1rem;
    }
    .footer__nav-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .footer__copyrights {
        padding-top: 3rem;
        margin-top: 3rem;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
    .footer__copyrights p {
        display: flex;
    }
    .footer__copyrights p a {
        margin-left: 0.5rem;
    }
</style>
