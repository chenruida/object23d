function colorChange(color) {
  color = Number(color).toString(16);
  return (color = "#000000".substr(0, 7 - color.length) + color);
}

//
function ec(view, input) {
  switch (view.imagescaling) {
    case 1:
      t = Math.min(D / input.width, E / input.height);
      break;
    case 2:
      t = Math.max(D / input.width, E / input.height);
      break;
    case 3:
      t = D / view.width;
      break;
    case 4:
      t = E / view.height;
      break;
    default:
      t = 1;
  }
  var a = t * n * (B - f.width / 2) + D / 2;
  var e = t * n * (C - f.height / 2) + E / 2;
  a = Math.round(a);
  e = Math.round(e);
  var b = Math.round(f.width * t * n);
  var g = Math.round(f.height * t * n);
  if (ca) {
    if (((ya = !1), 0 <= f.I && 0 <= f.J)) {
      (b < D || g < E) &&
        Ha > n &&
        (O.clear ? O.clear() : O.clearRect(0, 0, x.width, x.height),
        O != qa &&
          1 < f.L &&
          Ab &&
          ((Ab = !1),
          qa.clear ? qa.clear() : qa.clearRect(0, 0, x.width, x.height)));
      if (0 < f.l.length) {
        var y = 0,
          h;
        for (
          pwb = b * Math.sqrt(window.devicePixelRatio || 1);
          f.l.length >= y + 2 && f.l[y + 1].width > pwb;

        )
          y++;
        for (var k = y, l = !1; !l; ) {
          l = !0;
          var p = f.l[k];
          var q = (-a / b) * (p.width / f.u);
          var m = (-e / g) * (p.height / f.u);
          var z = ((-a + D) / b) * (p.width / f.u),
            A = ((-e + E) / g) * (p.height / f.u);
          q = Math.min(Math.max(0, Math.floor(q)), p.M - 1);
          m = Math.min(Math.max(0, Math.floor(m)), p.aa - 1);
          z = Math.min(Math.max(0, Math.floor(z)), p.M - 1);
          A = Math.min(Math.max(0, Math.floor(A)), p.aa - 1);
          for (h = m; h <= A; h++)
            for (m = q; m <= z; m++) {
              var F = m + h * p.M,
                r = p.N[F];
              r && r.i ? r.i.complete || (l = !1) : (l = !1);
            }
          l || (k + 1 < f.l.length ? k++ : (l = !0));
        }
        for (; k >= y; ) {
          p = f.l[k];
          q = (-a / b) * (p.width / f.u);
          m = (-e / g) * (p.height / f.u);
          z = ((-a + D) / b) * (p.width / f.u);
          A = ((-e + E) / g) * (p.height / f.u);
          q = Math.min(Math.max(0, Math.floor(q)), p.M - 1);
          m = Math.min(Math.max(0, Math.floor(m)), p.aa - 1);
          z = Math.min(Math.max(0, Math.floor(z)), p.M - 1);
          A = Math.min(Math.max(0, Math.floor(A)), p.aa - 1);
          for (h = m; h <= A; h++)
            for (m = q; m <= z; m++)
              (F = m + h * p.M),
                (r = p.N[F]) || (r = p.N[F] = {}),
                !r.i &&
                  5 > ha &&
                  ((r.i = new Image()),
                  r.i.setAttribute("src", ub(f.I, f.J, f.K, k, m, h)),
                  (r.i.onload = xc),
                  (r.i.onerror = gc),
                  (r.i.onabort = gc),
                  0 == ha &&
                    c.divSkin &&
                    c.divSkin.ggReLoadedLevels &&
                    c.divSkin.ggReLoadedLevels(),
                  ha++),
                r.i &&
                  r.i.complete &&
                  (O.drawImage(
                    r.i,
                    a + ((-f.ja + f.u * m) * b) / p.width,
                    e + ((-f.ja + f.u * h) * g) / p.height,
                    (r.i.width * b) / p.width,
                    (r.i.height * g) / p.height
                  ),
                  (ya = !0));
          k--;
        }
        Ha = n;
        Ya = B;
        Za = C;
      } else
        "" != u.src && u.complete
          ? (O.clear ? O.clear() : O.clearRect(0, 0, x.width, x.height),
            O.drawImage(u, a, e, b, g),
            (Ha = n),
            (Ya = B),
            (Za = C),
            (ya = !0))
          : (c.a = !0);
      if (ya)
        for (a = 0; a < G.length; a++)
          if (((e = G[a]), "point" == e.hstype)) {
            y = !1;
            for (p = g = b = 0; p < e.locations.length; p++)
              (k = e.locations[p]),
                k.column == f.I &&
                  k.row == f.J &&
                  k.state == f.K &&
                  ((y = !0),
                  (b = t * n * (B + k.x * f.width - f.width / 2) + D / 2),
                  (g = t * n * (C + k.y * f.height - f.height / 2) + E / 2));
            e.obj &&
              e.obj.__div &&
              ((e.obj.__div.style[Ia] = "none"),
              y
                ? ((e.obj.__div.style.left = H + b + "px"),
                  (e.obj.__div.style.top = I + g + "px"),
                  (e.obj.__div.style.visibility = "visible"))
                : ((e.obj.__div.style.left = "-100px"),
                  (e.obj.__div.style.top = "-100px"),
                  (e.obj.__div.style.visibility = "hidden")));
          }
    }
  } else
    u.setAttribute("width", f.width),
      u.setAttribute("height", f.height),
      M.setAttribute("width", f.width),
      M.setAttribute("height", f.height),
      (u.style.left = a + "px"),
      (u.style.top = e + "px"),
      (u.style.width = b + "px"),
      (u.style.height = g + "px"),
      (M.style.left = a + "px"),
      (M.style.top = e + "px"),
      (M.style.width = b + "px"),
      (M.style.height = g + "px"),
      (Ha = n),
      (Ya = B),
      (Za = C);
}
