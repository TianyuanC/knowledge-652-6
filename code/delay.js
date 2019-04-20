const delay = (t, name) => () =>
    new Promise(resolve => {
        setTimeout(() => {
            console.log(`done: task ${name}`);
            resolve();
        }, t);
    });

const task1 = delay(1000, "one");
const task2 = delay(500, "two");
const task3 = delay(600, "three");
