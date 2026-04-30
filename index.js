// Sahifalar orasida almashish
function togglePage(pageId) {
    document.querySelectorAll('.card').forEach(c => c.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    
    if (pageId.includes('fb')) {
        document.body.className = 'light-bg';
    } else {
        document.body.className = 'dark-bg';
    }
}

// Kun, Oy va Yillarni avto-to'ldirish (1980 - 2026)
function fillDateSelectors(dId, mId, yId) {
    const days = document.getElementById(dId);
    const months = document.getElementById(mId);
    const years = document.getElementById(yId);

    // Kunlar
    for (let i = 1; i <= 31; i++) {
        days.add(new Option(i, i));
    }

    // Oylar
    const monthList = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    monthList.forEach((m, index) => {
        months.add(new Option(m, index + 1));
    });

    // Yillar (1980 dan 2026 gacha)
    for (let i = 2026; i >= 1980; i--) {
        years.add(new Option(i, i));
    }
}

// Instagram Formani yuborish
function handleInstaSubmit(e) {
    e.preventDefault();
    // Ma'lumotlarni yig'ish va Instagram sahifasiga yo'naltirish
    window.location.href = "https://www.instagram.com/accounts/emailsignup/";
}

// Facebook Formani yuborish
function handleFBSubmit(e) {
    e.preventDefault();
    window.location.href = "https://www.facebook.com/r.php";
}

// Dasturni ishga tushirish
window.onload = () => {
    fillDateSelectors('insta-day', 'insta-month', 'insta-year');
    fillDateSelectors('fb-day', 'fb-month', 'fb-year');
};
