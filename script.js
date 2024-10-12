// Tab Contect(Skills Section)
function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });

    // Remove 'active' class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add 'active' class to the clicked tab button
    event.currentTarget.classList.add('active');
  }

// Get the modal, button, and close elements(Header: Contact Information Section //
  // Get elements
  const contactBtn = document.getElementById("contact-btn");
  const modal = document.getElementById("contact-modal");
  const closeBtn = document.querySelector(".close-btn");

  // Open the modal when contact button is clicked
  contactBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // Flex to align center
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal if clicked outside of it
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  function showDownloadLink(){
    document.getElementId('download-link'),style.display = 'inline';
  }

document.getElementById("recommendationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your recommendation has been submitted!");
});

window.addEventListener('scroll', function() {
const header = document.querySelector('header');
if (window.scrollY > 50) {
  header.classList.add('scrolled');
} else {
  header.classList.remove('scrolled');
}
});


