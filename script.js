// Константа для фона по умолчанию
const DEFAULT_BACKGROUND = 'images/background.jpg';
// Константа для схемы парковки по умолчанию
const DEFAULT_PARKING_SCHEME = 'images/parking-scheme.jpg';

// Инициализация данных услуг с подробными описаниями и путями к изображениям
const servicesData = [
    { 
        id: 'stapel', 
        name: 'Стапельные работы', 
        description: 'Восстановление геометрии кузова автомобиля после ДТП. Используем современное стапельное оборудование для точного выравнивания каркаса кузова. Работаем с любыми типами деформаций.',
        image: 'images/service-stapel.jpg'
    },
    { 
        id: 'paint', 
        name: 'Покраска авто', 
        description: 'Профессиональная покраска автомобиля в специализированной камере с системой фильтрации. Используем качественные материалы ведущих производителей. Гарантия на работы 2 года.',
        image: 'images/service-paint.jpg'
    },
    { 
        id: 'antikor', 
        name: 'Антикоррозийная обработка', 
        description: 'Комплексная защита кузова от коррозии с использованием современных материалов. Обработка скрытых полостей, днища, арок. Защита от реагентов и влаги.',
        image: 'images/service-antikor.jpg'
    },
    { 
        id: 'body', 
        name: 'Кузовные работы', 
        description: 'Полный спектр кузовного ремонта: рихтовка, замена элементов, сварка, восстановление геометрии. Работаем с оригинальными и аналоговыми запчастями.',
        image: 'images/service-body.jpg'
    },
    { 
        id: 'wash', 
        name: 'Мойка автомобилей', 
        description: 'Комплексная мойка внешних поверхностей и уборка салона. Используем профессиональную химию и оборудование. Детейлинг и защитное покрытие.',
        image: 'images/service-wash.jpg'
    },
    { 
        id: 'tire', 
        name: 'Шиномонтаж', 
        description: 'Полный спектр услуг по шиномонтажу: замена, балансировка, ремонт шин и дисков. Сезонное хранение шин. Компьютерная балансировка нового поколения.',
        image: 'images/service-tire.jpg'
    },
    { 
        id: 'alignment', 
        name: 'Развал-схождение', 
        description: 'Компьютерная регулировка углов установки колес на современном стенде. Обеспечиваем точные параметры для оптимальной управляемости и износа шин.',
        image: 'images/service-alignment.jpg'
    },
    { 
        id: 'ac', 
        name: 'Заправка кондиционеров', 
        description: 'Диагностика и заправка автомобильных кондиционеров. Устранение утечек, замена компрессоров. Используем качественный фреон и оборудование.',
        image: 'images/service-ac.jpg'
    },
    { 
        id: 'custom', 
        name: 'Индивидуальный подход к нестандартным ситуациям', 
        description: 'Решение сложных и нестандартных задач по ремонту и обслуживанию автомобилей. Разработка индивидуальных решений для уникальных случаев. Консультации по сложным техническим вопросам.',
        image: 'images/service-custom.jpg'
    }
];

