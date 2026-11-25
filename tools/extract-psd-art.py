# One-off: pulls engraving elements out of the poster PSD into assets-src/art/ (white ink on transparent),
# plus the full-colour reaper head used for the favicon (assets-src/logos/favicon-reaper.png).
# The PSDs live in psd/ (gitignored, ~400 MB). Re-run only if the artwork changes:
#   pip install psd-tools
#   python tools/extract-psd-art.py
# npm run assets then tints, fades and sizes these masters for the web.
from pathlib import Path
from psd_tools import PSDImage
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent.parent
psd = PSDImage.open(ROOT / 'psd' / 'SLAUGHTER FEST 2026 colour.psd')
layers = {l.name: l for l in psd.descendants() if l.kind == 'pixel'}


def full_alpha(name):
    """A layer's alpha channel placed on the full canvas."""
    l = layers[name]
    canvas = Image.new('L', (psd.width, psd.height), 0)
    canvas.paste(l.topil().convert('RGBA').getchannel('A'), (l.left, l.top))
    return canvas


ink = full_alpha('4')  # the black line-art layer: the whole engraving
masks = {
    'mammoth': full_alpha('Layer 10'),  # silhouettes of both mammoths and the bone pile
    # armour and spear (Layer 11) plus the red cloak and hood (Layer 15; its two side banners fall outside the crop)
    'reaper': ImageChops.lighter(full_alpha('Layer 11'), full_alpha('Layer 15')),
}

# (name, crop box on the 4961x7016 canvas, mask or None, longest side of the saved master)
parts = [
    ('altar', (99, 1519, 4862, 6681), None, 2400),
    ('crown', (1508, 1754, 3438, 2877), None, 1600),
    ('mammoth', (3087, 3420, 4876, 4911), 'mammoth', 1600),
    ('reaper', (1789, 2380, 3298, 5332), 'reaper', 1600),
]

out = ROOT / 'assets-src' / 'art'
out.mkdir(parents=True, exist_ok=True)
for name, box, mask, size in parts:
    a = ink.crop(box)
    if mask:
        a = ImageChops.multiply(a, masks[mask].crop(box))
    bbox = a.getbbox()
    a = a.crop(bbox)
    a.thumbnail((size, size), Image.Resampling.LANCZOS)
    img = Image.new('RGBA', a.size, (255, 255, 255, 0))
    img.putalpha(a)
    img.save(out / f'engraving-{name}.png', optimize=True)
    print(name, a.size)

# Favicon: the reaper's red hood and skull face in full colour, cut out of the composite with the cloak (Layer 15)
# and bone (Layer 10) silhouettes, squared up and cropped in so the face reads at tab size.
colour = psd.composite().convert('RGBA')
box = (2440, 2900, 3060, 3460)
head = colour.crop(box)
head.putalpha(ImageChops.multiply(head.getchannel('A'), ImageChops.lighter(full_alpha('Layer 15'), full_alpha('Layer 10')).crop(box)))
head = head.crop(head.getchannel('A').point(lambda v: 255 if v > 60 else 0).getbbox())
s = max(head.size)
square = Image.new('RGBA', (s, s), (0, 0, 0, 0))
square.paste(head, ((s - head.width) // 2, (s - head.height) // 2))
c = int(s * 0.8)  # tighter square, nudged towards the face
left, top = max(0, min(s - c, int(0.57 * s - c / 2))), max(0, min(s - c, int(0.45 * s - c / 2)))
icon = square.crop((left, top, left + c, top + c)).resize((512, 512), Image.Resampling.LANCZOS)
icon.save(ROOT / 'assets-src' / 'logos' / 'favicon-reaper.png', optimize=True)
print('favicon-reaper', icon.size)
