"use strict";

var gulp = require("gulp"),
    newer = require("gulp-newer"),
    imagemin = require("gulp-imagemin"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    lodash = require("lodash"),
    browsersync = require("browser-sync"),
    fileinclude = require('gulp-file-include');

var folder = {
    src: "src/", // source files
    dist: "dist/", // build files
    dist_assets: "dist/assets/" //build assets files
};

/*
Copy assets/vendors from their node_module package to scss & js folder
*/

function copyAssets (done) {
    var assets = {
        js: [
            "./node_modules/jquery/dist/jquery.js",
            "./node_modules/bootstrap/dist/js/bootstrap.bundle.js",
            "./node_modules/moment/moment.js",
            "./node_modules/metismenu/dist/metisMenu.js",
            "./node_modules/jquery-slimscroll/jquery.slimscroll.js",
            "./node_modules/daterangepicker/daterangepicker.js",
            "./node_modules/jquery-toast-plugin/dist/jquery.toast.min.js",
            "./node_modules/select2/dist/js/select2.min.js",
            "./node_modules/jquery-mask-plugin/dist/jquery.mask.min.js",
            "./node_modules/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js",
            "./node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js",
            "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js",
            "./node_modules/bootstrap-maxlength/bootstrap-maxlength.min.js",
            "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"
        ],
        scss: [
            "./node_modules/daterangepicker/daterangepicker.css",
            "./node_modules/jquery-toast-plugin/dist/jquery.toast.min.css",
            "./node_modules/select2/dist/css/select2.min.css",
            "./node_modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css",
            "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css",
            "./node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
        ],
    };

    var third_party_assets = {
        js: [
            "./node_modules/chart.js/dist/Chart.bundle.min.js",
            "./node_modules/d3/dist/d3.min.js",
            "./node_modules/britecharts/dist/bundled/britecharts.min.js",
            "./node_modules/datatables.net/js/jquery.dataTables.min.js",
            "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js",
            "./node_modules/datatables.net-responsive/js/dataTables.responsive.min.js",
            "./node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js",
            "./node_modules/datatables.net-buttons/js/dataTables.buttons.min.js",
            "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js",
            "./node_modules/datatables.net-buttons/js/buttons.html5.min.js",
            "./node_modules/datatables.net-buttons/js/buttons.flash.min.js",
            "./node_modules/datatables.net-buttons/js/buttons.print.min.js",
            "./node_modules/datatables.net-keytable/js/dataTables.keyTable.min.js",
            "./node_modules/datatables.net-select/js/dataTables.select.min.js",
            "./node_modules/jquery-datatables-checkboxes/js/dataTables.checkboxes.min.js",
            "./node_modules/jquery-ui/jquery-ui.min.js",
            "./node_modules/fullcalendar/dist/fullcalendar.min.js",
            "./node_modules/gmaps/gmaps.min.js",
            "./node_modules/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-us-merc-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-au-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-us-il-chicago-mill-en.js",
            "./node_modules/admin-resources/jquery.vectormap/maps/jquery-jvectormap-in-mill-en.js",
            "./node_modules/dragula/dist/dragula.min.js",
            "./node_modules/dropzone/dist/min/dropzone.min.js",
            "./node_modules/apexcharts/dist/apexcharts.min.js",
            "./node_modules/summernote/dist/summernote-bs4.min.js",
            "./node_modules/simplemde/dist/simplemde.min.js",
            "./node_modules/typeahead.js/dist/typeahead.bundle.min.js",
            "./node_modules/handlebars/dist/handlebars.min.js",
            "./node_modules/jquery-sparkline/jquery.sparkline.min.js"
        ],
        css: [
            "./node_modules/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css",
            "./node_modules/britecharts/dist/css/britecharts.min.css",
            "./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css",
            "./node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css",
            "./node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.css",
            "./node_modules/datatables.net-select-bs4/css/select.bootstrap4.css",
            "./node_modules/fullcalendar/dist/fullcalendar.min.css",
            "./node_modules/@mdi/font/css/materialdesignicons.min.css",
            "./node_modules/summernote/dist/summernote-bs4.css",
            "./node_modules/simplemde/dist/simplemde.min.css"
        ],
        font: [
            "./node_modules/@mdi/font/css/materialdesignicons.min.css"
        ]
    };

    //copying third party assets
    lodash(third_party_assets).forEach(function (assets, type) {
        if (type == "css") {
            // gulp.src(assets).pipe(gulp.dest(folder.src + "css/vendor"));
            gulp.src(assets).pipe(gulp.dest(folder.dist_assets + "css/vendor"));
        }
        else {
            // gulp.src(assets).pipe(gulp.dest(folder.src + "js/vendor"));
            gulp.src(assets).pipe(gulp.dest(folder.dist_assets + "js/vendor"));
        }
    });

    //copying required assets
    lodash(assets).forEach(function (assets, type) {
        if (type == "scss") {
            gulp
                .src(assets)
                .pipe(
                    rename({
                        // rename aaa.css to _aaa.scss
                        prefix: "_",
                        extname: ".scss"
                    })
                )
                .pipe(gulp.dest(folder.src + "scss/vendor"));
        } else {
            gulp.src(assets).pipe(gulp.dest(folder.src + "js/vendor"));
        }
    });

    done();
}

// image processing
function imageMin() {
    var out = folder.dist_assets + "images";
    return gulp
        .src(folder.src + "images/**/*")
        .pipe(newer(out))
        .pipe(imagemin())
        .pipe(gulp.dest(out));
}


// copy fonts from src folder to dist folder
function fonts() {
    var out = folder.dist_assets + "fonts/";
    return gulp.src([folder.src + "fonts/**/*"]).pipe(gulp.dest(out));
}

// copy html files from src folder to dist folder, also copy favicons
function html() {
    var out = folder.dist;

    // copy partials
    gulp.src([folder.src + '/html/partials/**/*']).pipe(gulp.dest(folder.dist + "/partials/"));

    return gulp
        .src([
            folder.src + "html/*.html",
            folder.src + "html/*.ico", // favicons
            folder.src + "html/*.png"
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest(out));
}

// compile & minify sass
function css() {
    gulp
        .src([folder.src + "/scss/icons.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass()) // scss to css
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest(folder.dist_assets + "css/"))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to icons.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps for icons.min.css
        .pipe(gulp.dest(folder.dist_assets + "css/"));

    gulp
        .src([folder.src + "/scss/app.scss",folder.src + "/scss/app-dark.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass()) // scss to css
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest(folder.dist_assets + "css/"))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps for app-dark.min.css
        .pipe(gulp.dest(folder.dist_assets + "css/"));

    return gulp
        .src([folder.src + "/scss/app.scss",folder.src + "/scss/app-green.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass()) // scss to css
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest(folder.dist_assets + "css/"))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps for app-green.min.css
        .pipe(gulp.dest(folder.dist_assets + "css/"));
}

// js
function javascript() {
    var out = folder.dist_assets + "js/";


    // It's important to keep files at this order
    // so that `app.min.js` can be executed properly
    return gulp
        .src([
            folder.src + "js/vendor/jquery.js",
            folder.src + "js/vendor/bootstrap.bundle.js",
            folder.src + "js/vendor/moment.js",
            folder.src + "js/vendor/jquery.slimscroll.js",
            folder.src + "js/vendor/daterangepicker.js",
            folder.src + "js/vendor/metisMenu.js",
            folder.src + "js/vendor/jquery.toast.min.js",
            folder.src + "js/vendor/select2.min.js",
            folder.src + "js/vendor/jquery.mask.min.js",
            folder.src + "js/vendor/jquery.bootstrap.wizard.min.js",
            folder.src + "js/vendor/bootstrap-timepicker.min.js",
            folder.src + "js/vendor/jquery.bootstrap-touchspin.min.js",
            folder.src + "js/vendor/bootstrap-maxlength.min.js",
            folder.src + "js/vendor/bootstrap-datepicker.min.js",
            folder.src + "js/formatting.js"
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(gulp.dest(out))
        .pipe(
            rename({
                // rename app.js to app.min.js
                suffix: ".min"
            })
        )
        .pipe(uglify())
        .on("error", function (err) {
            console.log(err.toString());
        })
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(out));
}

// live browser loading
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: folder.dist,
            middleware: [
                function (req, res, next) {
                    req.method = 'GET';
                    next();
                }
            ]
        }
    });
    done();
}

function reloadBrowserSync(done) {
    browsersync.reload();
    done();
}

function watchFiles() {
    gulp.watch(folder.src + "html/**", gulp.series(html, reloadBrowserSync));
    gulp.watch(folder.src + "assets/images/**/*", gulp.series(imageMin, reloadBrowserSync));
    gulp.watch(folder.src + "assets/fonts/**/*", gulp.series(fonts, reloadBrowserSync));
    gulp.watch(folder.src + "scss/**/*", gulp.series(css, reloadBrowserSync));
    gulp.watch(folder.src + "js/**/*", gulp.series(javascript, reloadBrowserSync));
}

// watch all changes
gulp.task("watch", gulp.parallel(watchFiles, browserSync));

// default task
gulp.task(
    "default",
    gulp.series(
        copyAssets,
        html,
        imageMin,
        fonts,
        css,
        javascript,
        'watch'
    ),
    function(done) {done();}
);

// build
gulp.task(
    "build",
    gulp.series(copyAssets,
        html,
        imageMin,
        fonts,
        css,
        javascript)
);

// doc
gulp.task("docs", function () {
    browsersync.init({
        server: {
            baseDir: "docs"
        }
    });
});
