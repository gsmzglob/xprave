// الانتظار حتى يتم تحميل عناصر الصفحة بالكامل ثم بناء النافذة وحقنها في الموقع تلقائياً
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. إضافة التنسيقات (CSS) الخاصة بالنافذة إلى رأس الصفحة (Head)
    const style = document.createElement('style');
    style.innerHTML = `
        .popup-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            z-index: 9999999 !important;
            justify-content: center;
            align-items: center;
            pointer-events: auto;
        }
        body.popup-active {
            overflow: hidden !important;
        }
        .popup-box {
            background: #fff;
            padding: 40px;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            font-family: Arial, sans-serif;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .popup-box h2 {
            color: #d9534f;
            margin-top: 0;
            font-size: 24px;
        }
        .popup-box p {
            font-size: 18px;
            color: #333;
            line-height: 1.6;
            margin: 20px 0;
        }
        .exit-btn {
            background-color: #d9534f;
            color: white;
            border: none;
            padding: 12px 30px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
            width: 100%;
            transition: background 0.3s;
        }
        .exit-btn:hover {
            background-color: #c9302c;
        }
        .copyright {
            font-size: 13px;
            color: #777;
            margin-top: 30px;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
    `;
    document.head.appendChild(style);

    // 2. إنشاء وتصميم عناصر النافذة المنبثقة (HTML) وحقنها أسفل جسم الصفحة (Body)
    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'geoPopup';
    popupOverlay.className = 'popup-overlay';

    popupOverlay.innerHTML = `
        <div class="popup-box">
            <h2>Notice / تنبيه</h2>
            <p>This file will not be distributed in your country.</p>
            <p dir="rtl">هذا الملف لن يتم توزيعه في بلدك.</p>
            <button class="exit-btn" id="popupExitBtn">Exit / خروج</button>
            <div class="copyright">
                GSMZ GLOB © 2026
            </div>
        </div>
    `;
    document.body.appendChild(popupOverlay);

    // 3. إضافة وظيفة زر الخروج الإجباري للزر
    document.getElementById('popupExitBtn').addEventListener('click', function() {
        window.close();
        window.location.href = "https://www.google.com";
    });

    // 4. مصفوفة الدول العربية مصلحة بالكامل (أكواد ثنائية Capital)
    const allArabCountries = [
        'MA', 'DZ', 'BH', 'KM', 'DJ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 
        'MR', 'OM', 'PS', 'QA', 'SA', 'SO', 'SD', 'SY', 'TN', 'AE', 'YE'
    ];

    // 5. فحص الـ IP وتحديد موقع الزائر
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const userCountry = data.country_code;

            // التحقق من كود الدولة وتحويله لحروف كبيرة للتأكيد
            if (userCountry && allArabCountries.includes(userCountry.toUpperCase())) {
                document.getElementById('geoPopup').style.display = 'flex';
                document.body.classList.add('popup-active');
            }
        })
        .catch(error => {
            console.error('Error fetching location:', error);
        });
});
