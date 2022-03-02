function add(){
	
	var table=document.getElementById("tableUserInfos");
	var form = document.getElementById("formUserInfos");// 获取表单

	if(form.number.value==null||form.number.value==""){
	alert("学号不能为空");
	form.number.focus();
	return false;
	}
	
	else if(form.name.value==null||form.name.value==""){
	alert("姓名不能为空");
	form.name.focus();
	return false;
	}
	
	else if(form.score.value==null||form.score.value==""){
	alert("成绩不能为空");
	form.score.focus();
	return false;
	}
	
	else if(form.major.value==null||form.major.value==""){
	alert("专业不能为空");
	return false;
	}
	
	else{
	var newRow=table.insertRow();
	var cellMajor=newRow.insertCell();     //新增单元格对象
	var cellGrade   =newRow.insertCell();    
	var cellNum=newRow.insertCell();     
	var cellName   =newRow.insertCell();     
	var cellGender=newRow.insertCell();     
	var cellSub   =newRow.insertCell();     
	var cellScore=newRow.insertCell();  
	cellMajor.innerHTML=form.major.value;   
	cellGrade.innerHTML=form.grade.value;   
	cellNum.innerHTML=form.number.value;   
	cellName.innerHTML=form.name.value;  
	cellGender.innerHTML=form.gender.value; 
	cellSub.innerHTML=form.subject.value; 
	cellScore.innerHTML=form.score.value;
	clear();
	return true;
	}//输入完成后清空表单
}
function clear(){
	var form = document.getElementById("formUserInfos");// 获取表单
	form.number.value=null;
	form.name.value=null;
	form.score.value=null;
}

