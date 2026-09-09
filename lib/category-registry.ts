export type CategoryStatus = 'active' | 'in-progress' | 'research-pending';

export type Category = {
  name: string;
  slug: string;
  description: string;
  brands: string[];
  status: CategoryStatus;
  image?: string;
  imageSource?: string;
};

// Canonical Amaal catalogue categories from the master handoff.
// Images are intentionally optional here until an exact, clean, non-watermarked
// representative image is verified from an OEM or credible local source.
export const categoryRegistry: Category[] = [
  { name:'Refrigerators', slug:'refrigerators', description:'Top-freezer, bottom-freezer, single-door, multi-door and side-by-side refrigeration.', brands:['LG','TCL','Samsung','ADH','Roch','Midea','Beko','Hisense'], status:'in-progress' },
  { name:'Freezers', slug:'freezers', description:'Household chest, deep and upright freezers for domestic and small-business storage.', brands:['Hisense','Samsung','LG','ADH','Midea','Beko'], status:'in-progress' },
  { name:'Washing Machines', slug:'washing-machines', description:'Front-load, top-load, twin-tub and washer-dryer combinations.', brands:['Samsung','LG','TCL','Roch','Midea','SPJ','Hisense'], status:'in-progress' },
  { name:'Dryers', slug:'dryers', description:'Tumble dryers and verified laundry drying solutions.', brands:['Samsung','LG','Hisense','Midea'], status:'in-progress', image:'https://www.beko.com/content/dam/kenya-ke-aem/kenya-ke-aemProductCatalog/product-images/7185531680-B3T4911DG/7185531680-LO1-20220610-133340.png/jcr%3Acontent/renditions/original', imageSource:'Beko Kenya official B3T4911DG product image' },
  { name:'Cookers', slug:'cookers', description:'Freestanding household cookers with verified cooking configurations.', brands:['Samsung','LG','TCL','ADH','Saachi','Global Star','Midea','Hisense','SPJ'], status:'active' },
  { name:'Ovens', slug:'ovens', description:'Built-in and countertop ovens with verified capacity and cooking functions.', brands:['Saachi','LG','Hisense','Samsung','Midea','Beko','Newmatic'], status:'active' },
  { name:'Hobs', slug:'hobs', description:'Gas and electric cooking hobs with verified burner or zone configurations.', brands:['Samsung','LG','Hisense','Midea','Beko'], status:'active' },
  { name:'Cooker Hoods', slug:'cooker-hoods', description:'Kitchen extraction hoods with verified dimensions and extraction specifications.', brands:['Newmatic','Beko','Hisense','Midea','Blueflame'], status:'active' },
  { name:'Microwaves', slug:'microwaves', description:'Solo and combination microwave ovens with exact model verification.', brands:['Samsung','LG','Midea','Beko','Kenwood','Geepas','Saachi','ADH','Globalstar','Blueflame','Oraimo','Hisense'], status:'active' },
  { name:'Cleaning & Floor Care', slug:'cleaning-floor-care', description:'Vacuum cleaners, floor-care and practical home-cleaning appliances.', brands:['Samsung','LG','ADH','Hisense','Midea','Saachi'], status:'research-pending' },
  { name:'Home Comfort', slug:'home-comfort', description:'Air conditioners and other household comfort appliances.', brands:['Samsung','LG','TCL','ADH','Midea','Saachi','Beko','Chiq','Geepas'], status:'active' },
  { name:'Fans', slug:'fans', description:'Household fans with a maximum of 30 verified actual SKUs.', brands:['Samsung','LG','TCL','ADH','Midea','Saachi','Beko','Chiq','Geepas'], status:'active' },
  { name:'Small Kitchen Appliances', slug:'small-kitchen-appliances', description:'Kettles, rice cookers, coffee makers and everyday countertop appliances.', brands:['Hoffmans','RAF','Midea','Saachi','Geepas','Pixel','Scarlett'], status:'active' },
  { name:'Blenders & Juicers', slug:'blenders-juicers', description:'Blenders, grinders, juice extractors and slow juicers.', brands:['Hoffmans','RAF','Geepas','Saachi','Philips','Sonashi'], status:'active' },
  { name:'Quick Cooking & Frying', slug:'quick-cooking-frying', description:'Air fryers, pressure cookers, hot plates and fast countertop cooking.', brands:['Hoffmans','RAF','Saachi','Sayona','Sonashi','Pixel'], status:'active' },
  { name:'Consumer Audio', slug:'consumer-audio', description:'Portable speakers, soundbars, headphones, earbuds and affordable home audio.', brands:['JBL','Oraimo','Sayona','Geepas','Saachi','Zealot','Porodo','Xdobo','Sonashi','QCY','Hoco','Kisonli','Havit','Fantech','Logitech','Creative','Lenovo','Hisense','Samsung','LG'], status:'active' },
  { name:'Ironing Machines', slug:'ironing-machines', description:'Steam irons, dry irons, garment steamers and steam-generator ironing systems.', brands:['Philips','Kenwood','Geepas','Saachi','Sonifer','Hoffmans','RAF','Sayona','Midea','Bosch','Beko'], status:'research-pending' },
];

export const categoryNames = categoryRegistry.map((category) => category.name);
export const getCategory = (slugOrName: string) => categoryRegistry.find((category) => category.slug === slugOrName || category.name.toLowerCase() === slugOrName.toLowerCase());
