import { cleanEnv, str } from 'envalid';

const nodeEnvs = { dev: 'dev', test: 'test', prod: 'prod' };

const devDefault = {
    NODE_ENV: 'dev',
    CUSTOM_MSG: 'DEV custom message',
    LOG_LEVEL: 'debug',
};

const testDefault = {
    NODE_ENV: 'test',
    CUSTOM_MSG: 'TEST custom message',
    LOG_LEVEL: 'debug',
};

const defaults = { dev: devDefault, test: testDefault };

const { NODE_ENV } = process.env;

const env = cleanEnv(
    { ...(defaults[NODE_ENV] ?? defaults.dev), ...process.env },
    {
        NODE_ENV: str({
            desc: 'NODE_ENV is used by various libraries. We use only the standard values.',
        }),
        ROOT_PATH: str({
            desc: 'ROOT_PATH is used to know which is the root path across the app.',
            default: '/app-logs',
        }),
        CUSTOM_MSG: str({
            desc: 'Just a dummy env variable.',
        }),
        LOG_LEVEL: str({
            desc: 'Logger level.',
        }),
    }
);

const config = {
    nodeEnv: env.NODE_ENV,
    rootPath: env.ROOT_PATH,
    customMsg: env.CUSTOM_MSG,
    loggerLevel: env.LOG_LEVEL,
};

export { config, nodeEnvs };
