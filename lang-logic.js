let currentLang = 'en';
let radarChart;

// 初始化图表功能
function initChart(lang) {
    const chartCanvas = document.getElementById('radarChart');
    if (!chartCanvas) return;

    // 1. 获取当前页面 ID
    const pageId = window.currentPage || 'L1'; 

    const ctx = chartCanvas.getContext('2d');
    const data = translations[lang];

    // 2. 动态获取对应页面的图表数据
    const chartLabels = data[`${pageId}_chartLabels`];
    const chartLegend = data[`${pageId}_chartLegend`];
    const chartDataValues = data[`${pageId}_chartData`];

    // 3. 设置不同 Level 的主题色
    let borderColor = '#00b5ad'; // L1 Default (Teal)
    let bgColor = 'rgba(0, 181, 173, 0.25)';
    
    if (pageId === 'L2') {
        borderColor = '#00a896'; // L2 Darker Teal
        bgColor = 'rgba(0, 168, 150, 0.25)';
    } else if (pageId === 'L3') {
        borderColor = '#008080'; // L3 Dark Navy/Teal
        bgColor = 'rgba(0, 128, 128, 0.25)';
    } else if (pageId === 'L4') {
        borderColor = '#c0392b'; // L4 Primary Red
        bgColor = 'rgba(192, 57, 43, 0.25)';
    } else if (pageId === 'L5') {
        borderColor = '#6c5ce7'; // L5 Primary Purple
        bgColor = 'rgba(108, 92, 231, 0.25)';
    }

    if (radarChart) {
        radarChart.destroy();
    }

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: chartLabels,
            datasets: [{
                label: chartLegend,
                data: chartDataValues,
                backgroundColor: bgColor,
                borderColor: borderColor,
                borderWidth: 3,
                pointBackgroundColor: borderColor
            }]
        },
        options: {
            scales: { r: { suggestedMin: 50, ticks: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

// 语言切换功能
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const data = translations[currentLang];
    
    const btn = document.querySelector('.lang-btn');
    if(btn) btn.innerText = data.btn;

    if (currentLang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }

    // 更新页面文本
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) {
            el.innerText = data[key];
        }
    });

    initChart(currentLang);
}

// 页面加载
window.onload = function() {
    initChart('en');
};