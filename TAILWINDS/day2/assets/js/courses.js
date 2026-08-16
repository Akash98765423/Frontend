/**
 * CodeForge Enterprise - Courses & Curriculum Engine
 * Handles course filtering, search, module accordion tabs & learning tracker
 */

document.addEventListener('DOMContentLoaded', () => {
  initCourseFilters();
  initSyllabusAccordions();
  initModuleLessonPlayer();
});

// 1. Course Filtering & Search
function initCourseFilters() {
  const searchInput = document.getElementById('courseSearchInput');
  const filterBtns = document.querySelectorAll('.course-filter-btn');
  const levelSelect = document.getElementById('courseLevelSelect');
  const courseCards = document.querySelectorAll('.course-item-card');

  if (!courseCards.length) return;

  function filterCourses() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeBtn = document.querySelector('.course-filter-btn.active');
    const selectedTech = activeBtn ? activeBtn.getAttribute('data-tech') : 'all';
    const selectedLevel = levelSelect ? levelSelect.value : 'all';

    let visibleCount = 0;

    courseCards.forEach(card => {
      const cardTech = card.getAttribute('data-tech') || '';
      const cardLevel = card.getAttribute('data-level') || '';
      const cardTitle = (card.querySelector('.course-title')?.innerText || '').toLowerCase();
      const cardDesc = (card.querySelector('.course-desc')?.innerText || '').toLowerCase();

      const matchesSearch = !searchTerm || cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);
      const matchesTech = selectedTech === 'all' || cardTech === selectedTech;
      const matchesLevel = selectedLevel === 'all' || cardLevel === selectedLevel;

      if (matchesSearch && matchesTech && matchesLevel) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const countDisplay = document.getElementById('resultsCountDisplay');
    if (countDisplay) {
      countDisplay.innerText = `Showing ${visibleCount} courses`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCourses);
  }

  if (levelSelect) {
    levelSelect.addEventListener('change', filterCourses);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-sky-600', 'text-white', 'border-sky-500');
        b.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800');
      });
      btn.classList.add('active', 'bg-sky-600', 'text-white', 'border-sky-500');
      btn.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');
      filterCourses();
    });
  });
}

// 2. Syllabus Accordion Tabs
function initSyllabusAccordions() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.accordion-arrow');
      const isOpen = content.classList.contains('active');

      // Toggle current
      if (isOpen) {
        content.classList.remove('active');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      } else {
        content.classList.add('active');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// 3. Module Lesson Selector & Interactive Progress
function initModuleLessonPlayer() {
  const lessonItems = document.querySelectorAll('.lesson-select-item');
  const videoTitle = document.getElementById('currentLessonTitle');
  const videoDesc = document.getElementById('currentLessonDesc');
  const durationText = document.getElementById('currentLessonDuration');

  lessonItems.forEach(item => {
    item.addEventListener('click', () => {
      lessonItems.forEach(i => i.classList.remove('bg-sky-950/60', 'border-sky-500/50'));
      item.classList.add('bg-sky-950/60', 'border-sky-500/50');

      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      const dur = item.getAttribute('data-duration');

      if (videoTitle && title) videoTitle.innerText = title;
      if (videoDesc && desc) videoDesc.innerText = desc;
      if (durationText && dur) durationText.innerText = dur;
    });
  });
}

// 4. Enroll Handler
window.handleEnroll = function(courseName) {
  const modal = document.getElementById('enrollSuccessModal');
  const nameEl = document.getElementById('enrollCourseName');
  if (nameEl) nameEl.innerText = courseName;
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    alert(`Successfully enrolled in "${courseName}". Access credentials have been sent to your corporate SSO email.`);
  }
};
