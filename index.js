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

    // fs.readFile(
    //   "./data/2-read-write-users.json",
    //   "utf-8",
    //   (err, jsonString) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       const data = JSON.parse(jsonString);
    //       console.log(data);
    //     }
    //   }
    // );

    files.forEach(function (file, index) {
      fs.readFile(
        path.join(__dirname, "data", file),
        "utf-8",
        function (err, data) {
          if (err) {
            console.log(err);
          } else {
            // console.log(JSON.parse(data)[0].name);
            // console.log(JSON.parse(data));

            let parseData = JSON.parse(data);
            // petla?
            for (let i = 0; i < parseData.length; i++) {
              let username = data[i].name;
              // username.split() oddzielic -
              console.log(username);
              let content = `Name: ${username}\n Surname: ${data[i].username}`;
              // console.log(content);
              fs.writeFile(
                path.join(
                  __dirname,
                  "users",
                  index + 1 + username + "-nazwisko" + ".txt"
                ),
                content,
                // "name surname street zip code city phone"
                function (err) {
                  if (err) {
                    console.log(err);
                  } else {
                    // console.log("Stworzono plik");
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
