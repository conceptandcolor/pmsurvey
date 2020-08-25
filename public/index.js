

const obj = [];

function start(){
    const fn = document.getElementById('fName').value;
    const ln = document.getElementById('lName').value;

    if(fn.trim().length > 0 && ln.trim().length > 0){
        document.getElementById('s1').style.display = "none";
        document.getElementById('q1').style.display = "block";
        obj.push({"FirstName": fn}, {"LastName": ln});


    } else {
        alert("Please input a First and Last Name to continue.")
    }
}

function question1(answer){
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "block";
    obj.push({"q1": answer})
}

function question2(res){
    const str = document.getElementById('resText').value;
    if (str.trim().length > 15){
        document.getElementById('q2').style.display = "none";
        document.getElementById('q3').style.display = "block";
        obj.push({"q2": str})
    } else {
        alert("Please input a longer response...")
    }
}

function question3(answer){
    document.getElementById('q3').style.display = "none";
    document.getElementById('c1').style.display = "block";
    obj.push({"q3": answer})
}

function submitSurvey(){
    console.log(obj)

    const app = firebase.app();
    var db = firebase.firestore();

    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);

  
    const timeStamp = new Date();

    db.collection("pm-survey").add({
    FirstName: obj[0].FirstName,
    LastName: obj[1].LastName,
    Question1: obj[2].q1,
    Question2: obj[3].q2,
    Question3: obj[4].q3,
    Time: timeStamp
    }).then(function() {
        console.log("Document successfully saved!");

    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
}