// Данные отзывов
const reviewsData = [
    {
        author: "Дмитрий Григорьев",
        level: "Знаток города 4 уровня",
        date: "27 октября 2024",
        text: "Заказывал ремонт креплений переднего бампера на Рено Сандеро Стэпвэй 2. Прекрасный сервис, чёткая быстрая работа! Чистота, порядок👍 И руководство и сотрудники - молодцы!!",
        rating: 5
    },
    {
        author: "Кира Калинина",
        level: "Знаток города 9 уровня",
        date: "29 февраля 2024",
        text: "Ремонтировала своего КИЮшку, прекрасный сервис, сделали все четко, в оговоренные сроки, работа на 5ку!!! Очень ответственные и честные ребята! Ответили на все вопросы! Спасибо огромное!!! Теперь только к Вам!!! Рекомендую сервис!",
        rating: 5
    },
    {
        author: "Кирилл П.",
        level: "Знаток города 2 уровня",
        date: "23 апреля",
        text: "Отличный сервис, обслуживаю тут несколько машин. Хорошее соотношение цена/качество, не навязывают ненужный ремонт",
        rating: 5
    },
    {
        author: "Наталья",
        level: "Знаток города 2 уровня",
        date: "27 мая",
        text: "Хорошие ребята, качественный, быстрый ремонт. Адекватные цены . Электрик- золотые руки! Спасибо вам, что при полной загрузке всегда берете в тот же день. По мерседесу знают все болячки!",
        rating: 5
    },
    {
        author: "Алексей Корнеенков",
        level: "Знаток города 21 уровня",
        date: "12 декабря 2024",
        text: "Приняли машину и отдали в назначенное время. Цена приемлемая. Боксы чистые. Всё понравилось.",
        rating: 5
    },
    {
        author: "Елена",
        level: "Знаток города 5 уровня",
        date: "16 ноября 2023",
        text: "Отличная станция, работают мастера своего дела. Внимательность, дружелюбная обстановка, отличный сервис и комфортные цены. Обслуживаю свой автомобиль только здесь",
        rating: 5
    },
    {
        author: "Михаил Юрьевич",
        level: "Знаток города 22 уровня",
        date: "26 октября 2021",
        text: "Отличный сервис. Заехал переобуться « на зиму». Порекомендовали замену колодок. Цена на колодки без накрутки по цены интернет-магазина и причем в этот же день привезли. Заменил колодки, прменял резину. Мастер Герман очень аккуратный и грамотный. Важно и то, что монтаж шин проводится в теплом помещении на качественном оборудовании. Теперь только сюда, в т.ч и на плановое ТО.",
        rating: 5
    },
    {
        author: "Антон",
        level: "Знаток города 11 уровня",
        date: "14 мая 2020",
        text: "Всё отлично сделали. Был у нас шиномонтаж - недорого. Заодно пообщались с директором и он предложил нам решить проблему со знаком 'внимание'. Покопались они в мозгах машины и решили проблему. Но потом она снова появилась. Позвонил, приехал. Всё осмотрели бесплатно. Проблему нашли определили ее решение. В общем Спасибо!",
        rating: 5
    },
    {
        author: "Светлана Федорова",
        level: "Знаток города 11 уровня",
        date: "3 сентября 2021",
        text: "Лучшее место для вашего авто) Все и сразу, но имейте в иду, может быть очередь И мойка и то и покраска и починка и сбор с нуля, если ваша машина превратилась в хлам",
        rating: 5
    },
    {
        author: "Slava Landik",
        level: "Знаток города 3 уровня",
        date: "11 декабря 2018",
        text: "Очень хороший авто сервис!!! Есть малярно кузовные работы, все виды слесарных, сварочных, шиномонтаж, развал схождения , мойка , кафе и завправка кондиционеров.",
        rating: 5
    },
    {
        author: "Иван К.",
        level: "Знаток города 5 уровня",
        date: "1 февраля 2024",
        text: "После замены масла ДВС не докрутили крепление защиты картера, в итоге стуки подвески, волнение и доп затраты по поиску проблемы в другом сервисе.",
        rating: 3
    },
    {
        author: "Vitalii Rott",
        level: "Знаток города 10 уровня",
        date: "24 ноября 2021",
        text: "Хороший сервис. Люди здесь работают профессиональные. Несмотря на то, что клиентов было много, нашли возможность меня принять. Обслужили быстро и качественно.",
        rating: 5
    }
];

