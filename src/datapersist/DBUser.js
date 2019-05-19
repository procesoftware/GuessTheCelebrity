
import GTCFirebase from "../../firebaseConfig";

export const writeUserData = (email,fname,lname)  => {
    GTCFirebase.database().ref('Users/').set({
        email,
        fname,
        lname
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

export const readUserData = () => {
    GTCFirebase.database().ref('Users/').once('value', function (snapshot) {
        console.log(snapshot.val())
    });
}

export const updateSingleData= (email) => {
    GTCFirebase.database().ref('Users/').update({
        email,
    });
}

export const deleteData = () => {
    GTCFirebase.database().ref('Users/').remove();
}

export const addUser =  (name, lastname, email ) => {
    GTCFirebase.database().ref('/Users').push({
        name: name,
        lastname: lastname,
        email: email
    });
}


