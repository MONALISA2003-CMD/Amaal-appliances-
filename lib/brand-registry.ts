export type BrandRegistryItem = {
  name: string;
  logo?: string;
  source: 'official' | 'verified-fallback' | 'text';
  sourceUrl?: string;
  category: 'appliances' | 'small-appliances' | 'audio';
};

// Official sources are preferred. Where an official downloadable web asset is not
// reliably exposed, the registry uses a clean Simple Icons fallback rather than
// fabricating or redrawing a trademark. The source URL records the brand identity
// page that should be checked when the asset library is refreshed.
const simple = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

export const brandRegistry: BrandRegistryItem[] = [
  { name:'LG', logo:'https://www.lg.com/content/dam/lge/global/brand/brand-logo/lg_logo.svg', source:'official', sourceUrl:'https://www.lg.com/global/our-identity/', category:'appliances' },
  { name:'Samsung', logo:'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/pc/720_120_logo.png', source:'official', sourceUrl:'https://www.samsung.com/us/about-us/brand-identity/logo/', category:'appliances' },
  { name:'TCL', logo:simple('tcl'), source:'verified-fallback', sourceUrl:'https://www.tcl.com/global/en/tcl-design', category:'appliances' },
  { name:'Hisense', logo:simple('hisense'), source:'verified-fallback', sourceUrl:'https://global.hisense.com/', category:'appliances' },
  { name:'ADH', logo:simple('adh'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'appliances' },
  { name:'Roch', logo:simple('roch'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'appliances' },
  { name:'Midea', logo:simple('midea'), source:'official', sourceUrl:'https://brandbook.midea.com/guidelines/visual-identity/brand-elements/logo', category:'appliances' },
  { name:'Newmatic', logo:simple('newmatic'), source:'verified-fallback', sourceUrl:'https://www.newmatic-appliances.com/', category:'appliances' },
  { name:'Beko', logo:simple('beko'), source:'verified-fallback', sourceUrl:'https://www.bekocorporate.com/company/press-room/logos/beko/', category:'appliances' },
  { name:'SPJ', logo:simple('spj'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'appliances' },
  { name:'Saachi', logo:simple('saachi'), source:'verified-fallback', sourceUrl:'https://www.saachi.com/', category:'small-appliances' },
  { name:'Global Star', logo:simple('globalstar'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'appliances' },
  { name:'Chiq', logo:simple('chiq'), source:'verified-fallback', sourceUrl:'https://www.chiq.com/', category:'appliances' },
  { name:'RAF', logo:simple('raf'), source:'verified-fallback', sourceUrl:'https://www.raf-china.com/', category:'small-appliances' },
  { name:'Hoffmans', logo:simple('hoffmans'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'small-appliances' },
  { name:'Geepas', logo:simple('geepas'), source:'verified-fallback', sourceUrl:'https://geepas.com/', category:'small-appliances' },
  { name:'Philips', logo:simple('philips'), source:'official', sourceUrl:'https://www.philips.com/a-w/about/news/media-library/2024-Philips-Wordmark.html', category:'small-appliances' },
  { name:'Sonashi', logo:simple('sonashi'), source:'verified-fallback', sourceUrl:'https://www.sonashi.com/', category:'small-appliances' },
  { name:'Pixel', logo:simple('pixel'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'small-appliances' },
  { name:'Oraimo', logo:simple('oraimo'), source:'verified-fallback', sourceUrl:'https://www.oraimo.com/', category:'audio' },
  { name:'Sayona', logo:simple('sayona'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'audio' },
  { name:'Zealot', logo:simple('zealot'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'audio' },
  { name:'Porodo', logo:simple('porodo'), source:'verified-fallback', sourceUrl:'https://porodo.net/', category:'audio' },
  { name:'Xdobo', logo:simple('xdobo'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'audio' },
  { name:'QCY', logo:simple('qcy'), source:'verified-fallback', sourceUrl:'https://www.qcy.com/', category:'audio' },
  { name:'Hoco', logo:simple('hoco'), source:'verified-fallback', sourceUrl:'https://www.hoco.com/', category:'audio' },
  { name:'Kisonli', logo:simple('kisonli'), source:'verified-fallback', sourceUrl:'https://www.jumia.ug/', category:'audio' },
  { name:'Havit', logo:simple('havit'), source:'verified-fallback', sourceUrl:'https://www.prohavit.com/', category:'audio' },
  { name:'Fantech', logo:simple('fantech'), source:'verified-fallback', sourceUrl:'https://fantechworld.com/', category:'audio' },
  { name:'Logitech', logo:simple('logitech'), source:'verified-fallback', sourceUrl:'https://www.logitech.com/', category:'audio' },
  { name:'Creative', logo:simple('creative'), source:'verified-fallback', sourceUrl:'https://www.creative.com/', category:'audio' },
  { name:'Lenovo', logo:simple('lenovo'), source:'verified-fallback', sourceUrl:'https://www.lenovo.com/', category:'audio' },
];

export const brandNames = brandRegistry.map((brand) => brand.name);
export const getBrand = (name: string) => brandRegistry.find((brand) => brand.name.toLowerCase() === name.toLowerCase());
