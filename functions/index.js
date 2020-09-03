const functions = require('firebase-functions');
const admin = require ('firebase-admin');

admin.initializeApp();

exports.addLowoddSubscriber= functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then( user => {
        return admin.auth().setCustomUserClaims(user.uid,{
            lowodd:true
        });
    }).then (() => {
        return{ 
            message: `success! ${data.email} has subscribed to low odds plan`
         } 
        }).catch (err => { return err;
        });
});

exports.addLowoddRolloverSubscriber= functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then( user => {
        return admin.auth().setCustomUserClaims(user.uid,{
            lowodd:true,
            lowoddrollover:true
        });
    }).then (() => {
        return{ 
            message: `success! ${data.email} has subscribed to low+Rollover odds plan`
         } 
        }).catch (err => { return err;
        });
});

exports.addHighoddSubscriber= functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then( user => {
        return admin.auth().setCustomUserClaims(user.uid,{
            highodd:true
        });
    }).then (() => {
        return{ 
            message: `success! ${data.email} has subscribed to high odds plan`
         } 
        }).catch (err => { return err;
        });
});

exports.addFullSubscriber= functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then( user => {
        return admin.auth().setCustomUserClaims(user.uid,{
            lowodd:true,
            lowoddrollover:true,
            highodd:true,
            full:true
        });
    }).then (() => {
        return{ 
            message: `success! ${data.email} has subscribed to full plan`
         } 
        }).catch (err => { return err;
        });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
