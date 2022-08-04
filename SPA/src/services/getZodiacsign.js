function getZodiacSign(date) {
    const birthday = new Date(date)
    let day = birthday.getDate();
    let month = birthday.getMonth();
    const days = [20, 18, 20, 20, 21, 21, 23, 23, 23, 23, 22, 22 ];
    
    switch (month) {
        case 0: 
            return (day<days[month])?'Capricorn':'Aquarius';
       case 1:
            return (day<days[month])?'Aquarius':'Pieces';
       case 2:
            return (day<days[month])?'Pisces':'Aries';
       case 3:
            return (day<days[month])?'Aries':'Taurus';
       case 4:
            return (day<days[month])?'Taurus':'Gemini';
       case 5:
            return (day<days[month])?'Gemini':'Cancer';
       case 6:
            return (day<days[month])?'Cancer':'Leo';
       case 7:
            return (day<days[month])?'Leo':'Virgo';
       case 8:
            return (day<days[month])?'Virgo':'Libra';
       case 9:
            return (day<days[month])?'Libra':'Scorpio';
       case 10:
           return (day<days[month])?'Scorpio':'Sagittarius';
       case 11:
            return (day<days[month])?'Sagittarius':'Capricorn';
       default: return "unknown"
            
  }
}
  export default getZodiacSign;