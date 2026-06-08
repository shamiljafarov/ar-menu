=== MODEL FAYLLARI ===

Hər yemək üçün 2 fayl bu qovluğa atılır:
  <id>.glb   -> Android (Scene Viewer) + 3D görüntü
  <id>.usdz  -> iOS AR (Quick Look: Safari VƏ Chrome)

Fayl adı yeməyin id-si ilə eyni olmalıdır (lib/dishes.ts-dəki id).
Məsələn Şah Plov üçün:  plov.glb  və  plov.usdz

Lazım olan fayl adları (20 yemək):
  plov, lule-kabab, tike-kabab, toyuq-lavengi,
  yarpaq-dolmasi, badimcan-dolmasi, kelem-dolmasi,
  piti, bozbash, dovga,
  xengel, dushbere, qutab,
  kuku, saj-ici,
  paxlava, sekerbura, firni,
  pizza, burger

Fayl yoxdursa, app avtomatik placeholder.glb göstərir (kod dəyişmir).
Faylı atan kimi həmin yemək real model göstərir.

VACİB (iOS Chrome): iOS-da AR-ın Chrome-da da işləməsi üçün
.usdz REAL fayl olmalıdır (bu qovluqda). Avtomatik blob iOS Chrome-da işləmir.
.glb -> .usdz çevirmə: Mac-də Reality Converter (pulsuz).
