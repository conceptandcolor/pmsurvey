setTimeout(function () {
  table();
}, 1000);

function table() {
  const app = firebase.app();
  const firestore = firebase.firestore();
  const settings = { /* your settings... */ timestampsInSnapshots: true };
  firestore.settings(settings);
  var db = firebase.firestore();
  var docRef = db.collection("pm-survey");

  db.collection("pm-survey")
    .get()
    .then((snap) => {
      var total = (size = snap.size);
      document.getElementById("count").innerHTML = ` - Total Count: ${total}`;
    });

  var num = 0;

  var printRef = docRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      docId = doc.id;
      q1 = doc.data().Question1;
      q2 = doc.data().Question2;
      q3 = doc.data().Question3;
      q4 = doc.data().Question4;
      time = doc.data().Time;

      //console.log(doc.data());

      num++;

      const tBody = document.getElementById("tbody");

      const row = document.createElement("tr");

      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(num);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(q1);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(q2);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(q3);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(q4);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(time);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      tBody.appendChild(row);
    });
  });
}
