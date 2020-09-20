 // post script
 document.getElementById("myForm").onsubmit =(e)=>{
    e.preventDefault();
    const url = "http://localhost:3000/sent";

    var data = new URLSearchParams();
    //  console.log(e.target)
     for(const pair of new FormData(e.target)){
        // console.log(pair)
       data.append(pair[0],pair[1])
     }

    fetch(url,{
        method:"post",
        body:data,
    }).then(res=>res.json())
    .then(res2 => {
        // console.log(res2)
        location.reload()
    })
}

    // function to delete item
    function deleteMe(item){
        fetch("http://localhost:3000/remove/" + item.innerText,{
            method: "delete"
        }).then(res=>res.json())
        .then(res2 => {
            // console.log(res2)
            location.reload()
        });
    }


    // function to show time dynamically
    function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      
      function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function() {
          startTime()
        }, 500);
      }
      startTime();