it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 200000,
    years: 15,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('1687.71');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 67837,
    years: 4,
    rate: 4.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('1553.04');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 67837,
    years: 4,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('5723.95');
});

it("should handle terribly low interest rates", function() {
  const values = {
    amount: 67837,
    years: 4,
    rate: 0.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('1439.39');
});
