var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var yards = document.getElementById('yards');
var meters = document.getElementById('meters');
var cm = document.getElementById('cm');
var kilometers = document.getElementById('kilometers');
var miles = document.getElementById('miles');

feet.addEventListener('input',function() {
    let f = this.value;
    let i = f * 12;
    let y = f * 0.33333;
    let m = f / 3.2808;
    let c = f / 0.032808;
    let k = f / 3280.8;
    let mi = f * 0.00018939;
    
    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    }
    if(!Number.isInteger(y))
    {
        y=y.toFixed(2);
    }
    if(!Number.isInteger(m))
    {
        m=m.toFixed(2);
    }
    if(!Number.isInteger(c))
    {
        c=c.toFixed(2);
    }
    if(!Number.isInteger(k))
    {
        k=k.toFixed(5);
    }
    if(!Number.isInteger(mi))
    {
        mi=mi.toFixed(5);
    }
    inch.value=i;
    yards.value=y;
    meters.value=m;
    cm.value=c;
    kilometers.value=k;
    miles.value=mi;
});
inch.addEventListener('input',function() {
    let i = this.value;
    let f = i * 0.08333333333;
    let y = i * 0.027778;
    let m = i / 39.370;
    let c = i / 0.39370;
    let k = i / 39370;
    let mi = i * 0.000015783;

    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    if(!Number.isInteger(y))
    {
        y=y.toFixed(2);
    }
    if(!Number.isInteger(m))
    {
        m=m.toFixed(2);
    }
    if(!Number.isInteger(c))
    {
        c=c.toFixed(2);
    }
    if(!Number.isInteger(k))
    {
        k=k.toFixed(5);
    }
    if(!Number.isInteger(mi))
    {
        mi=mi.toFixed(5);
    }
    feet.value=f;
    yards.value=y;
    meters.value=m;
    cm.value=c;
    kilometers.value=k;
    miles.value=mi;
});
yards.addEventListener('input',function() {
    let y = this.value;
    let f = y * 3;
    let i = y * 36;
    let m = y / 1.0936;
    let c = y / 0.010936;
    let k = y / 1093.6;
    let mi = y * 0.00056818;

    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    }
    if(!Number.isInteger(m))
    {
        m=m.toFixed(2);
    }
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    if(!Number.isInteger(c))
    {
        c=c.toFixed(2);
    }
    if(!Number.isInteger(k))
    {
        k=k.toFixed(5);
    }
    if(!Number.isInteger(mi))
    {
        mi=mi.toFixed(5);
    }
    inch.value=i;
    meters.value=m;
    feet.value=f;
    cm.value=c;
    kilometers.value=k;
    miles.value=mi;
});
meters.addEventListener('input',function() {
    let m = this.value;
    let f = m * 3.2808;
    let i = m * 39.370;
    let y = m * 1.0936;
    let c = m / 0.01;
    let k = m / 1000;
    let mi = m * 0.00062137;

    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    }
    if(!Number.isInteger(y))
    {
        y=y.toFixed(2);
    }
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    if(!Number.isInteger(c))
    {
        c=c.toFixed(2);
    }
    if(!Number.isInteger(k))
    {
        k=k.toFixed(5);
    }
    if(!Number.isInteger(mi))
    {
        mi=mi.toFixed(5);
    }
    inch.value=i;
    yards.value=y;
    feet.value=f;
    cm.value=c;
    kilometers.value=k;
    miles.value=mi;
});
cm.addEventListener('input',function() {
    let cm = this.value;
    let f = cm *0.032808;
    let m = cm / 100;
    let i = cm * 0.39370;
    let y = cm * 0.010936;
    let k = cm / 100000;
    let mi = cm * 0.0000062137;

    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    }
    if(!Number.isInteger(y))
    {
        y=y.toFixed(2);
    }
    if(!Number.isInteger(m))
    {
        m=m.toFixed(2);
    }
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    if(!Number.isInteger(k))
    {
        k=k.toFixed(5);
    }
    if(!Number.isInteger(mi))
    {
        mi=mi.toFixed(5);
    }
    inch.value=i;
    yards.value=y;
    feet.value=f;
    meters.value=m;
    kilometers.value=k;
    miles.value=mi;
});
kilometers.addEventListener('input',function() {
    let k = this.value;
    let f = k * 3280.8;
    let i = k * 39370;
    let y = k * 1093.6;
    let c = k * 100000;
    let m = k * 1000;
    let mi = k * 0.62137;

    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    }
    if(!Number.isInteger(y))
    {
        y=y.toFixed(2);
    }
    if(!Number.isInteger(m))
    {
        m=m.toFixed(2);
    }
    if(!Number.isInteger(c))
    {
        c=c.toFixed(2);
    }
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    if(!Number.isInteger(mi))
    {
        mi=mi.toFixed(5);
    }
    inch.value=i;
    yards.value=y;
    feet.value=f;
    cm.value=c;
    meters.value=m;
    miles.value=mi;
});
miles.addEventListener('input',function() {
    let mi = this.value;
    let f = mi * 5280;
    let i = mi * 63360;
    let y = mi * 1760;
    let c = mi / 0.0000062137;
    let m = mi / 0.00062137;
    let k = mi / 0.62137;

    if(!Number.isInteger(i))
    {
        i=i.toFixed(2);
    }
    if(!Number.isInteger(y))
    {
        y=y.toFixed(2);
    }
    if(!Number.isInteger(m))
    {
        m=m.toFixed(2);
    }
    if(!Number.isInteger(c))
    {
        c=c.toFixed(2);
    }
    if(!Number.isInteger(k))
    {
        k=k.toFixed(2);
    }
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    inch.value=i;
    yards.value=y;
    feet.value=f;
    cm.value=c;
    meters.value=m;
    kilometers.value=k;
});