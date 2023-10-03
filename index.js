// modyfikacje plików

const fs = require("fs");

// ścieżki do plików
const path = require("path");

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
            console.log(JSON.parse(data));
          }

          fs.writeFile(
            path.join(
              __dirname,
              "users",
              index + 1 + "-imie-nazwisko" + ".txt"
            ),
            "name surname street zip code city phone",
            function (err) {
              if (err) {
                console.log(err);
              } else {
                console.log("Stworzono plik");
              }
            }
          );
        }
      );
    });
  }
});
