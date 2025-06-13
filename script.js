document.addEventListener('DOMContentLoaded', () => {
    console.log('프로필 페이지가 성공적으로 로드되었습니다. 아쿠아 파워 ON! 🐠');

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const submitButton = contactForm.querySelector('button[type="submit"]');

            if (!submitButton) {
                console.error('제출 버튼을 찾을 수 없습니다. HTML 구조를 확인해주세요. 😱');
                return;
            }

            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = '전송 중... 🌊';

            // 실제 서버로 데이터를 전송하는 로직은 여기에 구현해야 합니다.
            // const formData = new FormData(contactForm);
            // console.log('폼 데이터:', Object.fromEntries(formData.entries()));

            setTimeout(() => {
                try {
                    alert('메시지가 성공적으로 제출되었습니다! (이것은 시뮬레이션이며, 실제 서버 연동이 필요합니다. 🐬)');
                    contactForm.reset();
                } catch (e) {
                    console.error('메시지 처리(알림 또는 폼 초기화) 중 오류 발생:', e);
                    alert('오류가 발생했습니다. 다시 시도해주세요. 😥');
                } finally {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }
            }, 1000);
        });
    } else {
        console.warn('ID가 "contact-form"인 문의 양식을 찾을 수 없습니다. HTML 확인 필요! 🤔');
    }
});
