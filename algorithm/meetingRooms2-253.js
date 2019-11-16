var minMeetingRooms = function(intervals) {
    var temp;
    for(var i = 0; i < intervals.length - 1; i++){
        for(var j = i+1; j < intervals.length; j++){
            if(intervals[j][0] < intervals[i][0]){
                temp = intervals[j];
                intervals[j] = intervals[i];
                intervals[i] = temp;
            }
        }
    }
    // return intervals;

    var free_rooms = [];
    free_rooms.unshift(intervals[0][1]);

    for(var i = 0; i<intervals.length; i++){
        if(free_rooms[0] <= intervals[i][0]){
            free_rooms.shift();
        }else{
            free_rooms.push(intervals[i][1]);
        }
    }

    // return free_rooms;
    return free_rooms.length;
};

var res = minMeetingRooms([[7,10], [2,4]]);
console.log(res);
