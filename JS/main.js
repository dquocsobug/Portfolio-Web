//================Danh Sach AN================//
const navMenu = document.getElementById('nav-menu'),
    navDanhsachan = document.getElementById('nav-danhsachan'),
    navDong = document.getElementById('nav-dong');

if(navDanhsachan){
    navDanhsachan.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}

if(navDong){
    navDong.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav__link');

function linkHanhdong(){
    const  navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click',linkHanhdong));
//================Công Việc================//
const typed = new Typed('.congviec', {
    strings:['Sinh Viên','Lập Trình Viên','Thợ Chỉnh Ảnh'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
//================= HEADER==============//
function CuonHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 80) header.classList.add('cuon-header');
    else header.classList.remove('cuon-header');
}

window.addEventListener('scroll', CuonHeader);
//================= Cuộn Tự Động==============//
function CuonLen(){
    const scrollUp = document.getElementById('cuon-len');
    if(this.scrollY >= 350) scrollUp.classList.add('hienthi-cuonlen');
    else scrollUp.classList.remove('hienthi-cuonlen');
}
window.addEventListener('scroll', CuonLen);
