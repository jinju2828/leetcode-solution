/**
 * Initialize your data structure here.
 */
// var HitCounter = function(timestamp) {
//     this.count = {};
//
//     this.TIME_LIMIT = 300; //5 minutes in seconds
// };

class HitCounter {
    constructor(){
        this.count = {};
        this.TIME_LIMIT = 300;
    }
    hit(timestamp) {
        // var counter = new HitCounter();
        this.count[timestamp] = (this.count[timestamp]+1) || 1 ;
        // console.log("hit", this.count);
    }

    getHits(timestamp) {
        if (timestamp <= this.TIME_LIMIT) {
            // console.log("length", counter, Object.keys(counter.count).length);
            // var hitCounts = Object.keys(counter.count).length;
            var hitKeys = Object.keys(this.count).filter((key)=>{
                return parseInt(key)<=timestamp;
            });

            // console.log("hitKeys",hitKeys);
            var hitValues = hitKeys.map((key)=>{
                return this.count[key];
            });
            // console.log("hitValues", hitValues);
            var resultCounts = hitValues.reduce((sum,n)=>{
                return sum+n;
            },0);
            // console.log("result counts", resultCounts);
            return resultCounts;
        }
        if (timestamp > this.TIME_LIMIT) {
            var invalidHits = timestamp - this.TIME_LIMIT; //400-300, ignore until 100. start from 101
            // var validString = toString(validHits); //key '101'
            var hitCounts = Object.keys(this.count).filter((key)=>{
                return parseInt(key)> invalidHits;
            });
            var hitValues = hitCounts.map(key=>{
                return this.count[key];
            });
            var resultCounts = hitValues.reduce((sum,n) => {
                return sum+n;
            },0);
            return resultCounts;
        }
    }
};
/**
 * Record a hit.
 @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */

// HitCounter.prototype.hit = function(timestamp) {
//     this.count[timestamp]++;
// };

// var counter = new HitCounter();
// // counter.hit(1);
// // counter.hit(1);
// // counter.hit(2);
// // counter.hit(3);
// // counter.hit(6);
// // counter.hit(10);
// console.log("key number",Object.keys(counter.count));
// console.log("object", counter.count);
// console.log("hit counter", HitCounter);
/**
 * Return the number of hits in the past 5 minutes.
 @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */

// HitCounter.prototype.getHits = function(timestamp) {
//     if (timestamp <= this.TIME_LIMIT) {
//         // console.log("length", counter, Object.keys(counter.count).length);
//         // var hitCounts = Object.keys(counter.count).length;
//         var hitCounts = Object.keys(counter.count).filter((key)=>{
//            return parseInt(key)<timestamp;
//     });
//         var resultCounts = hitCounts.length;
//         return resultCounts;
//     }
//     if (timestamp > this.TIME_LIMIT) {
//         var invalidHits = timestamp - this.TIME_LIMIT; //400-300, ignore until 100. start from 101
//         // var validString = toString(validHits); //key '101'
//         var hitCounts = Object.keys(counter.count).filter((key)=>{
//             return parseInt(key)> invalidHits;
//         });
//         var resultCounts = hitCounts.length;
//         return resultCounts;
//     }
// };

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
// var result = counter.getHits(302);
// console.log("result", result);
// // console.log('aa'<'ab');

