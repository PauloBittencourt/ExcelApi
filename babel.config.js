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
          },
        },
      ],
    ],
    ignore: ["**/*.spec.ts"],
  };
  