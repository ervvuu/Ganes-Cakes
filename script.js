  const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector(".navbar");

searchIcon.addEventListener("click", () => {
searchForm.classList.add("active");
navbar.classList.remove("active");
})

menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
    searchForm.classList.remove("active");
    
})  
window.onscroll = ()=>{
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
}


</script>
/*  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        navbar.classList.remove('active');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    });
});  */
