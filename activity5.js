let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scroLLY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(link => {
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classlist.add('active');
            })
        }

    })
}