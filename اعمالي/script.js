document.querySelectorAll('.card').forEach(card => {
    const questionElem = card.querySelector('.question');
    const input = card.querySelector('.edit-input');
    const saveBtn = card.querySelector('.save-btn');

    // وضع السؤال في البداية
    questionElem.textContent = card.dataset.question;

    // قلب البطاقة عند الضغط
    card.querySelector('.front').addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    // حفظ السؤال الجديد
    saveBtn.addEventListener('click', () => {
        if (input.value.trim() !== "") {
            questionElem.textContent = input.value;
            card.dataset.question = input.value;
            input.value = "";
            alert("تم حفظ السؤال الجديد ✅");
        }
    });
});
