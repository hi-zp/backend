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
                    <a href="index.html" data-type="index-link">backend documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d7ede66c83189ea82bf4601717afe42d72a2f3a1a2a883b38302c248cbaea6ea7f79df78b8d0875762d1c0a0a30ffe45b202328761aeadcf657fb8eb0fdfa55c"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d7ede66c83189ea82bf4601717afe42d72a2f3a1a2a883b38302c248cbaea6ea7f79df78b8d0875762d1c0a0a30ffe45b202328761aeadcf657fb8eb0fdfa55c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d7ede66c83189ea82bf4601717afe42d72a2f3a1a2a883b38302c248cbaea6ea7f79df78b8d0875762d1c0a0a30ffe45b202328761aeadcf657fb8eb0fdfa55c"' :
                                            'id="xs-controllers-links-module-AppModule-d7ede66c83189ea82bf4601717afe42d72a2f3a1a2a883b38302c248cbaea6ea7f79df78b8d0875762d1c0a0a30ffe45b202328761aeadcf657fb8eb0fdfa55c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d7ede66c83189ea82bf4601717afe42d72a2f3a1a2a883b38302c248cbaea6ea7f79df78b8d0875762d1c0a0a30ffe45b202328761aeadcf657fb8eb0fdfa55c"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d7ede66c83189ea82bf4601717afe42d72a2f3a1a2a883b38302c248cbaea6ea7f79df78b8d0875762d1c0a0a30ffe45b202328761aeadcf657fb8eb0fdfa55c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d7ede66c83189ea82bf4601717afe42d72a2f3a1a2a883b38302c248cbaea6ea7f79df78b8d0875762d1c0a0a30ffe45b202328761aeadcf657fb8eb0fdfa55c"' :
                                        'id="xs-injectables-links-module-AppModule-d7ede66c83189ea82bf4601717afe42d72a2f3a1a2a883b38302c248cbaea6ea7f79df78b8d0875762d1c0a0a30ffe45b202328761aeadcf657fb8eb0fdfa55c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link" >CatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CatsModule-a77cced4ba569fc26650c73df567a35767ef1c25039e4b1bde76397ddaca06c37389cc96c5cb8b59133947e6405f2e82c030e3146ccce9f5e2c3659ca47350ef"' : 'data-bs-target="#xs-controllers-links-module-CatsModule-a77cced4ba569fc26650c73df567a35767ef1c25039e4b1bde76397ddaca06c37389cc96c5cb8b59133947e6405f2e82c030e3146ccce9f5e2c3659ca47350ef"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatsModule-a77cced4ba569fc26650c73df567a35767ef1c25039e4b1bde76397ddaca06c37389cc96c5cb8b59133947e6405f2e82c030e3146ccce9f5e2c3659ca47350ef"' :
                                            'id="xs-controllers-links-module-CatsModule-a77cced4ba569fc26650c73df567a35767ef1c25039e4b1bde76397ddaca06c37389cc96c5cb8b59133947e6405f2e82c030e3146ccce9f5e2c3659ca47350ef"' }>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CatsModule-a77cced4ba569fc26650c73df567a35767ef1c25039e4b1bde76397ddaca06c37389cc96c5cb8b59133947e6405f2e82c030e3146ccce9f5e2c3659ca47350ef"' : 'data-bs-target="#xs-injectables-links-module-CatsModule-a77cced4ba569fc26650c73df567a35767ef1c25039e4b1bde76397ddaca06c37389cc96c5cb8b59133947e6405f2e82c030e3146ccce9f5e2c3659ca47350ef"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatsModule-a77cced4ba569fc26650c73df567a35767ef1c25039e4b1bde76397ddaca06c37389cc96c5cb8b59133947e6405f2e82c030e3146ccce9f5e2c3659ca47350ef"' :
                                        'id="xs-injectables-links-module-CatsModule-a77cced4ba569fc26650c73df567a35767ef1c25039e4b1bde76397ddaca06c37389cc96c5cb8b59133947e6405f2e82c030e3146ccce9f5e2c3659ca47350ef"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-847f96448ad8957406a7048e540f26403c00e3101ac6becb24f51ecfe4a6049697b1cd105be71c7bb2f3094a81c8b83146426d846d3211b0a6996ed80b615a7a"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-847f96448ad8957406a7048e540f26403c00e3101ac6becb24f51ecfe4a6049697b1cd105be71c7bb2f3094a81c8b83146426d846d3211b0a6996ed80b615a7a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-847f96448ad8957406a7048e540f26403c00e3101ac6becb24f51ecfe4a6049697b1cd105be71c7bb2f3094a81c8b83146426d846d3211b0a6996ed80b615a7a"' :
                                            'id="xs-controllers-links-module-HealthModule-847f96448ad8957406a7048e540f26403c00e3101ac6becb24f51ecfe4a6049697b1cd105be71c7bb2f3094a81c8b83146426d846d3211b0a6996ed80b615a7a"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NestConfigModule.html" data-type="entity-link" >NestConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NestPinoModule.html" data-type="entity-link" >NestPinoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-d1717c8d770f8c601984ab0b148c18a07367eaab2cf18c7d76a7d4bd174e5b489bcddf6eab5bc22457e6d0d2dc15d4b46e1525791f2c31644b69128f475bf849"' : 'data-bs-target="#xs-injectables-links-module-PostModule-d1717c8d770f8c601984ab0b148c18a07367eaab2cf18c7d76a7d4bd174e5b489bcddf6eab5bc22457e6d0d2dc15d4b46e1525791f2c31644b69128f475bf849"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-d1717c8d770f8c601984ab0b148c18a07367eaab2cf18c7d76a7d4bd174e5b489bcddf6eab5bc22457e6d0d2dc15d4b46e1525791f2c31644b69128f475bf849"' :
                                        'id="xs-injectables-links-module-PostModule-d1717c8d770f8c601984ab0b148c18a07367eaab2cf18c7d76a7d4bd174e5b489bcddf6eab5bc22457e6d0d2dc15d4b46e1525791f2c31644b69128f475bf849"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0dc7e5b149cf8b5a5488c79ac1b02d002864cbb810eb1d75c047211818a2c80512b0c902dfee2f10eaaf4a3b5c9f2aa4f4edbf46dbeb9378752bed005623036c"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0dc7e5b149cf8b5a5488c79ac1b02d002864cbb810eb1d75c047211818a2c80512b0c902dfee2f10eaaf4a3b5c9f2aa4f4edbf46dbeb9378752bed005623036c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0dc7e5b149cf8b5a5488c79ac1b02d002864cbb810eb1d75c047211818a2c80512b0c902dfee2f10eaaf4a3b5c9f2aa4f4edbf46dbeb9378752bed005623036c"' :
                                        'id="xs-injectables-links-module-PrismaModule-0dc7e5b149cf8b5a5488c79ac1b02d002864cbb810eb1d75c047211818a2c80512b0c902dfee2f10eaaf4a3b5c9f2aa4f4edbf46dbeb9378752bed005623036c"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecipesModule.html" data-type="entity-link" >RecipesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RecipesModule-1bc505cd7355162c592246e8d610f83f9399a6479af013b13eb692d8b0a067bfb9ea469245607554321eab3115fb31025d4715e872bf7a47278c4fb6d18666e7"' : 'data-bs-target="#xs-injectables-links-module-RecipesModule-1bc505cd7355162c592246e8d610f83f9399a6479af013b13eb692d8b0a067bfb9ea469245607554321eab3115fb31025d4715e872bf7a47278c4fb6d18666e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RecipesModule-1bc505cd7355162c592246e8d610f83f9399a6479af013b13eb692d8b0a067bfb9ea469245607554321eab3115fb31025d4715e872bf7a47278c4fb6d18666e7"' :
                                        'id="xs-injectables-links-module-RecipesModule-1bc505cd7355162c592246e8d610f83f9399a6479af013b13eb692d8b0a067bfb9ea469245607554321eab3115fb31025d4715e872bf7a47278c4fb6d18666e7"' }>
                                        <li class="link">
                                            <a href="injectables/RecipesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-278128dbeaee137ef31547cd9379ff77db3c5f3a60077e9a705e26fb3a03d860f1f74efe635c690ea7c040522dfb56a8625164e5096386384301a07c9dfaff0d"' : 'data-bs-target="#xs-injectables-links-module-UserModule-278128dbeaee137ef31547cd9379ff77db3c5f3a60077e9a705e26fb3a03d860f1f74efe635c690ea7c040522dfb56a8625164e5096386384301a07c9dfaff0d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-278128dbeaee137ef31547cd9379ff77db3c5f3a60077e9a705e26fb3a03d860f1f74efe635c690ea7c040522dfb56a8625164e5096386384301a07c9dfaff0d"' :
                                        'id="xs-injectables-links-module-UserModule-278128dbeaee137ef31547cd9379ff77db3c5f3a60077e9a705e26fb3a03d860f1f74efe635c690ea7c040522dfb56a8625164e5096386384301a07c9dfaff0d"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCatDto.html" data-type="entity-link" >CreateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomHttpException.html" data-type="entity-link" >CustomHttpException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateScalar.html" data-type="entity-link" >DateScalar</a>
                            </li>
                            <li class="link">
                                <a href="classes/GlobalExceptionFilter.html" data-type="entity-link" >GlobalExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpError.html" data-type="entity-link" >HttpError</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewRecipeInput.html" data-type="entity-link" >NewRecipeInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/Recipe.html" data-type="entity-link" >Recipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipesArgs.html" data-type="entity-link" >RecipesArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipesResolver.html" data-type="entity-link" >RecipesResolver</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ExceptionInterceptor.html" data-type="entity-link" >ExceptionInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParseIntPipe.html" data-type="entity-link" >ParseIntPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TerminusLogger.html" data-type="entity-link" >TerminusLogger</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cat.html" data-type="entity-link" >Cat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link" >Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});