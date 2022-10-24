import { INIT_QUEUE } from "../constants";

export default class GunQueue {
    constructor(){
        this.queue = INIT_QUEUE;
    }

    enqueue(item){
        return this.queue.push(item);
    }

    dequeue(){
        return this.queue.shift();
    }
}