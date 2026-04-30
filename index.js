// Sahifalarni boshqarish
function showPage(id) {
    document.querySelectorAll('.card').forEach(c => c.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.body.style.background = id.includes('fb') ? '#f0f2f5' : '#000';
}

// Sanalarni to'ldirish funksiyasi (1980 - 2026)
function initSelectors(dayId, monthId, yearId) {
    const d = document.getElementById(dayId);
    const m = document.getElementById(monthId);
    const y = document.getElementById(yearId);

    for (let i = 1; i <= 31; i++) d.add(new Option(i, i));
    
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    months.forEach((name, i) => m.add(new Option(name, i + 1)));

    for (let i = 2026; i >= 1980; i--) y.add(new Option(i, i));
}

// Avto-to'ldirish simulyatsiyasi (Instagram)
document.getElementById('instaForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Ma'lumotlar saqlandi! Instagram registration sahifasiga yo'naltirilmoqda...");
    // Ma'lumotlarni URL orqali yuborish (simulyatsiya)
    window.location.href = "https://www.instagram.com/accounts/emailsignup/";
});

// Avto-to'ldirish simulyatsiyasi (Facebook)
document.getElementById('fbForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Facebook ma'lumotlari tayyor! Next tugmasi bosilishiga tayyor holatda ochiladi.");
    window.location.href = "https://www.facebook.com/r.php";
});

// Ishga tushirish
initSelectors('insta_day', 'insta_month', 'insta_year');
initSelectors('fb_day', 'fb_month', 'fb_year');
