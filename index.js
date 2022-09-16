function caclPrime() {
    var int = document.getElementById("int").value;
    var number = Math.sqrt(int);
    var number = Math.floor(number);
   
    for (var i = 3; i <= int; i++) {

       for(var j = 2;j <= number ;j+=2) {
       
        if (i < 2 ) {
            document.getElementById("result").innerHTML  = `Không có`;
        } else if ( i ==2 ){

            document.getElementById("result").innerHTML  = 2;

        }

        if (i % j !== 0) {
           
            document.getElementById("result").innerHTML  = i;
            console.log(i);
        } 
        } 
       }

    }


   
