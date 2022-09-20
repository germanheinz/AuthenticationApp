import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firestore/config"

export  const loadNotes = async (uid) => {

    console.log("esto en load notes");
    console.log(uid);
 
    const collectionRef = collection(firebaseDB, `${ uid }/journal/notes`);

    console.log("collectionRef");
    console.log(collectionRef);

    const docs = await getDocs(collectionRef);

    console.log("esto en load notes - docs");
    console.log(docs);

    const notes = [];
    docs.forEach(docs => {
        notes.push({id: docs.id, ...docs.data()});
    });
 
    return notes;

}
