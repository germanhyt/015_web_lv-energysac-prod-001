<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php
    include_once(__DIR__ . "/../../config/config/config.php")
    ?>

    <link rel="stylesheet" href="<?php echo constant('HOST') ?>/assets/css/vendors/swiper-bundle.min.css" />
    <link rel="stylesheet" href="<?php echo constant('HOST') ?>/assets/css/home.css">
    <link rel="stylesheet" href="<?php echo constant('HOST') ?>/assets/css/vendors/all.min.css">
    <link rel="stylesheet" href="<?php echo constant('HOST') ?>/assets/css/vendors/sweetalert2.min.css">

</head>

<body>
    <?php
    include_once(__DIR__ . "/../../components/nav.php");

    include_once(__DIR__ . "/../../assets/data/attributes.php");

    include_once(__DIR__ . "/../../components/social-networks.php");
    ?>

    <div id="home-hero" class="home-hero">
        <figure class="home-hero__figure">
            <img src="<?php echo constant("HOST") ?>/public/img/header-bg.png" alt="img">
        </figure>
        <div class="home-hero__content">
            <div class="home-hero__content-container">
                <div class="home-hero__text">
                    <h1 class="home-hero__title">
                        Capacitaciones para trabajos en redes de distribución de energía eléctrica
                    </h1>
                    <p class="home-hero__description">
                        Accede a la mejor preparación para tus trabajadores con L&V ENERGY. Te ofrecemos una capacitación de alto nivel con especialistas altamente calificados que impulsarán a tu empresa a obtener los mejores resultados.
                    </p>
                </div>

                <div class="home-hero__button">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=+910139973&text=Hola👋,%20me%20puede%20brindar%20más%20información"><button>
                            Comunícate con nosotros
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <section id="about-us" class="home-section-about ">
        <div class="home-section-about__container">
            <figure class="home-section-about__figure scroll-animation-item-multimedia-left ">
                <img class="" src="<?php echo constant("HOST") ?>/public/img/about.jpg" alt="img">
            </figure>
            <div class="home-section-about__content scroll-animation-item-contain ">
                <h3 class="">L&V ENERGY</h3>
                <p class="">
                    Somos un centro de capacitación técnica dirigido al personal que efectúa trabajos en redes de energía eléctrica de media y baja tensión, cuyo propósito es contribuir con el desarrollo energético del país, ofreciendo asesoría especializada que permita la continuidad del suministro de energía eléctrica a nivel nacional.
                </p>
            </div>
        </div>
    </section>

    <section id="about-us-founder" class="home-section-founder">
        <div class="home-section-founder__container">
            <div class="home-section-founder__content scroll-animation-item-contain">
                <h3 class="">
                    Guiados por el legado de nuestro fundador, nos comprometemos a ofrecer un servicio de calidad que refleje su visión y valores.
                </h3>
                <p class="">
                    “Disciplina, compromiso y seguridad, es lo que define nuestro método de enseñanza como L&V ENERGY”.
                </p>
                <span class="">Eduardo Lozano / Fundador.</span>
            </div>
            <figure class="home-section-founder__figure scroll-animation-item-multimedia-right">
                <img class="" src="<?php echo constant("HOST") ?>/public/img/founder.png" alt="img">
            </figure>
        </div>
    </section>

    <section id="about-us-pillars" class="home-section-pillars">
        <div class="home-section-pillars__contain scroll-animation-item-contain">
            <h3 class="">Nuestros Pilares</h3>
            <div class="home-section-pillars__grid">
                <div class="home-section-pillars__item">
                    <h4 class="home-section-pillars__title">Visión</h4>
                    <p class="home-section-pillars__description">
                        Brindar una asesoría de calidad que busque desarrollar las competencias y habilidades necesarias para realizar las actividades de manera segura y efectiva.
                    </p>
                </div>
                <div class="home-section-pillars__item">
                    <h4 class="home-section-pillars__title">Misión</h4>
                    <p class="home-section-pillars__description">
                        Ser el principal centro de capacitación peruano que colabore con las empresas del mercado de energía electrica para el suministro continuo y seguro de energía eléctrica a nivel nacional.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <?php
    include_once(__DIR__ . "/../../components/line.php");
    ?>

    <section id="benefits" class="home-section-benefits scroll-animation-item-contain">
        <h3 class="home-section-benefits__title">Potenciar el crecimiento de tus trabajadores, brindará a tu equipo beneficios como...</h3>
        <div class="home-section-benefits__container">
            <div class=" home-section-benefits__card">
                <figure class="home-section-benefits__figure">
                    <img class="" src="<?php echo constant("HOST") ?>/public/img/benefit-1.png" alt="img">
                </figure>
                <div class="home-section-benefits__card-content">
                    <div class="home-section-benefits__card-content-box">
                        <h2 class="home-section-benefits__card-h2">Eficiencia</h2>
                        <div class="home-section-benefits__card-icon ">
                            <span class=""> Eficiencia</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <p class="home-section-benefits__card-p">
                        Brindamos una formación actualizada en técnicas operativas y de seguridad que puedn aumentar la eficiencia del trabajo diario de tus trabajadores, lo que se traducirá en una mayor productividad para tu empresa.
                    </p>
                    <!-- <a class="home-section-benefits__card-a" href="#">Learn More</a> -->
                </div>
            </div>
            <div class="home-section-benefits__card">
                <figure class="home-section-benefits__figure">
                    <img class="" src="<?php echo constant("HOST") ?>/public/img/benefit-2.png" alt="">
                </figure>
                <div class="home-section-benefits__card-content">
                    <div class="home-section-benefits__card-content-box">
                        <h2 class="home-section-benefits__card-h2">Calidad Operativa</h2>
                        <div class="home-section-benefits__card-icon">
                            <span class="">Calidad Operativa</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <p class="home-section-benefits__card-p">
                        Nuestros cursos mejorarán significativamente la calidad operativa de tu empresa, al preparar al personal con una actuación adecuada para evitar posibles incidentes y accidentes en el lugar de trabajo.
                    </p>
                </div>
            </div>
            <div class="home-section-benefits__card">
                <figure class="home-section-benefits__figure">
                    <img class="" src="<?php echo constant("HOST") ?>/public/img/benefit-3.png" alt="img">
                </figure>
                <div class="home-section-benefits__card-content">
                    <div class="home-section-benefits__card-content-box">
                        <h2 class="home-section-benefits__card-h2">Desarrollo Profesional</h2>
                        <div class="home-section-benefits__card-icon">
                            <span class=""> Desarrollo Profesional</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <p class="home-section-benefits__card-p">
                        Potenciamos el desarrollo profesional de tu personal para que trabajen de manera segura y en equipo aplicando todos los conocimientos requeridos en su labor diaria. Esto mejorará su satisfacción y compromiso con la empresa.
                    </p>
                </div>
            </div>
            <div class="home-section-benefits__card">
                <figure class="home-section-benefits__figure">
                    <img class="" src="<?php echo constant("HOST") ?>/public/img/benefit-4.jpg" alt="img">
                </figure>
                <div class="home-section-benefits__card-content">
                    <div class="home-section-benefits__card-content-box">
                        <h2 class="home-section-benefits__card-h2">Competitividad</h2>
                        <div class="home-section-benefits__card-icon">
                            <span class=""> Competitividad</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <p class="home-section-benefits__card-p">
                        Te ayudamos a preparar un equipo bien capacitado para que así tu empresa pueda tener una ventaja competitiva al ofrecer servicios de mayor calidad y eficiencia en comparación a la competencia.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="benefits-best-option" class="home-section-best-option">
        <div class="home-section-best-option__contain scroll-animation-item-contain">
            <h3>¿Por qué somos tu mejor opción?</h3>
            <div class="home-section-best-option__grid">
                <div class="home-section-best-option__item">
                    <img class="home-section-best-option__img" src="<?php echo constant("HOST") ?>/public/img/option-1.svg" alt="img">
                    <p class="home-section-best-option__description">Capacitamos desde la excelencia priorizando tu seguridad en el campo.</p>
                </div>
                <div class="home-section-best-option__item">
                    <img class="home-section-best-option__img" src="<?php echo constant("HOST") ?>/public/img/option-2.svg" alt="img">
                    <p class="home-section-best-option__description">Contamos con personal altamente calificado y con experiencia en el mercado peruano.</p>
                </div>
                <div class="home-section-best-option__item">
                    <img class="home-section-best-option__img" src="<?php echo constant("HOST") ?>/public/img/option-3.svg" alt="img">
                    <p class="home-section-best-option__description">Brindamos un servicio de calidad y garantía, basado en la experiencia y trayectoria de nuestros capacitadores.</p>
                </div>
                <div class="home-section-best-option__item">
                    <img class="home-section-best-option__img" src="<?php echo constant("HOST") ?>/public/img/option-4.svg" alt="img">
                    <p class="home-section-best-option__description">Aprenderás y/o reforzarás tanto los conocimientos teóricos de tus trabajadores como sus habilidades en el campo.</p>
                </div>
            </div>
        </div>
    </section>

    <?php
    include(__DIR__ . "/../../components/line.php");
    ?>


    <section id="courses" class="home-section-filter ">
        <h3 class="home-section-filter__title scroll-animation-item-contain">Te ofrecemos 3 módulos de cursos</h3>

        <div class="home-section-filter__inner-tabs">
            <figure class="home-section-filter__figure">
                <img src="<?php echo constant("HOST") ?>/public/img/courses-bg.png" alt="img">
            </figure>

            <div class="home-section-filter__inner swiper swiper--filter">
                <div class="swiper-wrapper">
                    <?php foreach ($filterTabs as $key => $filterTab) : ?>

                        <div class="swiper-slide">
                            <div class="home-section-filter__tab-wrapper">

                                <!-- <button class="btn btn--filter active" data-filter="all">Todos</button> -->
                                <button class="btn btn--filter 
                                    <?= ($key === 0) ? "active" : "" ?>" data-filter=".<?= $filterTab["id"] ?>">
                                    <?= $filterTab["title"] ?>
                                </button>
                            </div>
                        </div>
                    <?php endforeach ?>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

            <div class="home-section-filter__tabs ">
                <div class="">
                    <button class="btn btn--filter active" data-filter="all">Todos</button>
                </div>
                <?php foreach ($filterTabs as $key => $filterTab) : ?>
                    <div class="">
                        <button class="btn btn--filter" data-filter=".<?= $filterTab["id"] ?>"><?= $filterTab["title"] ?></button>
                    </div>
                <?php endforeach ?>
            </div>

            <div class="card-product__grid ">
                <?php foreach ($products as $key => $product) : ?>
                    <div class="card-product mix <?php echo $product["id_category"] ?>">
                        <div class="card-product__title-container">
                            <h3 class="card-product__title"><?php echo $product["title"] ?></h3>
                        </div>
                        <div class="card-product__content">
                            <div class="card-product__content-objective">
                                <h4>Objetivo</h4>
                                <p><?php echo $product["objetivo"] ?></p>
                            </div>
                            <div class="card-product__content-about">
                                <h4>Descripción</h4>
                                <ul>
                                    <?php foreach ($product["consiste"] as $consiste) : ?>
                                        <li><?php echo $consiste ?></li>
                                    <?php endforeach ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>
    </section>

    <section id="customers" class="home-clients scroll-animation-item-contain">
        <div class="home-clients__heading">
            <h3>Empresas que ya cuentan con un personal capacitado por nosotros</h3>
        </div>

        <div class="swiper swiper--clients">
            <div class="swiper-wrapper">
                <?php foreach ($clients as $client) : ?>
                    <div class="swiper-slide">
                        <figure class="home-clients__figure">
                            <img class="home-clients__img" src="<?php echo constant("HOST") ?>/public/img/<?php echo $client['img']; ?>" alt="<?= $client['alt']; ?>">
                        </figure>
                    </div>
                <?php endforeach ?>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <section id="courses-trainings" class="home-trainings scroll-animation-item-contain">
        <div class="home-trainings__heading">
            <h3>Nuestras capacitaciones</h3>
        </div>

        <div class="swiper swiper--trainings">
            <div class="swiper-wrapper">
                <?php foreach ($trainings as $training) : ?>
                    <div class="swiper-slide">
                        <figure class="home-trainings__figure">
                            <img class="home-trainings__img" src="<?php echo constant("HOST") ?>/public/img/<?php echo $training['img']; ?>" alt="<?= $training['alt']; ?>">
                        </figure>
                    </div>
                <?php endforeach ?>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <section id="banner-cta" class="home-section-banner">
        <figure class="home-section-banner__figure">
            <img src="<?php echo constant("HOST") ?>/public/img/banner-bottom-bg.png" alt="img">
        </figure>
        <div class="home-section-banner__content ">
            <div class="home-section-banner__content-container scroll-animation-item-multimedia-left">
                <h3 class="home-section-banner__title ">
                    Comienza a potenciar el desempeño de tu equipo con nosotros
                </h3>

                <div class="home-section-banner__btn">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=+910139973&text=Hola👋,%20me%20puede%20brindar%20más%20información">
                        <button class="">Comunícate con nosotros</button>
                    </a>
                </div>
            </div>
        </div>
    </section>


    <!-- <section className="relative w-screen h-screen flex items-center justify-center"> -->
    <!-- <div id="overlay" class="overlay"> -->
    <!-- <div class="loader"> -->
    <!-- <span>Loading...</span> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </section> -->
    <!-- <section id="section" class="section">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsum recusandae voluptate suscipit fuga neque tenetur voluptas, ut voluptatum voluptates aspernatur ipsa eaque, soluta et repudiandae fugit minus! Molestiae, quo quidem quibusdam, quae quas voluptates atque officiis ullam dolorem assumenda ad tempore facilis cumque, exercitationem illo? Illum consectetur doloremque veritatis nobis voluptatum obcaecati suscipit ipsam recusandae pariatur, nihil nulla cupiditate similique fugit nostrum, aliquam facere repudiandae a aspernatur placeat dolore eaque quas voluptatem rem? Dolores enim nobis, dicta exercitationem odio illum, repellendus in fuga sapiente eos deserunt illo, harum ab iure? Est cupiditate omnis libero vitae alias. Esse ipsa assumenda, aspernatur temporibus natus quidem iure voluptatem maiores eaque labore nihil at explicabo alias repellendus qui hic aliquam consectetur quibusdam? Nesciunt ducimus nisi vero esse quisquam dignissimos impedit quia, quam debitis veniam aperiam ad dolores eum adipisci necessitatibus facere cum, commodi totam itaque. Possimus, quod rerum! Cum voluptas ipsum possimus officia expedita hic praesentium veniam odio temporibus nostrum inventore vitae, exercitationem tempora quo impedit sed minus dicta perferendis eligendi minima, nam eveniet aliquam veritatis reprehenderit! Asperiores nemo voluptatum, suscipit, odio temporibus accusamus dolorum necessitatibus voluptatem quis in vel esse id fugiat? Fuga illo est quaerat impedit aspernatur reiciendis soluta harum temporibus itaque beatae non voluptatibus rerum veniam consequuntur odio perspiciatis libero optio dolorem, cupiditate ex nostrum hic nemo! Consequatur debitis nemo quod quis modi repellat nulla numquam, officia vero iste eligendi nihil quia ipsa expedita quaerat nam repudiandae distinctio ut, consectetur veniam quisquam. Voluptatibus laudantium, mollitia explicabo optio possimus, adipisci modi, soluta neque harum amet debitis! Tempora facilis nisi veritatis rerum quaerat laudantium modi. Odio quibusdam ullam voluptate molestiae ratione pariatur ad illo! Quod vitae deleniti nobis. Perspiciatis vel possimus ipsum natus veniam sunt? Id a cumque consequuntur aperiam nam eligendi non voluptatibus atque cupiditate nemo deserunt, cum distinctio ipsam. Veritatis.</section> -->


    <!-- // importar el footer.php -->
    <?php include_once(__DIR__ . "/../../components/footer.php"); ?>


    <script src="https://kit.fontawesome.com/760e3cbc52.js" crossorigin="anonymous"></script>
    <script src="<?php echo constant("HOST") ?>/assets/js/header.js"></script>
    <script src="<?php echo constant('HOST') ?>/assets/js/vendors/mixitup.min.js"></script>
    <script src="<?php echo constant('HOST') ?>/assets/js/vendors/swiper-bundle.min.js"></script>
    <script src="<?php echo constant("HOST") ?>/assets/js/vendors/sweetalert2.min.js"></script>
    <script src="<?php echo constant("HOST") ?>/assets/js/components.js"></script>

</body>

</html>