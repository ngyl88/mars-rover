const { isValidOrientation } = require('./orientation');

it('should return true if input is valid', () => {
    expect(isValidOrientation('N')).toBe(true);
    expect(isValidOrientation('S')).toBe(true);
    expect(isValidOrientation('E')).toBe(true);
    expect(isValidOrientation('W')).toBe(true);
});

it('should return false if input is not a single character', () => {
    expect(isValidOrientation('NS')).toBe(false);
    expect(isValidOrientation('E W')).toBe(false);
    expect(isValidOrientation('1')).toBe(false);
});