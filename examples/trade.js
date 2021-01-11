const ManifoldX = require("../lib/maidenlane");
const keys = require("./keys");

const maidenlane = new ManifoldX(keys);

// maidenlane.on('report', report => {
//   if (report.header.type_id === 4) {
//     return;
//   }
//   console.log(JSON.stringify(report, null, 2));
// });

maidenlane
  .connect()
  .then(() => {
    return maidenlane.newOrder({
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
    console.log("balances", maidenlane.getBalances());
  });
