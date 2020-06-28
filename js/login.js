$(document).ready(()=>{
  $('#login').on('click',()=>{
    //xH8rOwp1tRdyTDxILsdzsGRsJdl2
    //Z32MId5nmiPusdsmzYLsKK3GZPW2
    var teacherId='Z32MId5nmiPusdsmzYLsKK3GZPW2'
    localStorage.setItem("teacherId",teacherId)
    window.location.href= '../html/teacherDashboard.html'
  })
})
