const path = require('path');

module.exports = function generate(plop) {
  plop.setGenerator('module', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'choose module name in comelCase (e.g. myModule)',
        basepath: '.',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: path.join(__dirname, 'src/modules'),
        base: '.blueprints/module',
        templateFiles: '.blueprints/module/**/**',
      },
    ],
  });
};
