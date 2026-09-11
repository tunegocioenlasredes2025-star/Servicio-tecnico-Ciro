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
| **WhatsApp 11 2872-4860 · llamadas 11 7033-2439** | documento de correcciones del cliente (09/09/2026) |
| Dirección y horarios | ficha de Google Business (Villa Udaondo, Ituzaingó) |
| Zonas: **solo Zona Oeste y CABA** | documento del cliente (pidió sacar Lomas de Zamora y Lanús) |
| Garantía escrita 90 días, repuestos originales | contenido indexado de la web anterior |
| Textos de rubros, "Nuestros servicios" y FAQ | documento del cliente, **copiados literal** |
| Fotos del hero, productos y logos de marcas | documento del cliente (`assets/cliente-2026-09-09/`) |
| Síntomas y tono | posts y placas del Instagram |
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

## Correcciones del cliente — aplicadas el 11/09/2026

La hija de Claudio mandó un Google Doc con cambios y un video de la web anterior (el video
muestra el **orden** de la información, no un estilo a copiar). Quedó aplicado:

- Hero con **tres fotos de trabajos en alta** (las mandó ellos) en lugar del logo solo.
  Título *Servicio técnico Ciro* + *Servicio a domicilio de refrigeración*.
- Orden de secciones del documento: Reparamos → Nuestros servicios → Marcas y medios de
  pago → Trabajos realizados → Zonas → FAQ → Contacto con mapa.
- **WhatsApp al 11 2872-4860 y llamadas al 11 7033-2439.** Todos los `wa.me`, el botón
  flotante, el formulario (`WHATSAPP` en `js/main.js`) y el `contactPoint` del JSON-LD.
- Zonas: solo Zona Oeste y CABA. Fuera Zona Sur, Lomas de Zamora y Lanús (también del
  JSON-LD y las metas).
- **Sin lavavajillas**: el cliente enumera tres rubros en todo el documento.
- Los textos de los tres rubros, de los cuatro servicios y del FAQ son **los suyos, literal**.
- Se sacó la sección "Cómo trabajamos" (no está en su estructura; "Nuestros servicios" la cubre).

## Pendientes

1. **Confirmar con ellos dos decisiones propias**: la *refrigeración comercial* quedó como
   un síntoma dentro de Heladeras (no la mencionan, pero hay trabajos de mostradores en su
   Instagram), y se mantiene la nota *"Reservá antes de noviembre"* en Aire.
2. **Email de contacto** (opcional).
3. **Apuntar el dominio** (ver abajo).

## Publicación

El dominio **serviceciro.com.ar** usa los nameservers de Hostinger
(`ns1/ns2.dns-parking.com`), así que **la zona DNS se edita en el panel de Hostinger**, no
en NIC.ar. El sitio sigue en Vercel (gratis): de Hostinger solo hace falta el DNS.

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
