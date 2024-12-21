const englishTOarabic = document.querySelector('.arabic');
const arabicToEnglish = document.querySelector(".english");
const testo = document.getElementById('test')
const heading =document.querySelector('.heading');

englishTOarabic.addEventListener('click',
    function(){
        testo.textContent =
          "البرمجة ليست مجرد كتابة التعليمات البرمجية، بل تتعلق بصياغة الحلول وحل المشكلات المعقدة وتحويل الأفكار إلى واقع. كل سطر من التعليمات البرمجية يشبه ضربة الفرشاة على قماش، وكل خوارزمية هي لبنة بناء للابتكار. سواء كنت تقوم بتصميم مواقع الويب أو تطوير التطبيقات أو التعمق في علم البيانات";  
   
    }

)
englishTOarabic.addEventListener("click", function () {
  heading.textContent =
    "اهلا يا شباب 😀"
});
arabicToEnglish.addEventListener("click", function () {
  testo.textContent ="Programming is more than just writing code—it's about crafting solutions, solving complex problems, and transforming ideas into reality. Every line of code is like a brushstroke on a canvas, each algorithm a building block of innovation. Whether you're designing websites, developing apps, or diving into data science";
});
arabicToEnglish.addEventListener("click", function () {
  heading.textContent = "Hello Guys😀"
});



const sectionHeroEl = document.querySelector(".landing-section");

if (sectionHeroEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  obs.observe(sectionHeroEl);
} else {
  console.error("Element .landing-section not found!");
}


