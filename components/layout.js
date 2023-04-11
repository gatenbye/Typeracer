import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Broadband for women'
export const siteTitle = 'Broadband for women'
const str = `<link rel="alternate" href="https://www.bredbandskollen.se/" hreflang="sv" />
<link rel="alternate" href="https://www.bredbandskollen.se/en/" hreflang="en" />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel='stylesheet' id='wp-block-library-css'  href='https://www.bredbandskollen.se/wp/wp-includes/css/dist/block-library/style.min.css' type='text/css' media='all' />
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>
<link rel='stylesheet' id='iis-footer-css'  href='https://www.bredbandskollen.se/app/plugins/iis-footer-legacy/public/css/iis-footer-public.css?ver=1.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='google_fonts-css'  href='//fonts.googleapis.com/css?family=Open+Sans:300,400,700,700italic,400italic&#038;subset=latin,latin-ext' type='text/css' media='all' />
<link rel='stylesheet' id='bbk-styles-css'  href='https://www.bredbandskollen.se/app/themes/bredbandskollen/assets/css/app.css?id=328ca2b027a6460b33c1&#038;' type='text/css' media='all' />
<link rel="https://api.w.org/" href="https://www.bredbandskollen.se/wp-json/" /><link rel="alternate" type="application/json" href="https://www.bredbandskollen.se/wp-json/wp/v2/pages/19" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.bredbandskollen.se/wp/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.bredbandskollen.se/wp/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 6.0.2" />
<link rel="canonical" href="https://www.bredbandskollen.se/" />
<link rel='shortlink' href='https://www.bredbandskollen.se/' />
<link rel="alternate" type="application/json+oembed" href="https://www.bredbandskollen.se/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.bredbandskollen.se%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.bredbandskollen.se/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.bredbandskollen.se%2F&#038;format=xml" />
<header class="title-bar">
      <div class="grid-container">
        <div class="grid-x align-middle">
          <div class="cell shrink">
            <div class="site-title-wrapper">
              <a href="https://www.bredbandskollen.se/">
                <h1 class="site-title">
                  <span class="title-bar-logo">Bredbandskollen</span>
                </h1>
              </a>
            </div>
          </div>

          <div class="cell auto">
            <input type="checkbox" id="mobileMenuToggle" class="mobile-menu-toggler-input">
            <div class="text-right mobile-menu-toggler">
              <label for="mobileMenuToggle" class="hamburger hamburger--squeeze" aria-label="Menu" aria-controls="navigation" aria-expanded="true/false">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </label>
            </div>

            <nav class="main-menu-wrapper grid-x align-right align-middle">
              <ul id="menu-huvudmeny" class="menu vertical medium-horizontal"><li id="menu-item-21" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-19 current_page_item menu-item-slug-hem menu-item-21"><a href="https://www.bredbandskollen.se/" aria-current="page">Hem</a></li>
<li id="menu-item-1126" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-slug-hjalp menu-item-1126"><a href="https://www.bredbandskollen.se/hjalp/">Hjälp</a></li>
<li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-slug-surfkarta menu-item-22"><a href="https://www.bredbandskollen.se/karta/">Surfkarta</a></li>
<li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-slug-om menu-item-23"><a href="https://www.bredbandskollen.se/om/">Om</a></li>
</ul>           </nav>

          </div>
        </div>

      </div>
    </header>

    <div class="site-container">
              <div class="bbk-choose-language">
          <div class="grid-container">
            <div class="relative-wrapper">
              <div class="bbk-language-dropdown">
                <label for="chooseLanguageToggle"><i class="bbk-icon-nav-globe"></i> Svenska</label>
                <input id="chooseLanguageToggle" type="checkbox">

                <div class="bbk-languages">
                                    <a href="https://www.bredbandskollen.se/en/">English</a>
                                  </div>
              </div>
            </div>
          </div>
        </div>
      
<div class="hero" id="frontHero" data-bbk-element="clockWrapper">
  <div class="hero-content">

    <div class="hero-content-text">
      <strong>Bredbandskollen</strong> är ett enkelt sätt för dig att mäta din internethastighet och få hjälp att förbättra den.    </div>
    <div class="bbk-clock" data-bbk-element="clock">
      <svg fill="#ff4069 " height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 289.939 289.939" xml:space="preserve" stroke="#ff4069 "><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path id="circle8953" d="M144.969,20.485c-37.119,0-74.239,14.145-102.531,42.438c-56.584,56.584-56.584,148.478,0,205.063 c1.951,1.955,5.118,1.957,7.072,0.006s1.957-5.118,0.006-7.072c-0.002-0.002-0.004-0.004-0.006-0.006 c-52.763-52.763-52.763-138.155,0-190.918c52.763-52.763,138.155-52.763,190.918,0c52.763,52.763,52.763,138.155,0,190.918 c-1.955,1.951-1.959,5.117-0.008,7.072s5.117,1.959,7.072,0.008c0.003-0.003,0.005-0.005,0.008-0.008 c56.584-56.584,56.584-148.478,0-205.063C219.209,34.63,182.089,20.485,144.969,20.485z M144.969,35.798 c-32.626,0-65.271,12.458-90.156,37.344c-49.771,49.771-49.771,130.541,0,180.312c0.956,0.996,2.539,1.028,3.535,0.072 c0.996-0.956,1.028-2.539,0.072-3.535c-0.023-0.024-0.047-0.048-0.072-0.072c-47.86-47.861-47.86-125.38,0-173.24 c23.93-23.93,55.267-35.881,86.621-35.881c1.381,0.02,2.516-1.084,2.535-2.465s-1.084-2.516-2.465-2.535 C145.017,35.797,144.993,35.797,144.969,35.798z M224.872,80.405c-1.299,0.039-2.532,0.582-3.438,1.514l-62.701,62.701 c-3.955-2.627-8.687-4.166-13.764-4.166c-13.748,0-25,11.252-25,25s11.252,25,25,25s25-11.252,25-25 c0-5.076-1.539-9.809-4.166-13.764l62.701-62.701C231.775,85.81,229.431,80.271,224.872,80.405z M144.969,150.454 c8.343,0,15,6.657,15,15s-6.657,15-15,15s-15-6.657-15-15S136.626,150.454,144.969,150.454z M144.969,152.954 c-6.874,0-12.5,5.626-12.5,12.5c-0.02,1.381,1.084,2.516,2.465,2.535c1.381,0.02,2.516-1.084,2.535-2.465c0-0.024,0-0.047,0-0.071 c0-4.172,3.328-7.5,7.5-7.5c1.381,0.02,2.516-1.084,2.535-2.465c0.02-1.381-1.084-2.516-2.465-2.535 C145.017,152.953,144.993,152.953,144.969,152.954z"></path> </g> </g></svg>
    </div>
  </div>
</div>
<div class="measure-actions">
  <button data-bbk-element="startTest" data-bbk-info="normal" id="mainStartTest" class="button large start-test">Starta mätningen!</button>
  <p class="measure-actions-terms">
    <span class="measure-actions-terms-wrapper">
      Genom att starta mätningen godkänner du <a href="/om/avtalsvillkor/" target="_blank">avtalsvillkoren</a> och att du har tagit del av <a href="/om/om-cookies-och-datalagring/" target="_blank">integritetspolicyn</a>.    </span>
  </p>
</div>

<div class="grid-container">
  <div class="y-margin">
    <div class="y-margin-item" data-bbk-element="progressBarWrapper" style="display: none">
      <div class="bbk-test-progress" data-bbk-element="progressBar" id="mainProgressBar"></div>
    </div>
    <div class="y-margin-item" data-bbk-element="testResult" style="display: none">
      <div class="grid-x grid-margin-x grid-margin-y">
  <div class="cell large-4">
    <div class="card no-margin">
      <div class="card-section">
        <div class="bbk-test-box download" data-bbk-element="downloadSpeedBox">
          <div class="grid-x grid-margin-x align-bottom">
            <div class="cell medium-shrink">
              <div class="bbk-test-box-icon">
                <i class="iis-icons-read-more"></i>
              </div>
            </div>
            <div class="cell medium-auto">
              <label class="bbk-test-box-label">Nedladdning</label>
              <span class="bbk-test-box-result"><span data-bbk-element="downloadSpeedInt">00</span><span>,</span><span data-bbk-element="downloadSpeedDec">00</span> <small>Mbit/s</small></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cell medium-6 large-4">
    <div class="card no-margin">
      <div class="card-section">
        <div class="bbk-test-box upload" data-bbk-element="uploadSpeedBox">
          <div class="grid-x grid-margin-x align-bottom">
            <div class="cell medium-shrink">
              <div class="bbk-test-box-icon">
                <i class="iis-icons-read-more"></i>
              </div>
            </div>
            <div class="cell medium-auto">
              <label class="bbk-test-box-label">Uppladdning</label>
              <span class="bbk-test-box-result"><span data-bbk-element="uploadSpeedInt">00</span><span>,</span><span data-bbk-element="uploadSpeedDec">00</span> <small>Mbit/s</small></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cell medium-6 large-4">
    <div class="card no-margin">
      <div class="card-section">
        <div class="bbk-test-box latency" data-bbk-element="latencySpeedBox">
          <div class="grid-x grid-margin-x align-bottom">
            <div class="cell medium-shrink">
              <div class="bbk-test-box-icon">
                <i class="iis-icons-clock"></i>
              </div>
            </div>
            <div class="cell medium-auto">
              <label class="bbk-test-box-label">Svarstid</label>
              <span class="bbk-test-box-result"><span data-bbk-element="latencySpeedInt">00</span> <small>ms</small></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <noscript>
      <div class="y-margin-item">
        <div class="alert card">
          <div class="card-section">
            För att använda Bredbandskollen behöver du javascript aktiverat. Vet du inte hur du gör? Följ guiden <a href="http://activatejavascript.org/">här</a>.          </div>
        </div>
      </div>
    </noscript>
    <div class="y-margin-item" data-bbk-element="measureWarning" style="display: none">
      <div class="warning card">
  <div class="card-section">
    <div data-bbk-element="measureWarningText"></div>
  </div>
</div>
    </div>
    <div class="y-margin-item" data-bbk-element="measureError" style="display: none">
      <div class="alert card">
  <div class="card-section">
    <div data-bbk-element="measureErrorText"></div>
  </div>
</div>
    </div>
    <div class="y-margin-item" data-bbk-element="operatorBadMsg" style="display: none">
      <div class="alert card">
  <div class="card-section">
    <div><strong>Meddelande från din operatör:</strong><br> <span data-bbk-element="operatorBadMsgText"></span></div>
  </div>
</div>
    </div>
    <div class="y-margin-item" data-bbk-element="operatorInfoMsg" style="display: none">
      <div class="info card">
  <div class="card-section">
    <div><strong>Meddelande från din operatör:</strong><br> <span data-bbk-element="operatorInfoMsgText"></span></div>
  </div>
</div>
    </div>
    <div class="y-margin-item" data-bbk-element="measureResultLoading" style="display: none">
      <div class="bbk-block-spinner"></div>
    </div>
    <div class="y-margin-item hide-for-large" data-bbk-element="measureResultSummaryWrapper" style="display: none">
      <div class="card no-margin">
  <div class="card-section">
    <div class="bbk-test-info">
      <div>
        <div>
          <label class="bbk-test-info-label">Uppkopplingstyp</label>
          <span class="bbk-test-info-value" data-bbk-element="resultSummaryConnection"></span>
        </div>
        <div>
          <label class="bbk-test-info-label">Leverantör</label>
          <span class="bbk-test-info-value" data-bbk-element="resultSummaryOperator"></span>
        </div>
        <div>
          <label class="bbk-test-info-label">Mätserver</label>
          <span class="bbk-test-info-value" data-bbk-element="resultSummaryServer"></span>
        </div>
        <div>
          <label class="bbk-test-info-label">Mätningen utfördes</label>
          <span class="bbk-test-info-value" data-bbk-element="resultSummaryDate"></span>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="y-margin-item">
      <div class="grid-x grid-margin-x">
        <div class="cell medium-12 large-8">
          <div class="y-margin">
            <div class="y-margin-item" data-bbk-element="measureResult" style="display: none">
              <div data-bbk-element="measureResultContent" style="display: none">
  <div data-bbk-element="measureResultView" style="display: none">
    <div class="card no-margin">
      <div class="card-section">
        <div class="y-margin">
          <aside class="y-margin-item">
            <div class="bbk-measure-grade measure-grade-wait" data-bbk-element="gradeGraphic"><span data-bbk-element="gradeGraphicPointer"></span></div>
          </aside>
          <div class="y-margin-item">
            <div class="measure-result-description">
                            <h1 class="h2"><span>Ditt mätresultat är <span data-bbk-element="evaluationResultString" data-bbk-decorator="evaluationResultClass">bra</span></span></h1>

                            <p class="preamble"><small>Jämfört med din utlovade hastighet är ditt mätresultat <span data-bbk-element="evaluationResultString"></span>.</small></p>

              <ol class="numbered-list">
                <li>Läs vår <a href="/hjalp">Hjälp-sida</a> för tips om vad som kan påverka hastigheten.</li>
                <li>Kontakta din bredbandsleverantör om du fortfarande är missnöjd</li>
                <li>Vänd dig till <a href="http://www.telekomradgivarna.se" target="_blank">Telekområdgivarna</a> om du inte får rätt mot din leverantör</li>
                <li>Undersök dina alternativ på <a href="https://www.bredbandsval.se/" target="_blank">Bredbandsval</a> eller <a href="https://www.bredband.se/" target="_blank">Bredband.se</a></li>
                <li>Har du frågor om Bredbandskollen så kan du kontakta vår <a data-open="supportForm">support</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div data-bbk-element="changeConnectionWrapper">
        <div class="card-section">
          <p class="text-center"><button type="button" class="button" data-bbk-element="changeConnection">Ändra uppkopplingstyp</button></p>
        </div>
      </div>
    </div>
  </div>
  <div data-bbk-element="chooseConnectionTypeView" style="display: none">
    <div class="card no-margin">
      <div class="card-section">
        <div class="measure-result-description">
          <h1 class="h2"><span>Är ditt mätresultat bra eller dåligt?</span></h1>

          <p class="preamble"><small>Genom att ange typ av uppkoppling och vilken hastighet du betalar för, kan du få en utvärdering på om ditt mätresultat är bra eller dåligt.</small></p>
          <p class="preamble"><small>Om du har problem med att använda Bredbandskollen, eller misstänker något fel i mätningen kan du <a data-open="supportForm">kontakta vår support</a>.</small></p>
          <p class="preamble"><small>Om du misstänker att du inte får rätt hastighet från din internetleverantör ska du kontakta deras support.</small></p>
        </div>
      </div>

      <div class="card-section">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-3">
            <select class="select" data-bbk-element="providerSelect" name="provider">
            </select>
          </div>
          <div class="cell medium-3">
            <select class="select" data-bbk-element="speedSelect" name="speed" disabled>
            </select>
          </div>
          <div class="cell medium-auto">
            <button type="button" class="button" data-bbk-element="evaluate" disabled>Utvärdera</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
                        <div class="y-margin-item">
                            <article class="card">
                <div class="card-section">
                  <div class="grid-x grid-margin-x">

                                          <div class="cell shrink">
                        <img width="50" height="12" src="https://www.bredbandskollen.se/app/uploads/2022/09/tank-sakert-logotype-50x12.png" class="attachment-card size-card wp-post-image" alt="Tänk säkert logotype" loading="lazy" srcset="https://www.bredbandskollen.se/app/uploads/2022/09/tank-sakert-logotype-50x12.png 50w, https://www.bredbandskollen.se/app/uploads/2022/09/tank-sakert-logotype-300x74.png 300w, https://www.bredbandskollen.se/app/uploads/2022/09/tank-sakert-logotype.png 460w" sizes="(max-width: 50px) 100vw, 50px" />                      </div>
                    
                    <div class="cell auto">
                      <h1 class="h3"><strong><a href="https://www.bredbandskollen.se/blog/2022/09/26/tank-sakert/">Tänk säkert</a></strong></h1>
                      <p>Bli en säkrare internetanvändare redan idag! Kampanjen Tänk säkert är ett samarbete mellan MSB, Polisen och Internetstiftelsen och syftar till att stärka den digitala kompetensen hos medborgarna. Du kan läsa mer om detta på Internetstiftelsens webbplats.</p>
                    </div>
                  </div>
                </div>
              </article>
                            <article class="card">
                <div class="card-section">
                  <div class="grid-x grid-margin-x">

                                          <div class="cell shrink">
                        <img width="50" height="50" src="https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1-50x50.png" class="attachment-card size-card wp-post-image" alt="" loading="lazy" srcset="https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1-50x50.png 50w, https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1-150x150.png 150w, https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1-300x300.png 300w, https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1.png 400w" sizes="(max-width: 50px) 100vw, 50px" />                     </div>
                    
                    <div class="cell auto">
                      <h1 class="h3"><strong><a href="https://www.bredbandskollen.se/blog/2022/04/12/om-du-kor-betaversioner-av-operativsystem-och-eller-tjanster/">Om du kör betaversioner av operativsystem och/eller tjänster</a></strong></h1>
                      <p>Apple håller på att lansera en ny anonymiseringstjänst, iCloud Private Relay. Den är än så länge inte officiellt supportad från Apples sida men den som vill kan aktivera den i sin Mac eller iOS-enhet. För de flesta går det bra att köra Bredbandskolls-appen samtidigt som de har iCloud Private Relay aktiverat. Men några användare har fått upp felkod C01 när de försöker mäta.</p>
<p>OM du får felkod C01 i appen och kör iCloud Private Relay så hjälper det oftast med att stänga av iCloud Private Relay.</p>
<p>Vi har också fått fram felkod C01 när vi kör iCloud Private Relay OCH F-Secure Freedome VPN samtidigt. Felsökning pågår för att hitta orsaken.<br />
Om du testar nya funktioner som inte är släppta publikt och upptäcker att Bredbandskollen inte fungerar ihop med dessa så är du välkommen att höra av dig till oss.</p>
                    </div>
                  </div>
                </div>
              </article>
                            <article class="card">
                <div class="card-section">
                  <div class="grid-x grid-margin-x">

                                          <div class="cell shrink">
                        <img width="50" height="50" src="https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1-50x50.png" class="attachment-card size-card wp-post-image" alt="" loading="lazy" srcset="https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1-50x50.png 50w, https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1-150x150.png 150w, https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1-300x300.png 300w, https://www.bredbandskollen.se/app/uploads/2019/05/stiftelsen-1.png 400w" sizes="(max-width: 50px) 100vw, 50px" />                     </div>
                    
                    <div class="cell auto">
                      <h1 class="h3"><strong><a href="https://www.bredbandskollen.se/blog/2019/09/13/webblasartillagg-kan-orsaka-problem-med-bredbandskollen/">Webbläsartillägg kan orsaka problem med Bredbandskollen</a></strong></h1>
                      <p>Vissa webbläsartillägg, plug-ins, kan orsaka felaktigt låga mätresultat vid mätning på Bredbandskollens webbsida. </p>
                    </div>
                  </div>
                </div>
              </article>
                          </div>
                      </div>
        </div>
        <div class="cell medium-12 large-4">
          <div class="y-margin">
            <div class="y-margin-item show-for-large" data-bbk-element="measureResultSummaryWrapper" style="display: none">
              <div class="card no-margin">
  <div class="card-section">
    <div class="bbk-test-info">
      <div>
        <div>
          <label class="bbk-test-info-label">Uppkopplingstyp</label>
          <span class="bbk-test-info-value" data-bbk-element="resultSummaryConnection"></span>
        </div>
        <div>
          <label class="bbk-test-info-label">Leverantör</label>
          <span class="bbk-test-info-value" data-bbk-element="resultSummaryOperator"></span>
        </div>
        <div>
          <label class="bbk-test-info-label">Mätserver</label>
          <span class="bbk-test-info-value" data-bbk-element="resultSummaryServer"></span>
        </div>
        <div>
          <label class="bbk-test-info-label">Mätningen utfördes</label>
          <span class="bbk-test-info-value" data-bbk-element="resultSummaryDate"></span>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
            <div class="y-margin-item">
              <div class="callout" id="previousMeasures" data-type="summary">
  <h2 class="h3">Tidigare mätningar</h2>
  <div class="alert card" data-element="error" style="display: none">
    <div class="card-section" data-element="errorText"></div>
  </div>
  <div id="previousMeasuresContent"><article class="card measure-card">
        <div class="card-section">
          
      <h1 class="h3">11 april 2023, 11:27</h1>
      <span><i class="iis-icons-read-more down"></i> 118.866247 Mbit/s</span>
      <span><i class="iis-icons-read-more up"></i> 52.452841 Mbit/s</span>
    
        </div>
      </article><article class="card measure-card">
        <div class="card-section">
          
      <h1 class="h3">11 april 2023, 11:27</h1>
      <span><i class="iis-icons-read-more down"></i> 121.250837 Mbit/s</span>
      <span><i class="iis-icons-read-more up"></i> 52.356593 Mbit/s</span>
    
        </div>
      </article></div>
</div>
              <p class="text-center">
                <a data-open="advancedSettings">Avancerad mätning</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

          <div class="y-margin-item puffs">
        <div class="grid-x grid-margin-x grid-margin-y align-center">
          <div class="cell medium-4"><article class="puff"><a class="puff-link" href="http://www.bredbandskollen.se/om/" target="_blank"><div class="puff-icon"><figure class="puff-icon-picture-frame"><img src="https://www.bredbandskollen.se/app/uploads/2018/02/iis-icons-mobile.png" alt=""></figure></div><div class="puff-section"><h1>Bredbandskollen i mobilen</h1>Snabbt internet i din telefon? Hämta vår app för iOS, Android eller Huawei.</div></a></article></div><div class="cell medium-4"><article class="puff"><a class="puff-link" href="http://www.bredbandskollen.se/hjalp/" target="_blank"><div class="puff-icon"><figure class="puff-icon-picture-frame"><img src="https://www.bredbandskollen.se/app/uploads/2020/01/icon-question.png" alt=""></figure></div><div class="puff-section"><h1>Hjälp</h1>Har du några frågor? Sök efter svaret på våra hjälpsidor.</div></a></article></div><div class="cell medium-4"><article class="puff"><a class="puff-link" href="https://www.iis.se/fakta/mobil-surfhastighet-2017/" target="_blank"><div class="puff-icon"><figure class="puff-icon-picture-frame"><img src="https://www.bredbandskollen.se/app/uploads/2018/02/blixt-bbk.png" alt=""></figure></div><div class="puff-section"><h1>Så snabbt surfar vi i Sverige</h1>Vi har sammanställt hastighetsutvecklingen för mobilt bredband.</div></a></article></div>        </div>
      </div>
      </div>
</div>

<article class="small reveal" id="advancedSettings" data-reveal>
  <h1 class="text-center">Avancerade inställningar</h1>

  <p>
    Här kan du bestämma vilken mätserver och mätmetod du vill använda. Vill du veta mer om hur mätningen går till, <a href="/om/mer-om-bbk/">klicka här</a>.  </p>

      <p><a href="http://www.bredbandskollen.se">Mät över HTTP</a></p>
  
  <div>
    <div><label>IP Typ:</label></div>
    <input type="radio" checked name="ip" value="ipv4" data-bbk-element="measureSettingsIpType">
    <label>ipv4</label>
    <input type="radio" name="ip" value="ipv6" data-bbk-element="measureSettingsIpType">
    <label>ipv6</label>
  </div>

  <label>
    Server:   <select name="server" data-bbk-element="measureServers" disabled></select>
  </label>

  <label>
    Mätteknik:    <select name="algorithm" data-bbk-element="measureAlgorithmOptions" class="no-margin">
      <option value="mixed">Websockets+HTTP</option>
      <option value="preferWebsockets">Websockets (prioriterat)</option>
      <option value="preferHttp">HTTP (prioriterat)</option>
      <option value="onlyWebsockets">Websockets (endast)</option>
      <option value="onlyHttp">HTTP (endast)</option>
    </select>
  </label>

  <div class="margin-top-1">
    <p>
      <label>Får vi fråga din operatör vilken abonnemangstyp du har och vilken hastighet som operatören utlovar? Detta behövs för att Bredbandskollen skall kunna avgöra om hastigheten du får är bra eller dålig.</label>
      <input id="settingsQ1Y" type="radio" name="consent_q1" value="y" data-bbk-element="measureConsent">
      <label for="settingsQ1Y">Ja</label>
      <input id="settingsQ1N" type="radio" name="consent_q1" value="n" data-bbk-element="measureConsent">
      <label for="settingsQ1N">Nej</label>
    </p>
    <p>
      <label>Får vi dela med oss av ditt mätresultat med din operatör? Anledningen till detta är att operatörerna är angelägna om att förbättra sina tjänster. Det ger din operatör möjlighet att upptäcka eventuella problem med din uppkoppling.</label>
      <input id="settingsQ2Y" type="radio" name="consent_q2" value="y" data-bbk-element="measureConsent">
      <label for="settingsQ2Y">Ja</label>
      <input id="settingsQ2N" type="radio" name="consent_q2" value="n" data-bbk-element="measureConsent">
      <label for="settingsQ2N">Nej</label>
    </p>
  </div>

  <p class="top-margin text-center">
    <button data-bbk-element="startTest" data-bbk-info="advanced" class="button no-wrap">Starta mätningen!</button>
  </p>
  <p class="text-center text-subtle">Genom att starta mätningen godkänner du <a href="/om/avtalsvillkor/" target="_blank">avtalsvillkoren</a> och att du har tagit del av <a href="/om/om-cookies-och-datalagring/" target="_blank">integritetspolicyn</a>.</p>

  <button class="close-button" data-close aria-label="Stäng" type="button">
    <i class="iis-icons-open-menu"></i>
  </button>
</article>

<article class="small reveal" id="consentForm" data-reveal>
  <div class="bbk-block-spinner" data-element="consentFormLoading" style="display: none"></div>

  <div data-element="consentFormSuccess" style="display: none">
    <h1 class="text-center">Tack!</h1>
    <p class="preamble text-center">Du kan ändra dina svar under "Avancerad mätning".</p>
  </div>

  <div data-element="consentFormSend">
    <h1 class="text-center">Samtycke</h1>

    <p>Bredbandskollen är ett oberoende och kostnadsfritt verktyg från Internetstiftelsen.</p>
    <p>Med Bredbandskollen kan du få hjälp att kontrollera att du får den hastighet du betalar för eller förstå om det är något fel på din tekniska utrustning.</p>
    <p>Genom att tillåta att resultatet från mätningen delas med din internetoperatör så bidrar du till Bredbandskollens fortsatta utveckling som oberoende konsumentverktyg.</p>

    <div class="alert card" data-element="consentFormError" style="display: none;">
      <div class="card-section" data-element="consentFormErrorMsg"></div>
    </div>

    <form data-element="consentForm" method="post" action="">
      <div>
        <p>
          <label>Får vi fråga din operatör vilken abonnemangstyp du har och vilken hastighet som operatören utlovar? Detta behövs för att Bredbandskollen skall kunna avgöra om hastigheten du får är bra eller dålig.</label>
          <input data-bbk-element="measureConsent" id="consentQ1Y" type="radio" name="consent_q1" value="y">
          <label for="consentQ1Y">Ja</label>
          <input data-bbk-element="measureConsent" id="consentQ1N" type="radio" name="consent_q1" value="n">
          <label for="consentQ1N">Nej</label>
        </p>
        <p>
          <label>Får vi dela med oss av ditt mätresultat med din operatör? Anledningen till detta är att operatörerna är angelägna om att förbättra sina tjänster. Det ger din operatör möjlighet att upptäcka eventuella problem med din uppkoppling.</label>
          <input data-bbk-element="measureConsent" id="consentQ2Y" type="radio" name="consent_q2" value="y">
          <label for="consentQ2Y">Ja</label>
          <input data-bbk-element="measureConsent" id="consentQ2N" type="radio" name="consent_q2" value="n">
          <label for="consentQ2N">Nej</label>
        </p>

        <div>
          <button type="submit" class="button">Skicka</button>
        </div>
      </div>
    </form>
  </div>

  <button class="close-button" data-close aria-label="Stäng" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
</article>

<article class="small reveal" id="supportForm" data-reveal>
  <div class="bbk-block-spinner" data-element="supportFormLoading" style="display: none"></div>

  <div data-element="supportFormSuccess" style="display: none">
    <h1 class="text-center">Tack!</h1>
    <p class="preamble text-center">Vi återkommer så fort vi kan.</p>
  </div>

  <div data-element="supportFormSend">
    <h1 class="text-center">Kontakta bredbandskollen</h1>

    <p>Har du några funderingar angående ditt mätresultat, hur Bredbandskollen fungerar eller vill ha hjälp med felsökning av din uppkoppling kan du kontakta oss via formuläret nedan. Tänk på att Bredbandskollen inte är en del av din bredbandsleverantör och därmed inte kan felsöka eller lösa problem på avancerad nivå och att vi bara kan förse dig med grundläggande vägledning och tips.</p>

    <div class="alert card" data-element="supportFormError" style="display: none">
      <div class="card-section" data-element="supportFormErrorMsg"></div>
    </div>

    <form data-element="supportForm" method="post" action="">
      <input type="hidden" name="ticket" data-bbk-element="ticketInput">
      <input type="hidden" name="fakemail" value="">
      <input type="hidden" name="log" data-bbk-element="logInput">

      <div>
        <div>
          <label>
            Ditt namn           <input type="text" name="name">
          </label>
        </div>

        <div>
          <label>
            Mailadress            <input type="email" name="from">
          </label>
        </div>

        <div>
          <label>
            Identifikationskod            <input type="text" readonly name="key" data-bbk-element="keyInput" class="margin-bottom-0">
          </label>
          <div class="margin-bottom-1"><em>Denna kod identifierar bara mätningen och enheten som utförde den och inte dig som privatperson.</em></div>
        </div>

        <div>
          <label>
            Meddelande            <textarea name="message" rows="10" data-bbk-element="supportFormMessage"></textarea>
          </label>
        </div>

        <div>
          <button type="submit" class="button">Skicka</button>
        </div>
      </div>
    </form>
  </div>

  <button class="close-button" data-close aria-label="Stäng" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
</article>
    </div>

          <div class="u-m-t-2">
         <div class="iis-global-footer"> <div class="wrapper-fluid"> <div class="o-footer--row o-footer" id="siteFooter"> <div class="grid-xl-6 grid-lg-8 grid-18 o-footer__info"> <div class="o-footer__info__inner"> <p class="o-footer__paragraph">Bredbandskollen är ett oberoende konsumentverktyg som drivs av <a class="o-footer__link" href="https://internetstiftelsen.se">Internetstiftelsen</a>. Internetstiftelsen är en oberoende, affärsdriven och allmännyttig organisation. Vi verkar för ett internet som bidrar positivt till människan och samhället. Vi ansvarar för internets svenska toppdomän .se och sköter drift och administration av toppdomänen .nu. Intäkterna från affärsverksamheten finansierar en rad satsningar i syfte att möjliggöra att människor kan nyttja internet på bästa sätt, och stimulera kunskapsdelning och innovation med inriktning på internet.</p> <div class="o-footer--row"> <div class="grid-xxl-9 grid-18 o-footer__contact"> <ul class="u-list-clean o-footer__contact__address"> <li class="o-footer__contact__address__li">Internetstiftelsen</li> <li class="o-footer__contact__address__li">Hammarby Kaj 10D</li> <li class="o-footer__contact__address__li">Box 92073</li> <li class="o-footer__contact__address__li">120 07 Stockholm</li> </ul> </div> <div class="grid-xxl-9 grid-18 o-footer__contact"> <ul class="u-list-clean o-footer__contact__address"> <li class="o-footer__contact__address__li">E-post: <a class="o-footer__link" href="mailto:info@internetstiftelsen.se">info@internetstiftelsen.se</a></li> <li class="o-footer__contact__address__li">Telefon: <a class="o-footer__link" href="tel:084523500">08-452 35 00</a></li> <li class="o-footer__contact__address__li">Organisationsnummer: 802405-0190</li> </ul> </div> </div> <div class="o-footer--row u-m-t-2"> <div class="o-footer-grid"> <a href="https://internetstiftelsen.se/docs/Certifikat_27001_UKAS_sv.pdf" class="o-footer__link o-footer__ISO-link"> <img src="https://internetstiftelsen.se/app/themes/internetstiftelsen/images/ISO_27001_2013_black_TM.svg" class="o-footer__ISO-logo" alt="Certifierade enligt ISO/IEC 27001:2013"> <span>Certifierade enligt ISO/IEC<br>27001:2013</span> </a> </div> </div> </div> </div> <div class="grid-xl-12 grid-lg-10 grid-18 o-footer__logotypes"> <div class="o-footer--row o-footer__grid-row u-m-r-0"> <div class="o-footer__grid-row__item">
          <a href="https://svenskarnaochinternet.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Svenskarna och internet" src="https://static.internetstiftelsen.se/images/logotypes/svenskarna-och-internet.svg"></a>
        </div><div class="o-footer__grid-row__item">
          <a href="https://internetdagarna.se/" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Internetdagarna" src="https://static.internetstiftelsen.se/images/logotypes/internetdagarna.svg"></a>
        </div><div class="o-footer__grid-row__item">
          <a href="https://www.goto10.se/" class="o-footer__logo-link"><img class="o-footer__logotype"  alt="Goto10" src="https://static.internetstiftelsen.se/images/logotypes/goto-10.svg"></a>
        </div><div class="o-footer__grid-row__item">
          <a href="https://internetstiftelsen.se/" class="o-footer__logo-link"><img class="o-footer__logotype"  alt="Internetstiftelsen" src="https://static.internetstiftelsen.se/images/logotypes/internetstiftelsen.svg"></a>
        </div><div class="o-footer__grid-row__item">
          <a href="https://www.internetmuseum.se/" class="o-footer__logo-link"><img class="o-footer__logotype"  alt="Internetmuseum" src="https://static.internetstiftelsen.se/images/logotypes/internetmuseum.svg"></a>
        </div><div class="o-footer__grid-row__item">
          <a href="https://digitalalektioner.se/" class="o-footer__logo-link"><img class="o-footer__logotype"  alt="Digitala lektioner" src="https://static.internetstiftelsen.se/images/logotypes/digitala-lektioner.svg"></a>
        </div> </div> </div> <div class="u-p-y-1 o-footer__bottom-links"> <nav> <ul class="u-list-clean display-flex"> <li class="u-p-x-1"><a href="http://bredbandskollen.se/om/" class="o-footer__link o-footer__about-link">Om webbplatsen</a></li> <li class="u-p-x-1"><a href="http://bredbandskollen.se/om-kakor/" class="o-footer__link o-footer__about-link">Om kakor</a></li> </ul> </nav> </div> </div> </div> </div>       </div>
    

    <div class="reveal no-padding" id="youtubeModal" data-reveal>
      <iframe width="1000" height="563" src="" frameborder="0" allowfullscreen></iframe>
      <button class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <style> .main-menu-wrapper .menu .menu-item a {
              color: #191919 !important;
            }
            .main-menu-wrapper .menu .current-menu-item a {
              color: #ff4069 !important;
            }
            .main-menu-wrapper .menu .current-menu-item a:after {
              background: #ff4069 !important;
            }
            .main-menu-wrapper .menu a:hover {
              color: #ff4069 !important;
            }
            .bbk-choose-language .bbk-language-dropdown label {
              color: #ff4069 !important; 
            }
            .bbk-choose-language .bbk-language-dropdown:hover label {
              color: #191919 !important;
            }
            .hero {
              background: inherit;
            }
            .hero-content-text {
              color: inherit !important;
            }
            .button.start-test:not(.alert) {
              background: #ff4069 !important; 
              color: white !important;
            }
            .button.start-test:not(.alert):hover {
              color: rgba(255, 255, 255, 0.75) !important;
            }
            .bbk-icon-nav-globe:before {
                content: "";
            }
            body {
              background: white;
            }
            .puff { 
              padding-top: 60px;
              padding-bottom: 60px;
            }
            .puff .puff-icon-picture-frame {
              width: 6.33rem;
              height: 6.33rem;
            }
            .puff .puff-icon-picture-frame {
              background: #ff4069 !important; 
            }
            .puff .puff-link:hover h1 {
              color: #ff4069 !important;
            }
            .bbk-clock {
              height: 11.5rem;
              width: 11.5rem;
            }
            @media print, screen and (min-width: 64em)
.hero .hero-content-text {
              padding-left: inherit;
            }
    </style>
`;

export default function Layout({ children, home }) {
  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: str }} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to reduce your energy consumption with El Tok"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

    </div>
  )
}