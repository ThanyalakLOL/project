


// const peoplename = document.getElementById("peoplename");
// let numPeople = 0;
// let personvalue = document.getElementById("price_person");
// let peoplesize = document.getElementById("peoplesize");
// const signOut = document.querySelector("#sign-out");
// const datas = [];
// var personPrice = 0;

// // function addName() {
// //  var data = {}
// //   if (typename.value != "") {
// //     numPeople++;
// //     peoplesize.innerText = numPeople;
// //     MyNumberType();
// //     const nameItem = document.createElement("li");
// //     let name = typename.oninput;
// //     nameItem.innerHTML = typename.value;
// //     peoplename.appendChild(nameItem);
// //     data = {email: typename.value, cost : 0}
// //     typename.value = "";
// //     datas.push(data)
// //   }
// //   console.log("datas : ", datas)
// // }


//     // var user = firebase.auth().currentUser;
//     var name = document.getElementById("typename").value
//     // const datas = [];

//     // if (user != null) {
//     //     user.providerData.forEach(function (profile) {
//     //         console.log("Sign-in provider: " + profile.providerId);
//     //         console.log("  Provider-specific UID: " + profile.uid);
//     //         console.log("  Name: " + profile.displayName);
//     //         console.log("  Email: " + profile.email);
//     //         console.log("  Photo URL: " + profile.photoURL);
//     //     });
//     // }

//     if (name != "") {
//         var data = [{ email: 'a', cost: 10 }, { email: 'b', cost: 4 }]
//         var data1 = [];
//         data1.push(name)
//     }

//     var firebaseConfig = {
//         apiKey: "AIzaSyDXyhsZrqCyW4PLcnhjSn6BL5vW51zfFPk",
//         authDomain: "goingdutch2-2665e.firebaseapp.com",
//         projectId: "goingdutch2-2665e",
//         storageBucket: "goingdutch2-2665e.appspot.com",
//         messagingSenderId: "304127427663",
//         appId: "1:304127427663:web:f1440e40b340929996163a",
//         measurementId: "G-S06KQ9ZDTN"
//     };
//     // Initialize Firebase
//     var app = firebase.initializeApp(firebaseConfig);
//     var db = firebase.firestore(app);

//     async function getMarkers() { // get data
//         const user = await firebase.firestore().collection('user')
//         const snapshot = await user.get()
//         console.log('snapshot>>>>', snapshot)
//         const tempDoc = snapshot.docs.map((doc) => {
//             const userData = { id: doc.id }
//             return { userData }
//         })
//         console.log(tempDoc)
//     }
//     getMarkers()



//     function addName() {
//         var data = {}
//         if (typename.value != "") {
//             numPeople++;
//             peoplesize.innerText = numPeople;
//             MyNumberType();
//             const nameItem = document.createElement("li");
//             let name = typename.oninput;
//             nameItem.innerHTML = typename.value;
//             peoplename.appendChild(nameItem);
//             data = { email: typename.value, cost: 0 }
//             typename.value = "";
//             datas.push(data)
//         }
//         console.log("datas : ", datas)
//     }

//     function changCostValue() {
//         console.log("cost: ", personPrice)
//         for (var i in datas) {
//                datas[i].cost = personPrice;
//           }
//     }

//     function addNewDebtor() {   // add data
//         changCostValue()
//         console.log("data aaddd : ", datas)
//         console.log("call add data")
//         db.collection("session").add({
//             order: "test",
//             creditor: "a@mail.com",
//             debtor: datas
//         })
//             .then((docRef) => {
//                 console.log("Document written with ID: ", docRef.id);
//             })
//             .catch((error) => {
//                 console.error("Error adding document: ", error);
//             });
//     }


// function MyNumberType() {
//   var total_price = parseInt(document.getElementById("total_price").value);
//   if (numPeople != 0 && total_price > 0) {
//     personPrice = total_price / numPeople;
//     personvalue.innerText = personPrice;

//   } else {
//     personvalue.innerText = 0;
//   }


// }

// function ResetButton() {
//     peoplesize.innerText = 0;
//     var total_price = parseInt(document.getElementById("total_price").value);
//     total_price.innerText = 0;
// }

// // sign out
// // console.log(signOut)
// signOut.addEventListener("click", () => {
//   firebase
//     .auth()
//     .signOut()
//     .then(() => {
//       console.log("signed out");
//       window.location = 'login.html';
//     });
// });
