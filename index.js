const parser = require('postcss-values-parser');
const util = require('util');
const CSSColors = require('./css-colors');

module.exports = {
	name: 'colorAsVariable',
	nodeTypes: ['decl'],
	message: 'color %s should be defined as a variable.',

	lint: function importantRuleLinter (config, node) {

		const results = [];

		const ast = parser(node.value, {
			loose: true
		}).parse();

		ast.first.walk((child) => {

			if(
				child.isColor || // color as hex value
				CSSColors.hasOwnProperty(child.value) || // color as a word
				child.value === 'rgb' || // color as rgb
				child.value === 'rgba' // color as rgba
			) {
				results.push({
					column: node.source.start.column + node.prop.length + node.raws.between.length + child.source.start.column - 1,
					message: util.format(this.message, node.value)
				});
			}

		});

		return results;
	}
};