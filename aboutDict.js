const translations = {
    en: {
        home: "Home",
        about: "About",
		reg: "Registration",
		contact: "Contact",
		sponsor: "SPONSORSHIP",
		aboutTitle: 'About',
		aboutDescription1: 'Oman Code Race is concerned with preparing and qualifying young people for jobs related to information technology in general and programming in particular during a group of programming competitions.',
		aboutDescription2: 'The idea of OCR revolves around participants (either individuals or teams) solving a set of real-life problems in various domains by designing highly efficient algorithms and implementing them on a computer using one of the prominent programming languages (C++, Java, Python). The competition spans a specific time frame, typically ranging from three to five hours, and comprises a number of problems of varying difficulty levels, ranging from eight to fifteen problems.',
		
		ocrObjectivesTitle: 'OCR Objectives',
		objective1: 'Creating a qualified generation of Omani youth for various tech jobs.',
		objective2: 'Developing programming and problem-solving skills with algorithms and languages.',
		objective3: 'Training the next generation for teamwork and pressure handling.',
		objective4: 'Introducing the latest algorithms for real-life projects.',
		objective5: 'Networking, sharing experiences, and forming groups for regional projects.',
		footerSponsoredBy: 'Sponsored by <a href="https://oq.com/en">OQ,</a>',
		  footerOperatedBy: 'Operated by <a href="https://mtcit.gov.om/">MTCIT,</a>',
		  footerPoweredBy: 'Powered by <a href="https://www.ca-oman.com/">Code Academy-Oman</a>',
		  footerUsefulLinks: 'Useful Links',
		  footerCodeforces: 'Codeforces',
		  footerCodechef: 'Codechef',
		  footerHackerRank: 'Heckerrank',
		  footerGeeksforGeeks: 'GeeksforGeeks',
		  footerInternationalContests: 'International programming contests',
		  footerICPC: 'International Collegiate Programming Contest (ICPC)',
		  footerIOI: 'International Olympiad in Informatics (IOI)',
		  footerBebras: 'Bebras Competition',
		  footerContact: 'Contact',
		  footerAddress: 'J4JP+VR, Seeb, Mabeela North',
		  footerEmail: 'info@ca-oman.net',
		  footerPhone: '+968 97451004',
		  footerCopyright: '&copy;2023. All Right Reserved',
  
        selectLanguage: "Select a language",
        english: "English",
        arabic: "Arabic",
    },
    ar: {
        home: "الصفحة الرئيسية",
        about: "من نحن",
		reg: "التسجيل",
		contact: "التواصل",
		sponsor: "الدعم",
		aboutTitle: 'معلومات عن سباق عمان للبرمجة',
		aboutDescription1: 'تهتم سباق الشيفرة عمان بإعداد وتأهيل الشباب للوظائف المتعلقة بتقنية المعلومات بشكل عام وبرمجة بشكل خاص خلال مجموعة من مسابقات البرمجة.',
		aboutDescription2: 'تدور فكرة سباق الشيفرة عمان حول مشاركين (سواء أفرادًا أو فرقًا) يحلون مجموعة من المشكلات الواقعية في مجموعة متنوعة من المجالات من خلال تصميم خوارزميات فعّالة للغاية وتنفيذها على الكمبيوتر باستخدام إحدى لغات البرمجة البارزة (C ++، Java، Python). تمتد المسابقة على فترة زمنية محددة عادة تتراوح من ثلاث إلى خمس ساعات، وتتضمن عددًا من المشكلات بمستويات صعوبة متنوعة، تتراوح عادة من ثمانية إلى خمسة عشر مشكلة.',
		ocrObjectivesTitle: 'أهداف سباق الشيفرة عمان',
		objective1: 'إعداد جيل مؤهل من الشباب العمانيين للوظائف التقنية المتنوعة.',
		objective2: 'تطوير مهارات البرمجة وحل المشكلات باستخدام الخوارزميات واللغات.',
		objective3: 'تدريب الجيل القادم على العمل الجماعي والتعامل مع ضغوط العمل.',
		objective4: 'تقديم أحدث الخوارزميات لمشاريع الحياة الواقعية.',
		objective5: 'بناء شبكات ومشاركة الخبرات وتشكيل مجموعات لمشاريع إقليمية.',
		  footerSponsoredBy: 'برعاية <a href="https://oq.com/en">OQ,</a>',
		  footerOperatedBy: 'تشغيل بواسطة <a href="https://mtcit.gov.om/">MTCIT,</a>',
		  footerPoweredBy: 'مدعوم بواسطة <a href="https://www.ca-oman.com/">أكاديمية الشيفرة-عمان</a>',
		  footerUsefulLinks: 'روابط مفيدة',
		  footerCodeforces: 'Codeforces',
		  footerCodechef: 'Codechef',
		  footerHackerRank: 'Heckerrank',
		  footerGeeksforGeeks: 'GeeksforGeeks',
		  footerInternationalContests: 'مسابقات البرمجة الدولية',
		  footerICPC: 'المسابقة الجامعية الدولية للبرمجة (ICPC)',
		  footerIOI: 'الأولمبياد الدولي في البرمجة (IOI)',
		  footerBebras: 'مسابقة بيبراس',
		  footerContact: 'تواصل معنا',
		  footerAddress: 'J4JP+VR، السيب، مبيلة الشمالية',
		  footerEmail: 'info@ca-oman.net',
		  footerPhone: '+968 97451004',
		  footerCopyright: '&copy;2023. جميع الحقوق محفوظة',
		
        selectLanguage: "إختر لغة",
        english: "الانجليزية",
        arabic: "العربية",
    },
};


const languageSelector = document.getElementById("selectLang");
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
});
document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationKey];
    });



    document.dir = language === "ar" ? "rtl" : "ltr";

    "Conditions if its ltr"
    if (document.dir === "ltr") {

        var targetElements = document.querySelectorAll("#toRight");
        for (var i = 0; i < targetElements.length; i++) {
            targetElements[i].style.textAlign = "left";
        }
    }
    if (document.dir === "ltr") {

        var targetElements = document.querySelectorAll("#toRight");
        for (var i = 0; i < targetElements.length; i++) {
            targetElements[i].style.textAlign = "left";
        }
    }

    "Conditions if its rtl"
    if (document.dir === "rtl") {
        var targetElements = document.querySelectorAll("#toRight2");
        for (var i = 0; i < targetElements.length; i++) {
            targetElements[i].style.textAlign = "right";
        }
    }
    if (document.dir === "rtl") {

        var targetElements = document.querySelectorAll("#toRight");
        for (var i = 0; i < targetElements.length; i++) {
            targetElements[i].style.textAlign = "right";
        }
        document.getElementById("myP").dir = "ltr";
    }



};