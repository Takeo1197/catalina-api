const axios = require("axios");
exports.findAll = (req, res) => {
  axios
    .get(
      "https://services.odata.org/V2/northwind/northwind.svc/Employees?$format=json"
    )
    .then(({ data }) => {
      let employees = [];
      let dataSet = data.d.results;

      dataSet.forEach(employee => {
        delete employee["Orders"];
        delete employee["Employee1"];
        delete employee["Employees1"];
        delete employee["__metadata"];
        delete employee["Territories"];

        employees.push(employee);
      });
      console.log(employees);
      return res.status(200).json({ status: "success", data: employees });
    })
    .catch(error => res.status(500).json({ status: "error", message: error }));
};
