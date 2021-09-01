const firebaseConfig = {
        apiKey: "AIzaSyBX_Ed63-bDtUFRLCE5UTyZW2nP_t_QPSk",
        authDomain: "to-do-list-1ca9e.firebaseapp.com",
        projectId: "to-do-list-1ca9e",
        storageBucket: "to-do-list-1ca9e.appspot.com",
        messagingSenderId: "971885867523",
        appId: "1:971885867523:web:327c1525255a1600365436",
        measurementId: "G-E68D4M84DZ"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();