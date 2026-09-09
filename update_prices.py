import re, math
from pathlib import Path
p=Path('/mnt/data/pricework/data/products.ts')
s=p.read_text()
cat_mult={
 'Quick Cooking':1.20,'Blenders':1.20,'Beverage':1.22,'Fans':1.18,'Home Comfort':1.15,
 'Home Care':1.22,'Refrigerators':1.15,'Cookers':1.18,'Microwaves':1.22,'Washing Machines':1.16,
 'Freezers':1.15,'Ovens':1.18,'Dishwashers':1.15,'Small Kitchen':1.22,'Juicers':1.20,
 'Audio':1.15,'Hobs':1.18,'Cooker Hoods':1.18,'Pressure Cookers':1.22,'Dryers':1.15,
}
premium={'Samsung':1.03,'LG':1.03,'Bosch':1.03,'Beko':1.02,'Hisense':1.02,'Midea':1.01,'Philips':1.03,'Kenwood':1.03,'Black + Decker':1.03,'Panasonic':1.03,'TCL':1.02,'Newmatic':1.02}
# Exact upper-range / non-sale anchors found in current Uganda listings.
overrides={
 'H20MOMS10':300000,
 'H25MOMS7HG':550000,
 'RT266N4DGN':1760000,
 'RT715N4ACB':4500100,
 'RT488N4ASU':2400000,
 'RC-56WS4S2':3300000,
 'WTJA1402T':1500000,
 'WD90T554DBN':4666694,
 'F4Y2TYG6X.ANBQEEF':3000000,
 'F4R3VYG6P.APTQEEF':2800000,
}

def round_price(x):
    if x < 100000: step=5000
    elif x < 500000: step=10000
    elif x < 2000000: step=25000
    else: step=50000
    return int(round(x/step)*step)

out=[]
changed=[]
for line in s.splitlines():
    if line.lstrip().startswith('{id:') and 'price:' in line:
        bm=re.search(r"brand:'([^']*)'",line); cm=re.search(r"category:'([^']*)'",line); mm=re.search(r"model:'([^']*)'",line); pm=re.search(r'price:(\d+)',line)
        if bm and cm and mm and pm:
            brand,cat,model,old=bm.group(1),cm.group(1),mm.group(1),int(pm.group(1))
            if model in overrides: new=overrides[model]
            else:
                mult=cat_mult.get(cat,1.18)*premium.get(brand,1.0)
                # Avoid pricing below a sensible floor for zero/missing entries.
                base=old if old>0 else 100000
                new=round_price(base*mult)
            if new<=0: new=100000
            if new!=old:
                line=line[:pm.start(1)]+str(new)+line[pm.end(1):]
                changed.append((model,brand,cat,old,new))
    out.append(line)
p.write_text('\n'.join(out)+'\n')
print('changed',len(changed))
for r in changed[:15]: print(r)
print('...')
print('zero old repaired:', [x for x in changed if x[3]==0])
