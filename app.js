const pages = {
https://youtube.com/playlist⁠�? list=PLIYTXo8yTobQ" target="_blank">चैंटिंग वीडियो देखने के लिए यहाँ क्लिक करें '] ["चैंटिंग", "आपकी गैलरी में सेव चैंटिंग ऑडियो बाद में यहाँ जोड़े जा सकते हैं। अभी यह सेक्शन तैयार है।"],
  https://youtube.com/playlist?list=PLIYTXo8yTobQ&si=4jYAkh1Je7PDjE1E
  videos: ["वीडियो", "आपके YouTube वीडियो के लिंक यहाँ जोड़े जा सकते हैं।"],
  calendar: ["बौद्ध कैलेंडर", "बौद्ध पर्व, धम्मचक्र प्रवर्तन दिन, बुद्ध पूर्णिमा और अन्य विशेष तिथियाँ यहाँ जोड़ी जा सकती हैं।"],
  dhamma: ["बुद्ध धम्म", "धम्मपद, बुद्ध के उपदेश, जातक कथाएँ और सरल हिंदी लेख यहाँ प्रकाशित किए जा सकते हैं।"],
  about: ["ऐप के बारे में", "यह ऐप बुद्ध के धम्म, चैंटिंग और बौद्ध संस्कृति की सामग्री एक जगह उपलब्ध कराने के उद्देश्य से बनाया जा रहा है।"]
};
const content = document.getElementById("content");
document.querySelectorAll(".tile").forEach(btn => btn.addEventListener("click", () => {
  const [title, body] = pages[btn.dataset.page];
  document.getElementById("page-title").textContent = title;
  document.getElementById("page-body").innerHTML = `<p class="placeholder">${body}</p>`;
  document.querySelector(".grid").hidden = true;
  document.querySelector(".intro").hidden = true;
  content.hidden = false;
  window.scrollTo({top: content.offsetTop - 10, behavior:"smooth"});
}));
document.getElementById("back").addEventListener("click", () => {
  content.hidden = true;
  document.querySelector(".grid").hidden = false;
  document.querySelector(".intro").hidden = false;
});
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(()=>{}));
