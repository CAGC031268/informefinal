import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  AlertTriangle, 
  Database, 
  Scale, 
  Users, 
  CheckCircle2, 
  Clock, 
  Lock, 
  TrendingUp, 
  Zap,
  LayoutDashboard,
  Gavel,
  Rocket,
  Info,
  Layers
} from "lucide-react";

const Section = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

const Card = ({ title, description, icon: Icon, priority }: { title: string; description: string; icon?: any; priority?: string }) => (
  <div className="bg-white p-8 border-l-4 border-slate-900 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
    <div className="flex justify-between items-start mb-4">
      {Icon && <Icon className="w-6 h-6 text-slate-700" />}
      {priority && (
        <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 ${
          priority === 'Alta' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'
        }`}>
          Prioridad {priority}
        </span>
      )}
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-3 font-serif italic">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

type TabType = 'diagnostico' | 'cumplimiento' | 'propuesta' | 'conclusiones';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('diagnostico');

  const tabs = [
    { id: 'diagnostico' as const, label: '1. Diagnóstico Operativo', icon: LayoutDashboard },
    { id: 'cumplimiento' as const, label: '2. Marco Legal y Ético', icon: Gavel },
    { id: 'propuesta' as const, label: '3. Acciones recomendadas', icon: Rocket },
    { id: 'conclusiones' as const, label: '4. Conclusiones', icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-slate-200">
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex flex-col items-center justify-center">
          <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2">DCC de la Universidad de Chile</p>
          <div className="text-[13.5px] uppercase tracking-[0.4em] font-medium text-slate-600 mb-1">
            Curso de Gobernanza, Regulación y Ética de Datos
          </div>
          <div className="text-[18px] uppercase tracking-[0.2em] font-black text-slate-900 flex items-center gap-3">
            <span>Informe Final de Proyecto</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
            <span className="font-medium text-slate-500">Marzo 2026</span>
          </div>
        </div>
      </header>

      {/* Secondary Header Info - Scrollable */}
      <div className="pt-24 w-full px-6 md:px-12 pb-0 hidden lg:block">
        <div className="max-w-7xl mx-auto relative">
          {/* Right Aligned Integrantes */}
          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-3">Integrantes</p>
            <div className="space-y-1.5 text-[11px] font-semibold text-slate-700">
              <p>Gabiela Ruiz</p>
              <p>Carlos González C.</p>
              <p>Sebastián Vásquez</p>
              <p>Claudio González P.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-2 pb-4 md:pt-4 md:pb-6 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">Gobernanza de Datos Académicos</h2>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-slate-900 mb-8">
            Registro, Consolidación y <span className="italic font-serif">Publicación de Calificaciones</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light mb-2">
            El proceso de calificación en Duoc UC articula datos de SAP, Blackboard, el portal de calificaciones y Experiencia Vivo en un ciclo de cinco etapas. El análisis revela fallas de precisión en el cálculo de notas y latencias críticas en la sincronización de resultados entre plataformas. Estas brechas generan confusión, aumentan la carga operativa y debilitan la confianza en el ecosistema digital. Bajo la Ley N° 21.719, fortalecer esta gobernanza es clave para garantizar la transparencia, integridad académica y el cumplimiento normativo institucional.
          </p>
        </motion.div>
      </div>

      {/* Tab Switcher */}
      <div className="sticky top-20 bg-white z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex overflow-x-auto no-scrollbar gap-8 md:gap-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 py-4 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-slate-900' : 'text-slate-300'}`} />
                <span className="text-[11px] uppercase tracking-widest font-bold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="min-h-[60vh]">
        <AnimatePresence mode="wait">
          {activeTab === 'diagnostico' && (
            <div key="diagnostico">
              {/* Ecosistema */}
              <Section className="bg-slate-900 text-white !max-w-none !px-0">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-3xl font-light mb-8 italic font-serif">Contexto Institucional</h2>
                    <p className="text-slate-400 leading-relaxed mb-8">
                      El proceso de calificación es un activo institucional crítico que depende de la articulación coordinada de cuatro plataformas clave:
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: 'SAP', desc: 'Núcleo administrativo-académico: base oficial de matrícula y asignación.' },
                        { title: 'Blackboard', desc: 'Entorno de aprendizaje: registro y procesamiento de evaluaciones.' },
                        { title: 'Portal de Calificaciones', desc: 'Consolidación y visualización oficial de resultados académicos.' },
                        { title: 'Experiencia Vivo', desc: 'Portal de estudiantes: canal de consulta y experiencia del alumno.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center shrink-0 text-slate-300 text-xs font-bold">{i+1}</div>
                          <div>
                            <h4 className="font-bold text-sm tracking-wide uppercase mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-video bg-slate-800/50 border border-slate-700 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Layers className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Modelo Centralizado Actual</p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Riesgos */}
              <Section>
                <div className="mb-12">
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-4">Ciclo de Vida del Dato</h2>
                  <h3 className="text-4xl font-light tracking-tight">Riesgos y Vulnerabilidades</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card 
                    icon={AlertTriangle}
                    title="Procesamiento"
                    description="Errores de precisión en fórmulas aplicadas sobre puntajes y no sobre notas, afectando decisiones de aprobación."
                  />
                  <Card 
                    icon={Clock}
                    title="Compartición"
                    description="Desfase de actualización entre Blackboard y la vista oficial, generando confusión y pérdida de confianza."
                  />
                  <Card 
                    icon={Users}
                    title="Recolección"
                    description="Riesgos de duplicidad o ausencia de usuarios en plataformas debido a errores en la captura de matrícula."
                  />
                  <Card 
                    icon={Lock}
                    title="Almacenamiento"
                    description="Pérdida de trazabilidad o acceso no delimitado al resguardo del historial académico y evidencias."
                  />
                  <Card 
                    icon={TrendingUp}
                    title="Retención"
                    description="Conservación de datos más allá de lo necesario o sin reglas claras de acceso posterior al proceso."
                  />
                  <Card 
                    icon={Info}
                    title="Gobernanza Débil"
                    description="Distribución insuficiente de responsabilidades operativas, causando cuellos de botella en niveles centrales."
                  />
                </div>
              </Section>
            </div>
          )}

          {activeTab === 'cumplimiento' && (
            <div key="cumplimiento">
              <Section className="bg-slate-50 border-b border-slate-100 !max-w-none !px-0">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="max-w-3xl">
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">Análisis Regulatorio</h2>
                    <h3 className="text-4xl font-light mb-6 leading-tight">
                      Foco en la <span className="italic font-serif">Ley N° 21.719</span>
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-12 font-light text-lg">
                      La gestión de calificaciones trasciende lo administrativo para convertirse en un pilar de responsabilidad legal y ética. La Ley N° 21.719 redefine los estándares de seguridad y resiliencia para la infraestructura de información institucional, exigiendo una gobernanza robusta que garantice la integridad de los datos académicos y el respeto a los derechos fundamentales de los estudiantes en el entorno digital.
                    </p>
                    <div className="space-y-12">
                      <div className="flex gap-8">
                        <div className="shrink-0 pt-2"><ShieldCheck className="w-8 h-8 text-slate-900" /></div>
                        <div>
                          <h4 className="text-xl font-semibold mb-3">Deber de Información y Finalidad</h4>
                          <p className="text-slate-600 leading-relaxed">
                            El tratamiento de datos académicos exige claridad sobre el propósito y los responsables. La opacidad en el flujo puede transformarse en un riesgo regulatorio relevante ante la nueva normativa.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <div className="shrink-0 pt-2"><Scale className="w-8 h-8 text-slate-900" /></div>
                        <div>
                          <h4 className="text-xl font-semibold mb-3">Derecho de Rectificación</h4>
                          <p className="text-slate-600 leading-relaxed">
                            Debe existir un camino claro para que el estudiante solicite correcciones. Publicar datos desactualizados debilita el principio de finalidad y el ejercicio de derechos del titular.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
              <Section>
                <div className="mb-12">
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-4">Consideraciones Éticas</h2>
                  <h3 className="text-4xl font-light tracking-tight">Transparencia e Impacto</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card 
                    icon={Info}
                    title="Asimetría de Información"
                    description="La institución conoce la complejidad del flujo, pero el estudiante solo ve el resultado, limitando su capacidad de cuestionar decisiones."
                  />
                  <Card 
                    icon={Users}
                    title="Impacto Desigual"
                    description="Los errores de calidad afectan de forma diferenciada, influyendo en la carga emocional y la percepción de justicia institucional."
                  />
                </div>
              </Section>
            </div>
          )}

          {activeTab === 'propuesta' && (
            <div key="propuesta">
              <Section>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                  <div>
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-4">Propuesta de Mejoras</h2>
                    <h3 className="text-4xl font-light tracking-tight">Acciones recomendadas</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      <div className="w-3 h-3 bg-red-100 border border-red-200" /> Alta
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      <div className="w-3 h-3 bg-blue-100 border border-blue-200" /> Media
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <Card 
                    priority="Alta"
                    title="Formalización de Política"
                    description="Definir fuente oficial por etapa, validaciones mínimas y trazabilidad de correcciones para reducir ambigüedad."
                  />
                  <Card 
                    priority="Alta"
                    title="Establecimiento de SLA"
                    description="Fijar tiempos de actualización y resolución de discrepancias entre plataformas para mejorar la oportunidad del dato."
                  />
                  <Card 
                    priority="Media"
                    title="Esquema Federado"
                    description="Habilitar responsables funcionales por sede o dominio con atribuciones controladas para agilizar ajustes menores."
                  />
                  <Card 
                    priority="Media"
                    title="Indicadores de Calidad"
                    description="Implementar métricas de precisión, consistencia y tiempo de actualización para monitorear y corregir fallas recurrentes."
                  />
                </div>

                {/* Impacto Estratégico */}
                <div className="bg-slate-900 text-white p-12 md:p-16 rounded-2xl">
                  <div className="text-center mb-16">
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-500 mb-4">Resultados Esperados</h2>
                    <h3 className="text-3xl font-light italic font-serif">Fortalecimiento de la Gobernanza</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { icon: CheckCircle2, label: 'Legitimidad', desc: 'Información confiable.' },
                      { icon: TrendingUp, label: 'Agilidad', desc: 'Respuesta eficiente.' },
                      { icon: Zap, label: 'Consistencia', desc: 'Datos alineados.' },
                      { icon: ShieldCheck, label: 'Cumplimiento', desc: 'Adecuación legal.' }
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <item.icon className="w-6 h-6 text-slate-400 mx-auto mb-4" />
                        <h4 className="font-bold text-[10px] uppercase tracking-widest mb-2">{item.label}</h4>
                        <p className="text-[10px] text-slate-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>
            </div>
          )}

          {activeTab === 'conclusiones' && (
            <div key="conclusiones">
              <Section className="bg-slate-50 border-b border-slate-100 !max-w-none !px-0">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">Síntesis Final</h2>
                    <h3 className="text-4xl font-light mb-8 leading-tight">
                      Hacia una <span className="italic font-serif">Gobernanza Resiliente</span>
                    </h3>
                    <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
                      <p>
                        El análisis integral del proceso de calificaciones en Duoc UC revela que la modernización tecnológica debe ir acompañada de una evolución profunda en la gobernanza de datos. La transición hacia un modelo federado no es solo una mejora operativa, sino una respuesta necesaria a las exigencias de la <strong>Ley N° 21.719</strong>.
                      </p>
                      <p>
                        La eliminación de la opacidad en los flujos de información y el fortalecimiento de la trazabilidad son imperativos éticos que protegen la integridad académica y la confianza del estudiante en la institución.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                      <img 
                        src="https://picsum.photos/seed/governance/800/600?grayscale&blur=1" 
                        alt="Gobernanza Digital" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
                    </div>
                  </div>
                </div>
              </Section>
              
              <Section>
                <div className="grid md:grid-cols-3 gap-12">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 border-b border-slate-200 pb-2">Integridad</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Garantizar que cada calificación refleje con exactitud el desempeño académico, eliminando errores de procesamiento y latencias críticas.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 border-b border-slate-200 pb-2">Transparencia</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Proporcionar flujos de información claros y auditables, permitiendo que tanto docentes como alumnos comprendan el origen y estado de sus datos.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 border-b border-slate-200 pb-2">Resiliencia</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Construir una infraestructura de información capaz de adaptarse a cambios regulatorios y tecnológicos, asegurando la continuidad del servicio.
                    </p>
                  </div>
                </div>
              </Section>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer / Conclusion */}
      <footer className="py-20 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light mb-8 italic font-serif">Conclusión</h2>
            <p className="text-slate-600 leading-relaxed mb-12 text-sm">
              El análisis concluye que la institución requiere evolucionar hacia una lógica federada con reglas más visibles y tiempos mejor definidos. 
              El objetivo es fortalecer la legitimidad del dato como información explicable y alineada con los derechos de las personas.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12 border-t border-slate-200">
              <div className="text-left">
                <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-1">Elaborado por</p>
                <p className="text-xs font-medium">Ruiz, González C., Vásquez, González P.</p>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden md:block" />
              <div className="text-left">
                <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-1">Institución</p>
                <p className="text-sm font-medium">Duoc UC - Marzo 2026</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
