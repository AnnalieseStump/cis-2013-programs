
var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("My " + "Age " + "Is")).toFixed(2);
     floatDays = parseFloat(floatAge * 365.25).toFixed(2);//Calculated days based upon interted age
     floatMonths = parseFloat(floatAge * 12).toFixed(2);//calculated months based upon age 
     intWeeks = parseInt(floatDays / 7).toFixed(2);//calculated weeks based on days alive
     intFortnights = parseInt(floatDays / 14).toFixed(2);//calculated fortnights by dividing days by 14    
     alert("Age = " + floatAge + "\n" + "Weeks = " + floatDays + "\n" + "Days = " + intWeeks + "\n" + "Months = " + floatMonths + "\n" + "Fortnights = " + intFortnights);