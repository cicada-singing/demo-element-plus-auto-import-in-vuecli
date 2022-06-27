const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const Icons = require("unplugin-icons/webpack");
const IconsResolver = require("unplugin-icons/resolver");
const path = require("path");

const cwd = process.cwd();

module.exports = defineConfig({
  configureWebpack: (config) => {
    config.plugins.push(
      ...[
        AutoImport({
          resolvers: [ElementPlusResolver()],
          dts: path.resolve(cwd, "src/auto-imports.d.ts")
        }),
        Components({
          resolvers: [ElementPlusResolver(), IconsResolver()],
          dts: path.resolve(cwd, "src/components.d.ts")
        }),
        Icons({
          autoInstall: true
        })
      ]
    );
  }
});
