const request = require("request");
const fileSystem = require("fs");

fileSystem.mkdir("./result", { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
});

request(
    {
        url: "http://jsonplaceholder.typicode.com/posts",
        json: true,
    },
    (err, response, body) => {
        if (err) {
            console.log("There was an error fetching the data");
            console.log(err);
        }
        const data = JSON.stringify(body, null, 2);

        fileSystem.writeFile("./result/post.json", data, (err) => {
            if (err) throw err;
            console.log("File Created!");
        });
    }
);
