# 🏠 Home Pricing Prediction - Digistar Bootcamp

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Flask](https://img.shields.io/badge/Framework-Flask-lightgrey)
![Library](https://img.shields.io/badge/Library-Scikit--Learn%20%7C%20Pandas%20%7C%20Seaborn-green)
![Status](https://img.shields.io/badge/Status-Completed-success)
![Responsive](https://img.shields.io/badge/UI-Responsive-blue)

Repositori ini berisi solusi *end-to-end* untuk proyek **Regression Case: Home Pricing**, yang merupakan bagian dari program pelatihan/bootcamp **Telkom Digistar**. Proyek ini bertujuan untuk membangun model Machine Learning yang mampu memprediksi harga rumah berdasarkan berbagai fitur properti dengan interface web yang responsif.

---

## 🎯 Fitur Utama

- ✅ **Interface Responsif** - Desktop, Tablet, Mobile
- ✅ **Real-time Prediction** - Prediksi harga rumah langsung
- ✅ **Modern UI/UX** - Design gradient dengan animasi smooth
- ✅ **Form Validation** - Input validation real-time
- ✅ **Data Summary** - Ringkasan lengkap input data
- ✅ **Error Handling** - Pesan error yang informatif

---

## 📋 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Latar Belakang](#-latar-belakang)
- [Dataset](#-dataset)
- [Tech Stack](#-tech-stack)
- [Struktur Project](#-struktur-project)
- [Instalasi & Setup](#-instalasi--setup)
- [Responsive Design](#-responsive-design)
- [API Endpoint](#-api-endpoint)
- [Metodologi](#-metodologi)
- [Hasil & Evaluasi](#-hasil--evaluasi)
- [Cara Menjalankan](#-cara-menjalankan)
- [Author](#-author)

---

## 🎯 Latar Belakang

Dalam industri real estat, menentukan harga jual yang tepat sangatlah krusial. Harga yang terlalu tinggi dapat membuat properti sulit terjual, sedangkan harga terlalu rendah merugikan penjual.

**Tujuan:**
Mengembangkan model regresi yang akurat untuk memprediksi harga rumah (*SalesPrice*) berdasarkan karakteristik fisik rumah (seperti luas tanah, jumlah kamar, lokasi, tahun dibangun, dll).

---

## 📊 Dataset

Dataset yang digunakan mencakup berbagai variabel tentang properti residensial.
* **Target Variable:** `SalePrice` (Harga jual properti dalam dolar).
* **Fitur Utama:** `OverallQual`, `GrLivArea`, `GarageCars`, `TotalBsmtSF`, dll.
* **Jumlah Baris:** [Masukkan Jumlah Baris, misal: 1460] data latih.

> *Catatan: Dataset telah melalui proses pembersihan dan preprocessing sebelum pemodelan.*

---

## 🛠 Tech Stack

Proyek ini dikerjakan menggunakan **Python** dengan library berikut:

* **Pengolahan Data:** Pandas, NumPy
* **Visualisasi:** Matplotlib, Seaborn
* **Machine Learning:** Scikit-Learn
* **Lingkungan Pengembangan:** Jupyter Notebook / Google Colab

---

## ⚙️ Metodologi

Langkah-langkah pengerjaan proyek ini meliputi:

1.  **Exploratory Data Analysis (EDA):**
    * Mengecek distribusi target variable (`SalePrice`).
    * Menganalisis korelasi antar fitur (Heatmap).
    * Mendeteksi dan menangani *Outliers*.
2.  **Data Preprocessing:**
    * Handling Missing Values (Imputasi Mean/Median/Mode).
    * Feature Engineering (Membuat fitur baru jika ada).
    * Encoding Categorical Data (One-Hot Encoding / Label Encoding).
    * Feature Scaling (StandardScaler / MinMaxScaler).
3.  **Modeling:**
    Melatih beberapa algoritma regresi untuk membandingkan performa:
    * Linear Regression
    * Ridge / Lasso Regression
    * Random Forest Regressor
    * XGBoost / Gradient Boosting (Opsional jika ada)
4.  **Evaluasi Model:**
    Menggunakan metrik RMSE (*Root Mean Squared Error*) dan R-Squared ($R^2$).

---

## 📈 Hasil & Evaluasi

Berikut adalah perbandingan performa model yang telah dilatih:

| Model | RMSE (Kecil Lebih Baik) | R2 Score (Besar Lebih Baik) |
| :--- | :--- | :--- |
| **Linear Regression** | *0.7679874332305* | *0.41165251* |
| **Random Forest** | *0.7014462049321515* | *0.7014462049321515* |

**Kesimpulan:**
Model terbaik adalah **[Sebutkan Model Terbaik]** dengan akurasi ($R^2$) sebesar **[Sebutkan %]**. Model ini mampu menjelaskan variansi harga rumah dengan cukup baik berdasarkan fitur yang diberikan.

---

## 🚀 Cara Menjalankan

Untuk menjalankan *notebook* ini di lokal komputer Anda:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/haykalaul/Regression-_Home-Pricing_Digistar.git](https://github.com/haykalaul/Regression-_Home-Pricing_Digistar.git)
    cd Regression-_Home-Pricing_Digistar
    ```

2.  **Install Library**
    Pastikan Anda memiliki Python dan library yang dibutuhkan:
    ```bash
    pip install pandas numpy scikit-learn matplotlib seaborn
    ```

3.  **Buka Jupyter Notebook**
    ```bash
    jupyter notebook
    ```
    Buka file `.ipynb` yang tersedia di dalam folder.

---

## 🌐 Setup dan Deploy Aplikasi Streamlit

Proyek ini juga menyediakan aplikasi web interaktif menggunakan **Streamlit** untuk memprediksi harga rumah berdasarkan model yang telah dilatih.

### Menjalankan Aplikasi Secara Lokal

1.  **Pastikan Dependencies Terinstall**
    Install library yang diperlukan untuk aplikasi Streamlit:
    ```bash
    pip install streamlit joblib pandas
    ```

2.  **Jalankan Aplikasi**
    ```bash
    streamlit run app.py
    ```
    Aplikasi akan terbuka di browser pada `http://localhost:8501`.

---

## 📁 Struktur Project

```
Regression-_Home-Pricing_Digistar/
├── app.py                          # Backend Flask
├── requirements.txt                # Dependencies
├── house_price_model.pkl           # Model ML (trained)
├── feature_columns.pkl             # Feature columns
├── README.md                        # Dokumentasi
├── Regression_Home_Pricing.ipynb    # Notebook untuk training
├── templates/
│   └── index.html                  # Template HTML responsif
├── static/
│   ├── css/
│   │   └── style.css              # Styling responsive CSS3
│   └── js/
│       └── main.js                # JavaScript interaktif
└── Docs/
    └── Test.py
```

---

## 🚀 Instalasi & Setup

### 1. Clone atau Download Project

```bash
cd c:\laragon\www\Regression-_Home-Pricing_Digistar
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Jalankan Aplikasi Flask

```bash
python app.py
```

### 4. Akses di Browser

Buka browser dan kunjungi:
```
http://localhost:5000
```

---

## 📱 Responsive Design

### Breakpoints & Layout

| Device | Width | Layout | Features |
|--------|-------|--------|----------|
| **Desktop** | > 1024px | 2 Kolom | Full features, Form + Result side by side |
| **Tablet** | 768px - 1024px | 1 Kolom | Responsive grid, Touch-friendly |
| **Mobile** | < 768px | 1 Kolom | Optimized spacing, Font size 16px prevent zoom |
| **Small Mobile** | < 480px | 1 Kolom | Extra compact, Mobile-first approach |

### Fitur Responsive

- ✅ Flexible grid layout dengan CSS Grid & Flexbox
- ✅ Touch-friendly input fields (16px font size)
- ✅ Optimized padding & margin untuk semua ukuran
- ✅ Smooth animations & transitions
- ✅ Media queries untuk 4 breakpoints
- ✅ Mobile-first CSS approach
- ✅ Prevent layout shift pada loading states

---

## 🔌 API Endpoint

### POST `/api/predict`

**Request Body:**
```json
{
  "GrLivArea": 2000,
  "LotArea": 5000,
  "TotalBsmtSF": 1000,
  "BedroomAbvGr": 3,
  "FullBath": 2,
  "TotRmsAbvGrd": 8,
  "OverallQual": 7,
  "OverallCond": 5,
  "KitchenQual": 3,
  "GarageCars": 2,
  "GarageArea": 500,
  "Neighborhood": "NAmes"
}
```

**Response Success:**
```json
{
  "success": true,
  "prediction": 250000.50,
  "formatted": "$250,000.50"
}
```

**Response Error:**
```json
{
  "success": false,
  "error": "Pesan error detail"
}
```

---

### Deploy ke Flask Cloud

1.  **Persiapan Repository**
    - Pastikan semua file model (`house_price_model.pkl`, `feature_columns.pkl`) dan `app.py` ada di repository GitHub Anda.
    - Buat file `requirements.txt` dengan dependencies berikut:
      ```
      Flask==3.0.0
      Flask-Cors==4.0.0
      joblib==1.5.3
      scikit-learn==1.7.2
      pandas==2.3.3
      ```

2.  **Deploy ke Heroku / PythonAnywhere**
    - Kunjungi [Heroku](https://www.heroku.com/) atau [PythonAnywhere](https://www.pythonanywhere.com/)
    - Connect ke repository GitHub Anda.
    - Pilih branch utama dan file `app.py` sebagai entry point.
    - Klik **Deploy** dan tunggu proses selesai.

> *Catatan: Pastikan model dan file pickle tidak terlalu besar untuk upload ke GitHub. Jika perlu, gunakan Git LFS untuk file besar.*

---

## 👤 Author

**Haykal Aul**
* GitHub: [haykalaul](https://github.com/haykalaul)
* Program: Telkom Digistar Internship

---

*Jangan lupa berikan ⭐ jika repositori ini membantu Anda!*
