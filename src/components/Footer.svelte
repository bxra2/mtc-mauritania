<script>
    import { logo } from '../helpers/Routes'

    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<footer id="contact" class="footer-section">
    <div class="container">
        <div class="footer-cta pt-5 pb-5">
            <div class="row">
                <div class="p-2 col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="cta-text">
                            <h4>{languages[currentLanguage].footer.findUs}</h4>
                            <span
                                >NOT N°0053-Tevragh-Zeina Sud-Nouakchott -
                                Mauritania</span
                            >
                        </div>
                    </div>
                </div>
                <div class=" p-2 col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="fas fa-phone"></i>
                        <div class="cta-text">
                            <h4>{languages[currentLanguage].footer.callUs}</h4>
                            <span>+22232295588</span>
                        </div>
                    </div>
                </div>
                <div class="p-2 col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="far fa-envelope-open"></i>
                        <div class="cta-text">
                            <h4>{languages[currentLanguage].footer.mailUs}</h4>
                            <span>info@mtc-mauritania.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-content pt-5 pb-5">
            <div class="row">
                <div class="col-xl-8 col-lg-4 mb-50">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="index.html"
                                ><img
                                    src={logo}
                                    class="img-fluid"
                                    alt="logo"
                                /></a
                            >
                        </div>
                        <div class="footer-text">
                            <p>
                                Est le leader Marocain indépendant des services
                                multi-techniques
                            </p>
                        </div>
                        <div class="footer-social-icon">
                            <span
                                >{languages[currentLanguage].footer
                                    .followUs}</span
                            >
                            <a
                                href="https://www.facebook.com/multiservicetelecomcompany/"
                                ><i class="fab fa-facebook-f fa-xl"></i></a
                            >
                            <a
                                href="https://www.instagram.com/multiservice_telecom_company/"
                                ><i class="fab fa-instagram fa-xl"></i></a
                            >
                            <a
                                href="https://www.linkedin.com/company/multiservice-telecom-company/"
                                ><i class="fab fa-linkedin fa-xl"></i></a
                            >
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Sections</h3>
                        </div>
                        <ul>
                            <li>
                                <a href="#"
                                    >{languages[currentLanguage].navbar.home}
                                </a>
                            </li>
                            <li>
                                <a href="#mission"
                                    >{languages[currentLanguage].navbar
                                        .mission}</a
                                >
                            </li>
                            <li>
                                <a href="#history"
                                    >{languages[currentLanguage].navbar.history}
                                </a>
                            </li>
                            <li>
                                <a href="#activities"
                                    >{languages[currentLanguage].navbar
                                        .activity}</a
                                >
                            </li>
                            <li>
                                <a href="#partners"
                                    >{languages[currentLanguage].navbar
                                        .partners}</a
                                >
                            </li>
                            <li>
                                <a href="#contact"
                                    >{languages[currentLanguage].navbar.contact}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-area">
        <div class="container">
            <div class="row">
                <div class="copyright-text">
                    <p>Copyright &copy; 2024, All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    ul {
        margin: 0px;
        padding: 0px;
    }
    .footer-section {
        background: #151414;
        position: relative;
    }
    .footer-cta {
        border-bottom: 1px solid #373636;
    }
    .single-cta i {
        color: #064888;
        font-size: 30px;
        float: left;
        margin-top: 8px;
    }
    .single-cta {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        padding: 10px;
    }

    @media (max-width: 768px) {
        .single-cta {
            align-items: flex-start;
            justify-content: flex-start;
        }
    }

    .cta-text {
        padding-left: 15px;
        display: inline-block;
    }
    .cta-text h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
    }
    .cta-text span {
        color: #757575;
        font-size: 15px;
    }
    .footer-content {
        position: relative;
        z-index: 2;
    }
    .footer-logo {
        margin-bottom: 30px;
    }
    .footer-logo img {
        max-width: 200px;
    }
    .footer-text p {
        margin-bottom: 14px;
        font-size: 14px;
        color: #7e7e7e;
        line-height: 28px;
    }
    .footer-social-icon span {
        color: #fff;
        display: block;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 20px;
    }
    .footer-social-icon a {
        color: #fff;
        font-size: 16px;
        margin-right: 15px;
    }
    .footer-social-icon i {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 38px;
        border-radius: 50%;
    }
    .footer-widget-heading h3 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 40px;
        position: relative;
    }
    .footer-widget-heading h3::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -15px;
        height: 2px;
        width: 50px;
        background: #064888;
    }
    .footer-widget ul li {
        display: inline-block;
        float: left;
        width: 50%;
        margin-bottom: 12px;
    }
    .footer-widget ul li a:hover {
        color: #064888;
    }
    .footer-widget ul li a {
        color: #878787;
        text-transform: capitalize;
    }
    .copyright-area {
        background: #202020;
        padding: 25px 0;
    }
    .copyright-text p {
        margin: 0;
        font-size: 14px;
        color: #878787;
    }
</style>
