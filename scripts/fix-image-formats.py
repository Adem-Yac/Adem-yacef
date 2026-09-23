from PIL import Image
import os

root = os.path.join(os.path.dirname(__file__), "..", "public", "projects")
root = os.path.abspath(root)
fixed = []
errors = []


def kind_of(path: str) -> str:
    with open(path, "rb") as f:
        b = f.read(16)
    if b.startswith(b"\x89PNG\r\n\x1a\n"):
        return "PNG"
    if b.startswith(b"\xff\xd8\xff"):
        return "JPEG"
    if len(b) > 12 and b[8:12] == b"WEBP":
        return "WEBP"
    return "OTHER"


for dirpath, _, files in os.walk(root):
    for name in files:
        path = os.path.join(dirpath, name)
        ext = os.path.splitext(name)[1].lower()
        if ext not in {".png", ".jpg", ".jpeg", ".webp"}:
            continue
        kind = kind_of(path)
        size = os.path.getsize(path)
        needs = False
        if name.lower() == "cover.png":
            needs = True
        if ext == ".png" and kind != "PNG":
            needs = True
        elif ext in {".jpg", ".jpeg"} and kind != "JPEG":
            needs = True
        elif ext == ".webp" and kind != "WEBP":
            needs = True
        elif size < 8000:
            needs = True
        if not needs:
            continue
        try:
            im = Image.open(path)
            im.load()
            tmp = path + ".rewritten"
            if ext == ".png":
                if im.mode not in ("RGB", "RGBA"):
                    im = im.convert("RGBA" if "A" in im.mode else "RGB")
                im.save(tmp, "PNG", optimize=True)
            elif ext in {".jpg", ".jpeg"}:
                if im.mode in ("RGBA", "LA", "P"):
                    bg = Image.new("RGB", im.size, (255, 255, 255))
                    rgba = im.convert("RGBA")
                    bg.paste(rgba, mask=rgba.split()[-1])
                    im = bg
                elif im.mode != "RGB":
                    im = im.convert("RGB")
                im.save(tmp, "JPEG", quality=92, optimize=True)
            else:
                im.save(tmp, "WEBP", quality=90)
            os.replace(tmp, path)
            fixed.append(
                f"{kind}->{kind_of(path)} {os.path.getsize(path):8d} {os.path.relpath(path, root)}"
            )
        except Exception as e:
            errors.append(f"{os.path.relpath(path, root)}: {e}")
            leftover = path + ".rewritten"
            if os.path.exists(leftover):
                os.remove(leftover)

print("FIXED", len(fixed))
for line in fixed:
    print(" ", line)
print("ERRORS", len(errors))
for line in errors:
    print(" ", line)

print("\nREMAINING MISMATCHES")
for dirpath, _, files in os.walk(root):
    for name in files:
        path = os.path.join(dirpath, name)
        ext = os.path.splitext(name)[1].lower()
        if ext not in {".png", ".jpg", ".jpeg"}:
            continue
        kind = kind_of(path)
        bad = (ext == ".png" and kind != "PNG") or (
            ext in {".jpg", ".jpeg"} and kind != "JPEG"
        )
        if bad:
            print(" ", kind, os.path.getsize(path), os.path.relpath(path, root))
