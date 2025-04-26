
document.addEventListener('DOMContentLoaded', () => {
  const symptomCheckbox = document.getElementById('otherSymptomCheckbox');
  const symptomText = document.getElementById('symptomsOthersInput');
  symptomCheckbox.addEventListener('change', () => {
    symptomText.style.display = symptomCheckbox.checked ? 'block' : 'none';
  });

  const kitCheckbox = document.getElementById('otherKitCheckbox');
  const kitText = document.getElementById('kitOthersInput');
  kitCheckbox.addEventListener('change', () => {
    kitText.style.display = kitCheckbox.checked ? 'block' : 'none';
  });
});


document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  
  const formData = {
    fullname: document.getElementById("fullname").value,
    age: document.getElementById("age").value,
    gender: document.querySelector('input[name="gender"]:checked')?.value || "",
    phone: document.getElementById("phone").value,
    emergencyContactName: document.getElementById("emergency_contact_name").value,
    emergencyPhone: document.getElementById("emergency_phone").value,
  };

 
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

 
  submissions.push(formData);

 
  localStorage.setItem("submissions", JSON.stringify(submissions));

 
  window.location.href = "second.html";
});
