import { Firebase, FirebaseRef } from '~/common/lib/firebase';

export function trySignup({ email, password, accountInfo }) {
  console.log(accountInfo)
  return Firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((res) => {
    // Send user details to Firebase database
    if (res && res.user.uid) {
      const { phoneNumber, name, birthday, email } = accountInfo
      FirebaseRef.child(`users/${phoneNumber}`).set({
        isFirst: true,
        actived: true,
        phoneNumber,
        name,
        email,
        birthday,
        signedUp: Firebase.database.ServerValue.TIMESTAMP,
        lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
      }).then(() => {
        return
      })
    } else {
      throw new Error('account info save failed')
    }
  })
}
