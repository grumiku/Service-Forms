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

  const genderRadios = document.querySelectorAll('input[name="gender"]');
  const genderText = document.getElementById('GenderOthersInput');

  genderRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'Other' && radio.checked) {
        genderText.style.display = 'block';
      } else {
        genderText.style.display = 'none';
      }
    });
  });
});


document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    fullname: document.getElementById("fullname").value,
    age: document.getElementById("age").value,
    gender: document.querySelector('input[name="gender"]:checked')?.value || "",
    phone: document.getElementById("phone").value,
    vaccinationStatus: document.querySelector('select[name="vaccinationStatus"]').value,
    symptoms: getSymptoms(),
    lastCheckup: document.querySelector('input[name="lastCheckup"]').value,
    existingCondition: document.querySelector('input[name="has_condition"]:checked')?.value,
    conditionDetail: document.getElementById('conditionDetail').value,
    emergencyPlan: document.querySelector('input[name="emergency_plan"]:checked')?.value,
    evacuationArea: document.querySelector('input[name="evacuation_area"]:checked')?.value,
    emergencyKit: getKits(),
    emergencyContactName: document.getElementById("emergency_contact_name").value,
    emergencyPhone: document.getElementById("emergency_phone").value,
  };

  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.push(formData);
  localStorage.setItem("submissions", JSON.stringify(submissions));

  window.location.href = "second.html";
});


function getSymptoms() {
  const checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
  const symptoms = Array.from(checkboxes).map(cb => cb.value);

  const otherSymptom = document.getElementById('symptomsOthersInput').value;
  if (document.getElementById('otherSymptomCheckbox').checked && otherSymptom) {
    symptoms.push(otherSymptom);
  }
  return symptoms;
}

function getKits() {
  const checkboxes = document.querySelectorAll('input[name="kit"]:checked');
  const kits = Array.from(checkboxes).map(cb => cb.value);

  const otherKit = document.getElementById('kitOthersInput').value;
  if (document.getElementById('otherKitCheckbox').checked && otherKit) {
    kits.push(otherKit);
  }
  return kits;
}
