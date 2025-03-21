// Function to Add Reminder
function addReminder() {
    let reminderText = document.getElementById("new-reminder").value;
    if (reminderText === "") {
        alert("Please enter a reminder!");
        return;
    }

    let newReminder = document.createElement("li");
    newReminder.innerText = reminderText;
    document.getElementById("reminder-list").appendChild(newReminder);
    document.getElementById("new-reminder").value = "";
}

// Condition Comparison Graph
const ctx = document.getElementById('conditionChart').getContext('2d');
const conditionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Cognitive Function Score',
            data: [80, 75, 70, 65, 60], // Example Scores
            borderColor: 'blue',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Pie Chart for Memory & Attention Levels
const ctx2 = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Memory Retention', 'Attention', 'Decision Making'],
        datasets: [{
            label: 'Current Health Status',
            data: [50, 30, 20], // Example Data
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    },
    options: {
        responsive: true
    }
});

