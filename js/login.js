/* ================================
   STUDENT LOGIN (TEMPORARY LOGIC)
   ================================ */
function loginStudent() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter username and password");
    return;
  }

  // TEMP LOGIN (REPLACE WITH DATABASE LATER)
  if (username === "student01" && password === "1234") {
    alert("Login successful!");

    // REDIRECT TO STUDENT DASHBOARD / LMS
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}