// Функция для установки фона по умолчанию
function setDefaultBackground() {
    document.body.style.backgroundImage = `url(${DEFAULT_BACKGROUND})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
}

// Функции для навигации
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        // Учитываем высоту навигационной панели при скролле
        const navHeight = document.getElementById('mainNav').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Кнопка прокрутки наверх
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Админ-модальное окно
const adminKey = document.getElementById('adminKey');
const adminModal = document.getElementById('adminModal');
const adminModalClose = document.getElementById('adminModalClose');

if (adminKey && adminModal) {
    adminKey.addEventListener('click', function() {
        adminModal.classList.add('active');
    });

    adminModalClose.addEventListener('click', function() {
        adminModal.classList.remove('active');
    });

    adminModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
}

// Обработка формы записи
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('clientName').value,
            phone: document.getElementById('clientPhone').value
        };
        
        // Здесь обычно отправка данных на сервер
        alert(`Спасибо, ${formData.name}! Ваша заявка принята. Мы свяжемся с вами по номеру ${formData.phone} в ближайшее время.`);
        
        // Очистка формы
        this.reset();
    });
}

// Установка фона сайта
const setBgBtn = document.getElementById('setBgBtn');
if (setBgBtn) {
    setBgBtn.addEventListener('click', function() {
        const fileInput = document.getElementById('bgImageInput');
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.body.style.backgroundImage = `url(${e.target.result})`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundAttachment = 'fixed';
                localStorage.setItem('siteBackground', e.target.result);
                updateBgPreview();
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    });
}

// Сброс фона сайта - ТЕПЕРЬ УСТАНАВЛИВАЕТ ФОН ПО УМОЛЧАНИЮ
const resetBgBtn = document.getElementById('resetBgBtn');
if (resetBgBtn) {
    resetBgBtn.addEventListener('click', function() {
        setDefaultBackground();
        localStorage.removeItem('siteBackground');
        updateBgPreview();
    });
}

// Установка фона по умолчанию
const setDefaultBgBtn = document.getElementById('setDefaultBgBtn');
if (setDefaultBgBtn) {
    setDefaultBgBtn.addEventListener('click', function() {
        setDefaultBackground();
        localStorage.removeItem('siteBackground');
        updateBgPreview();
        alert('Фон по умолчанию установлен!');
    });
}

// Установка фона шапки
const setHeaderBgBtn = document.getElementById('setHeaderBgBtn');
if (setHeaderBgBtn) {
    setHeaderBgBtn.addEventListener('click', function() {
        const fileInput = document.getElementById('headerBgImageInput');
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const header = document.getElementById('siteHeader');
                header.style.backgroundImage = `url(${e.target.result})`;
                localStorage.setItem('headerBackground', e.target.result);
                updateHeaderBgPreview();
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    });
}

// Сброс фона шапки
const resetHeaderBgBtn = document.getElementById('resetHeaderBgBtn');
if (resetHeaderBgBtn) {
    resetHeaderBgBtn.addEventListener('click', function() {
        const header = document.getElementById('siteHeader');
        header.style.backgroundImage = 'url(\'images/header-bg.jpg\')';
        localStorage.removeItem('headerBackground');
        updateHeaderBgPreview();
    });
}

// Установка схемы парковки
const setParkingSchemeBtn = document.getElementById('setParkingSchemeBtn');
if (setParkingSchemeBtn) {
    setParkingSchemeBtn.addEventListener('click', function() {
        const fileInput = document.getElementById('parkingSchemeInput');
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const parkingSchemeImage = document.getElementById('parkingSchemeImage');
                parkingSchemeImage.src = e.target.result;
                localStorage.setItem('parkingScheme', e.target.result);
                updateParkingSchemePreview();
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    });
}

// Сброс схемы парковки - ТЕПЕРЬ УСТАНАВЛИВАЕТ СХЕМУ ПО УМОЛЧАНИЮ
const resetParkingSchemeBtn = document.getElementById('resetParkingSchemeBtn');
if (resetParkingSchemeBtn) {
    resetParkingSchemeBtn.addEventListener('click', function() {
        const parkingSchemeImage = document.getElementById('parkingSchemeImage');
        parkingSchemeImage.src = DEFAULT_PARKING_SCHEME;
        localStorage.removeItem('parkingScheme');
        updateParkingSchemePreview();
    });
}

// Обновление превью фона сайта
function updateBgPreview() {
    const bgPreview = document.getElementById('bgPreview');
    if (bgPreview) {
        const savedBg = localStorage.getItem('siteBackground');
        if (savedBg) {
            bgPreview.style.backgroundImage = `url(${savedBg})`;
            bgPreview.textContent = '';
        } else {
            bgPreview.style.backgroundImage = `url(${DEFAULT_BACKGROUND})`;
            bgPreview.textContent = '';
        }
    }
}

// Обновление превью фона шапки
function updateHeaderBgPreview() {
    const headerBgPreview = document.getElementById('headerBgPreview');
    if (headerBgPreview) {
        const savedHeaderBg = localStorage.getItem('headerBackground');
        if (savedHeaderBg) {
            headerBgPreview.style.backgroundImage = `url(${savedHeaderBg})`;
            headerBgPreview.textContent = '';
        } else {
            headerBgPreview.style.backgroundImage = 'url(\'images/header-bg.jpg\')';
            headerBgPreview.textContent = '';
        }
    }
}

// Обновление превью схемы парковки
function updateParkingSchemePreview() {
    const parkingSchemePreview = document.getElementById('parkingSchemePreview');
    if (parkingSchemePreview) {
        const savedParkingScheme = localStorage.getItem('parkingScheme');
        if (savedParkingScheme) {
            parkingSchemePreview.style.backgroundImage = `url(${savedParkingScheme})`;
            parkingSchemePreview.textContent = '';
        } else {
            parkingSchemePreview.style.backgroundImage = `url(${DEFAULT_PARKING_SCHEME})`;
            parkingSchemePreview.textContent = '';
        }
    }
}

// Загрузка сохраненного фона при загрузке страницы
window.addEventListener('load', function() {
    // Сначала проверяем сохраненный фон в localStorage
    const savedBg = localStorage.getItem('siteBackground');
    
    if (savedBg) {
        // Если есть сохраненный фон, используем его
        document.body.style.backgroundImage = `url(${savedBg})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
    } else {
        // Если нет сохраненного фона, устанавливаем фон по умолчанию
        setDefaultBackground();
    }
    
    // Остальной код загрузки...
    const savedHeaderBg = localStorage.getItem('headerBackground');
    if (savedHeaderBg) {
        const header = document.getElementById('siteHeader');
        header.style.backgroundImage = `url(${savedHeaderBg})`;
    }
    
    const savedParkingScheme = localStorage.getItem('parkingScheme');
    if (savedParkingScheme) {
        const parkingSchemeImage = document.getElementById('parkingSchemeImage');
        parkingSchemeImage.src = savedParkingScheme;
    }
    
    updateBgPreview();
    updateHeaderBgPreview();
    updateParkingSchemePreview();
    
    // Загрузка сохраненных изображений галереи
    loadGallery();
    
    // Загрузка услуг
    loadServices();
    
    // Загрузка отзывов
    loadReviews();
    
    // Добавляем анимации при скролле
    initScrollAnimations();
});

