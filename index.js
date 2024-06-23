document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const dateValue = document.getElementById('date').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        if (dateValue && gender) {
            const { dayOfWeek, akanName } = generateAkanName(dateValue, gender);
            resultDiv.textContent = `You were born on a ${dayOfWeek}. Your Akan name is ${akanName}!`;
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            resultDiv.textContent = 'Please fill out all fields.';
        }
    });

    function generateAkanName(dateString, gender) {
        const date = new Date(dateString);
        const dayOfWeekIndex = date.getDay(); 
        
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];

        let dayOfWeek = daysOfWeek[dayOfWeekIndex];
        let akanName;

        if (gender === 'male') {
            akanName = maleNames[dayOfWeekIndex];
        } else {
            akanName = femaleNames[dayOfWeekIndex];
        }

        return { dayOfWeek, akanName };
    }
});
