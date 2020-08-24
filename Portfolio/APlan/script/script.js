$(document).ready(function() {
  console.log('document ready');

   $.getJSON('data/programs.json', function(data) {
     console.log('get json');
       $.each(data.programs, function(i,f) {
          var divProgram = '<div id=program' + i + ' class="program-card flex-child column" onclick="location.href=' + "'" + f.url + "'" + ';"></div>';
           $(divProgram).appendTo("#programs-picked-main");
           loadPrograms(i,f);
     });

   });

});


function loadPrograms(i,f){
  console.log('load programs' + i);
  var divProgramName = '<div class="flex-child row space-between" style="width:100%;">' +
                       '<h4>' + f.program_name + '</h4>' +
                       '<i class="far fa-bookmark bookmark"></i>' +
                       '</div>';
      $(divProgramName).appendTo('#program' + i);
  var divUniversityName = '<div class="flex-child row" style="width:100%;margin-top:0.4rem;">' +
                          '<p style="margin-right:1rem;">' + f.university_name + '</p>' +
                          '<img alt="flag_country" class="icon-country" src=' + f.country_ico + '>' +
                          '</div>';
      $(divUniversityName).appendTo('#program' + i);
  var divSubInfo = '<div class="flex-child row" style="width:100%;margin-top:0.8rem;">' +
                          '<p class="tip">Degree: <span>' + f.program_degree + '</span></p>' +
                          '<div class="line-separator vertical"></div>' +
                          '<p class="tip">Term: <span>' + f.program_term + '</span></p>' +
                          '<div class="line-separator vertical"></div>' +
                          '<p class="tip">Due: <span>' + f.program_due + '</span></p>' +
                          '</div>';
      $(divSubInfo).appendTo('#program' + i);
  var divIconInfo = '<div class="flex-child row" style="width:100%;margin-top:2.4rem;">' +
                          '<div  class="flex-child row icon-info"><i class="fas fa-dollar-sign"></i><p>' + f.program_tuition + '</p></div>' +
                          '<div  class="flex-child row icon-info"><i class="far fa-check-square"></i><p>' + f.program_accept + '</p></div>' +
                          '<div  class="flex-child row icon-info"><i class="far fa-clock"></i><p>' + f.program_duration + '</p></div>' +
                          '<div  class="flex-child row icon-info"><i class="fas fa-pencil-alt"></i><p>' + f.program_test + '</p></div>' +
                          '</div>';
      $(divIconInfo).appendTo('#program' + i);
  var divTags = '<div class="flex-child row tags-holder" style="width:100%;margin-top:1rem;"></div>';
      $(divTags).appendTo('#program' + i);
      $.each(f.tag, function(k,t){
        var tag = '<div class="tag">' + t +'</div>';
        $(tag).appendTo('#program' + i + ' .tags-holder');
      });

  var divLink = '<div class="flex-child row space-between" style="width:100%;margin-top:3.2rem;">' +
                '<a href="' + f.url + '">See Detail</a>' +
                '<a class="tip" href="#">Not interested</a>' +
                '</div>';
      $(divLink).appendTo('#program' + i);
}
