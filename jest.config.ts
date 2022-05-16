import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
export default config;
