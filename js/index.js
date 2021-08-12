var myForm = document.getElementById("myForm")

myForm.addEventListener('submit',function(e){
    e.preventDefault()
    var country= document.getElementById("country").value
    var url="https://api.covid19api.com/total/dayone/country/"+country
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>{
        var length=res.length
        var index=length-1
        var confirmed=document.getElementById('confirmed')
        var cases=document.getElementById('newcases')
        var deaths=document.getElementById('deaths')
        var date=document.getElementById('newdeaths')
        
        confirmed.append(res[index].Confirmed)
        cases.append(res[index].Active)
        deaths.append(res[index].Deaths)
        date.append(res[index].Date)
    })
})

function clean(){
    location.reload()
}

