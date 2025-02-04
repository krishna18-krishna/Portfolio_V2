feather.replace();

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navigation.classList.toggle('active');
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navigation.contains(e.target)) {
        hamburger.classList.remove('active');
        navigation.classList.remove('active');
      }
    });
  
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navigation.classList.remove('active');
      });
    });
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Clear the form
    event.target.reset();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    return false;
}