// Загрузка отзывов
function loadReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    if (!reviewsGrid) return;
    
    reviewsGrid.innerHTML = '';
    
    // Показываем первые 6 отзывов
    const initialReviews = reviewsData.slice(0, 6);
    
    initialReviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        // Создаем звезды рейтинга
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
                starsHtml += '<span class="star">★</span>';
            } else {
                starsHtml += '<span class="star" style="color: #d1d5db">★</span>';
            }
        }
        
        reviewItem.innerHTML = `
            <div class="review-header">
                <div>
                    <div class="review-author">${review.author}</div>
                    <div class="review-level">${review.level}</div>
                </div>
                <div class="review-date">${review.date}</div>
            </div>
            <div class="review-text">${review.text}</div>
            <div class="review-rating">${starsHtml}</div>
        `;
        
        reviewsGrid.appendChild(reviewItem);
    });
    
    // Настройка кнопки "Показать еще"
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    if (!loadMoreBtn) return;
    
    let currentReviewsCount = 6;
    
    loadMoreBtn.addEventListener('click', function() {
        const nextReviews = reviewsData.slice(currentReviewsCount, currentReviewsCount + 6);
        
        if (nextReviews.length === 0) {
            loadMoreBtn.style.display = 'none';
            return;
        }
        
        nextReviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            // Создаем звезды рейтинга
            let starsHtml = '';
            for (let i = 0; i < 5; i++) {
                if (i < review.rating) {
                    starsHtml += '<span class="star">★</span>';
                } else {
                    starsHtml += '<span class="star" style="color: #d1d5db">★</span>';
                }
            }
            
            reviewItem.innerHTML = `
                <div class="review-header">
                    <div>
                        <div class="review-author">${review.author}</div>
                        <div class="review-level">${review.level}</div>
                    </div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-text">${review.text}</div>
                <div class="review-rating">${starsHtml}</div>
            `;
            
            reviewsGrid.appendChild(reviewItem);
        });
        
        currentReviewsCount += 6;
        
        if (currentReviewsCount >= reviewsData.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
}

