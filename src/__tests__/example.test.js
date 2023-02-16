import { greeting } from '../example.js';

describe('greeting', () => {
    it('should return greeting when successful', () => {
        const greet = greeting();
        expect(greet).not.toBeNull();
    });
});
