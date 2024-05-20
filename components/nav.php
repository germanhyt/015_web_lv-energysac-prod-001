<?php $activePage = basename($_SERVER['PHP_SELF'], ".php"); ?>

<header class="header">
    <div class="header__inner">
        <a href="<?php echo constant('HOST') ?>/" class="header__logo">
            <img src="<?php echo constant('HOST') . '/public/img/logo.svg'; ?>" alt="Logo">
        </a>
        <div class="header__icon">
            <i class="fa-solid fa-bars" id="burger"></i>
        </div>

        <nav class="nav-mobile" id="menu">
            <ul class="header__list">
                <li class="header__item ">
                    <a id="itemActive" class="header__link" <?php $activePage === "/#about-us" ? "active" : "" ?>">
                        Nosotros
                    </a>
                </li>
                <li class="header__item">
                    <a id="itemActive" class="header__link <?php $activePage === "/#benefits" ? "active" : "" ?>" href="#benefits">
                        Beneficios
                    </a>
                </li>
                <li class="header__item">
                    <a id="itemActive" class="header__link <?php $activePage === "/#courses" ? "active" : "" ?>" href="#courses">
                        Cursos
                    </a>
                </li>
                <li class="header__item">
                    <a id="itemActive" class="header__link <?php $activePage === "/#customers" ? "active" : "" ?>" href="#customers">
                        Clientes
                    </a>
                </li>
            </ul>
        </nav>

        <nav class="nav-desktop">
            <ul class="header__list">
                <li class="header__item ">
                    <a id="itemActive" class="header__link <?php $activePage === "#about-us" ? "active" : "" ?>" href="#about-us">
                        Nosotros
                    </a>
                </li>
                <li class="header__item">
                    <a id="itemActive" class="header__link <?php $activePage === "/#benefits" ? "active" : "" ?>" href="#benefits">
                        Beneficios
                    </a>
                </li>
                <li class="header__item">
                    <a id="itemActive" class="header__link <?php $activePage === "/#courses" ? "active" : "" ?>" href="#courses">
                        Cursos
                    </a>
                </li>
                <li class="header__item">
                    <a id="itemActive" class="header__link <?php $activePage === "/#customers" ? "active" : "" ?>" href="#customers">
                        Clientes
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>