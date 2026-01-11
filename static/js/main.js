// ==================== DOM Elements ==================== 
const form = document.getElementById('predictionForm');
const resultCard = document.getElementById('resultCard');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loadingSpinner');
const emptyState = document.querySelector('.empty-state');
const predictedPriceElement = document.getElementById('predictedPrice');
const summaryTable = document.getElementById('summaryTable');
const errorText = document.getElementById('errorText');

// Range slider labels
const qualRating = document.getElementById('qualRating');
const condRating = document.getElementById('condRating');
const kitchenRating = document.getElementById('kitchenRating');

const qualSlider = document.getElementById('OverallQual');
const condSlider = document.getElementById('OverallCond');
const kitchenSlider = document.getElementById('KitchenQual');

// ==================== Rating Labels ==================== 
const ratingLabels = {
    1: 'Buruk',
    2: 'Sangat Buruk',
    3: 'Rata-rata',
    4: 'Cukup Baik',
    5: 'Baik',
    6: 'Sangat Baik',
    7: 'Lebih Baik',
    8: 'Luar Biasa',
    9: 'Istimewa',
    10: 'Sempurna'
};

const kitchenRatingLabels = {
    1: 'Buruk',
    2: 'Rata-rata',
    3: 'Cukup',
    4: 'Baik',
    5: 'Sangat Baik'
};

// ==================== Event Listeners ==================== 
form.addEventListener('submit', handleSubmit);

qualSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    qualRating.textContent = `${val} - ${ratingLabels[val]}`;
});

condSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    condRating.textContent = `${val} - ${ratingLabels[val]}`;
});

kitchenSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    kitchenRating.textContent = `${val} - ${kitchenRatingLabels[val]}`;
});

// ==================== Form Submission ==================== 
async function handleSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!form.checkValidity()) {
        showError('Harap isi semua field yang diperlukan');
        return;
    }

    // Show loading state
    hideAllResults();
    loadingSpinner.style.display = 'flex';

    try {
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Send to backend
        const response = await fetch('/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            displayResult(result.prediction, result.formatted, data);
        } else {
            showError(result.error || 'Terjadi kesalahan saat memprediksi');
        }
    } catch (error) {
        console.error('Error:', error);
        showError('Gagal menghubungi server. Periksa koneksi Anda.');
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

// ==================== Display Result ==================== 
function displayResult(prediction, formatted, formData) {
    hideAllResults();

    // Update price display
    predictedPriceElement.textContent = formatted;

    // Build summary table
    const summaryData = [
        { label: 'Luas Bangunan', value: `${formData.GrLivArea} sqft` },
        { label: 'Luas Tanah', value: `${formData.LotArea} sqft` },
        { label: 'Luas Basement', value: `${formData.TotalBsmtSF} sqft` },
        { label: 'Kamar Tidur', value: `${formData.BedroomAbvGr}` },
        { label: 'Kamar Mandi', value: `${formData.FullBath}` },
        { label: 'Total Ruangan', value: `${formData.TotRmsAbvGrd}` },
        { label: 'Kualitas Rumah', value: `${formData.OverallQual} - ${ratingLabels[formData.OverallQual]}` },
        { label: 'Kondisi Rumah', value: `${formData.OverallCond} - ${ratingLabels[formData.OverallCond]}` },
        { label: 'Kualitas Dapur', value: `${formData.KitchenQual} - ${kitchenRatingLabels[formData.KitchenQual]}` },
        { label: 'Kapasitas Garasi', value: `${formData.GarageCars} mobil` },
        { label: 'Luas Garasi', value: `${formData.GarageArea} sqft` },
        { label: 'Lokasi', value: formData.Neighborhood }
    ];

    // Clear and populate table
    summaryTable.innerHTML = '';
    summaryData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.label}</td>
            <td>${item.value}</td>
        `;
        summaryTable.appendChild(row);
    });

    // Show result card
    resultCard.style.display = 'block';
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==================== Error Handling ==================== 
function showError(message) {
    hideAllResults();
    errorText.textContent = message;
    errorMessage.style.display = 'block';
}

// ==================== Hide All Results ==================== 
function hideAllResults() {
    resultCard.style.display = 'none';
    errorMessage.style.display = 'none';
    loadingSpinner.style.display = 'none';
    emptyState.style.display = 'block';
}

// ==================== Form Reset ==================== 
const resetBtn = document.querySelector('button[type="reset"]');
resetBtn.addEventListener('click', () => {
    hideAllResults();
    // Reset sliders labels
    setTimeout(() => {
        qualRating.textContent = '5 - Rata-rata';
        condRating.textContent = '5 - Rata-rata';
        kitchenRating.textContent = '3 - Rata-rata';
    }, 0);
});

// ==================== Initial Setup ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // Set initial rating labels
    qualRating.textContent = '5 - Rata-rata';
    condRating.textContent = '5 - Rata-rata';
    kitchenRating.textContent = '3 - Rata-rata';

    // Show empty state initially
    hideAllResults();
});
