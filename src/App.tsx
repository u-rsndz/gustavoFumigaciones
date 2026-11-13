import { useState, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Bug,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Home,
  Leaf,
  Menu,
  MessageCircle,
  Phone,
  Rat,
  Shield,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  TreePine,
  Warehouse,
  X,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const whatsappNumber = '523327899447'
const whatsappLink = `https://wa.me/${whatsappNumber}`

const services = [
  {
    icon: Bug,
    title: 'Plagas urbanas',
    description: 'Eliminamos cucarachas, hormigas, arañas y otras plagas con tratamientos dirigidos.',
    tag: 'Hogar y negocio',
  },
  {
    icon: Rat,
    title: 'Control de roedores',
    description: 'Protección integral con puntos de control y recomendaciones para prevenir su regreso.',
    tag: 'Prevención incluida',
  },
  {
    icon: TreePine,
    title: 'Termitas y polilla',
    description: 'Inspección especializada y soluciones para proteger estructuras, muebles y madera.',
    tag: 'Diagnóstico experto',
  },
  {
    icon: Sparkles,
    title: 'Desinfección',
    description: 'Tratamientos profesionales para ayudar a mantener espacios más limpios y protegidos.',
    tag: 'Espacios saludables',
  },
  {
    icon: Warehouse,
    title: 'Servicio industrial',
    description: 'Planes de manejo de plagas para bodegas, comercios, oficinas e instalaciones.',
    tag: 'Planes a la medida',
  },
]

const steps = [
  {
    number: '01',
    title: 'Inspección y diagnóstico',
    description: 'Escuchamos tu caso, revisamos el espacio y encontramos el origen del problema.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Aplicación segura',
    description: 'Elegimos el tratamiento adecuado y te explicamos cómo prepararte antes de aplicarlo.',
    icon: SprayCan,
  },
  {
    number: '03',
    title: 'Seguimiento y garantía',
    description: 'Te damos recomendaciones claras y acompañamiento para proteger tus espacios.',
    icon: CheckCircle2,
  },
]

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className="flex items-center gap-3" href="#inicio" aria-label="Fumigaciones Gustavo Bocanegra, inicio">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-900 text-white shadow-lg shadow-emerald-950/15">
        <Shield className="size-6" strokeWidth={1.8} />
        <Leaf className="-ml-2.5 mt-2 size-3.5 text-amber-400" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-sm font-extrabold tracking-tight sm:text-[15px] ${inverse ? 'text-white' : 'text-slate-950'}`}>
          Fumigaciones
        </span>
        <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${inverse ? 'text-emerald-100/70' : 'text-slate-500'}`}>
          Gustavo Bocanegra
        </span>
      </span>
    </a>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string
  title: string
  description: string
  light?: boolean
}) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${light ? 'text-emerald-200' : 'text-emerald-800'}`}>
        <span className={`h-px w-5 ${light ? 'bg-emerald-300/70' : 'bg-emerald-700/50'}`} />
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[46px] ${light ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      <p className={`mx-auto mt-4 max-w-xl text-base leading-7 ${light ? 'text-emerald-50/75' : 'text-slate-600'}`}>
        {description}
      </p>
    </motion.div>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['Inicio', '#inicio'],
    ['Servicios', '#servicios'],
    ['Proceso', '#proceso'],
    ['Por qué elegirnos', '#nosotros'],
    ['Contacto', '#contacto'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10" aria-label="Navegación principal">
        <Brand />
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[13px] font-semibold text-slate-600 transition hover:text-emerald-800">
              {label}
            </a>
          ))}
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-[13px] font-bold text-emerald-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-300 sm:inline-flex"
        >
          <MessageCircle className="size-4" />
          Cotizar por WhatsApp
        </a>
        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-2 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700">
                {label}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3.5 text-sm font-bold text-emerald-950">
              <MessageCircle className="size-4" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3.5 py-2 text-xs font-bold text-emerald-900 shadow-sm">
            <span className="flex size-6 items-center justify-center rounded-full bg-emerald-100">
              <Leaf className="size-3.5" />
            </span>
            Cuidado profesional, tranquilidad real
          </div>
          <h1 className="max-w-2xl text-[42px] font-bold leading-[1.06] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[66px]">
            Tu espacio, <span className="text-emerald-800">libre de plagas.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Protección experta para tu hogar y negocio. Tratamientos responsables, productos seguros para tu familia y mascotas, y atención cercana en cada paso.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-sm font-extrabold text-emerald-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-300">
              Agendar inspección gratis
              <ArrowRight className="size-4" />
            </a>
            <a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-800">
              Ver servicios
              <ArrowDown className="size-4" />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
            {['Certificación sanitaria', 'Garantía por escrito', 'Atención 24/7'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
                <Check className="size-4 text-emerald-700" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          <div className="absolute -right-4 -top-5 z-10 hidden h-24 w-24 rounded-full border border-emerald-200/80 sm:block" />
          <div className="relative aspect-[1.1/1] overflow-hidden rounded-[2rem] bg-emerald-100 shadow-2xl shadow-emerald-950/15 sm:aspect-[1.12/0.93]">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
              alt="Interior luminoso y protegido de un hogar"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-white/10" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[330px] sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <ShieldCheck className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">Protección que se siente</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">Cuidamos lo que más importa con soluciones a tu medida.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-slate-900/10 sm:flex">
            <span className="flex size-9 items-center justify-center rounded-full bg-amber-100 text-amber-700"><Star className="size-4 fill-current" /></span>
            <span className="text-xs font-bold text-slate-800">Atención personalizada</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Soluciones profesionales"
          title="Un plan para cada plaga"
          description="Desde una visita preventiva hasta un programa integral: nos ocupamos del problema con un tratamiento pensado para tu espacio."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                className={`group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/10 ${index < 2 ? 'lg:col-span-2' : 'lg:col-span-2'}`}
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{service.title}</h3>
                <p className="mt-2 min-h-[3.5rem] text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">{service.tag}</span>
                  <a href="#contacto" className="flex size-8 items-center justify-center rounded-full text-emerald-800 transition group-hover:bg-amber-100" aria-label={`Cotizar ${service.title}`}>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Así de sencillo"
          title="De la primera llamada a la tranquilidad"
          description="Un proceso transparente, sin complicaciones y acompañado por expertos."
        />
        <div className="relative mt-14 grid gap-8 md:grid-cols-3 md:gap-5 lg:mt-16">
          <div className="absolute left-[17%] right-[17%] top-8 hidden border-t border-dashed border-emerald-300 md:block" />
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-emerald-100 bg-white text-emerald-800 shadow-md shadow-emerald-950/5">
                  <Icon className="size-7" strokeWidth={1.7} />
                  <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-emerald-800 text-[10px] font-extrabold text-white">{step.number}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Difference() {
  const benefits = [
    'Productos biodegradables y seleccionados con cuidado',
    'Tratamientos prácticos para tu rutina diaria',
    'Atención personalizada, supervisada por Gustavo Bocanegra',
  ]

  return (
    <section id="nosotros" className="scroll-mt-24 bg-emerald-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-200">
            <Leaf className="size-3.5" /> Tranquilidad desde el primer día
          </span>
          <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[46px]">
            Experiencia cercana. <span className="text-emerald-300">Protección responsable.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-emerald-50/75">
            Cada espacio es diferente. Por eso combinamos experiencia, atención directa y recomendaciones sencillas para cuidar tu hogar o negocio.
          </p>
          <a href="#contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-amber-300">
            Hablemos de tu caso <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <Check className="size-5" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-bold leading-6 text-white">{benefit}</p>
                <p className="mt-1 text-sm leading-6 text-emerald-50/60">
                  {index === 0 && 'Buscamos opciones efectivas y responsables para el entorno.'}
                  {index === 1 && 'Te orientamos sobre el uso y las indicaciones de cada servicio.'}
                  {index === 2 && 'Una persona de confianza pendiente de todo el proceso.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [property, setProperty] = useState('')
  const [pest, setPest] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = [
      'Hola, quiero solicitar una cotización de fumigación.',
      `Nombre: ${name.trim()}`,
      `Teléfono: ${phone.trim()}`,
      `Tipo de propiedad: ${property}`,
      `Plaga o servicio: ${pest}`,
    ].join('\n')
    window.location.href = `${whatsappLink}?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="contacto" className="scroll-mt-24 bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
            <span className="h-px w-5 bg-emerald-700/50" /> Atención directa
          </span>
          <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[46px]">
            Cuéntanos qué necesitas. Nosotros te ayudamos.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
            Comparte algunos detalles y te contactamos por WhatsApp para orientarte y preparar tu cotización.
          </p>
          <div className="mt-8 space-y-4">
            <a href={`tel:+${whatsappNumber}`} className="flex items-center gap-3 text-sm font-semibold text-slate-700 transition hover:text-emerald-800">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-sm"><Phone className="size-4" /></span>
              +52 33 2789 9447
            </a>
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-sm"><Clock3 className="size-4" /></span>
              Atención 24/7 · Todos los días
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.25)] sm:p-8 lg:p-9">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-950">Cotización rápida</h3>
              <p className="mt-1 text-sm text-slate-500">Sin compromiso. Te respondemos por WhatsApp.</p>
            </div>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
              <MessageCircle className="size-5" />
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-bold text-slate-700">
              Nombre
              <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Tu nombre" autoComplete="name" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10" />
            </label>
            <label className="text-xs font-bold text-slate-700">
              Teléfono
              <input required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="33 1234 5678" autoComplete="tel" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10" />
            </label>
            <label className="text-xs font-bold text-slate-700">
              Tipo de propiedad
              <span className="relative mt-2 block">
                <Home className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <select required value={property} onChange={(event) => setProperty(event.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-10 text-sm font-normal text-slate-700 outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10">
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Casa</option>
                  <option>Negocio</option>
                  <option>Bodega</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              </span>
            </label>
            <label className="text-xs font-bold text-slate-700">
              Plaga o servicio
              <span className="relative mt-2 block">
                <Bug className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <select required value={pest} onChange={(event) => setPest(event.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-10 text-sm font-normal text-slate-700 outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10">
                  <option value="" disabled>¿Qué necesitas tratar?</option>
                  <option>Cucarachas, hormigas o arañas</option>
                  <option>Roedores</option>
                  <option>Termitas o polilla</option>
                  <option>Desinfección</option>
                  <option>Servicio comercial o industrial</option>
                  <option>Otro</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              </span>
            </label>
          </div>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-900">
            <MessageCircle className="size-4" />
            Enviar por WhatsApp
            <ArrowRight className="size-4" />
          </button>
          <p className="mt-4 text-center text-[11px] leading-5 text-slate-500">
            Al continuar, WhatsApp se abrirá con tu solicitud lista para enviar.
          </p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white px-5 pb-7 pt-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-slate-200 pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Soluciones profesionales de control de plagas para hogares, comercios e industrias.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-900">Contacto</h3>
            <a href={`tel:+${whatsappNumber}`} className="mt-4 block text-sm text-slate-600 transition hover:text-emerald-800">+52 33 2789 9447</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-2 block text-sm text-slate-600 transition hover:text-emerald-800">WhatsApp directo</a>
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-900">Horario</h3>
            <p className="mt-4 text-sm text-slate-600">Atención 24/7</p>
            <p className="mt-2 text-sm text-slate-500">Todos los días</p>
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-900">Cobertura</h3>
            <p className="mt-4 text-sm text-slate-600">Guadalajara y alrededores</p>
            <p className="mt-2 text-sm text-slate-500">Consulta disponibilidad en tu zona.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fumigaciones Gustavo Bocanegra. Todos los derechos reservados.</p>
          <details id="privacidad" className="group max-w-xl">
            <summary className="cursor-pointer list-none font-semibold transition hover:text-emerald-800">
              Aviso de privacidad
            </summary>
            <p className="mt-2 leading-5 text-slate-500">
              Los datos del formulario se incluyen en el mensaje que eliges enviar por WhatsApp y se utilizan para atender tu solicitud de cotización.
            </p>
          </details>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Difference />
        <QuoteForm />
      </main>
      <Footer />
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-950/25 transition hover:-translate-y-1 hover:bg-emerald-700 sm:bottom-7 sm:right-7"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  )
}

export default App
