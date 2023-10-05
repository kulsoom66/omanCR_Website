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

        beaverObjectivesHeading: 'Beaver Objectives',
        beaverObjectivesListItem1: 'Enhances the ability to solve problems',
        beaverObjectivesListItem2: 'Testing student\'s capacity for problem-solving',
        beaverObjectivesListItem3: 'Learn indirect ways to use methodical solutions',
        beaverObjectivesListItem4: 'Time and stress management',

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

        beaverObjectivesHeading: 'أهداف مسابقة القندس',
        beaverObjectivesListItem1: 'تعزز القدرة على حل المشكلات',
        beaverObjectivesListItem2: 'اختبار قدرة الطالب على حل المشكلات',
        beaverObjectivesListItem3: 'تعلم الطرق غير المباشرة لاستخدام الحلول المنهجية',
        beaverObjectivesListItem4: 'إدارة الوقت والضغوط',

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