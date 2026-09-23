from pypdf import PdfReader
import os

files = [
    r"C:\Users\ademy\Desktop\adem travil\Adem_Yacef (Français).pdf",
    r"C:\Users\ademy\Desktop\adem travil\Adem_Yacef(English).pdf",
    r"C:\Users\ademy\Pictures\Adel Yazid Amara _ Développeur Full-Stack.pdf",
]
out = r"C:\Users\ademy\Desktop\project web\adem yac main v2\scripts\cv-extract.txt"
chunks = []
for path in files:
    chunks.append("\n\n======== " + os.path.basename(path) + " ========\n")
    reader = PdfReader(path)
    for i, page in enumerate(reader.pages):
        chunks.append(f"\n--- page {i+1} ---\n")
        chunks.append(page.extract_text() or "")
text = "".join(chunks)
with open(out, "w", encoding="utf-8") as f:
    f.write(text)
print("wrote", out, "chars", len(text))
