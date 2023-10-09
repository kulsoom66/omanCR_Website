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


        beaverOverviewTitle: 'Beaver Overview',
        beaverOverviewDescription: 'The Beaver Challenge is a global program that seeks to foster the understanding of informatics and computational thinking among students of various ages in schools worldwide. With a presence in more than 50 countries and a participation of 3 million students, this initiative is specifically designed to ignite enthusiasm for the field of computing in every student.',


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


        navOverview: 'نظرة العامة', 
        navObjectives: 'أهداف المسابقة',
        navSchedule: 'الجدول الزمني',
        navTargetGroup: 'الفئة المستهدفة',
        navPastProblems: 'الأسئلة السابقة',
        navGallery: 'معرض الصور',
        navRegister: 'للتسجيل',

        beaverOverviewTitle: 'نظرة عامة على مسابقة القندس',
        beaverOverviewDescription: 'تعتبر تحديات البيفر برنامجًا عالميًا يسعى إلى تعزيز فهم علوم الحاسوب والتفكير الحسابي بين طلاب مختلف الأعمار في المدارس في جميع أنحاء العالم. بوجوده في أكثر من 50 دولة ومشاركة 3 ملايين طالب، صمم هذه المبادرة خصيصًا لإشعال حماسة في مجال الحوسبة لدى كل طالب.',

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