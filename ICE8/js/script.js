document.addEventListener("DOMContentLoaded", function() {
  var i = 0;

  function duplicate(event) {
    var original = document.getElementById('education');
    var clone = original.cloneNode(true);
    clone.id = "education" + ++i;

    clone.querySelectorAll("[name]").forEach(function(element) {
      element.name = element.name + i;
    });

    document.getElementById("education-fieldset").insertBefore(clone, this);

  }

  document.getElementById("addDegree").onclick = duplicate;
}); // to clone education fields

document.addEventListener("DOMContentLoaded", function() {
  var j = 0;

  function duplicate(event) {
    var original = document.getElementById('work');
    var clone = original.cloneNode(true);
    clone.id = "work" + ++j;

    clone.querySelectorAll("[name]").forEach(function(element) {
      element.name = element.name + j;
    });

    document.getElementById("work-fieldset").insertBefore(clone, this);

  }

  document.getElementById("addWork").onclick = duplicate;
}); //to clone work experience fields
