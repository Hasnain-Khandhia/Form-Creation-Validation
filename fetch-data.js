async function fetchUserData() {
    // All your code will go inside this function
}
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    // Continue with the next steps
}
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    // Continue with the next steps
}
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the "Loading" message
        dataContainer.innerHTML = '';

        // Create a list element to display the users
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData);
