const translations = {
    en: {
        home: "Home",
        about: "About",
        reg: "Registration",
        contact: "Contact",
        sponsor: "SPONSORSHIP",

        sponsorshipHeading: "Become Sponsor",
        sponsorshipMessage: "If you wish to sponsor OCR, We greatly appreciate your support and we are excited to explore partnership opportunities that can make this event even more successful. Please fill the following form, and we will be in contact with you shortly.",
        fullName: "Full Name",
        personPosition: "Person's Position",
        companyName: "Company's Name",
        companyField: "Company Field",
        email: "Email",
        mobile: "Mobile",
        specialNote: "Special Note",
        submitBtn: "Submit",



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
        sponsorshipHeading: "كُن راعياً",
        sponsorshipMessage: "إذا كنت ترغب في رعاية سباق عمان للبرمجة (OCR)، فنحن نقدر دعمك بشدة ونحن متحمسون لاستكشاف فرص الشراكة التي يمكن أن تجعل هذا الحدث أكثر نجاحًا. الرجاء ملء الاستمارة التالية، وسنتواصل معك قريبًا.", // Add the Arabic translation for the message
        fullName: "الاسم الكامل",
        personPosition: "مسمى الوظيفي",
        companyName: "اسم الشركة",
        companyField: "مجال الشركة",
        email: "البريد الإلكتروني",
        mobile: "رقم التواصل",
        specialNote: "ملاحظة",
        submitBtn: "إرسال",

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