// The DOM should fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    const resultDiv = document.getElementById('result');

    // Event listener to the form to handle form submission
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

    // Function to generate Akan name based on birth date and gender
    function generateAkanName(dateString, gender) {
        const date = new Date(dateString);
        const dayOfWeekIndex = date.getDay(); 
        
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];

        let dayOfWeek = daysOfWeek[dayOfWeekIndex];
        let akanName;

        // Assign the Akan name based on the gender
        if (gender === 'male') {
            akanName = maleNames[dayOfWeekIndex];
        } else {
            akanName = femaleNames[dayOfWeekIndex];
        }

        // Return object containing the day of the week and the Akan name
        return { dayOfWeek, akanName };
    }
});
