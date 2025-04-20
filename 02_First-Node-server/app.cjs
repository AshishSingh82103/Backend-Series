const http = require("http");
const fs = require("fs");

// function requestListner(req, res) {
//   console.log(req);
// }
// http.createServer(requestListner);

// http.createServer(function (req, res) {
//   console.log(req);
// });

const userRequestHnadeler = ((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>'
    );
    res.write('<lable for="male">Male</lable>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<lable for="female">Female</lable>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, value] of params.entries()) {
      //   bodyObject[key] = value;
      // }
      // console.log(bodyObject);
      // other way(shortcut)

      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      

      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / share/ subscribe</h1></body>");
  res.write("</html>");
  res.end();
});

// server.listen(3000)

module.exports = userRequestHnadeler;
