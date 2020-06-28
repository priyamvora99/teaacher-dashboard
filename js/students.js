$(document).ready(()=>{
  var teacherId=localStorage.getItem('teacherId')
  var postData={"teacherId":teacherId}
  $('#localStorage').text(teacherId+' is the teacherId')
  $.ajax({
    url:'http://2be99f2f9caf.ngrok.io/api/teacher/getStudentsInClass',
    type:'POST',
    dataType: 'json',
    contentType: 'application/json',

    data:JSON.stringify(postData),
    success: (result)=>{
        console.log(result);
        if(result.hasOwnProperty('message')){
          //no students enrolled
          $('#displayStudents').hide()
          $('#noStudentsEnrolled').show()
          $('#noStudentsEnrolledMessage').text(result.message)
        }else{
            $('#noStudentsEnrolled').hide()
            $('#displayStudents').show()
            $('#classCode').show()
            $('#classCode').text('Class code: '+result.classCode);
            var studentInfo = result["studentInfo"];
            console.log(studentInfo);
            var table=$('#table_id').DataTable({
              data: studentInfo,

              columns:[
                {data:'srNo'},
                { data: 'name' }
              ]
            });
            $('#table_id tbody').on( 'click', 'tr', function () {
                var a=table.row( this ).data();
                var studentId=a.studentId
                console.log(studentId)
                window.location.href="../html/detailStudentSummary.html?studentId="+studentId+"&teacherId="+teacherId;

            } );
        }

    },
    error:(err)=>{
        alert(err)
    }
  })
})
