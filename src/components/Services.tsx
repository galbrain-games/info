import { motion } from 'motion/react';
import { ArrowRight, Code2, Users, Cpu, CloudCog } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Fractional CTO Leadership',
      description: 'Our staff have over 20 years of IT experience guiding technical strategies, managing budgets, and aligning tech with business goals.',
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: 'Generative AI Integration',
      description: 'Implementing custom AI models, Python-based automations, and robust Docker/Wayland containers for cost-effective AI solutions.',
      icon: <Cpu className="w-6 h-6 text-white" />,
    },
    {
      title: 'Team Scaling & Mentorship',
      description: 'Building and mentoring distributed tech teams across SEA, introducing Agile SCRUM and QA processes for improved delivery.',
      icon: <Code2 className="w-6 h-6 text-white" />,
    },
    {
      title: 'Cloud Optimization',
      description: 'Architecting scalable deployments and reducing infrastructure costs on AWS, Google Cloud, and Kubernetes environments.',
      icon: <CloudCog className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-indigo-950 mb-4"
          >
            Scale Value and Slash Costs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Leveraging two decades of experience to scale your technology, optimize costs, and build high-performing teams across South East Asia and Australia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-indigo-950 leading-tight">{service.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-snug">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
