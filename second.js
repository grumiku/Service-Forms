window.addEventListener("DOMContentLoaded", function () {
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const tableBody = document.getElementById("submissionTableBody");

  submissions.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.fullname || ''}</td>
      <td>${data.age || ''}</td>
      <td>${data.gender || ''}</td>
      <td>${data.phone || ''}</td>
      <td>${data.vaccinationStatus || ''}</td>
      <td>${data.symptoms || ''}</td>
      <td>${data.lastCheckup || ''}</td>
      <td>${data.existingCondition || ''}</td>
      <td>${data.emergencyPlan || ''}</td>
      <td>${data.evacuationArea || ''}</td>
      <td>${data.emergencyKit || ''}</td>
      <td>${data.emergencyContactName || ''}</td>
      <td>${data.emergencyPhone || ''}</td>
    `;
    tableBody.appendChild(row);
  });
});
