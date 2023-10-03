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

    fs.mkdir(path.join(__dirname, "user"), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Stworzono folder");
      }
    });

    fs.writeFile(
      path.join(__dirname, "user", "result.txt"),
      "test",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Stworzono plik");
        }
      }
    );

    // files.forEach(function (file) {
    //   fs.readFile(path.join(__dirname, "data", file), 'utf-8', function (err, data) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(JSON.parse(data));
    //     }
    //   });
    // });
  }
});
