//   const scriptURL = 'https://script.google.com/macros/s/AKfycbzs-G4d7mvMcqarvWRzHOzI3E5xsynHlkoHs1LQJ5XjR-PpGs5NfRmjVglU7QQH1AUicg/exec'
//   const form = document.forms['submit-to-google-sheet']
//   const success = document.getElementById('success');

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => {
//         success.innerHTML = "Successful Submission"
//       })
//       .catch(error => console.error('Error!', error.message))
//   })

const scriptURL = 'https://script.google.com/macros/s/AKfycbzs-G4d7mvMcqarvWRzHOzI3E5xsynHlkoHs1LQJ5XjR-PpGs5NfRmjVglU7QQH1AUicg/exec';
const form = document.forms['submit-to-google-sheet'];
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        success.innerHTML = "Successful Submission"; // Display success message
        alert("Your response has been submitted successfully."); // Alert for successful submission
        form.reset(); // Reset form fields immediately
      } else {
        throw new Error('Error submitting form'); // Throw error if response is not OK
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert("There was an error submitting your response. Please try again."); // Alert for submission error
    });
});