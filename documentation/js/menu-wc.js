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
                    <a href="index.html" data-type="index-link">Base</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/section-a.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-0189f3fe221ea7157a87eaea3cd24432"' : 'data-target="#xs-additional-page-0189f3fe221ea7157a87eaea3cd24432"' }>
                                                <span class="link-name">Section A</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-0189f3fe221ea7157a87eaea3cd24432"' : 'id="xs-additional-page-0189f3fe221ea7157a87eaea3cd24432"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/section-a/a---1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A - 1</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/section-a/a---1/a---1.1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A - 1.1</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/section-a/a---1/a-1.2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A 1.2</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/section-a/a---2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A - 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/section-b.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-41dfac06374326c327273a0d0663d5bd"' : 'data-target="#xs-additional-page-41dfac06374326c327273a0d0663d5bd"' }>
                                                <span class="link-name">Section B</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-41dfac06374326c327273a0d0663d5bd"' : 'id="xs-additional-page-41dfac06374326c327273a0d0663d5bd"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/section-b/b---1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B - 1</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/section-b/b---2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B - 2</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/section-b/b---3.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B - 3</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/section-b/b---4.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B - 4</a>
                                            </li>
                                        </ul>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ec23618e88295047c29529742c3d4272"' : 'data-target="#xs-components-links-module-AppModule-ec23618e88295047c29529742c3d4272"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ec23618e88295047c29529742c3d4272"' :
                                            'id="xs-components-links-module-AppModule-ec23618e88295047c29529742c3d4272"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForkjoinComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForkjoinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IncrementadorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IncrementadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntervalTimerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntervalTimerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservableNextErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservableNextErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewNgrxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewNgrxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HijoComponent.html" data-type="entity-link">HijoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NietoComponent.html" data-type="entity-link">NietoComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/DecrementarAction.html" data-type="entity-link">DecrementarAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/DividirAction.html" data-type="entity-link">DividirAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncrementarAction.html" data-type="entity-link">IncrementarAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/MultiplicarAction.html" data-type="entity-link">MultiplicarAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetAction.html" data-type="entity-link">ResetAction</a>
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
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TiposService.html" data-type="entity-link">TiposService</a>
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
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});