var gulp = require('gulp'), /*Inicia chamando o gulp*/
svgSprite = require('gulp-svg-sprite'), /* Depois os pacotes para a task */
rename = require('gulp-rename'),
del = require('del'),
svg2png = require('gulp-svg2png');
/*
Esse codigo serve apenas para configurar
o destino do sprite
*******************
var config = {
	mode: {
		css: {

		}
	}
}
********************
*/
var config = {
	/* Se aparecer detalhes diferentes nos icones, basta adicionar.
	---------------------
	shape: {
		spacing: {
			padding: 1
		}
	},
	---------------------
	*/
	mode: {
		css: {
			/* Configuração para Modernizr - no-svg */
			variables: {
				replaceSvgWithPng: function () {
					return function (sprite, render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			/****************************************/
			sprite: 'sprite.svg',
			render: {
				css: {
					template:'./gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', function () {
	return del(['./app/temp/sprites', './app/assets/images/sprites']);
})

gulp.task ('createSprite',['beginClean'], function () {
	return gulp.src('./app/assets/images/icons/**/*.svg') /*Gulp pega td dentro da icons*/
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprites')); /*E joga o resultado do PIPE aqui*/
});
/* Configurando pack svg2png*/
gulp.task ('createPngCopy', ['createSprite'], function () {
	return gulp.src('./app/temp/sprites/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./app/temp/sprites/css'));
});

gulp.task ('copySpriteGraphic', ['createPngCopy'], function () {
	return gulp.src('./app/temp/sprites/css/**/*.{svg,png}')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task ('copySpriteCSS', ['createSprite'], function () {
	return gulp.src('./app/temp/sprites/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function () {
	return del('./app/temp/sprites');
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy','copySpriteGraphic','copySpriteCSS', 'endClean']);
