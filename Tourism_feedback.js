const form = document.getElementById("tourismForm");
const tableBody = document.querySelector("#feedbackTable tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const nationality = data.get("nationality");
  const date = data.get("visitDate");
  const cleanliness = data.get("cleanliness") || "0";
  const comments = data.get("comments").trim() || "None";

  let amenities = [];
  form.querySelectorAll("input[name='amenities']:checked").forEach(item => {
    amenities.push(item.value);
  });

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${nationality}</td>
    <td>${date}</td>
    <td>${"⭐".repeat(cleanliness)}</td>
    <td>${amenities.join(", ") || "None"}</td>
    <td>${comments}</td>
  `;
  tableBody.appendChild(row);
  form.reset();
  stars.forEach(s => s.classList.remove("checked"));
  cleanlinessInput.value = "";
  alert("Thank you for your feedback!");
});

function setLanguage(lang) {
  if (lang === 'fil') {
    document.getElementById("formTitle").textContent = "Ang Feedback ng Customer sa Hiraya Beach Resort";
    document.getElementById("nationalityLabel").textContent = "Nasyonalidad:";
    document.getElementById("dateLabel").textContent = "Petsa ng Pagbisita:";
    document.getElementById("cleanLabel").textContent = "Kalinisang Rating:";
    document.getElementById("amenitiesLabel").textContent = "Mga Ginamit na Pasilidad:";
    document.getElementById("commentsLabel").textContent = "Mga Komento:";
    document.getElementById("submitBtn").textContent = "Isumite";

    document.getElementById("messageTitle").textContent = "Maraming salamat po sa pagpili sa Hiraya Beach Resort";
    document.getElementById("messageP1").textContent = "Umaasa po kaming nagkaroon kayo ng nakapagpapalakas at kasiya-siyang oras sa aming magandang destinasyon sa tabing-dagat. Ang inyong mga puna ay lubhang mahalaga sa amin dahil nakakatulong ito sa amin na mapabuti ang aming mga pasilidad, kalinisan, at karanasan ng mga bisita.";
    document.getElementById("messageP2").textContent = "Mangyari po lamang na maglaan ng ilang sandali upang ibahagi ang inyong mga saloobin tungkol sa inyong pagbisita sa pamamagitan nang pagsagot ng form. Papuri man ito, mungkahi, o mga bahagi na maaaring pagbutihin — pinahahalagahan namin ang inyong tinig!";
    document.getElementById("messageP3").textContent = "Maraming salamat po sa pagiging bahagi ng aming komunidad sa dalampasigan at sa pagtulong sa amin na gawing mas mahusay pa ang paraisong ito para sa mga susunod na bisita.";
  } else {
    document.getElementById("formTitle").textContent = "Hiraya Beach Resort Customer Feedback";
    document.getElementById("nationalityLabel").textContent = "Nationality:";
    document.getElementById("dateLabel").textContent = "Visit Date:";
    document.getElementById("cleanLabel").textContent = "Cleanliness Rating:";
    document.getElementById("amenitiesLabel").textContent = "Amenities Used:";
    document.getElementById("commentsLabel").textContent = "Comments:";
    document.getElementById("submitBtn").textContent = "Submit Feedback";

    document.getElementById("messageTitle").textContent = "Thank you for choosing Hiraya Beach Resort";
    document.getElementById("messageP1").textContent = "We hope you had a refreshing and enjoyable time at our scenic coastal destination. Your feedback is very valuable to us as it helps us improve our amenities, cleanliness, and visitor experience.";
    document.getElementById("messageP2").textContent = "Please take a moment to share your thoughts about your visit by filling out the form. Whether it's praise, suggestions, or areas for improvement — we appreciate your voice!";
    document.getElementById("messageP3").textContent = "Thank you for being part of our beach community and for helping us make this paradise even better for future visitors.";
  }
}