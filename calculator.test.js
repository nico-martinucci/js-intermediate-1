it('should calculate monthly rate', function () {
  expect(calcMonthlyPayment(10000, 10, 4.5)).toEqual(103.63840875701705);
});

it("should handle terribly high interest rates", function () {
  expect(calcMonthlyPayment(1000, 40, 99)).toEqual(82.5);
});