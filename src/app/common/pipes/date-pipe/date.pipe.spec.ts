import { DatePipe } from './date.pipe';

describe('MslDatePipe', () => {
    it('create an instance', () => {
        const pipe = new DatePipe();
        expect(pipe).toBeTruthy();
    });
});
