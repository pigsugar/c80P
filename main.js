name_of_student_array=[]
function submit(){
    var display_student_array= [];

    for (var j = 1; j <= 4; j++)
{
var name_of_student = document.getElementById("name_of_student_"+j).value;
console.log(name_of_student);
name_of_student_array.push(name_of_student);

}

var lenght_of_name_array = name_of_student_array.lenght;
console.log(lenght_of_name_array);

for (var k = 0 ; k < lenght_of_name_array; k++){
    display_student_array.push("<h4>NAME -"+name_of_student_array[k]+ "</h4>");
}
document.getElementById("display_name_with_commas").innerHTML = display_student_array

var remove_commas= display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML + remove_commas;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
