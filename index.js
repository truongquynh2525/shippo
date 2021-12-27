const express = require("express");
const shippo = require("shippo")('shippo_test_d99a4691fc0d970bba6c45e608ecba75d812fd4a');
//test shippo_test_d99a4691fc0d970bba6c45e608ecba75d812fd4a
//live shippo_live_d247012f5d2342c420937d39ed961c14c0801dba
const app = express();

app.listen(3000, () => { console.log("Server is opening on port 3000") });

app.get("/", async (req, res) => {
  const addressFrom = {
    "name": "Shawn Ippotle",
    "company": "Shippo",
    "street1": "215 Clayton St.",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94117",
    "country": "US",
    "phone": "+1 555 341 9393",
    "email": "shippotle@goshippo.com",
  };

  const addressTo = {
    "name": "Mr Hippo",
    "company": "",
    "street1": "Broadway 1",
    "street2": "",
    "city": "San Francisco",
    "state": "NY",
    "zip": "10007",
    "country": "US",
    "phone": "+1 555 341 9393",
    "email": "mrhippo@goshippo.com",
    "metadata": "Hippos dont lie"
  };

  const parcel = {
    "length": "5",
    "width": "5",
    "height": "5",
    "distance_unit": "in",
    "weight": "2",
    "mass_unit": "lb"
  };

  const shipment = {
    "address_from": addressFrom,
    "address_to": addressTo,
    "parcels": [parcel],
  };

  const data = await shippo.transaction.create({
    "shipment": {
      "address_to": {
        "name": "Mr Hippo",
        "street1": "965 Mission St #572",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94103",
        "country": "US",
        "phone": "4151234567",
        "email": "mrhippo@goshippo.com"
      },
      "address_from": {
        "name": "Mrs Hippo",
        "street1": "1092 Indian Summer Ct",
        "city": "San Jose",
        "state": "CA",
        "zip": "95122",
        "country": "US",
        "phone": "4159876543",
        "email": "mrshippo@goshippo.com"
      },
      "parcels": [{
        "length": "10",
        "width": "15",
        "height": "10",
        "distance_unit": "in",
        "weight": "1",
        "mass_unit": "lb"
      }]
    },
    "carrier_account": "9963eee7ce3b401f8d5f63ee433219ac",
    "servicelevel_token": "fedex_home_delivery",
  });

  return res.send(data)
});