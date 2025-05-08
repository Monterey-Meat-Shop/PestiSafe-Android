// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname);

// Allow .cjs files
config.resolver.sourceExts = config.resolver.sourceExts || [];
if (!config.resolver.sourceExts.includes("cjs")) {
  config.resolver.sourceExts.push("cjs");
}

// Work around stricter package.json "exports" behavior in Metro
config.resolver.unstable_enablePackageExports = false;
module.exports = withNativeWind(config, { input: './global.css' })
// module.exports = config;