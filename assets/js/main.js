// 작품 데이터
const artworks = {
    painting1: {
        image: 'assets/images/painting1.png',
        title: '금강내산전도',
        desc: '수묵담채 모작, 900×1465mm, 2023–2024',
        detail: `
            <p class="detail-intro">흠모하던 그림을 담아내다.</p>
            <blockquote>"겸재의 시선을 따라 걷다 보면, 1만 2천 봉우리가 건네는 무심한 위로를 만난다.<br>내 인생의 역작, 금강내산전도 모작."</blockquote>
            <section>
                <h4>작품의 계기</h4>
                <p>생업과 일상을 넘나들며 틈틈이 시간을 내어 근 1년여의 기간에 걸쳐 완성한 작품이었다. 나는 겸재의 그림, 특히 금강산 그림들을 오래전부터 흠모해왔다. 그중에서도 &lt;금강내산전도&gt;를 재현하고 싶었던 이유는 날카로운 필치 속에 구현된 반복의 미학, 그리고 변치 않는 신비로움이 한눈에 펼쳐지는 구도에 매료되었기 때문이다. 수많은 암봉을 세밀하게 묘사하며 붓끝의 집중력을 유지하려 애썼던 시간은, 원작의 영험한 분위기를 나만의 선으로 오롯이 가져오기 위한 수행의 과정이기도 했다.</p>
            </section>
            <section>
                <h4>원작과의 차이와 해석</h4>
                <ul>
                    <li><strong>압도적 크기로 표현한 '확고한 존재감'</strong><br>원작보다 큰 사이즈의 화폭은 단순히 크기의 확장을 넘어, 내 안에 잠재된 꿈과 가치관의 크기를 증명하고 싶었던 열망의 반영이기도 하다.</li>
                    <li><strong>강렬한 색채 대비, '흐릿해지지 않는 삶의 선명함'</strong><br>세월에 바랜 색감 대신 진하고 강렬한 색채를 택했다. 이는 어떤 상황에서도 흐릿해지지 않는 삶의 에너지와, 시간이 흘러도 변치 않는 가치를 붙잡고 싶었던 나의 의지와도 같다.</li>
                    <li><strong>반복과 균형 속의 '태산 같은 자부심'</strong><br>무수한 봉우리가 반복되며 이루는 완벽한 균형은, 일상의 소소한 반복이 모여 결국 '나'라는 흔들리지 않는 산을 이룬다는 자부심을 상징하고 이 태산같은 자부심을 잃지 않고자 하는 마음과 닮아있다.</li>
                </ul>
            </section>
        `
    },
    painting2: {
        image: 'assets/images/painting2.png',
        title: '겨울의 기억',
        desc: 'Acrylic on Wood, 2024',
        detail: ''
    },
    painting3: {
        image: 'assets/images/painting3.png',
        title: '오후의 정물',
        desc: 'Watercolor, 2024',
        detail: ''
    }
};

function openModal(artId) {
    const artwork = artworks[artId];
    if (!artwork) return;

    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalDetail = document.getElementById('modal-detail');

    modalImg.src = artwork.image;
    modalImg.alt = artwork.title;
    modalTitle.textContent = artwork.title;
    modalDesc.textContent = artwork.desc;
    modalDetail.innerHTML = artwork.detail;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.hidden = true;
    document.body.style.overflow = '';
}

// DOM 로드 후 이벤트 연결
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    document.getElementById('image-modal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Art item click handlers
    document.querySelectorAll('.art-item[data-id]').forEach(item => {
        item.addEventListener('click', () => openModal(item.dataset.id));
    });
});
