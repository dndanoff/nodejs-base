import { config } from './config.js';

export const greeting = (name) =>
    `Hellow world to ${name}. Config: customMsg=${config.rootPath}, nodeEnv = ${config.nodeEnv}.`;
