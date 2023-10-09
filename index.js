// modyfikacje plików

const fs = require("fs");

// ścieżki do plików
const path = require("path");

// const user = require('./data/2-read-write-users.json')

// console.log(user);

// metoda readdir

fs.readdir(path.join(__dirname, "data"), function (err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log(files);

    fs.mkdir(path.join(__dirname, "users"), function (err) {
      if (err) {
        if (err.code === "EEXIST") {
          console.log("Folder już istnieje");
          return;
        }
        console.log(err);
      } else {
        console.log("Stworzono folder");
      }
    });

    files.forEach(function (file, index) {
      fs.readFile(
        path.join(__dirname, "data", file),
        "utf-8",
        function (err, data) {
          if (err) {
            console.log(err);
          } else {
            let parseData = JSON.parse(data);

            for (let i = 0; i < parseData.length; i++) {
              let fnameAndSurname = parseData[i].name;

              let id = parseData[i].id;
              let address = parseData[i].address.street;
              let zipcode = parseData[i].address.zipcode;
              let city = parseData[i].address.city;
              let phone = parseData[i].phone;

              const myArray = fnameAndSurname.split(" ");
              console.log(myArray);

              let lastname;
              let fname;

              if (myArray[0] === "Mrs." || myArray === "Mr.") {
                lastname = myArray[2];
                fname = myArray[0] + myArray[1];
              } else {
                lastname = myArray[1];
                fname = myArray[0];
              }

              const content = `\n Name: ${fname}\n Surname: ${lastname}\n Address: ${address}\n Zip Code: ${zipcode}\n City: ${city}\n Phone: ${phone}`;

              console.log(content);

              fs.writeFileSync(
                path.join(
                  __dirname,
                  "users",
                  id + "-" + fname + "-" + lastname + ".txt"
                ),
                content,
                function (err) {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("Stworzono plik");
                  }
                }
              );
            }
          }
        }
      );
    });
  }
});
