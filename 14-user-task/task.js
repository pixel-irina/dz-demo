class Task {
    constructor(message) {
        this.message = message;
    }

    run() {
        console.log(this.message);
    }
}

export default Task;