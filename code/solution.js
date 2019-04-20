class ConnectionPool {
    constructor(maxPool, tasks) {
        this.maxPool = maxPool;
        this.tasks = tasks;
    }

    execute() {
        const currTasks = this.tasks.splice(0, this.maxPool);
        Promise.all(
            currTasks.map((eachTask, idx) =>
                eachTask(idx).then(() => this._handleNextTask(idx))
            )
        ).then(() => {
            console.log("all done");
        });
    }

    _handleNextTask(idx) {
        if (this.tasks.length === 0) {
            return;
        } else {
            const nextTask = this.tasks.splice(0, 1)[0];
            return nextTask(idx).then(() => this._handleNextTask(idx));
        }
    }
}
