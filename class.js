const feedbackData = [];
const resultsBody = document.getElementById('results-body');
const filterGradeSection = document.getElementById('filter-grade-section');
const filterSubject = document.getElementById('filter-subject');
const filterRating = document.getElementById('filter-rating');

document.getElementById('school-survey').addEventListener('submit', function(event) {
    event.preventDefault();

  const nameInput = document.getElementById('school-name').value;
  const isAnonymous = document.getElementById('school-anonymous').checked;
  const name = isAnonymous ? 'Anon' : nameInput || '-';
  const gradeSection = document.getElementById('school-grade-section').value || '-';
  const subject = document.getElementById('school-subject').value;
  const ratingInput = document.querySelector('input[name="teacher-rating"]:checked');
  const rating = ratingInput ? ratingInput.value : '-';
  const favoriteLesson = document.getElementById('school-favorite-lesson').value || '-';
  const suggestions = document.getElementById('school-suggestions').value || '-';

  const newFeedback = { name, gradeSection, subject, rating, favoriteLesson, suggestions };
  feedbackData.push(newFeedback);
  renderTable(feedbackData); 
  document.getElementById('school-survey').reset();
});

function renderTable(data) {
    resultsBody.innerHTML = '';
    data.forEach(feedback => {
        const row = resultsBody.insertRow();
        row.insertCell().textContent = feedback.name;
        row.insertCell().textContent = feedback.gradeSection;
        row.insertCell().textContent = feedback.subject;
        row.insertCell().textContent = feedback.rating;
        row.insertCell().textContent = feedback.favoriteLesson;
        row.insertCell().textContent = feedback.suggestions;
    });
    applyFilters();
}

function applyFilters() {
    const selectedGradeSection = filterGradeSection.value;
    const selectedSubject = filterSubject.value;
    const selectedRating = filterRating.value;
    const rows = resultsBody.querySelectorAll('tr');

    rows.forEach(row => {
        const gradeSection = row.cells[1].textContent;
        const subject = row.cells[2].textContent;
        const rating = row.cells[3].textContent;
        let gradeSectionMatch = true;
        let subjectMatch = true;
        let ratingMatch = true;

        if (selectedGradeSection && selectedGradeSection !== 'All' && gradeSection !== selectedGradeSection) {
            gradeSectionMatch = false;
        }

        if (selectedSubject && selectedSubject !== 'All Subjects' && subject !== selectedSubject) {
            subjectMatch = false;
        }

        if (selectedRating && selectedRating !== 'All Ratings' && rating !== selectedRating) {
            ratingMatch = false;
        }

        if (gradeSectionMatch && subjectMatch && ratingMatch) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

filterGradeSection.addEventListener('change', applyFilters);
filterSubject.addEventListener('change', applyFilters);
filterRating.addEventListener('change', applyFilters);