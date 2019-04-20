const delay = (t, name) => (poolId = 0) =>
    new Promise(resolve => {
        console.log(`[pool-${poolId}][t-${name}]: started`);
        setTimeout(() => {
            console.log(`[pool-${poolId}][t-${name}]: done`);
            resolve();
        }, t);
    });

const task1 = delay(1000, "one");
const task2 = delay(500, "two");
const task3 = delay(600, "three");
