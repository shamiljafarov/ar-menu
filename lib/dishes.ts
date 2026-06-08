export type Category =
  | "Plov & Kabablar"
  | "Dolmalar"
  | "Şorbalar"
  | "Xəmir xörəkləri"
  | "Qəlyanaltı"
  | "Şirniyyatlar"
  | "Fast Food";

export type Dish = {
  id: string;          // model fayl adı: public/models/<id>.glb və <id>.usdz
  name: string;
  price: number;       // AZN
  description: string;
  category: Category;
};

// Model faylları id-yə görə avtomatik tapılır:
//   public/models/<id>.glb   -> Android (Scene Viewer) + 3D
//   public/models/<id>.usdz  -> iOS (Quick Look: Safari + Chrome)
// Fayl yoxdursa, avtomatik placeholder göstərilir.

export const dishes: Dish[] = [
  // ---- Plov & Kabablar ----
  { id: "plov", name: "Şah Plov", price: 18, category: "Plov & Kabablar",
    description: "Zəfəranlı düyü, qazmaq, quru meyvə və ətlə hazırlanan bayram plovu." },
  { id: "lule-kabab", name: "Lülə Kabab", price: 12, category: "Plov & Kabablar",
    description: "Mangalda bişmiş çəkilmiş ət kababı, soğan və göyərti ilə." },
  { id: "tike-kabab", name: "Tikə Kabab", price: 14, category: "Plov & Kabablar",
    description: "Marinad edilmiş quzu tikələri, közün üstündə bişmiş." },
  { id: "toyuq-lavengi", name: "Toyuq Lavəngi", price: 13, category: "Plov & Kabablar",
    description: "Qoz-ləpə və soğan içlikli, sobada bişmiş Lənkəran toyuğu." },

  // ---- Dolmalar ----
  { id: "yarpaq-dolmasi", name: "Yarpaq Dolması", price: 11, category: "Dolmalar",
    description: "Üzüm yarpağına bükülmüş ətli düyü, sarımsaqlı qatıqla." },
  { id: "badimcan-dolmasi", name: "Üç Bacı Dolması", price: 12, category: "Dolmalar",
    description: "Badımcan, bibər və pomidorun ətli içliklə dolması." },
  { id: "kelem-dolmasi", name: "Kələm Dolması", price: 11, category: "Dolmalar",
    description: "Kələm yarpağına bükülmüş ədviyyatlı ət və düyü." },

  // ---- Şorbalar ----
  { id: "piti", name: "Piti", price: 10, category: "Şorbalar",
    description: "Şəki üsulu, dulusda bişmiş quzu, noxud və zəfəranla." },
  { id: "bozbash", name: "Bozbaş", price: 9, category: "Şorbalar",
    description: "Quzu ətli, noxudlu və alçalı ənənəvi şorba." },
  { id: "dovga", name: "Dovğa", price: 6, category: "Şorbalar",
    description: "Qatıq, göyərti və noxud əsaslı isti milli şorba." },

  // ---- Xəmir xörəkləri ----
  { id: "xengel", name: "Xəngəl", price: 9, category: "Xəmir xörəkləri",
    description: "Geniş xəmir parçaları, qovrulmuş ət, soğan və qatıqla." },
  { id: "dushbere", name: "Düşbərə", price: 9, category: "Xəmir xörəkləri",
    description: "Ətli xırda mərcimək, sirkəli sarımsaqla verilir." },
  { id: "qutab", name: "Qutab", price: 7, category: "Xəmir xörəkləri",
    description: "Nazik xəmirdə göyərti, ət və ya balqabaq içlikli." },

  // ---- Qəlyanaltı ----
  { id: "kuku", name: "Göyərti Kükü", price: 8, category: "Qəlyanaltı",
    description: "Bol göyərti və yumurtadan hazırlanan Azərbaycan küküsü." },
  { id: "saj-ici", name: "Sac İçi", price: 16, category: "Qəlyanaltı",
    description: "Sacda qovrulmuş ət, kartof, bibər və pomidor." },

  // ---- Şirniyyatlar ----
  { id: "paxlava", name: "Bakı Paxlavası", price: 5, category: "Şirniyyatlar",
    description: "Qoz, şəkər və zəfəranla romb şəkilli ənənəvi paxlava." },
  { id: "sekerbura", name: "Şəkərbura", price: 4, category: "Şirniyyatlar",
    description: "Qoz-şəkər içlikli, naxışlı Novruz şirniyyatı." },
  { id: "firni", name: "Firni", price: 5, category: "Şirniyyatlar",
    description: "Düyü unu və süddən hazırlanan, darçınlı yumşaq desert." },

  // ---- Fast Food ----
  { id: "pizza", name: "Pizza Margherita", price: 15, category: "Fast Food",
    description: "Pomidor sousu, mozzarella və təzə reyhan." },
  { id: "burger", name: "Klassik Burger", price: 13, category: "Fast Food",
    description: "Mal əti kotleti, çeddar, marul, pomidor və ev sousu." },
];

export const categoryOrder: Category[] = [
  "Plov & Kabablar",
  "Dolmalar",
  "Şorbalar",
  "Xəmir xörəkləri",
  "Qəlyanaltı",
  "Şirniyyatlar",
  "Fast Food",
];

export function getDish(id: string): Dish | undefined {
  return dishes.find((d) => d.id === id);
}
