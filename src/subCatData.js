const subCatData = [
    {
        "id": 1,
        "name": "Car",
        "categories": "Automobiles"
    },
    {
        "id": 2,
        "name": "Bike",
        "categories": "Automobiles"
    },
    {
        "id": 3,
        "name": "Golf Cart",
        "categories": "Automobiles"
    },
    {
        "id": 4,
        "name": "Truck",
        "categories": "Automobiles"
    },
    {
        "id": 5,
        "name": "Others",
        "categories": "Automobiles"
    },
    {
        "id": 6,
        "name": "Jackets",
        "categories": "Biking & Hiking Gears"
    },
    {
        "id": 7,
        "name": "Hiking Shoes",
        "categories": "Biking & Hiking Gears"
    },
    {
        "id": 8,
        "name": "Gloves",
        "categories": "Biking & Hiking Gears"
    },
    {
        "id": 9,
        "name": "Helmet",
        "categories": "Biking & Hiking Gears"
    },
    {
        "id": 10,
        "name": "Others",
        "categories": "Biking & Hiking Gears"
    },
    {

        "id": 11,
        "name": "Fiction",
        "categories": "Books"
    },
    {
        "id": 12,
        "name": "Non-Fiction",
        "categories": "Books"
    },
    {
        "id": 13,
        "name": "Educational",
        "categories": "Books"
    },
    {
        "id": 14,
        "name": "Others",
        "categories": "Books"
    },
    {
        "id": 15,
        "name": "Camera",
        "categories": "Camera & Lenseses"
    },
    {
        "id": 16,
        "name": "Lenses",
        "categories": "Camera & Lenseses"
    },
    {
        "id": 17,
        "name": "Tripod",
        "categories": "Camera & Lenseses"
    },
    {
        "id": 18,
        "name": "Others",
        "categories": "Camera & Lenseses"
    },
    {
        "id": 19,
        "name": "Excavator",
        "categories": "Construction Machines & Manpower"
    },
    {
        "id": 20,
        "name": "Bulldozer",
        "categories": "Construction Machines & Manpower"
    },
    {
        "id": 21,
        "name": "Crane",
        "categories": "Construction Machines & Manpower"
    },
    {
        "id": 22,
        "name": "Others",
        "categories": "Construction Machines & Manpower"
    },
    {
        "id": 23,
        "name": "Drone",
        "categories": "Drones"
    },
    {
        "id": 24,
        "name": "Drone Camera",
        "categories": "Drones"
    },
    {
        "id": 25,
        "name": "Drone Battery",
        "categories": "Drones"
    },
    {
        "id": 26,
        "name": "Others",
        "categories": "Drones"
    },
    {
        "id": 27,
        "name": "Mobile",
        "categories": "Electronics"
    },
    {
        "id": 28,
        "name": "Laptop",
        "categories": "Electronics"
    },
    {
        "id": 29,
        "name": "Tablet",
        "categories": "Electronics"
    },
    {
        "id": 30,
        "name": "Others",
        "categories": "Electronics"
    },
    {
        "id": 31,
        "name": "Birthday",
        "categories": "Events"
    },
    {
        "id": 32,
        "name": "Wedding",
        "categories": "Events"
    },
    {
        "id": 33,
        "name": "Anniversary",
        "categories": "Events"
    },
    {
        "id": 34,
        "name": "Others",
        "categories": "Events"
    },
    {

        "id": 35,
        "name": "Dumbbell",
        "categories": "Fitness & Sports Equipment"
    },
    {
        "id": 36,
        "name": "Treadmill",
        "categories": "Fitness & Sports Equipment"
    },
    {
        "id": 37,
        "name": "Yoga Mat",
        "categories": "Fitness & Sports Equipment"
    },
    {
        "id": 38,
        "name": "Others",
        "categories": "Fitness & Sports Equipment"
    },
    {
        "id": 39,
        "name": "Bed",
        "categories": "Furniture"
    },
    {
        "id": 40,
        "name": "Sofa",
        "categories": "Furniture"
    },
    {
        "id": 41,
        "name": "Table",
        "categories": "Furniture"
    },
    {
        "id": 42,
        "name": "Others",
        "categories": "Furniture"
    },
    {
        "id": 43,
        "name": "Grass Cutter",
        "categories": "Gardening"
    },
    {
        "id": 44,
        "name": "Watering Can",
        "categories": "Gardening"
    },
    {
        "id": 45,
        "name": "Hose",
        "categories": "Gardening"
    },
    {
        "id": 46,
        "name": "Others",
        "categories": "Gardening"
    },
    {
        "id": 47,
        "name": "Diesel Generator",
        "categories": "Generators"
    },
    {
        "id": 48,
        "name": "Petrol Generator",
        "categories": "Generators"
    },
    {
        "id": 49,
        "name": "Solar Generator",
        "categories": "Generators"
    },
    {
        "id": 50,
        "name": "Others",
        "categories": "Generators"
    },
    {
        "id": 51,
        "name": "Refrigerator",
        "categories": "Home Appliance"
    },
    {
        "id": 52,
        "name": "Washing Machine",
        "categories": "Home Appliance"
    },
    {
        "id": 53,
        "name": "Microwave",
        "categories": "Home Appliance"
    },
    {
        "id": 54,
        "name": "Others",
        "categories": "Home Appliance"
    },
    {
        "id": 55,
        "name": "Ring",
        "categories": "Jewellery"
    },
    {
        "id": 56,
        "name": "Necklace",
        "categories": "Jewellery"
    },
    {
        "id": 57,
        "name": "Bracelet",
        "categories": "Jewellery"
    },
    {
        "id": 58,
        "name": "Others",
        "categories": "Jewellery"
    },
    {
        "id": 59,
        "name": "Toy",
        "categories": "Kids Utilities"
    },
    {
        "id": 60,
        "name": "Clothes",
        "categories": "Kids Utilities"
    },
    {
        "id": 61,
        "name": "Shoes",
        "categories": "Kids Utilities"
    },
    {
        "id": 62,
        "name": "Others",
        "categories": "Kids Utilities"
    },
    {
        "id": 63,
        "name": "X-Ray Machine",
        "categories": "Medical Equipment & Services"
    },
    {
        "id": 64,
        "name": "ECG Machine",
        "categories": "Medical Equipment & Services"
    },
    {
        "id": 65,
        "name": "Oxygen Cylinder",
        "categories": "Medical Equipment & Services"
    },
    {
        "id": 66,
        "name": "Others",
        "categories": "Medical Equipment & Services"
    },
    {
        "id": 67,
        "name": "Mobile Washroom",
        "categories": "Mobile Washrooms"
    },
    {
        "id": 68,
        "name": "Portable Toilet",
        "categories": "Mobile Washrooms"
    },
    {
        "id": 69,
        "name": "Others",
        "categories": "Mobile Washrooms"
    },
    {
        "id": 70,
        "name": "Guitar",
        "categories": "Musical Instruments"
    },
    {
        "id": 71,
        "name": "Keyboard",
        "categories": "Musical Instruments"
    },
    {
        "id": 72,
        "name": "Drums",
        "categories": "Musical Instruments"
    },
    {
        "id": 73,
        "name": "Others",
        "categories": "Musical Instruments"
    },
    {
        "id": 74,
        "name": "others",
        "categories": "Others"
    },
    {
        "id": 75,
        "name": "Pet Care",
        "categories": "Pets Care Services"
    },
    {
        "id": 76,
        "name": "Pet Training",
        "categories": "Pets Care Services"
    },
    {
        "id": 77,

        "name": "Others",
        "categories": "Pets Care Services"
    },
    {
        "id": 78,
        "name": "House",
        "categories": "Property"
    },
    {
        "id": 79,
        "name": "Land",
        "categories": "Property"
    },
    {
        "id": 80,
        "name": "Apartment",
        "categories": "Property"
    },
    {
        "id": 81,
        "name": "Others",
        "categories": "Property"
    },
    {
        "id": 82,
        "name": "CCTV Camera",
        "categories": "Security Equipment"
    },
    {
        "id": 83,
        "name": "Metal Detector",
        "categories": "Security Equipment"
    },
    {
        "id": 84,
        "name": "Others",
        "categories": "Security Equipment"
    },
    {
        "id": 85,
        "name": "Vending Machine",
        "categories": "Vending Machine"
    },
    {
        "id": 86,
        "name": "Snack Vending Machine",
        "categories": "Vending Machine"
    },
    {
        "id": 87,
        "name": "Others",
        "categories": "Vending Machine"
    },
    {
        "id": 88,
        "name": "Cleaning",
        "categories": "Services"
    },
    {
        "id": 89,
        "name": "Repair",
        "categories": "Services"
    },
    {
        "id": 90,
        "name": "Others",
        "categories": "Services"
    },
    {
        "id": 91,
        "name": "Wedding Dress",
        "categories": "Wedding Couture"
    },
    {
        "id": 92,
        "name": "Groom Dress",
        "categories": "Wedding Couture"
    },
    {
        "id": 93,
        "name": "Others",
        "categories": "Wedding Couture"
    },
    {
        "id": 94,
        "name": "Drilling Machine",
        "categories": "Machines & Tools"
    },
    {
        "id": 95,
        "name": "Cutting Machine",
        "categories": "Machines & Tools"
    },
    {
        "id": 96,
        "name": "Others",
        "categories": "Machines & Tools"
    },
    {
        "id": 97,
        "name": "Others",
        "categories": "Costumes"

    },




];

export default subCatData;