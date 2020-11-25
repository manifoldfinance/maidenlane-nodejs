const ManifoldX = require("../lib/manifoldx");
const keys = require("./keys");

const manifoldx = new ManifoldX(keys);

// manifoldx.on('report', report => {
//   if (report.header.type_id === 4) {
//     return;
//   }
//   console.log(JSON.stringify(report, null, 2));
// });

manifoldx
  .connect()
  .then(() => {
    return manifoldx.newOrder({
      market: "ETH-DAI",
      is_buy: false,
      price: "300",
      quantity: "0.1",
    }).result;
  })
  .then((order) => {
    return order.cancel();
  })
  .then(() => {
    console.log("balances", manifoldx.getBalances());
  });
