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




        beaverScheduleHeading: 'Beaver Schedule (Associated with OIOI)',
        beaverScheduleItem2: '4-5 October: Beaver Experimental Competition (in schools)',
        beaverScheduleItem3: '8-10 October: Actual Beaver competition (in schools)',
        beaverScheduleItem4: '11 October: Selection of the best 200 people for OIOI initial training',
        beaverScheduleItem5: '11-16 October: Initial training (At the governorate level)',
        beaverScheduleItem6: '17-18 October: Selecting the best 50 people through a competition held at the end of the initial training for OIOI contest',


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

        beaverScheduleHeading: 'جدول مسابقة القندس (مرتبط بـ OIOI)',
        beaverScheduleItem1: '27 سبتمبر - 2 أكتوبر: بدء عملية التسجيل',
        beaverScheduleItem2: '4-5 أكتوبر: مسابقة القندس التجريبية (في المدارس)',
        beaverScheduleItem3: '8-10 أكتوبر: مسابقة القندس الفعلية (في المدارس)',
        beaverScheduleItem4: '11 أكتوبر: اختيار أفضل 200 شخص للتدريب الأولي في OIOI',
        beaverScheduleItem5: '11-16 أكتوبر: التدريب الأولي (على مستوى المحافظة)',
        beaverScheduleItem6: '17-18 أكتوبر: اختيار أفضل 50 شخصًا من خلال مسابقة تقام في نهاية التدريب الأولي لمسابقة OIOI',



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