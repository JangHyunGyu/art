function openModal(imageSrc, title, desc) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.hidden = true;
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('image-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});
