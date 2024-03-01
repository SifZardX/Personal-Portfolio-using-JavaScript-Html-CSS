function searchAndScroll() {
 
  var searchQuery = document.getElementById("searchInput").value.toLowerCase();

  
  var sections = document.querySelectorAll("section[id^='lvl']");

 
  var highlightedElements = document.querySelectorAll(".highlight");
  highlightedElements.forEach(function (element) {
    element.classList.remove("highlight");
  });


  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
 
    var sectionText = section.textContent.toLowerCase();

    
    if (sectionText.includes(searchQuery)) {
    
      section.scrollIntoView({ behavior: "smooth" });

     
      var regex = new RegExp(searchQuery, "gi");
      var highlightedText = section.innerHTML.replace(
        regex,
        '<span class="highlight">$&</span>'
      );
      section.innerHTML = highlightedText;

     
      break;
    }
  }
}

function filterCourses() {
  var level = document.getElementById("levelSelect").value;
  var courses = document.querySelectorAll(".courses > ol");

  courses.forEach(function (course) {
    if (level === "all" || course.id === level) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
}