// Галерея работ
function loadGallery() {
    const gallery = document.getElementById('worksGallery');
    const adminGallery = document.getElementById('adminGallery');
    
    if (!gallery || !adminGallery) return;
    
    gallery.innerHTML = '';
    adminGallery.innerHTML = '';
    
    const savedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
    
    savedImages.forEach((imgData, index) => {
        // Добавление в основную галерею
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.style.backgroundImage = `url(${imgData})`;
        workItem.addEventListener('click', function() {
            openModal(imgData);
        });
        gallery.appendChild(workItem);
        
        // Добавление в админ-галерею
        const adminItem = document.createElement('div');
        adminItem.className = 'gallery-item';
        adminItem.style.backgroundImage = `url(${imgData})`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.innerHTML = '×';
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            deleteImage(index);
        });
        
        adminItem.appendChild(deleteBtn);
        adminGallery.appendChild(adminItem);
    });
}

// Добавление изображения в галерею
const addGalleryImageBtn = document.getElementById('addGalleryImageBtn');
if (addGalleryImageBtn) {
    addGalleryImageBtn.addEventListener('click', function() {
        const fileInput = document.getElementById('galleryImageInput');
        if (fileInput.files && fileInput.files.length > 0) {
            const savedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
            
            Array.from(fileInput.files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    savedImages.push(e.target.result);
                    localStorage.setItem('galleryImages', JSON.stringify(savedImages));
                    loadGallery();
                };
                reader.readAsDataURL(file);
            });
            
            fileInput.value = '';
        }
    });
}

// Удаление изображения из галереи
function deleteImage(index) {
    const savedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
    savedImages.splice(index, 1);
    localStorage.setItem('galleryImages', JSON.stringify(savedImages));
    loadGallery();
}

// Загрузка услуг - ИСПРАВЛЕННАЯ ВЕРСИЯ С ИЗОБРАЖЕНИЯМИ ПО УМОЛЧАНИЮ
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    const servicesAdmin = document.getElementById('servicesAdmin');
    
    if (!servicesGrid || !servicesAdmin) return;
    
    servicesGrid.innerHTML = '';
    servicesAdmin.innerHTML = '';
    
    // Загрузка сохраненных изображений для услуг
    const savedServiceImages = JSON.parse(localStorage.getItem('serviceImages')) || {};
    
    servicesData.forEach(service => {
        // Используем сохраненное изображение или изображение по умолчанию
        const serviceImage = savedServiceImages[service.id] || service.image;
        
        // Добавление в основную сетку услуг
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.style.backgroundImage = `url(${serviceImage})`;
        serviceItem.innerHTML = `
            <div class="service-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            </div>
        `;
        servicesGrid.appendChild(serviceItem);
        
        // Добавление в админ-панель
        const adminItem = document.createElement('div');
        adminItem.className = 'service-admin-item';
        adminItem.innerHTML = `
            <h4>${service.name}</h4>
            <div class="service-preview" id="preview-${service.id}" style="background-image: url(${serviceImage})">
                ${serviceImage ? '' : 'Нет изображения'}
            </div>
            <input type="file" id="file-${service.id}" accept="image/*" class="service-file-input">
            <button class="admin-btn set-service-image" data-service="${service.id}">Установить изображение</button>
            <button class="admin-btn secondary remove-service-image" data-service="${service.id}" style="margin-top: 5px; ${!savedServiceImages[service.id] ? 'display: none;' : ''}">Удалить изображение</button>
        `;
        servicesAdmin.appendChild(adminItem);
    });
    
    // Добавляем обработчики для кнопок установки изображений услуг
    document.querySelectorAll('.set-service-image').forEach(button => {
        button.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            const fileInput = document.getElementById(`file-${serviceId}`);
            
            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const savedServiceImages = JSON.parse(localStorage.getItem('serviceImages')) || {};
                    savedServiceImages[serviceId] = e.target.result;
                    localStorage.setItem('serviceImages', JSON.stringify(savedServiceImages));
                    
                    // Обновляем превью
                    const preview = document.getElementById(`preview-${serviceId}`);
                    preview.style.backgroundImage = `url(${e.target.result})`;
                    preview.textContent = '';
                    
                    // Показываем кнопку удаления
                    const removeBtn = document.querySelector(`.remove-service-image[data-service="${serviceId}"]`);
                    if (removeBtn) removeBtn.style.display = 'block';
                    
                    // Обновляем основную сетку услуг
                    loadServices();
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        });
    });
    
    // Добавляем обработчики для кнопок удаления изображений услуг
    document.querySelectorAll('.remove-service-image').forEach(button => {
        button.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            const savedServiceImages = JSON.parse(localStorage.getItem('serviceImages')) || {};
            delete savedServiceImages[serviceId];
            localStorage.setItem('serviceImages', JSON.stringify(savedServiceImages));
            
            // Обновляем превью
            const preview = document.getElementById(`preview-${serviceId}`);
            if (preview) {
                const defaultImage = servicesData.find(s => s.id === serviceId).image;
                preview.style.backgroundImage = `url(${defaultImage})`;
                preview.textContent = '';
            }
            
            // Скрываем кнопку удаления
            this.style.display = 'none';
            
            // Обновляем основную сетку услуг
            loadServices();
        });
    });
}

