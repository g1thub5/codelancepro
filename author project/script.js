document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
  

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let feedback = document.getElementById('feedback').value;
  
    // Display the submitted information
    alert('Name: ' + name + '\nAge: ' + age + '\nEmail: ' + email + '\nFeedback: ' + feedback);
  });