module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
		"babel-plugin-transform-typescript-metadata",
		["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    [
      "module-resolver",
      {
        alias: {
          "@assets": "./src/assets",
          "@config": "./src/config",
          "@entities": "./src/entities",
          "@middlewares": "./src/middlewares",
          "@repositories": "./src/repositories",
          "@models": "./src/repositories/models",
          "@useCases": "./src/useCases",
          "@utils": "./src/utils",
					"@lib": "./src/lib",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
