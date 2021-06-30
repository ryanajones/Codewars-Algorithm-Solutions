const queue = (customers, n) => {
  if (customers.length === 0) return 0;
  if (n === 1) return customers.reduce((a, b) => a + b);

  const head = customers.slice(0, n);
  const tail = customers.slice(n);

  const time = tail.reduce((acc, customer) => {
    const minIndex = acc.indexOf(Math.min(...acc));
    acc[minIndex] += customer;
    return acc;
  }, head);
  return Math.max(...time);
};

queue([10, 2, 3, 3, 3, 3], 2);
