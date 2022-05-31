exports.calculateMode = (arr) => {
    myObj = {};

    for(let i=0; i<arr.length; i++) {
        if(arr[i] in myObj) {
            myObj[arr[i]]+=1;
        } else {
            myObj[arr[i]] = 1;
        }
    }

    let sortable = [];
    for (let item in myObj) {
        sortable.push([item, myObj[item]]);
    }
    
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    let occurrence = +(sortable[0][1]);

    let mode = [];

    for(let i=0; i<sortable.length; i++) {
        if(+(sortable[i][1]) >= occurrence) {
            mode.push(+sortable[i][0]);
        }
    }

    return mode;
}