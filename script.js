let rides = JSON.parse(localStorage.getItem("rides")) || [];

function displayRides() {
    let list = document.getElementById("rideList");
    list.innerHTML = "";

    if (rides.length === 0) {
        list.innerHTML = "<p>No rides available</p>";
        return;
    }

    rides.forEach((ride, index) => {
        let div = document.createElement("div");
        div.className = "ride";
        if(ride.seats==0)
        {
            ride=null;
        }
        div.innerHTML = `
            <strong>${ride.name}</strong><br>
            ${ride.from} ➝ ${ride.to}<br>
            ⏰ ${ride.time} | 💺 Seats left: ${ride.seats}  <br>Contact details: ${ride.contact}<br>
            <button class="join-btn" onclick="joinRide(${index})">Join Ride</button>
        `;

        list.appendChild(div);
    });
}

function addRide() {
    let name = document.getElementById("name").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let time = document.getElementById("time").value;
    let seats = document.getElementById("seats").value;
    let contact=document.getElementById("contact").value;

    if (!name || !from || !to || !time || !seats || !contact) {
        alert("Fill all fields!");
        return;
    }

    rides.push({ name, from, to, time, seats, contact });
    localStorage.setItem("rides", JSON.stringify(rides));

    displayRides();
}

function joinRide(index) {
    if (rides[index].seats > 0) {
        rides[index].seats--;
        alert("Seat booked!");
        
    } else {
        
        rides[index]=null;
        displayRides();
    }

    localStorage.setItem("rides", JSON.stringify(rides));
    displayRides();
}

displayRides();