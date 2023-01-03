const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

const replaceWord = document.querySelector('.theme_mode');

var select = document.getElementById('selectDesktop');
const allLang = ['en', 'ua'];

/* swap id in mobile version*/
if (window.innerWidth <= 576) {
    select = document.getElementById('selectMobile');

    /* responsiveAutoTheme */
    const responsiveAutoTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (responsiveAutoTheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else { 
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    };
};

/* theme-switcher */
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    };
};

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else { 
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    };   
};

toggleSwitch.addEventListener('change', switchTheme, false);

/* word-switcher */
toggleSwitch.addEventListener('change', function(){
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light'){
        replaceWord.innerText = 'Enable Dark Mode!';
    } else{
        replaceWord.innerText = 'Disable Dark Mode!';
    };
});

/* lang-switcher */
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
};

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    };
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['title'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        };
    };  
};

changeLanguage();

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    };
};

/* page scroll up */
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 350){
            $('.pageup').fadeIn();   
        } else {
            $('.pageup').fadeOut();   
        };
    });

    $("a[href='#up']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
});   