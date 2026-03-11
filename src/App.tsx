import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Leaf, Hexagon, ArrowUpRight, QrCode, X, Mail, Phone, MapPin, CheckCircle2
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { staggerChildren: 0.15 }
};

function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-oat-white/80 backdrop-blur-xl border-b border-sage-green/10 shadow-sm"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-green to-teal-800 flex items-center justify-center shadow-lg shadow-sage-green/20 group-hover:scale-105 transition-transform duration-300">
            <Hexagon className="w-6 h-6 text-white absolute opacity-50" />
            <Leaf className="w-5 h-5 text-white relative z-10" />
          </div>
          <span className="text-xl font-bold tracking-tight text-rock-gray">
            循旸信息科技
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['首页', '关于我们', '碳服务', '理迹生活', '解决方案'].map(item => (
            <a key={item} href={`#${item}`} className="text-sm font-medium text-rock-gray/70 hover:text-sage-green transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <button className="hidden md:flex items-center gap-2 bg-teal-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sage-green transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
          联系我们 <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="首页" className="min-h-[100dvh] w-full relative flex items-center justify-center overflow-hidden">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2560&auto=format&fit=crop" 
          alt="Deep Forest" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Fades to oat-white at the bottom to blend with the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white/90 via-oat-white/70 to-oat-white"></div>
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center h-full pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sage-green/30 bg-white/60 backdrop-blur-md mb-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <span className="flex h-2 w-2 rounded-full bg-sage-green animate-pulse"></span>
          <span className="text-sm font-semibold tracking-wider text-sage-green uppercase">rejinode 理迹生活</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-rock-gray mb-6 leading-tight"
        >
          双碳时代 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-green to-teal-700">绿色伙伴</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-rock-gray/80 mb-10 font-medium flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"
        >
          <span>碳业务全链条服务</span>
          <span className="hidden md:inline text-sage-green/30">|</span>
          <span>低碳产品创新矩阵</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto relative mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-sage-green text-white px-8 py-4 rounded-full hover:bg-teal-800 transition-all duration-300 shadow-lg shadow-sage-green/30 flex items-center justify-center gap-2 font-medium group">
              开启低碳合作之旅 <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="关于我们" className="min-h-[100dvh] w-full relative flex items-center overflow-hidden py-24">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
          alt="Forest Path" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Starts with oat-white, fades to semi-transparent, ends with oat-white */}
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white via-oat-white/70 to-oat-white"></div>
      </motion.div>

      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rock-gray mb-2">
              关于我们
            </h2>
            <p className="text-sage-green font-mono uppercase tracking-widest text-sm font-semibold">About Us</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-[60vh]">
          {/* Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="lg:col-span-5 flex flex-col justify-center h-full space-y-10"
          >
            <motion.div variants={fadeIn} className="pl-6 border-l-2 border-sage-green/30 hover:border-sage-green transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-rock-gray">公司定位</h3>
              <p className="text-rock-gray/80 leading-relaxed text-lg">
                创新型低碳综合服务商，专注“双碳”领域的创新型科技企业。
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="pl-6 border-l-2 border-sage-green/30 hover:border-sage-green transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-rock-gray">核心优势</h3>
              <p className="text-rock-gray/80 leading-relaxed text-lg mb-4">
                打通“碳服务+碳产品”双赛道，提供一体化解决方案。
              </p>
              <div className="flex flex-wrap gap-2">
                {['咨询', '技术', '产品', '金融'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm text-teal-800 text-sm font-medium border border-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="pl-6 border-l-2 border-sage-green/30 hover:border-sage-green transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-rock-gray">使命与愿景</h3>
              <p className="text-rock-gray/80 leading-relaxed text-lg">
                助力企业从“被动合规”转向“主动获益”；成为国内领先的低碳转型伙伴。
              </p>
            </motion.div>
          </motion.div>

          {/* Large Image */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="lg:col-span-7 h-[60vh] lg:h-full rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-sage-green/10 group border-4 border-white/50"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Corporate Office" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rock-gray/60 via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CarbonServices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    { num: "01", title: "碳管理与咨询服务", desc: "现状诊断、核算与合规、体系搭建", details: "为企业提供全面的碳排放现状诊断，精准核算碳足迹，确保符合国内外合规要求，并协助搭建完善的内部碳管理体系。", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" },
    { num: "02", title: "碳交易与碳资产管理", desc: "资产盘点、全品类交易、资产托管", details: "全面盘点企业碳资产，提供全品类碳交易撮合服务，并通过专业的资产托管实现碳资产的保值增值。", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" },
    { num: "03", title: "降碳技术研发与创新", desc: "技术适配、CCER方法学开发", details: "针对不同行业特点进行降碳技术适配，并主导或参与CCER（国家核证自愿减排量）方法学的开发与创新。", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" },
    { num: "04", title: "绿色金融与碳融资", desc: "碳资产融资、绿色信贷、投融资对接", details: "依托碳资产为企业打通融资渠道，对接绿色信贷资源，提供从评估到落地的全流程投融资对接服务。", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" },
    { num: "05", title: "低碳能力建设服务", desc: "定制化培训、组织赋能、内部考核", details: "为企业量身定制低碳知识培训体系，赋能组织内部人员，并将碳表现纳入企业内部考核机制。", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" },
    { num: "06", title: "企业碳管理数字化平台", desc: "数据采集、碳核算分析、合规预警", details: "搭建一站式数字化管理平台，实现碳排放数据的自动化采集、实时核算分析及智能合规预警。", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <section ref={ref} id="碳服务" className="min-h-[100dvh] w-full relative flex flex-col justify-center overflow-hidden py-24">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2560&auto=format&fit=crop" 
          alt="Green Leaves" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white via-oat-white/80 to-oat-white"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rock-gray mb-2">
            碳业务全链条服务
          </h2>
          <p className="text-teal-800 font-mono uppercase tracking-widest text-sm font-semibold">Carbon Services</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="flex flex-col lg:flex-row gap-6 lg:gap-10 h-[80vh] lg:h-[70vh] w-full"
        >
          {/* Left: Image Display */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full rounded-[2.5rem] overflow-hidden relative shadow-2xl border-4 border-white/50 group bg-rock-gray/10">
            <AnimatePresence>
              <motion.img
                key={activeService}
                src={services[activeService].img}
                alt={services[activeService].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-rock-gray/60 via-transparent to-transparent opacity-60 pointer-events-none z-10"></div>
          </div>

          {/* Right: Vertical Strips Accordion */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-row gap-2 md:gap-3">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <motion.div 
                  layout
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  className={`relative h-full rounded-2xl md:rounded-[2rem] cursor-pointer overflow-hidden border backdrop-blur-md transition-colors duration-500
                    ${isActive ? 'flex-1 bg-white/60 border-white/80 shadow-lg' : 'w-12 md:w-16 flex-shrink-0 bg-white/20 border-white/30 hover:bg-white/40'}
                  `}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Inactive State Content (Vertical Text) */}
                  <div className={`absolute inset-0 flex flex-col items-center py-5 md:py-8 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-200'}`}>
                    <span className="text-lg md:text-2xl font-mono font-bold text-teal-800/40 mb-4">{service.num}</span>
                    <span className="text-rock-gray font-bold tracking-widest whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      {service.title}
                    </span>
                  </div>
                  
                  {/* Active State Content */}
                  <div className={`absolute inset-0 flex flex-col justify-start pt-8 md:pt-12 px-5 md:px-8 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 -translate-y-12 pointer-events-none'}`}>
                    <div className="text-3xl md:text-5xl font-mono font-bold text-teal-800/20 mb-2 md:mb-4 flex-shrink-0">
                      {service.num}
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-teal-900 leading-tight mb-3 md:mb-4 flex-shrink-0 whitespace-normal break-words">
                      {service.title}
                    </h3>
                    <div className="w-8 md:w-10 h-1 bg-sage-green/50 mb-4 md:mb-5 rounded-full flex-shrink-0"></div>
                    <div className="overflow-y-auto no-scrollbar pr-2 pb-4 flex-grow">
                      <p className="text-teal-800 font-bold mb-2 text-sm md:text-base">{service.desc}</p>
                      <p className="text-rock-gray/80 leading-relaxed text-xs md:text-sm">{service.details}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GreenProducts() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products = [
    { title: "文创办公组合", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop", details: "采用环保再生材料制作的办公用品组合，兼具实用性与美学设计，让日常办公也能践行低碳理念。" },
    { title: "绿色疗愈小物", img: "https://images.unsplash.com/photo-1608501821300-4f99e58bba77?q=80&w=800&auto=format&fit=crop", details: "以自然植物和环保材质打造的桌面疗愈好物，为繁忙的都市生活带来一抹生机与宁静。" },
    { title: "户外绿游装备", img: "https://images.unsplash.com/photo-1504280390227-351a2d052e5b?q=80&w=800&auto=format&fit=crop", details: "专为户外爱好者设计的低碳出行装备，采用可降解或循环利用材质，减少对自然环境的负担。" },
    { title: "永续开运/节庆", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop", details: "结合传统文化与现代环保理念的节庆礼品，传递美好祝福的同时，倡导可持续的生活方式。" },
  ];

  const tags = ['再生资源', '资源循环', '材质优先', '智能避碳', '碳足迹标签', '环保美学'];

  return (
    <section ref={ref} id="理迹生活" className="min-h-[100dvh] w-full relative flex flex-col justify-center overflow-hidden py-24">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?q=80&w=2560&auto=format&fit=crop" 
          alt="Bamboo Texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white via-oat-white/80 to-oat-white"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Title Area */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="lg:w-1/3 flex flex-col justify-center items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sage-green/30 bg-sage-green/10 mb-8">
              <span className="text-xs font-bold tracking-wider text-sage-green uppercase">rejinode 理迹生活</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-rock-gray tracking-tight">
              绿色创新品牌
            </h2>
            <p className="text-sage-green font-mono uppercase tracking-widest text-sm font-semibold mb-6">Green Products</p>
          </motion.div>

          {/* Right 2x2 3D Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="lg:w-2/3 grid grid-cols-2 gap-6 w-full max-w-4xl"
            style={{ perspective: "1200px" }}
          >
            {products.map((product, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5, rotateX: index < 2 ? 5 : -5, zIndex: 10 }}
                onClick={() => setActiveProduct(index)}
                className="group cursor-pointer rounded-[2rem] overflow-hidden relative shadow-2xl border-2 border-white/50 h-[30vh] lg:h-[40vh] transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-rock-gray/90 via-rock-gray/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center text-center transform translate-z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                    {product.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee at the absolute bottom of the section */}
      <div className="absolute bottom-0 left-0 w-full py-4 bg-sage-green/20 backdrop-blur-md border-t border-white/20 z-20">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
            <div key={i} className="flex items-center mx-6">
              <span className="text-lg font-bold text-teal-900 uppercase tracking-widest">{tag}</span>
              <span className="mx-6 text-teal-900/30">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover/Click Modal Popup */}
      <AnimatePresence>
        {activeProduct !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-rock-gray/40 backdrop-blur-sm p-6"
            onClick={() => setActiveProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-2xl p-10 rounded-[2.5rem] max-w-lg w-full shadow-2xl border border-white relative overflow-hidden"
            >
              <button 
                onClick={() => setActiveProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-oat-white flex items-center justify-center text-rock-gray hover:bg-sage-green hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="h-48 -mx-10 -mt-10 mb-8 relative">
                <img src={products[activeProduct].img} alt={products[activeProduct].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>

              <h3 className="text-3xl font-bold mb-4 text-teal-900">
                {products[activeProduct].title}
              </h3>
              <div className="h-px w-full bg-gradient-to-r from-sage-green/30 to-transparent mb-6"></div>
              <p className="text-lg text-rock-gray/80 leading-relaxed">
                {products[activeProduct].details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Solutions() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="解决方案" className="min-h-[100dvh] w-full relative flex flex-col justify-center overflow-hidden py-24">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2560&auto=format&fit=crop" 
          alt="Mountains" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Fades from oat-white to teal-950 to transition smoothly into the dark footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white via-oat-white/80 to-teal-950/90"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rock-gray mb-2">
              解决方案与合作模式
            </h2>
            <p className="text-sage-green font-mono uppercase tracking-widest text-sm font-semibold">Solutions & Cooperation</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="bg-white/60 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white shadow-xl shadow-sage-green/10 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden flex flex-col justify-center group"
          >
            <div className="absolute -right-4 -top-10 text-[200px] font-bold text-sage-green/10 font-mono leading-none">01</div>
            <h3 className="text-4xl font-bold mb-10 text-teal-900 relative z-10">
              企业定制服务
            </h3>
            <div className="flex flex-col gap-4 relative z-10">
              {['品牌定制', '功能定制', '场景定制'].map((item, i) => (
                <div key={i} className="px-6 py-4 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md text-teal-900 text-xl font-bold shadow-sm flex items-center gap-4 hover:bg-white/80 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-sage-green" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="bg-teal-900/80 backdrop-blur-xl p-12 rounded-[2.5rem] border border-teal-800 shadow-xl hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute -right-4 -top-10 text-[200px] font-bold text-white/5 font-mono leading-none">02</div>
            <h3 className="text-4xl font-bold mb-10 text-white relative z-10">
              灵活合作方案
            </h3>
            <div className="space-y-6 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6">
                <h4 className="font-bold text-sage-green text-2xl mb-2 md:mb-0">碳业务合作</h4>
                <p className="text-white/70 font-mono text-sm">项目制 · 长期战略 · 模块化</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6">
                <h4 className="font-bold text-sage-green text-2xl mb-2 md:mb-0">低碳产品合作</h4>
                <p className="text-white/70 font-mono text-sm">批量采购 · 定制合作 · 联合开发</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between pt-2">
                <h4 className="font-bold text-sage-green text-2xl mb-2 md:mb-0">组合打包合作</h4>
                <p className="text-white/70 font-mono text-sm">碳业务 + 产品一站式</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <footer ref={ref} className="min-h-[100dvh] w-full relative flex flex-col justify-between overflow-hidden pt-24 pb-12">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?q=80&w=2560&auto=format&fit=crop" 
          alt="Forest Canopy" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Starts with teal-950 to match previous section, stays dark for footer text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/90 via-teal-900/95 to-teal-950"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center py-12"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-sage-green/20 flex items-center justify-center mb-6 border border-sage-green/30">
            <Leaf className="w-8 h-8 text-sage-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            开启低碳合作之旅
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            无论您是寻求专业的碳管理咨询，还是希望定制专属的绿色环保产品，循旸信息科技都将是您最可靠的绿色伙伴。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto bg-sage-green text-white px-8 py-3 rounded-full hover:bg-white hover:text-teal-900 transition-all duration-300 shadow-xl shadow-sage-green/20 flex items-center justify-center gap-2 text-base font-bold group">
              <Phone className="w-4 h-4" /> 联系我们
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-8">
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Hexagon className="w-4 h-4 text-sage-green"/> 核心业务</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>碳管理与咨询服务</li>
                <li>碳交易与碳资产管理</li>
                <li>绿色金融与碳融资</li>
                <li>企业碳管理数字化平台</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Leaf className="w-4 h-4 text-sage-green"/> 理迹生活</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>文创办公组合</li>
                <li>绿色疗愈小物</li>
                <li>户外绿游装备</li>
                <li>永续开运/节庆</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-sage-green"/> 联系方式</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>上海市黄浦区湖滨路168号</li>
                <li>无限极大厦26楼26115室</li>
                <li>contact@xunyang.tech</li>
                <li>400-123-4567</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-mono">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-sage-green" />
            <span>循旸信息科技 Xunyang Info Tech</span>
          </div>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="w-full overflow-x-hidden font-sans selection:bg-sage-green/30 selection:text-rock-gray bg-oat-white">
      <Navbar />
      <Hero />
      <About />
      <CarbonServices />
      <GreenProducts />
      <Solutions />
      <Footer />
    </div>
  );
}
