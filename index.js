import { v4 as uuid } from 'uuid';

import { greeting } from './src/example.js';
import { logger } from './src/logger.js';

process.on('uncaughtException', (err) => {
    logger.error(err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    logger.error(err);
    process.exit(1);
});

const log = logger.child({ uuid: uuid() });
log.info('Calling greeting() from main file');
const greet = greeting('Denis');
log.info(greet);
