import { Firebase, FirebaseRef } from '~/common/lib/firebase';

export function tryLogin({ phoneNumber, email, password }) {
  return {
    name: 'Theo Rouilly'
  }
  return Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
  .then(() =>  
    Firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => 
      FirebaseRef.child(`users/${phoneNumber}`).once('value').then((snapshot) => {
        if (snapshot.exists) {
          FirebaseRef.child(`users/${phoneNumber}`).update({
            isFirst: false
          })
          return snapshot.val()
        } else {
          throw new Error('account info does not exist')
        }
      })
    )
  )
}
