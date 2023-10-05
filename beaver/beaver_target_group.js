const translations = {
    en: {
        home: "Home",
        about: "About",
        reg: "Registration",
        contact: "Contact",
        sponsor: "SPONSORSHIP",

        navOverview: 'Overview',
        navObjectives: 'Objectives',
        navSchedule: 'Schedule',
        navTargetGroup: 'Target Group',
        navPastProblems: 'Past Problems',
        navGallery: 'Gallery',
        navRegister: 'Register',
        beaverTarget: 'Beaver Target Group',
        beaverTargetP: 'Students in Oman\'s educational system from the third primary grade to the third secondary grade',

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


        navOverview: 'نظرة عامة',
        navObjectives: 'أهداف المسابقة',
        navSchedule: 'الجدول الزمني',
        navTargetGroup: 'الفئة المستهدفة',
        navPastProblems: 'الأسئلة السابقة',
        navGallery: 'معرض الصور',
        navRegister: 'للتسجيل',

        beaverTarget: 'الفئة المستهدفة',
        beaverTargetP:'طلاب النظام التعليمي في عمان من الصف الثالث الابتدائي إلى الصف الثالث الثانوي',

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

    //"Conditions if its ltr"
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

 //   "Conditions if its rtl"
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
        // document.getElementById("myP").dir = "ltr";
    }



};