# globalmaptiles

ported JavaScript version of the script "Tiles à la Google Maps: Coordinates, Tile Bounds and Projection" from http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/

## Testing
You can ran the test with node or python directly:
```bash
node test.js
python test.py
```

> [!NOTE]
> Please note that currently the "PixelsToMeters" test fails. This is due to a rounding error meaning the least significant decimal is out.
