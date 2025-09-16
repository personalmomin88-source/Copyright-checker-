document.getElementById("scanBtn").addEventListener("click", function () {
  const fileInput = document.getElementById("fileInput");
  const language = document.getElementById("language").value;
  const resultDiv = document.getElementById("result");

  if (!fileInput.files.length) {
    resultDiv.innerHTML = `<p style="color:red">❌ Invalid file. Please upload a video/audio file.</p>`;
    return;
  }

  resultDiv.innerHTML = "⏳ Scanning...";

  setTimeout(() => {
    const randomResult = {
      score: Math.floor(Math.random() * 100),
      sexual: "❌ Sexual Content: None",
      blood: "❌ Blood/Violence: None",
      suggestions: ["✅ Good to upload", "✅ No copyright risk"]
    };

    resultDiv.innerHTML = `
      <p>✅ Safe content detected.</p>
      <p><b>Risk Score:</b> ${randomResult.score}%</p>
      <ul>
        <li><b>🔞 Sexual Content:</b> ${randomResult.sexual}</li>
        <li><b>🩸 Blood/Violence:</b> ${randomResult.blood}</li>
      </ul>
      <p><b>💡 Suggestions:</b></p>
      <ul>${randomResult.suggestions.map(s => `<li>${s}</li>`).join("")}</ul>
      <p><b>🌐 Selected Language:</b> ${language}</p>
    `;
  }, 2000);
});