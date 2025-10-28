import { sequelize, Pokemon, Type, Team } from "../models/index.js";

async function seedDatabase() {
  try {
    console.log("🌱 Début du seeding...");

    // 1. Insérer les Types
    console.log("📝 Insertion des types...");
    const types = await Type.bulkCreate([
      { id: 1, name: "Acier", color: "aaaabb" },
      { id: 2, name: "Combat", color: "bb5544" },
      { id: 3, name: "Dragon", color: "7766ee" },
      { id: 4, name: "Eau", color: "3399ff" },
      { id: 5, name: "Électrik", color: "ffbb33" },
      { id: 6, name: "Feu", color: "ff4422" },
      { id: 7, name: "Glace", color: "77ddff" },
      { id: 8, name: "Insecte", color: "aabb22" },
      { id: 9, name: "Normal", color: "bbaabb" },
      { id: 10, name: "Plante", color: "77cc55" },
      { id: 11, name: "Poison", color: "aa5599" },
      { id: 12, name: "Psy", color: "ff5599" },
      { id: 13, name: "Roche", color: "bbaa66" },
      { id: 14, name: "Sol", color: "ddbb55" },
      { id: 15, name: "Spectre", color: "6666bb" },
      { id: 16, name: "Ténèbres", color: "665544" },
      { id: 17, name: "Vol", color: "6699ff" },
    ]);
    console.log(`✅ ${types.length} types insérés`);

    // 2. Insérer les Pokémons
    console.log("📝 Insertion des pokémons...");
    const pokemons = await Pokemon.bulkCreate([
      {
        id: 1,
        name: "Bulbizarre",
        hp: 45,
        atk: 49,
        def: 49,
        atk_spe: 65,
        def_spe: 65,
        speed: 45,
      },
      {
        id: 2,
        name: "Herbizarre",
        hp: 60,
        atk: 62,
        def: 63,
        atk_spe: 80,
        def_spe: 80,
        speed: 60,
      },
      {
        id: 3,
        name: "Florizarre",
        hp: 80,
        atk: 82,
        def: 83,
        atk_spe: 100,
        def_spe: 100,
        speed: 80,
      },
      {
        id: 4,
        name: "Salameche",
        hp: 39,
        atk: 52,
        def: 43,
        atk_spe: 60,
        def_spe: 50,
        speed: 65,
      },
      {
        id: 5,
        name: "Reptincel",
        hp: 58,
        atk: 64,
        def: 58,
        atk_spe: 80,
        def_spe: 65,
        speed: 80,
      },
      {
        id: 6,
        name: "Dracaufeu",
        hp: 78,
        atk: 84,
        def: 78,
        atk_spe: 109,
        def_spe: 85,
        speed: 100,
      },
      {
        id: 7,
        name: "Carapuce",
        hp: 44,
        atk: 48,
        def: 65,
        atk_spe: 50,
        def_spe: 64,
        speed: 43,
      },
      {
        id: 8,
        name: "Carabaffe",
        hp: 59,
        atk: 63,
        def: 80,
        atk_spe: 65,
        def_spe: 80,
        speed: 58,
      },
      {
        id: 9,
        name: "Tortank",
        hp: 79,
        atk: 83,
        def: 100,
        atk_spe: 85,
        def_spe: 105,
        speed: 78,
      },
      {
        id: 10,
        name: "Chenipan",
        hp: 45,
        atk: 30,
        def: 35,
        atk_spe: 20,
        def_spe: 20,
        speed: 45,
      },
      {
        id: 11,
        name: "Chrysacier",
        hp: 50,
        atk: 20,
        def: 55,
        atk_spe: 25,
        def_spe: 25,
        speed: 30,
      },
      {
        id: 12,
        name: "Papilusion",
        hp: 60,
        atk: 45,
        def: 50,
        atk_spe: 80,
        def_spe: 80,
        speed: 70,
      },
      {
        id: 13,
        name: "Aspicot",
        hp: 40,
        atk: 35,
        def: 30,
        atk_spe: 20,
        def_spe: 20,
        speed: 50,
      },
      {
        id: 14,
        name: "Coconfort",
        hp: 45,
        atk: 25,
        def: 50,
        atk_spe: 25,
        def_spe: 25,
        speed: 35,
      },
      {
        id: 15,
        name: "Dardargnan",
        hp: 65,
        atk: 80,
        def: 40,
        atk_spe: 45,
        def_spe: 80,
        speed: 75,
      },
      {
        id: 16,
        name: "Roucool",
        hp: 40,
        atk: 45,
        def: 40,
        atk_spe: 35,
        def_spe: 35,
        speed: 56,
      },
      {
        id: 17,
        name: "Roucoups",
        hp: 63,
        atk: 60,
        def: 55,
        atk_spe: 50,
        def_spe: 50,
        speed: 71,
      },
      {
        id: 18,
        name: "Roucarnage",
        hp: 83,
        atk: 80,
        def: 75,
        atk_spe: 70,
        def_spe: 70,
        speed: 91,
      },
      {
        id: 19,
        name: "Rattata",
        hp: 30,
        atk: 56,
        def: 35,
        atk_spe: 25,
        def_spe: 35,
        speed: 72,
      },
      {
        id: 20,
        name: "Rattatac",
        hp: 55,
        atk: 81,
        def: 60,
        atk_spe: 50,
        def_spe: 70,
        speed: 97,
      },
      {
        id: 21,
        name: "Piafabec",
        hp: 40,
        atk: 60,
        def: 30,
        atk_spe: 31,
        def_spe: 31,
        speed: 70,
      },
      {
        id: 22,
        name: "Rapasdepic",
        hp: 65,
        atk: 90,
        def: 65,
        atk_spe: 61,
        def_spe: 61,
        speed: 100,
      },
      {
        id: 23,
        name: "Abo",
        hp: 35,
        atk: 60,
        def: 44,
        atk_spe: 40,
        def_spe: 54,
        speed: 55,
      },
      {
        id: 24,
        name: "Arbok",
        hp: 60,
        atk: 85,
        def: 69,
        atk_spe: 65,
        def_spe: 79,
        speed: 80,
      },
      {
        id: 25,
        name: "Pikachu",
        hp: 35,
        atk: 55,
        def: 30,
        atk_spe: 50,
        def_spe: 40,
        speed: 90,
      },
      {
        id: 26,
        name: "Raichu",
        hp: 60,
        atk: 90,
        def: 55,
        atk_spe: 90,
        def_spe: 80,
        speed: 100,
      },
      {
        id: 27,
        name: "Sabelette",
        hp: 50,
        atk: 75,
        def: 85,
        atk_spe: 20,
        def_spe: 30,
        speed: 40,
      },
      {
        id: 28,
        name: "Sablaireau",
        hp: 75,
        atk: 100,
        def: 110,
        atk_spe: 45,
        def_spe: 55,
        speed: 65,
      },
      {
        id: 29,
        name: "Nidoran F",
        hp: 55,
        atk: 47,
        def: 52,
        atk_spe: 40,
        def_spe: 40,
        speed: 41,
      },
      {
        id: 30,
        name: "Nidorina",
        hp: 70,
        atk: 62,
        def: 67,
        atk_spe: 55,
        def_spe: 55,
        speed: 56,
      },
      {
        id: 31,
        name: "Nidoqueen",
        hp: 90,
        atk: 82,
        def: 87,
        atk_spe: 75,
        def_spe: 85,
        speed: 76,
      },
      {
        id: 32,
        name: "Nidoran M",
        hp: 46,
        atk: 57,
        def: 40,
        atk_spe: 40,
        def_spe: 40,
        speed: 50,
      },
      {
        id: 33,
        name: "Nidorino",
        hp: 61,
        atk: 72,
        def: 57,
        atk_spe: 55,
        def_spe: 55,
        speed: 65,
      },
      {
        id: 34,
        name: "Nidoking",
        hp: 81,
        atk: 92,
        def: 77,
        atk_spe: 85,
        def_spe: 75,
        speed: 85,
      },
      {
        id: 35,
        name: "Melofee",
        hp: 70,
        atk: 45,
        def: 48,
        atk_spe: 60,
        def_spe: 65,
        speed: 35,
      },
      {
        id: 36,
        name: "Melodelfe",
        hp: 95,
        atk: 70,
        def: 73,
        atk_spe: 85,
        def_spe: 90,
        speed: 60,
      },
      {
        id: 37,
        name: "Goupix",
        hp: 38,
        atk: 41,
        def: 40,
        atk_spe: 50,
        def_spe: 65,
        speed: 65,
      },
      {
        id: 38,
        name: "Feunard",
        hp: 73,
        atk: 76,
        def: 75,
        atk_spe: 81,
        def_spe: 100,
        speed: 100,
      },
      {
        id: 39,
        name: "Rondoudou",
        hp: 115,
        atk: 45,
        def: 20,
        atk_spe: 45,
        def_spe: 25,
        speed: 20,
      },
      {
        id: 40,
        name: "Grodoudou",
        hp: 140,
        atk: 70,
        def: 45,
        atk_spe: 75,
        def_spe: 50,
        speed: 45,
      },
      {
        id: 41,
        name: "Nosferapti",
        hp: 40,
        atk: 45,
        def: 35,
        atk_spe: 30,
        def_spe: 40,
        speed: 55,
      },
      {
        id: 42,
        name: "Nosferalto",
        hp: 75,
        atk: 80,
        def: 70,
        atk_spe: 65,
        def_spe: 75,
        speed: 90,
      },
      {
        id: 43,
        name: "Mystherbe",
        hp: 45,
        atk: 50,
        def: 55,
        atk_spe: 75,
        def_spe: 65,
        speed: 30,
      },
      {
        id: 44,
        name: "Ortide",
        hp: 60,
        atk: 65,
        def: 70,
        atk_spe: 85,
        def_spe: 75,
        speed: 40,
      },
      {
        id: 45,
        name: "Rafflesia",
        hp: 75,
        atk: 80,
        def: 85,
        atk_spe: 100,
        def_spe: 90,
        speed: 50,
      },
      {
        id: 46,
        name: "Paras",
        hp: 35,
        atk: 70,
        def: 55,
        atk_spe: 45,
        def_spe: 55,
        speed: 25,
      },
      {
        id: 47,
        name: "Parasect",
        hp: 60,
        atk: 95,
        def: 80,
        atk_spe: 60,
        def_spe: 80,
        speed: 30,
      },
      {
        id: 48,
        name: "Mimitoss",
        hp: 60,
        atk: 55,
        def: 50,
        atk_spe: 40,
        def_spe: 55,
        speed: 45,
      },
      {
        id: 49,
        name: "Aeromite",
        hp: 70,
        atk: 65,
        def: 60,
        atk_spe: 90,
        def_spe: 75,
        speed: 90,
      },
      {
        id: 50,
        name: "Taupiqueur",
        hp: 10,
        atk: 55,
        def: 25,
        atk_spe: 35,
        def_spe: 45,
        speed: 95,
      },
      {
        id: 51,
        name: "Triopikeur",
        hp: 35,
        atk: 80,
        def: 50,
        atk_spe: 50,
        def_spe: 70,
        speed: 120,
      },
      {
        id: 52,
        name: "Miaouss",
        hp: 40,
        atk: 45,
        def: 35,
        atk_spe: 40,
        def_spe: 40,
        speed: 90,
      },
      {
        id: 53,
        name: "Persian",
        hp: 65,
        atk: 70,
        def: 60,
        atk_spe: 65,
        def_spe: 65,
        speed: 115,
      },
      {
        id: 54,
        name: "Psykokwak",
        hp: 50,
        atk: 52,
        def: 48,
        atk_spe: 65,
        def_spe: 50,
        speed: 55,
      },
      {
        id: 55,
        name: "Akwakwak",
        hp: 80,
        atk: 82,
        def: 78,
        atk_spe: 95,
        def_spe: 80,
        speed: 85,
      },
      {
        id: 56,
        name: "Ferosinge",
        hp: 40,
        atk: 80,
        def: 35,
        atk_spe: 35,
        def_spe: 45,
        speed: 70,
      },
      {
        id: 57,
        name: "Colossinge",
        hp: 65,
        atk: 105,
        def: 60,
        atk_spe: 60,
        def_spe: 70,
        speed: 95,
      },
      {
        id: 58,
        name: "Caninos",
        hp: 55,
        atk: 70,
        def: 45,
        atk_spe: 70,
        def_spe: 50,
        speed: 60,
      },
      {
        id: 59,
        name: "Arcanin",
        hp: 90,
        atk: 110,
        def: 80,
        atk_spe: 100,
        def_spe: 80,
        speed: 95,
      },
      {
        id: 60,
        name: "Ptitard",
        hp: 40,
        atk: 50,
        def: 40,
        atk_spe: 40,
        def_spe: 40,
        speed: 90,
      },
      {
        id: 61,
        name: "Tetarte",
        hp: 65,
        atk: 65,
        def: 65,
        atk_spe: 50,
        def_spe: 50,
        speed: 90,
      },
      {
        id: 62,
        name: "Tartard",
        hp: 90,
        atk: 85,
        def: 95,
        atk_spe: 70,
        def_spe: 90,
        speed: 70,
      },
      {
        id: 63,
        name: "Abra",
        hp: 25,
        atk: 20,
        def: 15,
        atk_spe: 105,
        def_spe: 55,
        speed: 90,
      },
      {
        id: 64,
        name: "Kadabra",
        hp: 40,
        atk: 35,
        def: 30,
        atk_spe: 120,
        def_spe: 70,
        speed: 105,
      },
      {
        id: 65,
        name: "Alakazam",
        hp: 55,
        atk: 50,
        def: 45,
        atk_spe: 135,
        def_spe: 85,
        speed: 120,
      },
      {
        id: 66,
        name: "Machoc",
        hp: 70,
        atk: 80,
        def: 50,
        atk_spe: 35,
        def_spe: 35,
        speed: 35,
      },
      {
        id: 67,
        name: "Machopeur",
        hp: 80,
        atk: 100,
        def: 70,
        atk_spe: 50,
        def_spe: 60,
        speed: 45,
      },
      {
        id: 68,
        name: "Mackogneur",
        hp: 90,
        atk: 130,
        def: 80,
        atk_spe: 65,
        def_spe: 85,
        speed: 55,
      },
      {
        id: 69,
        name: "Chetiflor",
        hp: 50,
        atk: 75,
        def: 35,
        atk_spe: 70,
        def_spe: 30,
        speed: 40,
      },
      {
        id: 70,
        name: "Boustiflor",
        hp: 65,
        atk: 90,
        def: 50,
        atk_spe: 85,
        def_spe: 45,
        speed: 55,
      },
      {
        id: 71,
        name: "Empiflor",
        hp: 80,
        atk: 105,
        def: 65,
        atk_spe: 100,
        def_spe: 60,
        speed: 70,
      },
      {
        id: 72,
        name: "Tentacool",
        hp: 40,
        atk: 40,
        def: 35,
        atk_spe: 50,
        def_spe: 100,
        speed: 70,
      },
      {
        id: 73,
        name: "Tentacruel",
        hp: 80,
        atk: 70,
        def: 65,
        atk_spe: 80,
        def_spe: 120,
        speed: 100,
      },
      {
        id: 74,
        name: "Racaillou",
        hp: 40,
        atk: 80,
        def: 100,
        atk_spe: 30,
        def_spe: 30,
        speed: 20,
      },
      {
        id: 75,
        name: "Gravalanch",
        hp: 55,
        atk: 95,
        def: 115,
        atk_spe: 45,
        def_spe: 45,
        speed: 35,
      },
      {
        id: 76,
        name: "Grolem",
        hp: 80,
        atk: 110,
        def: 130,
        atk_spe: 55,
        def_spe: 65,
        speed: 45,
      },
      {
        id: 77,
        name: "Ponyta",
        hp: 50,
        atk: 85,
        def: 55,
        atk_spe: 65,
        def_spe: 65,
        speed: 90,
      },
      {
        id: 78,
        name: "Galopa",
        hp: 65,
        atk: 100,
        def: 70,
        atk_spe: 80,
        def_spe: 80,
        speed: 105,
      },
      {
        id: 79,
        name: "Ramoloss",
        hp: 90,
        atk: 65,
        def: 65,
        atk_spe: 40,
        def_spe: 40,
        speed: 15,
      },
      {
        id: 80,
        name: "Flagadoss",
        hp: 95,
        atk: 75,
        def: 110,
        atk_spe: 100,
        def_spe: 80,
        speed: 30,
      },
      {
        id: 81,
        name: "Magneti",
        hp: 25,
        atk: 35,
        def: 70,
        atk_spe: 95,
        def_spe: 55,
        speed: 45,
      },
      {
        id: 82,
        name: "Magneton",
        hp: 50,
        atk: 60,
        def: 95,
        atk_spe: 120,
        def_spe: 70,
        speed: 70,
      },
      {
        id: 83,
        name: "Canarticho",
        hp: 52,
        atk: 65,
        def: 55,
        atk_spe: 58,
        def_spe: 62,
        speed: 60,
      },
      {
        id: 84,
        name: "Doduo",
        hp: 35,
        atk: 85,
        def: 45,
        atk_spe: 35,
        def_spe: 35,
        speed: 75,
      },
      {
        id: 85,
        name: "Dodrio",
        hp: 60,
        atk: 110,
        def: 70,
        atk_spe: 60,
        def_spe: 60,
        speed: 100,
      },
      {
        id: 86,
        name: "Otaria",
        hp: 65,
        atk: 45,
        def: 55,
        atk_spe: 45,
        def_spe: 70,
        speed: 45,
      },
      {
        id: 87,
        name: "Lamantine",
        hp: 90,
        atk: 70,
        def: 80,
        atk_spe: 70,
        def_spe: 95,
        speed: 70,
      },
      {
        id: 88,
        name: "Tadmorv",
        hp: 80,
        atk: 80,
        def: 50,
        atk_spe: 40,
        def_spe: 50,
        speed: 25,
      },
      {
        id: 89,
        name: "Grotadmorv",
        hp: 105,
        atk: 105,
        def: 75,
        atk_spe: 65,
        def_spe: 100,
        speed: 50,
      },
      {
        id: 90,
        name: "Kokiyas",
        hp: 30,
        atk: 65,
        def: 100,
        atk_spe: 45,
        def_spe: 25,
        speed: 40,
      },
      {
        id: 91,
        name: "Crustabri",
        hp: 50,
        atk: 95,
        def: 180,
        atk_spe: 85,
        def_spe: 45,
        speed: 70,
      },
      {
        id: 92,
        name: "Fantominus",
        hp: 30,
        atk: 35,
        def: 30,
        atk_spe: 100,
        def_spe: 35,
        speed: 80,
      },
      {
        id: 93,
        name: "Spectrum",
        hp: 45,
        atk: 50,
        def: 45,
        atk_spe: 115,
        def_spe: 55,
        speed: 95,
      },
      {
        id: 94,
        name: "Ectoplasma",
        hp: 60,
        atk: 65,
        def: 60,
        atk_spe: 130,
        def_spe: 75,
        speed: 110,
      },
      {
        id: 95,
        name: "Onix",
        hp: 35,
        atk: 45,
        def: 160,
        atk_spe: 30,
        def_spe: 45,
        speed: 70,
      },
      {
        id: 96,
        name: "Soporifik",
        hp: 60,
        atk: 48,
        def: 45,
        atk_spe: 43,
        def_spe: 90,
        speed: 42,
      },
      {
        id: 97,
        name: "Hypnomade",
        hp: 85,
        atk: 73,
        def: 70,
        atk_spe: 73,
        def_spe: 115,
        speed: 67,
      },
      {
        id: 98,
        name: "Krabby",
        hp: 30,
        atk: 105,
        def: 90,
        atk_spe: 25,
        def_spe: 25,
        speed: 50,
      },
      {
        id: 99,
        name: "Krabboss",
        hp: 55,
        atk: 130,
        def: 115,
        atk_spe: 50,
        def_spe: 50,
        speed: 75,
      },
      {
        id: 100,
        name: "Voltorbe",
        hp: 40,
        atk: 30,
        def: 50,
        atk_spe: 55,
        def_spe: 55,
        speed: 100,
      },
      {
        id: 101,
        name: "Electrode",
        hp: 60,
        atk: 50,
        def: 70,
        atk_spe: 80,
        def_spe: 80,
        speed: 140,
      },
      {
        id: 102,
        name: "Noeunoeuf",
        hp: 60,
        atk: 40,
        def: 80,
        atk_spe: 60,
        def_spe: 45,
        speed: 40,
      },
      {
        id: 103,
        name: "Noadkoko",
        hp: 95,
        atk: 95,
        def: 85,
        atk_spe: 125,
        def_spe: 65,
        speed: 55,
      },
      {
        id: 104,
        name: "Osselait",
        hp: 50,
        atk: 50,
        def: 95,
        atk_spe: 40,
        def_spe: 50,
        speed: 35,
      },
      {
        id: 105,
        name: "Ossatueur",
        hp: 60,
        atk: 80,
        def: 110,
        atk_spe: 50,
        def_spe: 80,
        speed: 45,
      },
      {
        id: 106,
        name: "Kicklee",
        hp: 50,
        atk: 120,
        def: 53,
        atk_spe: 35,
        def_spe: 110,
        speed: 87,
      },
      {
        id: 107,
        name: "Tygnon",
        hp: 50,
        atk: 105,
        def: 79,
        atk_spe: 35,
        def_spe: 110,
        speed: 76,
      },
      {
        id: 108,
        name: "Excelangue",
        hp: 90,
        atk: 55,
        def: 75,
        atk_spe: 60,
        def_spe: 75,
        speed: 30,
      },
      {
        id: 109,
        name: "Smogo",
        hp: 40,
        atk: 65,
        def: 95,
        atk_spe: 60,
        def_spe: 45,
        speed: 35,
      },
      {
        id: 110,
        name: "Smogogo",
        hp: 65,
        atk: 90,
        def: 120,
        atk_spe: 85,
        def_spe: 70,
        speed: 60,
      },
      {
        id: 111,
        name: "Rhinocorne",
        hp: 80,
        atk: 85,
        def: 95,
        atk_spe: 30,
        def_spe: 30,
        speed: 25,
      },
      {
        id: 112,
        name: "Rhinoferos",
        hp: 105,
        atk: 130,
        def: 120,
        atk_spe: 45,
        def_spe: 45,
        speed: 40,
      },
      {
        id: 113,
        name: "Leveinard",
        hp: 250,
        atk: 5,
        def: 5,
        atk_spe: 35,
        def_spe: 105,
        speed: 50,
      },
      {
        id: 114,
        name: "Saquedeneu",
        hp: 65,
        atk: 55,
        def: 115,
        atk_spe: 100,
        def_spe: 40,
        speed: 60,
      },
      {
        id: 115,
        name: "Kangourex",
        hp: 105,
        atk: 95,
        def: 80,
        atk_spe: 40,
        def_spe: 80,
        speed: 90,
      },
      {
        id: 116,
        name: "Hypotrempe",
        hp: 30,
        atk: 40,
        def: 70,
        atk_spe: 70,
        def_spe: 25,
        speed: 60,
      },
      {
        id: 117,
        name: "Hypocean",
        hp: 55,
        atk: 65,
        def: 95,
        atk_spe: 95,
        def_spe: 45,
        speed: 85,
      },
      {
        id: 118,
        name: "Poissirene",
        hp: 45,
        atk: 67,
        def: 60,
        atk_spe: 35,
        def_spe: 50,
        speed: 63,
      },
      {
        id: 119,
        name: "Poissoroy",
        hp: 80,
        atk: 92,
        def: 65,
        atk_spe: 65,
        def_spe: 80,
        speed: 68,
      },
      {
        id: 120,
        name: "Stari",
        hp: 30,
        atk: 45,
        def: 55,
        atk_spe: 70,
        def_spe: 55,
        speed: 85,
      },
      {
        id: 121,
        name: "Staross",
        hp: 60,
        atk: 75,
        def: 85,
        atk_spe: 100,
        def_spe: 85,
        speed: 115,
      },
      {
        id: 122,
        name: "M.Mime",
        hp: 40,
        atk: 45,
        def: 65,
        atk_spe: 100,
        def_spe: 120,
        speed: 90,
      },
      {
        id: 123,
        name: "Insecateur",
        hp: 70,
        atk: 110,
        def: 80,
        atk_spe: 55,
        def_spe: 80,
        speed: 105,
      },
      {
        id: 124,
        name: "Lippoutou",
        hp: 65,
        atk: 50,
        def: 35,
        atk_spe: 115,
        def_spe: 95,
        speed: 95,
      },
      {
        id: 125,
        name: "Elektek",
        hp: 65,
        atk: 83,
        def: 57,
        atk_spe: 95,
        def_spe: 85,
        speed: 105,
      },
      {
        id: 126,
        name: "Magmar",
        hp: 65,
        atk: 95,
        def: 57,
        atk_spe: 100,
        def_spe: 85,
        speed: 93,
      },
      {
        id: 127,
        name: "Scarabrute",
        hp: 65,
        atk: 125,
        def: 100,
        atk_spe: 55,
        def_spe: 70,
        speed: 85,
      },
      {
        id: 128,
        name: "Tauros",
        hp: 75,
        atk: 100,
        def: 95,
        atk_spe: 40,
        def_spe: 70,
        speed: 110,
      },
      {
        id: 129,
        name: "Magicarpe",
        hp: 20,
        atk: 10,
        def: 55,
        atk_spe: 15,
        def_spe: 20,
        speed: 80,
      },
      {
        id: 130,
        name: "Leviator",
        hp: 95,
        atk: 125,
        def: 79,
        atk_spe: 60,
        def_spe: 100,
        speed: 81,
      },
      {
        id: 131,
        name: "Lokhlass",
        hp: 130,
        atk: 85,
        def: 80,
        atk_spe: 85,
        def_spe: 95,
        speed: 60,
      },
      {
        id: 132,
        name: "Metamorph",
        hp: 48,
        atk: 48,
        def: 48,
        atk_spe: 48,
        def_spe: 48,
        speed: 48,
      },
      {
        id: 133,
        name: "Evoli",
        hp: 55,
        atk: 55,
        def: 50,
        atk_spe: 45,
        def_spe: 65,
        speed: 55,
      },
      {
        id: 134,
        name: "Aquali",
        hp: 130,
        atk: 65,
        def: 60,
        atk_spe: 110,
        def_spe: 95,
        speed: 65,
      },
      {
        id: 135,
        name: "Voltali",
        hp: 65,
        atk: 65,
        def: 60,
        atk_spe: 110,
        def_spe: 95,
        speed: 130,
      },
      {
        id: 136,
        name: "Pyroli",
        hp: 65,
        atk: 130,
        def: 60,
        atk_spe: 95,
        def_spe: 110,
        speed: 65,
      },
      {
        id: 137,
        name: "Porygon",
        hp: 65,
        atk: 60,
        def: 70,
        atk_spe: 85,
        def_spe: 75,
        speed: 40,
      },
      {
        id: 138,
        name: "Amonita",
        hp: 35,
        atk: 40,
        def: 100,
        atk_spe: 90,
        def_spe: 55,
        speed: 35,
      },
      {
        id: 139,
        name: "Amonistar",
        hp: 70,
        atk: 60,
        def: 125,
        atk_spe: 115,
        def_spe: 70,
        speed: 55,
      },
      {
        id: 140,
        name: "Kabuto",
        hp: 30,
        atk: 80,
        def: 90,
        atk_spe: 55,
        def_spe: 45,
        speed: 55,
      },
      {
        id: 141,
        name: "Kabutops",
        hp: 60,
        atk: 115,
        def: 105,
        atk_spe: 65,
        def_spe: 70,
        speed: 80,
      },
      {
        id: 142,
        name: "Ptera",
        hp: 80,
        atk: 105,
        def: 65,
        atk_spe: 60,
        def_spe: 75,
        speed: 130,
      },
      {
        id: 143,
        name: "Ronflex",
        hp: 160,
        atk: 110,
        def: 65,
        atk_spe: 65,
        def_spe: 110,
        speed: 30,
      },
      {
        id: 144,
        name: "Artikodin",
        hp: 90,
        atk: 85,
        def: 100,
        atk_spe: 95,
        def_spe: 125,
        speed: 85,
      },
      {
        id: 145,
        name: "Electhor",
        hp: 90,
        atk: 90,
        def: 85,
        atk_spe: 125,
        def_spe: 90,
        speed: 100,
      },
      {
        id: 146,
        name: "Sulfura",
        hp: 90,
        atk: 100,
        def: 90,
        atk_spe: 125,
        def_spe: 85,
        speed: 90,
      },
      {
        id: 147,
        name: "Minidraco",
        hp: 41,
        atk: 64,
        def: 45,
        atk_spe: 50,
        def_spe: 50,
        speed: 50,
      },
      {
        id: 148,
        name: "Draco",
        hp: 61,
        atk: 84,
        def: 65,
        atk_spe: 70,
        def_spe: 70,
        speed: 70,
      },
      {
        id: 149,
        name: "Dracolosse",
        hp: 91,
        atk: 134,
        def: 95,
        atk_spe: 100,
        def_spe: 100,
        speed: 80,
      },
      {
        id: 150,
        name: "Mewtwo",
        hp: 106,
        atk: 110,
        def: 90,
        atk_spe: 154,
        def_spe: 90,
        speed: 130,
      },
      {
        id: 151,
        name: "Mew",
        hp: 100,
        atk: 100,
        def: 100,
        atk_spe: 100,
        def_spe: 100,
        speed: 100,
      },
    ]);
    console.log(`✅ ${pokemons.length} pokémons insérés`);

    // 3. Associer les Pokémons à leurs Types
    console.log("📝 Association Pokémon ↔ Type...");

    const pokemonTypes = [
      { pokemonId: 1, typeIds: [10, 11] }, // Bulbizarre - Plante, Poison
      { pokemonId: 2, typeIds: [10, 11] }, // Herbizarre - Plante, Poison
      { pokemonId: 3, typeIds: [10, 11] }, // Florizarre - Plante, Poison
      { pokemonId: 4, typeIds: [6] }, // Salamèche - Feu
      { pokemonId: 5, typeIds: [6] }, // Reptincel - Feu
      { pokemonId: 6, typeIds: [6, 17] }, // Dracaufeu - Feu, Vol
      { pokemonId: 7, typeIds: [4] }, // Carapuce - Eau
      { pokemonId: 8, typeIds: [4] }, // Carabaffe - Eau
      { pokemonId: 9, typeIds: [4] }, // Tortank - Eau
      { pokemonId: 10, typeIds: [8] }, // Chenipan - Insecte
      { pokemonId: 11, typeIds: [8] }, // Chrysacier - Insecte
      { pokemonId: 12, typeIds: [8, 17] }, // Papilusion - Insecte, Vol
      { pokemonId: 13, typeIds: [8, 11] }, // Aspicot - Insecte, Poison
      { pokemonId: 14, typeIds: [8, 11] }, // Coconfort - Insecte, Poison
      { pokemonId: 15, typeIds: [8, 11] }, // Dardargnan - Insecte, Poison
      { pokemonId: 16, typeIds: [9, 17] }, // Roucool - Normal, Vol
      { pokemonId: 17, typeIds: [9, 17] }, // Roucoups - Normal, Vol
      { pokemonId: 18, typeIds: [9, 17] }, // Roucarnage - Normal, Vol
      { pokemonId: 19, typeIds: [9] }, // Rattata - Normal
      { pokemonId: 20, typeIds: [9] }, // Rattatac - Normal
      { pokemonId: 21, typeIds: [9, 17] }, // Piafabec - Normal, Vol
      { pokemonId: 22, typeIds: [9, 17] }, // Rapasdepic - Normal, Vol
      { pokemonId: 23, typeIds: [11] }, // Abo - Poison
      { pokemonId: 24, typeIds: [11] }, // Arbok - Poison
      { pokemonId: 25, typeIds: [5] }, // Pikachu - Électrik
      { pokemonId: 26, typeIds: [5] }, // Raichu - Électrik
      { pokemonId: 27, typeIds: [14] }, // Sabelette - Sol
      { pokemonId: 28, typeIds: [14] }, // Sablaireau - Sol
      { pokemonId: 29, typeIds: [11] }, // Nidoran F - Poison
      { pokemonId: 30, typeIds: [11] }, // Nidorina - Poison
      { pokemonId: 31, typeIds: [11, 14] }, // Nidoqueen - Poison, Sol
      { pokemonId: 32, typeIds: [11] }, // Nidoran M - Poison
      { pokemonId: 33, typeIds: [11] }, // Nidorino - Poison
      { pokemonId: 34, typeIds: [11, 14] }, // Nidoking - Poison, Sol
      { pokemonId: 35, typeIds: [9] }, // Mélofée - Normal
      { pokemonId: 36, typeIds: [9] }, // Mélodelfe - Normal
      { pokemonId: 37, typeIds: [6] }, // Goupix - Feu
      { pokemonId: 38, typeIds: [6] }, // Feunard - Feu
      { pokemonId: 39, typeIds: [9] }, // Rondoudou - Normal
      { pokemonId: 40, typeIds: [9] }, // Grodoudou - Normal
      { pokemonId: 41, typeIds: [11, 17] }, // Nosferapti - Poison, Vol
      { pokemonId: 42, typeIds: [11, 17] }, // Nosferalto - Poison, Vol
      { pokemonId: 43, typeIds: [10, 11] }, // Mystherbe - Plante, Poison
      { pokemonId: 44, typeIds: [10, 11] }, // Ortide - Plante, Poison
      { pokemonId: 45, typeIds: [10, 11] }, // Rafflesia - Plante, Poison
      { pokemonId: 46, typeIds: [8, 10] }, // Paras - Insecte, Plante
      { pokemonId: 47, typeIds: [8, 10] }, // Parasect - Insecte, Plante
      { pokemonId: 48, typeIds: [8, 11] }, // Mimitoss - Insecte, Poison
      { pokemonId: 49, typeIds: [8, 11] }, // Aéromite - Insecte, Poison
      { pokemonId: 50, typeIds: [14] }, // Taupiqueur - Sol
      { pokemonId: 51, typeIds: [14] }, // Triopikeur - Sol
      { pokemonId: 52, typeIds: [9] }, // Miaouss - Normal
      { pokemonId: 53, typeIds: [9] }, // Persian - Normal
      { pokemonId: 54, typeIds: [4] }, // Psykokwak - Eau
      { pokemonId: 55, typeIds: [4] }, // Akwakwak - Eau
      { pokemonId: 56, typeIds: [2] }, // Férosinge - Combat
      { pokemonId: 57, typeIds: [2] }, // Colossinge - Combat
      { pokemonId: 58, typeIds: [6] }, // Caninos - Feu
      { pokemonId: 59, typeIds: [6] }, // Arcanin - Feu
      { pokemonId: 60, typeIds: [4] }, // Ptitard - Eau
      { pokemonId: 61, typeIds: [4] }, // Têtarte - Eau
      { pokemonId: 62, typeIds: [4, 2] }, // Tartard - Eau, Combat
      { pokemonId: 63, typeIds: [12] }, // Abra - Psy
      { pokemonId: 64, typeIds: [12] }, // Kadabra - Psy
      { pokemonId: 65, typeIds: [12] }, // Alakazam - Psy
      { pokemonId: 66, typeIds: [2] }, // Machoc - Combat
      { pokemonId: 67, typeIds: [2] }, // Machopeur - Combat
      { pokemonId: 68, typeIds: [2] }, // Mackogneur - Combat
      { pokemonId: 69, typeIds: [10, 11] }, // Chétiflor - Plante, Poison
      { pokemonId: 70, typeIds: [10, 11] }, // Boustiflor - Plante, Poison
      { pokemonId: 71, typeIds: [10, 11] }, // Empiflor - Plante, Poison
      { pokemonId: 72, typeIds: [4, 11] }, // Tentacool - Eau, Poison
      { pokemonId: 73, typeIds: [4, 11] }, // Tentacruel - Eau, Poison
      { pokemonId: 74, typeIds: [13, 14] }, // Racaillou - Roche, Sol
      { pokemonId: 75, typeIds: [13, 14] }, // Gravalanch - Roche, Sol
      { pokemonId: 76, typeIds: [13, 14] }, // Grolem - Roche, Sol
      { pokemonId: 77, typeIds: [6] }, // Ponyta - Feu
      { pokemonId: 78, typeIds: [6] }, // Galopa - Feu
      { pokemonId: 79, typeIds: [4, 12] }, // Ramoloss - Eau, Psy
      { pokemonId: 80, typeIds: [4, 12] }, // Flagadoss - Eau, Psy
      { pokemonId: 81, typeIds: [5, 1] }, // Magnéti - Électrik, Acier
      { pokemonId: 82, typeIds: [5, 1] }, // Magnéton - Électrik, Acier
      { pokemonId: 83, typeIds: [9, 17] }, // Canarticho - Normal, Vol
      { pokemonId: 84, typeIds: [9, 17] }, // Doduo - Normal, Vol
      { pokemonId: 85, typeIds: [9, 17] }, // Dodrio - Normal, Vol
      { pokemonId: 86, typeIds: [4] }, // Otaria - Eau
      { pokemonId: 87, typeIds: [4, 7] }, // Lamantine - Eau, Glace
      { pokemonId: 88, typeIds: [11] }, // Tadmorv - Poison
      { pokemonId: 89, typeIds: [11] }, // Grotadmorv - Poison
      { pokemonId: 90, typeIds: [4] }, // Kokiyas - Eau
      { pokemonId: 91, typeIds: [4, 7] }, // Crustabri - Eau, Glace
      { pokemonId: 92, typeIds: [15, 11] }, // Fantominus - Spectre, Poison
      { pokemonId: 93, typeIds: [15, 11] }, // Spectrum - Spectre, Poison
      { pokemonId: 94, typeIds: [15, 11] }, // Ectoplasma - Spectre, Poison
      { pokemonId: 95, typeIds: [13, 14] }, // Onix - Roche, Sol
      { pokemonId: 96, typeIds: [12] }, // Soporifik - Psy
      { pokemonId: 97, typeIds: [12] }, // Hypnomade - Psy
      { pokemonId: 98, typeIds: [4] }, // Krabby - Eau
      { pokemonId: 99, typeIds: [4] }, // Krabboss - Eau
      { pokemonId: 100, typeIds: [5] }, // Voltorbe - Électrik
      { pokemonId: 101, typeIds: [5] }, // Électrode - Électrik
      { pokemonId: 102, typeIds: [10, 12] }, // Nœunœuf - Plante, Psy
      { pokemonId: 103, typeIds: [10, 12] }, // Noadkoko - Plante, Psy
      { pokemonId: 104, typeIds: [14] }, // Osselait - Sol
      { pokemonId: 105, typeIds: [14] }, // Ossatueur - Sol
      { pokemonId: 106, typeIds: [2] }, // Kicklee - Combat
      { pokemonId: 107, typeIds: [2] }, // Tygnon - Combat
      { pokemonId: 108, typeIds: [9] }, // Excelangue - Normal
      { pokemonId: 109, typeIds: [11] }, // Smogo - Poison
      { pokemonId: 110, typeIds: [11] }, // Smogogo - Poison
      { pokemonId: 111, typeIds: [14, 13] }, // Rhinocorne - Sol, Roche
      { pokemonId: 112, typeIds: [14, 13] }, // Rhinoféros - Sol, Roche
      { pokemonId: 113, typeIds: [9] }, // Leveinard - Normal
      { pokemonId: 114, typeIds: [10] }, // Saquedeneu - Plante
      { pokemonId: 115, typeIds: [9] }, // Kangourex - Normal
      { pokemonId: 116, typeIds: [4] }, // Hypotrempe - Eau
      { pokemonId: 117, typeIds: [4] }, // Hypocéan - Eau
      { pokemonId: 118, typeIds: [4] }, // Poissirène - Eau
      { pokemonId: 119, typeIds: [4] }, // Poissoroy - Eau
      { pokemonId: 120, typeIds: [4] }, // Stari - Eau
      { pokemonId: 121, typeIds: [4, 12] }, // Staross - Eau, Psy
      { pokemonId: 122, typeIds: [12] }, // M.Mime - Psy
      { pokemonId: 123, typeIds: [8, 17] }, // Insécateur - Insecte, Vol
      { pokemonId: 124, typeIds: [7, 12] }, // Lippoutou - Glace, Psy
      { pokemonId: 125, typeIds: [5] }, // Élektek - Électrik
      { pokemonId: 126, typeIds: [6] }, // Magmar - Feu
      { pokemonId: 127, typeIds: [8] }, // Scarabrute - Insecte
      { pokemonId: 128, typeIds: [9] }, // Tauros - Normal
      { pokemonId: 129, typeIds: [4] }, // Magicarpe - Eau
      { pokemonId: 130, typeIds: [4, 17] }, // Léviator - Eau, Vol
      { pokemonId: 131, typeIds: [4, 7] }, // Lokhlass - Eau, Glace
      { pokemonId: 132, typeIds: [9] }, // Métamorph - Normal
      { pokemonId: 133, typeIds: [9] }, // Évoli - Normal
      { pokemonId: 134, typeIds: [4] }, // Aquali - Eau
      { pokemonId: 135, typeIds: [5] }, // Voltali - Électrik
      { pokemonId: 136, typeIds: [6] }, // Pyroli - Feu
      { pokemonId: 137, typeIds: [9] }, // Porygon - Normal
      { pokemonId: 138, typeIds: [13, 4] }, // Amonita - Roche, Eau
      { pokemonId: 139, typeIds: [13, 4] }, // Amonistar - Roche, Eau
      { pokemonId: 140, typeIds: [13, 4] }, // Kabuto - Roche, Eau
      { pokemonId: 141, typeIds: [13, 4] }, // Kabutops - Roche, Eau
      { pokemonId: 142, typeIds: [13, 17] }, // Ptéra - Roche, Vol
      { pokemonId: 143, typeIds: [9] }, // Ronflex - Normal
      { pokemonId: 144, typeIds: [7, 17] }, // Artikodin - Glace, Vol
      { pokemonId: 145, typeIds: [5, 17] }, // Électhor - Électrik, Vol
      { pokemonId: 146, typeIds: [6, 17] }, // Sulfura - Feu, Vol
      { pokemonId: 147, typeIds: [3] }, // Minidraco - Dragon
      { pokemonId: 148, typeIds: [3] }, // Draco - Dragon
      { pokemonId: 149, typeIds: [3, 17] }, // Dracolosse - Dragon, Vol
      { pokemonId: 150, typeIds: [12] }, // Mewtwo - Psy
      { pokemonId: 151, typeIds: [12] }, // Mew - Psy
    ];

    // Boucle pour associer tous les Pokémons à leurs types
    for (const { pokemonId, typeIds } of pokemonTypes) {
      const pokemon = await Pokemon.findByPk(pokemonId);
      if (pokemon) {
        await pokemon.setTypes(typeIds);
      }
    }

    console.log("✅ Associations Pokémon ↔ Type créées pour les Pokémons");

    // 4. Créer des Teams
    console.log("📝 Création des équipes...");
    const teams = await Team.bulkCreate([
      {
        id: 1,
        name: "Ultimate Team",
        description: "La meilleure team du monde",
      },
      { id: 2, name: "La Team de l'enfer", description: "Le feuuuuu" },
      { id: 3, name: "Squad fofolle", description: "Pour tout gagner" },
    ]);
    console.log(`✅ ${teams.length} équipes créées`);

    // 5. Associer des Pokémons aux Teams
    console.log("📝 Association Team ↔ Pokémon...");

    const team1 = await Team.findByPk(1);
    await team1.setPokemons([3, 6, 9, 12, 15, 34]);

    const team2 = await Team.findByPk(2);
    await team2.setPokemons([6, 38, 59, 126, 136, 146]);

    const team3 = await Team.findByPk(3);
    await team3.setPokemons([151, 150, 149, 146, 145, 144]);

    console.log("✅ Associations Team ↔ Pokémon créées");

    console.log("🎉 Seeding terminé avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors du seeding :", error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();
