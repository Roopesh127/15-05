
  const users = [
    {
      id: 1,
      name: "Aman",
      city: "Pune",
    },
    {
      id: 2,
      name: "Rahul",
      city: "Delhi",
    },
    {
      id: 3,
      name: "Abhinav",
      city: "Dehradun",
    },
  ];

  const orders = [
    {
      orderId: 101,
      userId: 1,
      productName: "iPhone 12 Pro",
    },
    {
      orderId: 102,
      userId: 1,
      productName: "iPhone 13 Pro",
    },
    {
      orderId: 103,
      userId: 1,
      productName: "iPhone 14 Pro",
    },
    {
      orderId: 104,
      userId: 2,
      productName: "Samsung S23",
    },
  ];

  const result = users.map((user) => {
    const userOrders = orders.filter((order) => order.userId === user.id);
    return {
      userId: user.id,
      name: user.name,
      orders: userOrders.map(({ orderId, productName }) => ({
        orderId,
        productName,
      })),
    };
  });

  console.log(result);

