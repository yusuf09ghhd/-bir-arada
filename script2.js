function submitJob() {
    const title = document.getElementById('job-title').value;
    const description = document.getElementById('job-description').value;
    const location = document.getElementById('job-location').value;

    // Yeni iş ilanını oluştur
    const newJob = `
        <div class="job-seeker">
            <h3>${title}</h3>
            <p>Şirket: İş Veren Şirketi</p>
            <p>Konum: ${location}</p>
            <p>Açıklama: ${description}</p>
        </div>
    `;

    // İş ilanını iş verenler bölümüne ekle
    document.querySelector('.job-seekers').insertAdjacentHTML('beforeend', newJob);

    // Formu sıfırla
    document.getElementById('add-job-form').reset();

    // İlan verme formunu kapat
    closeJobForm();
}