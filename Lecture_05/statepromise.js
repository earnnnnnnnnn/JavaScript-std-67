const promise = new Promise ((resolve, reject) => {
    const res = false;
    // An asynchronous operation.
    if (res) {
        resolve("Resolved!");
    } else {
        resolve(Error("Fatal Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err),
);