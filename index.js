// modyfikacje plików

const fs = require("fs");

// ścieżki do plików
const path = require("path");

// metoda readdir

fs.readdir(path.join(__dirname, "data"), function (err, files) {
    if(err) {
        console.log(err);
    } else {
        console.log(files);
    }
});
