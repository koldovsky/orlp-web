/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': './node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            'angular2-social-login': 'node_modules/angular2-social-login/dist/bundles/angular2-social-login.min.js',
            'angular-star-rating': 'node_modules/angular-star-rating/angular-star-rating.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'text': './plugin-text.js',
            'zone': 'npm:zone.js/dist/zone.js',
            'reflect': 'npm:reflect-metadata/Reflect.js',
            'angular2-cookie': 'npm:angular2-cookie',
            'angular2-recaptcha': 'node_modules/angular2-recaptcha',
            'file-saver': 'npm:file-saver/FileSaver.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'angular2-cookie': {
                main: './core.js',
                defaultExtension: 'js'
            },
            'angular2-recaptcha': {
                defaultExtension: 'js',
                main: 'index'
            }
        }
    });
})(this);
