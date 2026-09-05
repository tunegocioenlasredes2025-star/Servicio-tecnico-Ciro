# Service Ciro — sitio web

Landing de conversión (una sola página) para **Service Ciro / Servicio Técnico Ciro**,
servicio técnico a domicilio de heladeras, aires acondicionados, lavarropas y lavavajillas.

HTML/CSS/JS vanilla, sin build. Se sube tal cual está.

```
web/
├─ index.html
├─ css/styles.css
├─ js/main.js
├─ assets/            fotos (webp) + logo + iconos
├─ robots.txt
├─ sitemap.xml
└─ site.webmanifest
```

## De dónde salió cada dato

| Dato | Fuente |
|---|---|
| Nombre comercial "Service Ciro" y los 3 rubros | `<title>` del dominio actual (serviceciro.com.ar, quedó en "Coming soon") |
| Logo | CDN de la web vieja (`assets.zyrosite.com`) |
| Teléfonos 11 7033-2439 y 11 2872-4860 | placas del Instagram + uniforme del técnico + ficha de Google/Bing |
| Dirección y horarios | ficha de Google Business (Villa Udaondo, Ituzaingó) |
| Zonas (CABA / Oeste / Sur) | bio de @serviciotecnico_ciro |
| Garantía escrita 90 días, repuestos originales | contenido indexado de la web anterior |
| Servicios, síntomas, tono | posts y placas del Instagram |
| 20 años de oficio, 3 técnicos, factura, estacionalidad del aire | audios del cliente |

## Decisiones de contenido

- **Es servicio técnico, NO venta de repuestos.** Fue el error que le hizo perder plata con
  la CM anterior. Hay una FAQ explícita que lo aclara ("¿Venden repuestos sueltos?" → No).
- **Nada de copy genérico de servicio técnico.** El hero nombra las herramientas reales
  (bomba de vacío, soldador), la barra de confianza son cuatro promesas concretas en vez de
  números sueltos, y cada card de servicio lista los síntomas tal como los describe el
  cliente ("saca la ropa empapada", "el motor no para nunca"), no categorías abstractas.
- **Los síntomas están dentro de cada servicio, no en una sección aparte.** El cliente que
  llega de Google Ads busca por problema ("mi heladera no enfría"), no por servicio, así que
  cada síntoma es un enlace que abre WhatsApp con el mensaje ya escrito → se sabe por qué
  entró cada consulta. Antes había una sección de síntomas separada: duplicaba el contenido
  de las tarjetas y estiraba la página 2.000 px en celular.
- **La página tiene que leerse rápido en el celular.** Es una landing de pauta, no un sitio
  institucional: 6.500 px en mobile, no 12.000. Cada sección tiene que ganarse el lugar.
- **Refrigeración comercial** tiene card propia: en el Instagram hay varios trabajos de
  heladera mostrador y cambio de compresor. Es el ticket más alto y casi nadie lo comunica.
- El **aire acondicionado** es la card destacada (borde ámbar): en diciembre explota la
  demanda y ahí es donde conviene poner la pauta.
- **Sin cajas.** Servicios, síntomas, FAQ y datos de contacto se arman con reglas finas y
  numeración, como una ficha técnica o una orden de trabajo. El recuadro redondeado flotante
  es el look de plantilla que tiene cualquier landing; acá no aparece. Los únicos paneles con
  fondo son los que de verdad lo necesitan: el formulario, la ficha de base operativa y las fotos.
- **El hero es el isologo, no una foto.** Las fotos de Instagram son de celular y a tamaño
  grande se ven de baja calidad; el logo original (500x500) a 168 px queda nítido en retina.
  Las fotos siguen en la galería, que es donde funcionan.
- **El motivo visual son las rayas diagonales del isologo.** Se usan como fondo del hero y
  como franja separadora antes del contacto. Es lo único de la identidad que no tiene
  cualquier otro servicio técnico.
- Todas las fotos son trabajos reales del Instagram. Cero banco de imágenes.

## Pendientes antes de publicar

1. **Confirmar los teléfonos con Ciro.** El 11 7033-2439 aparece en tres fuentes, el
   11 2872-4860 en las placas nuevas. Si alguno ya no se usa, sacarlo de `index.html`
   (aparece en header, hero, contacto, footer, botón flotante y en el JSON-LD).
2. **Confirmar las zonas.** La bio de Instagram dice *CABA, Zona Oeste y Zona Sur*, pero
   las placas viejas decían *Zona Norte*. Está cargado Sur. El listado de localidades de
   `#zonas` es una propuesta: hay que validarlo con él y borrar las que no cubra.
3. **Confirmar la dirección pública.** Está la de Google Business (Federico García Lorca
   4175). Si trabaja desde su casa y no quiere publicarla, se saca de `#zonas`, del footer
   y del bloque `PostalAddress` del JSON-LD, y se deja sólo "Villa Udaondo, Ituzaingó".
4. **Política de la visita.** La FAQ dice que el costo de la visita se descuenta si se hace
   la reparación. Confirmar que trabaja así.
5. **Email de contacto:** no lo tenemos. Si quiere, se agrega en `#contacto` y en el JSON-LD.

## Publicación

El dominio **serviceciro.com.ar** ya está pagado y hoy apunta a Hostinger (quedó una
página de "Coming soon" del proveedor anterior). Para publicar:

1. Subir la carpeta `web/` a GitHub y conectarla a Vercel (deploy estático, sin build).
2. En el panel del dominio, apuntar los DNS a Vercel siguiendo el protocolo habitual
   (NIC.ar → Cloudflare en modo *DNS only* → Vercel).
3. Después del deploy: dar de alta el sitio en **Google Search Console**, subir el
   `sitemap.xml` y **actualizar el enlace del sitio en la ficha de Google Business**
   (hoy apunta al mismo dominio, así que se arregla solo al publicar).

## Antes de encender Google Ads

El formulario y todos los botones abren WhatsApp: no hay forma de medir conversiones
hasta que se instale el tag. Falta agregar:

- **Google Ads (gtag)** + conversión por click en WhatsApp / teléfono.
- **Google Analytics 4** (o el mismo gtag).

Los CTA ya tienen el atributo `data-cta` (`header`, `hero`, `hero-tel`, `sintoma`,
`zonas`, `instagram`, `fab`) para engancharles el evento sin tocar el HTML.
