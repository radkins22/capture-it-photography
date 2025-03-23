const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 8080;
// const helmet = require("helmet");
const Appointment = require("./Schema/Appointment");
const CCInfo = require("./Schema/CCInfo");
const Subscribe = require("./Schema/Subscribe");
const Cart = require("./Schema/Cart");
const { log } = require("console");

require("./config/mongo.config");
// console.log("Connected to MongoDB");

// app.use(helmet());
// app.use(helmet.frameguard({
//     action: deny,
// }));
// app.use(helmet.hidePoweredBy({ setTo: "PHP 4.2.0"}));

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());

// logger function
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

// appoinment page
app.post("/appt", (req, res) => {
  const newAppointment = new Appointment({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    eventType: req.body.eventType,
    location: req.body.location,
    date: req.body.date,
  });
  newAppointment
    .save()
    .then((data) => {
      console.log("Appointment saved: " + data);
    })
    .catch((error) => {
      console.log("Error saving appointment: " + error);
      res.status(500).send("Error saving appointment");
    });
  res.send("Appointment added");
});

app.get("/appt", (req, res) => {
  Appointment.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error getting appointment: " + error);
      res.status(500).send("Error getting appointment");
    });
});

app.put("/appt/:id", (req, res) => {
  Appointment.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      eventType: req.body.eventType,
      location: req.body.location,
      date: req.body.date,
    },
    { new: true }
  )
    .then((data) => {
      console.log("Appointment update: " + data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error updating appointments: " + error);
      res.status(500).send("Error updating appointments");
    });
});

app.delete("/appt/:id", (req, res) => {
  Appointment.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("Appointment deleted: " + data);
      res.send("Data deleted");
    })
    .catch((error) => {
      console.log("Error deleting appointment: " + error);
      res.status(500).send("Error deleting appointment");
    });
});

// Checkout page
app.post("/checkout", (req, res) => {
  const newCCInfo = new CCInfo({
    fullName: req.body.fullName,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    isChecked: req.body.isChecked,

    fullName2: req.body.fullName2,
    email2: req.body.email2,
    address2: req.body.address2,
    city2: req.body.city2,
    state2: req.body.state2,
    zipcode2: req.body.zipcode2,

    cardName: req.body.cardName,
    cardNumber: req.body.cardNumber,
    expMonth: req.body.expMonth,
    expYear: req.body.expYear,
    cardCVV: req.body.cardCVV,
    storeTotal: req.body.storeTotal,
  });
  newCCInfo
    .save()
    .then((data) => {
      console.log("Credit Card Info saved: " + data);
    })
    .catch((error) => {
      console.log("Error saving Credit Card Info: " + error);
      res.status(500).send("Error saving Credit Card Info");
    });
  res.send("Credit Card Info added");
});

app.get("/checkout", (req, res) => {
  CCInfo.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error getting credit card info: " + error);
      res.status(500).send("Error getting credit card info");
    });
});

app.put("/checkout/:id", (req, res) => {
  CCInfo.findByIdAndUpdate(
    req.params.id,
    {
      fullName: req.body.fullName,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      isChecked: req.body.isChecked,

      fullName2: req.body.fullName2,
      email2: req.body.email2,
      address2: req.body.address2,
      city2: req.body.city2,
      state2: req.body.state2,
      zipcode2: req.body.zipcode2,

      cardName: req.body.cardName,
      cardNumber: req.body.cardNumber,
      expMonth: req.body.expMonth,
      expYear: req.body.expYear,
      cardCVV: req.body.cardCVV,
      storeTotal: req.body.storeTotal,
    },
    { new: true }
  )
    .then((data) => {
      console.log("Credit card info update: " + data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error updating credit card info: " + error);
      res.status(500).send("Error updating credit card info");
    });
});

app.delete("/checkout/:id", (req, res) => {
  CCInfo.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("Credit card info deleted: " + data);
      res.send("Data deleted");
    })
    .catch((error) => {
      console.log("Error deleting credit card info: " + error);
      res.status(500).send("Error deleting credit card info");
    });
});

// subscriber page
app.post("/subscribe", (req, res) => {
  const newSubscribe = new Subscribe({
    subscriberEmail: req.body.subscriberEmail,
    password: req.body.password,
    repeatPassword: req.body.repeatPassword,
    rememberMe: req.body.rememberMe,
  });
  newSubscribe
    .save()
    .then((data) => {
      console.log("Subscriber saved: " + data);
    })
    .catch((error) => {
      console.log("Error saving subscriber: " + error);
      res.status(500).send("Error saving subscriber");
    });
  res.send("Subscriber added");
});

app.get("/subscribe", (req, res) => {
  Subscribe.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error getting credit card info: " + error);
      res.status(500).send("Error getting credit card info");
    });
});

app.put("/subscribe/:id", (req, res) => {
  Subscribe.findByIdAndUpdate(
    req.params.id,
    {
      subscriberEmail: req.body.subscriberEmail,
      password: req.body.password,
      repeatPassword: req.body.repeatPassword,
      rememberMe: req.body.rememberMe,
    },
    { new: true }
  )
    .then((data) => {
      console.log("Subscriber update: " + data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error updating subscriber: " + error);
      res.status(500).send("Error updating subscriber");
    });
});

app.delete("/subscribe/:id", (req, res) => {
  Subscribe.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("Subscriber deleted: " + data);
      res.send("Data deleted");
    })
    .catch((error) => {
      console.log("Error deleting subscriber: " + error);
      res.status(500).send("Error deleting subscriber");
    });
});

// cart
app.post("/cart", (req, res) => {
  const newCart = new Cart({
    itemId: req.body.itemId,
  });
  newCart
    .save()
    .then((data) => {
      console.log("Cart saved: " + data);
    })
    .catch((error) => {
      console.log("Error saving Cart: " + error);
      res.status(500).send("Error saving Cart");
    });
  res.send("Cart added");
});

app.get("/cart", (req, res) => {
  Cart.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error getting cart info: " + error);
      res.status(500).send("Error getting cart info");
    });
});

app.put("/cart/:id", (req, res) => {
  Cart.findByIdAndUpdate(
    req.params.id,
    {
      CartrEmail: req.body.CartrEmail,
      password: req.body.password,
      repeatPassword: req.body.repeatPassword,
      rememberMe: req.body.rememberMe,
    },
    { new: true }
  )
    .then((data) => {
      console.log("Cart update: " + data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error updating cart: " + error);
      res.status(500).send("Error updating cart");
    });
});

app.delete("/cart/:id", (req, res) => {
  Cart.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("Cart deleted: " + data);
      res.send("Data deleted");
    })
    .catch((error) => {
      console.log("Error deleting cart: " + error);
      res.status(500).send("Error deleting cart");
    });
});

app.listen(port, () => {
  console.log(`I'm watching you 👀 on port ${port}!`);
});
