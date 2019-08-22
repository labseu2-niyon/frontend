describe('Test to check testing environment is setup correctly', () => {
  it('Runs a test correctly', () => {
    const sum = (a, b) => a + b;
    const result = sum(3, 4);
    expect(result).toBe(7);
  });
});
