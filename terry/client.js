var foo = {} //this will be a json object

document.onload = function () {fetchData()}

function fetchData() {
    foo = '<?php >'
    //query database should return an output like: ["prompt", "question type", "ans1", "ans2", "ans3", "ans4", "solution"
    //solution is going to be a string with space separated numbers e.g. 1 3 4 if solutions are 1, 3 and 4
    /*
    $queryResult =  mysqli_query($dbase, $query);

    //if fetch is successful it is going to be a table
    $result = array(); //create array object
    if ($queryResult) {
        while($row = mysqli_fetch_array($queryResult)) {    //this fetches a row from a table, each call returns next row
            $result[] = $row;
        }
    }


    */


}
