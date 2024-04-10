
let inputSearchValueGlobal = ""; // Declaring a global variable to store the search input value

function init() {//this function is for starting the app
    const tableBody = document.getElementById("usersTable");//this line is for comunicating with the table body in the html
    draw(users, tableBody);//this line is drawing in the dom the users list and the table body

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // now we ar going to access addNewUser button
    const addNewUserButton = document.getElementById("addNewUser") //we create a button that adds users
    addNewUserButton.addEventListener("click", function () { //the event listener will make the button do something
        const firstNameInput = document.getElementById("firstName"); //we are making a conection with the html again and collect the table headers
        const lastNameInput = document.getElementById("lastName");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const ageInput = document.getElementById("age");
        const imgInput = document.getElementById("img");
        const genderInput = document.getElementById("gender");
        const isSingleInput = document.getElementById("isSingle");
        const countryInput = document.getElementById("country");

        const user = { //now that we have the headers we say what to feel them up with, each line is a user.
            name: { first: firstNameInput.value, last: lastNameInput.value },
            email: emailInput.value,
            phone: phoneInput.value,
            dob: { age: ageInput.value },
            login: { username: `${firstNameInput.value}${Math.ceil(Math.random() * 9999)}` },
            picture: { large: imgInput.value },
            gender: genderInput.value,
            isSingle: isSingleInput.checked, // next lesson.
            location: { country: countryInput.value }
        };

        users.push(user);//affter we created a new line= new user, we push it to the array.
        draw(users, tableBody); //now you can redraw the table.
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // now i am going to access the deleteAllUsers button
    const DeleteButton = document.getElementById("deleteAllUsers"); //first make a connection to the html
    DeleteButton.addEventListener("click", function () { //then add the action
        document.getElementById("usersTable").innerHTML = "" //this ation replace all the users table html with blank.
    })

    //after i added a delete button i want to give the user a chance to regret and go back to the start, therfor i am giving hime a reset button.
    // to access it we are resuming the same proccess:
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function () {
    draw(users, tableBody);
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const searchButton = document.getElementById("searchButton")
    searchButton.addEventListener("click", function(){
    const input = document.getElementById("searchInput")
    const searchValue = input.value
    const filterdUsers = users.filter(user => user.name.first.toLowerCase().includes(searchValue.toLowerCase()))
    draw(filterdUsers, tableBody)
    document.getElementById("searchInput").value = ""
    })
}


function draw(arrayOfUsers, tableBody) {
    tableBody.innerHTML = ""
    for (let index = 0; index < arrayOfUsers.length; index++) {
        tableBody.append(getUserRowUI(arrayOfUsers[index]))
        // table  <=     // row       // data
    }
    // const usersRows = arrayOfUsers.map((currentUser) => getUserRowUI(currentUser))
    // tableBody.append(...usersRows)

}


function getUserRowUI(user) {

    const tdId = document.createElement("td")
    tdId.innerText = user?.login?.username

    const tdFirstName = document.createElement("td")
    tdFirstName.innerText = user?.name?.first

    const tdLastName = document.createElement("td")
    tdLastName.innerText = user?.name?.last

    const tdEmail = document.createElement("td")
    tdEmail.innerText = user?.email

    const tdPhone = document.createElement("td")
    tdPhone.innerText = user?.phone

    const tdAge = document.createElement("td")
    tdAge.innerText = user?.dob?.age

    const tdGender = document.createElement("td")
    tdGender.innerText = user?.gender

    const tdCountry = document.createElement("td")
    tdCountry.innerText = user?.location?.country

    const tdImage = document.createElement("td")
    const imgUser = document.createElement("img")
    imgUser.classList.add("user-image")
    imgUser.src = user?.picture?.large
    tdImage.append(imgUser)

    const trUser = document.createElement("tr")
    trUser.append(tdId, tdFirstName, tdLastName, tdEmail, tdPhone, tdAge, tdGender, tdImage, tdCountry)

    return trUser

}


init()