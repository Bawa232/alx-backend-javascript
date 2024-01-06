import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const singUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  
  return Promise
    .allSettled([signUp, upload])
    .then((results) => (
      results.map((result) => ({
        status: result.status,
	value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }))
    ));
}
