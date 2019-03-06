'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">turismo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4c5f2cbaba33367d2c159e08b0e0514a"' : 'data-target="#xs-components-links-module-AppModule-4c5f2cbaba33367d2c159e08b0e0514a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4c5f2cbaba33367d2c159e08b0e0514a"' :
                                            'id="xs-components-links-module-AppModule-4c5f2cbaba33367d2c159e08b0e0514a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoHotelesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoHotelesPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoVuelosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoVuelosPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResumenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResumenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-4c5f2cbaba33367d2c159e08b0e0514a"' : 'data-target="#xs-injectables-links-module-AppModule-4c5f2cbaba33367d2c159e08b0e0514a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4c5f2cbaba33367d2c159e08b0e0514a"' :
                                        'id="xs-injectables-links-module-AppModule-4c5f2cbaba33367d2c159e08b0e0514a"' }>
                                        <li class="link">
                                            <a href="injectables/NetworkService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NetworkService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactoPageModule.html" data-type="entity-link">ContactoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactoPageModule-0bcf7eb19d13528c7424961ca67b72a6"' : 'data-target="#xs-components-links-module-ContactoPageModule-0bcf7eb19d13528c7424961ca67b72a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactoPageModule-0bcf7eb19d13528c7424961ca67b72a6"' :
                                            'id="xs-components-links-module-ContactoPageModule-0bcf7eb19d13528c7424961ca67b72a6"' }>
                                            <li class="link">
                                                <a href="components/ContactoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomToastModule.html" data-type="entity-link">CustomToastModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-21c3d51510393ddcd7da49002f8983a1"' : 'data-target="#xs-components-links-module-HomePageModule-21c3d51510393ddcd7da49002f8983a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-21c3d51510393ddcd7da49002f8983a1"' :
                                            'id="xs-components-links-module-HomePageModule-21c3d51510393ddcd7da49002f8983a1"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfoHotelesPageModule.html" data-type="entity-link">InfoHotelesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InfoHotelesPageModule-f8f6435d01d3cb4c0439d7b8bdb37359"' : 'data-target="#xs-components-links-module-InfoHotelesPageModule-f8f6435d01d3cb4c0439d7b8bdb37359"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoHotelesPageModule-f8f6435d01d3cb4c0439d7b8bdb37359"' :
                                            'id="xs-components-links-module-InfoHotelesPageModule-f8f6435d01d3cb4c0439d7b8bdb37359"' }>
                                            <li class="link">
                                                <a href="components/InfoHotelesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoHotelesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfoVuelosPageModule.html" data-type="entity-link">InfoVuelosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InfoVuelosPageModule-f585b9465e393ba79c05b1af12ec2338"' : 'data-target="#xs-components-links-module-InfoVuelosPageModule-f585b9465e393ba79c05b1af12ec2338"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoVuelosPageModule-f585b9465e393ba79c05b1af12ec2338"' :
                                            'id="xs-components-links-module-InfoVuelosPageModule-f585b9465e393ba79c05b1af12ec2338"' }>
                                            <li class="link">
                                                <a href="components/InfoVuelosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoVuelosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageModule.html" data-type="entity-link">ListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListPageModule-ff62d8994fb0e685d380766d30698d43"' : 'data-target="#xs-components-links-module-ListPageModule-ff62d8994fb0e685d380766d30698d43"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListPageModule-ff62d8994fb0e685d380766d30698d43"' :
                                            'id="xs-components-links-module-ListPageModule-ff62d8994fb0e685d380766d30698d43"' }>
                                            <li class="link">
                                                <a href="components/ListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumenPageModule.html" data-type="entity-link">ResumenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResumenPageModule-35cdc6507d0b70ceb1c595d94178bf49"' : 'data-target="#xs-components-links-module-ResumenPageModule-35cdc6507d0b70ceb1c595d94178bf49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResumenPageModule-35cdc6507d0b70ceb1c595d94178bf49"' :
                                            'id="xs-components-links-module-ResumenPageModule-35cdc6507d0b70ceb1c595d94178bf49"' }>
                                            <li class="link">
                                                <a href="components/ResumenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResumenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AvionService.html" data-type="entity-link">AvionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HotelService.html" data-type="entity-link">HotelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdiomaService.html" data-type="entity-link">IdiomaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonedaService.html" data-type="entity-link">MonedaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkService.html" data-type="entity-link">NetworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemaService.html" data-type="entity-link">TemaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EstilosTema.html" data-type="entity-link">EstilosTema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tema.html" data-type="entity-link">Tema</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});