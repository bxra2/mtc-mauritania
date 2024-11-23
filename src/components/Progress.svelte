<section class="funfact-wrapper text-white">
    <div class="container">
        <div
            class="funfact-content-grid bg-cover bg-center"
            style="background-image: url('../../public/cta-bg.png')"
        >
            <div class="single-funfact-item">
                <div class="icon">
                    <i class="fa fa-users"></i>
                </div>
                <h3 style="visibility: visible;" class="is-visible">368</h3>
                <p>Clients</p>
            </div>
            <div class="single-funfact-item">
                <div class="icon">
                    <i class="fa-solid fa-list-check"></i>
                </div>
                <h3 style="visibility: visible;" class="is-visible">785</h3>
                <p>Projets</p>
            </div>
            <div class="single-funfact-item">
                <div class="icon">
                    <i class="fa-regular fa-handshake"></i>
                </div>
                <h3 style="visibility: visible;" class="is-visible">40</h3>
                <p>Partenaires</p>
            </div>
            <div class="single-funfact-item">
                <div class="icon">
                    <i class="fa-solid fa-user-tie"></i>
                </div>
                <h3 style="visibility: visible;" class="is-visible">45</h3>
                <p>Collaborateur</p>
            </div>
        </div>
    </div>
</section>

<style>
    .bg-cover {
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        background-position: center;
    }

    .funfact-wrapper {
        position: relative;
        z-index: 1;
        margin-bottom: 50px;
    }

    .funfact-wrapper.bottom::before {
        bottom: 0;
        top: auto;
    }

    .funfact-wrapper.no-bg::before {
        display: none;
    }

    .funfact-wrapper::before {
        position: absolute;
        height: 50%;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #f6f6f6;
        content: '';
    }

    @media (min-width: 1500px) {
        .funfact-wrapper .container {
            max-width: 1400px;
            width: 100%;
        }
    }

    .funfact-wrapper .funfact-content-grid {
        background-color: #064888;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    .funfact-content-grid {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        -ms-grid-rows: auto;
        grid-template-rows: auto;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        text-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 7px;
        padding: 80px 0px 70px;
    }

    @media (max-width: 991px) {
        .funfact-content-grid {
            -ms-grid-columns: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            grid-gap: 40px;
        }
    }

    @media (max-width: 500px) {
        .funfact-content-grid {
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
            grid-gap: 40px;
        }
    }

    .funfact-content-grid .single-funfact-item .icon {
        font-size: 42px;
        line-height: 1;
        margin-bottom: 20px;
    }

    .funfact-content-grid .single-funfact-item h3 {
        font-weight: 500;
        font-size: 55px;
        line-height: 1;
        position: relative;
        display: inline-block;
    }

    .funfact-content-grid .single-funfact-item h3::before {
        position: absolute;
        content: '+';
        right: -20px;
        top: -15px;
        font-size: 30px;
        font-weight: 400;
    }

    .funfact-content-grid .single-funfact-item p {
        margin-top: 5px;
    }
</style>
