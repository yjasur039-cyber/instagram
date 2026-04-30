// Sahifalarni almashtirish funksiyasi
function showPage(pageId) {
    document.querySelectorAll('.container').forEach(div => div.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    if(pageId.includes('light')) {
        document.body.style.backgroundColor = '#f0f2f5';
    } else {
        document.body.style.backgroundColor = '#000';
    }
}

// Selectlarni to'ldirish (Kun, Oy, Yil)
function populateDates(dayId, monthId, yearId) {
    const daySelect = document.getElementById(dayId);
    const monthSelect = document.getElementById(monthId);
    const yearSelect = document.getElementById(yearId);

    // Kunlar 1-31
    for (let i = 1; i <= 31; i++) {
        daySelect.add(new Option(i, i));
    }

    // Oylar
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    months.forEach((m, index) => {
        monthSelect.add(new Option(m, index + 1));
    });

    // Yillar 1980-2026
    for (let i = 2026; i >= 1980; i--) {
        yearSelect.add(new Option(i, i));
    }
}

// Instagramga yo'naltirish (Ma'lumotlar bilan)
function redirectToInsta(e) {
    e.preventDefault();
    const email = document.getElementById('insta-contact').value;
    const name = document.getElementById('insta-name').value;
    // Real loyihada bu yerda ma'lumotni serverga yuborish yoki 
    // Instagram registration URL ga parametrlarni biriktirish mumkin
    alert("Ma'lumotlar qabul qilindi. Instagramga yo'naltirilmoqda...");
    window.location.href = `https://www.instagram.com/accounts/emailsignup/`;
}

// Facebookga yo'naltirish
function redirectToFB(e) {
    e.preventDefault();
    alert("Facebook ma'lumotlari tayyor. Yo'naltirilmoqda...");
    window.location.href = `https://www.facebook.com/r.php`;
}

// Ishga tushirish
window.onload = () => {
    populateDates('insta-day', 'insta-month', 'insta-year');
    populateDates('fb-day', 'fb-month', 'fb-year');
};
