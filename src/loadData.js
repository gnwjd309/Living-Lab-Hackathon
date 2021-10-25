import db from "./firebase";

const loadData = () => {
  var docRef = db.collection("data");
  docRef.get().then(function (querySnapshot) {
    if (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let docs = doc.data();
        console.log('Document id : ' + doc.id);

        for (let item in docs) {
          console.log('key : ' + item);
          console.log('value : ' + docs[item]);
        }
      });
    } else {
      console.log('No such document!');
    }
  }).catch(function (error) {
    console.log("Error getting document : ", error);
  });
}

export default loadData;