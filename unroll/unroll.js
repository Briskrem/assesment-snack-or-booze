
const sq5= [
    [1, 2, 3, 4, 90, 44],
    [5, 6, 7, 8, 56, 99],
    [9, 10, 11, 12, 65, 3],
    [13, 14, 15, 16, 13, 23],
    [4, 77, 22, 99, 0, 45],
    [3 ,1 ,71 , 88, 23, 44]
];

const sq4 = [
    [1, 2, 3, 4, 90],
    [5, 6, 7, 8, 56],
    [9, 10, 11, 12, 65],
    [13, 14, 15, 16, 13],
    [4, 77, 22, 99, 0]
];

const sq3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

const sq2 = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
];

const sq1 = [
    ["a", "b"],
    ["d", "e"]
];

function unroll(squareArray) {

    let numberOfLoops;
    let middleNumber;

    // This determines how many times the LOOPER loops the looping function.
    function getLoops(s){
        if(s.length % 2 == 0 ){
            numberOfLoops = s.length/2
        }else{
            numberOfLoops = (s.length / 2) - .5
        }
    }
    getLoops(squareArray)

    //This gets middle number that remains when the looping is completed.
    function getMiddleNumber(r){
        if(!r.length % 2 == 0){
            console.log(r)
            console.log(Math.round(r.length / 2))
            middleNumber = r[Math.floor(r.length / 2) ][Math.floor(r.length / 2)]
        }
    }
    getMiddleNumber(squareArray)


    // mainArray must be above 'function loop1, even above it in the for loop.
    let mainArray = []
 
    //This is the (LOOPER) that  loops the looping function.
    let q = 0
    while(q < numberOfLoops ){
        loop1(q)
        q++
    }
    
    //looping function
    function  loop1(n){
        
        //Square array separated into 4 parts, 4 arrays are made, the uppermost, bottommost, furthest left,
        //furthestright and it begins to move inward as it loops.
        let firstVertical = []
        let secondVertical = []
        //The upper and bottommost parts of the square array are made into arrays here, and as "THE LOOPER" iterates,
        //ithe looping function moves to the next innermost upper and lower arrays.
        let topArray = squareArray[n].slice(n,squareArray[n].length -n)
        let bottomArray = squareArray[squareArray.length -1 -n].slice(n, squareArray[squareArray.length -1 -n].length -n).reverse()
        
        //These 2 for loops retrieves and builds the left and right outtermost arrays first and then move inwards as the LOOPER iterates.
         for(let i = (n + 1); i < squareArray.length - (n + 1) ; i++){
            for(let j = squareArray.length -(1 + n); j < squareArray.length -n; j++){
                secondVertical.push(squareArray[i][j])
                // console.log(secondVertical, topArray)
            }
        }
        //this gets firstVertical
        for(let i = (n + 1); i < squareArray.length -1 - n ; i++){
            for(let j = n; j < (n + 1); j++){
                firstVertical.push(squareArray[i][j])
                // console.log(firstVertical, bottomArray)
            }
        }
    
        let finalArray = [...topArray, ...secondVertical, ...bottomArray, ...firstVertical.reverse()]
        mainArray = [...mainArray, ...finalArray]
    }
    //The 4 arrays coalesce
    mainArray.push(middleNumber)
    console.log(mainArray, '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
}
  
  
unroll(sq4)

module.exports = unroll;
