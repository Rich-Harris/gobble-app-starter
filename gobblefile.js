/*global require, module */
var gobble = require( 'gobble' );

module.exports = gobble([

	// static files
	gobble( 'src/files' ),

	gobble( 'src/styles' )
		// postcss (https://github.com/postcss/postcss) is a framework
		// for using future CSS syntax and other non-standard features.
		// you could also use sass
		.transform( 'postcss', {
			plugins: [
				require( 'postcss-import' ),
				require( 'autoprefixer-core', { browsers: [ 'last 2 versions' ] }),
				require( 'cssnano' )
			],

			src: 'main.css'
		}),

	// javascript
	gobble( 'src/app' )
		// first, we bundle our ES6 modules into a single file
		.transform( 'rollup', {
			entry: 'main.js',
			format: 'cjs', //          <-- so that browserify can deal with it
			external: [ 'moment' ], // <-- otherwise rollup complains about importing from moment
			sourceMap: true
		})

		// then we convert the ES6 stuff (const etc) to ES5
		.transform( 'babel' ) // <-- using config from .babelrc

		// then we include external dependencies from node_modules
		.transform( 'browserify', {
			entries: [ './main' ],
			dest: 'bundle.js',
			debug: true // for sourcemaps
		})

		// if we're building, minify. otherwise whatevs
		.transformIf( gobble.env() === 'production', 'uglifyjs' )

]);
