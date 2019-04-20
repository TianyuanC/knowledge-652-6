const pool = new ConnectionPool(2, [task1(), task2(), task3()]);
pool.execute();

//"[pool-0][t-one]: started"
//"[pool-1][t-two]: started"
//"[pool-1][t-two]: done"
//"[pool-1][t-three]: started"
//"[pool-0][t-one]: done"
//"[pool-1][t-three]: done"