// Сохранение текстовых изменений
const saveTextBtn = document.getElementById('saveTextBtn');
if (saveTextBtn) {
    saveTextBtn.addEventListener('click', function() {
        const title = document.getElementById('siteTitle').value;
        const subtitle = document.getElementById('siteSubtitle').value;
        const phone = document.getElementById('sitePhone').value;
        const hours = document.getElementById('siteHours').value;
        
        document.getElementById('mainTitle').textContent = title;
        document.getElementById('mainSubtitle').textContent = subtitle;
        document.getElementById('footerPhone').textContent = phone;
        document.querySelector('.phone-link').textContent = phone;
        document.getElementById('footerHours').textContent = hours;
        
        // Сохранение в localStorage
        localStorage.setItem('siteTitle', title);
        localStorage.setItem('siteSubtitle', subtitle);
        localStorage.setItem('sitePhone', phone);
        localStorage.setItem('siteHours', hours);
        
        alert('Изменения сохранены!');
    });
}

// Загрузка сохраненных текстовых данных
window.addEventListener('load', function() {
    const title = localStorage.getItem('siteTitle');
    const subtitle = localStorage.getItem('siteSubtitle');
    const phone = localStorage.getItem('sitePhone');
    const hours = localStorage.getItem('siteHours');
    
    if (title) {
        document.getElementById('mainTitle').textContent = title;
        document.getElementById('siteTitle').value = title;
    }
    
    if (subtitle) {
        document.getElementById('mainSubtitle').textContent = subtitle;
        document.getElementById('siteSubtitle').value = subtitle;
    }
    
    if (phone) {
        document.getElementById('footerPhone').textContent = phone;
        document.querySelector('.phone-link').textContent = phone;
        document.getElementById('sitePhone').value = phone;
    }
    
    if (hours) {
        document.getElementById('footerHours').textContent = hours;
        document.getElementById('siteHours').value = hours;
    }
});

// Модальное окно для просмотра изображений
function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').classList.add('active');
}

const modalClose = document.getElementById('modalClose');
if (modalClose) {
    modalClose.addEventListener('click', function() {
        document.getElementById('imageModal').classList.remove('active');
    });
}

const imageModal = document.getElementById('imageModal');
if (imageModal) {
    imageModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
}

// Анимации при скролле
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми секциями с контентом
    document.querySelectorAll('.content section, .highlight, .booking-form, .map-container, .reviews-section, .parking-scheme-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}