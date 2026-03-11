const showPass=()=>{
let tb = document.querySelector("table")
let data = localStorage.getItem("Passwords")
if (data == null) {
    tb.innerHTML = "no data entered"
}
else {
    tb.innerHTML=`
     <tr>
            <th>Website</th>
            <th>Username</th>
            <th>Password</th>
            <th>delete</th>
        </tr>`
    let arr = JSON.parse(data);
    let str=""
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];




        str += `<tr>
 <td>${element.website}</td>
            <td>${element.Username}</td>
            <td>${element.Password}</td>
            <td>${"Delete"}</td> </tr>`
    }

    tb.innerHTML = tb.innerHTML + str
}
}


showPass();


document.querySelector(".button").addEventListener("click", (e) => {
    e.preventDefault()

    console.log("clcicked")
    console.log(Website.value,Username.value,Password.value)
    let Passwords = localStorage.getItem("passwords")
    console.log("Passwords")

    if (Passwords == null) {
        let json = []
        json.push({ Website: Website.value,Username: Username.value, Password: Password.value })
        alert("password saved");
        localStorage.setItem("Passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("Passwords"))
        json.push({Website: Website.value,Username: Username.value, Password: Password.value })
        alert("password saved");
        localStorage.setItem("Passwords", JSON.stringify(json))
    }
    showPass();
})