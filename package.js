Package.describe({
  name: 'barbatus:typescript',
  version: '0.2.0-beta.14',
  summary: 'TypeScript for Meteor',
  git: 'https://github.com/barbatus/typescript',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'typescript',
  use: ['barbatus:typescript-compiler'],
  sources: ['plugin.js']
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('barbatus:typescript-compiler@0.5.0-beta.14');

  api.imply('barbatus:typescript-runtime@0.1.0-beta.1');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('barbatus:typescript');

  api.addFiles('tests/runtime-tests.ts', 'client');
  api.addFiles('tests/runtime-react-tests.tsx', 'client');
});