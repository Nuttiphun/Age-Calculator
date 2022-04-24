function CalcAge(){
    var input_date = document.getElementById("input").value;  
    var dob = new Date(input_date);  
       
    if(input_date==null || input_date==''){   
      document.getElementById("showAge").innerHTML = ("คุณกรอกวันเกิดมาไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง!"); 
      return false;   
    }   
        
    else {   
    var mdate = input_date.toString();  
    var dobYear = parseInt(mdate.substring(0,4), 10);  
    var dobMonth = parseInt(mdate.substring(5,7), 10);  
    var dobDate = parseInt(mdate.substring(8,10), 10);  
       
    var today = new Date();   
    var birthday = new Date(dobYear, dobMonth-1, dobDate);  
      
    var diffInMillisecond = today.valueOf() - birthday.valueOf();        
    var year_age = Math.floor(diffInMillisecond / 31536000000);  
    var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
       
    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {  
            alert("สุขสันต์วันเกิดน้าาาา เย่ๆ ขอให้มีแต่เรื่องดีๆ เข้ามานะคะ เฮงๆ รวยๆ~~ ^-^");  
        }  
          
    var month_age = Math.floor(day_age/30);          
    day_ageday_age = day_age % 30;   

    if (dob>today) {  
        document.getElementById("showAge").innerHTML = ("คุณกรอกวันเกิดมาไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง!");  
    }  
    else {  
        document.getElementById("showAge").innerHTML = 
        `<div style="font-weight: bold;">${year_age} ปี ${month_age} เดือน <br>
        </div> `
        if( year_age < 7 ){
            document.getElementById("showAge").innerHTML += 
            `สิทธิที่ได้ตามวัย <br> 
            >> ได้รับสิทธิหลักประกันสุขภาพ 30 บาท หรือบัตรทอง <br>`
        }
        else if( year_age < 15 ){
            document.getElementById("showAge").innerHTML += 
            `สิทธิที่ได้ตามวัย <br> 
            >> ทำบัตรประชาชน <br>
            >> ได้รับสิทธิตามพระราชบัญญัติคุ้มครองเด็ก <br>`
        }
        else if( year_age < 17 ){
            document.getElementById("showAge").innerHTML += 
            `สิทธิที่ได้ตามวัย <br> 
            >> ทำพินัยกรรมได้ <br>
            >> ทำใบขับขี่รถจักรยานยนต์ส่วนบุคคลชั่วคราวได้ <br>
            >> ทำงานพิเศษได้ <br>
            >> ได้รับสิทธิตามพระราชบัญญัติคุ้มครองเด็ก <br>`
        }
        else if( year_age < 18 ){
            document.getElementById("showAge").innerHTML += 
            `สิทธิที่ได้ตามวัย <br> 
            >> แต่งงานได้ แต่ต้องได้รับการยินยอมจากผู้ปกครอง <br>
            >> ได้รับสิทธิตามพระราชบัญญัติคุ้มครองเด็ก <br>`
        }
        else if( year_age < 20 ){
            document.getElementById("showAge").innerHTML += 
            `สิทธิที่ได้ตามวัย <br> 
            >> มีสิทธิเลือกตั้ง <br>
            >> แต่งงานได้ แต่ต้องได้รับการยินยอมจากผู้ปกครอง <br>
            >> ทำใบขับขี่รถจักรยานยนต์และรถยนต์ได้ <br>
            >> ซื้อเครื่องดื่มแอลกอฮอล์และบุหรี่ได้ <br>
            >> ทำงานพิเศษได้หลากหลายขึ้น <br>
            >> แปลงเพศได้ แต่ต้องได้รับการยินยอมจากผู้ปกครอง <br>`
        }
        else{
            document.getElementById("showAge").innerHTML += 
            `สิทธิที่ได้ตามวัย <br> 
            >> เป็นผู้บรรลุนิติภาวะ <br>
            >> แต่งงานและจดทะเบียนได้ด้วยตัวเอง <br>
            >> ทำนิติกรรมต่าง ๆ ได้ด้วยตัวเอง <br>`
        }
    }  
   }  
}