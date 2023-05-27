# Uso de CLI de Angular

1. Generar un componente (Crea el .css, .html, .espec.ts y .ts) y lo agrega al app.modules.ts
```
ng g component heroes/hero
```
o (--skip-tests es para no añadir el .spec.ts)
```
ng g c heroes/hero --skip-tests
```

2. Creacion de Modulos (Crea carpeta y el module)
```
ng g m dbz
```

3. Para poder depurar en el navegador (Colocando en nuestro codigo la palabra debugger) - se podra poner breakpoints en el navegador y poder quitar debugger para
continuar depurando
```
debugger;
```
