var games = await fetch("games.json")
games = await games.json()

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('q');

function days_of_a_year(year) {
    var fev = isLeapYear(year) ? 29 : 28;
    return [31,fev,31,30,31,30,31,31,30,31,30,31]
}

function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function table_list(liste){
    for (var item in liste){
        var row = document.createElement("tr")
        var td0 = document.createElement("td")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var a = document.createElement("a")
        
        var date = liste[item]["date"].split("-")
        var time = liste[item]["time"].split(":")

        var year = parseInt(date[0])
        var month = parseInt(date[1])
        var day = parseInt(date[2])
        var hour = parseInt(time[0])
        var minute = parseInt(time[1])

        var date = new Date(Date.UTC(year,month,day,hour,minute,0))

        td0.innerText = liste[item]["name"]
        td1.innerText = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
        a.innerText = "Link to the countdown"
        a.href = "?q="+item
        td2.appendChild(a)
        row.appendChild(td0)
        row.appendChild(td1)
        row.appendChild(td2)
        document.querySelector("#table>tbody").appendChild(row)
        key = item
    }
}

function countdown(){
    var t1 = Date.now()
    var date = new Date(t1)
    count(date,games[myParam])
}

function count(this_time,game){
    var date = game["date"].split("-")
    var time = game["time"].split(":")

    var target_year = parseInt(date[0])
    var target_month = parseInt(date[1])
    var target_date = parseInt(date[2])
    var target_hour = parseInt(time[0])
    var target_minute = parseInt(time[1])
    var target_second = 0 


    var this_year = this_time.getFullYear()
    var this_month = this_time.getMonth()+1
    var this_date = this_time.getDate()
    var this_hour = this_time.getHours()
    var this_minute = this_time.getMinutes()
    var this_second = this_time.getSeconds()

    var d1 = new Date(Date.UTC(target_year,target_month,target_date,target_hour,target_minute,target_second))
    var d2 = new Date(this_year,this_month,this_date,this_hour,this_minute,this_second)
    
    var time = (d1.getTime() - d2.getTime())/1000
    if(time<0){
        clearInterval(games)
        document.querySelector("#countdown").innerText = ("Released")
        return
    }
    var year = 0
    var month = 0 
    var days = Math.floor(time/60/60/24)
    var hours = Math.floor(time/60/60) - (days*24)
    var minutes = Math.floor(time/60) - (days*24*60 + hours*60)
    var seconds = Math.floor(time) - (days*24*60*60 + hours*60*60 + minutes*60)

    document.querySelector("#countdown").innerText = ( year + "y " + month + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
}

if(myParam && games[myParam]){
    document.querySelector("#name").innerText = games[myParam]["name"]
    document.querySelector("#thumbnail").src = games[myParam]["thumbnail"]
    document.querySelector("#quer").style="display: block;"
    setInterval(countdown, 1000);
}
else{
    table_list(games)
    document.querySelector("#notquer").style="display: block;"
}


//var a = await fetch("https://id.twitch.tv/oauth2/token?client_id=r6kjnhjp42alsk0i2bo9suaoc0dvtg&client_secret=3l4eoy9c86euqsg54vinugxtd7y714&grant_type=client_credentials", {method: "POST"})
//
//a = await a.json()
//
//var token = await a["access_token"]
//var myHeaders = new Headers();
//myHeaders.append("Client-ID", "r6kjnhjp42alsk0i2bo9suaoc0dvtg");
//myHeaders.append("Authorization", "Bearer " + token);
//var a = await fetch("https://api.igdb.com/v4/games", {method: "POST",headers: myHeaders})
//await a.json()