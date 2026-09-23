from PIL import Image
import os
import shutil

P = r"C:\Users\ademy\Desktop\project web\adem yac main v2\public\projects"
M = r"C:\Users\ademy\Pictures\maquette app"


def save_png(src: str, dst: str) -> None:
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    im = Image.open(src)
    im.load()
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.mode else "RGB")
    tmp = dst + ".tmp"
    im.save(tmp, "PNG", optimize=True)
    os.replace(tmp, dst)
    print("PNG", os.path.getsize(dst), os.path.basename(dst))


# FinTrack
save_png(os.path.join(M, "fintrack", "visuels", "fintrack-mockup-dashboard.png"), os.path.join(P, "fintrack", "cover.png"))
for i, name in enumerate(["screen5.png", "screen6.png", "screen7.png", "screen8.png", "screen9.png", "screen10.png"], start=1):
    save_png(os.path.join(M, "fintrack", name), os.path.join(P, "fintrack", f"g{i}.png"))

# King
save_png(os.path.join(M, "king livrison", "00-cover-portfolio.png"), os.path.join(P, "king-livraison", "cover.png"))
king_shots = [
    ("01-landing-desktop.png", "g1.png"),
    ("02-landing-fullpage.png", "g2.png"),
    ("03-login-desktop.png", "g3.png"),
    ("05-dashboard-redirect.png", "g4.png"),
    ("09-maquette-gps.png", "g5.png"),
    ("10-maquette-livraisons.png", "g6.png"),
    ("11-maquette-dashboard.png", "g7.png"),
]
for src, dst in king_shots:
    save_png(os.path.join(M, "king livrison", src), os.path.join(P, "king-livraison", dst))

# Mecad
save_png(os.path.join(M, "mecad", "cover-portfolio.png"), os.path.join(P, "mecad", "cover.png"))
mecad_shots = [
    ("01-accueil-desktop.png", "g1.png"),
    ("02-boutique-desktop.png", "g2.png"),
    ("03-produit-desktop.png", "g3.png"),
    ("04-panier-desktop.png", "g4.png"),
    ("05-checkout-desktop.png", "g5.png"),
    ("06-support-desktop.png", "g6.png"),
    ("07-mecad-desktop.png", "g7.png"),
]
for src, dst in mecad_shots:
    save_png(os.path.join(M, "mecad", src), os.path.join(P, "mecad", dst))

# StudyAI — keep cover, replace gallery
for i, name in enumerate(
    ["screen2.png", "screen3.png", "screen4.png", "screen5.png", "screen6.png", "screen7.png", "screen8.png", "screen9.png"],
    start=1,
):
    save_png(os.path.join(M, "studi ai", name), os.path.join(P, "studyai", f"g{i}.png"))

# ZKTeco
save_png(os.path.join(M, "zkteco", "cover-portfolio.png"), os.path.join(P, "nexteco", "cover.png"))
zk = [
    "photo_5839153316637035972_y.jpg",
    "photo_5839153316637035975_y.jpg",
    "photo_5839153316637035969_y.jpg",
    "photo_5839153316637035971_y.jpg",
]
for i, name in enumerate(zk, start=1):
    save_png(os.path.join(M, "zkteco", name), os.path.join(P, "nexteco", f"g{i}.png"))

print("done")
