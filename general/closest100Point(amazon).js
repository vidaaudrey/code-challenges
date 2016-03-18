//Given a million points (x, y), give an O(n) 
//solution to find the 100 points closest to (0, 0).

// Note:
// There may be more optimization: 
//1. loop through the big array => cut into chunks to save memory

// Solution
function findClosest100Points(arr, count = 100) {
    if (arr.length < count) return arr;
    //get first 100 
    var sortedArray = arr.slice(0, count);
    console.log('inside sorted before', sortedArray);

    //process the sortedArray so x is always bigger than y
    sortedArray = _processArray(sortedArray);

    // sort the array internally by distance, then x and y value
    sortedArray = _sortPointArray(sortedArray);
    console.log('inside sorted after', sortedArray);

    let x, y, biggest = sortedArray[count - 1],
        swapped = false,
        distance;

    for (var i = count; i < arr.length; i++) {
        x = arr[i][0], y = arr[i][1];
        // make sure x > y 
        if (x < y) {
            x = y;
            y = arr[i][0];
            swapped = true
        }

        // move forward if both x and y are bigger than the biggest 
        if (x > biggest[0] && y > biggest[1]) continue;

        distance = _getDistance([x, y])

        // note we can do some optimization here, if x is smaller than biggest x, we can go ahead and replace the biggest
        // but for code clarity, I skipped it 
        if (distance <= biggest[3]) {
            sortedArray[count - 1] = [x, y, swapped, distance];
            // as the newly inserted element may not be the biggest one, we'll do another internal sorted, so the last element is always the biggest one
            sortedArray = _sortPointArray(sortedArray);
            biggest = sortedArray[count - 1]
        }
        // console.log('current', sortedArray)
    }

    console.log('before return', sortedArray)

    // return the array to it's original form (swap back)
    return sortedArray.map((item) => {
        if (item[2]) {
            return [item[1], item[0]]
        } else {
            return [item[0], item[1]]
        }
    })
}

// process points, if x < y, swap the two and add a flag to see if it is swapped
function _processArray(arr) {
    return arr.map((item) => {
        let x = item[0],
            y = item[1],
            swapped = false;
        if (x < y) {
            x = item[1];
            y = item[0];
            swapped = true
        }
        return [x, y, swapped, _getDistance([x, y])]
    })
}

// array item: [x, y] and x > y. Sort the array based on distance value, then x value then y value 
function _sortPointArray(arr) {
    return arr.sort((point1, point2) => {
        if (point1[3] === point2[3]) {
            if (point1[0] === point2[0]) {
                return point1[1] > point2[1] ? 1 : -1
            }
            return point1[0] > point2[0] ? 1 : -1;
        }
        return point1[3] > point2[3] ? 1 : -1;
    })
}



function _getDistance(point) {
    return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2))
}


function _makeBigPointArr(num) {
    var result = [];
    for (var i = 0; i < num; i++) {
        result.push([parseInt(Math.random() * num + 1), parseInt(Math.random() * num + 1)])
    }
    return result;
}

// test 
const arr = _makeBigPointArr(1000);
console.log('original array', arr);

const final = findClosest100Points(arr, 5);
console.log('final points', final);


//output 
// original array [[46,9880],[5347,5100],[69,5986],[5136,179],[5429,492],[3350,9843],[2222,3370],[9001,7988],[5898,267],[1021,736],[7306,7758],[6312,6381],[1544,2924],[2830,8495],[4088,8274],[781,2586],[4648,6373],[6650,8760],[9280,2744],[8219,1026],[4056,883],[4413,4277],[7874,8794],[7623,1972],[8767,7668],[2154,225],[1676,3761],[7857,8432],[5803,6417],[3139,4212],
// inside sorted before [[46,9880],[5347,5100],[69,5986],[5136,179],[5429,492]]
// inside sorted after [[5136,179,false,5139.118309593582],[5429,492,false,5451.248022242246],[5986,69,true,5986.397664706213],[5347,5100,false,7389.208956309193],[9880,46,true,9880.107084439926]]
// before return [[72,24,true,75.8946638440411],[65,61,true,89.1403387922662],[193,15,true,193.58202395883765],[181,77,true,196.69773765857096],[191,60,true,200.2023975880409]]
// final points [[24,72],[61,65],[15,193],[77,181],[60,191]]
